import { useState } from 'react'

const subjects = ['All Issues', 'Large Language Models', 'Digital Ethics', 'The Turing Trap', 'Automation Sociology']

const issues = [
  {
    vol: 'Vol. 04 — No. 12',
    date: 'Nov 14, 2024',
    datetime: '2024-11-14',
    title: 'The Sovereignty of the Blank Page: Why Generative AI is a Mirror, Not a Maker',
    summary: 'A deep dive into the psychological cost of outsourcing the initial spark of creation. Exploring how LLMs act as sophisticated statistical echoes rather than creative agents.',
    tags: ['Philosophy', 'Creative Agency'],
  },
  {
    vol: 'Vol. 04 — No. 11',
    date: 'Oct 28, 2024',
    datetime: '2024-10-28',
    title: 'Silicon Panopticon: The Illusion of Private Inference',
    summary: 'Analyzing the erosion of digital boundaries as personal data becomes the primary fuel for proprietary model weights.',
    tags: ['Privacy', 'Infrastructure'],
  },
  {
    vol: 'Vol. 04 — No. 10',
    date: 'Oct 12, 2024',
    datetime: '2024-10-12',
    title: 'The Ghost in the Training Set: Artisanal Data and the Death of Mediocrity',
    summary: 'Why the middle-tier of professional labor is most at risk, and how "human-in-the-loop" is becoming a euphemism for "unpaid trainer."',
    tags: ['Labor Economics', 'Machine Ethics'],
  },
  {
    vol: 'Vol. 04 — No. 09',
    date: 'Sep 20, 2024',
    datetime: '2024-09-20',
    title: 'The Turing Trap: Misinterpreting Fluency for Sentience',
    summary: 'A linguistic critique of how anthropomorphizing software leads to dangerous policy decisions and eroded trust in human experts.',
    tags: ['Linguistics', 'Sociology'],
  },
]

export default function AIPravda() {
  const [activeFilter, setActiveFilter] = useState('All Issues')

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-screen-xl mx-auto">
      {/* Editorial Header */}
      <header className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
        <div className="md:col-span-8">
          <h1 className="font-headline text-5xl md:text-7xl text-tertiary leading-tight tracking-tighter mb-6">
            The AI Pravda
          </h1>
          <p className="font-headline text-xl md:text-2xl text-primary/80 max-w-2xl italic leading-relaxed">
            A clinical examination of the synthetic revolution. These archives collect long-form critiques originally published as a LinkedIn newsletter, focusing on the intersection of human agency and machine intelligence.
          </p>
        </div>
        <div className="md:col-span-4 flex flex-col justify-end items-start md:items-end">
          <span className="font-label text-[0.6875rem] uppercase tracking-[0.2em] text-secondary mb-2">Curated by</span>
          <span className="font-headline text-lg text-on-surface">M. A. Gorsky</span>
          <div className="mt-4 w-12 h-px bg-outline-variant/30"></div>
        </div>
      </header>

      {/* Search and Filters */}
      <section className="mb-24 space-y-12">
        <div className="flex flex-col md:flex-row gap-8 items-end border-b border-outline-variant/10 pb-12">
          <div className="w-full md:w-1/3 group">
            <label className="font-label text-[0.6875rem] uppercase tracking-widest text-secondary mb-4 block">Search Archives</label>
            <div className="relative">
              <input
                className="w-full bg-surface-container-low border-0 border-b border-outline-variant/20 py-3 px-4 text-on-surface focus:ring-0 focus:border-primary placeholder:text-outline/40 transition-all font-body focus:outline-none"
                placeholder="Keywords, years, or concepts..."
                type="text"
              />
              <span className="material-symbols-outlined absolute right-4 top-3 text-outline/40 group-focus-within:text-primary transition-colors">search</span>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <label className="font-label text-[0.6875rem] uppercase tracking-widest text-secondary mb-4 block">Filter by Subject</label>
            <div className="flex flex-wrap gap-3">
              {subjects.map((subject) => (
                <button
                  key={subject}
                  onClick={() => setActiveFilter(subject)}
                  className={`px-4 py-1.5 font-label text-[0.65rem] uppercase tracking-wider transition-colors ${
                    activeFilter === subject
                      ? 'bg-primary text-on-primary'
                      : 'bg-surface-container-low text-secondary hover:text-on-surface border border-outline-variant/20'
                  }`}
                >
                  {subject}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Archive List */}
      <section className="space-y-4">
        {issues.map((issue) => (
          <article
            key={issue.vol}
            className="group relative p-12 md:p-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-start bg-surface-container-low border border-outline-variant/5 hover:border-primary/20 transition-all cursor-pointer"
          >
            <div className="md:col-span-2">
              <span className="font-label text-[0.6875rem] text-secondary tracking-widest uppercase block mb-1">{issue.vol}</span>
              <time className="font-body text-xs text-outline" dateTime={issue.datetime}>{issue.date}</time>
            </div>
            <div className="md:col-span-7 space-y-4">
              <h2 className="font-headline text-3xl text-on-surface group-hover:text-primary transition-colors leading-tight">
                {issue.title}
              </h2>
              <p className="font-body text-secondary/80 leading-relaxed text-lg max-w-xl">
                {issue.summary}
              </p>
              <div className="flex gap-4 pt-2">
                {issue.tags.map((tag) => (
                  <span key={tag} className="font-label text-[0.6rem] text-tertiary/80 border border-tertiary/30 px-2 py-0.5">{tag}</span>
                ))}
              </div>
            </div>
            <div className="md:col-span-3 flex md:justify-end items-center">
              <span className="material-symbols-outlined text-outline/30 group-hover:text-primary group-hover:translate-x-2 transition-all duration-300">east</span>
            </div>
          </article>
        ))}
      </section>

      {/* Load More */}
      <div className="mt-16 flex justify-center">
        <button className="font-label text-[0.6875rem] uppercase tracking-widest text-secondary hover:text-primary transition-colors py-4 px-8 bg-surface-container-low border border-outline-variant/10 hover:border-primary/30 flex items-center gap-4 group">
          Access Older Records
          <span className="material-symbols-outlined text-sm group-hover:rotate-90 transition-transform">south</span>
        </button>
      </div>

      {/* Marginalia */}
      <aside className="hidden lg:block fixed left-12 bottom-32 w-48">
        <p className="font-body text-[0.75rem] text-primary/40 leading-relaxed italic border-l border-primary/20 pl-4">
          &quot;The transition from tool to agent is the most profound shift in the history of human instrumentation.&quot;
        </p>
      </aside>
    </main>
  )
}
