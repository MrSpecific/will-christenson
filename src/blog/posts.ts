import { marked } from 'marked'

// Every `posts/*.md` file is a post; its filename is the URL slug.
// Files are bundled at build time, so there is no filesystem access at runtime.
const files = import.meta.glob<string>('./posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

export type Post = {
  slug: string
  title: string
  date: string // YYYY-MM-DD
  summary: string
  draft: boolean
  html: string
}

export const posts: Post[] = Object.entries(files)
  .map(([path, source]) => toPost(path, source))
  .sort((a, b) => b.date.localeCompare(a.date))

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug)
}

function toPost(path: string, source: string): Post {
  const slug = path.split('/').pop()!.replace(/\.md$/, '')
  const { data, body } = parseFrontmatter(source)
  if (!data.title || !data.date) {
    throw new Error(`Post "${slug}" needs \`title\` and \`date\` in its frontmatter`)
  }
  return {
    slug,
    title: data.title,
    date: data.date,
    summary: data.summary ?? '',
    draft: data.draft === 'true',
    html: marked.parse(body, { async: false }),
  }
}

// Minimal `key: value` frontmatter. Swap for a YAML parser if posts ever need nested data.
function parseFrontmatter(source: string) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(source)
  if (!match) return { data: {} as Record<string, string>, body: source }

  const data: Record<string, string> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const i = line.indexOf(':')
    if (i === -1) continue
    data[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^(["'])(.*)\1$/, '$2')
  }
  return { data, body: source.slice(match[0].length) }
}
