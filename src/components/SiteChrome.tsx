import { useRequestContext } from 'hono/jsx-renderer'
import { site } from '../site'

export function SiteHeader() {
  const path = useRequestContext().req.path
  return (
    <header class="site-header">
      <a href="/" class="site-name">{site.name}</a>
      <nav>
        {site.nav.map((item) => (
          <a href={item.href} aria-current={path.startsWith(item.href) ? 'page' : undefined}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer class="site-footer">
      © {new Date().getFullYear()} {site.name}
    </footer>
  )
}
