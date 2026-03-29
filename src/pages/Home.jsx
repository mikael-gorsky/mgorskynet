import { Link } from 'react-router-dom'
import { useSanityQuery } from '../lib/useSanity'
import {
  fetchSiteSettings, fetchTeachingPrograms, fetchProBonoProjects,
  fetchServices, fetchNewsItems, fetchXPosts, fetchHeadlines,
} from '../lib/sanity'

const defaultSettings = {
  tagline: 'Strategic Development.\nAI Research.\nEducation.',
  taglineAccent: 'AI Research.',
  location: 'Helsinki — Global Portfolio',
  email: 'hello@mgorsky.net',
}

const defaultTeaching = [
  { slug: { current: 'leaders-and-students' }, homepageTitle: 'Teaching leaders and students.', homepageSubtitle: 'Pedagogical frameworks for the cognitive era.' },
  { slug: { current: 'agentic-coding' }, homepageTitle: 'Agentic coding [vibe coding].' },
  { slug: { current: 'change-management' }, homepageTitle: 'Change management.' },
]

const defaultProBono = [
  { title: 'AI for leaders.', description: 'Navigating non-deterministic systems in governance.', featured: true, order: 1 },
  { title: 'Judging startup competitions.', featured: false, order: 2 },
  { title: 'ACVC Group professional community.', featured: false, order: 3 },
]

const defaultServices = [
  { title: 'Advisory.' }, { title: 'Board membership.' }, { title: 'Consulting.' },
  { title: 'Mentoring startups.' }, { title: 'Teaching.' },
]

const defaultNews = [
  { dateLabel: 'MAY 24', text: 'Published "The Latency of Thought" in AI Pravda #14.' },
  { dateLabel: 'APR 12', text: 'Keynote at Helsinki Tech Summit on Agentic Frameworks.' },
]

const defaultXPosts = [
  { text: '"The bottleneck of AI implementation isn\'t the compute, it\'s the lack of semantic clarity in leadership."', isQuote: true, timeLabel: '2h ago' },
  { text: 'Shared a new repository on autonomous agent safety protocols.', isQuote: false, timeLabel: '1d ago' },
]

const defaultHeadlines = [
  { title: 'The 2024 AI Governance Map: A Finnish Perspective.', featured: true },
  { title: 'Why the ACVC community is moving to private servers.', featured: false },
  { title: 'Notes on the latest ICML research submissions.', featured: false },
]

const defaultChroniclesEntries = ['Transformer Efficiency', 'Vector Database Ethics', 'Model Collapse Theory']

export default function Home() {
  const { data: settings } = useSanityQuery(fetchSiteSettings, defaultSettings)
  const { data: teaching } = useSanityQuery(fetchTeachingPrograms, defaultTeaching)
  const { data: proBono } = useSanityQuery(fetchProBonoProjects, defaultProBono)
  const { data: services } = useSanityQuery(fetchServices, defaultServices)
  const { data: news } = useSanityQuery(fetchNewsItems, defaultNews)
  const { data: xPosts } = useSanityQuery(fetchXPosts, defaultXPosts)
  const { data: headlines } = useSanityQuery(fetchHeadlines, defaultHeadlines)

  const taglineParts = (settings.tagline || defaultSettings.tagline).split('\n')
  const accent = settings.taglineAccent || defaultSettings.taglineAccent

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
      <header className="mb-24 md:mb-40">
        <h1 className="font-headline text-5xl md:text-7xl font-light tracking-tight text-on-surface max-w-4xl leading-tight">
          {taglineParts.map((part, i) => {
            const trimmed = part.trim()
            if (trimmed === accent) {
              return <span key={i}><span className="text-primary italic">{trimmed}</span> </span>
            }
            return <span key={i}>{trimmed}{i < taglineParts.length - 1 ? <br /> : ''} </span>
          })}
        </h1>
        <div className="mt-8 flex items-center gap-4">
          <span className="w-12 h-[1px] bg-primary/40"></span>
          <p className="font-label text-[0.6rem] uppercase tracking-widest text-primary/80">{settings.location || defaultSettings.location}</p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-x-12">
        <div className="md:col-span-7 space-y-24">
          <TeachingSection items={teaching} />
          <ProBonoSection items={proBono} />
          <ResearchSection />
          <WorkWithMeSection services={services} email={settings.email || defaultSettings.email} />
        </div>
        <aside className="md:col-span-5 space-y-12">
          <WhatsNewWidget items={news} />
          <AIChroniclesWidget entries={defaultChroniclesEntries} />
          <XFeedWidget posts={xPosts} />
          <HeadlinesWidget items={headlines} />
        </aside>
      </div>
    </main>
  )
}

function TeachingSection({ items }) {
  return (
    <section className="group" id="teaching">
      <h2 className="font-label text-[0.6875rem] uppercase tracking-[0.2em] text-tertiary/70 mb-8 border-l-2 border-tertiary/20 pl-4">
        Teaching leaders and students
      </h2>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.slug?.current || item.homepageTitle}>
            <Link
              to={`/teaching/${item.slug?.current}`}
              className="block p-8 bg-surface-container-low border border-primary/5 hover:border-primary/20 transition-all group/link"
            >
              <span className="font-headline text-3xl md:text-4xl text-on-surface group-hover/link:text-primary transition-colors">
                {item.homepageTitle}
              </span>
              {item.homepageSubtitle && (
                <div className="mt-4 text-secondary opacity-0 group-hover/link:opacity-100 transition-opacity text-sm">
                  {item.homepageSubtitle}
                </div>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

function ProBonoSection({ items }) {
  const featured = items.find((p) => p.featured)
  const rest = items.filter((p) => !p.featured)

  return (
    <section id="pro-bono">
      <h2 className="font-label text-[0.6875rem] uppercase tracking-[0.2em] text-tertiary/70 mb-8 border-l-2 border-tertiary/20 pl-4">
        Pro Bono projects
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {featured && (
          <a className="p-8 bg-surface-container-low border border-tertiary/5 hover:border-tertiary/20 transition-all" href={featured.url || '#'}>
            <span className="font-headline text-2xl text-tertiary">{featured.title}</span>
            {featured.description && <p className="mt-2 text-on-surface-variant font-body text-sm">{featured.description}</p>}
          </a>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {rest.map((p) => (
            <a key={p.title} className="p-8 bg-surface-container-low border border-primary/5 hover:border-primary/20 transition-all" href={p.url || '#'}>
              <span className="font-headline text-xl text-on-surface">{p.title}</span>
            </a>
          ))}
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

function WorkWithMeSection({ services, email }) {
  return (
    <section className="pt-16 border-t border-primary/10" id="work">
      <div className="bg-surface-container-low p-12 border border-primary/5">
        <h2 className="font-label text-[0.6875rem] uppercase tracking-[0.2em] text-tertiary/70 mb-12">Work with me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-body text-lg text-on-surface">
          {services.map((s) => (
            <div key={s.title} className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-primary/40"></span>
              <p>{s.title}</p>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <a
            className="inline-flex items-center gap-4 group bg-surface px-8 py-5 border border-primary/20 hover:border-primary transition-all"
            href={`mailto:${email}`}
          >
            <span className="font-headline text-2xl text-primary group-hover:italic transition-all">Connect for engagement</span>
            <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  )
}

function WhatsNewWidget({ items }) {
  return (
    <div className="bg-surface-container-low p-8 border border-primary/5">
      <h3 className="font-label text-[0.6rem] uppercase tracking-widest text-tertiary mb-6 flex items-center justify-between">
        <span>What&apos;s New</span>
        <span className="w-1.5 h-1.5 rounded-full bg-tertiary/30"></span>
      </h3>
      <div className="space-y-6">
        {items.map((item, i) => (
          <div key={i} className={`flex gap-4 items-start ${i > 0 ? 'border-t border-primary/5 pt-4' : ''}`}>
            <span className="font-label text-[0.6rem] text-primary bg-surface px-2 py-1 shrink-0">{item.dateLabel}</span>
            <p className="text-sm leading-relaxed text-on-surface-variant">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function AIChroniclesWidget({ entries }) {
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

function XFeedWidget({ posts }) {
  return (
    <div className="bg-surface-container-low p-8 border border-primary/5">
      <h3 className="font-label text-[0.6875rem] uppercase tracking-widest text-tertiary/70 mb-6 flex items-center gap-2">
        <span>X Feed</span>
        <span className="w-2 h-2 rounded-full bg-primary/40 animate-pulse"></span>
      </h3>
      <div className="space-y-8">
        {posts.map((post, i) => (
          <div key={i} className={`space-y-2 ${i > 0 ? 'border-t border-primary/5 pt-6' : ''}`}>
            <p className={`text-sm font-body ${post.isQuote ? 'italic text-on-surface' : 'text-on-surface-variant'}`}>{post.isQuote ? `"${post.text}"` : post.text}</p>
            <p className="text-[0.6rem] text-primary/60">{post.timeLabel}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function HeadlinesWidget({ items }) {
  const featured = items.find((h) => h.featured)
  const rest = items.filter((h) => !h.featured)

  return (
    <div className="space-y-6">
      <h3 className="font-label text-[0.6875rem] uppercase tracking-widest text-tertiary/70 border-l-2 border-tertiary/20 pl-4">Headlines</h3>
      {featured && (
        <div className="relative overflow-hidden group bg-surface-container-low p-1 border border-primary/5">
          <div className="w-full aspect-video bg-surface-container-high"></div>
          <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-surface-container-low to-transparent">
            <p className="font-headline text-xl text-tertiary">{featured.title}</p>
          </div>
        </div>
      )}
      <ul className="space-y-4 font-body text-[0.7rem] text-on-surface-variant px-2">
        {rest.map((h) => (
          <li key={h.title} className="flex items-center gap-3">
            <span className="w-1 h-1 bg-primary"></span>
            <span className="hover:text-primary transition-colors cursor-pointer">{h.title}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
