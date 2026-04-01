import { useState, useMemo } from 'react'

const sources = [
  { category: 'Academic', title: 'ArXiv AI Sanitizer', description: 'A curated weekly filter of the most impactful machine learning papers, stripped of hype and focused on foundational breakthroughs.', updated: 'Oct 2024', sourceType: 'Open Source' },
  { category: 'Newsletter', title: 'The Latent Space', description: 'Deep-dive explorations into the engineering side of AI. Highly technical interviews with the builders of the modern stack.', updated: 'Nov 2024', sourceType: 'Substack' },
  { category: 'Technical', title: 'HF Model Explorer', description: 'Advanced visualization tool for understanding parameter distribution and architecture across the HuggingFace ecosystem.', updated: 'Sep 2024', sourceType: 'Web Tool' },
  { category: 'Policy', title: 'Algorithmic Watch', description: 'A European-based observatory analyzing the impact of algorithmic decision-making systems on society and human rights.', updated: 'Oct 2024', sourceType: 'Non-Profit' },
  { category: 'Technical', title: 'Weights & Biases Reports', description: 'Live experiment tracking and public reports on large-scale training runs, providing transparency into model behavior.', updated: 'Nov 2024', sourceType: 'Enterprise' },
  { category: 'Academic', title: 'Distill.pub Archive', description: 'The gold standard for interactive machine learning communication. Essential reading for intuitive understanding of complex models.', updated: 'Legacy Archive', sourceType: 'Peer-Reviewed' },
]

export default function AIChroniclesRolodex() {
  const [activeCategory, setActiveCategory] = useState('All Sources')
  const [search, setSearch] = useState('')

  const categories = useMemo(() => {
    const cats = new Set(sources.map((s) => s.category))
    return ['All Sources', ...Array.from(cats)]
  }, [])

  const filtered = useMemo(() => {
    let result = sources
    if (activeCategory !== 'All Sources') result = result.filter((s) => s.category === activeCategory)
    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter((s) => s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q))
    }
    return result
  }, [activeCategory, search])

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-screen-xl mx-auto">
      <header className="mb-24 max-w-3xl">
        <p className="font-label text-[0.6875rem] uppercase tracking-widest text-primary mb-4">AI Chronicles</p>
        <h1 className="font-headline text-5xl md:text-7xl font-light tracking-tight text-tertiary mb-8">Rolodex</h1>
        <p className="font-headline text-xl md:text-2xl text-on-surface-variant leading-relaxed italic">An open, public, curated collection of AI information sources. Structured as a reference tool for the discerning researcher.</p>
      </header>

      <section className="mb-16 border-b border-outline-variant/20 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="w-full md:w-1/2">
          <label className="font-label text-[0.6875rem] uppercase tracking-widest text-secondary mb-2 block">Search Rolodex</label>
          <div className="relative">
            <input className="w-full bg-transparent border-0 border-b border-outline-variant/30 focus:ring-0 focus:border-primary px-0 py-3 text-lg font-body placeholder:text-on-surface-variant/30 focus:outline-none" placeholder="Keywords, authors, or domains..." type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
            <span className="material-symbols-outlined absolute right-0 top-3 text-primary">search</span>
          </div>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-2 md:pb-0">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)} className={`font-label text-[0.6875rem] uppercase tracking-widest whitespace-nowrap transition-colors ${activeCategory === cat ? 'text-tertiary border-b border-tertiary' : 'text-secondary hover:text-primary'}`}>{cat}</button>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((source, idx) => (
          <article key={source.title} className={`card card-v${(idx % 6) + 1} p-10 flex flex-col h-full group transition-colors duration-300`}>
            <div className="flex justify-between items-start mb-6">
              <span className="font-label text-[0.6875rem] uppercase tracking-widest text-primary">{source.category}</span>
              <span className="material-symbols-outlined text-outline group-hover:text-tertiary transition-colors">north_east</span>
            </div>
            <h3 className="font-headline text-2xl text-tertiary mb-4 group-hover:italic transition-all">{source.title}</h3>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-8 flex-grow">{source.description}</p>
            <div className="pt-4 border-t border-outline-variant/10 flex items-center justify-between">
              <span className="font-label text-[0.6875rem] text-secondary">{source.updated}</span>
              <span className="font-label text-[0.6875rem] text-primary italic">{source.sourceType}</span>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-32 card card-featured p-10 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="font-headline text-3xl text-tertiary leading-tight">A note on curation.</h2>
          <div className="mt-8 h-px w-12 bg-primary"></div>
        </div>
        <div className="md:col-span-8">
          <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-6">The directory is not intended to be exhaustive. In an era of algorithmic noise, exhaustive lists often become self-defeating. Instead, this collection is manually curated based on three criteria:</p>
          <ul className="space-y-6">
            <li className="flex gap-4"><span className="font-headline text-primary italic text-xl">01.</span><p className="font-body text-on-surface"><strong className="text-tertiary">Intellectual Rigor:</strong> Sources must prioritize evidence-based claims and technical transparency over speculative marketing.</p></li>
            <li className="flex gap-4"><span className="font-headline text-primary italic text-xl">02.</span><p className="font-body text-on-surface"><strong className="text-tertiary">Longevity:</strong> We favor platforms that have demonstrated a consistent commitment to quality over multiple hardware/software cycles.</p></li>
            <li className="flex gap-4"><span className="font-headline text-primary italic text-xl">03.</span><p className="font-body text-on-surface"><strong className="text-tertiary">Accessibility:</strong> While technical, the sources should provide a clear path for a motivated reader to build foundational understanding.</p></li>
          </ul>
        </div>
      </section>
    </main>
  )
}
