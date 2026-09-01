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
