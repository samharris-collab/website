import type { Metadata } from 'next'
import { Section } from '@/components/primitives/section'
import { Eyebrow } from '@/components/primitives/section-heading'
import { Reveal } from '@/components/primitives/reveal'
import { GuidesIndex } from '@/components/sections/guides-index'
import { FinalCta } from '@/components/sections/cta'
import { guides } from '@/lib/content/guides'
import { JsonLd, breadcrumbSchema } from '@/lib/seo/json-ld'

export const metadata: Metadata = {
  title: 'Guides on Getting Featured',
  description: `${guides.length} guides on getting featured in the press — what each publication actually runs, what PR costs, and how to tell a real agency from a bad one.`,
  alternates: { canonical: '/guides' },
}

export default function GuidesPage() {
  return (
    <>
      <Section className="pb-0 md:pb-0">
        <Reveal>
          <Eyebrow>Guides</Eyebrow>
          <h1 className="mt-6 max-w-measure font-display text-3xl leading-display tracking-tight text-ink text-balance md:text-4xl">
            Guides on getting featured
          </h1>
          <p className="mt-6 max-w-measure text-lg leading-body text-ink-secondary text-pretty">
            What each publication actually runs, what press costs, and how to tell an agency that
            will deliver from one that will not. Written to be useful whether or not you hire us.
          </p>
        </Reveal>
      </Section>

      <Section>
        <GuidesIndex guides={guides} />
      </Section>

      <FinalCta />

      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Guides', href: '/guides' },
        ])}
      />
    </>
  )
}
