import type { Stat } from './types'

export const hero = {
  eyebrow: 'DNA — Public Relations · Done Differently',
  headline: 'DIGITALNETWORKINGAGENCY',
  subheadline:
    "We turn founders & brands into household names by pitching your story to our network of editors & journalists at the world's most trusted publications.",
  primaryCta: { label: 'Book a Free Consultation', href: '/contact' },
  secondaryCta: { label: 'View Packages', href: '/services' },
  image: {
    src: '/media/hero-media.jpg',
    alt: 'A wall of magazine covers and newspaper front pages carrying client features placed by Digital Networking Agency.',
  },
} as const

export const stats: Stat[] = [
  { value: '100+', label: 'Top-Tier Placements' },
  { value: '★★★★★', label: 'Rated 5.0 by Clients' },
  { value: '45+', label: 'Publicists & Journalists' },
  { value: '1100+', label: 'Publication Outlets' },
  { value: '7', label: 'Steps to Publication' },
  { value: '∞', label: 'Brand Legacy Potential' },
]

export const publicationsSection = {
  heading: 'Our Clients Get Media Mentions That Matter',
} as const

export const about = {
  eyebrow: 'Who We Are',
  heading: 'About DNA PR',
  paragraphs: [
    'DNA is a public relations agency specializing in results-driven PR & media relations. Our growing team of 45+ experienced publicists, journalists, broadcasters, and marketers work with brands to secure meaningful media coverage.',
    'We focus on modern media, including digital, TV, podcast, and speaking opportunities.',
  ],
  pullQuote: "Trust us with YOUR story — because it's in our DNA.",
  closing:
    'DNA PR has secured coverage for clients in Forbes, NY Times, Rolling Stone, FOX, NY Weekly, Entrepreneur, and over 100 top-tier media outlets and networks.',
  image: {
    src: '/media/about-media.jpg',
    alt: 'The DNA PR team working across digital, television, podcast, print and speaking placements.',
  },
  caption: 'How we tell your story — Digital · TV · Podcast · Print · Speaking',
} as const

export const difference = {
  eyebrow: 'Why Choose Us',
  heading: 'The DNA Difference',
  items: [
    {
      number: '01',
      title: 'Proprietary Outreach',
      body: 'Gone is the day of sending a press release and waiting. We monitor trends with a proprietary alert method — seeing relevant news before anyone and submitting experts for comments first.',
    },
    {
      number: '02',
      title: 'Private Reporter Network',
      body: 'Our team has developed a private network of reporters who reach out to DNA directly for responses on breaking news. Our relationships make the difference.',
    },
    {
      number: '03',
      title: 'Storytelling-First',
      body: "We've built a proprietary process that relies on communication and storytelling. We optimize our outreach to make your story visible — not just placed, but permanently remembered.",
    },
  ],
} as const

export const placementsSection = {
  eyebrow: 'Proof of Authority',
  heading: 'Client Placements',
} as const

export const waysToWork = {
  eyebrow: 'What We Do',
  heading: 'Ways to Work With DNA',
  cta: { label: 'See all services', href: '/services' },
} as const

export const videoTestimonial = {
  eyebrow: 'In their words',
  heading: 'See what our clients have to say',
  body: "Don't take our word for it. Hear it straight from a founder we've worked with about what it's like to get featured with DNA.",
  attribution: '— Krishan Thakker',
  src: '/client-testimonial.mp4',
  poster: '/media/client-testimonial-poster.jpg',
} as const

export const reviewsSection = {
  eyebrow: 'Client Voices',
  heading: 'Digital Networking Agency Reviews',
} as const

export const guidesSection = {
  eyebrow: 'From the Blog',
  heading: 'Guides on getting featured',
  cta: { label: 'View all articles', href: '/guides' },
} as const

export const midCta = {
  text: 'Reading about it is one thing. Being in it is another.',
  cta: { label: 'Book a Free Call', href: '/contact' },
} as const

export const faqSection = {
  eyebrow: 'Common Questions',
  heading: 'Frequently Asked Questions',
} as const

export const finalCta = {
  eyebrow: 'Ready to get started?',
  heading: "It's In Our DNA.",
  body: "Trust us with your story. Let's build your legacy together.",
  primaryCta: { label: 'Book a Consultation', href: '/contact' },
  secondaryCta: { label: 'View Packages', href: '/services' },
} as const
