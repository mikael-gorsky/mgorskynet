import { useParams } from 'react-router-dom'

const curricula = {
  'leaders-and-students': {
    label: 'VIP Workshop', titleDisplay: 'AI for', titleAccent: 'Leaders',
    description: 'A concentrated executive immersion into the strategic implications of AI for your organization. How to identify high-value AI applications, build internal capability, and lead the transformation with confidence.',
    cohort: 'Invitation only', duration: '8 hours', format: 'In-office',
    outcomes: [
      { title: 'Strategic AI Literacy', desc: 'Understand how generative AI, agents, and automation reshape organizational value chains — without the hype.' },
      { title: 'Team Upskilling Roadmap', desc: 'Identify which roles benefit most from AI augmentation and design a practical adoption path for your team.' },
      { title: 'Risk and Governance', desc: 'Navigate data privacy, compliance, and ethical considerations specific to your industry and jurisdiction.' },
      { title: 'Competitive Positioning', desc: 'Assess where AI creates defensible advantage and where it levels the playing field.' },
    ],
    modules: [
      { title: 'The AI Landscape', time: 'Hours 1–2', desc: 'From chatbots to autonomous agents: a structured overview of what works, what doesn\'t, and what matters for your business. Live demonstrations with real enterprise use cases.' },
      { title: 'Your Organization and AI', time: 'Hours 3–4', desc: 'Mapping your workflows to AI opportunities. Interactive workshop: identifying the three highest-impact applications within your company.' },
      { title: 'Building AI Capability', time: 'Hours 5–6', desc: 'Upskilling strategies that work. How to move from pilot projects to systematic AI integration without disrupting operations.' },
      { title: 'Leadership in the AI Era', time: 'Hours 7–8', desc: 'Governance frameworks, vendor evaluation, build-vs-buy decisions, and leading teams through technological transformation.' },
    ],
    quote: '"The goal of leadership in the age of intelligence is not to manage the machine, but to curate the direction of the human output it accelerates."',
  },
  'agentic-coding': {
    label: 'Curriculum 2025/2026', titleDisplay: 'Agentic', titleAccent: 'Coding',
    description: 'A comprehensive semester-length program in AI-assisted software development. Students learn to work with AI coding agents — from prompt engineering to production deployment — under real engineering constraints.',
    cohort: 'Spring semester', duration: '40 hours', format: 'Hybrid',
    outcomes: [
      { title: 'Prompt Architecture', desc: 'Design systematic prompt strategies that produce reliable, production-quality code output across languages and frameworks.' },
      { title: 'Agent Orchestration', desc: 'Build multi-step coding agents that plan, execute, test, and iterate autonomously within guardrails.' },
      { title: 'Quality Assurance', desc: 'Develop verification and testing frameworks for AI-generated code in production environments.' },
      { title: 'Human-AI Collaboration', desc: 'Master the feedback loops between human oversight and machine execution at scale.' },
    ],
    modules: [
      { title: 'Foundations of Vibe Coding', time: 'Hours 1–8', desc: 'The paradigm shift from manual coding to intent-driven development. Prompt engineering fundamentals. Hands-on: building your first project entirely with AI assistance.' },
      { title: 'AI Coding Tools Deep Dive', time: 'Hours 9–16', desc: 'Comparative analysis of Claude Code, GitHub Copilot, Cursor, and other tools. When to use which. Setting up efficient development environments.' },
      { title: 'Agentic Workflows', time: 'Hours 17–24', desc: 'Autonomous coding agents: planning loops, tool use, file system interaction, and iterative refinement. Building agents that debug their own output.' },
      { title: 'Architecture and Design', time: 'Hours 25–32', desc: 'AI-assisted system design. Database modeling, API architecture, and full-stack development with agents. Managing complexity in AI-generated codebases.' },
      { title: 'Production and Deployment', time: 'Hours 33–40', desc: 'CI/CD integration, code review workflows, security considerations, and deploying AI-assisted projects. Final project presentations.' },
    ],
    quote: '"The developer of tomorrow does not write code; they architect intent and curate output."',
  },
  'change-management': {
    label: 'Executive Education', titleDisplay: 'Change', titleAccent: 'Management',
    description: 'A focused executive session on leading organizational change in the age of AI. Practical frameworks for the eight steps of transformation, drawn from real implementation experience.',
    cohort: 'Rolling basis', duration: '4 hours', format: 'Hybrid',
    outcomes: [
      { title: 'Transformation Framework', desc: 'Apply the eight-step change model to AI adoption, tailored to your organizational context and maturity level.' },
      { title: 'Stakeholder Navigation', desc: 'Build consensus across leadership, technical teams, and operational staff during rapid technology shifts.' },
      { title: 'Risk Mitigation', desc: 'Identify and address the organizational, cultural, and technical risks inherent in AI deployment.' },
      { title: 'Sustainable Adoption', desc: 'Design change initiatives that stick — moving beyond pilot enthusiasm to embedded organizational capability.' },
    ],
    modules: [
      { title: 'The Eight Steps', time: 'Hour 1', desc: 'The change management framework adapted for AI transformation. Establishing urgency, building coalitions, and crafting a vision that resonates beyond the technology team.' },
      { title: 'People and Resistance', time: 'Hour 2', desc: 'Understanding fear, resistance, and opportunity in workforce transformation. Communication strategies that address real concerns without overpromising.' },
      { title: 'Implementation Playbook', time: 'Hour 3', desc: 'From strategy to execution: pilot design, success metrics, scaling decisions, and the critical difference between adoption and integration.' },
      { title: 'Sustaining Change', time: 'Hour 4', desc: 'Anchoring new behaviors in organizational culture. Building feedback loops, measuring long-term impact, and preparing for the next wave of disruption.' },
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
                <p className="font-label text-[0.6875rem] uppercase tracking-widest text-secondary mt-2">{m.time}</p>
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
