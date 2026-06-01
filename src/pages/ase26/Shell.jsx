import { Link } from 'react-router-dom'
import { sections, BASE, toHref } from '../../data/ase26'

// Sub-navigation that scopes the visitor to the ASE-26 mini-site.
export function Ase26Subnav({ active = 'overview' }) {
  return (
    <div className="mb-14 md:mb-20 border-b border-primary/10 pb-4 flex flex-wrap items-center gap-x-5 gap-y-3">
      <Link
        to={BASE}
        className="font-headline text-lg md:text-xl text-on-surface hover:text-primary transition-colors mr-1"
      >
        ASE-26
      </Link>
      <span className="text-outline-variant/60 select-none hidden sm:inline">/</span>
      {sections.map((s) => {
        const key = s.slug || 'overview'
        const isActive = key === active
        return (
          <Link
            key={key}
            to={toHref(s.slug)}
            className="font-label text-[0.6875rem] uppercase tracking-[0.18em] transition-colors"
            style={{ color: isActive ? 'var(--color-primary)' : 'var(--color-on-surface-variant)' }}
            aria-current={isActive ? 'page' : undefined}
          >
            {s.label}
          </Link>
        )
      })}
    </div>
  )
}

export function Ase26Layout({ active, children }) {
  return (
    <main className="pt-28 md:pt-32 pb-24 px-6 md:px-12 max-w-screen-xl mx-auto">
      <Ase26Subnav active={active} />
      {children}
    </main>
  )
}

// Small uppercase eyebrow label
export function Kicker({ children, className = '' }) {
  return (
    <span className={`font-label text-[0.6875rem] uppercase tracking-[0.2em] text-primary/70 block ${className}`}>
      {children}
    </span>
  )
}

// Section heading with the site's gradient "section-title" treatment
export function SectionTitle({ children, aside }) {
  return (
    <div className="flex items-baseline justify-between mb-12 border-b border-primary/5 pb-4">
      <h2 className="font-headline text-2xl md:text-3xl text-on-surface">{children}</h2>
      {aside && <span className="font-label text-[0.6875rem] uppercase tracking-widest text-secondary italic">{aside}</span>}
    </div>
  )
}

// Renders an array of paragraph strings as body prose
export function Prose({ blocks, className = '' }) {
  return (
    <div className={className}>
      {blocks.map((p, i) => (
        <p key={i} className="font-body text-on-surface-variant leading-relaxed mb-5 last:mb-0">
          {p}
        </p>
      ))}
    </div>
  )
}

// A small pill / chip
export function Pill({ children, href }) {
  const cls =
    'inline-flex items-center gap-2 font-label text-[0.6875rem] uppercase tracking-widest text-on-surface-variant border border-outline-variant/40 rounded-full px-4 py-1.5 transition-colors hover:text-primary hover:border-primary/40'
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    )
  }
  return <span className={cls}>{children}</span>
}
