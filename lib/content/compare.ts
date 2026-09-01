/**
 * /compare — an honest read of the realistic routes to press coverage, including
 * the ones that do not involve hiring us. New supporting copy; see CONTENT-NOTES.md.
 * No competitor is named, and no claim here contradicts the FAQ.
 */

export type CompareOption = {
  id: string
  name: string
  summary: string
  whoItSuits: string
  cost: string
  effort: string
  timeline: string
  control: string
  risk: string
  honestTake: string
}

export const compareOptions: CompareOption[] = [
  {
    id: 'diy',
    name: 'Pitching it yourself',
    summary:
      'You build the list, write the pitch, and follow up. No agency, no fee, and no one between you and the editor.',
    whoItSuits:
      'Founders with a genuinely newsworthy moment, existing media contacts, and time to spend on follow-up.',
    cost: 'Your time only',
    effort: 'High and ongoing',
    timeline: 'Weeks to never',
    control: 'Total',
    risk: 'Most pitches are never answered, and you rarely find out why.',
    honestTake:
      'This works, and it works best when you already know the reporter. What defeats most people is not the writing — it is the follow-up, week after week, on top of running the business.',
  },
  {
    id: 'source-requests',
    name: 'Source-request platforms',
    summary:
      'You answer journalist queries as an expert source and hope your answer is the one that gets quoted.',
    whoItSuits:
      'Specialists with a clear area of expertise who can respond fast and in writing.',
    cost: 'Free to modest',
    effort: 'High — speed decides it',
    timeline: 'Unpredictable',
    control: 'None over the framing',
    risk: 'You may be quoted in one line, out of context, or not at all.',
    honestTake:
      'Real coverage does come out of these, and a quote in a strong publication is worth having. It is a volume game, though: the return is a fraction of the time you put in, and you cannot plan around it.',
  },
  {
    id: 'cheap-placements',
    name: 'Cheap guaranteed placements',
    summary:
      'A low flat fee, a promise of a named outlet, and a piece that appears somewhere quickly.',
    whoItSuits:
      'Almost nobody, once you look at what actually gets published.',
    cost: 'Low',
    effort: 'Almost none',
    timeline: 'Days',
    control: 'Little',
    risk: 'Directory pages, link farms, and articles that get pulled or deindexed.',
    honestTake:
      'If a guarantee sounds too easy, ask exactly which URL the piece will live on and whether it is editorial or paid. A placement that a journalist would not recognise as journalism does nothing for you in a due-diligence search.',
  },
  {
    id: 'retainer-agency',
    name: 'A traditional retainer agency',
    summary:
      'A monthly retainer buys a team, a strategy, and a pipeline of pitches across your category.',
    whoItSuits:
      'Companies with a communications function, a steady stream of news, and a budget that can absorb quiet months.',
    cost: 'Substantial and monthly',
    effort: 'Moderate — you feed the pipeline',
    timeline: 'Months to build',
    control: 'Shared',
    risk: 'You can pay for a quarter and have little published to show for it.',
    honestTake:
      'For a company with constant news, this is the right shape. For one founder with one story to tell, it is a lot of overhead to carry before anything appears.',
  },
  {
    id: 'dna',
    name: 'Working with DNA',
    summary:
      'We develop the angle, write the piece to editorial standard, and place it with publications your audience already trusts.',
    whoItSuits:
      'Founders, consultants, medical practices, attorneys, realtors, coaches and B2B companies whose buyers research them before they commit.',
    cost: 'Quoted to your goals',
    effort: 'A short questionnaire',
    timeline: 'Most placements within a few weeks',
    control: 'Full approval on every word',
    risk: 'We cannot guarantee the most selective titles, and we will say so before you pay.',
    honestTake:
      'We are the right call when you want a specific, permanent, searchable article rather than a campaign — and when you would rather someone told you which outlets are realistic than sold you the one you named.',
  },
]

export const compareRows = [
  { key: 'cost', label: 'Cost' },
  { key: 'effort', label: 'Your effort' },
  { key: 'timeline', label: 'Typical timeline' },
  { key: 'control', label: 'Editorial control' },
  { key: 'risk', label: 'Main risk' },
] as const

export const comparePage = {
  eyebrow: 'Compare options',
  heading: 'Five ways to get press. Only one of them is us.',
  intro:
    'Hiring an agency is not the only route to coverage, and it is not always the right one. Here is an honest read of the realistic options, what each actually costs you, and where each falls down.',
  closing: {
    heading: 'If PR is not right for you, we will tell you',
    body: 'Press works best when your buyers research you before they commit. If nobody ever searches your name before buying, your budget is usually better spent elsewhere — and we would rather say that on a first call than take the work.',
  },
} as const
