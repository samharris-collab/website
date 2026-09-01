import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Absolute URL against the canonical site origin. */
export function absoluteUrl(path = '/') {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.digitalnetworkingagency.com'
  return new URL(path, base).toString()
}

/** "June 2, 2026" → sortable ISO date, tolerant of missing days. */
export function toIsoDate(value: string): string | undefined {
  const parsed = new Date(`${value} UTC`)
  if (Number.isNaN(parsed.getTime())) return undefined
  return parsed.toISOString().slice(0, 10)
}
