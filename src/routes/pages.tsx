import { Hono } from 'hono'
import { EntryList } from '../components/EntryList'
import type { AppEnv } from '../env'
import { experiments } from '../experiments'
import { posts } from '../blog/posts'
import { visible } from '../lib/preview'
import { site } from '../site'

// Standalone informational pages. Keep the JSX inline until a page gets big enough
// to deserve its own component file.
const pages = new Hono<AppEnv>()

pages.get('/', (c) => {
  const recentPosts = visible(posts, c.var.preview).slice(0, 3)
  const recentExperiments = visible(experiments, c.var.preview).slice(0, 3)

  return c.render(
    <>
      <section class="intro">
        <h1>{site.name}</h1>
        <p>{site.description}</p>
      </section>
      <section>
        <h2>Recent writing</h2>
        <EntryList entries={recentPosts.map((p) => ({ ...p, href: `/blog/${p.slug}` }))} />
      </section>
      <section>
        <h2>Experiments</h2>
        <EntryList
          entries={recentExperiments.map((e) => ({ ...e, href: `/experiments/${e.slug}` }))}
        />
      </section>
    </>,
  )
})

pages.get('/about', (c) =>
  c.render(
    <article class="prose">
      <h1>About</h1>
      <p>Placeholder: a few paragraphs about who you are and what you work on.</p>
    </article>,
    { title: 'About' },
  ),
)

export default pages
