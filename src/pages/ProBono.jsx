import { useParams } from 'react-router-dom'
import usePageMeta from '../lib/usePageMeta'

const projects = {
  'ai-for-seniors': {
    title: 'AI for Seniors',
    label: 'Pro Bono Workshop',
    sections: [
      {
        heading: 'Why AI matters for seniors',
        text: 'For older adults, artificial intelligence is not about technology trends or market disruption. It is about preserving quality of life, maintaining a sense of autonomy, and sustaining the feeling of independence that defines dignified aging. AI chatbots and voice assistants can help seniors manage daily routines, access information in their native language, communicate with family across distances, navigate healthcare systems, and stay connected to the world — all without relying on others for every small task.',
      },
      {
        heading: 'AI and life in a new country',
        text: 'For seniors who have emigrated — who live in countries where they were not born, where the language is different, where the bureaucracy is unfamiliar — AI becomes something more than a convenience. It becomes a bridge. AI chatbots can translate documents, explain official letters, help compose emails in the local language, and guide users through government websites. They can serve as patient, always-available conversation partners for language practice. For a person who left their homeland late in life, this kind of tool can mean the difference between isolation and participation, between dependence and self-sufficiency.',
      },
      {
        heading: 'A hands-on workshop',
        text: 'This is not a lecture about what AI can do in theory. The workshop is entirely hands-on. Participants bring their own phones or tablets and, by the end of the session, have working AI assistants configured for their specific needs — whether that means a chatbot that speaks their language, a voice assistant that reads recipes aloud, or a tool that helps them write messages to their grandchildren. Every exercise is practical, immediately useful, and designed for people with no prior technology experience.',
      },
      {
        heading: 'Proven success',
        text: 'The AI for Seniors workshop has been delivered to Russian-speaking communities in Israel, where it was met with genuine enthusiasm. Participants — many of them in their 70s and 80s — discovered that AI could help them read Hebrew documents, communicate with Israeli institutions, and access services that previously required help from children or grandchildren. The feedback was consistent: this was the first technology workshop that actually changed their daily life. Not because the technology was simple, but because the workshop met people where they were.',
      },
    ],
  },
  'judging-startups': {
    title: 'Startup Competitions',
    label: 'Pro Bono',
    sections: [
      {
        heading: 'Judging and mentoring',
        text: 'Contributing expertise as a judge and mentor at startup competitions, evaluating AI-driven ventures and providing strategic guidance to early-stage founders. Focused on helping teams clarify their value proposition, assess technical feasibility, and prepare for the realities of scaling an AI product.',
      },
    ],
  },
  'acvc-group': {
    title: 'AC/VC LinkedIn Group',
    label: 'Pro Bono Community',
    sections: [
      {
        heading: 'Professional community for coders and students',
        text: 'AC/VC (Agentic Coding — Vibe Coding) is a LinkedIn group bringing together software developers, engineering students, and AI practitioners who are exploring the frontier of AI-assisted development. The community shares practical insights, code examples, tool comparisons, and honest assessments of what works in production.',
      },
    ],
  },
}

const metaDescriptions = {
  'ai-for-seniors': 'AI for Seniors — free hands-on workshop by Mikael Alemu Gorsky helping older adults adopt everyday AI tools for independence and quality of life.',
  'judging-startups': 'Startup competition judging and mentoring by Mikael Alemu Gorsky. Evaluating AI-driven ventures and guiding early-stage founders.',
  'acvc-group': 'AC/VC (Agentic Coding — Vibe Coding) LinkedIn group. Professional community for developers and students exploring AI-assisted software development.',
}

export default function ProBono() {
  const { slug } = useParams()
  const project = projects[slug]

  usePageMeta({
    title: project ? project.title : 'Project not found',
    description: metaDescriptions[slug] || '',
  })

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
        <span className="font-label text-[0.6875rem] uppercase tracking-[0.2em] text-primary/60 mb-6 block">{project.label}</span>
        <h1 className="font-headline text-4xl md:text-6xl font-light text-on-surface leading-tight">{project.title}</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-7 space-y-16">
          {project.sections.map((section, i) => (
            <section key={i}>
              <h2 className="font-headline text-2xl text-tertiary mb-6">{section.heading}</h2>
              <p className="font-body text-lg leading-relaxed text-on-surface-variant">{section.text}</p>
            </section>
          ))}
        </div>
        <div className="md:col-span-5">
          <div className="card card-v3 aspect-[4/3] sticky top-40"></div>
        </div>
      </div>
    </main>
  )
}
