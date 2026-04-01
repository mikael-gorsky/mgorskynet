export default function Footer() {
  return (
    <footer className="card card-v2 w-full px-6 md:px-12 py-4 flex flex-col md:flex-row justify-between items-center">
      <div className="w-full md:w-auto mb-2 md:mb-0">
        <p className="font-label text-[0.6rem] uppercase tracking-widest text-primary/60">
          &copy; {new Date().getFullYear()} Mikael Alemu Gorsky.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 font-label text-[0.6rem] uppercase tracking-widest">
        <a className="py-1 text-primary/40 hover:text-primary transition-all" href="https://linkedin.com/in/mgorsky" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a className="py-1 text-primary/40 hover:text-primary transition-all" href="https://x.com/maboroshi_gorsky" target="_blank" rel="noopener noreferrer">X</a>
        <a className="py-1 text-primary/40 hover:text-primary transition-all" href="/terms">Terms of Use</a>
        <a className="py-1 text-primary/40 hover:text-primary transition-all" href="/bio">Bio</a>
      </div>
    </footer>
  )
}
