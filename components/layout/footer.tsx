import Link from 'next/link'
import { ArrowUpRight, Lock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { Logo } from './logo'
import { site } from '@/lib/site'
import { topPublications } from '@/lib/content/publications'

const exploreLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Publications', href: '/publications' },
  { label: 'Compare Options', href: '/compare' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Get Featured', href: '/get-featured-in' },
  { label: 'Industries', href: '/pr-for' },
  { label: 'Guides', href: '/guides' },
]

const trustChips = ['100+ Outlets', 'Worldwide', 'Permanent Features']
const paymentBadges = ['stripe', 'VISA', 'AMEX', 'Paylink']

/** Soft-breaks the address after the @ so a narrow column never splits the TLD. */
function Email() {
  const [local, domain] = site.email.split('@')
  return (
    <span>
      {local}@<wbr />
      {domain}
    </span>
  )
}

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-sans text-xs font-medium uppercase tracking-wide text-ink-muted">
      {children}
    </h2>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg-secondary">
      <div className="container-editorial py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Identity */}
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-6 max-w-measure-tight text-sm leading-body text-ink-secondary">
              Digital Networking Agency helps founders &amp; brands get featured in the world&rsquo;s
              most trusted publications — MSN, USA Today, Forbes and 100+ outlets. Real placements,
              permanent features, every word approved by you.
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {trustChips.map((chip) => (
                <li
                  key={chip}
                  className="rounded-full border border-line px-3 py-1.5 text-xs uppercase tracking-wide text-ink-secondary"
                >
                  {chip}
                </li>
              ))}
            </ul>

            <a
              href={site.trustpilot}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-3 rounded-sm border border-line bg-bg px-4 py-3 transition-colors hover:border-line-strong"
            >
              <span aria-hidden className="text-accent-ink dark:text-accent">
                ★★★★★
              </span>
              <span className="text-sm text-ink">Trusted by our clients</span>
              <ArrowUpRight aria-hidden className="size-4 text-ink-muted" />
              <span className="sr-only">Read our reviews on Trustpilot (opens in a new tab)</span>
            </a>

            <ul className="mt-6 flex flex-col gap-3 text-sm text-ink-secondary">
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-ink"
                >
                  <span aria-hidden className="text-ink-muted">
                    ◎
                  </span>
                  Instagram {site.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-ink"
                >
                  <MessageCircle aria-hidden className="size-4 text-ink-muted" />
                  WhatsApp {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-start gap-2 hover:text-ink"
                >
                  <Mail aria-hidden className="mt-1 size-4 shrink-0 text-ink-muted" />
                  <Email />
                </a>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <nav aria-labelledby="footer-explore" className="lg:col-span-2">
            <ColumnHeading>
              <span id="footer-explore">Explore</span>
            </ColumnHeading>
            <ul className="mt-5 flex flex-col gap-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-ink-secondary hover:text-ink">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:gap-2.5"
                >
                  Get Featured Now
                  <ArrowUpRight aria-hidden className="size-4" />
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-3">
            <ColumnHeading>Contact</ColumnHeading>
            <ul className="mt-5 flex flex-col gap-4 text-sm text-ink-secondary">
              <li className="flex gap-3">
                <Mail aria-hidden className="mt-0.5 size-4 shrink-0 text-ink-muted" />
                <a href={`mailto:${site.email}`} className="hover:text-ink">
                  <Email />
                </a>
              </li>
              <li className="flex gap-3">
                <Phone aria-hidden className="mt-0.5 size-4 shrink-0 text-ink-muted" />
                <a href={`tel:${site.phoneE164}`} className="hover:text-ink">
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-ink-muted" />
                <address className="not-italic">{site.address.full}</address>
              </li>
              <li className="pt-1 text-ink-muted">{site.hours}</li>
              <li className="text-ink">{site.replyPromise}</li>
            </ul>
          </div>

          {/* Publications — two columns so 18 links stay scannable. */}
          <nav aria-labelledby="footer-publications" className="lg:col-span-3">
            <ColumnHeading>
              <span id="footer-publications">Top Publications</span>
            </ColumnHeading>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {topPublications.map((pub) => (
                <li key={pub.slug}>
                  <Link
                    href={`/get-featured-in/${pub.slug}`}
                    className="text-sm text-ink-secondary hover:text-ink"
                  >
                    {pub.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Legal + payment */}
        <div className="mt-16 flex flex-col gap-6 border-t border-line pt-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <p className="text-xs text-ink-muted">
              © 2026 {site.legalName} — {site.tagline}
            </p>
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {[
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms & Conditions', href: '/terms' },
                { label: 'Refund Policy', href: '/refunds' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs text-ink-muted hover:text-ink">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <ul className="flex flex-wrap items-center gap-3">
            <li className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wide text-ink-muted">
              <Lock aria-hidden className="size-3.5" />
              SSL Secure Checkout
            </li>
            {paymentBadges.map((badge) => (
              <li
                key={badge}
                className="rounded-sm border border-line px-2.5 py-1 text-xs uppercase tracking-wide text-ink-muted"
              >
                {badge}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
