import type { CaseStudy } from './types'

/**
 * Names, roles, outlets, summaries, images and slugs are locked copy from the
 * current site. The `detail` narrative is supporting copy written from the
 * published articles and the process described elsewhere on the site — see
 * CONTENT-NOTES.md.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: 'dr-kirk-sanford',
    name: 'Dr. Kirk Sanford',
    role: 'Founder & CEO, Longevity Medical Institute',
    outlet: 'MSN',
    summary:
      'A permanent, searchable feature that establishes Dr. Sanford as a credible voice in honest regenerative medicine.',
    image: '/media/placement-kirk-msn.jpg',
    articleHref:
      'https://www.msn.com/en-us/news/other/the-body-isn%E2%80%99t-a-machine-inside-dr-kirk-sanford%E2%80%99s-case-for-honest-regenerative-medicine/ar-AA2705OB',
    detail: {
      challenge:
        'Regenerative medicine is a field crowded with overpromising. A physician who refuses to overstate what treatment can do is at a disadvantage against marketing that will say anything — and patients researching the field cannot easily tell the difference.',
      approach:
        'We built the feature around the position rather than the practice: the case for honest regenerative medicine, argued by someone with the standing to make it. The story led with the idea a reader could disagree with, which is what makes an editor run a piece rather than file it.',
      outcome:
        'A full feature carried on MSN — a permanent, searchable article that now sits in front of anyone who looks up Dr. Sanford or the institute, and does the credibility work before the first consultation.',
    },
  },
  {
    slug: 'matthew-brick',
    name: 'Matthew Brick',
    role: 'Founder, Brick Law Firm',
    outlet: 'Wall Street Times',
    summary:
      'A memorable, human profile that positions Matthew Brick as a distinctive founder in a crowded legal field.',
    image: '/media/placement-brick.jpg',
    articleHref:
      'https://wallstreettimes.com/from-mario-kart-to-the-supreme-court-how-matthew-brick-built-a-law-firm-that-puts-clients-first/',
    detail: {
      challenge:
        'Law firm profiles read the same way: years of experience, practice areas, a list of results. Prospective clients skim them and remember nothing, which is the opposite of what a profile is for.',
      approach:
        'We looked for the detail that made the founder specific rather than credentialed, and built the piece around it — from Mario Kart to the Supreme Court. The firm philosophy arrives through the story instead of being asserted at the top.',
      outcome:
        'A Wall Street Times feature that is genuinely memorable, holds up to the scrutiny a legal audience applies, and gives referral sources something to send.',
      quote: {
        text: "I'm particular about how I'm represented, so I appreciated how carefully they handled my story. Responsive, detail-oriented, and the final piece held up to scrutiny.",
        attribution: 'Matthew Brick',
      },
    },
  },
  {
    slug: 'dr-bhuvanendram-indrakrishnan',
    name: 'Dr. Bhuvanendram Indrakrishnan',
    role: 'Physician and community health leader',
    outlet: 'USA Today',
    summary:
      "A national-outlet feature that recognizes Dr. Indrakrishnan's leadership in medicine and community health.",
    image: '/media/placement-indran.jpg',
    articleHref:
      'https://www.usatoday.com/story/special/contributor-content/2026/05/22/dr-bhuvanendram-indrakrishnan-leadership-in-medicine-and-community-health/90214273007/',
    detail: {
      challenge:
        'Decades of clinical work and community health leadership had produced real standing locally and almost no national record. For patients, peers and institutions searching the name, the work was effectively invisible.',
      approach:
        'We framed the story around leadership rather than biography — what the work has meant for a community, and why that pattern of practice matters beyond one clinic. That is the frame a national outlet can carry.',
      outcome:
        'A USA Today feature that puts a national title behind a career built locally, and stays searchable for every patient, colleague and institution that looks him up.',
    },
  },
  {
    slug: 'andr-a-albright',
    name: 'Andréa Albright',
    role: 'Founder in book publishing',
    outlet: 'New York Weekly',
    summary:
      'A forward-looking feature that frames Andréa Albright as a voice shaping the future of legacy publishing.',
    image: '/media/placement-albright.jpg',
    articleHref:
      'https://nyweekly.com/entrepreneur/leaving-a-mark-andrea-albright-and-the-future-of-legacy-publishing/',
    detail: {
      challenge:
        'Publishing is full of founders describing what they do. Very few are positioned as people with a view on where the industry is going — and that positioning is what turns a founder into someone worth quoting.',
      approach:
        'We wrote the piece as an argument about legacy publishing and placed the founder inside it. The company gets its due, but the story is about the shift, which is what gives a feature a reason to exist.',
      outcome:
        'A New York Weekly feature that reads forward rather than backward, and establishes a voice on the future of the field instead of another company profile.',
    },
  },
  {
    slug: 'patrick-kelly',
    name: 'Patrick Kelly',
    role: 'Founder in the fresh produce industry',
    outlet: 'CEO Weekly',
    summary:
      'A storytelling-led feature that gives Patrick Kelly and the fresh produce industry a distinct, credible voice.',
    image: '/media/placement-kelly.jpg',
    articleHref:
      'https://ceoweekly.com/patrick-kelly-giving-fresh-produce-a-global-voice-through-storytelling-and-innovation/',
    detail: {
      challenge:
        'Fresh produce is an industry most readers never think about, run by operators whose work is genuinely interesting and almost never covered. The default coverage is trade press nobody outside the trade reads.',
      approach:
        'We treated the sector as the subject and the founder as the guide — storytelling and innovation in a global supply business, written for a general business reader rather than an industry insider.',
      outcome:
        'A CEO Weekly feature that gives an under-covered industry a voice and gives its founder a piece that travels well outside the trade.',
    },
  },
]

export const caseStudyIndex = {
  eyebrow: 'Case studies',
  heading: 'Real clients. Real features.',
  sub: 'Founders and experts we developed, wrote and placed in publications that matter — every story permanent, searchable, and approved by the client before it went live.',
  chipLabel: 'Featured in',
  chips: ['MSN', 'Wall Street Times', 'USA Today', 'New York Weekly', 'CEO Weekly'],
  bottomCta: {
    heading: 'Want to be our next feature?',
    body: "Tell us who you want to reach. We'll recommend the outlets and handle the writing and placement, start to finish.",
    cta: { label: 'Get featured', href: '/contact' },
  },
} as const

export const caseStudyBySlug = new Map(caseStudies.map((c) => [c.slug, c]))
