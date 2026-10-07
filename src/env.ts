// The Hono environment shared by every route and sub-app.
// `CloudflareBindings` is generated from wrangler.jsonc + .dev.vars by `npm run cf-typegen`.
export type AppEnv = {
  Bindings: CloudflareBindings
  Variables: {
    // Set by the `preview` middleware: true when the request may see drafts.
    preview: boolean
  }
}
