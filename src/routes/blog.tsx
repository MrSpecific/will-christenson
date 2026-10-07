import { Hono } from 'hono'
import { raw } from 'hono/html'
import { getPost, posts } from '../blog/posts'
import { EntryList } from '../components/EntryList'
import type { AppEnv } from '../env'
import { formatDate } from '../lib/format'
import { visible } from '../lib/preview'

const blog = new Hono<AppEnv>()

blog.get('/', (c) =>
  c.render(
    <section>
      <h1>Writing</h1>
      <EntryList
        entries={visible(posts, c.var.preview).map((p) => ({ ...p, href: `/blog/${p.slug}` }))}
      />
    </section>,
    { title: 'Writing' },
  ),
)

blog.get('/:slug', (c) => {
  const post = getPost(c.req.param('slug'))
  if (!post || (post.draft && !c.var.preview)) return c.notFound()

  return c.render(
    <article class="prose">
      <header>
        <h1>{post.title}</h1>
        <time datetime={post.date}>{formatDate(post.date)}</time>
      </header>
      {/* Post HTML comes from our own Markdown files, so it's trusted. */}
      {raw(post.html)}
    </article>,
    { title: post.title, description: post.summary },
  )
})

export default blog
