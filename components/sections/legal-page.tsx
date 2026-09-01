import Link from 'next/link'
import { Section } from '@/components/primitives/section'
import { Eyebrow } from '@/components/primitives/section-heading'
import { Reveal } from '@/components/primitives/reveal'
import { legalDocuments } from '@/lib/content/legal'
import type { LegalDocument } from '@/lib/content/legal'

export function LegalPage({ document }: { document: LegalDocument }) {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-8">
          <Reveal>
            <Eyebrow>Legal</Eyebrow>
            <h1 className="mt-6 font-display text-3xl leading-display tracking-tight text-ink md:text-4xl">
              {document.title}
            </h1>
            <p className="mt-5 font-sans text-sm uppercase tracking-wide text-ink-muted">
              Last updated {document.updated}
            </p>
            <p className="mt-8 max-w-measure text-lg leading-body text-ink-secondary text-pretty">
              {document.intro}
            </p>
          </Reveal>

          <div className="mt-12">
            {document.sections.map((section, i) => (
              <Reveal
                key={section.heading}
                delay={Math.min(i * 0.03, 0.2)}
                className="border-t border-line py-10"
              >
                <h2
                  id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                  className="font-display text-xl leading-heading tracking-tight text-ink md:text-2xl"
                >
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="mt-5 max-w-measure text-base leading-body text-ink-secondary"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-5 flex max-w-measure flex-col gap-4">
                    {section.list.map((item) => (
                      <li
                        key={item.slice(0, 40)}
                        className="flex gap-4 text-base leading-body text-ink-secondary"
                      >
                        <span aria-hidden className="mt-3 h-px w-4 shrink-0 bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}
          </div>
        </div>

        <aside className="lg:col-span-4">
          <nav
            aria-label="Legal documents"
            className="rounded-md border border-line bg-bg-secondary p-6 lg:sticky lg:top-[calc(var(--header-height)+2rem)]"
          >
            <h2 className="font-sans text-xs font-medium uppercase tracking-wide text-ink-muted">
              Policies
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {legalDocuments.map((doc) => (
                <li key={doc.slug}>
                  <Link
                    href={`/${doc.slug}`}
                    aria-current={doc.slug === document.slug ? 'page' : undefined}
                    className={
                      doc.slug === document.slug
                        ? 'text-base text-ink'
                        : 'text-base text-ink-secondary hover:text-ink'
                    }
                  >
                    {doc.title}
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="mt-8 border-t border-line pt-6 font-sans text-xs font-medium uppercase tracking-wide text-ink-muted">
              On this page
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {document.sections.map((section) => (
                <li key={section.heading}>
                  <a
                    href={`#${section.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                    className="text-sm text-ink-secondary hover:text-ink"
                  >
                    {section.heading}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </Section>
  )
}
