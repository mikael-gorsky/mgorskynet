import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

const THEMES = {
  'black-orange': { name: 'Black orange (dark)', dark: true },
  'ivory-consul': { name: 'Ivory consul (light)', dark: false },
  'slate-atlas': { name: 'Slate atlas (light)', dark: false },
  'obsidian-field': { name: 'Obsidian field (dark)', dark: true },
  'tidal-olive': { name: 'Tidal olive (dark)', dark: true },
}

// Full CSS injected per theme — everything that changes
const THEME_CSS = {
  'black-orange': ``, // default — all styles in index.css

  'ivory-consul': `
    :root {
      --color-on-surface: #3a3632 !important;
      --color-on-surface-variant: #8a8178 !important;
      --color-on-background: #3a3632 !important;
      --color-tertiary: #b08040 !important;
      --color-tertiary-dim: #9a7038 !important;
      --color-primary: #b08040 !important;
      --color-primary-dim: #9a7038 !important;
      --color-secondary: #8a8178 !important;
      --color-secondary-dim: #8a8178 !important;
      --color-outline: #a09890 !important;
      --color-outline-variant: #d8d2c8 !important;
      --color-on-primary: #fff !important;
      --color-primary-container: #f0e8d8 !important;
      --color-on-primary-container: #5a4020 !important;
      --color-error: #c04040 !important;
      --color-surface: #f5f2ed !important;
      --color-surface-dim: #ece8e1 !important;
      --color-surface-container-low: #ece8e1 !important;
      --color-surface-container: #e8e4dd !important;
      --color-surface-container-high: #e0dcd5 !important;
      --color-surface-container-highest: #d8d4cd !important;
      --color-surface-variant: #e0dcd5 !important;
      --color-surface-tint: #b08040 !important;
      --color-background: #f5f2ed !important;
    }
    body {
      background: linear-gradient(180deg, #f5f2ed 0%, #ece8e1 100%) !important;
      color: #3a3632 !important;
    }
    nav, footer { background-color: rgba(58,54,50,0.9) !important; }
    .card, .card-v1, .card-v2, .card-v3, .card-v4, .card-v5, .card-v6, .card-widget, .card-featured {
      background: #ffffff !important;
    }
    .card::before {
      background: linear-gradient(135deg, #d8d2c8, #d8d2c8) !important;
      mask-composite: exclude !important;
      -webkit-mask-composite: xor !important;
    }
    .card:hover::before {
      background: linear-gradient(135deg, #b08040, #c89850) !important;
    }
    .card-wrap {
      filter: drop-shadow(0 8px 20px rgba(0,0,0,0.08)) drop-shadow(0 3px 8px rgba(0,0,0,0.05)) !important;
    }
    .card-wrap:hover {
      filter: drop-shadow(0 12px 28px rgba(0,0,0,0.12)) drop-shadow(0 5px 12px rgba(176,128,64,0.08)) !important;
    }
    .section-title {
      background: linear-gradient(90deg, rgba(58,54,50,0.08) 0%, rgba(58,54,50,0.03) 70%, transparent 100%) !important;
    }
    .metal-name { color: #3a3632 !important; text-shadow: 0 4px 12px rgba(0,0,0,0.15), 0 8px 24px rgba(0,0,0,0.08) !important; }
  `,

  'slate-atlas': `
    :root {
      --color-on-surface: #2c3e50 !important;
      --color-on-surface-variant: #6b7d8e !important;
      --color-on-background: #2c3e50 !important;
      --color-tertiary: #3a7ab8 !important;
      --color-tertiary-dim: #2a6aa0 !important;
      --color-primary: #3a7ab8 !important;
      --color-primary-dim: #2a6aa0 !important;
      --color-secondary: #6b7d8e !important;
      --color-secondary-dim: #6b7d8e !important;
      --color-outline: #8898a8 !important;
      --color-outline-variant: #c8d0da !important;
      --color-on-primary: #fff !important;
      --color-primary-container: #d8e8f8 !important;
      --color-on-primary-container: #1a3a58 !important;
      --color-error: #c04040 !important;
      --color-surface: #eef1f5 !important;
      --color-surface-dim: #e4e9f0 !important;
      --color-surface-container-low: #e4e9f0 !important;
      --color-surface-container: #dce2ea !important;
      --color-surface-container-high: #d4dae4 !important;
      --color-surface-container-highest: #ccd4de !important;
      --color-surface-variant: #d4dae4 !important;
      --color-surface-tint: #3a7ab8 !important;
      --color-background: #eef1f5 !important;
    }
    body {
      background: repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(64,96,160,0.04) 39px, rgba(64,96,160,0.04) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(64,96,160,0.04) 39px, rgba(64,96,160,0.04) 40px), linear-gradient(135deg, #eef1f5 0%, #e4e9f0 100%) !important;
      color: #2c3e50 !important;
    }
    nav, footer { background-color: rgba(30,42,56,0.9) !important; }
    .card, .card-v1, .card-v2, .card-v3, .card-v4, .card-v5, .card-v6, .card-widget, .card-featured {
      background: #ffffff !important;
    }
    .card::before {
      background: linear-gradient(135deg, #c8d0da, #c8d0da) !important;
      mask-composite: exclude !important;
      -webkit-mask-composite: xor !important;
    }
    .card:hover::before {
      background: linear-gradient(135deg, #3a7ab8, #5090d0) !important;
    }
    .card-wrap {
      filter: drop-shadow(0 8px 20px rgba(0,0,0,0.06)) drop-shadow(0 3px 8px rgba(0,0,0,0.04)) !important;
    }
    .card-wrap:hover {
      filter: drop-shadow(0 12px 28px rgba(0,0,0,0.1)) drop-shadow(0 5px 12px rgba(58,122,184,0.06)) !important;
    }
    .section-title {
      background: linear-gradient(90deg, rgba(30,42,56,0.08) 0%, rgba(30,42,56,0.03) 70%, transparent 100%) !important;
    }
    .metal-name { color: #2c3e50 !important; text-shadow: 0 4px 12px rgba(0,0,0,0.1), 0 8px 24px rgba(0,0,0,0.06) !important; }
  `,

  'obsidian-field': `
    :root {
      --color-on-surface: #c8d4e2 !important;
      --color-on-surface-variant: #7888a0 !important;
      --color-on-background: #c8d4e2 !important;
      --color-tertiary: #6090c0 !important;
      --color-tertiary-dim: #5080b0 !important;
      --color-primary: #6090c0 !important;
      --color-primary-dim: #5080b0 !important;
      --color-secondary: #7888a0 !important;
      --color-secondary-dim: #7888a0 !important;
      --color-outline: #5868a0 !important;
      --color-outline-variant: #2a3040 !important;
      --color-on-primary: #0a0c10 !important;
      --color-primary-container: #1a2838 !important;
      --color-on-primary-container: #90b0d0 !important;
      --color-error: #ee7d77 !important;
      --color-surface: #121418 !important;
      --color-surface-dim: #0e1014 !important;
      --color-surface-container-low: #161a20 !important;
      --color-surface-container: #1a1e26 !important;
      --color-surface-container-high: #1e2230 !important;
      --color-surface-container-highest: #222838 !important;
      --color-surface-variant: #1e2230 !important;
      --color-surface-tint: #6090c0 !important;
      --color-background: #121418 !important;
    }
    body {
      background: radial-gradient(ellipse 50% 50% at 50% 50%, rgba(26,32,48,0.15) 0%, transparent 70%), linear-gradient(170deg, #121418 0%, #161a20 100%) !important;
      color: #c8d4e2 !important;
    }
    nav, footer { background-color: rgba(10,12,16,0.9) !important; }
    .card, .card-v1, .card-v2, .card-v3, .card-v4, .card-v5, .card-v6, .card-widget, .card-featured {
      background: #1a1e26 !important;
    }
    .card::before {
      background: linear-gradient(135deg, #2a3040, #2a3040) !important;
      mask-composite: exclude !important;
      -webkit-mask-composite: xor !important;
    }
    .card:hover::before {
      background: linear-gradient(135deg, #6090c0, #4878a8) !important;
    }
    .card-wrap {
      filter: drop-shadow(0 16px 28px rgba(0,0,0,0.7)) drop-shadow(0 6px 12px rgba(0,0,0,0.5)) !important;
    }
    .card-wrap:hover {
      filter: drop-shadow(0 24px 40px rgba(0,0,0,0.8)) drop-shadow(0 10px 20px rgba(96,144,192,0.1)) !important;
    }
    .section-title {
      background: linear-gradient(90deg, rgba(10,12,16,0.6) 0%, rgba(10,12,16,0.3) 70%, transparent 100%) !important;
    }
    .metal-name { color: #c8d4e2 !important; text-shadow: 0 4px 12px rgba(0,0,0,0.8), 0 8px 24px rgba(0,0,0,0.5) !important; }
  `,

  'tidal-olive': `
    :root {
      --color-on-surface: #c8d0b8 !important;
      --color-on-surface-variant: #8a9070 !important;
      --color-on-background: #c8d0b8 !important;
      --color-tertiary: #a0a060 !important;
      --color-tertiary-dim: #909050 !important;
      --color-primary: #a0a060 !important;
      --color-primary-dim: #909050 !important;
      --color-secondary: #8a9070 !important;
      --color-secondary-dim: #8a9070 !important;
      --color-outline: #6a7058 !important;
      --color-outline-variant: #2c3020 !important;
      --color-on-primary: #0c0c08 !important;
      --color-primary-container: #222418 !important;
      --color-on-primary-container: #b0b880 !important;
      --color-error: #ee7d77 !important;
      --color-surface: #12140e !important;
      --color-surface-dim: #0e100a !important;
      --color-surface-container-low: #181a12 !important;
      --color-surface-container: #1a1c14 !important;
      --color-surface-container-high: #1e2018 !important;
      --color-surface-container-highest: #222620 !important;
      --color-surface-variant: #1e2018 !important;
      --color-surface-tint: #a0a060 !important;
      --color-background: #12140e !important;
    }
    body {
      background: radial-gradient(ellipse 40% 40% at 30% 40%, rgba(42,48,24,0.1) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 70% 60%, rgba(42,48,24,0.1) 0%, transparent 60%), linear-gradient(170deg, #12140e 0%, #181a12 100%) !important;
      color: #c8d0b8 !important;
    }
    nav, footer { background-color: rgba(12,12,8,0.9) !important; }
    .card, .card-v1, .card-v2, .card-v3, .card-v4, .card-v5, .card-v6, .card-widget, .card-featured {
      background: linear-gradient(135deg, #1a1c14, #1e2016) !important;
    }
    .card::before {
      background: linear-gradient(135deg, #2c3020, #2c3020) !important;
      mask-composite: exclude !important;
      -webkit-mask-composite: xor !important;
    }
    .card:hover::before {
      background: linear-gradient(135deg, #a0a060, #88903c) !important;
    }
    .card-wrap {
      filter: drop-shadow(0 16px 28px rgba(0,0,0,0.7)) drop-shadow(0 6px 12px rgba(0,0,0,0.5)) !important;
    }
    .card-wrap:hover {
      filter: drop-shadow(0 24px 40px rgba(0,0,0,0.8)) drop-shadow(0 10px 20px rgba(160,160,96,0.1)) !important;
    }
    .section-title {
      background: linear-gradient(90deg, rgba(12,12,8,0.6) 0%, rgba(12,12,8,0.3) 70%, transparent 100%) !important;
    }
    .metal-name { color: #c8d0b8 !important; text-shadow: 0 4px 12px rgba(0,0,0,0.8), 0 8px 24px rgba(0,0,0,0.5) !important; }
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
  el.textContent = THEME_CSS[theme] || ''
  document.documentElement.setAttribute('data-theme', theme)
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('theme') || 'black-orange' } catch { return 'black-orange' }
  })

  if (typeof document !== 'undefined') {
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
