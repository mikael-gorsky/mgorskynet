export default function Footer() {
  return (
    <footer className="w-full px-6 md:px-12 py-2 bg-[#3e3830]/50 backdrop-blur-md flex flex-col md:flex-row justify-between items-center">
      <div className="w-full md:w-auto mb-1 md:mb-0">
        <p className="font-headline text-base text-primary/60">
          &copy; {new Date().getFullYear()} Mikael Alemu Gorsky.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 font-headline text-base">
        <a className="py-1 text-primary/60 hover:text-primary transition-all" href="https://linkedin.com/in/mgorsky" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a className="py-1 text-primary/60 hover:text-primary transition-all" href="https://x.com/maboroshi_gorsky" target="_blank" rel="noopener noreferrer">X</a>
        <a className="py-1 text-primary/60 hover:text-primary transition-all" href="/terms">Terms of Use</a>
        <a className="py-1 text-primary/60 hover:text-primary transition-all" href="/bio">Bio</a>
      </div>
    </footer>
  )
}
