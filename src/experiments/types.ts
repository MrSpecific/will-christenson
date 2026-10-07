import type { Hono } from 'hono'
import type { AppEnv } from '../env'

export type ExperimentMeta = {
  title: string
  summary: string
  date: string // YYYY-MM-DD
  draft?: boolean
}

// What every `experiments/<slug>/index.tsx` must export.
export type ExperimentModule = {
  meta: ExperimentMeta
  default: Hono<AppEnv>
}
