import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Section } from '@/components/primitives/section'
import { Eyebrow } from '@/components/primitives/section-heading'

const routes = [
  { label: 'Homepage', href: '/', hint: 'Start from the top' },
  { label: 'Case studies', href: '/case-studies', hint: 'Real clients, real features' },
  { label: 'Services', href: '/services', hint: 'Four ways to work with us' },
  { label: 'Guides', href: '/guides', hint: 'How to get featured, honestly' },
  { label: 'Reviews', href: '/reviews', hint: 'What clients say' },
  { label: 'Contact', href: '/contact', hint: 'We reply within 24 hours' },
]

export default function NotFound() {
  return (
    <Section className="py-24 md:py-32">
      <Eyebrow>404</Eyebrow>
      <h1 className="mt-6 max-w-measure font-display text-3xl leading-display tracking-tight text-ink md:text-4xl">
        This page never made it to press.
      </h1>
      <p className="mt-6 max-w-measure text-lg leading-body text-ink-secondary">
        The link is broken or the page has moved. Everything else is still where you left it.
      </p>

      <ul className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {routes.map((route) => (
          <li key={route.href}>
            <Link
              href={route.href}
              className="group flex h-full flex-col gap-2 bg-bg p-6 transition-colors hover:bg-bg-secondary"
            >
              <span className="font-display text-lg leading-heading tracking-tight text-ink">
                {route.label}
              </span>
              <span className="text-sm text-ink-secondary">{route.hint}</span>
            </Link>
          </li>
        ))}
      </ul>

      <Button asChild variant="accent" size="lg" className="mt-12">
        <Link href="/contact">
          Get featured
          <ArrowRight aria-hidden />
        </Link>
      </Button>
    </Section>
  )
}
