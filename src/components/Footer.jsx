export default function Footer() {
  return (
    <footer className="w-full px-6 md:px-12 py-16 flex flex-col md:flex-row justify-between items-center border-t border-primary/10 bg-surface-container-low">
      <div className="w-full md:w-auto mb-12 md:mb-0">
        <p className="font-label text-[0.6875rem] uppercase tracking-widest text-primary/60">
          &copy; {new Date().getFullYear()} Mikael Alemu Gorsky. Built for the human eye.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 font-label text-[0.6875rem] uppercase tracking-widest">
        <a className="px-4 py-2 border border-transparent hover:border-primary/20 hover:bg-surface text-primary/40 hover:text-primary transition-all" href="mailto:hello@mgorsky.net">Email</a>
        <a className="px-4 py-2 border border-transparent hover:border-primary/20 hover:bg-surface text-primary/40 hover:text-primary transition-all" href="https://linkedin.com/in/mgorsky" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a className="px-4 py-2 border border-transparent hover:border-primary/20 hover:bg-surface text-primary/40 hover:text-primary transition-all" href="https://x.com/maboroshi_gorsky" target="_blank" rel="noopener noreferrer">X</a>
        <a className="px-4 py-2 border border-transparent hover:border-primary/20 hover:bg-surface text-primary/40 hover:text-primary transition-all" href="/privacy">Privacy</a>
        <a className="px-4 py-2 border border-transparent hover:border-primary/20 hover:bg-surface text-primary/40 hover:text-primary transition-all" href="/colophon">Colophon</a>
      </div>
    </footer>
  )
}
