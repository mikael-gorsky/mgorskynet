import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'

const CSV_PATH = join(
  process.env.HOME,
  'Documents/Claude/Projects/ACVC LI Group/content_archive.csv'
)
const OUT_PATH = join(process.cwd(), 'public/data/news.json')

function parseCSVLine(line) {
  const result = []
  let current = ''
  let inQuotes = false
  for (let i = 0; i < line.length; i++) {
    const ch = line[i]
    if (ch === '"') {
      inQuotes = !inQuotes
    } else if (ch === ',' && !inQuotes) {
      result.push(current.trim())
      current = ''
    } else {
      current += ch
    }
  }
  result.push(current.trim())
  return result
}

function formatDateLabel(dateStr) {
  try {
    const d = new Date(dateStr)
    if (isNaN(d.getTime())) return dateStr.slice(0, 6).toUpperCase()
    const month = d.toLocaleString('en-US', { month: 'short' }).toUpperCase()
    const day = d.getDate()
    return `${month} ${day}`
  } catch {
    return ''
  }
}

try {
  const raw = readFileSync(CSV_PATH, 'utf-8').trim()
  if (!raw) {
    writeFileSync(OUT_PATH, '[]')
    process.exit(0)
  }

  const lines = raw.split('\n').filter((l) => l.trim())
  // Skip header if first line looks like a header
  const dataLines = lines[0].match(/date/i) ? lines.slice(1) : lines
  const last3 = dataLines.slice(-3).reverse()

  const items = last3
    .map((line) => {
      const cols = parseCSVLine(line)
      const date = cols[0] || ''
      const text = cols[4] || ''
      if (!text) return null
      return { dateLabel: formatDateLabel(date), text }
    })
    .filter(Boolean)

  mkdirSync(join(process.cwd(), 'public/data'), { recursive: true })
  writeFileSync(OUT_PATH, JSON.stringify(items))
  console.log(`Generated news.json with ${items.length} items`)
} catch (err) {
  // File not found or other error — write empty array
  mkdirSync(join(process.cwd(), 'public/data'), { recursive: true })
  writeFileSync(OUT_PATH, '[]')
  console.log('CSV not available, generated empty news.json')
}
