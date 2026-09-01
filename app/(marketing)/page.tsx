import type { Metadata } from 'next'
import { Hero } from '@/components/sections/hero'
import { Stats } from '@/components/sections/stats'
import { PublicationMarquee } from '@/components/sections/publication-marquee'
import { About } from '@/components/sections/about'
import { DnaDifference } from '@/components/sections/dna-difference'
import { Placements } from '@/components/sections/placements'
import { ServicesGrid } from '@/components/sections/services-grid'
import { VideoTestimonial } from '@/components/sections/video-testimonial'
import { Testimonials } from '@/components/sections/testimonials'
import { GuidesPreview } from '@/components/sections/guides-preview'
import { FaqSection } from '@/components/sections/faq'
import { FinalCta, MidCta } from '@/components/sections/cta'
import { faqs } from '@/lib/content/faq'
import { faqSection } from '@/lib/content/home'

export const metadata: Metadata = {
  title: 'DNA PR — Get Featured in Forbes, MSN & 1,100+ Outlets',
  description:
    "We pitch founders' and brands' stories to editors at MSN, USA Today, Forbes and 1,100+ trusted publications. You approve every word before it publishes.",
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <PublicationMarquee />
      <About />
      <DnaDifference />
      <Placements />
      <ServicesGrid />
      <VideoTestimonial />
      <Testimonials />
      <GuidesPreview />
      <MidCta />
      <FaqSection faqs={faqs} eyebrow={faqSection.eyebrow} heading={faqSection.heading} />
      <FinalCta />
    </>
  )
}
