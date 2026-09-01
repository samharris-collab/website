import type { Metadata } from 'next'
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { Container, Section } from '@/components/primitives/section'
import { Eyebrow } from '@/components/primitives/section-heading'
import { Reveal } from '@/components/primitives/reveal'
import { ContactForm } from '@/components/sections/contact-form'
import { PublicationMarquee } from '@/components/sections/publication-marquee'
import { JsonLd, breadcrumbSchema } from '@/lib/seo/json-ld'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact — Book a Free PR Consultation',
  description:
    'Tell us who you want to reach. We will recommend the outlets that fit your audience and map out the fastest realistic path to your feature. We reply within 24 hours.',
  alternates: { canonical: '/contact' },
}

const promises = [
  'We reply within 24 hours, every time.',
  'We tell you honestly which outlets we can place you in and which we can only pitch toward.',
  'You write nothing beyond a short questionnaire — our editorial team writes the piece.',
  'Nothing publishes without your sign-off. Unlimited revisions.',
]

export default function ContactPage() {
  return (
    <>
      <Section className="pb-0 md:pb-0">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-6 max-w-measure font-display text-3xl leading-display tracking-tight text-ink text-balance md:text-4xl">
            Tell us who you want to reach.
          </h1>
          <p className="mt-6 max-w-measure text-lg leading-body text-ink-secondary text-pretty">
            We will recommend the outlets that fit your audience, tell you what is realistic, and map
            out the fastest path to your feature. No pressure and no pitch deck.
          </p>
        </Reveal>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="font-sans text-xs font-medium uppercase tracking-wide text-ink-muted">
                What happens next
              </h2>
              <ul className="mt-6 flex flex-col gap-4">
                {promises.map((promise) => (
                  <li key={promise} className="flex gap-4 text-base leading-body text-ink-secondary">
                    <span aria-hidden className="mt-2.5 h-px w-5 shrink-0 bg-accent" />
                    {promise}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1} className="mt-12" id="book">
              <h2 className="font-sans text-xs font-medium uppercase tracking-wide text-ink-muted">
                Or reach us directly
              </h2>
              <ul className="mt-6 flex flex-col gap-4 text-base text-ink-secondary">
                <li className="flex gap-4">
                  <Mail aria-hidden className="mt-1 size-4 shrink-0 text-ink-muted" />
                  <a href={`mailto:${site.email}`} className="hover:text-ink">
                    {site.email}
                  </a>
                </li>
                <li className="flex gap-4">
                  <Phone aria-hidden className="mt-1 size-4 shrink-0 text-ink-muted" />
                  <a href={`tel:${site.phoneE164}`} className="hover:text-ink">
                    {site.phone}
                  </a>
                </li>
                <li className="flex gap-4">
                  <MessageCircle aria-hidden className="mt-1 size-4 shrink-0 text-ink-muted" />
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-ink"
                  >
                    WhatsApp
                  </a>
                </li>
                <li className="flex gap-4">
                  <MapPin aria-hidden className="mt-1 size-4 shrink-0 text-ink-muted" />
                  <address className="not-italic">{site.address.full}</address>
                </li>
                <li className="flex gap-4">
                  <Clock aria-hidden className="mt-1 size-4 shrink-0 text-ink-muted" />
                  {site.hours}
                </li>
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.08}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </Section>

      <PublicationMarquee
        eyebrow="Where we place clients"
        heading="A network of 1,100+ publications, and the honesty to tell you which ones fit."
      />

      <Container className="sr-only">
        <JsonLd
          data={breadcrumbSchema([
            { name: 'Home', href: '/' },
            { name: 'Contact', href: '/contact' },
          ])}
        />
      </Container>
    </>
  )
}
