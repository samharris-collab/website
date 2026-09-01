'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
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
  const reduced = useReducedMotion()

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
        <AnimatePresence>
          {open &&
            actions.slice(1).map(({ label, href, icon: Icon, internal }, i) => {
              const inner = (
                <>
                  <span className="text-sm">{label}</span>
                  <Icon aria-hidden className="size-4" />
                </>
              )
              const className =
                'flex items-center gap-3 rounded-full border border-line bg-bg px-5 py-3 text-ink shadow-lg transition-colors hover:border-line-strong'
              return (
                <motion.div
                  key={label}
                  initial={reduced ? false : { opacity: 0, y: 12, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={reduced ? undefined : { opacity: 0, y: 12, scale: 0.96 }}
                  transition={{ duration: 0.18, delay: reduced ? 0 : i * 0.04 }}
                >
                  {internal ? (
                    <Link href={href} className={className}>
                      {inner}
                    </Link>
                  ) : (
                    <a
                      href={href}
                      className={className}
                      {...(href.startsWith('http')
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                    >
                      {inner}
                    </a>
                  )}
                </motion.div>
              )
            })}
        </AnimatePresence>

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
