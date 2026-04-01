import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import NavbarNetwork from './NavbarNetwork'

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
    <nav className="fixed top-0 w-full z-50 bg-[#3e3830]/50 backdrop-blur-md overflow-hidden">
      <NavbarNetwork />
      <div className="relative flex justify-end items-center px-6 md:px-12 py-2 max-w-screen-2xl mx-auto">
        <div className="hidden md:flex gap-1 items-center font-headline tracking-tight text-base">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`px-4 py-1.5 transition-all ${
                isActive(link.href)
                  ? 'text-tertiary border-b border-tertiary/30'
                  : 'text-primary/60 hover:text-primary hover:bg-surface-container-low'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-primary p-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-surface-container-low border-t border-primary/10 px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block px-4 py-2 font-headline text-base text-primary/60 hover:text-primary hover:bg-surface-container transition-all"
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
