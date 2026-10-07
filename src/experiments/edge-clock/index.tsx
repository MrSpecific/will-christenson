import { Hono } from 'hono'
import { Script } from 'vite-ssr-components/hono'
import type { AppEnv } from '../../env'
import type { ExperimentMeta } from '../types'

export const meta: ExperimentMeta = {
  title: 'Edge clock',
  summary: "How far off is your device's clock from the Cloudflare data center serving this page?",
  date: '2026-10-06',
}

// Each experiment is its own Hono app, so it can own pages *and* API routes.
// Paths here are relative to /experiments/edge-clock.
const app = new Hono<AppEnv>()

app.get('/', (c) =>
  c.render(
    <article class="prose">
      <h1>{meta.title}</h1>
      <p>{meta.summary}</p>
      <dl class="readout" data-edge-clock>
        <dt>Clock offset</dt>
        <dd data-field="offset">…</dd>
        <dt>Round trip</dt>
        <dd data-field="rtt">…</dd>
        <dt>Data center</dt>
        <dd data-field="colo">…</dd>
      </dl>
      <button type="button" data-action="rerun">Measure again</button>
      <p class="muted">
        Takes several samples and keeps the fastest round trip, the same idea NTP uses. A positive
        offset means your clock is behind.
      </p>
      {/* Client code lives next to the experiment; the Vite plugin picks it up as a build entry. */}
      <Script src="/src/experiments/edge-clock/client.ts" />
    </article>,
    { title: meta.title, description: meta.summary },
  ),
)

app.get('/api/now', (c) => {
  // `cf` is attached by Cloudflare at the edge; it may be missing in local dev.
  const cf = (c.req.raw as Request & { cf?: { colo?: string } }).cf
  c.header('Cache-Control', 'no-store')
  return c.json({ now: Date.now(), colo: cf?.colo ?? 'unknown' })
})

export default app
