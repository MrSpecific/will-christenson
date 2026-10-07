import { Hono } from 'hono'
import { EntryList } from '../components/EntryList'
import type { AppEnv } from '../env'
import { experiments } from '../experiments'
import { visible } from '../lib/preview'

const lab = new Hono<AppEnv>()

lab.get('/', (c) =>
  c.render(
    <section>
      <h1>Experiments</h1>
      <EntryList
        entries={visible(experiments, c.var.preview).map((e) => ({
          ...e,
          href: `/experiments/${e.slug}`,
        }))}
      />
    </section>,
    { title: 'Experiments' },
  ),
)

// Mount each experiment's own app under its slug. Draft experiments 404 outside preview mode.
for (const experiment of experiments) {
  if (experiment.draft) {
    lab.use(`/${experiment.slug}/*`, async (c, next) => (c.var.preview ? next() : c.notFound()))
  }
  lab.route(`/${experiment.slug}`, experiment.app)
}

export default lab
