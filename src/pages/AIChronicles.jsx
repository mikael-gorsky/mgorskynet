import { CardLink } from '../components/Card'

export default function AIChronicles() {
  return (
    <main className="pt-40 pb-24 px-6 md:px-12 max-w-screen-xl mx-auto">
      <header className="mb-16">
        <span className="font-label text-[0.6875rem] uppercase tracking-[0.2em] text-primary/60 mb-6 block">Analytics &amp; Research</span>
        <h1 className="font-headline text-4xl md:text-6xl font-light text-on-surface leading-tight">AI Chronicles</h1>
        <p className="font-headline text-xl text-on-surface-variant mt-4 max-w-2xl leading-relaxed">
          A research project tracking the evolution of artificial intelligence — through daily curation, a reference collection of sources, and a book in development.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <CardLink to="/aichronicles/digest" variant="card-featured" className="p-10 group">
          <span className="font-label text-[0.6rem] text-primary block mb-3 tracking-widest uppercase">Updated daily</span>
          <h2 className="font-headline text-3xl text-on-surface group-hover:text-primary transition-colors mb-4">Daily Digest</h2>
          <p className="font-body text-on-surface-variant text-sm leading-relaxed">
            Curated AI news from across the industry. Hand-selected developments in agentic coding, research, policy, and infrastructure — published every day.
          </p>
        </CardLink>

        <CardLink to="/aichronicles/rolodex" variant="card-v3" className="p-10 group">
          <span className="font-label text-[0.6rem] text-primary block mb-3 tracking-widest uppercase">Reference collection</span>
          <h2 className="font-headline text-3xl text-on-surface group-hover:text-primary transition-colors mb-4">Rolodex</h2>
          <p className="font-body text-on-surface-variant text-sm leading-relaxed">
            A curated collection of AI information sources — newsletters, academic repositories, tools, and policy organizations worth following.
          </p>
        </CardLink>

        <CardLink to="/aichronicles/book" variant="card-v5" className="p-10 group">
          <span className="font-label text-[0.6rem] text-primary block mb-3 tracking-widest uppercase">In development</span>
          <h2 className="font-headline text-3xl text-on-surface group-hover:text-primary transition-colors mb-4">The Book</h2>
          <p className="font-body text-on-surface-variant text-sm leading-relaxed">
            An inquiry into the symbiotic evolution of machine intelligence and human creative agency. Manuscript in progress.
          </p>
        </CardLink>
      </div>
    </main>
  )
}
