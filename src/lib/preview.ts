import { getCookie, setCookie } from 'hono/cookie'
import { createMiddleware } from 'hono/factory'
import { timingSafeEqual } from 'hono/utils/buffer'
import type { AppEnv } from '../env'

const COOKIE = 'preview'

// Example of using a secret: visiting any page with `?preview=<PREVIEW_TOKEN>` unlocks
// drafts (posts and experiments) and remembers it in a cookie for the rest of the visit.
// The token comes from .dev.vars locally and `wrangler secret put PREVIEW_TOKEN` in prod.
export const preview = createMiddleware<AppEnv>(async (c, next) => {
  const secret = c.env.PREVIEW_TOKEN
  const fromQuery = c.req.query('preview')
  const candidate = fromQuery ?? getCookie(c, COOKIE)

  const allowed = Boolean(secret && candidate && (await timingSafeEqual(secret, candidate)))
  if (allowed && fromQuery) {
    setCookie(c, COOKIE, fromQuery, { httpOnly: true, secure: true, sameSite: 'Lax', path: '/' })
  }

  c.set('preview', allowed)
  await next()
})

export function visible<T extends { draft?: boolean }>(items: T[], preview: boolean) {
  return preview ? items : items.filter((item) => !item.draft)
}
