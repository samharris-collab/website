'use client'

import { createContext, useCallback, useContext, useSyncExternalStore } from 'react'

type Theme = 'light' | 'dark'

const ThemeContext = createContext<{ theme: Theme; toggle: () => void } | null>(null)

const STORAGE_KEY = 'dna-theme'

/**
 * The <html> class is the source of truth — the blocking head script sets it
 * before first paint, and the toggle writes to it. Reading it through
 * useSyncExternalStore keeps React in step without a setState-in-effect
 * round trip, and gives the server a stable 'light' snapshot so hydration
 * matches whatever markup was sent.
 */
const subscribe = (onChange: () => void) => {
  const observer = new MutationObserver(onChange)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
  return () => observer.disconnect()
}

const getSnapshot = (): Theme =>
  document.documentElement.classList.contains('dark') ? 'dark' : 'light'

const getServerSnapshot = (): Theme => 'light'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  const toggle = useCallback(() => {
    const next: Theme = document.documentElement.classList.contains('dark') ? 'light' : 'dark'
    document.documentElement.classList.toggle('dark', next === 'dark')
    document.documentElement.style.colorScheme = next
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Private mode can throw; the toggle still works for this page view.
    }
  }, [])

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider')
  return ctx
}
