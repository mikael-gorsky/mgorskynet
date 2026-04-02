export default function Footer() {
  return (
    <footer className="w-full px-6 md:px-12 py-2 backdrop-blur-md flex flex-col md:flex-row justify-between items-center" style={{ backgroundColor: `color-mix(in srgb, var(--t-bar) 50%, transparent)` }}>
      <div className="w-full md:w-auto mb-1 md:mb-0">
        <p className="font-headline text-base" style={{ color: 'var(--t-bar-text)' }}>
          &copy; {new Date().getFullYear()} Mikael Alemu Gorsky.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 font-headline text-base">
        <a className="py-1 transition-all hover:opacity-100" style={{ color: 'var(--t-bar-text)' }} href="https://linkedin.com/in/mgorsky" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a className="py-1 transition-all hover:opacity-100" style={{ color: 'var(--t-bar-text)' }} href="https://x.com/maboroshi_gorsky" target="_blank" rel="noopener noreferrer">X</a>
        <a className="py-1 transition-all hover:opacity-100" style={{ color: 'var(--t-bar-text)' }} href="/terms">Terms</a>
        <a className="py-1 transition-all hover:opacity-100" style={{ color: 'var(--t-bar-text)' }} href="/bio">Bio</a>
      </div>
    </footer>
  )
}
