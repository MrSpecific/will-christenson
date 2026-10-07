import { formatDate } from '../lib/format'

// Shared list UI for anything with a title/date/summary: posts, experiments, etc.
export type Entry = {
  href: string
  title: string
  date: string
  summary: string
  draft?: boolean
}

export function EntryList({ entries }: { entries: Entry[] }) {
  if (entries.length === 0) return <p class="muted">Nothing here yet.</p>
  return (
    <ul class="entry-list">
      {entries.map((entry) => (
        <li>
          <a href={entry.href}>{entry.title}</a>
          {entry.draft && <span class="badge">draft</span>}
          <time datetime={entry.date}>{formatDate(entry.date)}</time>
          <p>{entry.summary}</p>
        </li>
      ))}
    </ul>
  )
}
