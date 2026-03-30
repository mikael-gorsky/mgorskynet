import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Teaching', href: '/#teaching' },
  { label: 'Pro Bono', href: '/#pro-bono' },
  { label: 'Research', href: '/#research' },
  { label: 'Business', href: '/#business' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (href) => {
    if (href.startsWith('/#')) return false
    return location.pathname.startsWith(href)
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#1e1a14]/50 backdrop-blur-md">
      <div className="flex justify-between items-center px-6 md:px-12 py-8 max-w-screen-2xl mx-auto">
        <Link to="/" className="font-headline text-xl font-bold text-tertiary-dim hover:opacity-80 transition-opacity">
          Mikael Alemu Gorsky
        </Link>

        <div className="hidden md:flex gap-1 items-center font-headline tracking-tight text-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`px-5 py-2 transition-all ${
                isActive(link.href)
                  ? 'text-tertiary border-b border-tertiary/30 pb-1'
                  : 'text-primary/60 hover:text-primary hover:bg-surface-container-low'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-primary p-2 bg-surface-container-low"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-surface-container-low border-t border-primary/10 px-6 py-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block px-4 py-3 font-headline text-lg text-primary/60 hover:text-primary hover:bg-surface-container transition-all"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
