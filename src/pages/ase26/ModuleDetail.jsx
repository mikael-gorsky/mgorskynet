import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Card } from '../../components/Card'
import usePageMeta from '../../lib/usePageMeta'
import { Ase26Layout, Kicker, Prose } from './Shell'
import { modules, modulesById, partsById, toHref } from '../../data/ase26'

export default function ASE26ModuleDetail() {
  const { id } = useParams()
  const module = modulesById[String(id)]

  const courseJsonLd = useMemo(() => {
    if (!module) return null
    return {
      '@context': 'https://schema.org',
      '@type': 'LearningResource',
      name: `Module ${module.id}. ${module.title}`,
      description: module.summary,
      isPartOf: { '@type': 'Course', name: 'ASE-26: Agentic Software Engineering', url: 'https://mgorsky.net/ase26' },
      url: `https://mgorsky.net/ase26/module/${module.id}`,
      teaches: module.outcome,
    }
  }, [module])

  usePageMeta({
    title: module ? `Module ${module.id}. ${module.title} — ASE-26` : 'Module not found — ASE-26',
    description: module ? module.summary : '',
    jsonLd: courseJsonLd,
  })

  if (!module) {
    return (
      <Ase26Layout active="curriculum">
        <div className="py-24">
          <h1 className="font-headline text-4xl text-on-surface mb-6">Module not found.</h1>
          <Link to={toHref('curriculum')} className="text-primary hover:text-tertiary transition-colors">
            ← Back to the curriculum
          </Link>
        </div>
      </Ase26Layout>
    )
  }

  const part = partsById[String(module.part)]
  const numericIds = modules.map((m) => m.id)
  const idx = numericIds.indexOf(module.id)
  const prev = idx > 0 ? modules[idx - 1] : null
  const next = idx < modules.length - 1 ? modules[idx + 1] : null

  return (
    <Ase26Layout active="curriculum">
      {/* Breadcrumb */}
      <div className="mb-10 font-label text-[0.6875rem] uppercase tracking-widest text-on-surface-variant flex items-center gap-2 flex-wrap">
        <Link to={toHref('curriculum')} className="hover:text-primary transition-colors">Curriculum</Link>
        <span className="text-outline-variant/60">/</span>
        <Link to={`${toHref('curriculum')}#part-${module.part}`} className="hover:text-primary transition-colors">
          {part ? (module.part === 'closing' ? part.title : `Part ${part.id}. ${part.title}`) : 'Part'}
        </Link>
      </div>

      {/* Header */}
      <header className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
        <div className="md:col-span-8">
          <Kicker className="mb-6">Module {String(module.id).padStart(2, '0')}{part ? ` · ${part.range}` : ''}</Kicker>
          <h1 className="font-headline text-[2.25rem] md:text-[3.5rem] leading-[1.08] text-on-surface mb-5 tracking-tight">
            {module.title}
          </h1>
          {module.subtitle && (
            <p className="font-headline text-xl md:text-2xl italic font-light text-on-surface-variant">{module.subtitle}</p>
          )}
        </div>
        <div className="md:col-span-4 flex items-end">
          <div className="font-headline text-[6rem] md:text-[9rem] leading-none text-primary/10 select-none">
            {String(module.id).padStart(2, '0')}
          </div>
        </div>
      </header>

      {/* Body + outcome */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
        <div className="md:col-span-8">
          <Prose blocks={module.body} className="text-lg" />
        </div>
        <aside className="md:col-span-4">
          <Card variant="card-widget" className="p-8 sticky top-28">
            <p className="font-label text-[0.6875rem] uppercase tracking-widest text-secondary mb-4">Learning outcome</p>
            <p className="font-body text-sm text-on-surface leading-relaxed">{module.outcome}</p>
          </Card>
        </aside>
      </div>

      {/* Prev / next */}
      <nav className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-12 border-t border-primary/5">
        {prev ? (
          <Link to={toHref(`module/${prev.id}`)} className="group block">
            <span className="font-label text-[0.6875rem] uppercase tracking-widest text-secondary flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
              Previous
            </span>
            <span className="font-headline text-lg text-on-surface group-hover:text-primary transition-colors">
              {String(prev.id).padStart(2, '0')}. {prev.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={toHref(`module/${next.id}`)} className="group block sm:text-right">
            <span className="font-label text-[0.6875rem] uppercase tracking-widest text-secondary flex items-center gap-2 mb-2 sm:justify-end">
              Next
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </span>
            <span className="font-headline text-lg text-on-surface group-hover:text-primary transition-colors">
              {String(next.id).padStart(2, '0')}. {next.title}
            </span>
          </Link>
        ) : (
          <Link to={toHref('outcomes')} className="group block sm:text-right">
            <span className="font-label text-[0.6875rem] uppercase tracking-widest text-secondary flex items-center gap-2 mb-2 sm:justify-end">
              Next
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </span>
            <span className="font-headline text-lg text-on-surface group-hover:text-primary transition-colors">Learning outcomes</span>
          </Link>
        )}
      </nav>
    </Ase26Layout>
  )
}
