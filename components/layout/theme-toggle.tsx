'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/components/theme-provider'

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggle } = useTheme()

  return (
    <button
      type="button"
      onClick={toggle}
      className={className}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={theme === 'dark'}
    >
      <Sun aria-hidden className="size-4 dark:hidden" />
      <Moon aria-hidden className="hidden size-4 dark:block" />
    </button>
  )
}
