import { Link } from 'react-router-dom'
import { CardLink } from '../../components/Card'
import usePageMeta from '../../lib/usePageMeta'
import { Ase26Layout, Kicker } from './Shell'
import { parts, modules, toHref } from '../../data/ase26'

export default function ASE26CurriculumIndex() {
  usePageMeta({
    title: 'ASE-26 Curriculum — 21 modules',
    description:
      'The full ASE-26 curriculum: 21 modules across four parts and a closing module — from the discipline and the human role to specifications, context engineering, verification, multi-agent orchestration, security, and the evolutionary spiral.',
  })

  return (
    <Ase26Layout active="curriculum">
      <header className="mb-24 max-w-3xl">
        <Kicker className="mb-6">The curriculum</Kicker>
        <h1 className="font-headline text-[2.5rem] md:text-[4rem] leading-[1.05] text-on-surface mb-6 tracking-tighter">
          21 modules, <span className="font-headline italic font-light">one discipline</span>
        </h1>
        <p className="font-headline text-lg md:text-xl text-on-surface-variant leading-relaxed">
          Each module addresses one part of equipping or verifying the agent, or one part of the rhythm that connects
          them. Open any module for its full treatment and the capability a graduate gains from it.
        </p>
      </header>

      {parts.map((part) => {
        const partModules = modules.filter((m) => String(m.part) === String(part.id))
        return (
          <section key={part.id} id={`part-${part.id}`} className="mb-28 scroll-mt-28">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-10 items-baseline border-b border-primary/5 pb-4">
              <div className="md:col-span-1 font-headline text-3xl text-primary/30">
                {part.id === 'closing' ? '·' : String(part.id).padStart(2, '0')}
              </div>
              <div className="md:col-span-11">
                <h2 className="font-headline text-2xl md:text-3xl text-on-surface">
                  {part.id === 'closing' ? part.title : `Part ${part.id}. ${part.title}`}
                </h2>
                <p className="font-label text-[0.6875rem] uppercase tracking-widest text-secondary mt-2">{part.range}</p>
                <p className="font-body text-on-surface-variant leading-relaxed mt-3 max-w-3xl">{part.summary}</p>
              </div>
            </div>

            <div className="space-y-1">
              {partModules.map((m) => (
                <CardLink
                  key={m.id}
                  to={toHref(`module/${m.id}`)}
                  variant="card-v1"
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 p-8 md:p-10 group/link"
                >
                  <div className="md:col-span-1 font-headline text-2xl text-primary/30">{String(m.id).padStart(2, '0')}</div>
                  <div className="md:col-span-4">
                    <h3 className="font-headline text-lg text-tertiary group-hover/link:text-primary transition-colors leading-snug">
                      {m.title}
                    </h3>
                    {m.subtitle && (
                      <p className="font-label text-[0.6875rem] uppercase tracking-widest text-secondary mt-2">{m.subtitle}</p>
                    )}
                  </div>
                  <div className="md:col-span-6">
                    <p className="font-body text-on-surface-variant leading-relaxed">{m.summary}</p>
                  </div>
                  <div className="md:col-span-1 flex md:justify-end items-start">
                    <span className="material-symbols-outlined text-outline group-hover/link:text-primary group-hover/link:translate-x-1 transition-all">
                      arrow_forward
                    </span>
                  </div>
                </CardLink>
              ))}
            </div>
          </section>
        )
      })}

      <div className="pt-12 border-t border-primary/5">
        <Link to={toHref('outcomes')} className="inline-flex items-center gap-3 text-primary hover:text-tertiary transition-colors group">
          <span className="font-headline text-xl group-hover:italic transition-all">See the learning outcomes</span>
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </Link>
      </div>
    </Ase26Layout>
  )
}
