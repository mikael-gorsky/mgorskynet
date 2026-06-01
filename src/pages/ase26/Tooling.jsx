import usePageMeta from '../../lib/usePageMeta'
import { Ase26Layout, Kicker, Prose } from './Shell'
import { tooling } from '../../data/ase26'

export default function ASE26Tooling() {
  usePageMeta({
    title: 'Tooling & infrastructure reference — ASE-26',
    description:
      'The ASE-26 tooling reference: choosing an agentic development environment (ADE), the six-pillar architecture, the three ADE categories (terminal/CLI, IDE-integrated, browser-based), permission design and sandboxing, context infrastructure, and agent economics.',
  })

  return (
    <Ase26Layout active="tooling">
      <header className="mb-24 max-w-3xl">
        <Kicker className="mb-6">Tooling & infrastructure reference</Kicker>
        <h1 className="font-headline text-[2.5rem] md:text-[4rem] leading-[1.05] text-on-surface mb-6 tracking-tighter">
          Configuring the <span className="font-headline italic font-light">ADE</span>
        </h1>
        <p className="font-headline text-lg md:text-xl text-on-surface-variant leading-relaxed">
          The Agentic Development Environment is where the discipline becomes operational. This chapter is written to be
          useful at the moment a practitioner is configuring their tooling.
        </p>
      </header>

      <div className="space-y-20">
        {tooling.map((t, i) => (
          <section key={t.title} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <span className="font-headline text-2xl text-primary/30 block mb-3">{String(i + 1).padStart(2, '0')}</span>
              <h2 className="font-headline text-2xl text-tertiary leading-tight">{t.title}</h2>
            </div>
            <div className="md:col-span-8">
              <Prose blocks={t.body} className="text-lg" />
            </div>
          </section>
        ))}
      </div>
    </Ase26Layout>
  )
}
