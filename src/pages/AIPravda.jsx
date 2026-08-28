import { useState, useMemo, useRef } from 'react'
import { Link } from 'react-router-dom'
import { issues, NEWSLETTER_URL } from '../data/aipravda'
import usePageMeta from '../lib/usePageMeta'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export default function AIPravda() {
  usePageMeta({
    title: 'The AI Pravda',
    description: `The AI Pravda — ${issues.length} issues by Mikael Alemu Gorsky, archived in full. Critical analysis of artificial intelligence and its effect on work and society. 5,500+ subscribers.`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CreativeWorkSeries',
      name: 'The AI Pravda',
      author: { '@type': 'Person', name: 'Mikael Alemu Gorsky', url: 'https://mgorsky.net' },
      url: 'https://mgorsky.net/theaipravda',
      description: 'Critical analysis of artificial intelligence and its effect on work and society.',
    },
  })

  const [search, setSearch] = useState('')
  const [fullText, setFullText] = useState(null)
  const requested = useRef(false)

  // The full-text index is ~1.2MB, so it is only fetched once the reader types.
  const loadFullText = () => {
    if (requested.current) return
    requested.current = true
    fetch('/data/aipravda-search.json')
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => setFullText(Array.isArray(data) ? data : []))
      .catch(() => setFullText([]))
  }

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return issues
    const inBody = new Set(
      (fullText || []).filter((d) => d.text.includes(q)).map((d) => d.slug)
    )
    return issues.filter(
      (i) => i.title.toLowerCase().includes(q) || inBody.has(i.slug)
    )
  }, [search, fullText])

  const searching = search.trim().length > 0

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-screen-xl mx-auto">
      <header className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
        <div className="md:col-span-8">
          <h1 className="font-headline text-5xl md:text-7xl text-tertiary leading-tight tracking-tighter mb-6">The AI Pravda</h1>
          <p className="font-headline text-xl md:text-2xl text-primary/80 max-w-2xl italic leading-relaxed">
            A weekly newsletter on generative AI — how it will change the world as we know it, and how to get prepared.
            Critical analysis at the intersection of human agency and machine intelligence.
          </p>
        </div>
        <div className="md:col-span-4 flex flex-col justify-end items-start md:items-end">
          <span className="font-label text-[0.6875rem] uppercase tracking-[0.2em] text-secondary mb-2">Author</span>
          <span className="font-headline text-lg text-on-surface">Mikael Alemu Gorsky</span>
          <div className="mt-4 flex flex-col items-start md:items-end gap-2">
            <span className="font-label text-[0.6875rem] text-secondary">5,500+ subscribers</span>
            <a
              href={NEWSLETTER_URL}
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
            <label className="font-label text-[0.6875rem] uppercase tracking-widest text-secondary mb-4 block">Search the archive</label>
            <div className="relative">
              <input
                className="w-full bg-transparent border-0 border-b border-outline-variant/20 py-3 px-4 text-on-surface focus:ring-0 focus:border-primary placeholder:text-outline/40 transition-all font-body focus:outline-none"
                placeholder="Search titles and full text..."
                type="text"
                value={search}
                onFocus={loadFullText}
                onChange={(e) => { loadFullText(); setSearch(e.target.value) }}
              />
              <span className="material-symbols-outlined absolute right-4 top-3 text-outline/40 group-focus-within:text-primary transition-colors">search</span>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-end">
            <span className="font-label text-[0.6875rem] text-secondary">
              {filtered.length} {filtered.length === 1 ? 'issue' : 'issues'}
              {searching && fullText === null && ' · loading full text'}
            </span>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        {filtered.map((issue) => (
          <Link
            key={issue.slug}
            to={`/theaipravda/${issue.slug}`}
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
                <time className="font-body text-xs text-outline mt-2 block" dateTime={issue.date}>
                  {formatDate(issue.date)} · {issue.words.toLocaleString()} words
                </time>
              </div>
              <div className="shrink-0">
                <span className="material-symbols-outlined text-outline/30 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300">arrow_forward</span>
              </div>
            </div>
          </Link>
        ))}
        {filtered.length === 0 && (
          <p className="font-body text-on-surface-variant py-10">No issue matches that search.</p>
        )}
      </section>

      <div className="mt-16 flex justify-center">
        <a
          href={NEWSLETTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="card card-v6 font-label text-[0.6875rem] uppercase tracking-widest text-secondary hover:text-primary transition-colors py-5 px-10 flex items-center gap-4 group"
        >
          Subscribe on LinkedIn
          <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">north_east</span>
        </a>
      </div>
    </main>
  )
}
