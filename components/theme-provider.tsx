'use client'

import { createContext, useCallback, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const ThemeContext = createContext<{
  theme: Theme
  toggle: () => void
} | null>(null)

const STORAGE_KEY = 'dna-theme'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Starts as 'light' on the server; ThemeScript has already set the real class
  // on <html> before hydration, so we read it back on mount rather than guess.
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light')
  }, [])

  const toggle = useCallback(() => {
    setTheme((current) => {
      const next: Theme = current === 'dark' ? 'light' : 'dark'
      document.documentElement.classList.toggle('dark', next === 'dark')
      document.documentElement.style.colorScheme = next
      try {
        localStorage.setItem(STORAGE_KEY, next)
      } catch {
        // Storage can throw in private mode; the toggle still works for this page.
      }
      return next
    })
  }, [])

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider')
  return ctx
}
