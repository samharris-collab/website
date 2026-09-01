import { site } from '@/lib/site'

/**
 * DRAFT POLICIES — NOT LEGAL ADVICE.
 *
 * These are structured drafts describing the practices the rest of the site
 * describes. Anywhere a genuinely commercial term would be required (payment
 * schedules, refund windows, notice periods), the text defers to the written
 * quote or engagement letter rather than inventing a term the business has not
 * agreed to. Have counsel review and complete these before launch, and fill in
 * the deferred terms. See CONTENT-NOTES.md.
 */

export type LegalSection = { heading: string; paragraphs: string[]; list?: string[] }
export type LegalDocument = {
  slug: string
  title: string
  description: string
  updated: string
  intro: string
  sections: LegalSection[]
}

const contactLine = `Email ${site.email} or write to ${site.legalName}, ${site.address.full}.`

export const privacyPolicy: LegalDocument = {
  slug: 'privacy',
  title: 'Privacy Policy',
  description:
    'What Digital Networking Agency collects, why, who it is shared with, and the rights you have over it.',
  updated: 'September 2026',
  intro:
    'This policy explains what we collect when you use digitalnetworkingagency.com or work with us, why we collect it, and what you can ask us to do with it. We collect as little as we can and we do not sell it.',
  sections: [
    {
      heading: 'Who we are',
      paragraphs: [
        `${site.legalName} ("DNA", "we", "us") is a public relations agency registered in the United States, at ${site.address.full}. For questions about this policy, ${contactLine.toLowerCase()}`,
      ],
    },
    {
      heading: 'What we collect',
      paragraphs: ['We collect two kinds of information.'],
      list: [
        'Information you give us. When you submit the contact form we collect your name, email address, and anything you choose to add — company or role, the outlets you are interested in, a budget range, and your message. If you become a client, we also collect the information you provide for your story, and our correspondence with you.',
        'Information collected automatically. Standard analytics about how the site is used: pages viewed, approximate location derived from IP address, device and browser type, and referring site. This is aggregated and is not used to identify you personally.',
      ],
    },
    {
      heading: 'Why we use it',
      paragraphs: [
        'We use the information you give us to reply to your inquiry, to prepare a quote, and — if you engage us — to research, write and place your story. We use analytics to understand which pages are useful and to keep the site fast and working.',
        'We do not sell your personal information, and we do not share it with advertisers.',
      ],
    },
    {
      heading: 'Legal bases',
      paragraphs: [
        'Where the UK GDPR or EU GDPR applies to you, we rely on: your consent, where you have given it; the performance of a contract, where we are delivering work you have engaged us for; and our legitimate interests in responding to inquiries and maintaining a secure, functional website.',
      ],
    },
    {
      heading: 'Service providers',
      paragraphs: [
        'We use a small number of processors, each of which handles data on our instructions:',
      ],
      list: [
        'Vercel — website hosting, delivery and performance analytics.',
        'Resend — delivery of contact form emails to us and the confirmation email to you.',
        'Cloudflare Turnstile — spam and bot protection on the contact form.',
        'Upstash — short-lived rate-limiting records to stop form abuse.',
        'Product analytics, where enabled, for aggregate usage measurement.',
      ],
    },
    {
      heading: 'Cookies and analytics',
      paragraphs: [
        'The site does not use advertising cookies. Your theme preference is stored in your browser using local storage and never leaves your device. Analytics are configured to measure usage in aggregate rather than to track individuals across sites.',
      ],
    },
    {
      heading: 'How long we keep it',
      paragraphs: [
        'Inquiries are kept for as long as we may reasonably need them to follow up, and client records for as long as required for our contractual and accounting obligations. Rate-limiting records expire within the hour. You can ask us to delete your information at any time.',
      ],
    },
    {
      heading: 'Your rights',
      paragraphs: [
        'Depending on where you live, you may have the right to access the personal information we hold about you, to correct it, to have it deleted, to restrict or object to how we use it, and to receive a copy in a portable format. California residents have the right to know what is collected and to opt out of any sale of personal information — we do not sell it.',
        `To exercise any of these, ${contactLine.toLowerCase()} We will respond within 30 days.`,
      ],
    },
    {
      heading: 'Security',
      paragraphs: [
        'The site is served over HTTPS with a strict content security policy, and form submissions are validated and rate limited. No system is perfectly secure, but we take reasonable technical and organizational measures to protect what we hold.',
      ],
    },
    {
      heading: 'Children',
      paragraphs: [
        'This site is not directed at children under 16 and we do not knowingly collect their personal information.',
      ],
    },
    {
      heading: 'Changes',
      paragraphs: [
        'If we change this policy we will update the date at the top of this page. Material changes will be highlighted on the site.',
      ],
    },
  ],
}

export const termsAndConditions: LegalDocument = {
  slug: 'terms',
  title: 'Terms & Conditions',
  description:
    'The terms that apply to using this website and to public relations services provided by Digital Networking Agency.',
  updated: 'September 2026',
  intro:
    'These terms apply to your use of this website and, together with your written quote or engagement letter, to any services we provide. Where your engagement letter and these terms conflict, the engagement letter governs.',
  sections: [
    {
      heading: 'Our services',
      paragraphs: [
        'We develop your story, write it to editorial standard, and pitch or place it with publications. The specific deliverables — how many placements, which outlets we are targeting, and the timeline — are set out in your quote.',
      ],
    },
    {
      heading: 'What we do not promise',
      paragraphs: [
        'Editorial coverage at the most selective titles is an editorial decision that no agency controls, and we do not guarantee it. Before you engage us we tell you which outlets we can place you in and which we can only pitch toward, and your quote reflects that distinction.',
        'We do not promise any particular business outcome from coverage — traffic, leads, revenue, search ranking, or how any third party responds to what is published.',
      ],
    },
    {
      heading: 'Approvals and revisions',
      paragraphs: [
        'You review every piece before it is submitted for publication, with unlimited revisions, and nothing is submitted without your sign-off. You are responsible for the accuracy of the facts, claims, credentials and quotes you give us, and for confirming that the final draft is accurate before you approve it.',
      ],
    },
    {
      heading: 'Your responsibilities',
      paragraphs: [
        'You agree that the material you provide is truthful, is yours to provide, and does not infringe anyone else’s rights. You agree not to ask us to publish anything false, misleading, defamatory, or in breach of a professional or regulatory obligation that applies to you — including advertising rules that apply to lawyers, medical practitioners and financial professionals.',
      ],
    },
    {
      heading: 'Third-party publications',
      paragraphs: [
        'Publications are independent of us. Their editorial decisions, their publishing schedules, their subsequent edits, and their decision to keep or remove any article are theirs alone. We will always tell you what we know about an outlet before you commit.',
      ],
    },
    {
      heading: 'Fees and payment',
      paragraphs: [
        'Fees, payment schedule and invoicing terms are those set out in your written quote or engagement letter. Quotes are valid for the period stated on them.',
      ],
    },
    {
      heading: 'Intellectual property',
      paragraphs: [
        'You keep ownership of the material you give us. Once fees for a piece have been paid in full, you may use the published article and its URL to promote your business. This website — its design, code, text and images — remains ours.',
        'You grant us permission to reference the fact of your engagement and the published article in our own case studies and marketing, unless your engagement letter says otherwise or you ask us in writing not to.',
      ],
    },
    {
      heading: 'Cancellation',
      paragraphs: [
        'Either side may end an engagement in accordance with the notice terms in the engagement letter. Work already completed and costs already committed remain payable. Refunds are governed by our Refund Policy.',
      ],
    },
    {
      heading: 'Limitation of liability',
      paragraphs: [
        'Nothing in these terms limits liability that cannot lawfully be limited. Subject to that, our total liability arising out of an engagement is limited to the fees you paid us for it, and we are not liable for indirect or consequential loss, including lost profits, lost business or reputational harm.',
      ],
    },
    {
      heading: 'Governing law',
      paragraphs: [
        'These terms are governed by the laws of the State of Ohio, United States, and the courts of that state have exclusive jurisdiction, without affecting any right you have to bring a claim where you live.',
      ],
    },
    {
      heading: 'Contact',
      paragraphs: [contactLine],
    },
  ],
}

export const refundPolicy: LegalDocument = {
  slug: 'refunds',
  title: 'Refund Policy',
  description:
    'When Digital Networking Agency refunds, when it does not, and how to raise a problem with work you are not happy with.',
  updated: 'September 2026',
  intro:
    'We would rather fix a piece than refund it, which is why revisions are unlimited and nothing publishes without your sign-off. Where a refund is the right answer, this is how it works. The specific amounts and windows that apply to your engagement are those in your written quote or engagement letter.',
  sections: [
    {
      heading: 'Before we start writing',
      paragraphs: [
        'If you change your mind before we have begun work on your piece, tell us and we will refund what you have paid, less any third-party cost already committed on your behalf.',
      ],
    },
    {
      heading: 'While the piece is in draft',
      paragraphs: [
        'Revisions are unlimited. If a draft is not right, send us your notes and we will rewrite it — as many times as it takes for the piece to read the way you want. This is the fastest route to a good outcome and it costs you nothing.',
        'If, after a genuine attempt at revision, the piece still is not right, we will discuss a partial refund reflecting the work completed.',
      ],
    },
    {
      heading: 'After you have approved a piece',
      paragraphs: [
        'Once you approve a draft, we submit it for publication and the work is delivered. Approved and submitted work is not refundable.',
      ],
    },
    {
      heading: 'If a placement does not happen',
      paragraphs: [
        'If we contracted to place your piece with a specific outlet and it does not run there, we will either place it with an outlet of comparable standing that you agree to, or refund the placement fee for that piece. We will always tell you which of the two we are proposing, and why.',
        'Where your quote describes an outlet as a target we are pitching toward rather than one we can place you in, that fee covers the pitching work and is not contingent on the outlet running the piece. We make that distinction in writing before you pay.',
      ],
    },
    {
      heading: 'If an article is removed by the publication',
      paragraphs: [
        'Placements are intended to be permanent, but publications are independent and occasionally restructure, archive or remove content. If a piece is removed for a reason that is not connected to something inaccurate you asked us to include, we will work to have it restored or placed elsewhere at no additional fee.',
      ],
    },
    {
      heading: 'Ongoing packages',
      paragraphs: [
        'Monthly packages are billed for the month ahead. If you cancel, the current month runs to the end of its term and we complete the work scheduled in it; we do not bill again after that.',
      ],
    },
    {
      heading: 'How to request a refund',
      paragraphs: [
        `Email ${site.email} with your name, the engagement, and what went wrong. We reply within 24 hours and aim to resolve every request within 14 days. Approved refunds are returned to the original payment method.`,
      ],
    },
  ],
}

export const legalDocuments = [privacyPolicy, termsAndConditions, refundPolicy]
