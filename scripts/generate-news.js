import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'

const CSV_PATH = join(
  process.env.HOME,
  'Documents/Claude/Projects/ACVC LI Group/content_archive.csv'
)
const OUT_DIR = join(process.cwd(), 'public/data')
const WIDGET_PATH = join(OUT_DIR, 'news.json')
const ARCHIVE_PATH = join(OUT_DIR, 'news-archive.json')

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
  mkdirSync(OUT_DIR, { recursive: true })

  if (!raw) {
    writeFileSync(WIDGET_PATH, '[]')
    writeFileSync(ARCHIVE_PATH, '[]')
    process.exit(0)
  }

  const lines = raw.split('\n').filter((l) => l.trim())
  const dataLines = lines[0].match(/date/i) ? lines.slice(1) : lines

  // Parse all entries
  const allItems = dataLines
    .map((line) => {
      const cols = parseCSVLine(line)
      const date = cols[0] || ''
      const source = cols[2] || ''
      const sourceUrl = cols[3] || ''
      const topic = cols[4] || ''
      const description = cols[5] || ''
      if (!topic) return null
      return {
        date,
        dateLabel: formatDateLabel(date),
        source,
        sourceUrl: sourceUrl.startsWith('http') ? sourceUrl : sourceUrl ? `https://${sourceUrl}` : '',
        topic,
        description,
      }
    })
    .filter(Boolean)

  // Widget: last 6, reversed (newest first)
  const widget = allItems.slice(-6).reverse().map(({ dateLabel, topic }) => ({ dateLabel, text: topic }))
  writeFileSync(WIDGET_PATH, JSON.stringify(widget))

  // Archive: all items, reversed (newest first)
  const archive = [...allItems].reverse()
  writeFileSync(ARCHIVE_PATH, JSON.stringify(archive))

  console.log(`Generated news.json (${widget.length} items) and news-archive.json (${archive.length} items)`)
} catch (err) {
  mkdirSync(OUT_DIR, { recursive: true })
  writeFileSync(WIDGET_PATH, '[]')
  writeFileSync(ARCHIVE_PATH, '[]')
  console.log('CSV not available, generated empty files')
}
