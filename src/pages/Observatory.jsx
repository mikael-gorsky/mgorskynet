import { useEffect, useMemo, useState } from 'react'
import usePageMeta from '../lib/usePageMeta'

function formatDay(iso) {
  return new Date(iso).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
}

export default function Observatory() {
  usePageMeta({
    title: 'The Observatory',
    description: 'The Observatory — notes on the AI beat, each checked against its source and summarised, kept by Mikael Alemu Gorsky. Newest first.',
  })

  const [book, setBook] = useState(null)
  const [search, setSearch] = useState('')
  const [tag, setTag] = useState('')

  useEffect(() => {
    fetch('/data/observatory-book.json')
      .then((res) => (res.ok ? res.json() : { notes: [] }))
      .then((data) => setBook(data && Array.isArray(data.notes) ? data : { notes: [] }))
      .catch(() => setBook({ notes: [] }))
  }, [])

  // A link from the home page names one note; bring it into view once the notes are shown.
  useEffect(() => {
    if (!book || !window.location.hash) return
    const el = document.getElementById(window.location.hash.slice(1))
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [book])

  const notes = useMemo(() => book?.notes ?? [], [book])
  const tags = useMemo(() => {
    const count = {}
    notes.forEach((n) => n.tags.forEach((t) => { count[t] = (count[t] || 0) + 1 }))
    return Object.entries(count).sort((a, b) => b[1] - a[1]).map(([t]) => t)
  }, [notes])

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return notes.filter((n) =>
      (!tag || n.tags.includes(tag)) &&
      (!q || `${n.headline} ${n.summary} ${n.source} ${n.subject}`.toLowerCase().includes(q)))
  }, [notes, search, tag])

  const days = useMemo(() => {
    const out = []
    filtered.forEach((n) => {
      const day = n.date.slice(0, 10)
      if (!out.length || out[out.length - 1].day !== day) out.push({ day, date: n.date, notes: [] })
      out[out.length - 1].notes.push(n)
    })
    return out
  }, [filtered])

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-screen-xl mx-auto">
      <header className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
        <div className="md:col-span-8">
          <h1 className="font-headline text-5xl md:text-7xl text-tertiary leading-tight tracking-tighter mb-6">The Observatory</h1>
          <p className="font-headline text-xl md:text-2xl text-primary/80 max-w-2xl italic leading-relaxed">
            Notes on the AI beat: what was released, measured, decided and argued, each checked against its source.
          </p>
        </div>
        <div className="md:col-span-4 flex flex-col justify-end items-start md:items-end">
          <span className="font-label text-[0.6875rem] uppercase tracking-[0.2em] text-secondary mb-2">The Book</span>
          <span className="font-headline text-lg text-on-surface">{book ? `${notes.length} notes` : '…'}</span>
          {book?.updated_at && (
            <span className="font-label text-[0.6875rem] text-secondary mt-2">
              Updated {new Date(book.updated_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </span>
          )}
        </div>
      </header>

      <section className="mb-16">
        <div className="flex flex-col md:flex-row gap-8 items-end border-b border-outline-variant/10 pb-8">
          <div className="w-full md:w-1/2 group">
            <label className="font-label text-[0.6875rem] uppercase tracking-widest text-secondary mb-4 block">Search the Book</label>
            <div className="relative">
              <input
                className="w-full bg-transparent border-0 border-b border-outline-variant/20 py-3 px-4 text-on-surface focus:ring-0 focus:border-primary placeholder:text-outline/40 transition-all font-body focus:outline-none"
                placeholder="Search headlines and summaries..."
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <span className="material-symbols-outlined absolute right-4 top-3 text-outline/40 group-focus-within:text-primary transition-colors">search</span>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-end">
            <span className="font-label text-[0.6875rem] text-secondary">
              {filtered.length} {filtered.length === 1 ? 'note' : 'notes'}{tag ? ` · ${tag}` : ''}
            </span>
          </div>
        </div>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-6">
            {['', ...tags].map((t) => (
              <button
                key={t || 'all'}
                type="button"
                onClick={() => setTag(t)}
                className={`font-label text-[0.6rem] uppercase tracking-widest px-3 py-1.5 border transition-colors ${
                  tag === t ? 'border-primary text-primary' : 'border-outline-variant/20 text-secondary hover:text-primary'
                }`}
              >
                {t || 'All'}
              </button>
            ))}
          </div>
        )}
      </section>

      {book === null && <p className="font-body text-on-surface-variant py-10">Loading the Book…</p>}

      <div className="space-y-20">
        {days.map((d) => (
          <section key={d.day}>
            <h2 className="font-label text-[0.6875rem] uppercase tracking-[0.2em] mb-8 border-l-2 pl-4 section-title"
                style={{ color: 'var(--t-accent)', borderColor: 'color-mix(in srgb, var(--t-accent) 30%, transparent)' }}>
              {formatDay(d.date)}
            </h2>
            <div className="space-y-4">
              {d.notes.map((n) => (
                <article key={n.id} id={`note-${n.id}`} className="card card-v1 p-8 md:p-10 scroll-mt-32">
                  <a href={n.url} target="_blank" rel="noopener noreferrer" className="group block">
                    <h3 className="font-headline text-xl md:text-2xl text-on-surface group-hover:text-primary transition-colors leading-tight">
                      {n.headline}
                    </h3>
                  </a>
                  <p className="mt-3 font-body text-on-surface-variant leading-relaxed">{n.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-label text-[0.6875rem] text-secondary">
                    <span className="text-primary">{n.type}</span>
                    <span>{n.source}</span>
                    {n.label && <span className="italic">{n.label}</span>}
                    {n.tags.map((t) => <span key={t} className="text-outline">#{t}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
        {book && filtered.length === 0 && (
          <p className="font-body text-on-surface-variant py-10">No note matches that search.</p>
        )}
      </div>
    </main>
  )
}
