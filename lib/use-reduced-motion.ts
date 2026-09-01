'use client'

import { useEffect, useState } from 'react'

/**
 * Tracks prefers-reduced-motion, including changes made while the page is open.
 * Starts false so server and first client render agree; the effect corrects it
 * before anything animates.
 */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(query.matches)
    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  return reduced
}
