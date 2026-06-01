import { Card } from '../../components/Card'
import usePageMeta from '../../lib/usePageMeta'
import { Ase26Layout, Kicker, Prose } from './Shell'
import { assessment } from '../../data/ase26'

export default function ASE26Assessment() {
  usePageMeta({
    title: 'Assessment design — ASE-26',
    description:
      'How ASE-26 grades student work: the audit trail, the spiral, and verification are gradable. Continuous coursework (50%), the project (40%), and a closing artefact (10%), with a four-criteria rubric and academic-integrity standard for an agentic course.',
  })

  return (
    <Ase26Layout active="assessment">
      <header className="mb-20 max-w-3xl">
        <Kicker className="mb-6">Assessment design</Kicker>
        <h1 className="font-headline text-[2.5rem] md:text-[4rem] leading-[1.05] text-on-surface mb-6 tracking-tighter">
          Grading the <span className="font-headline italic font-light">discipline</span>
        </h1>
        <p className="font-headline text-lg md:text-xl text-on-surface-variant leading-relaxed">{assessment.intro}</p>
      </header>

      {/* Philosophy */}
      <section className="mb-28 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="font-headline text-2xl text-tertiary section-title">Grading philosophy</h2>
        </div>
        <div className="md:col-span-8">
          <Prose blocks={assessment.philosophy} className="text-lg" />
        </div>
      </section>

      {/* Weighted artefacts */}
      <section className="mb-28">
        <div className="flex items-baseline justify-between mb-12 border-b border-primary/5 pb-4">
          <h2 className="font-headline text-2xl text-on-surface">Graded artefacts and weights</h2>
        </div>
        <div className="space-y-12">
          {assessment.groups.map((g) => (
            <div key={g.title}>
              <div className="flex items-baseline gap-4 mb-2">
                <h3 className="font-headline text-xl text-tertiary">{g.title}</h3>
                <span className="font-headline text-xl text-primary">{g.weight}</span>
              </div>
              <p className="font-body text-sm text-on-surface-variant italic mb-6 max-w-3xl">{g.note}</p>
              <div className="space-y-1">
                {g.items.map((it) => (
                  <Card key={it.name} variant="card-v2" className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 p-7">
                    <div className="md:col-span-1 font-headline text-xl text-primary/50">{it.weight}</div>
                    <div className="md:col-span-4">
                      <h4 className="font-headline text-base text-on-surface leading-snug">{it.name}</h4>
                      <p className="font-label text-[0.625rem] uppercase tracking-wider text-secondary mt-2">{it.maps}</p>
                    </div>
                    <div className="md:col-span-7">
                      <p className="font-body text-sm text-on-surface-variant leading-relaxed">{it.desc}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Rubric */}
      <section className="mb-28">
        <div className="flex items-baseline justify-between mb-12 border-b border-primary/5 pb-4">
          <h2 className="font-headline text-2xl text-on-surface">Rubric structure</h2>
          <span className="font-label text-[0.6875rem] uppercase tracking-widest text-secondary italic">Four general criteria</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {assessment.rubric.map((r, i) => (
            <Card key={r.name} variant={`card-v${(i % 6) + 1}`} className="p-8">
              <span className="font-label text-primary/40 text-sm mb-3 block">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="font-headline text-lg text-tertiary mb-3">{r.name}</h3>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">{r.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Integrity */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-16 border-t border-primary/5">
        <div className="md:col-span-4">
          <h2 className="font-headline text-2xl text-tertiary section-title">Academic integrity</h2>
        </div>
        <div className="md:col-span-8">
          <Prose blocks={assessment.integrity} className="text-lg" />
        </div>
      </section>
    </Ase26Layout>
  )
}
