import { useEffect } from 'react'

const BASE_TITLE = 'Mikael Alemu Gorsky'

export default function usePageMeta({ title, description, jsonLd } = {}) {
  useEffect(() => {
    document.title = title ? `${title} — ${BASE_TITLE}` : `${BASE_TITLE} — AI strategist, researcher and educator`

    if (description) {
      let meta = document.querySelector('meta[name="description"]')
      if (!meta) {
        meta = document.createElement('meta')
        meta.name = 'description'
        document.head.appendChild(meta)
      }
      meta.content = description
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
