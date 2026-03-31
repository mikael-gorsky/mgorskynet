import { Card } from '../components/Card'

export default function Bio() {
  return (
    <main className="pt-40 pb-24 px-6 md:px-12 max-w-screen-xl mx-auto">
      <header className="mb-16">
        <span className="font-label text-[0.6875rem] uppercase tracking-[0.2em] text-primary/60 mb-6 block">Bio</span>
        <h1 className="font-headline text-4xl md:text-6xl font-light text-on-surface leading-tight">Mikael Alemu Gorsky</h1>
        <p className="font-headline text-xl text-primary/80 mt-4">AI researcher, Holon Institute of Technology</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-7 space-y-10">
          <Card variant="card-v1" className="p-10">
            <h2 className="font-label text-[0.6875rem] uppercase tracking-widest text-tertiary mb-6">Short bio (copy-paste)</h2>
            <div className="space-y-6 font-body text-lg leading-relaxed text-on-surface-variant">
              <p>Mikael Alemu Gorsky is an international strategist and academic researcher focused on the impact of artificial intelligence on society, governance, and higher education.</p>
              <p>Born and educated in Moscow, with Ethiopian and Israeli roots, he lives and works in Israel as an author and researcher on AI's implications for governance, higher education, and the global economy.</p>
              <p>He is a lecturer and researcher at the Holon Institute of Technology (HIT) near Tel Aviv, where his work examines how emerging technologies reshape institutions, skills, and long-term development.</p>
            </div>
          </Card>

          <Card variant="card-v3" className="p-10">
            <h2 className="font-label text-[0.6875rem] uppercase tracking-widest text-tertiary mb-6">Important links</h2>
            <ul className="space-y-5">
              <li>
                <span className="font-body text-on-surface-variant text-sm block mb-1">LinkedIn profile</span>
                <a href="https://linkedin.com/in/mgorsky" target="_blank" rel="noopener noreferrer" className="font-body text-primary hover:text-tertiary transition-colors break-all">linkedin.com/in/mgorsky</a>
              </li>
              <li>
                <span className="font-body text-on-surface-variant text-sm block mb-1">The AI Pravda (LinkedIn newsletter)</span>
                <a href="https://www.linkedin.com/newsletters/the-ai-pravda-6917819849142329344/" target="_blank" rel="noopener noreferrer" className="font-body text-primary hover:text-tertiary transition-colors break-all">linkedin.com/newsletters/the-ai-pravda-6917819849142329344</a>
              </li>
              <li>
                <span className="font-body text-on-surface-variant text-sm block mb-1">AC/VC LinkedIn group</span>
                <a href="https://www.linkedin.com/groups/16464001/" target="_blank" rel="noopener noreferrer" className="font-body text-primary hover:text-tertiary transition-colors break-all">linkedin.com/groups/16464001</a>
              </li>
              <li>
                <span className="font-body text-on-surface-variant text-sm block mb-1">Holon Institute of Technology (HIT)</span>
                <a href="https://www.hit.ac.il" target="_blank" rel="noopener noreferrer" className="font-body text-primary hover:text-tertiary transition-colors break-all">www.hit.ac.il</a>
              </li>
            </ul>
          </Card>
        </div>

        <div className="md:col-span-5">
          <div className="sticky top-40 space-y-8">
            <Card variant="card-widget" className="p-10">
              <h2 className="font-label text-[0.6875rem] uppercase tracking-widest text-primary mb-6">Photos</h2>
              <div className="space-y-6">
                <div>
                  <img src="/mikael-gorsky-1.jpg" alt="Mikael Alemu Gorsky" className="w-full" />
                  <p className="font-label text-[0.6875rem] text-secondary mt-2">
                    <a href="/mikael-gorsky-1.jpg" download className="text-primary hover:text-tertiary transition-colors">Download</a>
                  </p>
                </div>
                <div>
                  <img src="/mikael-gorsky-2.jpg" alt="Mikael Alemu Gorsky — portrait" className="w-full" />
                  <p className="font-label text-[0.6875rem] text-secondary mt-2">
                    <a href="/mikael-gorsky-2.jpg" download className="text-primary hover:text-tertiary transition-colors">Download</a>
                  </p>
                </div>
                <div>
                  <img src="/mikael-gorsky-3.jpg" alt="Mikael Alemu Gorsky — seated" className="w-full" />
                  <p className="font-label text-[0.6875rem] text-secondary mt-2">
                    <a href="/mikael-gorsky-3.jpg" download className="text-primary hover:text-tertiary transition-colors">Download</a>
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
