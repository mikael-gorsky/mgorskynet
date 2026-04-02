import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import NavbarNetwork from './NavbarNetwork'
import { useTheme } from '../lib/ThemeContext'

const navLinks = [
  { label: 'Teaching', href: '/#teaching' },
  { label: 'Pro Bono', href: '/#pro-bono' },
  { label: 'Research', href: '/#research' },
  { label: 'Business', href: '/#business' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { theme } = useTheme()
  const showCanvas = theme === 'black-orange'

  const isActive = (href) => {
    if (href.startsWith('/#')) return false
    return location.pathname.startsWith(href)
  }

  return (
    <nav className="fixed top-0 w-full z-50 t-bar-bg backdrop-blur-md overflow-hidden" style={{ backgroundColor: `color-mix(in srgb, var(--t-bar) 50%, transparent)` }}>
      {showCanvas && <NavbarNetwork />}
      <div className="relative flex justify-end items-center px-6 md:px-12 py-2 max-w-screen-2xl mx-auto">
        <div className="hidden md:flex gap-1 items-center font-headline tracking-tight text-base">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-1.5 transition-all hover:opacity-100"
              style={{ color: isActive(link.href) ? 'var(--t-accent)' : 'var(--t-bar-text)' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden p-1.5"
          style={{ color: 'var(--t-bar-text)' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 py-4 space-y-1" style={{ backgroundColor: 'var(--t-bar)' }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block px-4 py-2 font-headline text-base transition-all"
              style={{ color: 'var(--t-bar-text)' }}
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
