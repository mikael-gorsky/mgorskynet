import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

const THEMES = {
  'black-orange': { name: 'Black orange (dark)', dark: true },
  'ivory-consul': { name: 'Ivory consul (light)', dark: false },
  'slate-atlas': { name: 'Slate atlas (light)', dark: false },
  'obsidian-field': { name: 'Obsidian field (dark)', dark: true },
  'tidal-olive': { name: 'Tidal olive (dark)', dark: true },
}

const THEME_STYLES = {
  'black-orange': '', // default, no overrides
  'ivory-consul': `
    :root { --color-on-surface:#3a3632!important; --color-on-surface-variant:#8a8178!important; --color-on-background:#3a3632!important; --color-tertiary:#b08040!important; --color-tertiary-dim:#9a7038!important; --color-primary:#b08040!important; --color-primary-dim:#9a7038!important; --color-secondary:#8a8178!important; --color-secondary-dim:#8a8178!important; --color-outline:#a09890!important; --color-outline-variant:#d8d2c8!important; --color-on-primary:#fff!important; --color-primary-container:#f0e8d8!important; --color-on-primary-container:#5a4020!important; --color-error:#c04040!important; --color-surface:#f5f2ed!important; --color-surface-dim:#ece8e1!important; --color-surface-container-low:#ece8e1!important; --color-surface-container:#e8e4dd!important; --color-surface-container-high:#e0dcd5!important; --color-surface-container-highest:#d8d4cd!important; --color-background:#f5f2ed!important; --color-surface-variant:#e0dcd5!important; --color-surface-tint:#b08040!important; }
  `,
  'slate-atlas': `
    :root { --color-on-surface:#2c3e50!important; --color-on-surface-variant:#6b7d8e!important; --color-on-background:#2c3e50!important; --color-tertiary:#3a7ab8!important; --color-tertiary-dim:#2a6aa0!important; --color-primary:#3a7ab8!important; --color-primary-dim:#2a6aa0!important; --color-secondary:#6b7d8e!important; --color-secondary-dim:#6b7d8e!important; --color-outline:#8898a8!important; --color-outline-variant:#c8d0da!important; --color-on-primary:#fff!important; --color-primary-container:#d8e8f8!important; --color-on-primary-container:#1a3a58!important; --color-error:#c04040!important; --color-surface:#eef1f5!important; --color-surface-dim:#e4e9f0!important; --color-surface-container-low:#e4e9f0!important; --color-surface-container:#dce2ea!important; --color-surface-container-high:#d4dae4!important; --color-surface-container-highest:#ccd4de!important; --color-background:#eef1f5!important; --color-surface-variant:#d4dae4!important; --color-surface-tint:#3a7ab8!important; }
  `,
  'obsidian-field': `
    :root { --color-on-surface:#c8d4e2!important; --color-on-surface-variant:#7888a0!important; --color-on-background:#c8d4e2!important; --color-tertiary:#6090c0!important; --color-tertiary-dim:#5080b0!important; --color-primary:#6090c0!important; --color-primary-dim:#5080b0!important; --color-secondary:#7888a0!important; --color-secondary-dim:#7888a0!important; --color-outline:#5868a0!important; --color-outline-variant:#2a3040!important; --color-on-primary:#0a0c10!important; --color-primary-container:#1a2838!important; --color-on-primary-container:#90b0d0!important; --color-error:#ee7d77!important; --color-surface:#121418!important; --color-surface-dim:#0e1014!important; --color-surface-container-low:#161a20!important; --color-surface-container:#1a1e26!important; --color-surface-container-high:#1e2230!important; --color-surface-container-highest:#222838!important; --color-background:#121418!important; --color-surface-variant:#1e2230!important; --color-surface-tint:#6090c0!important; }
  `,
  'tidal-olive': `
    :root { --color-on-surface:#c8d0b8!important; --color-on-surface-variant:#8a9070!important; --color-on-background:#c8d0b8!important; --color-tertiary:#a0a060!important; --color-tertiary-dim:#909050!important; --color-primary:#a0a060!important; --color-primary-dim:#909050!important; --color-secondary:#8a9070!important; --color-secondary-dim:#8a9070!important; --color-outline:#6a7058!important; --color-outline-variant:#2c3020!important; --color-on-primary:#0c0c08!important; --color-primary-container:#222418!important; --color-on-primary-container:#b0b880!important; --color-error:#ee7d77!important; --color-surface:#12140e!important; --color-surface-dim:#0e100a!important; --color-surface-container-low:#181a12!important; --color-surface-container:#1a1c14!important; --color-surface-container-high:#1e2018!important; --color-surface-container-highest:#222620!important; --color-background:#12140e!important; --color-surface-variant:#1e2018!important; --color-surface-tint:#a0a060!important; }
  `,
}

const STYLE_ID = 'theme-overrides'

function applyTheme(theme) {
  let el = document.getElementById(STYLE_ID)
  if (!el) {
    el = document.createElement('style')
    el.id = STYLE_ID
    document.head.appendChild(el)
  }
  el.textContent = THEME_STYLES[theme] || ''
  document.documentElement.setAttribute('data-theme', theme)
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('theme') || 'black-orange' } catch { return 'black-orange' }
  })

  // Apply on mount (before first paint if possible)
  if (typeof document !== 'undefined' && !document.getElementById(STYLE_ID)) {
    applyTheme(theme)
  }

  useEffect(() => {
    applyTheme(theme)
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
