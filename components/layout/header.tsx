'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Logo } from './logo'
import { ThemeToggle } from './theme-toggle'
import { Button } from '@/components/ui/button'
import { nav, site } from '@/lib/site'
import { cn } from '@/lib/utils'

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile sheet when the route changes. Adjusting state during
  // render is React's documented pattern for this and avoids the extra commit
  // an effect would cost.
  const [renderedAt, setRenderedAt] = useState(pathname)
  if (renderedAt !== pathname) {
    setRenderedAt(pathname)
    setOpen(false)
  }

  // Lock the background from scrolling while the sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header
      className={cn(
        'sticky top-0 z-50 h-header transition-shadow duration-300 ease-editorial',
        scrolled
          ? 'border-b border-line bg-bg/85 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-bg/70'
          : 'border-b border-transparent bg-bg'
      )}
    >
      <div className="container-editorial flex h-header items-center justify-between gap-6">
        <Logo className="shrink-0" />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={cn(
                'relative rounded-sm px-3 py-2 text-sm text-ink-secondary transition-colors hover:text-ink',
                isActive(item.href) && 'text-ink'
              )}
            >
              {item.label}
              {isActive(item.href) && (
                <span aria-hidden className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-accent" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden size-10 items-center justify-center rounded-full border border-line text-ink-secondary transition-colors hover:border-line-strong hover:text-ink sm:flex" />
          <Button asChild variant="accent" size="sm" className="hidden sm:inline-flex">
            <Link href="/contact">Book a Call</Link>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="flex size-10 items-center justify-center rounded-full border border-line text-ink lg:hidden"
          >
            {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-header z-50 overflow-y-auto border-t border-line bg-bg lg:hidden"
      >
        <nav aria-label="Primary mobile" className="container-editorial flex flex-col py-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={cn(
                'border-b border-line py-4 font-display text-xl tracking-tight text-ink',
                isActive(item.href) && 'text-ink-secondary'
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-8 flex flex-col gap-3">
            <Button asChild variant="accent" size="lg">
              <Link href="/contact">Book a Call</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href={`mailto:${site.email}`}>Email us</a>
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-between border-t border-line pt-6">
            <span className="text-sm text-ink-muted">Appearance</span>
            <ThemeToggle className="flex size-10 items-center justify-center rounded-full border border-line text-ink" />
          </div>
        </nav>
      </div>
    </header>
  )
}
