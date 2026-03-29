import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-x-12">
        <div className="md:col-span-7 space-y-24">
          <TeachingSection />
          <ProBonoSection />
          <ResearchSection />
          <BusinessSection />
        </div>
        <aside className="md:col-span-5 space-y-12">
          <WhatsNewWidget />
          <AIChroniclesWidget />
          <XFeedWidget />
          <HeadlinesWidget />
        </aside>
      </div>
    </main>
  )
}

function TeachingSection() {
  const items = [
    { title: 'AI for leaders.', href: '/teaching/leaders-and-students', subtitle: 'How your org will benefit from AI and how to upskill your team.' },
    { title: 'Agentic coding [vibe coding].', href: '/teaching/agentic-coding', subtitle: 'AI agents writing code under engineers\' supervision.' },
    { title: 'Change management.', href: '/teaching/change-management', subtitle: '8 steps of changes.' },
  ]

  return (
    <section className="group" id="teaching">
      <h2 className="font-label text-[0.6875rem] uppercase tracking-[0.2em] text-tertiary/70 mb-8 border-l-2 border-tertiary/20 pl-4">
        Teaching leaders and students
      </h2>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              to={item.href}
              className="block p-8 bg-surface-container-low border border-primary/5 hover:border-primary/20 transition-all group/link"
            >
              <span className="font-headline text-3xl md:text-4xl text-on-surface group-hover/link:text-primary transition-colors">
                {item.title}
              </span>
              <div className="mt-4 text-secondary opacity-0 group-hover/link:opacity-100 transition-opacity text-sm">
                {item.subtitle}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

function ProBonoSection() {
  return (
    <section id="pro-bono">
      <h2 className="font-label text-[0.6875rem] uppercase tracking-[0.2em] text-tertiary/70 mb-8 border-l-2 border-tertiary/20 pl-4">
        Pro Bono projects
      </h2>
      <div className="grid grid-cols-1 gap-4">
        <Link to="/probono/ai-for-seniors" className="p-8 bg-surface-container-low border border-tertiary/5 hover:border-tertiary/20 transition-all">
          <span className="font-headline text-2xl text-tertiary">AI for seniors.</span>
          <p className="mt-2 text-on-surface-variant font-body text-sm">Helping older adults confidently adopt everyday AI tools.</p>
        </Link>
        <div className="grid grid-cols-[2fr_3fr] gap-4">
          <Link to="/probono/judging-startups" className="p-8 bg-surface-container-low border border-primary/5 hover:border-primary/20 transition-all">
            <span className="font-headline text-xl text-on-surface">Startup competitions.</span>
            <p className="mt-2 text-on-surface-variant font-body text-sm">Judging and mentoring early-stage ventures.</p>
          </Link>
          <Link to="/probono/acvc-group" className="p-8 bg-surface-container-low border border-primary/5 hover:border-primary/20 transition-all">
            <span className="font-headline text-xl text-on-surface">AC/VC (agentic coding — vibe coding) LinkedIn group.</span>
            <p className="mt-2 text-on-surface-variant font-body text-sm">Professional community for coders and students.</p>
          </Link>
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
            <span className="font-label text-[0.6rem] text-primary block mb-2 tracking-widest uppercase">LinkedIn Newsletter</span>
            <h3 className="font-headline text-4xl text-on-surface group-hover:italic transition-all">The AI Pravda.</h3>
            <p className="mt-4 text-on-surface-variant max-w-lg text-sm">Critical analysis of machine intelligence and its socio-economic impact.</p>
          </Link>
        </article>
        <article className="relative p-8 bg-surface-container-low border border-primary/5 group hover:border-primary/20 transition-all">
          <Link to="/aichronicles/directory" className="block">
            <h3 className="font-headline text-3xl text-on-surface">AI chronicles (Directory &amp; Book).</h3>
          </Link>
        </article>
        <article className="relative p-8 bg-surface-container-low border border-primary/5 group hover:border-primary/20 transition-all">
          <Link to="/research/academic" className="block">
            <h3 className="font-headline text-3xl text-on-surface">Academic research in AI.</h3>
          </Link>
        </article>
      </div>
    </section>
  )
}

function BusinessSection() {
  const [showForm, setShowForm] = useState(false)
  const services = ['Advisory.', 'Board membership.', 'Consulting.', 'Mentoring startups.', 'Teaching.']

  return (
    <section className="pt-16 border-t border-primary/10" id="business">
      <div className="bg-surface-container-low p-12 border border-primary/5">
        <h2 className="font-label text-[0.6875rem] uppercase tracking-[0.2em] text-tertiary/70 mb-12">Business opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-body text-lg text-on-surface">
          {services.map((s) => (
            <div key={s} className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-primary/40"></span>
              <p>{s}</p>
            </div>
          ))}
        </div>
        <div className="mt-16">
          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-4 group bg-surface px-8 py-5 border border-primary/20 hover:border-primary transition-all cursor-pointer"
            >
              <span className="font-headline text-2xl text-primary group-hover:italic transition-all">Connect for engagement</span>
              <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          ) : (
            <ContactForm onClose={() => setShowForm(false)} />
          )}
        </div>
      </div>
    </section>
  )
}

function ContactForm({ onClose }) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => setSubmitted(true))
      .catch(() => setSubmitted(true))
  }

  if (submitted) {
    return (
      <div className="bg-surface p-8 border border-primary/20">
        <p className="font-headline text-2xl text-primary mb-4">Message sent.</p>
        <p className="text-on-surface-variant text-sm">Thank you for reaching out. I will respond shortly.</p>
      </div>
    )
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="bg-surface p-8 border border-primary/20 space-y-6"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-headline text-xl text-primary">Get in touch</h3>
        <button type="button" onClick={onClose} className="text-outline hover:text-primary transition-colors">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>
      <div>
        <label className="font-label text-[0.6875rem] uppercase tracking-widest text-secondary mb-2 block">Name</label>
        <input name="name" required className="w-full bg-transparent border-0 border-b border-outline-variant/30 focus:ring-0 focus:border-primary px-0 py-3 font-body text-on-surface placeholder:text-on-surface-variant/30 focus:outline-none" placeholder="Your name" />
      </div>
      <div>
        <label className="font-label text-[0.6875rem] uppercase tracking-widest text-secondary mb-2 block">Email</label>
        <input name="email" type="email" required className="w-full bg-transparent border-0 border-b border-outline-variant/30 focus:ring-0 focus:border-primary px-0 py-3 font-body text-on-surface placeholder:text-on-surface-variant/30 focus:outline-none" placeholder="your@email.com" />
      </div>
      <div>
        <label className="font-label text-[0.6875rem] uppercase tracking-widest text-secondary mb-2 block">Subject</label>
        <input name="subject" className="w-full bg-transparent border-0 border-b border-outline-variant/30 focus:ring-0 focus:border-primary px-0 py-3 font-body text-on-surface placeholder:text-on-surface-variant/30 focus:outline-none" placeholder="Advisory, consulting, speaking..." />
      </div>
      <div>
        <label className="font-label text-[0.6875rem] uppercase tracking-widest text-secondary mb-2 block">Message</label>
        <textarea name="message" rows={4} required className="w-full bg-transparent border-0 border-b border-outline-variant/30 focus:ring-0 focus:border-primary px-0 py-3 font-body text-on-surface placeholder:text-on-surface-variant/30 focus:outline-none resize-none" placeholder="Tell me about your project or inquiry..." />
      </div>
      <button type="submit" className="inline-flex items-center gap-4 bg-surface-container-low px-8 py-4 border border-primary/20 hover:border-primary transition-all group">
        <span className="font-label text-sm uppercase tracking-widest text-primary">Send message</span>
        <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
      </button>
    </form>
  )
}

function WhatsNewWidget() {
  return (
    <div className="bg-surface-container-low p-8 border border-primary/5">
      <h3 className="font-label text-[0.6rem] uppercase tracking-widest text-tertiary mb-6 flex items-center justify-between">
        <span>What&apos;s New</span>
        <span className="w-1.5 h-1.5 rounded-full bg-tertiary/30"></span>
      </h3>
      <div className="space-y-6">
        <div className="flex gap-4 items-start">
          <span className="font-label text-[0.6rem] text-primary bg-surface px-2 py-1">MAY 24</span>
          <p className="text-sm leading-relaxed text-on-surface-variant">Published &quot;The Latency of Thought&quot; in AI Pravda #14.</p>
        </div>
        <div className="flex gap-4 items-start border-t border-primary/5 pt-4">
          <span className="font-label text-[0.6rem] text-primary bg-surface px-2 py-1">APR 12</span>
          <p className="text-sm leading-relaxed text-on-surface-variant">Keynote at Helsinki Tech Summit on Agentic Frameworks.</p>
        </div>
      </div>
    </div>
  )
}

function AIChroniclesWidget() {
  const entries = ['Transformer Efficiency', 'Vector Database Ethics', 'Model Collapse Theory']

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

function XFeedWidget() {
  return (
    <div className="bg-surface-container-low p-8 border border-primary/5">
      <h3 className="font-label text-[0.6875rem] uppercase tracking-widest text-tertiary/70 mb-6 flex items-center gap-2">
        <span>X Feed</span>
        <span className="w-2 h-2 rounded-full bg-primary/40 animate-pulse"></span>
      </h3>
      <div className="space-y-8">
        <div className="space-y-2">
          <p className="text-sm font-body italic text-on-surface">&quot;The bottleneck of AI implementation isn&apos;t the compute, it&apos;s the lack of semantic clarity in leadership.&quot;</p>
          <p className="text-[0.6rem] text-primary/60">2h ago</p>
        </div>
        <div className="space-y-2 border-t border-primary/5 pt-6">
          <p className="text-sm font-body text-on-surface-variant">Shared a new repository on autonomous agent safety protocols.</p>
          <p className="text-[0.6rem] text-primary/60">1d ago</p>
        </div>
      </div>
    </div>
  )
}

function HeadlinesWidget() {
  return (
    <div className="space-y-6">
      <h3 className="font-label text-[0.6875rem] uppercase tracking-widest text-tertiary/70 border-l-2 border-tertiary/20 pl-4">Headlines</h3>
      <div className="relative overflow-hidden group bg-surface-container-low p-1 border border-primary/5">
        <div className="w-full aspect-video bg-surface-container-high"></div>
        <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-surface-container-low to-transparent">
          <p className="font-headline text-xl text-tertiary">The 2024 AI Governance Map: A Finnish Perspective.</p>
        </div>
      </div>
      <ul className="space-y-4 font-body text-[0.7rem] text-on-surface-variant px-2">
        <li className="flex items-center gap-3">
          <span className="w-1 h-1 bg-primary"></span>
          <span className="hover:text-primary transition-colors cursor-pointer">Why the ACVC community is moving to private servers.</span>
        </li>
        <li className="flex items-center gap-3">
          <span className="w-1 h-1 bg-primary"></span>
          <span className="hover:text-primary transition-colors cursor-pointer">Notes on the latest ICML research submissions.</span>
        </li>
      </ul>
    </div>
  )
}
