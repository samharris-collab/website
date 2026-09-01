import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { RevealOnMount } from '@/components/primitives/reveal'
import { Container } from '@/components/primitives/section'
import { hero } from '@/lib/content/home'

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-12 md:pb-24 md:pt-16">
      <Container>
        <RevealOnMount>
          <p className="rule-accent font-sans text-xs font-medium uppercase tracking-wide text-ink-muted">
            {hero.eyebrow}
          </p>
        </RevealOnMount>

        {/* Masthead. The wordmark is one long token, so it is sized to fill the
            measure rather than wrap — the fluid clamp keeps it edge-to-edge from
            360px to 1280px. */}
        <RevealOnMount delay={0.08}>
          <h1 className="mt-6 whitespace-nowrap font-display text-[clamp(1.5rem,8.4vw,7rem)] leading-display tracking-tight text-ink">
            {hero.headline}
          </h1>
        </RevealOnMount>

        <RevealOnMount delay={0.16}>
          <div className="mt-8 border-t border-line pt-8 md:mt-10 md:pt-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-16">
              <p className="max-w-measure text-lg leading-body text-ink-secondary text-pretty">
                {hero.subheadline}
              </p>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <Button asChild variant="accent" size="lg">
                  <Link href={hero.primaryCta.href}>
                    {hero.primaryCta.label}
                    <ArrowRight aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link>
                </Button>
              </div>
            </div>
          </div>
        </RevealOnMount>
      </Container>

      <RevealOnMount delay={0.24}>
        <Container className="mt-12 md:mt-16">
          <div className="overflow-hidden rounded-lg shadow-editorial">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              width={2400}
              height={1000}
              priority
              fetchPriority="high"
              sizes="(min-width: 1280px) 1120px, (min-width: 768px) 90vw, 100vw"
              className="h-[38vw] max-h-[520px] min-h-[220px] w-full object-cover"
            />
          </div>
        </Container>
      </RevealOnMount>
    </section>
  )
}
