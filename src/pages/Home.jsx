import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardLink } from '../components/Card'

const cardVariants = ['card-v1', 'card-v2', 'card-v3', 'card-v4', 'card-v5', 'card-v6']

export default function Home() {
  return (
    <main className="pt-16 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
      <div className="flex items-start gap-8 mt-8 mb-16">
        <img src="/sketch-portrait.png" alt="Mikael Alemu Gorsky" className="shrink-0 self-stretch object-contain object-top" style={{ width: 'auto', maxHeight: '100%' }} />
        <div className="text-2xl text-on-surface leading-relaxed" style={{ textShadow: '0 3px 10px rgba(0, 0, 0, 0.7), 0 6px 20px rgba(0, 0, 0, 0.4)' }}>
          <p className="mb-4">Welcome to the website of <strong className="font-bold">Mikael Alemu Gorsky</strong></p>
          <p className="mb-4">Mikael Alemu is an international strategist and academic researcher focused on the impact of artificial intelligence on society, governance, and higher education.</p>
          <p>This website presents information about educational projects (training), pro bono activities, research projects and business opportunities.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-x-12">
        <div className="md:col-span-7 space-y-24">
          <TeachingSection />
          <ProBonoSection />
          <ResearchSection />
          <BusinessSection />
        </div>
        <aside className="md:col-span-5 space-y-12">
          <LatestNewsWidget />
          <AIPravdaWidget />
        </aside>
      </div>
    </main>
  )
}

function TeachingSection() {
  const items = [
    { title: 'Workshop: AI for leaders', href: '/teaching/leaders-and-students', subtitle: 'How your org will benefit from AI and how to upskill your team.' },
    { title: 'Course: Agentic coding | Vibe coding', href: '/teaching/agentic-coding', subtitle: 'AI agents writing code under engineers\' supervision.' },
    { title: 'Seminar: Change management', href: '/teaching/change-management', subtitle: '8 steps of changes.' },
  ]

  return (
    <section className="group" id="teaching">
      <h2 className="font-label text-[0.6875rem] uppercase tracking-[0.2em] text-tertiary/70 mb-8 border-l-2 border-tertiary/20 pl-4 section-title">
        Teaching leaders and students
      </h2>
      <ul className="space-y-6">
        {items.map((item, i) => (
          <li key={item.href}>
            <CardLink to={item.href} variant={cardVariants[i]} className="px-10 py-6 group/link">
              <span className="font-headline text-2xl text-on-surface group-hover/link:text-primary transition-colors">
                {item.title}
              </span>
              <div className="mt-4 text-secondary opacity-0 group-hover/link:opacity-100 transition-opacity text-base">
                {item.subtitle}
              </div>
            </CardLink>
          </li>
        ))}
      </ul>
    </section>
  )
}

function ProBonoSection() {
  return (
    <section id="pro-bono">
      <h2 className="font-label text-[0.6875rem] uppercase tracking-[0.2em] text-tertiary/70 mb-8 border-l-2 border-tertiary/20 pl-4 section-title">
        Pro Bono projects
      </h2>
      <div className="grid grid-cols-1 gap-6">
        <CardLink to="/probono/ai-for-seniors" variant="card-featured" className="p-10">
          <span className="font-headline text-2xl text-tertiary">AI for seniors</span>
          <p className="mt-2 text-on-surface-variant font-body text-sm">Helping older adults confidently adopt everyday AI tools.</p>
        </CardLink>
        <div className="grid grid-cols-[2fr_3fr] gap-6">
          <CardLink to="/probono/judging-startups" variant="card-v4" className="p-10">
            <span className="font-headline text-xl text-on-surface">Startup competitions</span>
            <p className="mt-2 text-on-surface-variant font-body text-sm">Judging and mentoring early-stage ventures.</p>
          </CardLink>
          <CardLink to="/probono/acvc-group" variant="card-v5" className="p-10">
            <span className="font-headline text-xl text-on-surface">AC/VC (agentic coding — vibe coding) LinkedIn group</span>
            <p className="mt-2 text-on-surface-variant font-body text-sm">Professional community for coders and students.</p>
          </CardLink>
        </div>
      </div>
    </section>
  )
}

function ResearchSection() {
  return (
    <section className="space-y-12" id="research">
      <h2 className="font-label text-[0.6875rem] uppercase tracking-[0.2em] text-tertiary/70 mb-8 border-l-2 border-tertiary/20 pl-4 section-title">
        Analytics &amp; research
      </h2>
      <div className="space-y-6">
        <CardLink to="/research/academic" variant="card-v1" className="p-10 group">
          <h3 className="font-headline text-3xl text-on-surface group-hover:text-primary transition-colors">Academic research in AI</h3>
        </CardLink>
        <CardLink to="/theaipravda" variant="card-featured" className="p-10 group">
          <span className="font-label text-[0.6rem] text-primary block mb-2 tracking-widest uppercase">LinkedIn Newsletter</span>
          <h3 className="font-headline text-4xl text-on-surface group-hover:italic transition-all">The AI Pravda</h3>
          <p className="mt-4 text-on-surface-variant max-w-lg text-sm">Critical analysis of machine intelligence and its socio-economic impact.</p>
        </CardLink>
        <CardLink to="/aichronicles" variant="card-v3" className="p-10 group">
          <h3 className="font-headline text-3xl text-on-surface group-hover:text-primary transition-colors">AI Chronicles</h3>
          <p className="mt-2 text-on-surface-variant text-sm">Daily Digest, Rolodex, and The Book.</p>
        </CardLink>
      </div>
    </section>
  )
}

function BusinessSection() {
  const [showForm, setShowForm] = useState(false)
  const services = ['Advisory.', 'Board membership.', 'Consulting.', 'Mentoring startups.', 'Teaching.']

  return (
    <section className="pt-16 border-t border-primary/10" id="business">
      <Card variant="card-v2" className="p-15">
        <h2 className="font-label text-[0.6875rem] uppercase tracking-[0.2em] text-tertiary/70 mb-12 section-title">Business opportunities</h2>
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
              className="inline-flex items-center gap-4 group cursor-pointer text-primary hover:text-tertiary transition-colors"
            >
              <span className="font-headline text-2xl group-hover:italic transition-all">Connect for engagement</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          ) : (
            <ContactForm onClose={() => setShowForm(false)} />
          )}
        </div>
      </Card>
    </section>
  )
}

function ContactForm({ onClose }) {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())

    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) setSubmitted(true)
        else setError(true)
      })
      .catch(() => setError(true))
  }

  if (submitted) {
    return (
      <div className="p-8 bg-black/20 mt-4">
        <p className="font-headline text-2xl text-primary mb-4">Message sent.</p>
        <p className="text-on-surface-variant text-sm">Thank you for reaching out. I will respond shortly.</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-8 bg-black/20 mt-4">
        <p className="font-headline text-2xl text-error mb-4">Something went wrong.</p>
        <p className="text-on-surface-variant text-sm">Please try emailing <a href="mailto:hello@mgorsky.net" className="text-primary">hello@mgorsky.net</a> directly.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="p-8 bg-black/20 mt-4 space-y-6">
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
      <button type="submit" className="inline-flex items-center gap-4 text-primary hover:text-tertiary transition-colors group">
        <span className="font-label text-sm uppercase tracking-widest">Send message</span>
        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
      </button>
    </form>
  )
}

function LatestNewsWidget() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('/data/news.json')
      .then((res) => res.ok ? res.json() : [])
      .then((data) => setItems(Array.isArray(data) ? data : []))
      .catch(() => setItems([]))
  }, [])

  if (items.length === 0) return null

  return (
    <Card variant="card-widget" className="p-10">
      <h3 className="font-label text-[0.6rem] uppercase tracking-widest text-tertiary mb-6 flex items-center justify-between">
        <span>Latest News</span>
        <span className="w-1.5 h-1.5 rounded-full bg-tertiary/30"></span>
      </h3>
      <div className="space-y-5">
        {items.map((item, i) => (
          <Link
            key={i}
            to="/aichronicles/digest"
            className={`flex gap-4 items-start group ${i > 0 ? 'border-t border-primary/5 pt-5' : ''}`}
          >
            <span className="font-label text-[0.6rem] text-primary bg-black/30 px-2 py-1 shrink-0">{item.dateLabel}</span>
            <p className="text-sm leading-relaxed text-on-surface-variant group-hover:text-primary transition-colors">{item.text}</p>
          </Link>
        ))}
      </div>
    </Card>
  )
}

function AIPravdaWidget() {
  const [titles, setTitles] = useState([])

  useEffect(() => {
    fetch('/api/ai-pravda-latest')
      .then((res) => res.ok ? res.json() : [])
      .then((data) => setTitles(Array.isArray(data) ? data.slice(0, 3) : []))
      .catch(() => setTitles([]))
  }, [])

  const fallbackTitles = [
    'Constitution for AI, and what it tells about us',
    'Music of AI',
    '$150 billion dollar transformation',
    'Project Vend: when AI runs a real business',
    'How AI thinks',
  ]
  const display = titles.length > 0 ? titles : fallbackTitles

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end border-b border-primary/10 pb-4">
        <h3 className="font-label text-[0.6875rem] uppercase tracking-widest text-tertiary/70">The AI Pravda</h3>
        <span className="text-[0.6rem] text-primary/60 italic">Latest Issues</span>
      </div>
      <div className="space-y-4">
        {display.map((title, i) => (
          <CardLink
            key={title}
            to="/theaipravda"
            variant={cardVariants[(i + 3) % 6]}
            className="p-4 group"
          >
            <div className="flex justify-between items-center">
              <span className="font-body text-sm group-hover:text-primary transition-colors">{title}</span>
              <span className="material-symbols-outlined text-xs text-outline group-hover:text-primary transition-colors ml-4 shrink-0">north_east</span>
            </div>
          </CardLink>
        ))}
      </div>
    </div>
  )
}
