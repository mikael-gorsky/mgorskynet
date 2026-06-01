import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardLink } from '../../components/Card'
import usePageMeta from '../../lib/usePageMeta'
import { Ase26Layout, Kicker, Pill } from './Shell'
import { meta, parts, modules, conceptualModel, sections, toHref } from '../../data/ase26'

const cardVariants = ['card-v1', 'card-v2', 'card-v3', 'card-v4', 'card-v5', 'card-v6']

const principles = [
  {
    icon: 'groups',
    title: 'Division of labour',
    desc: 'The human frames, specifies, and judges. The agent executes. Equipping and verifying are the human’s job.',
  },
  {
    icon: 'fact_check',
    title: 'Auditability',
    desc: 'A workflow that cannot be inspected, replayed, or evaluated after the fact is craft, not engineering.',
  },
  {
    icon: 'verified',
    title: 'Verification before trust',
    desc: 'Every agent output is a hypothesis until it passes a defined gate. Nothing enters the project unchecked.',
  },
  {
    icon: 'sync',
    title: 'The evolutionary spiral',
    desc: 'Intent and build co-evolve through turns — fast and loose inside, pinned down at named commit points.',
  },
]

function moduleCount(partId) {
  return modules.filter((m) => String(m.part) === String(partId)).length
}

export default function ASE26Overview() {
  const courseJsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: `${meta.code}: ${meta.title}`,
      description: meta.abstract,
      provider: { '@type': 'Person', name: 'Mikael Alemu Gorsky', url: 'https://mgorsky.net' },
      author: { '@type': 'Person', name: 'Mikael Gorsky', sameAs: meta.orcidUrl },
      educationalLevel: 'Advanced',
      inLanguage: 'en',
      url: 'https://mgorsky.net/ase26',
      version: meta.version,
      license: meta.licenseUrl,
      sameAs: meta.doiUrl,
    }),
    [],
  )

  usePageMeta({
    title: `${meta.code} — ${meta.title}`,
    description:
      'ASE-26 — a conceptual framework, curriculum, and teaching foundation for Agentic Software Engineering by Mikael Gorsky. 21 modules across four parts: the discipline of structured, auditable human-agent workflows for building software.',
    jsonLd: courseJsonLd,
  })

  return (
    <Ase26Layout active="overview">
      {/* Hero */}
      <header className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-28">
        <div className="md:col-span-8">
          <Kicker className="mb-6">
            {meta.code} · Version {meta.version} · {meta.released}
          </Kicker>
          <h1 className="font-headline text-[3rem] md:text-[5rem] leading-[1.05] text-on-surface mb-8 tracking-tighter">
            Agentic <span className="font-headline italic font-light">Software</span> Engineering
          </h1>
          <p className="font-headline text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed mb-8">
            {meta.tagline} A discipline rather than a tool — the principles are the part that lasts.
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            <Pill href={meta.doiUrl}>DOI {meta.doi}</Pill>
            <Pill href={meta.licenseUrl}>{meta.license}</Pill>
            <Pill href={meta.orcidUrl}>ORCID</Pill>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Link
              to={toHref('curriculum')}
              className="inline-flex items-center gap-3 text-primary hover:text-tertiary transition-colors group"
            >
              <span className="font-headline text-xl group-hover:italic transition-all">Explore the curriculum</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
            <Link
              to={toHref('conceptual-model')}
              className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors"
            >
              <span className="font-label text-xs uppercase tracking-widest">The conceptual model</span>
            </Link>
          </div>
        </div>

        <div className="md:col-span-4 flex flex-col justify-end">
          <Card variant="card-widget" className="p-10">
            <p className="font-label text-[0.6875rem] uppercase tracking-widest text-secondary mb-4">Course profile</p>
            <div className="space-y-3">
              {meta.stats.map((s) => (
                <div key={s.label} className="flex justify-between items-baseline border-b border-primary/5 pb-2 last:border-0">
                  <span className="text-xs text-on-surface-variant">{s.label}</span>
                  <span className="font-headline text-lg text-on-surface">{s.value}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 font-body text-sm text-on-surface-variant leading-relaxed">{meta.audience}</p>
          </Card>
        </div>
      </header>

      {/* Abstract */}
      <section className="mb-32 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="col-span-1">
          <h2 className="font-headline text-2xl text-tertiary section-title">Abstract</h2>
        </div>
        <div className="md:col-span-2">
          <p className="font-headline text-xl md:text-2xl text-on-surface leading-relaxed">{meta.abstract}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {meta.keywords.map((k) => (
              <span key={k} className="font-label text-[0.625rem] uppercase tracking-wider text-on-surface-variant/70 bg-primary/5 px-3 py-1 rounded-full">
                {k}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Core principles */}
      <section className="mb-32">
        <div className="flex items-baseline justify-between mb-12 border-b border-primary/5 pb-4">
          <h2 className="font-headline text-2xl text-on-surface">The discipline in four ideas</h2>
          <Link to={toHref('conceptual-model')} className="font-label text-[0.6875rem] uppercase tracking-widest text-secondary hover:text-primary transition-colors">
            Full model →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p, i) => (
            <Card key={p.title} variant={cardVariants[i % cardVariants.length]} className="p-8">
              <span className="material-symbols-outlined text-primary mb-4 block">{p.icon}</span>
              <h3 className="font-headline text-lg text-tertiary mb-3">{p.title}</h3>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">{p.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* The four parts */}
      <section className="mb-32">
        <div className="flex items-baseline justify-between mb-12 border-b border-primary/5 pb-4">
          <h2 className="font-headline text-2xl text-on-surface">Four parts and a closing module</h2>
          <span className="font-label text-[0.6875rem] uppercase tracking-widest text-secondary italic">21 modules</span>
        </div>
        <div className="space-y-1">
          {parts.map((part) => (
            <CardLink
              key={part.id}
              to={`${toHref('curriculum')}#part-${part.id}`}
              variant="card-v1"
              className="grid grid-cols-1 md:grid-cols-12 gap-6 p-10 group/link"
            >
              <div className="md:col-span-1 font-headline text-2xl text-primary/30">
                {part.id === 'closing' ? '·' : String(part.id).padStart(2, '0')}
              </div>
              <div className="md:col-span-4">
                <h3 className="font-headline text-xl text-tertiary group-hover/link:text-primary transition-colors">{part.title}</h3>
                <p className="font-label text-[0.6875rem] uppercase tracking-widest text-secondary mt-2">
                  {part.range} · {moduleCount(part.id)} {moduleCount(part.id) === 1 ? 'module' : 'modules'}
                </p>
              </div>
              <div className="md:col-span-7">
                <p className="font-body text-on-surface-variant leading-relaxed">{part.summary}</p>
              </div>
            </CardLink>
          ))}
        </div>
      </section>

      {/* Section index — the multi-level map */}
      <section className="mb-32">
        <div className="flex items-baseline justify-between mb-12 border-b border-primary/5 pb-4">
          <h2 className="font-headline text-2xl text-on-surface">Read the document</h2>
          <span className="font-label text-[0.6875rem] uppercase tracking-widest text-secondary italic">{conceptualModel.length} concepts · {modules.length} modules</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.filter((s) => s.slug).map((s, i) => (
            <CardLink key={s.slug} to={toHref(s.slug)} variant={cardVariants[i % cardVariants.length]} className="p-8 group/link">
              <span className="material-symbols-outlined text-primary/50 mb-4 block group-hover/link:text-primary transition-colors">{s.icon}</span>
              <h3 className="font-headline text-lg text-on-surface group-hover/link:text-primary transition-colors mb-2">{s.label}</h3>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">{s.desc}</p>
            </CardLink>
          ))}
        </div>
      </section>

      {/* Citation & license */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-20 border-t border-primary/5">
        <div className="md:col-span-4">
          <h2 className="font-headline text-2xl text-on-surface">Cite & reuse</h2>
        </div>
        <div className="md:col-span-8 space-y-8">
          <div>
            <p className="font-label text-[0.6875rem] uppercase tracking-widest text-secondary mb-3">Suggested citation</p>
            <p className="font-body text-on-surface-variant leading-relaxed">{meta.citation}</p>
          </div>
          <div>
            <p className="font-label text-[0.6875rem] uppercase tracking-widest text-secondary mb-3">License</p>
            <p className="font-body text-on-surface-variant leading-relaxed">
              This work is licensed under a{' '}
              <a href={meta.licenseUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-tertiary transition-colors">
                {meta.licenseName} ({meta.license})
              </a>
              . You are free to copy and redistribute the material in any medium or format, for any purpose including
              commercially, provided you give appropriate credit. Requests to translate, adapt, abridge, or otherwise
              produce derivative works should be addressed to the author.
            </p>
          </div>
          <a
            href="mailto:hello@mgorsky.net?subject=ASE-26"
            className="inline-flex items-center gap-2 text-primary group"
          >
            <span className="font-label text-xs uppercase tracking-widest">Contact the author</span>
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </a>
        </div>
      </section>
    </Ase26Layout>
  )
}
