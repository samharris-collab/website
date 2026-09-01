import { Accordion, AccordionItem } from '@/components/ui/accordion'
import { Section } from '@/components/primitives/section'
import { Reveal } from '@/components/primitives/reveal'
import { Eyebrow } from '@/components/primitives/section-heading'
import { JsonLd, faqSchema } from '@/lib/seo/json-ld'
import type { Faq } from '@/lib/content/types'

export function FaqSection({
  faqs,
  eyebrow,
  heading,
  tone = 'paper',
  withSchema = true,
  groupName = 'faq',
}: {
  faqs: Faq[]
  eyebrow?: string
  heading: string
  tone?: 'paper' | 'cream'
  withSchema?: boolean
  /** Distinguishes two FAQ groups rendered on the same page. */
  groupName?: string
}) {
  return (
    <Section tone={tone} id="faq">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal>
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <h2 className="mt-4 font-display text-2xl leading-heading tracking-tight text-ink text-balance md:text-3xl">
              {heading}
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <Reveal delay={0.08}>
            {/* A shared `name` makes this single-open; each item still closes on
                its own, so a reader can collapse everything. */}
            <Accordion>
              {faqs.map((faq) => (
                <AccordionItem key={faq.question} name={groupName} question={faq.question}>
                  {faq.answer}
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>

      {withSchema && <JsonLd data={faqSchema(faqs)} />}
    </Section>
  )
}
