import { useState, useEffect } from 'react'
import { client } from '../lib/sanity'

export function useSanityData<T>(query: string) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const result = await client.fetch<T>(query)
        setData(result)
      } catch (err) {
        setError(err as Error)
        console.error('Sanity fetch error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [query])

  return { data, loading, error }
}