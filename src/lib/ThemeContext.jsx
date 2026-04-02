import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

const THEMES = {
  'black-orange': { name: 'Black orange (dark)', dark: true },
  'ivory-consul': { name: 'Ivory consul (light)', dark: false },
  'slate-atlas': { name: 'Slate atlas (light)', dark: false },
  'obsidian-field': { name: 'Obsidian field (dark)', dark: true },
  'tidal-olive': { name: 'Tidal olive (dark)', dark: true },
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('theme') || 'black-orange' } catch { return 'black-orange' }
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try { localStorage.setItem('theme', theme) } catch {}
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
