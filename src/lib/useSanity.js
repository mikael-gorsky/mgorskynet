import { useState, useEffect } from 'react'

export function useSanityQuery(fetchFn, fallback = null) {
  const [data, setData] = useState(fallback)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    fetchFn()
      .then((result) => {
        if (!cancelled) {
          setData(result && (Array.isArray(result) ? result.length > 0 : true) ? result : fallback)
          setLoading(false)
        }
      })
      .catch(() => {
        if (!cancelled) {
          setData(fallback)
          setLoading(false)
        }
      })
    return () => { cancelled = true }
  }, [])

  return { data, loading }
}
