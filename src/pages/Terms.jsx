import { Card } from '../components/Card'
import { useTheme } from '../lib/ThemeContext'
import usePageMeta from '../lib/usePageMeta'

export default function Terms() {
  usePageMeta({
    title: 'Terms & Theme',
    description: 'Terms of use and theme settings for mgorsky.net, the personal website of Mikael Alemu Gorsky.',
  })
  const { theme, setTheme, themes } = useTheme()

  return (
    <main className="pt-16 pb-24 px-6 md:px-12 max-w-screen-xl mx-auto">
      <section className="mb-20">
        <h2 className="font-headline text-3xl mb-8" style={{ color: 'var(--t-text)' }}>Theme</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Object.entries(themes).map(([key, { name }]) => (
            <button
              key={key}
              onClick={() => setTheme(key)}
              className={`card p-6 text-left transition-all cursor-pointer ${theme === key ? 'ring-2' : ''}`}
              style={{
                background: 'var(--t-card-bg)',
                ringColor: theme === key ? 'var(--t-accent)' : 'transparent',
                outline: theme === key ? '2px solid var(--t-accent)' : 'none',
                outlineOffset: '4px',
              }}
            >
              <span className="font-headline text-lg" style={{ color: theme === key ? 'var(--t-accent)' : 'var(--t-text)' }}>
                {name}
              </span>
              {theme === key && (
                <span className="block font-label text-xs mt-2" style={{ color: 'var(--t-text-secondary)' }}>Active</span>
              )}
            </button>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-headline text-3xl mb-8" style={{ color: 'var(--t-text)' }}>Terms of Service</h2>
        <Card variant="card-v1" className="p-10">
          <div className="space-y-6 font-body leading-relaxed" style={{ color: 'var(--t-text-secondary)' }}>
            <p><strong style={{ color: 'var(--t-text)' }}>Effective date:</strong> April 2, 2026</p>

            <p>This website (mgorsky.net) is a personal website of Mikael Alemu Gorsky. By accessing and using this website, you agree to the following terms.</p>

            <h3 className="font-headline text-xl" style={{ color: 'var(--t-text)' }}>Content</h3>
            <p>All content on this website — including text, images, and design — is the intellectual property of Mikael Alemu Gorsky unless otherwise stated. You may reference and link to content on this website. You may not reproduce, republish, or redistribute content without permission.</p>

            <h3 className="font-headline text-xl" style={{ color: 'var(--t-text)' }}>Third-party links</h3>
            <p>This website contains links to external websites (LinkedIn, academic publishers, news sources). These links are provided for reference. Mikael Alemu Gorsky is not responsible for the content or privacy practices of external websites.</p>

            <h3 className="font-headline text-xl" style={{ color: 'var(--t-text)' }}>Analytics</h3>
            <p>This website uses Google Analytics to understand visitor behavior. Google Analytics collects anonymized data about page views, session duration, and device type. No personally identifiable information is collected. You can opt out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on.</p>

            <h3 className="font-headline text-xl" style={{ color: 'var(--t-text)' }}>Contact form</h3>
            <p>Information submitted through the contact form (name, email, subject, message) is used solely to respond to your inquiry. This data is not shared with third parties and is not used for marketing purposes.</p>

            <h3 className="font-headline text-xl" style={{ color: 'var(--t-text)' }}>Disclaimer</h3>
            <p>This website is provided as-is. While every effort is made to keep content accurate and current, Mikael Alemu Gorsky makes no warranties about the completeness, reliability, or accuracy of the information provided.</p>

            <h3 className="font-headline text-xl" style={{ color: 'var(--t-text)' }}>Changes</h3>
            <p>These terms may be updated from time to time. Continued use of the website constitutes acceptance of the current terms.</p>
          </div>
        </Card>
      </section>
    </main>
  )
}
