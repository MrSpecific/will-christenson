type Sample = { rtt: number; offset: number; colo: string }

const root = document.querySelector<HTMLElement>('[data-edge-clock]')
const button = document.querySelector<HTMLButtonElement>('[data-action="rerun"]')

// Build the API URL from the page URL so the experiment doesn't hardcode its mount path.
const endpoint = `${location.pathname.replace(/\/$/, '')}/api/now`

async function sample(): Promise<Sample> {
  const start = Date.now()
  const res = await fetch(endpoint, { cache: 'no-store' })
  const end = Date.now()
  const { now, colo } = (await res.json()) as { now: number; colo: string }
  const rtt = end - start
  return { rtt, offset: now - (start + rtt / 2), colo }
}

async function measure() {
  if (!root) return
  root.setAttribute('aria-busy', 'true')
  const samples: Sample[] = []
  for (let i = 0; i < 5; i++) samples.push(await sample())
  const best = samples.reduce((a, b) => (b.rtt < a.rtt ? b : a))

  show('offset', `${best.offset >= 0 ? '+' : ''}${Math.round(best.offset)} ms`)
  show('rtt', `${best.rtt} ms`)
  show('colo', best.colo)
  root.removeAttribute('aria-busy')
}

function show(field: string, value: string) {
  const el = root?.querySelector(`[data-field="${field}"]`)
  if (el) el.textContent = value
}

button?.addEventListener('click', measure)
measure()
