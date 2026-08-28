import { useState, useEffect, useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { issues, NEWSLETTER_URL } from '../data/aipravda'
import usePageMeta from '../lib/usePageMeta'

function formatDate(d) {
  return new Date(d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

export default function AIPravdaIssue() {
  const { slug } = useParams()
  const meta = issues.find((i) => i.slug === slug)
  const [body, setBody] = useState('')
  const [missing, setMissing] = useState(false)

  useEffect(() => {
    if (!meta) return
    fetch(`/data/aipravda/${slug}.json`)
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => setBody(data.body || ''))
      .catch(() => setMissing(true))
  }, [slug, meta])

  const jsonLd = useMemo(() => {
    if (!meta) return null
    return {
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      headline: meta.title,
      datePublished: meta.date,
      author: { '@type': 'Person', name: 'Mikael Alemu Gorsky', url: 'https://mgorsky.net' },
      publisher: { '@type': 'Person', name: 'Mikael Alemu Gorsky' },
      isPartOf: { '@type': 'CreativeWorkSeries', name: 'The AI Pravda', url: 'https://mgorsky.net/theaipravda' },
      url: `https://mgorsky.net/theaipravda/${meta.slug}`,
      wordCount: meta.words,
    }
  }, [meta])

  usePageMeta({
    title: meta ? `${meta.title} — The AI Pravda` : 'Issue not found — The AI Pravda',
    description: meta ? meta.excerpt : '',
    jsonLd,
  })

  if (!meta) {
    return (
      <main className="pt-40 pb-24 px-6 md:px-12 max-w-screen-md mx-auto">
        <h1 className="font-headline text-4xl text-on-surface mb-6">Issue not found</h1>
        <Link to="/theaipravda" className="text-primary hover:text-tertiary transition-colors font-label text-sm uppercase tracking-widest">
          Back to the archive
        </Link>
      </main>
    )
  }

  const i = issues.findIndex((x) => x.slug === slug)
  const newer = i > 0 ? issues[i - 1] : null
  const older = i < issues.length - 1 ? issues[i + 1] : null

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-screen-md mx-auto">
      <Link
        to="/theaipravda"
        className="font-label text-[0.6875rem] uppercase tracking-[0.2em] text-secondary hover:text-primary transition-colors inline-flex items-center gap-2 mb-10"
      >
        <span className="material-symbols-outlined text-sm">arrow_back</span> The AI Pravda
      </Link>

      <header className="mb-12 border-b border-primary/10 pb-10">
        <div className="flex items-baseline gap-4 mb-5">
          <span className="font-headline text-2xl text-primary/30">#{meta.number}</span>
          <time className="font-label text-[0.6875rem] uppercase tracking-widest text-secondary" dateTime={meta.date}>
            {formatDate(meta.date)}
          </time>
        </div>
        <h1 className="font-headline text-3xl md:text-5xl text-on-surface leading-tight tracking-tight">{meta.title}</h1>
      </header>

      {missing ? (
        <p className="font-body text-on-surface-variant">
          This issue could not be loaded.{' '}
          <a href={meta.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-primary">Read it on LinkedIn</a>.
        </p>
      ) : (
        <article className="pravda-body font-body text-on-surface-variant" dangerouslySetInnerHTML={{ __html: body }} />
      )}

      <footer className="mt-16 pt-10 border-t border-primary/10 space-y-10">
        <a
          href={meta.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-label text-[0.6875rem] uppercase tracking-widest text-secondary hover:text-primary transition-colors inline-flex items-center gap-2"
        >
          Originally published on LinkedIn <span className="material-symbols-outlined text-sm">north_east</span>
        </a>

        <nav className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {older && (
            <Link to={`/theaipravda/${older.slug}`} className="group block">
              <span className="font-label text-[0.6rem] uppercase tracking-widest text-secondary block mb-2">Previous issue</span>
              <span className="font-headline text-lg text-on-surface group-hover:text-primary transition-colors">{older.title}</span>
            </Link>
          )}
          {newer && (
            <Link to={`/theaipravda/${newer.slug}`} className="group block sm:text-right">
              <span className="font-label text-[0.6rem] uppercase tracking-widest text-secondary block mb-2">Next issue</span>
              <span className="font-headline text-lg text-on-surface group-hover:text-primary transition-colors">{newer.title}</span>
            </Link>
          )}
        </nav>

        <a
          href={NEWSLETTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="card card-v6 font-label text-[0.6875rem] uppercase tracking-widest text-secondary hover:text-primary transition-colors py-5 px-10 flex items-center justify-center gap-4 group"
        >
          Subscribe to The AI Pravda
          <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">north_east</span>
        </a>
      </footer>
    </main>
  )
}
