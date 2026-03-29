import { useParams } from 'react-router-dom'

const projects = {
  'ai-for-seniors': {
    title: 'AI for Seniors',
    description: 'Navigating non-deterministic systems in governance. A pro bono initiative to help senior professionals understand and adopt AI tools in their daily workflows.',
  },
  'judging-startups': {
    title: 'Judging Startup Competitions',
    description: 'Contributing expertise as a judge and mentor at startup competitions, evaluating AI-driven ventures and providing strategic guidance to early-stage founders.',
  },
  'acvc-group': {
    title: 'ACVC Group Professional Community',
    description: 'Leading and building ACVC Group as a professional community on LinkedIn, fostering meaningful connections and knowledge exchange among AI and venture professionals.',
  },
}

export default function ProBono() {
  const { slug } = useParams()
  const project = projects[slug]

  if (!project) {
    return (
      <main className="pt-48 pb-24 px-6 md:px-12 max-w-screen-xl mx-auto">
        <h1 className="font-headline text-4xl text-on-surface">Project not found.</h1>
      </main>
    )
  }

  return (
    <main className="pt-40 pb-24 px-6 md:px-12 max-w-screen-xl mx-auto">
      <header className="mb-16">
        <span className="font-label text-[0.6875rem] uppercase tracking-[0.2em] text-primary/60 mb-6 block">Pro Bono</span>
        <h1 className="font-headline text-4xl md:text-6xl font-light text-on-surface leading-tight">{project.title}</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-7">
          <p className="font-body text-lg leading-relaxed text-on-surface-variant">{project.description}</p>
        </div>
        <div className="md:col-span-5">
          <div className="aspect-[4/3] bg-surface-container-high"></div>
        </div>
      </div>
    </main>
  )
}
