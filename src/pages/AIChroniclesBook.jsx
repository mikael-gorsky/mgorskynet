import { useSanityQuery } from '../lib/useSanity'
import { fetchAIChroniclesBook } from '../lib/sanity'

const defaultBook = {
  status: 'Manuscript in Development',
  targetRelease: 'Winter 2025',
  format: 'Hardcover Monograph / Digital Archive',
  publisher: 'In Negotiation',
  theses: [
    { category: 'Cognitive Offloading', title: 'The Erosion of the First Draft', description: 'How the disappearance of the "blank page" through generative seeding alters the neurobiology of creative problem-solving.' },
    { category: 'Latent Ethics', title: 'The Ghost in the Dataset', description: 'Investigating the invisible labor and cultural biases baked into the foundational weights of contemporary LLMs.' },
    { category: 'Future Craft', title: 'The Curator as Creator', description: 'Redefining high-end craftsmanship in an age where technical execution is commoditized and taste becomes the primary currency.' },
  ],
  excerpt: 'We often mistake speed for fluency. The prompt is not a command; it is a negotiation with a million dead voices held in digital amber. When we ask the machine to \'be creative,\' we are asking it to find the average of human brilliance, which is, by definition, mediocre. The true chronicle begins when we step outside that average.',
  timeline: [
    { date: 'NOV 2024', event: 'Completion of Chapter 4: "The Taxonomy of Hallucination." Preliminary agent-based writing tools finalized.' },
    { date: 'AUG 2024', event: 'Archive of interviews with 15 leading AI researchers and digital artists concluded. Shift to structural editing phase.' },
    { date: 'JAN 2024', event: 'Project inception and securement of initial research grant. Exploration of the "Post-Truth Aesthetic" in machine outputs.' },
  ],
}

export default function AIChroniclesBook() {
  const { data: book } = useSanityQuery(fetchAIChroniclesBook, defaultBook)

  return (
    <main className="pt-48 pb-24 px-6 md:px-12 max-w-screen-xl mx-auto">
      <header className="mb-32">
        <span className="font-label text-[0.6875rem] uppercase tracking-widest text-primary mb-6 block">Project in Development</span>
        <h1 className="font-headline text-5xl md:text-7xl font-light text-on-surface leading-tight max-w-4xl italic">
          AI Chronicles: <span className="not-italic text-primary">The Book</span>
        </h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <article className="col-span-12 md:col-span-7 space-y-16">
          <section>
            <h2 className="font-headline text-3xl mb-8 text-tertiary">The Premise</h2>
            <p className="font-body text-lg leading-relaxed text-on-surface-variant">
              AI Chronicles is an inquiry into the symbiotic evolution of machine intelligence and human creative agency. Far from a technical manual, this volume serves as a cultural autopsy of the transition from traditional cognitive labor to the era of algorithmic co-creation.
            </p>
            <p className="mt-6 font-body text-lg leading-relaxed text-on-surface-variant">
              The project documents two years of longitudinal research, ethnographic interviews with latent space pioneers, and a series of experimental workflows that redefine what it means to &quot;author&quot; a thought in the twenty-first century.
            </p>
          </section>

          <blockquote className="pl-8 border-l border-primary/30 py-2">
            <p className="font-headline text-2xl italic text-primary leading-snug">
              &quot;The machine does not replace the architect; it forces the architect to confront the nature of the foundation itself.&quot;
            </p>
            <cite className="font-label text-[0.6875rem] uppercase tracking-widest text-secondary mt-4 block not-italic">— Draft Preface, Page 14</cite>
          </blockquote>

          <section>
            <h2 className="font-headline text-3xl mb-8 text-tertiary">Core Theses</h2>
            <ul className="space-y-12">
              {(book.theses || defaultBook.theses).map((thesis, i) => (
                <li key={i}>
                  <span className="font-label text-primary mb-2 block">{String(i + 1).padStart(2, '0')} / {thesis.category}</span>
                  <h3 className="font-headline text-xl text-on-surface mb-3">{thesis.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed">{thesis.description}</p>
                </li>
              ))}
            </ul>
          </section>
        </article>

        <aside className="col-span-12 md:col-span-4 md:col-start-9 space-y-12">
          <div className="bg-surface-container-low p-8 border border-primary/10">
            <h4 className="font-label text-[0.6875rem] uppercase tracking-widest text-primary mb-6">Publication Details</h4>
            <div className="space-y-6">
              <div>
                <span className="block text-xs text-secondary/60 mb-1">Status</span>
                <span className="font-body text-sm text-tertiary">{book.status}</span>
              </div>
              <div>
                <span className="block text-xs text-secondary/60 mb-1">Target Release</span>
                <span className="font-body text-sm text-on-surface">{book.targetRelease}</span>
              </div>
              <div>
                <span className="block text-xs text-secondary/60 mb-1">Format</span>
                <span className="font-body text-sm text-on-surface">{book.format}</span>
              </div>
              <div>
                <span className="block text-xs text-secondary/60 mb-1">Publisher</span>
                <span className="font-body text-sm text-on-surface italic">{book.publisher}</span>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="aspect-[3/4] bg-surface-container-low flex items-end p-8 overflow-hidden border border-primary/5">
              <div className="z-10">
                <span className="font-headline text-2xl text-on-surface opacity-80 italic">Cover Concept Alpha</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              <div className="absolute inset-0 bg-surface-container-high opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
            </div>
            <p className="font-label text-[0.6875rem] text-secondary mt-4 italic">Preliminary visual study for the physical edition.</p>
          </div>
        </aside>
      </div>

      <section className="mt-48 bg-surface-container-low py-24 px-8 md:px-24 border-y border-primary/5">
        <div className="max-w-3xl mx-auto">
          <span className="font-label text-[0.6875rem] uppercase tracking-widest text-primary mb-12 block text-center">Selected Excerpt</span>
          <div className="font-headline text-2xl md:text-3xl leading-relaxed text-on-surface text-center italic font-light">
            &quot;{book.excerpt || defaultBook.excerpt}&quot;
          </div>
          <div className="mt-12 flex justify-center">
            <div className="h-px w-12 bg-primary/30"></div>
          </div>
        </div>
      </section>

      <section className="mt-48">
        <h2 className="font-headline text-3xl mb-12 text-tertiary">Development Timeline</h2>
        <div className="space-y-px bg-primary/10">
          {(book.timeline || defaultBook.timeline).map((entry) => (
            <div key={entry.date} className="grid grid-cols-12 py-8 bg-surface items-baseline border-b border-primary/5">
              <div className="col-span-3 font-label text-[0.6875rem] text-primary">{entry.date}</div>
              <div className="col-span-9 font-body text-sm text-on-surface-variant">{entry.event}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
