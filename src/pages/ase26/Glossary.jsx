import usePageMeta from '../../lib/usePageMeta'
import { Ase26Layout, Kicker } from './Shell'
import { glossary, references } from '../../data/ase26'

function TermList({ items }) {
  return (
    <dl className="space-y-8">
      {items.map((g) => (
        <div key={g.term} className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 border-b border-primary/5 pb-7 last:border-0">
          <dt className="md:col-span-4 font-headline text-lg text-tertiary leading-snug">{g.term}</dt>
          <dd className="md:col-span-8 font-body text-on-surface-variant leading-relaxed">{g.def}</dd>
        </div>
      ))}
    </dl>
  )
}

export default function ASE26Glossary() {
  usePageMeta({
    title: 'Glossary & references — ASE-26',
    description:
      'The ASE-26 glossary: terms central to the discipline (auditability, audit trail, evolutionary spiral, context engineering, blast radius, verification before trust) and adopted terms with attribution, plus the extended reference list.',
  })

  return (
    <Ase26Layout active="glossary">
      <header className="mb-24 max-w-3xl">
        <Kicker className="mb-6">Glossary & references</Kicker>
        <h1 className="font-headline text-[2.5rem] md:text-[4rem] leading-[1.05] text-on-surface mb-6 tracking-tighter">
          The <span className="font-headline italic font-light">vocabulary</span> of the discipline
        </h1>
        <p className="font-headline text-lg md:text-xl text-on-surface-variant leading-relaxed">
          The terms central to this curriculum, the adopted terms it builds on with attribution, and the literature the
          course draws on.
        </p>
      </header>

      <section className="mb-28">
        <div className="flex items-baseline justify-between mb-12 border-b border-primary/5 pb-4">
          <h2 className="font-headline text-2xl text-on-surface">Terms central to this curriculum</h2>
          <span className="font-label text-[0.6875rem] uppercase tracking-widest text-secondary italic">{glossary.central.length} terms</span>
        </div>
        <TermList items={glossary.central} />
      </section>

      <section className="mb-28">
        <div className="flex items-baseline justify-between mb-12 border-b border-primary/5 pb-4">
          <h2 className="font-headline text-2xl text-on-surface">Adopted terms</h2>
          <span className="font-label text-[0.6875rem] uppercase tracking-widest text-secondary italic">With attribution</span>
        </div>
        <TermList items={glossary.adopted} />
      </section>

      <section>
        <div className="flex items-baseline justify-between mb-12 border-b border-primary/5 pb-4">
          <h2 className="font-headline text-2xl text-on-surface">Extended reference list</h2>
        </div>
        <div className="space-y-12">
          {references.map((r) => (
            <div key={r.group}>
              <h3 className="font-label text-[0.6875rem] uppercase tracking-[0.2em] text-primary/70 mb-5">{r.group}</h3>
              <ul className="space-y-3">
                {r.items.map((item, i) => (
                  <li key={i} className="font-body text-sm text-on-surface-variant leading-relaxed pl-5 -indent-5">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </Ase26Layout>
  )
}
