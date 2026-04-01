import { useState, useEffect, useMemo } from 'react'
import { Card } from '../components/Card'

const cardVariants = ['card-v1', 'card-v2', 'card-v3', 'card-v4', 'card-v5', 'card-v6']

export default function AIChroniclesDigest() {
  const [items, setItems] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('/data/news-archive.json')
      .then((res) => res.ok ? res.json() : [])
      .then((data) => setItems(Array.isArray(data) ? data : []))
      .catch(() => setItems([]))
  }, [])

  const filtered = useMemo(() => {
    if (!search.trim()) return items
    const q = search.toLowerCase()
    return items.filter((i) =>
      i.topic.toLowerCase().includes(q) || (i.description || '').toLowerCase().includes(q) || (i.source || '').toLowerCase().includes(q)
    )
  }, [items, search])

  // Group by date
  const grouped = useMemo(() => {
    const groups = {}
    for (const item of filtered) {
      const key = item.dateLabel || item.date || 'Undated'
      if (!groups[key]) groups[key] = []
      groups[key].push(item)
    }
    return Object.entries(groups)
  }, [filtered])

  return (
    <main className="pt-40 pb-24 px-6 md:px-12 max-w-screen-xl mx-auto">
      <header className="mb-16">
        <span className="font-label text-[0.6875rem] uppercase tracking-[0.2em] text-primary/60 mb-6 block">AI Chronicles</span>
        <h1 className="font-headline text-4xl md:text-6xl font-light text-on-surface leading-tight">Daily Digest</h1>
        <p className="font-headline text-xl text-on-surface-variant mt-4 max-w-2xl leading-relaxed">
          Curated AI developments — hand-selected from across the industry, published every day.
        </p>
      </header>

      <section className="mb-12">
        <div className="w-full md:w-1/2 group">
          <label className="font-label text-[0.6875rem] uppercase tracking-widest text-secondary mb-4 block">Search</label>
          <div className="relative">
            <input
              className="w-full bg-transparent border-0 border-b border-outline-variant/30 focus:ring-0 focus:border-primary px-0 py-3 text-lg font-body placeholder:text-on-surface-variant/30 focus:outline-none"
              placeholder="Keywords, sources, or topics..."
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className="material-symbols-outlined absolute right-0 top-3 text-outline/40 group-focus-within:text-primary transition-colors">search</span>
          </div>
        </div>
        <p className="font-label text-[0.6875rem] text-secondary mt-4">{filtered.length} {filtered.length === 1 ? 'item' : 'items'}</p>
      </section>

      <div className="space-y-16">
        {grouped.map(([dateLabel, entries]) => (
          <section key={dateLabel}>
            <h2 className="font-label text-[0.6875rem] uppercase tracking-widest text-tertiary/70 mb-6 section-title">{dateLabel}</h2>
            <div className="space-y-4">
              {entries.map((item, i) => (
                <a
                  key={`${item.date}-${i}`}
                  href={item.sourceUrl || '#'}
                  target={item.sourceUrl ? '_blank' : undefined}
                  rel={item.sourceUrl ? 'noopener noreferrer' : undefined}
                  className="block group"
                >
                  <Card variant={cardVariants[i % 6]} className="p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="flex-grow">
                        <h3 className="font-headline text-xl md:text-2xl text-on-surface group-hover:text-primary transition-colors leading-tight mb-3">
                          {item.topic}
                        </h3>
                        {item.description && (
                          <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-3">{item.description}</p>
                        )}
                        <div className="flex items-center gap-4">
                          {item.source && (
                            <span className="font-label text-[0.6875rem] text-primary">{item.source}</span>
                          )}
                          {item.sourceUrl && (
                            <span className="material-symbols-outlined text-xs text-outline group-hover:text-primary transition-colors">north_east</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
