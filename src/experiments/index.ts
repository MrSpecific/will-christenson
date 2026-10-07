import type { ExperimentMeta, ExperimentModule } from './types'

// Every `experiments/<slug>/index.tsx` is an experiment, mounted at /experiments/<slug>.
const modules = import.meta.glob<ExperimentModule>('./*/index.tsx', { eager: true })

export type Experiment = ExperimentMeta & {
  slug: string
  app: ExperimentModule['default']
}

export const experiments: Experiment[] = Object.entries(modules)
  .map(([path, mod]) => ({ ...mod.meta, slug: path.split('/')[1], app: mod.default }))
  .sort((a, b) => b.date.localeCompare(a.date))
