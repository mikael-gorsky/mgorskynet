import { Link } from 'react-router-dom'
import { Card } from '../../components/Card'
import usePageMeta from '../../lib/usePageMeta'
import { Ase26Layout, Kicker } from './Shell'
import { courseOutcomes, modules, parts, toHref } from '../../data/ase26'

export default function ASE26Outcomes() {
  usePageMeta({
    title: 'Learning outcomes — ASE-26',
    description:
      'ASE-26 learning outcomes: twelve course-level capabilities a graduate develops, plus the module-level outcomes that map each of the 21 modules to specific, assessable capabilities.',
  })

  return (
    <Ase26Layout active="outcomes">
      <header className="mb-24 max-w-3xl">
        <Kicker className="mb-6">Learning outcomes</Kicker>
        <h1 className="font-headline text-[2.5rem] md:text-[4rem] leading-[1.05] text-on-surface mb-6 tracking-tighter">
          What a graduate <span className="font-headline italic font-light">can do</span>
        </h1>
        <p className="font-headline text-lg md:text-xl text-on-surface-variant leading-relaxed">
          Course-level outcomes describe overall capabilities. Module-level outcomes map each module to specific,
          assessable capabilities. Assessment grades against these outcomes.
        </p>
      </header>

      {/* Course-level outcomes */}
      <section className="mb-32">
        <div className="flex items-baseline justify-between mb-12 border-b border-primary/5 pb-4">
          <h2 className="font-headline text-2xl text-on-surface">Course-level outcomes</h2>
          <span className="font-label text-[0.6875rem] uppercase tracking-widest text-secondary italic">{courseOutcomes.length} outcomes</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {courseOutcomes.map((lo) => (
            <div key={lo.id} className="group flex gap-5">
              <span className="font-headline text-lg text-primary/40 group-hover:text-primary transition-colors shrink-0 w-12">{lo.id}</span>
              <p className="font-body text-on-surface-variant leading-relaxed">{lo.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Module-level outcomes */}
      <section>
        <div className="flex items-baseline justify-between mb-12 border-b border-primary/5 pb-4">
          <h2 className="font-headline text-2xl text-on-surface">Module-level outcomes</h2>
          <span className="font-label text-[0.6875rem] uppercase tracking-widest text-secondary italic">{modules.length} modules</span>
        </div>
        <div className="space-y-1">
          {modules.map((m) => {
            const part = parts.find((p) => String(p.id) === String(m.part))
            return (
              <Card key={m.id} variant="card-v1" className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 p-8">
                <div className="md:col-span-4">
                  <Link
                    to={toHref(`module/${m.id}`)}
                    className="font-headline text-lg text-tertiary hover:text-primary transition-colors leading-snug"
                  >
                    {String(m.id).padStart(2, '0')}. {m.title}
                  </Link>
                  {part && (
                    <p className="font-label text-[0.625rem] uppercase tracking-widest text-secondary mt-1">{part.title}</p>
                  )}
                </div>
                <div className="md:col-span-8">
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">{m.outcome}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </section>
    </Ase26Layout>
  )
}
