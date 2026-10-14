import { useEffect } from 'react'

const BASE_TITLE = 'Mikael Alemu Gorsky'
const SITE_URL = 'https://mgorsky.net'

// Sets a tag in the head, making it when the page has none (attr names it: name="description", property="og:url"…).
function setMeta(attr, key, value) {
  let meta = document.querySelector(`meta[${attr}="${key}"]`)
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute(attr, key)
    document.head.appendChild(meta)
  }
  meta.content = value
}

export default function usePageMeta({ title, description, jsonLd } = {}) {
  useEffect(() => {
    const fullTitle = title ? `${title} — ${BASE_TITLE}` : `${BASE_TITLE}. Educator and researcher.`
    document.title = fullTitle
    // Each page is its own page to search engines and link previews: its own address, title and description.
    const path = window.location.pathname.replace(/\/+$/, '')
    const url = `${SITE_URL}${path || '/'}`
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:title', fullTitle)
    setMeta('name', 'twitter:title', fullTitle)

    if (description) {
      setMeta('name', 'description', description)
      setMeta('property', 'og:description', description)
      setMeta('name', 'twitter:description', description)
    }

    if (jsonLd) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(jsonLd)
      script.dataset.page = 'true'
      document.head.appendChild(script)
      return () => script.remove()
    }
  }, [title, description, jsonLd])
}
