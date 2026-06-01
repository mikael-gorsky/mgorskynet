import usePageMeta from '../../lib/usePageMeta'
import { Ase26Layout, Kicker, Prose } from './Shell'
import { conceptualModel } from '../../data/ase26'

export default function ASE26ConceptualModel() {
  usePageMeta({
    title: 'The conceptual model — ASE-26',
    description:
      'The eight ideas the ASE-26 discipline rests on: ASE as a discipline, the division of labour, the auditability principle, the anatomy of an agentic workflow, rationalism vs empiricism, the co-evolution of intent and build, and the evolutionary spiral.',
  })

  return (
    <Ase26Layout active="conceptual-model">
      <header className="mb-24 max-w-3xl">
        <Kicker className="mb-6">The conceptual model</Kicker>
        <h1 className="font-headline text-[2.5rem] md:text-[4rem] leading-[1.05] text-on-surface mb-6 tracking-tighter">
          What the <span className="font-headline italic font-light">discipline</span> rests on
        </h1>
        <p className="font-headline text-lg md:text-xl text-on-surface-variant leading-relaxed">
          A tool is always involved, but the discipline lives upstream of the tool and survives its replacement. These
          eight ideas are the part that lasts.
        </p>
      </header>

      <div className="space-y-24">
        {conceptualModel.map((c) => (
          <section key={c.id} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <span className="font-headline text-2xl text-primary/30 block mb-3">{c.id}</span>
              <h2 className="font-headline text-2xl md:text-3xl text-tertiary leading-tight">{c.title}</h2>
            </div>
            <div className="md:col-span-8">
              <Prose blocks={c.body} className="text-lg" />
            </div>
          </section>
        ))}
      </div>
    </Ase26Layout>
  )
}
