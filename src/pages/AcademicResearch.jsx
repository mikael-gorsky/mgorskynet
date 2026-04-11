import { Card } from '../components/Card'
import usePageMeta from '../lib/usePageMeta'

const papers = [
  {
    title: 'Cognifying Education: Mapping AI\'s transformative role in emotional, creative, and collaborative learning',
    type: 'Conference Paper',
    date: 'September 2025',
    venue: '13th Higher Education Institutions Conference',
    authors: ['Mikael Gorsky', 'Ilya Levin'],
    url: 'https://www.mdpi.com/2227-7102/15/1/45',
  },
  {
    title: 'Papert\'s Vision Realized: Constructionism and Generative AI',
    type: 'Article',
    date: 'June 2025',
    venue: 'Constructionism Conference Proceedings',
    authors: ['Ilya Levin', 'Alexei Semenov', 'Mikael Gorsky'],
    url: 'https://constructionism.oapublishing.ch/article/view/36',
  },
  {
    title: 'Smart Learning in the 21st Century: Advancing Constructionism Across Three Digital Epochs',
    type: 'Preprint',
    date: 'January 2025',
    venue: 'arXiv',
    authors: ['Ilya Levin', 'Alexei Semenov', 'Mikael Gorsky'],
    url: 'https://arxiv.org/abs/2509.25266',
  },
]

const cardVariants = ['card-v1', 'card-v3', 'card-v5']

export default function AcademicResearch() {
  usePageMeta({
    title: 'Academic Research',
    description: 'Academic research by Mikael Alemu Gorsky — publications on AI and education, constructionism, and the cognitive impact of machine-assisted learning.',
  })
  return (
    <main className="pt-40 pb-24 px-6 md:px-12 max-w-screen-xl mx-auto">
      <header className="mb-16">
        <span className="font-label text-[0.6875rem] uppercase tracking-[0.2em] text-primary/60 mb-6 block">Analytics &amp; Research</span>
        <h1 className="font-headline text-4xl md:text-6xl font-light text-on-surface leading-tight">Academic Research in AI</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-7 space-y-8">
          {papers.map((paper, i) => (
            <a key={i} href={paper.url} target="_blank" rel="noopener noreferrer" className="block group">
              <Card variant={cardVariants[i]} className="p-10">
                <div className="flex items-start gap-3 mb-4">
                  <span className={`font-label text-[0.6rem] uppercase tracking-widest px-3 py-1 ${
                    paper.type === 'Conference Paper' ? 'text-tertiary bg-tertiary/10' :
                    paper.type === 'Article' ? 'text-primary bg-primary/10' :
                    'text-error bg-error/10'
                  }`}>{paper.type}</span>
                </div>
                <h2 className="font-headline text-2xl text-on-surface group-hover:text-primary transition-colors leading-tight mb-4">
                  {paper.title}
                </h2>
                <p className="font-label text-[0.6875rem] text-secondary mb-2">{paper.date} &middot; {paper.venue}</p>
                <p className="font-body text-sm text-on-surface-variant">
                  {paper.authors.join(' · ')}
                </p>
                <div className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-label text-xs uppercase tracking-widest">Read paper</span>
                  <span className="material-symbols-outlined text-sm">north_east</span>
                </div>
              </Card>
            </a>
          ))}
        </div>
        <div className="md:col-span-5">
          <div className="sticky top-40">
            <Card variant="card-widget" className="p-10">
              <h3 className="font-label text-[0.6875rem] uppercase tracking-widest text-primary mb-6">Research Focus</h3>
              <p className="font-body text-on-surface-variant leading-relaxed mb-6">
                Research at the intersection of artificial intelligence and education — exploring how generative AI transforms learning, creativity, and human development.
              </p>
              <p className="font-body text-on-surface-variant leading-relaxed">
                Key themes include constructionism in the age of AI, the cognitive impact of machine-assisted learning, and frameworks for integrating AI into educational practice.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
