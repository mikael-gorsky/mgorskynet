import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
      <header className="mb-24 md:mb-40">
        <h1 className="font-headline text-5xl md:text-7xl font-light tracking-tight text-on-surface max-w-4xl leading-tight">
          Strategic Development. <br />
          <span className="text-primary italic">AI Research.</span> Education.
        </h1>
        <div className="mt-8 flex items-center gap-4">
          <span className="w-12 h-[1px] bg-primary/40"></span>
          <p className="font-label text-[0.6rem] uppercase tracking-widest text-primary/80">Helsinki &mdash; Global Portfolio</p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-x-12">
        <div className="md:col-span-7 space-y-24">
          <TeachingSection />
          <ProBonoSection />
          <ResearchSection />
          <WorkWithMeSection />
        </div>
        <aside className="md:col-span-5 space-y-12">
          <WhatsNewWidget />
          <AIChroniclesWidget />
          <XFeedWidget />
          <HeadlinesWidget />
        </aside>
      </div>
    </main>
  )
}

function TeachingSection() {
  const items = [
    { title: 'Teaching leaders and students.', href: '/teaching/leaders-and-students', subtitle: 'Pedagogical frameworks for the cognitive era.' },
    { title: 'Agentic coding [vibe coding].', href: '/teaching/agentic-coding' },
    { title: 'Change management.', href: '/teaching/change-management' },
  ]

  return (
    <section className="group" id="teaching">
      <h2 className="font-label text-[0.6875rem] uppercase tracking-[0.2em] text-tertiary/70 mb-8 border-l-2 border-tertiary/20 pl-4">
        Teaching leaders and students
      </h2>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              to={item.href}
              className="block p-8 bg-surface-container-low border border-primary/5 hover:border-primary/20 transition-all group/link"
            >
              <span className="font-headline text-3xl md:text-4xl text-on-surface group-hover/link:text-primary transition-colors">
                {item.title}
              </span>
              {item.subtitle && (
                <div className="mt-4 text-secondary opacity-0 group-hover/link:opacity-100 transition-opacity text-sm">
                  {item.subtitle}
                </div>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

function ProBonoSection() {
  return (
    <section id="pro-bono">
      <h2 className="font-label text-[0.6875rem] uppercase tracking-[0.2em] text-tertiary/70 mb-8 border-l-2 border-tertiary/20 pl-4">
        Pro Bono projects
      </h2>
      <div className="grid grid-cols-1 gap-4">
        <a className="p-8 bg-surface-container-low border border-tertiary/5 hover:border-tertiary/20 transition-all" href="#">
          <span className="font-headline text-2xl text-tertiary">AI for leaders.</span>
          <p className="mt-2 text-on-surface-variant font-body text-sm">Navigating non-deterministic systems in governance.</p>
        </a>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a className="p-8 bg-surface-container-low border border-primary/5 hover:border-primary/20 transition-all" href="#">
            <span className="font-headline text-xl text-on-surface">Judging startup competitions.</span>
          </a>
          <a className="p-8 bg-surface-container-low border border-primary/5 hover:border-primary/20 transition-all" href="#">
            <span className="font-headline text-xl text-on-surface">ACVC Group professional community.</span>
          </a>
        </div>
      </div>
    </section>
  )
}

function ResearchSection() {
  return (
    <section className="space-y-12" id="research">
      <h2 className="font-label text-[0.6875rem] uppercase tracking-[0.2em] text-tertiary/70 border-l-2 border-tertiary/20 pl-4">
        Analytics &amp; research
      </h2>
      <div className="space-y-6">
        <article className="relative p-8 bg-surface-container-low border-l-4 border-primary/40 group">
          <Link to="/theaipravda" className="block">
            <span className="font-label text-[0.6rem] text-primary block mb-2 tracking-widest uppercase">Quarterly Publication</span>
            <h3 className="font-headline text-4xl text-on-surface group-hover:italic transition-all">The AI Pravda (Newsletter).</h3>
            <p className="mt-4 text-on-surface-variant max-w-lg text-sm">Critical analysis of machine intelligence and its socio-economic impact.</p>
          </Link>
        </article>
        <article className="relative p-8 bg-surface-container-low border border-primary/5 group hover:border-primary/20 transition-all">
          <Link to="/aichronicles/directory" className="block">
            <h3 className="font-headline text-3xl text-on-surface">AI chronicles (Directory &amp; Book).</h3>
          </Link>
        </article>
        <article className="relative p-8 bg-surface-container-low border border-primary/5 group hover:border-primary/20 transition-all">
          <a className="block" href="#">
            <h3 className="font-headline text-3xl text-on-surface">Academic research in AI.</h3>
          </a>
        </article>
      </div>
    </section>
  )
}

function WorkWithMeSection() {
  const services = ['Advisory.', 'Board membership.', 'Consulting.', 'Mentoring startups.', 'Teaching.']

  return (
    <section className="pt-16 border-t border-primary/10" id="work">
      <div className="bg-surface-container-low p-12 border border-primary/5">
        <h2 className="font-label text-[0.6875rem] uppercase tracking-[0.2em] text-tertiary/70 mb-12">Work with me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-body text-lg text-on-surface">
          {services.map((s) => (
            <div key={s} className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-primary/40"></span>
              <p>{s}</p>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <a
            className="inline-flex items-center gap-4 group bg-surface px-8 py-5 border border-primary/20 hover:border-primary transition-all"
            href="mailto:hello@mgorsky.net"
          >
            <span className="font-headline text-2xl text-primary group-hover:italic transition-all">Connect for engagement</span>
            <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  )
}

function WhatsNewWidget() {
  return (
    <div className="bg-surface-container-low p-8 border border-primary/5">
      <h3 className="font-label text-[0.6rem] uppercase tracking-widest text-tertiary mb-6 flex items-center justify-between">
        <span>What&apos;s New</span>
        <span className="w-1.5 h-1.5 rounded-full bg-tertiary/30"></span>
      </h3>
      <div className="space-y-6">
        <div className="flex gap-4 items-start">
          <span className="font-label text-[0.6rem] text-primary bg-surface px-2 py-1">MAY 24</span>
          <p className="text-sm leading-relaxed text-on-surface-variant">Published &quot;The Latency of Thought&quot; in AI Pravda #14.</p>
        </div>
        <div className="flex gap-4 items-start border-t border-primary/5 pt-4">
          <span className="font-label text-[0.6rem] text-primary bg-surface px-2 py-1">APR 12</span>
          <p className="text-sm leading-relaxed text-on-surface-variant">Keynote at Helsinki Tech Summit on Agentic Frameworks.</p>
        </div>
      </div>
    </div>
  )
}

function AIChroniclesWidget() {
  const entries = ['Transformer Efficiency', 'Vector Database Ethics', 'Model Collapse Theory']

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end border-b border-primary/10 pb-4">
        <h3 className="font-label text-[0.6875rem] uppercase tracking-widest text-tertiary/70">AI Chronicles</h3>
        <span className="text-[0.6rem] text-primary/60 italic">Recent Entries</span>
      </div>
      <div className="space-y-2">
        {entries.map((entry) => (
          <Link
            key={entry}
            to="/aichronicles/directory"
            className="flex justify-between items-center p-4 bg-surface-container-low border border-primary/5 hover:border-primary/30 transition-all group"
          >
            <span className="font-body text-sm group-hover:text-primary transition-colors">{entry}</span>
            <span className="material-symbols-outlined text-xs text-outline group-hover:text-primary transition-colors">north_east</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

function XFeedWidget() {
  return (
    <div className="bg-surface-container-low p-8 border border-primary/5">
      <h3 className="font-label text-[0.6875rem] uppercase tracking-widest text-tertiary/70 mb-6 flex items-center gap-2">
        <span>X Feed</span>
        <span className="w-2 h-2 rounded-full bg-primary/40 animate-pulse"></span>
      </h3>
      <div className="space-y-8">
        <div className="space-y-2">
          <p className="text-sm font-body italic text-on-surface">&quot;The bottleneck of AI implementation isn&apos;t the compute, it&apos;s the lack of semantic clarity in leadership.&quot;</p>
          <p className="text-[0.6rem] text-primary/60">2h ago</p>
        </div>
        <div className="space-y-2 border-t border-primary/5 pt-6">
          <p className="text-sm font-body text-on-surface-variant">Shared a new repository on autonomous agent safety protocols.</p>
          <p className="text-[0.6rem] text-primary/60">1d ago</p>
        </div>
      </div>
    </div>
  )
}

function HeadlinesWidget() {
  return (
    <div className="space-y-6">
      <h3 className="font-label text-[0.6875rem] uppercase tracking-widest text-tertiary/70 border-l-2 border-tertiary/20 pl-4">Headlines</h3>
      <div className="relative overflow-hidden group bg-surface-container-low p-1 border border-primary/5">
        <div className="w-full aspect-video bg-surface-container-high"></div>
        <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-surface-container-low to-transparent">
          <p className="font-headline text-xl text-tertiary">The 2024 AI Governance Map: A Finnish Perspective.</p>
        </div>
      </div>
      <ul className="space-y-4 font-body text-[0.7rem] text-on-surface-variant px-2">
        <li className="flex items-center gap-3">
          <span className="w-1 h-1 bg-primary"></span>
          <span className="hover:text-primary transition-colors cursor-pointer">Why the ACVC community is moving to private servers.</span>
        </li>
        <li className="flex items-center gap-3">
          <span className="w-1 h-1 bg-primary"></span>
          <span className="hover:text-primary transition-colors cursor-pointer">Notes on the latest ICML research submissions.</span>
        </li>
      </ul>
    </div>
  )
}
