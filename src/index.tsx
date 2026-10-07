import { Hono } from 'hono'
import type { AppEnv } from './env'
import { preview } from './lib/preview'
import { renderer } from './renderer'
import blog from './routes/blog'
import lab from './routes/experiments'
import pages from './routes/pages'

const app = new Hono<AppEnv>()

app.use(renderer)
app.use(preview)

// One sub-app per section of the site.
app.route('/', pages)
app.route('/blog', blog)
app.route('/experiments', lab)

app.notFound((c) => {
  c.status(404)
  return c.render(
    <section class="prose">
      <h1>Not found</h1>
      <p>
        Nothing lives at <code>{c.req.path}</code>. <a href="/">Go home</a>.
      </p>
    </section>,
    { title: 'Not found' },
  )
})

export default app
