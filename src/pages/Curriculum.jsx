import { useParams } from 'react-router-dom'

const curricula = {
  'leaders-and-students': {
    label: 'Syllabus v2.0', titleDisplay: 'AI for', titleAccent: 'Leaders',
    description: 'A technical and strategic immersion designed for executives moving beyond the hype. We focus on the architectural implications of generative systems on the modern enterprise.',
    cohort: 'Autumn 2024', duration: '8 Weeks', format: 'Hybrid Synthesis',
    outcomes: [
      { title: 'Architectural Literacy', desc: 'Distinguish between stochastic parrots and reasoning engines to predict scaling bottlenecks.' },
      { title: 'Systemic Integration', desc: 'Identify where LLMs augment human workflow and where they introduce catastrophic failure points.' },
      { title: 'Ethical Oversight', desc: 'Navigate the governance of black-box models within high-compliance corporate environments.' },
      { title: 'Strategic Moats', desc: 'Develop proprietary data moats that survive the commoditization of foundational models.' },
    ],
    modules: [
      { title: 'The Latent Space', weeks: 'Week 1-2', desc: 'Moving beyond the chat interface. Understanding vectors, embeddings, and how machines "represent" human knowledge. Laboratory focus: RAG architecture.' },
      { title: 'Agentic Orchestration', weeks: 'Week 3-4', desc: 'Transitioning from static prompts to autonomous agents. Planning loops, tool-use, and multi-agent systems in production.' },
      { title: 'Operational Moats', weeks: 'Week 5-6', desc: 'The economics of compute. Fine-tuning vs. Context-window stuffing. How to build defensible value when models are open-sourced.' },
      { title: 'The Post-AI Org', weeks: 'Week 7-8', desc: 'Redesigning corporate structure around a machine-mediated workforce. Recruitment, legal liability, and the future of management.' },
    ],
    quote: '"The goal of leadership in the age of intelligence is not to manage the machine, but to curate the direction of the human output it accelerates."',
  },
  'agentic-coding': {
    label: 'Curriculum 2024–25', titleDisplay: 'Agentic', titleAccent: 'Coding',
    description: 'A rigorous investigation into vibe coding, agentic software development, and the intersection of human intent with machine execution.',
    cohort: 'Spring 2025', duration: '6 Weeks', format: 'Workshop Intensive',
    outcomes: [
      { title: 'Prompt Architecture', desc: 'Design systematic prompt strategies that produce reliable, production-quality code output.' },
      { title: 'Agent Orchestration', desc: 'Build multi-step coding agents that plan, execute, test, and iterate autonomously.' },
      { title: 'Quality Assurance', desc: 'Develop verification frameworks for AI-generated code in production environments.' },
      { title: 'Human-AI Collaboration', desc: 'Master the feedback loops between human oversight and machine execution.' },
    ],
    modules: [
      { title: 'Foundations of Vibe Coding', weeks: 'Week 1-2', desc: 'Understanding the paradigm shift from manual coding to intent-driven development. Prompt engineering for code generation.' },
      { title: 'Agentic Workflows', weeks: 'Week 3-4', desc: 'Building autonomous coding agents. Tool use, file system interaction, and iterative refinement loops.' },
      { title: 'Production Systems', weeks: 'Week 5-6', desc: 'Deploying AI-assisted development in real teams. CI/CD integration, code review, and quality gates.' },
    ],
    quote: '"The developer of tomorrow does not write code; they architect intent and curate output."',
  },
  'change-management': {
    label: 'Executive Program', titleDisplay: 'Change', titleAccent: 'Management',
    description: 'Strategic frameworks for leading organizational transformation in the age of AI. Designed for executives navigating the transition from traditional to AI-augmented operations.',
    cohort: 'Rolling Enrollment', duration: '10 Weeks', format: 'Executive Seminar',
    outcomes: [
      { title: 'Transformation Strategy', desc: 'Design comprehensive change roadmaps that account for technological, cultural, and operational dimensions.' },
      { title: 'Stakeholder Alignment', desc: 'Build consensus across leadership, technical teams, and operational staff during AI adoption.' },
      { title: 'Risk Navigation', desc: 'Identify and mitigate the organizational risks inherent in rapid AI deployment.' },
      { title: 'Cultural Architecture', desc: 'Reshape organizational culture to embrace continuous adaptation as a core competency.' },
    ],
    modules: [
      { title: 'The AI Disruption Map', weeks: 'Week 1-3', desc: 'Mapping organizational vulnerability to AI disruption. Identifying high-impact intervention points.' },
      { title: 'Human Systems', weeks: 'Week 4-6', desc: 'Managing fear, resistance, and opportunity in workforce transformation. Communication frameworks.' },
      { title: 'Implementation', weeks: 'Week 7-10', desc: 'From strategy to execution. Pilot programs, measurement frameworks, and scaling successful interventions.' },
    ],
    quote: '"Change management in the AI era is not about managing technology adoption. It is about managing the redefinition of human purpose within organizations."',
  },
}

export default function Curriculum() {
  const { slug } = useParams()
  const data = curricula[slug]

  if (!data) {
    return (
      <main className="pt-48 pb-24 px-6 md:px-12 max-w-screen-xl mx-auto">
        <h1 className="font-headline text-4xl text-on-surface">Program not found.</h1>
      </main>
    )
  }

  return (
    <main className="pt-40 pb-24 px-6 md:px-12 max-w-screen-xl mx-auto">
      <header className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32">
        <div className="md:col-span-8">
          <span className="font-label text-[0.6875rem] uppercase tracking-[0.2em] text-primary/60 mb-6 block">{data.label}</span>
          <h1 className="font-headline text-[3.5rem] md:text-[5rem] leading-[1.1] text-on-surface mb-8 tracking-tighter">
            {data.titleDisplay} <span className="font-headline italic font-light">{data.titleAccent}</span>
          </h1>
          <p className="font-headline text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed">{data.description}</p>
        </div>
        <div className="md:col-span-4 flex flex-col justify-end">
          <div className="p-8 bg-surface-container-low border-l border-primary/10">
            <p className="font-label text-[0.6875rem] uppercase tracking-widest text-secondary mb-4">Current Cohort</p>
            <p className="font-body text-primary text-lg">{data.cohort}</p>
            <div className="mt-8 space-y-2">
              <div className="flex justify-between items-center text-xs text-on-surface-variant"><span>Duration</span><span className="text-on-surface">{data.duration}</span></div>
              <div className="flex justify-between items-center text-xs text-on-surface-variant"><span>Format</span><span className="text-on-surface">{data.format}</span></div>
            </div>
          </div>
        </div>
      </header>

      <section className="mb-40 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="col-span-1"><h2 className="font-headline text-2xl text-tertiary">Foundational<br />Outcomes</h2></div>
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-12">
          {data.outcomes.map((o, i) => (
            <div key={i} className="group">
              <span className="font-label text-primary/40 text-sm mb-4 block group-hover:text-primary transition-colors">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="font-body text-lg mb-3">{o.title}</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">{o.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-40">
        <div className="flex items-baseline justify-between mb-16 border-b border-primary/5 pb-4">
          <h2 className="font-headline text-2xl text-on-surface">The Curriculum</h2>
          <span className="font-label text-[0.6875rem] text-secondary italic">Sequential Progression</span>
        </div>
        <div className="space-y-1">
          {data.modules.map((m, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-6 p-10 bg-surface-container-low hover:bg-surface-container transition-all duration-300">
              <div className="md:col-span-1 font-headline text-2xl text-primary/30">{String(i + 1).padStart(2, '0')}</div>
              <div className="md:col-span-4">
                <h4 className="font-headline text-lg text-tertiary">{m.title}</h4>
                <p className="font-label text-[0.6875rem] uppercase tracking-widest text-secondary mt-2">{m.weeks}</p>
              </div>
              <div className="md:col-span-7"><p className="font-body text-on-surface-variant leading-relaxed">{m.desc}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7"><div className="aspect-[16/9] overflow-hidden bg-surface-container-high opacity-80"></div></div>
          <div className="md:col-span-5 px-6">
            <blockquote className="font-headline text-2xl italic text-primary leading-snug border-l-2 border-tertiary/20 pl-8 py-4">{data.quote}</blockquote>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-24 border-t border-primary/5">
        <div className="md:col-span-4"><h2 className="font-headline text-2xl text-on-surface">Work with me</h2></div>
        <div className="md:col-span-8 flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <h5 className="font-body text-lg text-tertiary mb-4">Advisory</h5>
            <p className="font-body text-on-surface-variant leading-relaxed mb-6">I work with leadership teams to audit existing AI roadmaps and identify structural vulnerabilities in their data architecture.</p>
            <a href="mailto:hello@mgorsky.net" className="flex items-center gap-2 text-primary group"><span className="font-label text-xs uppercase tracking-widest">Inquire for Private Sessions</span><span className="material-symbols-outlined text-sm">arrow_forward</span></a>
          </div>
          <div className="flex-1">
            <h5 className="font-body text-lg text-tertiary mb-4">Workshops</h5>
            <p className="font-body text-on-surface-variant leading-relaxed mb-6">Tailored intensives for engineering and product leads focusing on agentic systems and production-grade LLM implementation.</p>
            <a href="mailto:hello@mgorsky.net" className="flex items-center gap-2 text-primary group"><span className="font-label text-xs uppercase tracking-widest">View Availability</span><span className="material-symbols-outlined text-sm">arrow_forward</span></a>
          </div>
        </div>
      </section>
    </main>
  )
}
