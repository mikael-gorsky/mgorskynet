import { useState, useEffect, useMemo } from 'react'

const fallbackIssues = [
  { title: 'Constitution for AI, and what it tells about us', publishDate: '2026-01-25', number: 91 },
  { title: 'Music of AI', publishDate: '2026-01-19', number: 90 },
  { title: '$150 billion dollar transformation', publishDate: '2026-01-08', number: 89 },
  { title: 'Project Vend: when AI runs a real business', publishDate: '2025-12-28', number: 88 },
  { title: 'How AI thinks', publishDate: '2025-12-24', number: 87 },
  { title: '89% of doctors use AI', publishDate: '2025-12-17', number: 86 },
  { title: 'AI Personalities Behind Code', publishDate: '2025-12-10', number: 85 },
  { title: 'Code Red at OpenAI', publishDate: '2025-12-03', number: 84 },
]

function formatDate(dateStr) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export default function AIPravda() {
  const [issues, setIssues] = useState(fallbackIssues)
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('/api/ai-pravda-latest')
      .then((res) => res.ok ? res.json() : [])
      .then((titles) => {
        if (Array.isArray(titles) && titles.length > 0) {
          // Merge fetched titles with fallback data where possible
          const merged = titles.map((title, i) => {
            const existing = fallbackIssues.find(
              (f) => f.title.toLowerCase() === title.toLowerCase()
            )
            return existing || { title, publishDate: '', number: 91 - i }
          })
          // Add remaining fallback issues not in fetched set
          const fetchedLower = titles.map((t) => t.toLowerCase())
          const remaining = fallbackIssues.filter(
            (f) => !fetchedLower.includes(f.title.toLowerCase())
          )
          setIssues([...merged, ...remaining])
        }
      })
      .catch(() => {})
  }, [])

  const filtered = useMemo(() => {
    if (!search.trim()) return issues
    const q = search.toLowerCase()
    return issues.filter((i) => i.title.toLowerCase().includes(q))
  }, [issues, search])

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-screen-xl mx-auto">
      <header className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
        <div className="md:col-span-8">
          <h1 className="font-headline text-5xl md:text-7xl text-tertiary leading-tight tracking-tighter mb-6">The AI Pravda</h1>
          <p className="font-headline text-xl md:text-2xl text-primary/80 max-w-2xl italic leading-relaxed">
            A weekly LinkedIn newsletter on generative AI — how it will change the world as we know it, and how to get prepared. Critical analysis at the intersection of human agency and machine intelligence.
          </p>
        </div>
        <div className="md:col-span-4 flex flex-col justify-end items-start md:items-end">
          <span className="font-label text-[0.6875rem] uppercase tracking-[0.2em] text-secondary mb-2">Author</span>
          <span className="font-headline text-lg text-on-surface">Mikael Alemu Gorsky</span>
          <div className="mt-4 flex flex-col items-start md:items-end gap-2">
            <span className="font-label text-[0.6875rem] text-secondary">4,200+ subscribers</span>
            <a
              href="https://www.linkedin.com/newsletters/the-ai-pravda-6917819849142329344/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-label text-[0.6875rem] text-primary hover:text-tertiary transition-colors flex items-center gap-1"
            >
              Subscribe on LinkedIn <span className="material-symbols-outlined text-xs">north_east</span>
            </a>
          </div>
        </div>
      </header>

      <section className="mb-16">
        <div className="flex flex-col md:flex-row gap-8 items-end border-b border-outline-variant/10 pb-8">
          <div className="w-full md:w-1/2 group">
            <label className="font-label text-[0.6875rem] uppercase tracking-widest text-secondary mb-4 block">Search Archives</label>
            <div className="relative">
              <input
                className="w-full bg-transparent border-0 border-b border-outline-variant/20 py-3 px-4 text-on-surface focus:ring-0 focus:border-primary placeholder:text-outline/40 transition-all font-body focus:outline-none"
                placeholder="Search by title..."
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <span className="material-symbols-outlined absolute right-4 top-3 text-outline/40 group-focus-within:text-primary transition-colors">search</span>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-end">
            <span className="font-label text-[0.6875rem] text-secondary">{filtered.length} {filtered.length === 1 ? 'issue' : 'issues'}</span>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        {filtered.map((issue) => (
          <a
            key={issue.title}
            href="https://www.linkedin.com/newsletters/the-ai-pravda-6917819849142329344/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block card card-v1 p-10 md:p-12 transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <div className="shrink-0">
                <span className="font-headline text-2xl text-primary/30">#{issue.number}</span>
              </div>
              <div className="flex-grow">
                <h2 className="font-headline text-2xl md:text-3xl text-on-surface group-hover:text-primary transition-colors leading-tight">
                  {issue.title}
                </h2>
                {issue.publishDate && (
                  <time className="font-body text-xs text-outline mt-2 block" dateTime={issue.publishDate}>
                    {formatDate(issue.publishDate)}
                  </time>
                )}
              </div>
              <div className="shrink-0">
                <span className="material-symbols-outlined text-outline/30 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300">north_east</span>
              </div>
            </div>
          </a>
        ))}
      </section>

      <div className="mt-16 flex justify-center">
        <a
          href="https://www.linkedin.com/newsletters/the-ai-pravda-6917819849142329344/"
          target="_blank"
          rel="noopener noreferrer"
          className="card card-v6 font-label text-[0.6875rem] uppercase tracking-widest text-secondary hover:text-primary transition-colors py-5 px-10 flex items-center gap-4 group"
        >
          Read all issues on LinkedIn
          <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">north_east</span>
        </a>
      </div>
    </main>
  )
}
