'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Clock, Mail, MessageCircle, Plus, Star, type LucideIcon } from 'lucide-react'
import { site } from '@/lib/site'
import { cn } from '@/lib/utils'

type QuickAction = {
  label: string
  href: string
  icon: LucideIcon
  internal: boolean
  accent?: boolean
}

const actions: QuickAction[] = [
  { label: 'Get Featured', href: '/contact', icon: Star, internal: true, accent: true },
  { label: 'Book a call', href: '/contact#book', icon: Clock, internal: true },
  { label: 'WhatsApp', href: site.whatsapp, icon: MessageCircle, internal: false },
  { label: 'Email us', href: `mailto:${site.email}`, icon: Mail, internal: false },
]

export function FloatingCta() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // On /contact every one of these actions is already on the page.
  if (pathname === '/contact') return null

  return (
    <>
      {/* Mobile: a fixed action bar. Body padding in the layout keeps it clear of content. */}
      <nav
        aria-label="Quick contact"
        className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-4 border-t border-line bg-bg/95 backdrop-blur-md md:hidden"
      >
        {actions.map(({ label, href, icon: Icon, internal, accent }) => {
          const inner = (
            <>
              <Icon aria-hidden className="size-5" />
              <span className="text-[0.6875rem] leading-none">{label}</span>
            </>
          )
          const className = cn(
            'flex min-h-[3.75rem] flex-col items-center justify-center gap-1.5 py-2 text-ink transition-colors',
            accent && 'bg-accent text-accent-ink'
          )
          return internal ? (
            <Link key={label} href={href} className={className}>
              {inner}
            </Link>
          ) : (
            <a
              key={label}
              href={href}
              className={className}
              {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {inner}
            </a>
          )
        })}
      </nav>

      {/* Desktop: a collapsed cluster that expands on demand. */}
      <nav
        aria-label="Quick contact"
        className="fixed bottom-8 right-8 z-40 hidden flex-col items-end gap-3 md:flex"
      >
        {/* Kept mounted and hidden so the transition can run both ways in CSS;
            aria-hidden + inert keep the collapsed links out of reach. */}
        <div
          className="flex flex-col items-end gap-3 transition-all duration-200 ease-editorial data-[open=false]:pointer-events-none data-[open=false]:translate-y-3 data-[open=false]:opacity-0"
          data-open={open}
          aria-hidden={!open}
          inert={!open}
        >
          {actions.slice(1).map(({ label, href, icon: Icon, internal }) => {
            const inner = (
              <>
                <span className="text-sm">{label}</span>
                <Icon aria-hidden className="size-4" />
              </>
            )
            const className =
              'flex items-center gap-3 rounded-full border border-line bg-bg px-5 py-3 text-ink shadow-lg transition-colors hover:border-line-strong'
            return internal ? (
              <Link key={label} href={href} className={className} tabIndex={open ? undefined : -1}>
                {inner}
              </Link>
            ) : (
              <a
                key={label}
                href={href}
                className={className}
                tabIndex={open ? undefined : -1}
                {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {inner}
              </a>
            )
          })}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-full bg-accent px-6 py-4 text-sm font-medium text-accent-ink shadow-lg transition-transform duration-200 ease-editorial hover:-translate-y-0.5"
          >
            <Star aria-hidden className="size-4" />
            Get Featured
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Hide contact options' : 'Show more contact options'}
            className="flex size-12 items-center justify-center rounded-full border border-line-strong bg-bg text-ink shadow-lg transition-transform duration-200 ease-editorial hover:-translate-y-0.5"
          >
            <Plus
              aria-hidden
              className={cn('size-5 transition-transform duration-300', open && 'rotate-45')}
            />
          </button>
        </div>
      </nav>
    </>
  )
}
