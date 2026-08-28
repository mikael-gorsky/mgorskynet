import { Link } from 'react-router-dom'
import { Card, CardLink } from '../components/Card'
import usePageMeta from '../lib/usePageMeta'

const cardVariants = ['card-v1', 'card-v2', 'card-v3', 'card-v4', 'card-v5', 'card-v6']

export default function Home() {
  usePageMeta({
    description: 'Mikael Alemu Gorsky is an educator and researcher, and the author of two programs, Agentic Software Engineering and Building AI-Native Agentic Systems.',
  })
  return (
    <main className="pt-16 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-x-12">
        <div className="md:col-span-7 space-y-24">
          <TeachingSection />
          <ResearchSection />
          <ProBonoSection />
        </div>
        <aside className="md:col-span-5 space-y-12">
          <RecentWidget />
        </aside>
      </div>
    </main>
  )
}

function Hero() {
  return (
    <div className="flex items-start gap-8 mt-8 mb-16">
      <img src="/sketch-portrait.png" alt="Mikael Alemu Gorsky" className="shrink-0 object-contain object-top h-48 md:h-56 w-auto" />
      <div className="text-2xl leading-relaxed welcome-text" style={{ color: 'var(--t-text)', textShadow: '0 3px 10px rgba(0, 0, 0, 0.5), 0 6px 20px rgba(0, 0, 0, 0.3)' }}>
        <h1 className="sr-only">Mikael Alemu Gorsky — educator and researcher</h1>
        <p className="mb-4">
          <strong className="font-bold">Mikael Alemu</strong> is an educator and researcher, and the author of two programs:
          Agentic Software Engineering, on building software with AI agents, and Building AI-Native Agentic Systems,
          on building software that thinks.
        </p>
        <p className="mb-4">
          He teaches at the Holon Institute of Technology, near Tel Aviv, where Agentic Software Engineering runs
          as a credit-bearing course.
        </p>
        <p>
          Nine published works, 76 citations. A 350-page textbook under contract with a major academic publisher.
        </p>
      </div>
    </div>
  )
}

function ContentCard({ to, href, variant, characteristic, name, comment }) {
  const body = (
    <>
      <span className="font-label text-[0.6rem] uppercase tracking-widest text-primary block mb-2">{characteristic}</span>
      <h3 className="font-headline text-2xl text-on-surface group-hover/link:text-primary transition-colors">{name}</h3>
      <p className="mt-2 text-on-surface-variant font-body text-sm">{comment}</p>
    </>
  )

  if (!to && !href) {
    return <Card variant={variant} className="px-10 py-6">{body}</Card>
  }

  return (
    <CardLink to={to} href={href} variant={variant} className="px-10 py-6 group/link">
      {body}
    </CardLink>
  )
}

function SectionHeader({ children }) {
  return (
    <h2 className="font-label text-[0.6875rem] uppercase tracking-[0.2em] mb-8 border-l-2 pl-4 section-title" style={{ color: 'var(--t-accent)', borderColor: 'color-mix(in srgb, var(--t-accent) 30%, transparent)' }}>
      {children}
    </h2>
  )
}

function TeachingSection() {
  return (
    <section id="teaching">
      <SectionHeader>Teaching and programs</SectionHeader>
      <div className="space-y-6">
        <ContentCard
          to="/ase26"
          variant="card-featured"
          characteristic="Program, preprint and textbook"
          name="Agentic Software Engineering"
          comment="The discipline of structured, auditable human-agent workflows for building software. The human frames, specifies and judges. The agent executes. Nineteen modules in four parts, built on a running project called Tribunal, a web application in which agents argue opposing sides of a case and a judge agent decides. Taught for credit at the Holon Institute of Technology."
        />
        <ContentCard
          variant={cardVariants[0]}
          characteristic="Program, paper and book in writing"
          name="Building AI-Native Agentic Systems"
          comment="How to build systems that hold a language model as a working component, and treat that component as what it is: stochastic, slow and metered. Fourteen modules in four parts, about seventy hours. The running project is the Observatory, a news agency that watches sources, selects what matters and publishes on a cadence."
        />
      </div>
    </section>
  )
}

function ResearchSection() {
  return (
    <section id="research">
      <SectionHeader>Research and analytics</SectionHeader>
      <div className="space-y-6">
        <ContentCard
          to="/research/academic"
          variant="card-featured"
          characteristic="Journals and proceedings"
          name="Publications"
          comment="Nine works, 76 citations. Research on artificial intelligence in education, with Ilya Levin and Alexei Semenov."
        />
        <ContentCard
          to="/theaipravda"
          variant={cardVariants[2]}
          characteristic="LinkedIn newsletter"
          name="The AI Pravda"
          comment="Critical analysis of artificial intelligence and its effect on work and society. 5,500+ subscribers. 103 issues archived in full."
        />
      </div>
    </section>
  )
}

function ProBonoSection() {
  return (
    <section id="pro-bono">
      <SectionHeader>Pro bono</SectionHeader>
      <div className="space-y-6">
        <ContentCard
          to="/probono/ai-for-seniors"
          variant="card-featured"
          characteristic="Free workshop"
          name="AI for seniors"
          comment="Helping older adults use everyday AI tools. Delivered to Russian-speaking communities in Israel."
        />
        <div className="grid grid-cols-[2fr_3fr] gap-6">
          <ContentCard
            to="/probono/judging-startups"
            variant="card-v4"
            characteristic="Unpaid time"
            name="Startup competitions"
            comment="Judging and mentoring early-stage ventures."
          />
          <ContentCard
            to="/probono/acvc-group"
            variant="card-v5"
            characteristic="Community"
            name="AC/VC LinkedIn group"
            comment="A group for developers and students working with coding agents."
          />
        </div>
      </div>
    </section>
  )
}

/**
 * Own work, newest first. Six lines is the intended length —
 * four entries are still to be supplied.
 */
const recent = [
  {
    date: '31 May 2026',
    text: 'Agentic Software Engineering preprint on arXiv',
    href: 'https://arxiv.org/abs/2606.01152',
  },
  {
    date: '2026',
    text: 'Paper accepted, Higher Education Institutions Conference',
    href: null,
  },
]

function RecentWidget() {
  if (recent.length === 0) return null

  return (
    <Card variant="card-widget" className="p-10">
      <h2 className="font-label text-[0.6rem] uppercase tracking-widest text-tertiary mb-6">Recent</h2>
      <div className="space-y-5">
        {recent.map((item, i) => {
          const row = (
            <>
              <span className="font-label text-[0.6rem] text-primary bg-black/30 px-2 py-1 shrink-0">{item.date}</span>
              <p className="text-sm leading-relaxed text-on-surface-variant group-hover:text-primary transition-colors">{item.text}</p>
            </>
          )
          const cls = `flex gap-4 items-start group ${i > 0 ? 'border-t border-primary/5 pt-5' : ''}`

          if (!item.href) {
            return <div key={i} className={cls}>{row}</div>
          }
          if (item.href.startsWith('/')) {
            return <Link key={i} to={item.href} className={cls}>{row}</Link>
          }
          return (
            <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className={cls}>
              {row}
            </a>
          )
        })}
      </div>
    </Card>
  )
}
