export default async (req) => {
  try {
    const res = await fetch(
      'https://www.linkedin.com/newsletters/the-ai-pravda-6917819849142329344/',
      { headers: { 'User-Agent': 'Mozilla/5.0 (compatible; mgorskynet/1.0)' } }
    )
    if (!res.ok) throw new Error(`HTTP ${res.status}`)

    const html = await res.text()
    const titles = []
    let match

    // Primary: <h3><a href="...">Title</a></h3>
    const h3Regex = /<h3[^>]*>\s*<a[^>]+>([^<]{5,150})<\/a>\s*<\/h3>/gi
    while ((match = h3Regex.exec(html)) !== null && titles.length < 3) {
      const text = match[1].trim()
      if (!titles.includes(text)) titles.push(text)
    }

    // Fallback: structured data headlines
    if (titles.length === 0) {
      const ldRegex = /"headline"\s*:\s*"([^"]{5,150})"/gi
      while ((match = ldRegex.exec(html)) !== null && titles.length < 3) {
        const text = match[1].trim()
        if (!titles.includes(text)) titles.push(text)
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
