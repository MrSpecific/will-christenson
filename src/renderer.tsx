import { jsxRenderer } from 'hono/jsx-renderer'
import { Link, ViteClient } from 'vite-ssr-components/hono'
import { SiteFooter, SiteHeader } from './components/SiteChrome'
import { site } from './site'

type PageProps = {
  title?: string
  description?: string
}

// Lets routes call `c.render(<Page />, { title, description })` with type checking.
declare module 'hono' {
  interface ContextRenderer {
    (content: string | Promise<string>, props?: PageProps): Response | Promise<Response>
  }
}

export const renderer = jsxRenderer(({ children, title, description }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title ? `${title} · ${site.name}` : site.name}</title>
        <meta name="description" content={description ?? site.description} />
        <ViteClient />
        <Link href="/src/style.css" rel="stylesheet" />
      </head>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
})
