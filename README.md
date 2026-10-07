# will-christenson

Personal site: a few informational pages, a blog, and a collection of experiments.
Hono + JSX, server-rendered on Cloudflare Workers, built with Vite.

```sh
npm install
cp .dev.vars.example .dev.vars   # then fill in values
npm run dev                      # local dev with hot reload
npm run typecheck
npm run deploy                   # build + wrangler deploy
```

## Layout

```
src/
  index.tsx            App entry: global middleware, mounts one sub-app per section, 404
  renderer.tsx         HTML document shell; c.render(<Page />, { title, description })
  site.ts              Site name, description, nav. Shared constants live here.
  env.ts               AppEnv type (bindings + context variables) used by every Hono app
  style.css            Global styles and color tokens

  routes/              One Hono sub-app per top-level section
    pages.tsx            /, /about (informational pages)
    blog.tsx             /blog, /blog/:slug
    experiments.tsx      /experiments, and mounts every experiment under its slug

  components/          JSX shared across sections (site chrome, lists)
  lib/                 Non-UI helpers (formatting, preview-mode middleware)

  blog/
    posts.ts             Loads posts/*.md at build time, parses frontmatter, renders Markdown
    posts/<slug>.md      One file per post

  experiments/
    index.ts             Registry: discovers every <slug>/index.tsx
    types.ts             The contract an experiment module must satisfy
    <slug>/
      index.tsx          `meta` + a Hono app (pages and API routes for this experiment)
      client.ts          Optional browser code, loaded with <Script src="/src/...">
```

## Adding things

**A page:** add a route to `src/routes/pages.tsx` (or a new file in `routes/` for a new section,
mounted in `index.tsx`). Add it to `site.nav` if it belongs in the header.

**A blog post:** create `src/blog/posts/<slug>.md`:

```md
---
title: Post title
date: 2026-10-06
summary: One line for lists and the meta description.
draft: true # optional
---
```

**An experiment:** create `src/experiments/<slug>/index.tsx` exporting `meta` and a default
`Hono<AppEnv>` app. It's mounted at `/experiments/<slug>` automatically, and its routes are
relative to that. Keep everything it needs (client script, helpers, API routes) inside its
folder so experiments stay independent and easy to delete. `edge-clock/` is the reference.

Client scripts: reference them with `<Script src="/src/experiments/<slug>/client.ts" />`.
The Vite plugin finds these and adds them as build entries. No config is needed. The `src`
must be a string literal for it to be detected.

## Drafts and preview mode

Posts and experiments with `draft: true` are hidden from lists and return 404. Visit any page
with `?preview=<PREVIEW_TOKEN>` to unlock drafts. A cookie keeps them unlocked for the rest of
the session. This works locally and in production.

## Secrets and environment variables

| Where         | Non-secret config               | Secrets                                    |
| ------------- | ------------------------------- | ------------------------------------------ |
| Local dev     | `vars` in `wrangler.jsonc`      | `.dev.vars` (gitignored)                   |
| Production    | `vars` in `wrangler.jsonc`      | `npx wrangler secret put NAME`             |
| Documentation | n/a                             | `.dev.vars.example` (committed, no values) |

To add a secret:

1. Add `NAME=...` to `.dev.vars` and `NAME=` with a comment to `.dev.vars.example`.
2. `npm run cf-typegen`. This regenerates `worker-configuration.d.ts`, so `c.env.NAME` is typed.
3. Read it in a handler as `c.env.NAME`. It's only available per request, not at module scope.
4. Before deploying: `npx wrangler secret put NAME`.

Never put secrets in `vars`, since those are committed and visible in the dashboard. Never read
`c.env` from client code, because anything sent to the browser is public. See
`src/lib/preview.ts` for a worked example.
