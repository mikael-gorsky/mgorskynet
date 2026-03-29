export default async (req) => {
  try {
    const res = await fetch(
      'https://www.linkedin.com/newsletters/the-ai-pravda-6917819849142329344/',
      { headers: { 'User-Agent': 'Mozilla/5.0 (compatible; mgorskynet/1.0)' } }
    )
    if (!res.ok) throw new Error(`HTTP ${res.status}`)

    const html = await res.text()

    // Extract article titles from the newsletter page
    // LinkedIn renders article titles in various patterns
    const titles = []

    // Pattern: "mini-card__title" or article title patterns
    const titleRegex = /<(?:h[23]|span|a)[^>]*class="[^"]*title[^"]*"[^>]*>([^<]+)</gi
    let match
    while ((match = titleRegex.exec(html)) !== null && titles.length < 3) {
      const text = match[1].trim()
      if (text.length > 5 && text.length < 200) {
        titles.push(text)
      }
    }

    // Fallback: look for og/meta article titles or visible text patterns
    if (titles.length === 0) {
      const altRegex = /data-tracking-will-navigate[^>]*>([^<]{10,150})</gi
      while ((match = altRegex.exec(html)) !== null && titles.length < 3) {
        titles.push(match[1].trim())
      }
    }

    // Another fallback: extract from structured data
    if (titles.length === 0) {
      const ldRegex = /"headline"\s*:\s*"([^"]+)"/gi
      while ((match = ldRegex.exec(html)) !== null && titles.length < 3) {
        titles.push(match[1].trim())
      }
    }

    return new Response(JSON.stringify(titles.slice(0, 3)), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600',
        'Access-Control-Allow-Origin': '*',
      },
    })
  } catch (err) {
    return new Response(JSON.stringify([]), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}

export const config = { path: '/api/ai-pravda-latest' }
