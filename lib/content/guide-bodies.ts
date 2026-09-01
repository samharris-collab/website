import type { Faq } from './types'

export type GuideSection = {
  heading: string
  paragraphs: string[]
  list?: string[]
}

export type GuideBody = {
  slug: string
  /** Opening paragraphs, one entry per paragraph. */
  intro: string[]
  /** The takeaways, surfaced above the body as a summary card. */
  keyPoints: string[]
  sections: GuideSection[]
  /** Plain talk about what is and is not realistic. Required on outlet guides. */
  realityCheck?: string
  faqs: Faq[]
}

/**
 * Long-form guide bodies. Titles, slugs and descriptions are locked in
 * guides.ts; everything here is supporting copy written for the rebuild against
 * a fixed rule set — no invented statistics, no named editors, no placement
 * guarantees, no claimed affiliation with any publication, no specific prices.
 * scripts/check-content.mjs enforces the mechanical half of those rules.
 * See CONTENT-NOTES.md.
 */
export const guideBodies: GuideBody[] = [
  {
    slug: 'get-featured-in-forbes',
    intro: [
      "Ask ten people how someone got into Forbes and you will get ten answers, most describing different things that happen to share a logo. A reported story by a staff journalist, a column under an outside contributor's byline, and a paid executive membership are three separate products. They are won in three separate ways, and only one of them is journalism in the sense most readers assume.",
      'So the first decision is which one you actually want, because the odds, the effort and the credibility differ sharply. What follows is roughly what we tell a founder on a first call — including the parts that suggest they should spend their money elsewhere for now.',
    ],
    keyPoints: [
      'Forbes carries staff journalism, contributor columns and paid membership content under one masthead, and each is earned differently.',
      'Nobody outside the newsroom decides what a staff reporter writes, so a guaranteed Forbes offer is a warning sign.',
      'Reporters check whether you already exist in print, which is why a record of earlier coverage does real work.',
      'Pitches survive on things a stranger can verify — documents, named customers, filings — not on adjectives about your vision.',
      'If your goal is buyers trusting you, several strong features beat one obsession with a single masthead.',
    ],
    sections: [
      {
        heading: 'Forbes is several doors',
        paragraphs: [
          'The name covers more than one kind of publishing. There is reported journalism written by employed staff, where you appear because a journalist decided your company belonged in a story they were already chasing. There are columns by outside contributors writing under their own names in their own fields. And there is a paid, invitation-based membership program for executives, which comes with the ability to publish on the site under a clear label.',
          'Readers rarely make that distinction. People in your industry sometimes do, and so do the journalists you may want later. Before you spend anything, look at a few pieces on the site and notice how differently they are labeled, who signed them, and whether the writer is described as staff or as a contributor. Reading a few of them tells you more than any pitch deck an agency will send you.',
          'The paid route is not a scandal, and it is not a secret. It is a product, sold openly, and it does put your writing on a domain people recognize. What it does not do is make an editor decide you were worth covering. If that distinction matters to your buyers or your board, buy accordingly.',
        ],
      },
      {
        heading: 'What a reporter needs from you',
        paragraphs: [
          'Staff coverage starts from a story a journalist is already working on, not from your calendar. Your realistic job is to be the most useful source available on a subject they cover, and to be useful before you need anything. That means having a view on your market that is specific enough to quote, and being willing to say something that is not entirely flattering to your own side.',
          'Adjectives do not travel. Verifiable material does. If you say demand shifted, show what you can share that proves it — a contract, a customer willing to talk on the record, a dataset you actually own. Reporters are asked to take strangers at their word constantly, and they have learned not to. Give them something a fact-checker could stand behind and you have removed the main reason to ignore you.',
        ],
        list: [
          'A one-line description of what you do that a non-expert could repeat back accurately.',
          'Two or three claims about your business that someone outside it could independently check.',
          'Customers or partners who have already agreed to speak, with their names and contact details.',
          'Documents you are allowed to share — filings, contracts, internal data you own outright.',
          'A short, honest answer to the question of what you get wrong or would do differently.',
          'A phone number you answer, because reporting happens on deadlines you do not set.',
        ],
      },
      {
        heading: 'Build the record before you pitch',
        paragraphs: [
          'The first thing anyone does with an unfamiliar name is search it. A reporter deciding whether to spend a week on you is no different, and neither is the analyst your investor asked for a second opinion. If nothing comes back, you are not disqualified — you are just harder work than the alternative on their list.',
          'So the sequence that works is boring. Get published where you realistically can, in outlets your buyers recognize. Say something in those pieces worth quoting later. Then approach the harder titles with a body of work behind you instead of a promise. This is slower than people want, and it is the version that actually happens.',
          'There is a second payoff. Published, attributable articles are what search engines and AI answer tools have to work with when someone asks who you are. The record you build on the way to a bigger title keeps working whether or not the bigger title ever happens.',
        ],
      },
      {
        heading: 'Offers worth walking away from',
        paragraphs: [
          'If someone sells you a Forbes feature at a fixed price with a delivery date, ask them precisely what is being delivered. The answer is usually a contributor byline, a membership, or a piece on a different site that carries a similar-sounding name. None of those is what the buyer pictured, and the disappointment always arrives after the invoice.',
          'Ask for live links to work they placed, not screenshots. Read the byline and the label at the top of the page. Ask what happens if it does not run. An agency that answers those three questions plainly is worth talking to, whatever it says about Forbes.',
        ],
      },
      {
        heading: 'A plan for the next quarter',
        paragraphs: [
          'Start by writing down the one thing you know that most people in your field get wrong. That sentence is the seed of everything else — the column, the quote, the pitch. If you cannot write it, no agency can invent it for you, and the pieces that get made without it read like brochures.',
          'Then build outward. Publish that idea somewhere real. Get quoted in a trade title where your expertise is obvious. Keep a running file of the numbers, contracts and customer stories you are allowed to share, updated as they change. When a reporter finally calls, the difference between a good interview and a wasted one is whether that file already exists.',
          'None of this requires hiring anyone. It requires deciding that you will be quotable on one subject, and then behaving that way for longer than feels comfortable. Most people stop after a few weeks of silence, which is exactly the point at which the people who continue start to look like the obvious person to call.',
        ],
      },
      {
        heading: 'Where we fit, honestly',
        paragraphs: [
          'We can develop your story, write it to editorial standard, and place it with publications across our network — and we tell you before you sign which of those we can place and which we can only pitch toward. Forbes sits in the second group, for us and for everyone else. Anyone who tells you otherwise is selling something narrower than it sounds.',
          'What we can do reliably is build the record that makes the harder pitch plausible: real articles, in real publications, that stay searchable. If that is worth doing, we will quote it to your goals. If your buyers never look you up before they commit, spend the money on something else and we will say so on the call.',
        ],
      },
    ],
    realityCheck: 'Nobody can sell you Forbes. Staff coverage there is an editorial decision made by people no agency employs, and the offers that promise it are almost always describing a contributor byline, a paid membership, or a site with a similar name. We will pitch toward it and tell you plainly when it has not landed. If a single masthead is the only outcome you would accept, keep your money until you have something a reporter would chase.',
    faqs: [
      { question: 'Can any agency guarantee a Forbes feature?', answer: 'No, and the guarantee itself is the tell. Staff coverage is decided inside the newsroom by people who do not take instructions from agencies. What a guarantee usually covers is something else wearing the same name — a contributor byline, a paid membership, or a lookalike site. Ask for the live link to the last one they delivered before you agree to anything.' },
      { question: 'Is a Forbes Councils post the same as being featured in Forbes?', answer: 'It is not the same thing, and the page usually says so. Councils is a paid membership for executives that includes publishing access on the site. That has value — it is a real page under a recognized domain — but no editor chose your story, and people in media notice the difference. Decide whether the audience you care about will.' },
      { question: 'I have no funding round and no big announcement. Is there anything to pitch?', answer: 'Usually yes, but it is not news — it is expertise. Reporters need people who can explain a shift in your market clearly and quickly, and that need does not depend on your announcements. Pick the subject you could talk about for an hour without notes, publish on it, and be easy to reach. That route is slower, and it is the one that tends to work when nothing about your company is technically new.' },
    ],
  },
  {
    slug: 'how-to-get-featured-on-msn',
    intro: [
      "You saw a competitor's article sitting on MSN, next to real news, and wondered how it got there. The answer is more mundane than it looks, and it changes how you should spend your budget: there is no desk there taking pitches for founder profiles. The surface carries work published elsewhere, by publishers whose content it distributes.",
      "So the question is not how to pitch MSN. It is which publisher you get into, and whether that publisher's work reaches the surface at all. Get that distinction right and the rest of this is straightforward — including what to ask any agency that quotes you a price for it.",
    ],
    keyPoints: [
      'MSN is a distribution surface carrying work from partner publishers, not a newsroom that commissions or assigns stories.',
      'The only route onto it runs through a publication whose content already reaches that surface.',
      'Ask any agency to name the publication, not the surface, and to show you a live link.',
      "The article on the publisher's own site is the durable asset; treat a syndicated copy as a bonus.",
      'Nobody controls whether a particular piece is picked up, which is why nobody should promise it.',
    ],
    sections: [
      {
        heading: 'What MSN actually is',
        paragraphs: [
          "Think of it as a front page assembled from other people's newsrooms. Publishers make their content available to it, and the surface displays what fits its feeds and its readers. There is no assignment desk taking founder pitches, no editor there weighing whether your company deserves a profile, and no address you can send a press release to and expect an answer.",
          'This is why the phrase featured on MSN is doing quiet work in a lot of marketing. It describes where an article ended up, not who decided it was worth writing. That is not a scam — the page is real, the readership is real — but it means the interesting question is one level down: which publication actually ran it, and would you be happy telling a client that name out loud?',
        ],
      },
      {
        heading: 'The route runs through a publisher',
        paragraphs: [
          "In practice the sequence is: a publication in the network publishes your piece, and that publisher's feed carries it onward. Everything you control happens at the first step. You choose the publication, you shape the story, you approve the words. What happens after that is a distribution decision made by systems and people neither you nor your agency has any say over.",
          'So evaluate the publication as if the syndication did not exist. Would you send a prospective client that link on its own? Does the site publish work in your field that reads like journalism? Is your piece going to sit among things you would not want to be next to? If the publication only makes sense to you because of where it might travel, that is a sign to look harder.',
        ],
      },
      {
        heading: "What you control and what you don't",
        paragraphs: [
          "It is worth being precise about this, because most disappointment with MSN comes from confusing the two halves. The controllable half is genuinely large — it covers the angle, the accuracy, the quotes, the headline on the original, and which publication's name sits above it. The uncontrollable half is short but absolute.",
          'The practical consequence is that you should buy the first half and never pay a premium for the second. If a quote is higher because the surface is named in it, you are paying for something the seller cannot deliver on demand. Price the article. Treat the travel as weather.',
        ],
        list: [
          'Yours: the publication, the story, the facts, the wording, and the final approval before anything publishes.',
          'Yours: what you do with the link afterward — your site, your bio, your sales conversations.',
          'Not yours: whether a syndicated copy appears at all, or how long it stays up.',
          'Not yours: the headline or image a distribution surface displays alongside it.',
          'Not yours: which readers ever see it, and in which country or feed.',
        ],
      },
      {
        heading: 'What the appearance is worth',
        paragraphs: [
          'A real article, on a real publication, with your name and a working link is worth having. It answers the question a buyer asks silently before a first call, it gives a search result you did not write yourself, and it gives answer engines something attributable to summarize when someone asks who you are.',
          'What it is not is proof that a national newsroom investigated you and approved. Sophisticated buyers, reporters and investors can tell the difference, and a logo wall built entirely out of distribution surfaces reads as exactly what it is. Used honestly — as evidence that your thinking has been published and stands up — it does real work. Used as a substitute for substance, it gets found out.',
        ],
      },
      {
        heading: 'Questions to ask before paying',
        paragraphs: [
          'Anyone selling MSN coverage should be able to answer a short set of plain questions without hedging. If the answers arrive slowly, or arrive as reassurance instead of specifics, that tells you what the offer really is. The questions are not aggressive and a good seller will not mind them — most of them are things they should have told you unprompted.',
          'The answers matter more than the brochure. A seller who names the publication up front, shows you live links, and tells you plainly that syndication is not theirs to promise is describing the job accurately. One who keeps steering the conversation back to the logo is selling the part they do not control.',
        ],
        list: [
          'Which publication will actually publish this, by name, before I pay anything?',
          'Can I see live links to the last few pieces you placed with them?',
          'Who writes it, and do I approve every word before it goes up?',
          'What changes about the price or the plan if the piece is not picked up?',
          'What happens if that publication declines, and where does the piece go instead?',
        ],
      },
      {
        heading: 'How we handle it',
        paragraphs: [
          'We write features and place them with publications in our network, and some of that work travels to surfaces like this one. We will tell you which publication we are aiming at before you commit, and we will not price a syndicated copy as if it were a promise. You approve every word first; that part is never in question.',
          'If the honest answer is that a different outlet serves your buyers better, we will say so on the first call rather than sell you the surface you already had in mind. Everything is quoted to your goals, we reply within 24 hours, and nothing publishes without your sign-off.',
        ],
      },
    ],
    realityCheck: 'MSN is a distribution surface, not a newsroom, and nobody can promise you a place on it — not us, not anyone quoting a fixed price for it. What can be promised is a well-written article in a named publication that you approve before it runs. If a syndicated copy follows, good. If the pitch you are hearing is built around the logo rather than the publication behind it, you are being sold the part nobody controls.',
    faqs: [
      { question: 'Can I pitch MSN directly?', answer: 'Not in the way people expect. There is no desk there commissioning profiles of founders or companies, so a pitch sent to the surface has nowhere useful to land. The productive version of the question is which publication you want to be published by, since that is where the writing, the editing and the decision actually happen.' },
      { question: 'Does an MSN appearance help my search results?', answer: "Sometimes, and not in the way most people hope. The reliable benefit is the original article on the publisher's own site — that is the page that stays put, carries your name, and gets found when someone searches you. Treat any syndicated copy as extra reach rather than the asset itself, and never buy a placement primarily for links." },
      { question: 'Can anyone guarantee my article will appear on MSN?', answer: "No. Whether a given piece is picked up sits with the distributing systems and the publisher's own arrangements, not with any agency or client. What can be committed to is the article itself: which publication runs it, what it says, and that you approve it before publication. Anyone promising the surface is promising something outside their control." },
    ],
  },
  {
    slug: 'how-to-get-featured-in-ceo-weekly',
    intro: [
      'Someone is going to search your name between the first call and the contract. What they find decides more than most founders like to admit. A feature in a business title your buyer recognizes is not a vanity purchase in that moment — it is the thing standing between an unknown name and a familiar one.',
      'CEO Weekly sits in that part of the media landscape: a digital business title that runs founder profiles and interview features, and one you can realistically get into with a good story and honest material. Here is what a piece there involves, what it will and will not do for you, and how to make yours worth reading.',
    ],
    keyPoints: [
      'CEO Weekly is reachable, which is exactly why the writing has to carry more weight than the logo.',
      'A profile works when it names a decision, its cost, and what changed — not when it lists your services.',
      'Bring specifics you can stand behind; every claim in the piece is one you may be asked about later.',
      'A reachable title is a first credible feature, not a substitute for reported coverage at a selective national outlet.',
      'The article only earns its keep if you use it — bio, site, proposals, and search results.',
    ],
    sections: [
      {
        heading: 'Where CEO Weekly fits',
        paragraphs: [
          'It is a digital business publication built around people rather than markets — founders, operators, executives and the decisions they made. That focus is why it suits a first serious feature. A national reported profile usually requires a reporter to already care about your sector; a title like this one starts from the person, which is a door that opens on a story rather than on a news hook.',
          "Be clear-eyed about the trade. Reachable titles are reachable because their bar sits lower than a selective national outlet's, and the people who evaluate media for a living know that. What you get is a real, permanent, searchable article with your name on it, in a place your buyers will recognize as a business publication. What you do not get is the implication that a national newsroom chased you down.",
          'For most of the people who ask us about it — consultants, clinic owners, agency founders, attorneys building a practice — that trade is fine. Their buyers are not media critics. Their buyers are checking that a real person with a real track record exists behind the website.',
        ],
      },
      {
        heading: 'The profile that actually reads',
        paragraphs: [
          'Most founder features fail in the same place: they describe a company instead of telling what happened. The shape that works is older than any of us. Something was at stake, a decision was made, it cost something, and the world afterward looked different from the world before. If your draft has no cost in it, it is a brochure with a byline.',
          'The specific beats the impressive. A named client problem you solved in a way nobody else was trying is worth more than a paragraph about your commitment to excellence. The moment you nearly closed the business and what you changed instead is worth more than your mission statement. Readers remember the concrete thing, and so does the person who sends the link to a colleague.',
          'One useful test before anything is written. Read your draft opening and ask what a reader learns that they could not have guessed from your homepage. If the answer is nothing, the angle is not finished, and no amount of editing at the draft stage will rescue it.',
        ],
      },
      {
        heading: 'What to have ready',
        paragraphs: [
          'The work goes faster and the piece comes out better when the raw material exists before anyone starts writing. None of this is hard to assemble; most of it you already know and have never written down in one place. Gathering it also has a side effect worth having, which is that you find out which of your claims you can actually support.',
          'Note the word permitted. If you work under confidentiality, professional advertising rules, or clinical constraints, decide what is publishable before the draft exists rather than after. It is far easier to write around a restriction than to unpick a finished article that crosses one, and easier still to decide now than under deadline.',
        ],
        list: [
          'The origin moment — what you were doing before, and what made you stop doing it.',
          'One decision that could have gone badly, and what it actually cost you.',
          'Two or three client outcomes you are permitted to describe, with the details you can share.',
          'The thing you believe about your industry that your competitors would argue with.',
          'A usable headshot and any images you own the rights to.',
          'Links to anywhere you have already been published, quoted, or interviewed.',
        ],
      },
      {
        heading: 'How a feature comes together',
        paragraphs: [
          'The process is unglamorous, which is a good sign. You answer a questionnaire in your own words — that is the only writing you do. An editorial team shapes the angle, checks what you have given them, and drafts the piece to the standard the publication expects. You read it, mark what is wrong, and it comes back corrected.',
          'Revisions matter more than people expect, because the version you approve is the version that follows your name around. Read it as though a competitor is reading it. Check every figure, every date, every claim about a client. When it is right, it goes to the publication, and once it is live it stays live and searchable.',
          'With us that means unlimited revisions and no publication without your sign-off, and most placements go live within a few weeks. Timelines move with the outlet and with how many rounds you want, so we give you a realistic one before starting rather than an optimistic one afterward.',
        ],
      },
      {
        heading: 'Using it after it runs',
        paragraphs: [
          'A published feature does nothing on its own. Put the link where decisions get made: in your proposal, in the follow-up email after a first call, in your speaker bio, in the About page of your site. Send it to the people who refer you business, because they need something to forward that is not your sales page.',
          'Describe it accurately when you do. Featured in CEO Weekly is fine and true. Vaguer phrasing that implies a different publication, or a logo wall arranged to suggest a newsroom investigated you, is the kind of thing that costs you credibility with exactly the buyers you were trying to impress. The honest version is strong enough.',
          'One feature is a data point. A handful, spread across titles your audience knows, is a pattern — and a pattern is what changes the answer when someone searches you, asks a colleague about you, or asks an AI assistant who you are and what you are known for.',
        ],
      },
      {
        heading: 'Doing it without an agency',
        paragraphs: [
          'You can pursue this yourself, and some people should. Write the piece to the standard the publication runs, approach it the way its submissions or contact information indicates, and be prepared to wait and follow up. The two things that defeat most founders are not the writing and not the outlet — they are the follow-up and the honest self-editing.',
          'What we sell is the removal of that friction: story development, the writing, the placement, and someone whose job is the follow-up. If you would rather do it alone, the material in this guide is the same material we would ask you for. If you would rather not, tell us who you are trying to reach and we will quote it to your goals.',
        ],
      },
    ],
    realityCheck: 'CEO Weekly is more reachable than a selective national title, and that cuts both ways. A piece there will not carry the weight of reported coverage in a major business magazine, and presenting it as though it does will be noticed by the people whose opinion you wanted. Nobody can guarantee any specific outlet either — what we can commit to is the article, your approval of every word, and honesty about where it will and will not land.',
    faqs: [
      { question: 'Is CEO Weekly a real publication?', answer: 'Yes — it is a digital business title that publishes founder and executive features, and a placement there is a real, permanent, searchable article rather than a directory listing. Check it the way you would check any outlet: read a few recent pieces, look at who they are about, and decide whether you would be comfortable sending one to a prospective client.' },
      { question: 'Do I have to be a chief executive to be featured?', answer: "Not literally, though the publication's center of gravity is people who run something — founders, owners, practice leads, partners. What matters more than the title on your card is whether you made decisions someone else could learn from. If your role is advisory or technical, the piece usually works better built around the expertise than around the job title." },
      { question: 'Will a feature here help me get into a bigger publication later?', answer: 'It helps, but not the way people imagine. No selective outlet runs a story because a smaller one did. What earlier coverage does is make you a safer, easier subject: a reporter can see that you exist, that you have said something coherent in public, and that your claims held up. That lowers the effort of considering you.' },
    ],
  },
  {
    slug: 'how-to-get-featured-in-ny-weekly',
    intro: [
      'The name does the outlet a disservice. NY Weekly is a digital publication with a New York sensibility, not a print newspaper with a Midtown newsroom, and founders who approach it expecting the second thing tend to write the wrong pitch entirely. It runs profiles and interviews with people building things — companies, practices, careers — and the ones that read well have a specific person at the center.',
      'What follows is what we look at before we develop a feature for a client there, and what you would look at if you did it alone. Most of it is unglamorous: deciding what the story actually is, and cutting everything that is only true of your company because it is true of every company.',
    ],
    keyPoints: [
      'NY Weekly is a digital title, not a print newspaper — what works reads like a profile, not a release.',
      'The New York frame helps, but living elsewhere is not disqualifying if the story genuinely touches the city.',
      'A profile needs a person at its center; company milestones alone rarely carry a piece there.',
      'Bring specifics — decisions, verifiable facts, things that went wrong — or the draft reads like every other founder story.',
      'Placement is never guaranteed anywhere, and an agency saying otherwise is selling something it does not control.',
    ],
    sections: [
      {
        heading: 'What NY Weekly actually runs',
        paragraphs: [
          'Spend twenty minutes reading the site before you write anything. You will find founder and executive profiles, interviews, and pieces that sit somewhere between business and culture — the restaurateur who changed how the kitchen is staffed, the agency owner who left a big firm, the person who built something odd and made it work. The common thread is a named individual and a decision they made.',
          "What you will not find much of is corporate announcement copy. A funding round, a new office, a product release — those are facts, not stories, and on their own they give a writer nothing to build around. If your only news is that something happened, the piece will read as an announcement wearing a profile's clothes, and readers can tell.",
          "So read for shape, not just subject. Notice how long the pieces run, where the quotes fall, how much of the person's history the writer includes before getting to the present. That shape is the brief. Matching it is most of the work, and it costs you nothing but an afternoon.",
        ],
      },
      {
        heading: 'The New York question',
        paragraphs: [
          'It matters less than the name suggests and more than people hoping to ignore it would like. A New York connection gives the piece a natural frame — you built the company here, your clients are here, the industry you work in is concentrated here. Without one, the story has to be strong enough on its own to justify the space it takes up.',
          'Plenty of people outside the city have that. A founder in Tampa serving New York firms has a legitimate line into it. So does someone whose category — finance, media, hospitality, real estate, fashion — runs through the city regardless of where they sit. What does not work is bolting a mention of Manhattan onto a story with no reason to be there. It reads as exactly what it is.',
        ],
      },
      {
        heading: 'What to bring before you pitch',
        paragraphs: [
          'Before anyone writes a word, assemble the raw material. Not a bio — bios are the least useful document in PR, because they contain only the things that are already public and already flattering. What a writer needs is closer to what you would tell a friend over dinner: the decision you nearly got wrong, the year that did not work, the reason you do this instead of something easier.',
          'That last item matters more than people expect. Every founder has something they would rather keep out — a previous business that failed, a partner who left, a health reason behind a gap in the timeline. Naming it upfront is not hiding; it is scoping. The story is better when the boundaries are set before the writing starts rather than argued over afterwards.',
        ],
        list: [
          'The specific problem you set out to solve, described the way a customer would describe it rather than the way your website does.',
          'One decision you made that a reasonable person would have made differently, and what it cost you.',
          'Facts you can stand behind and verify — headcount, years in operation, markets served — and nothing you cannot.',
          'Two or three sentences in your own voice that sound like you and not like a brochure.',
          'Anything already on the record: prior coverage, a podcast, a talk, a licensing body listing.',
          'A clear statement of what you do not want discussed, so it never reaches a draft.',
        ],
      },
      {
        heading: 'Writing something the site would run',
        paragraphs: [
          'The most common failure is not weak facts. It is adjective stacking — visionary, innovative, industry-leading, passionate — words that describe a category rather than a person. Strip every one of them out and see what is left. If the paragraph collapses, the paragraph was never carrying anything. Then rebuild it around the one detail you left out because it seemed too small to include.',
          'Open on something concrete. A moment, a decision, a fact you can verify, a sentence somebody actually said. Then let the background follow. Most weak drafts do this backwards: three paragraphs of company history, then finally something interesting on page two. Nobody reads that far, and no editor should have to.',
          'Quotes carry the piece. They should sound like speech — a little uneven, occasionally blunt — not like a release read aloud. If you would not say it to a customer across a table, cut it. This is the part clients rewrite most in our drafts, which is a good sign: it means the words are being made to sound like them rather than like us.',
        ],
      },
      {
        heading: 'After the piece goes live',
        paragraphs: [
          'A published profile is an asset with a long tail. It sits in search results under your name, it gives a prospect something to read at the moment they are deciding, and it gives every later pitch a credential to point at. That is the real return, and it accumulates quietly rather than arriving as a spike in traffic.',
          'Do not expect a wave of inbound the week it publishes. Some pieces travel — picked up, indexed, shared into places you did not plan for — and some sit quietly and do their work over the following year. You cannot control which. What you can control is whether the piece is linked from your site, sent to your list, and mentioned when somebody asks what you have been up to.',
          "Use it deliberately. Put the link in your email signature during a launch, in the deck before a raise, in the follow-up after a first call. A feature nobody sees does nothing; the same feature placed in front of someone mid-decision often does more than the outlet's whole readership would.",
        ],
      },
      {
        heading: 'Doing this without an agency',
        paragraphs: [
          'You can do all of this alone. Read the site, build the raw material, write a draft that reads like a piece rather than a pitch, and approach the outlet with the finished thing instead of an idea. That last part is the step most people skip, and it is the one that changes the reply rate more than anything else you could do.',
          'What an agency adds is time and judgment about fit — knowing which title suits which story, and saying so when the answer is none of them. We tell clients which outlets we can place them in and which we can only pitch toward, and NY Weekly falls into a more reachable group than the national business titles. That is a difference of degree, not a promise.',
        ],
      },
    ],
    realityCheck: 'NY Weekly is more reachable than Forbes or Bloomberg. It is not a formality. Nobody — us included — can guarantee a placement at any publication, and an agency that does is either selling something other than editorial coverage or hoping you will not check. What we can tell you honestly is which outlets we have placed clients in before and which we can only pitch toward. Ask any agency to draw that line for you, in writing, before you pay anything.',
    faqs: [
      { question: 'Does a NY Weekly feature carry real weight?', answer: 'With the right audience, yes. It is a live publication with a permanent archive, so the piece turns up when a prospect, a partner or a hiring manager searches your name. It is not a national newsroom, and nobody should present it as one. Used honestly — as a credible piece of writing about you that someone can read in full — it does its job.' },
      { question: 'Do I need to live in New York to be featured?', answer: 'No, but you need a reason for the story to sit in a New York title. Serving clients there, working in an industry the city is built on, or having started the business there all count. If none of that is true, the story has to stand on its own merit instead, which is a higher bar rather than an impossible one.' },
      { question: 'How long does a feature take from start to live?', answer: 'Most placements we run go live within a few weeks, and the variable is almost always the draft rather than the outlet. Clients who answer the questionnaire in detail and turn revisions around quickly move fastest. Clients who want six passes on the opening paragraph take longer, which is fine — revisions are unlimited, and nothing publishes without your sign-off.' },
    ],
  },
  {
    slug: 'how-to-get-featured-in-womens-journal',
    intro: [
      'Read enough founder profiles of women and a template starts to show through: she always knew, she faced doubt, she persevered, she is now inspiring others. It is true often enough to be useful and generic enough to be forgettable. The pieces that stay with a reader do the opposite — one person, one decision, one year that went badly — and they do not ask to be admired.',
      "Women's Journal covers women building businesses, practices and careers, and the difference between a piece that lands there and one that blurs into the rest is almost never the credentials. It is how much of the actual work makes it onto the page. Getting that on paper is the job before anyone starts writing.",
    ],
    keyPoints: [
      'The generic empowerment arc is the most common reason a strong subject produces a forgettable profile.',
      "Specific decisions, real trade-offs and things that went wrong separate one woman's story from a template.",
      'Decide before drafting how much of your family, health or personal life belongs in public — the answer can be none.',
      "Women's Journal is a more reachable title than the national business magazines, but no outlet is ever a guarantee.",
      'A published profile mostly works quietly, in search results, at the moment a buyer decides whether to trust you.',
    ],
    sections: [
      {
        heading: 'The women these profiles are about',
        paragraphs: [
          'Read a run of recent pieces and the range is wider than the title suggests. Founders, yes, but also clinicians running practices, attorneys who went out on their own, people in wellness and beauty and property, executives, authors, women working in trades where they are still outnumbered. The through-line is a woman who built or runs something, told through her own account of it.',
          'That breadth is worth knowing before you decide you do not fit. A solo practitioner with a full book of clients and a clear point of view is often a better subject than a larger company with nothing interesting to say. Scale is not the qualifier. Having something to say that is not already on your homepage is.',
        ],
      },
      {
        heading: 'Why most drafts read the same',
        paragraphs: [
          'The template is seductive because it is easy. Childhood spark, obstacle, doubt, breakthrough, mission to help others. Every element is usually true. Strung together, they produce a piece that could be about almost anyone, and a reader who finishes it comes away with nothing about you they could repeat to someone else.',
          'The fix is not to remove the personal. It is to make the personal specific. Not "she faced skepticism" but the meeting where a lender asked who her husband was. Not "she took a risk" but the month she paid staff before herself and what that felt like. Detail is what converts a familiar arc into one person\'s account.',
          'Test each sentence by asking whether your closest competitor could put her own name on it without changing a word. If she could, it is filler. That question alone tends to cut a large share of a first draft, and what survives is the part a reader might actually repeat to somebody else later. Cut ruthlessly and the piece gets shorter and better at once.',
        ],
      },
      {
        heading: 'Deciding what stays private',
        paragraphs: [
          "Personal-story outlets invite disclosure, and disclosure is not free. A divorce, a diagnosis, a child's difficulties, a period of financial trouble — any of these can make a profile more moving and any of them can follow you into a client meeting years later. The piece is permanent. That cuts both ways.",
          'So make the call deliberately, in advance, and in writing. Decide which parts of your life are on the record, which can be gestured at without detail, and which are not available at any price. Give that list to whoever is writing before they start. It is far easier to keep something out of a draft than to argue it out of one.',
        ],
        list: [
          'On the record: the parts of your history you would repeat on a stage in front of clients.',
          'Available in outline: things you will acknowledge in a sentence but will not detail further.',
          'Closed: anything involving other people who did not agree to appear, especially children.',
          'Off-limits for legal reasons: settlements, active disputes, anything covered by a confidentiality clause.',
        ],
      },
      {
        heading: 'The material a good profile needs',
        paragraphs: [
          'Once the boundaries are set, gather the substance. The most useful thing you can produce is not a bio but a plain account of how the business actually runs — who your clients are, what they were doing before they found you, what you charge for and what you refuse to do. Concrete operating detail is what makes a profile read as reported rather than composed.',
          'Add the record. Licenses and credentials with the issuing body named, prior coverage, talks, published work, anything a reader could verify without taking your word for it. This part also protects you: a claim you cannot support is the thing most likely to cause a problem after publication, and it is the easiest thing to remove beforehand.',
          'Then find your one argument. The strongest profiles carry a position underneath the biography — something you believe about your field that not everyone in it agrees with. It does not need to be combative. It needs to be yours, stated plainly, with the reasoning attached. That is usually the sentence people quote back to you afterwards.',
        ],
      },
      {
        heading: 'What the finished piece is for',
        paragraphs: [
          'Coverage works hardest at the moment somebody is checking you out. A prospective client with your name and a browser tab, a conference organizer choosing between two speakers, a bank or a partner doing light diligence — that is when a published profile earns its keep. It answers the question they were about to ask a stranger.',
          'It also shapes what machines say about you. Answer engines and search summaries assemble a picture from whatever attributable material exists. If the only sources are your own site and a social profile, the summary reflects that. Published third-party writing gives them something else to work from, credited to someone other than you.',
          'None of that arrives as a spike. Expect a quiet asset that keeps working — in search, in due diligence, in the follow-up email after a first conversation — rather than a week of inbound. Judge it a year out, on whether the people who mattered found it, not on the traffic it drew in the first seven days.',
        ],
      },
    ],
    realityCheck: "Women's Journal sits in a more reachable group of outlets than Forbes or Fast Company, and we will say that plainly rather than dress it up. Reachable is not guaranteed. No agency controls an editorial decision anywhere, and a promise of a specific placement should make you ask what is actually being sold. Ask for examples of published work, open the links yourself, and treat a refusal to distinguish between placing and pitching as the answer.",
    faqs: [
      { question: 'Do I need to run a large company to be featured?', answer: 'No. Solo practitioners, small practices and one-person consultancies appear in this kind of title regularly, and they often make better subjects than larger companies with nothing to say. What matters is whether you can talk concretely about how the work is done and hold a position about your field. Size is not the filter; substance is.' },
      { question: 'How much of my personal life do I have to share?', answer: 'As little as you choose. Personal-story formats invite disclosure, but nothing obliges you to give it. Decide your boundaries before drafting and hand them over in writing. A profile can be specific and memorable while saying nothing at all about your marriage, your health or your children — the specificity comes from the work, not from private life.' },
      { question: 'Can you guarantee my piece will be published?', answer: 'No. We do not guarantee placement at any outlet, including the more reachable ones, because editorial decisions are not ours to make. What we do is tell you before you spend anything where your story realistically lands, write it to editorial standard, and revise it until you approve every word. If someone offers a guarantee, ask what happens when it does not run.' },
    ],
  },
  {
    slug: 'how-to-get-featured-in-healthcare-business-today',
    intro: [
      'The mistake most healthcare clients make with this title is writing for patients. Healthcare Business Today covers the business of care — the people running practices, health systems, payer operations, digital health companies and the vendors selling into all of them. Its readers are colleagues and buyers, not the public, and a piece written to reassure a nervous patient lands with a thud in front of them.',
      'That single shift, from patient-facing to operator-facing, fixes most of what goes wrong. The rest is knowing what a healthcare organization can responsibly put in print, and where the real limits sit — some of which come from the outlet and more of which come from your own compliance review.',
    ],
    keyPoints: [
      'The readership is healthcare operators and buyers, not patients — write for a colleague, not a waiting room.',
      'Operational specificity is the currency: staffing, workflow, reimbursement, adoption, what broke and what you changed.',
      'Nothing that identifies a patient belongs in a draft, even with the details lightly changed.',
      'Clinical credentials help, but a clinician still has to make an argument another operator can act on.',
      'Advertising and professional conduct rules apply to a published article the same way they apply to your website.',
    ],
    sections: [
      {
        heading: 'Who is on the other end',
        paragraphs: [
          'Picture the reader precisely: a practice administrator with a staffing problem, a health-system director evaluating a vendor, a founder six months from a raise, a revenue-cycle manager who has read every pitch deck in the category. They are not impressed by the word innovative. They have limited time and a specific problem, and they decide early whether you have anything for them.',
          'Write to that person and the whole piece changes. You stop explaining what telehealth is. You stop reassuring anyone that care is delivered with compassion. You start with the part a colleague would actually want — what you tried, what it cost in staff hours, and whether it survived contact with the front desk on a Monday morning.',
        ],
      },
      {
        heading: 'What earns space here',
        paragraphs: [
          'The pieces that work in trade-adjacent healthcare titles almost always contain an argument plus evidence you can produce yourself. Not a product description. A claim about how something in healthcare operations should be done differently, followed by the reason you believe it, drawn from work you have actually done and can describe in detail.',
          'Notice what is missing from that list: announcements. A funding round, a partnership, a new location, a hire. Those are legitimate news items and they belong in a release, but as the spine of a contributed article they leave the reader with nothing to use. The test is whether an administrator could do something differently on Monday because of what you wrote.',
        ],
        list: [
          'A workflow you rebuilt and what the first month of it looked like, including the part that failed.',
          'A staffing or scheduling change and the trade-off it forced somewhere else in the operation.',
          'What a payer policy shift meant in practice for a department, in plain operational terms.',
          'Why an adoption effort stalled, and what you would tell an administrator attempting the same thing.',
          'A clear-eyed view of where a technology is oversold, written by someone with reason to know.',
        ],
      },
      {
        heading: 'The compliance line, drawn early',
        paragraphs: [
          'Healthcare publishing has constraints other industries do not, and they are not negotiable. No patient identifiers. No case detail specific enough that a person could be recognized from it, even with names changed and dates moved. Composite examples are safer, and should be labeled as composites so no reader has to guess what they are looking at.',
          "Then there are the claims. Anything that reads as a promise about outcomes, a comparison of your results against alternatives, or a suggestion that one treatment works better than another belongs in a conversation with your compliance counsel first. If you hold a clinical license, your board's advertising rules apply to a published article exactly as they apply to your own website.",
          'None of this makes a piece bland. It makes it careful, and careful reads as credible in front of this audience. The most quotable healthcare articles are usually the ones that stay firmly inside these lines, because the writer had to earn attention with operational substance instead of claims. Route every draft past whoever approves your marketing before it goes to an outlet.',
        ],
      },
      {
        heading: 'What a credential does not cover',
        paragraphs: [
          'Clinical credentials give you standing, and standing is not the same as an argument. A physician writing about burnout in her own department is credible; a physician writing about burnout in general is one voice among thousands. The specific department, the specific rota change, the specific thing that did not work — that is where the credential starts doing real work on the page.',
          'If you are on the vendor side without clinical training, the reverse applies. You can see how systems behave across many customers, which is genuinely useful and rarely written up honestly. What you do not have is standing to tell clinicians how care should be delivered. Stay inside what you actually know and the piece is stronger for the restraint.',
        ],
      },
      {
        heading: 'Getting it in front of an outlet',
        paragraphs: [
          'Approach with a finished piece, not an idea. Titles in this space see a great deal of half-formed pitching, and a drafted article that already reads like their site asks far less of the person receiving it than a proposal does. Send a one-paragraph summary, the article itself, a short bio, and a headshot you actually own the rights to.',
          'Expect the process to take time, and expect edits. A healthcare piece often moves between the writer, the subject and a compliance reviewer more than once, and each pass costs days. Build that into your timeline. Most of the placements we run go live within a few weeks, and healthcare is the category where internal review, not the outlet, usually sets the pace.',
        ],
      },
      {
        heading: 'Where the coverage does its work',
        paragraphs: [
          'Healthcare buying cycles are long and full of checking. Someone hears your name in a committee meeting, then looks you up before the next one. What they find at that moment matters more than any single impression, and a published article under your name that argues something sensible is worth a great deal in that narrow window.',
          'It also travels sideways. Conference organizers, procurement committees, health-system partners and reporters working on adjacent stories all search before they engage. A body of published writing makes you findable to people who were never going to answer cold outreach, which is a slower mechanism than advertising and a considerably more durable one.',
        ],
      },
    ],
    realityCheck: 'Healthcare Business Today is more reachable than the national business magazines, and we say so plainly. It is still an editorial decision that belongs to the publication, not to us and not to you. We cannot guarantee placement there or anywhere, and neither can anyone else. Add a constraint specific to your field: a piece that clears an outlet can still fail your own compliance review, and that is the review that can actually cost you something.',
    faqs: [
      { question: 'Is this a consumer health publication?', answer: 'No. The readership is the business side of healthcare — administrators, executives, health-tech operators, investors and the vendors selling into them. Writing for patients is the most common mistake we see from clinical clients. If your piece explains a condition or reassures the reader about quality of care, it is aimed at the wrong audience and will read that way immediately.' },
      { question: 'Can I write about a specific patient case?', answer: 'Not in identifiable form. Remove anything that could allow a person to be recognized, including rare conditions, unusual timelines and small-population detail — changing a name is not enough. Composite or aggregated examples, labeled as such, do the same illustrative work without the risk. When in doubt, ask your privacy officer before drafting rather than after.' },
      { question: 'Do I need to be a clinician to be published there?', answer: 'No. Administrators, founders, operators, finance and revenue-cycle people all have relevant standing. What you need is direct experience of the thing you are writing about and a willingness to be specific about it. A non-clinician writing precisely about operations is more useful to that readership than a clinician writing vaguely about the future of medicine.' },
    ],
  },
  {
    slug: 'how-to-get-featured-in-benzinga',
    intro: [
      'Most pitches aimed at financial media fail on the same point. They describe a person — the journey, the hustle, the vision — and never say what any of it has to do with money. A markets audience reads for consequence: who pays, how much, what changed, what it implies about a sector. Get that part right and the rest of the work gets much easier.',
      "The useful work is upstream of any pitch. Find the financial spine of an ordinary business, write for someone skimming between price checks, and learn to tell an honest route in from a vague one. You can do all of that yourself, without hiring anybody. Most of the difficulty is not access — it is having something specific enough to be worth a reader's attention.",
    ],
    keyPoints: [
      'Benzinga readers scan for consequence — pricing, demand, capital, risk. A founder story without a financial spine will not hold them.',
      'The strongest angle is usually something you already know from running the business, not something you invent for the pitch.',
      'Ask any agency which route a placement uses and which publication carries the byline. Vagueness there is the tell.',
      'Numbers you publish become quotable forever, so check every figure before sign-off rather than after somebody else does.',
      'A finance placement moves investors and partners far more than it moves a local consumer choosing a service.',
    ],
    sections: [
      {
        heading: 'Who is actually reading',
        paragraphs: [
          'Benzinga publishes for people who follow markets through the trading day — traders, investors, and the analysts and reporters who watch the same tickers. That reader is financially literate and impatient. They are not hostile to a company story, but they will not decode one. If your first two sentences do not tell them what the business does and why it matters to money, they are gone.',
          'This cuts both ways. Plenty of founders assume a markets title is out of reach because they are private, small, or in an unglamorous industry. None of that disqualifies you. What disqualifies you is having nothing to say about cost, demand, capital or risk. A roofing company that can explain what insurance repricing did to its order book is more interesting here than a pre-revenue app with a deck.',
          'So the first question is not how to get in. It is whether a market-literate stranger would read past your opening line. Test it on someone who invests but knows nothing about your sector. If they ask what you actually sell after your explanation, the angle is not ready yet.',
        ],
      },
      {
        heading: 'Finding the number in your business',
        paragraphs: [
          'Every business has financial facts its owner considers boring. Those are usually the story. What a customer pays now versus two years ago. Where your input costs moved. Which segment grew while the rest flatlined. How long a sale takes compared with the industry assumption. None of it requires you to be public, funded, or large.',
          'The discipline is to state only what you can support. A markets reader has seen every unverifiable growth claim there is, and a figure you cannot source damages you more than no figure at all. If you would not put a number in front of a lender, keep it out of an article. Write the ones you can defend and cut the ones you cannot.',
          'There is a second source most people forget: your own operating data, aggregated. You may not be able to name a client, but you can often describe a pattern across your book. Patterns are what a finance audience finds useful, because they hint at where an industry is heading before that shows up anywhere official.',
        ],
        list: [
          'Pricing: what you charge now, what you charged before, and the reason the line moved.',
          'Demand: which customer segment is growing, which is shrinking, and what that says about the wider market.',
          'Capital: how the business is funded, what a raise is for, or why you have not raised.',
          'Costs: an input, a regulation or a supply shift that changed your economics this year.',
          'Risk: what could go wrong in your sector, stated by someone with skin in it.',
        ],
      },
      {
        heading: 'Writing for a skimming reader',
        paragraphs: [
          'Financial writing has a shape, and it is close to inverted. The consequence goes first, the evidence second, the background last. Most business owners do the reverse — origin story, mission, then a paragraph of substance nobody reached. Take your draft, find the sentence that would make an investor look up, and move it to the top. The piece usually improves immediately.',
          'Then cut the adjectives. Innovative, leading, cutting-edge and revolutionary carry no information and signal to a finance reader that the substance ran out. Replace each one with the fact that made you reach for it. If there is no fact behind the adjective, that is worth knowing before you publish rather than after.',
          'Quotes deserve the same treatment. A quote that says you are excited about the future is filler. A quote that says something a competitor would rather you had not said is a quote. You are allowed to have a view here; a market page is one of the few places where a strong, specific opinion helps rather than hurts.',
        ],
      },
      {
        heading: 'Timing beats persistence',
        paragraphs: [
          'Finance coverage runs on a calendar. Earnings season, rate decisions, regulatory deadlines, sector results — these create windows where a reporter needs somebody who can explain what a number means for ordinary operators. If your industry has a moment when everyone suddenly cares, put it in your diary and prepare the commentary in advance.',
          'Being early is the whole advantage. A view offered on the morning a number lands is useful; the same view offered three days later is a blog post. That means writing the two paragraphs before the event, with the conclusion left open, so you are editing rather than starting when the moment arrives.',
          'It also means accepting that most of your prepared commentary will go unused. That is normal and not a sign the approach is failing. The pieces that do land usually arrive after several attempts, by which point you have become a name somebody half-recognizes rather than a cold email from a stranger.',
        ],
      },
      {
        heading: 'Know which door you are using',
        paragraphs: [
          'Financial media generally has more than one way in, and the routes are not equivalent. There is reported journalism, written by staff and not for sale. There is contributed and partner content, which sits under different labeling. And there is paid wire distribution, which is a product rather than coverage. All three can end up on a finance site, and readers do not always tell them apart.',
          "You should. Before you pay anyone for a Benzinga placement, ask plainly which of those routes they are using, whether the piece will carry a label, and whether the byline is yours or a staff writer's. An honest answer costs nothing to give. A vague one — we know people, we can get you in — usually means the seller is hoping you will not ask twice.",
          'None of this makes the reachable routes bad. A clearly labeled, well-written piece on a finance title is a real asset: permanent, searchable, and credible to the people who look you up before a term sheet or a partnership. It is only bad when it is sold to you as something it is not.',
        ],
      },
      {
        heading: 'After the piece is live',
        paragraphs: [
          'A finance placement does its work in specific places. Put the link in your investor updates, your data room, and the credentials page nobody reads until they are about to sign something. Send it to the partner who has been slow to respond. It is a reference, not a broadcast, and treating it as a reference is what makes it pay.',
          'It also changes the next conversation. Editors at harder titles tend to spend more time on a name that has already been published carefully, because the risk of a wasted call goes down. That is the real compounding effect of coverage, and it is why the first credible piece is usually worth more than its own readership suggests.',
        ],
      },
    ],
    realityCheck: 'Benzinga is more reachable than the titles most people name first, and that is a real advantage — but reachable is not the same as guaranteed, and nobody controls what a newsroom runs. We do not promise placement anywhere. A piece here gives you a credible, permanent article on a title investors recognize. It does not give you analyst coverage, a price move, or an endorsement. If someone implies otherwise, ask them to put it in writing.',
    faqs: [
      { question: 'Do I need to be a public company?', answer: 'No. Private founders, funds, advisory firms and growth-stage companies all have angles that work on a finance title. What matters is that the story connects to money in a way a market reader recognizes — demand, pricing, capital, cost or risk. A private roofing business with a real view on insurance costs has more to say here than a funded startup with nothing shipped.' },
      { question: 'Will a Benzinga article affect my share price or attract investors?', answer: 'Treat that as a no. Coverage is not analyst research and it does not move markets. What it does is make you legible to people already considering you — an investor doing diligence, a partner checking whether you are real, a candidate deciding whether to take the call. That is a useful job, and it is a different job from the one people hope for.' },
      { question: 'Can I do this without an agency?', answer: 'Yes, and plenty of people do. The work is finding a defensible financial angle, writing it to a markets reader rather than a customer, and being available when your sector is in the news. What an agency buys you is speed, editorial writing, and someone who already knows which routes exist. If you have time and a clear story, you can run it yourself.' },
    ],
  },
  {
    slug: 'how-to-get-featured-in-yahoo-finance',
    intro: [
      'Somebody sends you a proposal with a Yahoo Finance logo on it. Before anything else, work out what is being sold. Yahoo Finance is two things at once — a newsroom producing its own reporting, and an enormous portal carrying articles from partner publishers and newswires. A link that ends up on the same domain can have arrived through either door, and the two are not worth the same.',
      'That distinction is not a technicality. It decides what you can realistically buy, what you should pay for it, and what you can honestly claim afterward. It is also easy to check yourself, in about a minute, on any sample link somebody shows you.',
    ],
    keyPoints: [
      'Yahoo Finance runs its own journalism and also carries syndicated partner and wire content; the two are not equivalent.',
      'The durable asset is the article on the publication that originated it, not its appearance on any portal.',
      "Check a sample link's byline and originating publisher before you pay; a minute of reading settles most arguments.",
      'Syndicated placements can be removed, re-hosted or expire; nobody selling you one controls how long it stays up.',
      'A finance-portal placement persuades investors and partners; it rarely moves a consumer choosing a local service.',
    ],
    sections: [
      {
        heading: 'Two doors with one logo',
        paragraphs: [
          'The first door is staff journalism — reporters and editors covering markets, companies and personal finance. They decide what to write. You cannot buy your way into it, and anyone suggesting otherwise is describing a different product. The way in, such as it is, is being genuinely useful to a reporter working on a story they already chose.',
          'The second door is syndication. A large share of what appears on a finance portal originated somewhere else — a partner publication, a wire, a content network — and flows in under an arrangement between those parties. That is the route most agency placements use, including ours. It produces a real article on a real publication that a large audience can encounter. It is not the same as being reported on by staff.',
          'Saying so out loud is not a weakness in the offer. It is the difference between a client who understands what they own and one who finds out later. If you are buying, ask which door. If you are selling, say which door before you are asked.',
        ],
      },
      {
        heading: 'How to check a sample link',
        paragraphs: [
          'Any agency showing you results should be able to hand you live links. Open one and read it the way a skeptic would. You are looking for three things: who wrote it, which publication published it first, and whether the page carries a label describing how it got there. None of this requires special tools.',
          'The most telling detail is usually the byline. If the piece credits another publication or a wire service rather than a staff reporter, you are looking at syndicated content — which is fine, as long as that is what you were sold. What you should not accept is being shown a staff-reported article as an example of what will be produced for you.',
        ],
        list: [
          'Read the byline: a staff name, another publication, or a wire service each mean something different.',
          'Look for a label near the headline or footer describing the piece as partner, sponsored or contributed content.',
          'Search the exact headline to find where else it appears and which version came first.',
          "Ask for the originating publication's URL, not only the portal one — that link is the asset.",
          'Ask what happens if the portal version disappears, and get the answer before you sign.',
        ],
      },
      {
        heading: 'What syndication does not promise',
        paragraphs: [
          'Portals reorganize. Partnerships change, archives get pruned, and a page that was live last year may not resolve next year. Nobody outside the portal decides that. If a placement is being sold to you as permanent, ask what specifically is permanent — because the honest answer is the article on its originating publication, not its appearance on any surface downstream.',
          'This is why the sensible move is to screenshot and archive on the day it goes live. Save the portal page, save the originating page, and keep both with the date. If you ever need to show the coverage in a pitch deck or a diligence pack, you are not relying on a link that may have moved.',
          "None of this is an argument against the route. It is an argument for describing it accurately. A widely-read finance surface carrying your story is worth having; a claim that you were profiled by Yahoo Finance's newsroom, when you were not, is a liability the first time somebody checks.",
        ],
      },
      {
        heading: 'Whether a finance audience is your audience',
        paragraphs: [
          "There is a version of this decision that has nothing to do with Yahoo Finance and everything to do with who buys from you. A finance portal reaches investors, operators, and people who manage money — theirs or somebody else's. If those people gate your growth, the placement is well aimed.",
          'If your buyer is a homeowner choosing a contractor or a patient choosing a clinic, the logo will impress them briefly and change nothing. Their questions are local, practical and about trust in a person. A trade publication they actually read, or a well-written profile that ranks for your name, does more for that buyer than a markets surface ever will.',
          'The honest test is to name the person you want to influence and the moment you want to influence them. Write both down. If the answer is an investor mid-diligence or a partner deciding whether you are serious, a finance surface earns its place. If you cannot name either, no outlet will fix that.',
        ],
      },
      {
        heading: 'Earning the staff-reported version',
        paragraphs: [
          'If what you want is the first door, the approach is different and slower. Reporters covering finance need sources who can explain something in plain language on short notice and be quoted accurately. Becoming one of those people is a matter of being reachable, being specific, and being right often enough that the call is worth repeating.',
          "Practically, that means a page on your own site that says what you can speak to and how to reach you, answers that arrive within the hour rather than the day, and a willingness to say you do not know when you do not. It also means accepting that you will be one line in somebody else's story rather than the subject of your own.",
          "That one line is often worth more than a long profile, because a reader treats it as a journalist's judgment rather than your own description of yourself. It is also the one thing no agency can hand you on a schedule. We can prepare you for it and put you in front of the right reporting. The decision stays with the newsroom.",
        ],
      },
      {
        heading: 'Describing the coverage honestly',
        paragraphs: [
          'How you describe the placement matters more than most people expect. Featured in is a phrase doing a lot of quiet work; as seen on is doing more. The safest framing is the one that survives a click: name the publication that published the piece, link to it, and let the reader see where else it appeared.',
          'There are real consequences to overstating it. Regulated professionals have advertising rules about implied endorsement. Investors doing diligence check claims. And a prospect who discovers the gap between what your homepage implied and what actually happened has learned something about you that no article will undo. Understate it and the coverage still works.',
        ],
      },
    ],
    realityCheck: 'We can place work that reaches Yahoo Finance through partner and wire routes. We cannot promise a Yahoo Finance staff reporter will write about you, cannot control how long a syndicated page stays up, and hold no arrangement with Yahoo itself. The article on its originating publication is the thing you own. Anyone quoting you a price for a Yahoo Finance feature without naming that originating publication is selling you a logo, not a placement.',
    faqs: [
      { question: 'How do I tell a syndicated piece from staff reporting?', answer: "Read the byline and any label near the headline or footer. Staff journalism carries a reporter's name and the publication's own credit. Syndicated content usually credits another publication, a wire, or a content partner, and often carries a descriptor saying so. If a sample link is ambiguous, search the exact headline and see where else the same text appears." },
      { question: 'Is it worth it if my customers are not investors?', answer: 'Often not, and we will say so. A finance surface is persuasive to people who already think in balance sheets. If your buyers are local, or clinical, or choosing on referral, your budget usually does more in publications those people actually read, or in a profile that ranks when they search your name. Tell us who you need to reach and we will aim at them instead.' },
      { question: 'What if the link stops working later?', answer: "Assume it might, and prepare for it. Archive the page the day it publishes, keep the originating publication's URL alongside it, and cite that one in your materials. A portal reorganizing its own archive is outside everyone's control except the portal's. Anyone promising permanent visibility on a surface they do not operate is promising something they cannot deliver." },
    ],
  },
  {
    slug: 'how-to-get-featured-in-fox-interviewer',
    intro: [
      'First, the disambiguation, because it trips up almost everyone: Fox Interviewer is a digital publication that runs long-form Q&A features. It is not the Fox broadcast network, and if a proposal ever lets you believe otherwise, that tells you what you need to know about the proposal.',
      'With that out of the way, the interview format deserves more respect than it usually gets. Given room to answer properly, a person explains how they think — and that is exactly what somebody researching you before a first call is trying to find out. The hard part is not access. It is being worth a full interview, which is a skill, and a learnable one.',
    ],
    keyPoints: [
      'Fox Interviewer is a digital Q&A publication, separate from the Fox broadcast network; say so plainly whenever you cite it.',
      'An interview lives or dies on its questions, so build the question set before you worry about the answers.',
      'The answers most worth reading contain a decision you regret, a cost you paid, or a view others dispute.',
      'Everything published under your name stays quotable, so edit for the version of you that exists in three years.',
      'This format suits people whose buyers hire a person; it does less for a hard news or markets angle.',
    ],
    sections: [
      {
        heading: 'What the Q&A format is good at',
        paragraphs: [
          'A reported feature compresses you. A journalist writing about a trend needs two sentences from you and cuts the rest, which is the correct decision for their story and a frustrating one for yours. An interview inverts that. The subject gets space, the questions supply structure, and a reader can follow a line of reasoning rather than a summary of it.',
          'That makes it unusually well suited to a specific commercial problem: the prospect who is nearly ready to hire you and wants to know what you are like. They are not looking for proof you exist. They are looking for judgment, temperament, and whether you have thought about the thing they are worried about. A good interview answers all three before the call.',
          'The flip side is that the format offers nowhere to hide. A thin interview reads worse than a thin news item, because the reader can see how much room you had and how little you did with it. Length is a gift you have to earn on the page.',
        ],
      },
      {
        heading: 'Write the questions first',
        paragraphs: [
          'Most people preparing for an interview rehearse answers. Do the opposite. Sit down and write the ten questions you would most like to be asked, then the three you would least like to be asked, and notice that the second list is more interesting. The best interviews go somewhere slightly uncomfortable and come back with something earned.',
          'Then throw out any question whose answer is your website. What do you do, what makes you different, where do you see yourself in five years — a reader has already skipped past these a hundred times. Replace them with questions only you could be asked: about a specific decision, a specific year, a specific thing you got wrong.',
        ],
        list: [
          'What did you believe about this business five years ago that you no longer believe?',
          'What is the most expensive mistake you have made, and what did it teach you?',
          "Where does your industry's conventional advice quietly fail the people who follow it?",
          'Which kind of client do you turn away, and why is that the right call?',
          'What do you do differently from everyone else, and what does it cost you?',
          'What would you want a nervous first-time client to know before they call?',
        ],
      },
      {
        heading: 'Answering like a person',
        paragraphs: [
          'Read a bad interview and you will find the same failure repeated: every answer starts with a summary of the question and ends with a plug. Cut both. Start in the middle of the thought, at the concrete detail, and stop when the point is made. An answer that ends one sentence early reads confident; one that ends two sentences late reads anxious.',
          'Use real nouns. Not clients but the orthodontist in Reno who called on a Sunday. Not challenges but the quarter you almost missed payroll. Specificity is the only thing that reliably separates a person from a category, and it is free. If you are worried about confidentiality, change the identifying details and keep the shape of the story.',
          'And read the whole thing aloud before you approve it. Anything you would not say out loud to a stranger in a bar should not appear under your name in a permanent article. This one test catches most of what a careful editor would catch anyway, and it takes ten minutes.',
        ],
      },
      {
        heading: 'Where it fits and where it does not',
        paragraphs: [
          'This is a good first credible feature for someone whose buyers hire a person rather than a product — consultants, coaches, attorneys, practice owners, founders with an actual origin story. It gives a searcher something substantial to land on, and it gives you a link to send when a prospect asks who you are.',
          'It is the wrong tool for other jobs. If you need a markets audience, a news hook, or the weight of a legacy masthead in front of an institutional buyer, this is not where that comes from, and no amount of interview quality changes it. Match the outlet to the person you are trying to move, not to the logo you would most enjoy owning.',
          'Regulated professionals need one more pass. Attorneys, financial advisors and clinicians all work under advertising or communication rules, and an interview is exactly the format that tempts a person into a testimonial-shaped sentence or an outcome claim. Run the draft past whoever handles your compliance before sign-off, not after publication.',
        ],
      },
      {
        heading: 'Naming it accurately afterward',
        paragraphs: [
          'When the piece is live, cite it as what it is. Fox Interviewer, linked, with the date. Do not put a broadcast network logo on your site, do not write as seen on Fox, and do not let a designer make that decision for you. The moment a prospect notices the gap, everything else on the page becomes suspect too.',
          'Then put it where it will be read. The link belongs in your email signature, your proposal, your speaker bio and the page that loads when somebody searches your name. An interview works hardest at the moment of decision, which is rarely the day it publishes. Send it to the person who has gone quiet.',
        ],
      },
    ],
    realityCheck: 'Fox Interviewer is reachable, and it is not the Fox broadcast network. Those two facts belong in the same sentence every time. A piece here is a genuine, permanent, searchable article in your own words — not the reach or the authority of a legacy newsroom, and not a placement anyone can guarantee. Used honestly it does one job well. Sold as national television coverage, it is the clearest warning sign in the industry.',
    faqs: [
      { question: 'Do I have to sit for a live interview?', answer: 'Not necessarily. Interview-format pieces are often built from a written questionnaire or a recorded conversation, then edited into a Q&A. With us you complete a short questionnaire, our editorial team drafts the piece, and you revise until the answers sound like you speaking. Whichever way it is produced, the words published under your name should be words you approved.' },
      { question: 'Is one interview enough on its own?', answer: 'For one job, yes: somebody searching your name finds a substantial article where you sound like the person you claim to be. That alone is often enough for a first-time buyer. If you are trying to shift how an entire market sees you, or you need coverage that survives real scrutiny, a single piece will not do it and we will say so.' },
      { question: 'What if I read it later and hate an answer?', answer: 'Fix it before it publishes, because afterward is harder. Revisions are unlimited with us and nothing goes live without your sign-off, which is the point of that policy rather than a courtesy. Read the draft aloud, cut anything that sounds like a slogan, and check every claim you would not want repeated back to you in a negotiation.' },
    ],
  },
  {
    slug: 'how-to-get-featured-in-usa-today',
    intro: [
      "Someone puts a USA Today badge on their website. A prospect clicks it. What they find is either a reported story written by a staff journalist or a piece produced through the title's contributor and partner content program — and those are not the same thing, although both carry the name.",
      'Which one you are aiming at changes everything downstream: what gets written, who decides, how long it takes, and what you are entitled to say about it afterward. Both are worth understanding before you spend money or time on either, and the difference is easier to see than most people assume.',
    ],
    keyPoints: [
      'The USA Today name covers two different things, a newsroom and a contributor program, and careful readers can tell them apart.',
      'Newsroom coverage is an editorial decision, which means no agency, ours included, can promise it to you.',
      'The contributor route is genuinely more open, but describe what you got accurately or it costs you more than it buys.',
      'Write for someone outside your industry who has never heard of you; that single constraint shapes the whole piece.',
      "Check the byline, the section and any label on the page before assuming what a competitor's placement actually was.",
    ],
    sections: [
      {
        heading: 'Two things share one masthead',
        paragraphs: [
          'USA Today is a national general-interest newspaper and website — news, money, sports, travel, life — staffed by reporters and editors making ordinary editorial decisions about what runs. Alongside that newsroom, the title carries contributor and partner content produced under different arrangements. Both sit on the same domain with the same search visibility, which is a large part of why the name gets chased in the first place.',
          'The distinction matters because the people you are trying to impress will look. A prospective client, an investor, a journalist deciding whether to quote you next time — any of them can click through and see a byline, a section and, often, a label. There is nothing wrong with either route. There is something wrong with blurring them.',
          'So decide which one you want before you spend anything. A reported newsroom story is earned and cannot be scheduled. A contributor piece is a route you can work toward with a well-built article and realistic expectations about standards and timing. Different goals, different work, different sentences afterward.',
        ],
      },
      {
        heading: 'How to tell the routes apart',
        paragraphs: [
          'Before you pay anyone for a USA Today placement, go and read one. Find a piece somebody in your industry is bragging about and look at the page itself rather than the screenshot they posted on LinkedIn. Two minutes of reading tells you more about what you are being sold than an hour on a sales call.',
          'Apply the same test to your own piece once it runs, then use the honest description in your bio and your pitches. It sounds like a small thing. It is the difference between a claim that survives a follow-up question and one that quietly does not, in front of the exact person you needed to convince.',
        ],
        list: [
          'The byline: a staff reporter, a named contributor or a company name each say something different about how the piece came to exist.',
          'The section and the URL path, which often state plainly what kind of content you are looking at.',
          'Any label near the headline or at the foot of the article marking it as sponsored, partner or contributor content.',
          'The sourcing: reported stories usually quote people other than the subject, while a contributed piece often quotes only its author.',
          'The author page, which shows whether this writer files regularly for the title or appeared exactly once.',
        ],
      },
      {
        heading: 'Write for a stranger',
        paragraphs: [
          'A national general-interest audience is the constraint that shapes everything else. These readers are not in your industry, have never heard of you, and owe you nothing past the first sentence. The language that impresses your peers — acronyms, category names, internal shorthand — reads as noise to them. Every sentence has to make sense cold, without context you are not there to supply.',
          'There is a simple test. Give the draft to someone outside your field and ask what it was about. If they answer with your job title, the piece is about you and it is not ready. If they answer with an idea, a warning, or a thing they did not know last week, you have something worth a national page.',
          'What usually survives that translation is small and concrete: a decision that turned out badly and what it taught you, a change in your field that customers will feel before they understand it, or a thing everyone in your industry still believes that stopped being true a few years ago.',
        ],
      },
      {
        heading: 'Angles that carry nationally',
        paragraphs: [
          'Announcements do not travel. A new office, a rebrand, a funding round, an anniversary — these matter enormously to you and not at all to a stranger two states away. The angles that work are the ones where the reader is the beneficiary rather than the audience, and where your expertise is the reason the advice is worth trusting.',
          'That last item deserves a warning. Invented or half-remembered statistics are the fastest way to lose an editor, and the fastest way to embarrass yourself when somebody checks. If a sentence only works with a number you cannot source, rewrite the sentence. The argument is nearly always stronger without it.',
        ],
        list: [
          'A change in your field that people outside it will feel in their own money, health, home or work.',
          'A mistake that cost you something real, described specifically enough that a reader can avoid making it.',
          'A seasonal or calendar hook, where your expertise happens to be what people are already searching for that month.',
          'A pattern you see across your own clients that a reader can test against their own situation.',
          'Data you collected yourself and can actually show, never a figure you half-remember from a report you cannot name.',
        ],
      },
      {
        heading: 'What the article does afterward',
        paragraphs: [
          'The value is mostly not on publication day. It arrives six months later, when someone types your name before a call and finds a piece on a masthead they recognize sitting there among your own pages and your social profiles. That quiet moment is what the work was for, and it repeats every time somebody checks.',
          'So use it precisely. "I wrote a piece that ran in USA Today" and "USA Today profiled me" are different sentences, and only one is safe if the second is not true. The precise version holds up when someone asks a follow-up question, which is the only version worth having in the first place.',
          'Then keep going. One article on one masthead is a data point. A body of published work across several titles is a record, and the record is what changes how people treat your name — slowly, in a way a single logo on a website never does.',
        ],
      },
    ],
    realityCheck: 'USA Today is reachable, but not on demand. A reported newsroom story is an editorial decision, and no agency — ours included — can promise you one or name the date it will run. The contributor route is genuinely more open, though it still has standards and a timeline nobody outside the building controls. What you can control is the story, the quality of the writing, and the accuracy of how you describe the result.',
    faqs: [
      { question: 'Is contributor content in USA Today worth having?', answer: 'For what it does, yes. It is a real, permanent, searchable article on a domain people recognize, and it works every time someone looks you up. For what some buyers imagine it is, no. It does not carry the weight of a reported story with journalists or investors, and implying otherwise costs more credibility than the placement buys.' },
      { question: 'Can I approach USA Today on my own?', answer: 'Yes, and some people should. Read the section you are aiming at until you know its shape, use whatever contact or submission route the site publishes, and keep the pitch to a few lines with the angle at the top. Most pitches fail on the angle rather than on access, and that is not a problem money solves.' },
      { question: 'How long does this take?', answer: "If the target is the newsroom, nobody can tell you honestly — that runs on the publication's clock, not yours. For placements we handle ourselves, most go live within a few weeks. Be careful with anyone naming a publication date before a word has been written, because the date is the part they do not control." },
    ],
  },
  {
    slug: 'how-to-get-featured-on-ap-news',
    intro: [
      'The question usually arrives in the wrong shape. People ask about AP the way they would ask about a magazine, and the answer is that there is nothing to submit to. The Associated Press is a wire service: its journalists report, verify, and move stories out to the newsrooms that carry them.',
      'That is not a dead end, only a different job. The work is becoming the kind of source a reporter can use on deadline, on a subject they are already covering. Below is that job described plainly, including the slow parts and the part where it may never happen at all.',
    ],
    keyPoints: [
      'AP is a news cooperative rather than a publisher you can submit to; there is no contributor program to join.',
      'You do not get featured on a wire, you get quoted, because a reporter needed someone who knew the answer.',
      'Paid press-release distribution is a different product from AP journalism, and a screenshot hides the difference completely.',
      'Reporters on deadline choose sources they can verify in minutes, which is mostly a documentation problem you can fix.',
      'Answer in short attributable sentences, return calls fast, and say plainly what you do not know.',
    ],
    sections: [
      {
        heading: 'What a wire actually does',
        paragraphs: [
          'The Associated Press is a not-for-profit news cooperative. Its journalists report stories, verify them, and move them to member and subscriber newsrooms around the world, which is why a single AP story can appear in hundreds of papers on the same morning. Its own site is one surface among many, not the destination the whole operation exists to fill.',
          'Its sourcing standards are strict and publicly documented. Reporters attribute, corroborate and check before anything runs, and nothing runs because a company would like it to. That is inconvenient if you are shopping for a logo. It is also the entire reason a wire mention carries weight on the day you finally have one.',
          'Which leads to the first honest thing to say. There is no submissions queue, no contributor program, and no arrangement available for purchase. Anyone offering you an AP feature as a deliverable is either describing paid distribution or describing something that does not exist. Ask which, and listen carefully to how the answer is worded.',
        ],
      },
      {
        heading: 'Be the source, not the subject',
        paragraphs: [
          'Most people asking about AP want to be written about. Wire reporters are almost never looking for someone to write about. They are working a story that already exists — a court ruling, a recall, a rate change, a storm, a rule taking effect next month — and they need somebody who can explain one specific piece of it accurately, today.',
          'That is a smaller and far more achievable target than a profile, and it changes what you prepare. Nobody needs your founding story. They need to know you are a practicing attorney in the state where the ruling landed, or an operator who has actually run the kind of facility now under scrutiny, and that you will say something clear on the record.',
          'So pick the two or three subjects where you genuinely are one of the people who knows. Narrow beats broad here. "Small business owner" is not a subject. "What a change in payment terms does to a fifteen-person distributor" is, and the narrower it gets the more obvious you become when that story comes around.',
        ],
      },
      {
        heading: 'Make yourself easy to verify',
        paragraphs: [
          "On deadline, a reporter's real constraint is time. Given two possible sources, the one who can be confirmed quickly gets the call, and the one who cannot is skipped without a second thought. Most of what stands between you and being quoted anywhere is not charisma or connections. It is documentation you have simply never put in one place.",
          'None of this is glamorous and all of it is inside your control this week. It pays off far beyond the wire, too, because every other journalist, podcast booker and conference organizer runs the same quick check before committing to an unfamiliar name — and most of them give up just as quickly when it comes back thin.',
        ],
        list: [
          'A page on your own site with your full name, exact title, credentials and licensure, written plainly rather than as marketing copy.',
          'The same title everywhere — site, profiles, bio lines — so nothing looks inconsistent under a two-minute check.',
          'Prior published work a reporter can read to see how you handle a question and whether you overstate things.',
          'A phone number a person actually answers, plus a line about the hours you are genuinely reachable.',
          'Anything a third party can confirm: registration numbers, board membership, bar admission, published research, court records.',
        ],
      },
      {
        heading: 'Answer the way a wire prints',
        paragraphs: [
          'Reporters working against a clock need sentences they can lift whole. That means short, complete, attributable statements, without three hedging clauses stacked on the front. It also means dropping the marketing register entirely — no solutions, no passionate about, no company adjectives. Say the thing, in the words an ordinary person would use to say it.',
          'Two habits matter more than any media training. Return the call fast, because the story is moving whether or not you feel ready. And when you do not know something, say so and point to the person or document that does. The source who does that once tends to be the source who gets called next time.',
          'Be clear about what you are agreeing to before you speak. If a conversation is on the record, everything in it can be printed with your name attached, which is fine provided you meant to say it. Assume you are on the record unless you have agreed something different in advance, and never assume a friendly tone changes that.',
        ],
      },
      {
        heading: 'Where the confusion starts',
        paragraphs: [
          'A great deal of the "as seen on AP" material floating around comes from paid press-release distribution rather than AP journalism. Those are different products, with different prices and different meanings, and the difference is invisible in a screenshot — which is precisely why screenshots are what gets shown to you on the sales call.',
          "Check any link before you buy another like it. Is there a journalist's byline on the piece? Does the page carry a label describing it as a press release or sponsored content? Does it read like reporting, with independent voices in it, or like an announcement written by the company it happens to be about?",
          'Paid distribution is not worthless. It has real uses for regulatory notices, financial announcements and getting a fact onto the public record where it can be cited later. It simply is not editorial coverage, and any buyer who spends thirty seconds looking will know. Selling it as the other thing is where agencies lose people permanently.',
        ],
      },
      {
        heading: 'What to do meanwhile',
        paragraphs: [
          'Preparation only pays off when a story in your field breaks, and you do not control when that happens. So build the published record in the meantime, at the trade titles and general outlets where you can actually be published, because prior coverage is part of how a reporter decides an unfamiliar name is safe to quote at all.',
          'Watch your own field the way a reporter does. When a rule changes or a case lands, that is the week to be reachable and to have something specific to say about it. Most people surface two weeks later, which is roughly two weeks after anybody needed to hear from them.',
        ],
      },
    ],
    realityCheck: 'Nobody can place you on AP. Not us, not anyone — those decisions belong to its journalists, and that is the point of a wire. Most people who prepare for this properly are never quoted by it, and that is a normal outcome rather than a failed campaign. The preparation is still worth doing, because being checkable and reachable is exactly what gets you quoted everywhere else.',
    faqs: [
      { question: 'Can a PR agency get me on AP News?', answer: 'No, and how an agency answers that question tells you most of what you need to know about it. What an agency can honestly do is prepare you as a source, put your name forward on stories where you genuinely belong, and build the published record that makes you easier to trust. The decision stays with the newsroom.' },
      { question: 'My press release appeared on apnews.com. Does that count?', answer: "It counts as distribution, which is a real thing with real uses. It is not reported coverage. Look at the page itself: if there is no journalist's byline, no independent sources, and a label marking it as a release, what you have is your own words republished. Useful in its place, and worth describing accurately." },
      { question: 'What should I aim at instead?', answer: 'The outlets where you can actually be published, starting now. A body of permanent, searchable articles does most of the job people want from AP anyway — it reassures buyers, answers due diligence, and gives a journalist something to check. It also makes any later approach easier, because you are no longer an unfamiliar name.' },
    ],
  },
  {
    slug: 'how-to-get-featured-in-la-wire',
    intro: [
      'Most people arrive at a title like this after being told no somewhere larger, and treat it as a consolation prize. That is the wrong frame. A reachable outlet does one job well: it puts an accurate, permanent article where people look when they check you out, which is what most buyers are quietly doing anyway.',
      'The trade is honest enough. You are not buying the weight of a national newsroom and should not talk as though you were. You are buying a real published piece in a title with a regional identity, developed well enough to hold up when somebody reads past the headline.',
    ],
    keyPoints: [
      'LA Wire sits in the tier of digital titles that run founder profiles and expert commentary, not investigative reporting.',
      'Read several recent pieces before writing anything; the format on the page tells you more than any pitching advice.',
      'A regional angle has to be true — where you operate, who you serve, what you see happening here first.',
      "The test for a draft is whether a competitor's customer would get something out of reading it.",
      'Reachable is not the same as guaranteed, and nobody can honestly hand you a publication date in advance.',
    ],
    sections: [
      {
        heading: 'Where a title like this fits',
        paragraphs: [
          'Digital business and lifestyle titles that publish founder profiles, interviews and expert commentary occupy a real tier of the media landscape. They are not national newsrooms with investigative desks, and pretending otherwise helps nobody. What they are is reachable — and if your goal is having something accurate and permanent under your name, reachable is the quality that actually does the work.',
          'Most buying decisions in professional services now include a search. Somebody hears your name, types it, and makes a quick judgment about whether you look like a real operation. What they find in that moment is mostly whatever you have published and whatever has been published about you. A feature in a title they recognize changes the shape of that page.',
          'The regional identity is part of the value rather than a limitation. A Los Angeles-facing title reaches people who care what happens in Los Angeles, which is a sharper audience than a broad national one if your clients, patients or customers are here. Reach and relevance are different purchases, and it is worth knowing which one you need.',
        ],
      },
      {
        heading: 'Read it before you pitch',
        paragraphs: [
          'Whatever anyone tells you about a publication, the publication itself is the better source. Spend twenty minutes with recent pieces and you will learn its format faster than from any guide, this one included. You are reading for shape rather than inspiration — what a finished, accepted piece looks like on the page.',
          'Then write something that would not look out of place among them. This sounds obvious and gets skipped almost universally. Most rejected pitches are rejected because they were shaped for a different publication entirely, or for no publication at all, and an editor can see that in the first two lines.',
        ],
        list: [
          'How long the pieces run, and whether they are narrative features, straight interviews or short expert commentary.',
          'Whether the subject is quoted throughout, or written about from the outside by someone else.',
          'How often a local angle appears, and how explicit it is when it does show up.',
          'What the headlines promise a reader: a lesson, a story, a warning, or a name they already know.',
          'Which industries appear repeatedly, which tells you where the readership actually sits.',
        ],
      },
      {
        heading: 'The Los Angeles part',
        paragraphs: [
          'A regional angle has to be true. It counts if you operate here, if your customers or patients are here, if the change you are describing shows up in this market before others, or if your industry is concentrated in this city. Those are real connections, and any one of them gives an editor a reason to care about your version of the story.',
          'It does not count if your only tie is a mailing address, a conference you once attended, or a client who happens to live nearby. Editors see the same thin geographic hook several times a week and it is transparent. If you have no genuine connection, a title matched to your actual region or industry will do more for exactly the same effort.',
          'Where the tie is real, make it specific. Naming the neighborhood, the permit process, the ordinance, the commute or what a lease costs here is what makes a piece feel observed rather than assembled from a template. Specificity is the cheapest credibility available to you, and almost nobody bothers to spend it.',
        ],
      },
      {
        heading: 'Build a piece worth running',
        paragraphs: [
          'Every weak founder story has the same spine: things were hard, I persevered, now we help clients succeed. Every good one has a decision in it. A specific choice, made at a particular moment, with something at stake and a consequence you can describe — that is a story. Everything else is a biography, and nobody reads those voluntarily.',
          "Give the reader something usable before you give them anything about yourself. A rule of thumb from your field, a mistake that is common and expensive, a way to tell a good vendor from a bad one. The test is whether a competitor's customer would benefit from reading it. If they would, an editor has a reason to run it.",
          'Keep every claim inside what you can support. No borrowed statistics, no vague percentages, and nothing beginning "studies show" unless you can name the study and link to it. An unsourced number is worse than no number at all, because it is the one thing a skeptical reader will actually go and check.',
        ],
      },
      {
        heading: 'What it does and does not do',
        paragraphs: [
          'What a placement here does: it puts a real article under your name where people look, and it stays there. It gives you something to send after a first meeting, a line for a bio, and a page that sits alongside your own site when somebody searches you. That is a genuine asset, and it does not expire.',
          'What it does not do: deliver a wave of traffic, substitute for a reported national feature, or make a weak offer strong. A row of logos with nothing behind them reads as bought, because it usually was. The article has to be worth reading on its own terms, or the logo starts working against you with exactly the people you wanted to impress.',
          'Used properly it is one entry in a record you are building deliberately, across titles that match your audience. That record is what changes how people treat your name — not any single placement, however good it looks in a screenshot. The compounding is the strategy; each piece is only a step in it.',
        ],
      },
    ],
    realityCheck: 'LA Wire is more reachable than a national newsroom, which is precisely its usefulness — but reachable is not the same as certain. An editor still decides, timing still moves, and nobody can honestly hand you a publication date before the story exists. It is also not a reported national feature and should never be described as one. Used plainly, it is a real article doing real work; oversold, it is the thing that makes a careful buyer suspicious.',
    faqs: [
      { question: 'Is this real press, or is it paid placement?', answer: 'It is a real, published article on a real title, which is what most people mean by press. It is not a reported story where a journalist independently investigates you. Titles that can be reached reliably generally involve an arrangement of some kind, and an honest agency will tell you plainly which applies to your piece before you commit.' },
      { question: 'Do I need to be based in Los Angeles?', answer: 'A genuine connection helps and a manufactured one hurts. If you operate here, serve people here, or work in an industry concentrated here, say so early and specifically. If none of that is true, your effort goes further at a title matched to your own region or your industry, and we would rather point you there than sell a poor fit.' },
      { question: 'Can I do this without an agency?', answer: 'Yes. Read the site, use whatever contact or submission route it publishes, and send a short pitch with the angle in the first two lines and a link to something you have written. Nothing here is hidden. What an agency mostly provides is story development, writing to editorial standard and follow-through, not secret access.' },
    ],
  },
  {
    slug: 'how-to-get-featured-in-us-reporter',
    intro: [
      'Most people arrive at this outlet sideways. They wanted a household name, heard an honest answer about how those decisions get made, and started looking at what is actually reachable this quarter. That is a reasonable way to end up here, and it is worth understanding what you are looking at.',
      'US Reporter runs profiles and business stories about people across the country — founders, operators, practitioners, the sort of subject a national desk would never make time for. Reachable does not mean automatic, and it does not mean the writing matters less. If anything, a wide-open outlet puts more weight on whether your story is worth reading at all.',
    ],
    keyPoints: [
      'US Reporter is a digital profile and business title, not a wire service or a national newspaper.',
      'A wide-remit outlet needs a narrow story — pick one decision, one number you can prove, one disagreement.',
      "The article's job is to survive a stranger checking you out, not to impress your peers.",
      'You can pitch this yourself; what you cannot skip is writing something an editor would want to publish.',
      'Nobody can promise you a placement here, and the timeline belongs to the publication, not to you.',
    ],
    sections: [
      {
        heading: 'What US Reporter Actually Is',
        paragraphs: [
          'US Reporter is a digital publication that covers business, entrepreneurship and public life in the United States, mostly through profiles and feature stories about individual people. Pieces carry a byline and a date, they sit in an archive, and they stay searchable afterward. It is not a wire service, it is not affiliated with a broadcast network, and the name should not be read as either.',
          'That places it in the same tier as the other reachable digital titles you have probably been offered — a real, permanent article under a masthead, rather than the reach and institutional weight of a legacy newsroom. Both things are worth having. They are not the same thing, and an agency that blurs the line has told you what kind of agency it is.',
          'The useful question is not how prestigious it is. It is what happens when somebody types your name into a search box after a referral, halfway through deciding whether to hire you. A substantial article in a national-sounding publication changes what that person finds. That is a modest, specific job, and this kind of outlet does it well.',
        ],
      },
      {
        heading: 'Why Breadth Demands a Narrow Story',
        paragraphs: [
          'An outlet with a wide remit will consider a physician, a contractor and a fintech founder in the same week. That sounds like good news. In practice it means nothing about the subject matter does the work for you — no editor is going to assume your industry is interesting, because the reader may not be in it.',
          'So the burden moves to you. Before anyone writes a word, you should be able to finish this sentence out loud: the interesting thing here is that I did this. If the blank fills with a job title, a launch date or a list of services, you do not have a story yet. You have a bio.',
        ],
        list: [
          'A decision that could have gone the other way, and what it cost you to make it.',
          'A number from your own business you are willing to have quoted and could defend.',
          'A belief about your field that a competent peer would argue with.',
          'A change you saw coming before your industry did, with the timeline to show it.',
        ],
      },
      {
        heading: 'Doing This Without an Agency',
        paragraphs: [
          "Nothing here requires hiring anyone. Find the publication's contact or contribution page, read a dozen recent pieces and notice what they have in common — length, tone, how much of the article is quotation, whether the subject's company gets named in the first paragraph. Then write something that would fit next to them, and send it with a two-line note about why the subject matters now.",
          "The part people underestimate is not the pitch. It is the writing and the follow-up — producing a piece that genuinely reads like the outlet's own work, then chasing it politely for weeks while running a business. That is most of what an agency sells. If you have the hours and the patience, keep them.",
        ],
      },
      {
        heading: 'What the Piece Does Afterward',
        paragraphs: [
          'A published article is an asset only if you use it. Put the link where a buyer will hit it — your site, your email signature, the proposal, the bio you send a podcast host. Mention it in the first call rather than hoping somebody stumbles across it. Coverage that nobody is pointed toward mostly sits there quietly doing nothing.',
          'It also works in the background. Search results for your name reorganize themselves around whatever substantial pages exist about you, and the systems that now summarize people tend to lean on published, attributable articles. A profile in a real publication gives those systems something to find that is not your own marketing copy.',
        ],
      },
      {
        heading: 'Where It Fits in a Plan',
        paragraphs: [
          'One profile rarely changes a business. What it does is remove a specific objection — the quiet doubt of a prospect who found nothing about you except a website you wrote yourself. Treat it as the first credible thing in a record rather than the finish line, and be honest with yourself about which outlets you actually need next.',
          'If your buyers are local, a regional title or a trade publication may do more for you than a national-sounding one. If they are investors, a finance surface matters more. The right answer depends on who has to be convinced, and that question is worth ten minutes before you spend anything at all.',
        ],
      },
    ],
    realityCheck: 'Nobody can guarantee you a place here, ourselves included, and a guarantee is the fastest way to spot an agency worth avoiding. US Reporter is on the reachable side of the list rather than the aspirational one — that is the honest framing. What you get is a permanent, searchable article under a business masthead. What you do not get is the reach of a legacy newsroom, a ranking, or an implied endorsement of anything you sell.',
    faqs: [
      { question: 'Is US Reporter a real publication?', answer: 'Yes — a digital news and profile outlet with bylined, dated articles that stay online and searchable. It is not a wire service or a national newspaper, and the name invites that confusion, so it is worth saying plainly. Judge it as what it is: a credible home for a substantial article about you, with a readership smaller than the name suggests.' },
      { question: 'How long does it take to get a piece published?', answer: "Most of the placements we control go live within a few weeks, and the variable is usually how fast your questionnaire comes back and how many rounds of edits you want. Pitching cold on your own is slower and less predictable, because you are waiting on somebody else's inbox. Either way, treat a firm date from anyone as a warning sign." },
      { question: 'Will a feature here help me rank for my own name?', answer: 'Often it helps, and we will not put a number on it. A substantial article on an established domain gives search engines something else to show for your name, which matters most when the current results are thin. This is not an SEO service, it will not outrank a determined competitor by itself, and anyone promising you a position is guessing.' },
    ],
  },
  {
    slug: 'how-to-get-featured-in-digital-journal',
    intro: [
      'Two companies send out the same piece of news in the same week. One reads like a technology story — what changed, for whom, and why now. The other reads like a press release with a founder quote bolted to the end. Only one of them has a chance at a title like this, and the difference has almost nothing to do with who they know.',
      'Digital Journal covers technology, business, science and the people building things in those fields. It has been online a long time — long enough to have watched a lot of press releases arrive. What follows is how to tell whether you have something it would run, and what to do if you do not.',
    ],
    keyPoints: [
      'Digital Journal is a technology and business title, so your story needs a technology or industry angle.',
      'An announcement is not news; the change your announcement causes for somebody else might be.',
      'Timing carries more weight here than polish — tie your angle to something already moving.',
      'Non-tech businesses fit when the story is about the tooling, method or data behind the work.',
      'An established domain is worth more to you than a new one, which is also why the bar is real.',
    ],
    sections: [
      {
        heading: 'Where Digital Journal Sits',
        paragraphs: [
          'Digital Journal is a digital publication covering technology, business, science and innovation, with a long history online and an archive to match. It publishes news, analysis and interview features about companies and the people running them. The center of gravity is what is being built and what it changes — not who somebody is and how hard they worked to get there.',
          'That matters because it rules out the story most founders instinctively want to tell. A personal narrative can carry a profile title. Here it needs a spine — a product, a method, a dataset, a shift in how an industry does something. The person is the way into the story rather than the story itself.',
          'Content from established digital titles also travels, because indexes and aggregators pick up news from publications already in their networks. That is a real effect and a secondary one. Judge the placement on the article itself, sitting on a domain that has been publishing for years, and treat anything downstream of it as a bonus rather than the plan.',
        ],
      },
      {
        heading: 'The Announcement Problem',
        paragraphs: [
          'Most pitches fail on the same sentence. We are launching this is a fact about your company, and a fact about your company is not news to anybody outside it. The version that works names the change: who can now do something they could not do last year, what it costs them, and what breaks in the old way of doing it.',
          "Try rewriting your announcement as a headline that does not contain your company's name. If nothing survives, the story is not ready — that is useful information rather than a failure. It usually means you need to go find the effect your product has had on somebody else, and that takes a phone call to a customer rather than a better adjective.",
        ],
        list: [
          'Launch news works when the launch answers a problem readers already recognize from their own work.',
          'Funding is a weak angle alone; what the money buys and changes is stronger.',
          'Data from your own operations beats opinion, provided you can explain how you collected it.',
          'Commentary works when a story is already running and you can add something specific.',
        ],
      },
      {
        heading: 'If You Are Not a Tech Company',
        paragraphs: [
          'Plenty of subjects who belong here do not think of themselves as technology businesses. A logistics operator, a clinic, a law firm and a manufacturer all run on systems, and the systems are the story. What did you automate, and what did it break? Which tool did you adopt early, and what did your peers say about it at the time?',
          'The test is whether somebody in a completely different industry would learn something transferable. A dentist who rebuilt scheduling around a model of no-show behavior has a story about operations. The same dentist describing gentle, patient-focused care has an advertisement. Same practice, same person, two completely different documents.',
        ],
      },
      {
        heading: 'Timing Beats Polish',
        paragraphs: [
          'A good piece sent three weeks after the moment has passed is worth less than a decent piece sent while the subject is live. Watch what your field is arguing about — a regulation, an outage, a price move, a technology everyone suddenly has an opinion about — and have your view written down before you need it.',
          "This is the part that defeats people working alone, and it is worth being honest about why. Monitoring takes attention you are already spending on the business, and the window is usually days. Our team watches the stories moving in a client's field and puts them forward while they are still moving, which is a different job from writing one good article a quarter.",
        ],
      },
      {
        heading: 'What to Have Ready Before You Pitch',
        paragraphs: [
          'Whether you do this yourself or hire it out, the same materials get you further. Editors decide quickly whether you are a safe subject, and most of that decision is about whether your claims can be checked. Assemble the evidence first and the writing gets easier; assemble it afterward and you spend the draft softening sentences you should have been able to support.',
          'Keep it plain. Nobody needs a deck for this. A page of specifics, a named contact who can confirm the important claim, and one clear line about what you are actually asserting will carry more weight than a polished narrative with nothing underneath. If a claim cannot be supported, cut it rather than dressing it up.',
        ],
        list: [
          'The specific change, in one sentence, without your company name in it.',
          'Two or three numbers from your own records that you would let a stranger quote.',
          'A customer or partner who will confirm the claim if somebody calls them.',
          'Dates: when it happened, when it goes live, what makes now the moment.',
          'A short bio that explains why you are the person making this claim.',
        ],
      },
    ],
    realityCheck: 'Digital Journal is more reachable than a national newsroom and less reachable than the profile titles built around founder stories. We place clients in outlets like this rather than only pitching toward them, and we still will not promise it — the decision is not ours to make. Nor does a placement here make you a technology company, move your rankings, or mean much on its own. It is one credible article on an established title. That is worth having, and it is not a strategy.',
    faqs: [
      { question: 'Do I need to be in technology to be covered?', answer: "No, but you need a technology or systems angle. The publication's interest is in how things work and what is changing, so a clinic, a builder or a law firm can fit when the story is about the method, the tooling or the data behind the work. A general profile of your career is a poor match here, and we would point that story somewhere else." },
      { question: 'Is this the same as putting out a press release?', answer: "No, and the difference is worth being clear about. Paid distribution pushes an announcement onto commercial wire feeds; an article on a publication is editorial content written for that outlet's readers. Both have uses. Only one reads like journalism to somebody checking you out, and we will always tell you which one a given placement is before you agree to it." },
      { question: 'Can I write the article myself?', answer: 'You can, and some people should. If you write well, know the outlet and have time to chase the follow-up, keep your money. What most people find is that drafting is the easy part and persistence is not. When we do it, you complete a short questionnaire, our editorial team writes the piece, revisions are unlimited, and nothing publishes without your sign-off.' },
    ],
  },
  {
    slug: 'how-to-get-featured-in-international-business-times',
    intro: [
      'The stories that die at a business desk usually die for the same reason. They are true, well written and completely unverifiable by anyone who does not already work at your company. A business news reader is a stranger by default, and a business news editor reads on behalf of that stranger.',
      "Int'l Business Times reports markets, companies, economics and technology for readers across several regions, and it sits a clear step above the founder-profile titles most people are offered first. That step is made of evidence. Everything below is about assembling enough of it that your story survives contact with someone who has no particular reason to believe you.",
    ],
    keyPoints: [
      'The bar here is evidence a stranger can check, not a well-told personal narrative.',
      'Commentary tied to a story already running is the most realistic door for most people.',
      'Regional editions mean the same story can matter in one market and not another.',
      'Funding and launches are weak angles alone; consequences, costs and mechanisms are strong ones.',
      'No agency controls what a business newsroom publishes, and a guarantee here should end the conversation.',
    ],
    sections: [
      {
        heading: 'What a Business Desk Reads For',
        paragraphs: [
          "Business news is organized around consequence. Something happened, and it costs somebody money, changes somebody's behavior, or signals a shift in how a market works. Your company is the vehicle for that, not the subject. The clearest way to test a story is to write the first paragraph without naming yourself and see whether anything is left that a reader would finish.",
          'This is why a personal profile struggles here even when the person is genuinely impressive. Perseverance is not a market event. A story about how you built the company can absolutely run somewhere and do real work for you — it belongs at a title built for it, and pretending otherwise wastes months you could have spent building the harder story.',
        ],
      },
      {
        heading: 'Evidence That Actually Travels',
        paragraphs: [
          'Editors weigh claims by how easily they can be checked, and there is a rough hierarchy to it. Filings, published research, regulatory records and audited figures sit at the top. Data from your own operations sits in the middle, and can be strong when you explain how it was collected. Your own opinion about your market sits at the bottom, unless you have given someone a reason to believe you.',
          'Assemble what you have before you decide what to pitch. Founders often find they are sitting on the strongest asset in the room — internal data nobody else holds, describing a change in a market other people are only guessing about. That is worth more than any amount of narrative, and it is also the thing you should be most careful about publishing.',
        ],
        list: [
          'Anonymized operating data with a plain explanation of the sample and time period.',
          'A pattern you can show across customers, not one flattering anecdote.',
          'Third-party records — filings, registrations, published research — that corroborate the claim.',
          'A named person outside your company willing to confirm what you say.',
        ],
      },
      {
        heading: 'Commentary Is the Realistic Door',
        paragraphs: [
          'For most people the way into a business title is not a feature about them. It is being useful, quickly, about something already in the news — a rate decision, a regulatory change, an outage, a sector under visible pressure. You are supplying a piece of a story a journalist is already writing, which is a far smaller ask than commissioning a new one from scratch.',
          'That requires two things people rarely have ready. A clear, narrow area you can be quoted on, narrow enough that somebody would think of you specifically. And the ability to respond in hours rather than days. Write the position down before the news breaks. Once it breaks, whoever answers first with something specific tends to be whoever gets used.',
        ],
      },
      {
        heading: 'Editions, Regions and Relevance',
        paragraphs: [
          'The publication serves readers in different regions, and relevance is regional. A story about US healthcare pricing means something in one market and very little in another; a currency move matters most where the currency is spent. Before pitching, decide which market your story is actually about, and be able to say why it matters to a reader who lives there.',
          'This also cuts against a habit worth dropping — using the word global as a substitute for reach. Being available internationally is not an international story. Operating in three markets and being able to describe how the same problem appears differently in each one is a story, and it is one a business reader will finish.',
        ],
      },
      {
        heading: 'When the Answer Is No',
        paragraphs: [
          'A pass here is a normal outcome, not a verdict on your business. The useful response is to ask what was missing — usually it is evidence, timing or relevance rather than writing — and then go get it. Some of that takes a quarter to produce. Some of it takes a customer conversation you have been putting off for six months.',
          'In the meantime, publish where you can. A body of real, permanent articles gives an editor something to check when your name arrives unfamiliar, and gives your buyers something to find in the interim. Coverage compounds. The second pitch is easier than the first, for reasons that have nothing to do with who you know.',
        ],
      },
    ],
    realityCheck: "We do not guarantee Int'l Business Times, and we will not take money on the pretense that we can. Editorial judgment belongs to the publication. What we can tell you honestly, before you spend anything, is whether your story has the substance a business news readership requires — and if it does not yet, what would have to change. Where the answer is no, we say so and place the story where it will actually run. That is a normal outcome at this level.",
    faqs: [
      { question: 'How is this different from a wire release that gets picked up?', answer: "Paid distribution puts an announcement onto commercial newswire feeds, where it may appear on partner sites automatically. That is a distribution product. Editorial coverage means a publication decided your story was worth its readers' time. Both can be useful, and they are not interchangeable — anyone showing you a syndicated release as proof of a business news placement is hoping you will not check." },
      { question: 'I have data nobody else has. How should I use it?', answer: 'Carefully, and probably not all at once. Decide first what you are willing to have quoted permanently, then check it against your contracts and privacy obligations before it leaves the building. Anonymize it, describe the sample plainly, and be ready to explain your method. Data that cannot survive a follow-up question does more damage than no data at all.' },
      { question: 'What should I do if my story is not ready for this yet?', answer: 'Build the record somewhere it can run now, and go find what is missing. That usually means a specific result you can point to, a number you can defend, or a position on something your industry is currently arguing about. In our experience the gap is rarely writing quality. We would rather tell you which it is than bill you for a pitch we do not believe in.' },
    ],
  },
  {
    slug: 'how-much-does-a-pr-agency-cost',
    intro: [
      'Two agencies can quote the same client and land a long way apart, and neither one is necessarily wrong. The phrase covers a crisis firm, a two-person boutique, a placement shop and a full communications department for hire — all charging for different work.',
      "What follows is how the money is actually structured, what sits inside a quote, and the handful of questions that turn three unlike proposals into a real comparison. We price our own work to a client's goals rather than a rate card, so this is written from the inside of that conversation. You should be able to use it whether or not you ever talk to us.",
    ],
    keyPoints: [
      "The words 'PR agency' cover four or five different businesses, so compare the work being sold before comparing the price.",
      'Retainers buy capacity and attention; project and per-placement work buys a defined deliverable. Neither is cheaper — they fail differently.',
      'Most of the cost is senior time: finding the angle, writing to editorial standard, and doing the follow-up nobody enjoys.',
      'A quote that names a selective title as certain is not a better deal — it is a different product.',
      'Ask what happens in a month with no coverage; the answer separates an agency worth keeping from one worth leaving.',
    ],
    sections: [
      {
        heading: 'Why two quotes look nothing alike',
        paragraphs: [
          'The label is doing too much work. A firm that handles crisis communications for a listed company, a boutique that books podcast tours, an agency that writes and places articles, and a freelancer with a strong contact list will all answer to the same title. Their costs are structured differently because their work is. Before you compare two numbers, make each proposal say plainly what will be produced and who produces it.',
          "Scope moves the number more than anything else. One article written and placed is a different job from a year of media relations, an executive's public profile, and a phone that gets answered at nine on a Sunday. Seniority moves it too. The person who finds your angle and makes the call is the expensive part, and junior time on a list of email addresses is not the same service at a lower price.",
          'Then there is what the agency is carrying. A firm with an in-house editorial team is paying writers whether or not you call this month. A solo consultant is not. Neither structure is better in the abstract; they simply break in different places. The larger shop absorbs a difficult month more easily, while the solo operator gives you the person you hired rather than whoever is free.',
        ],
      },
      {
        heading: 'What the money actually buys',
        paragraphs: [
          'Strip an engagement down and most of the cost is judgment and time. Someone has to work out what about your business is interesting to a stranger, which is harder than it sounds and is the step most people skip. Someone has to write the piece to a standard an editor will accept. Someone has to send it, chase it, and read the silence correctly.',
          'The rest is the machinery around that. Research on which publications your buyers actually read. Revisions, which are cheap to promise and expensive to honor. Approvals, fact-checking, and the back-and-forth that keeps your name attached to something accurate. Reporting afterward, so you know what ran and where. None of it is glamorous and all of it is billable somewhere in the number you are quoted.',
        ],
        list: [
          'Story development — the angle, the proof points, and the reason a reader who has never heard of you keeps reading.',
          'Editorial writing and editing, done by people who write for publication rather than for a landing page.',
          'Outlet research: which titles your buyers read, and which of those are realistically reachable for you.',
          'Pitching and follow-up, including the weeks when nothing comes back and someone still has to keep going.',
          "Revisions and approvals until the facts and the voice are yours, not a template's.",
          'Coordination after publication — links, assets, and a straight account of what ran where.',
        ],
      },
      {
        heading: 'Retainer, project, or per placement',
        paragraphs: [
          'Three shapes cover most of the market. A monthly retainer buys ongoing capacity: a team that knows your business, a pipeline of pitches, and someone to call when something happens. A project fee buys a defined piece of work with a start and an end — a launch, a funding announcement, a repositioning. Per-placement pricing buys a specific article on a specific type of outlet.',
          "They fail in different ways, which is the useful thing to know. Retainers fail quietly — you pay for months, activity happens, and little is published. Project fees fail at the edges, when the work you assumed was included turns out to be extra. Per-placement pricing fails when the outlet is vague, so 'a major publication' has to be defined before you agree to anything.",
          'Match the shape to your situation rather than your preference. If your business generates news constantly, a retainer earns its keep. If you have one story and a reason to tell it now, paying monthly for a year is an expensive way to get one article. We run both — ongoing packages and single features — because clients arrive with both problems.',
        ],
      },
      {
        heading: 'Questions that make quotes comparable',
        paragraphs: [
          'Most proposals are written to be flattering rather than comparable. You can fix that with a short list of questions asked identically of everyone. The point is not to catch anybody out. It is to convert three documents that describe different things into three answers to the same question, so the number at the bottom finally means something.',
          'The last one does more than the rest. Anyone can describe a process. Live URLs on real publications, for businesses that resemble yours, tell you what the money produced in practice — the type of outlet, the quality of the writing, and whether the pieces are still online. If an agency cannot produce them, that is your answer, and it is a cheap one to get.',
        ],
        list: [
          'What is the deliverable, in nouns? Articles, pitches, interviews, or hours — vague verbs hide thin scopes.',
          'Which named outlets can you place me in, and which can you only pitch toward?',
          'Who writes the piece, who edits it, and how many revisions do I get?',
          'What happens in a month where nothing is published — what do I receive?',
          'Is any of this paid or sponsored placement, and will the article say so?',
          'Can you show me three live links from the past year for clients like me?',
        ],
      },
      {
        heading: 'Cheap, expensive and mispriced',
        paragraphs: [
          'A low monthly fee is not automatically a bad deal, but it constrains what can be inside it. Senior time is the cost, so a small number usually means less of it — a junior on a template, a wider list, a thinner story. Sometimes that is fine for what you need. It is only a problem when you were told you were buying something else.',
          'A high fee proves nothing on its own either. Offices, awards and a famous client list are paid for out of your retainer, and none of them appear in your search results. Judge the price against the work described and the evidence attached to it. Two quotes far apart can both be honest; two quotes close together can hide completely different amounts of effort.',
          'The one pattern worth treating as a red flag is certainty about a selective title. If a proposal promises a named, editorially selective publication for a fixed fee, the fee is buying something other than an editorial decision — and you should ask precisely what, and where the article will live.',
        ],
      },
      {
        heading: 'Setting a budget you can defend',
        paragraphs: [
          'Work backward from what the coverage has to do. If a single new client is worth a great deal to you and buyers routinely search your name before a first call, the arithmetic is straightforward even without precise numbers. If your customers buy on price at a shelf and never look you up, press is a poor use of the same money, and we would tell you so.',
          'Budget for the whole thing, not the placement alone. An article that points at a weak website, an unclaimed search result or a bio that contradicts it wastes most of its effect. Leave room to fix what the coverage sends people toward. That is often the difference between a placement that reads well and one that changes what happens on your next sales call.',
        ],
      },
    ],
    realityCheck: 'We quote to goals rather than publish a rate card, and that is a real limitation for anyone comparison shopping in a browser tab. What we will not do is invent a range to fill the gap. Two clients in the same industry can be quoted very differently because the outlets, the volume and the writing involved are different. If you want a number, tell us what you want the coverage to do and we will price it.',
    faqs: [
      { question: 'Why will nobody put prices on their website?', answer: 'Partly because the work varies so much that a published figure would mislead more people than it helped, and partly because agencies would rather have the conversation. Both are true. The fair test is not whether a price is public but whether you can get a specific, written number quickly, tied to a specific deliverable, before you commit to anything.' },
      { question: 'Is a monthly retainer better value than paying per feature?', answer: 'It depends entirely on how often you have something to say. Constant news, product launches and executive commentary justify ongoing capacity. One story told once does not — you would be funding a team through months when there is nothing to place. Ask both providers to describe a slow month honestly, then decide which answer you could live with.' },
      { question: 'What should I expect to be included at any price?', answer: 'A named person responsible for your account, a written scope, editorial writing you did not have to do yourself, approval before anything publishes, and live links when it does. Those are baseline, not premium. We also give unlimited revisions and reply within 24 hours, and you should ask any agency you are considering to state their equivalent in writing.' },
    ],
  },
  {
    slug: 'how-much-does-it-cost-to-get-featured',
    intro: [
      'The answers you get to this question rarely resemble each other, and the reason is that people are describing different objects. A staff-reported profile, a bylined contributor article, a sponsored post and a listing on a site nobody reads all get called a feature. Only one of those is expensive because it is hard.',
      'So the useful version of the question is narrower: what am I buying, where will it live, and who decided it should run. Answer those three and the price stops being mysterious. Below is what sits inside the cost of a single feature, what pushes it up or down, and how to tell an underpriced article from a cheap one.',
    ],
    keyPoints: [
      'Four very different things get called a feature, and their prices differ because the work behind them differs.',
      "Most of a single feature's cost is the angle and the writing, not the outlet's name at the top.",
      'Reach and relevance are priced separately; a niche trade title often does more for a specialist than a national one.',
      'Before paying, ask for the exact URL pattern the piece will live on and whether it carries a sponsored label.',
      'A very cheap feature is usually a real cost — a page that ages badly and does nothing in a due-diligence search.',
    ],
    sections: [
      {
        heading: 'Four things called a feature',
        paragraphs: [
          "A reported story is written by a journalist who decided you were relevant to something they were already working on. Nobody sells that; you can only become worth calling. A contributor or bylined article is written by or for the subject and published under a title's rules, which is where most agency work sits. Both are real articles on real publications, and they are not the same thing.",
          'Then there is sponsored or branded content, which is advertising and is normally labeled as such. It has legitimate uses and it should never be described to you as editorial. Last is the bottom of the market: template pages on sites built to sell placements, with no readership and often no lasting index. That fourth category is why the price range on this question looks absurd.',
          'Work out which of the four a quote refers to before you compare it with anything. The question that settles it is simple and slightly awkward to ask, which is exactly why it works: who decides whether this runs, and what happens to my money if they say no.',
        ],
      },
      {
        heading: 'What sits inside the price',
        paragraphs: [
          'Almost all of it is work done before anything is published. Someone has to find the angle — the reason a stranger would read past the first line — which usually takes a conversation and a few false starts. Someone writes the draft to a standard that will survive an editor. Someone edits it, checks the facts against what you said, and rewrites the opening more times than you would expect.',
          'The placement itself is the smallest visible part and the hardest to price honestly. Where an outlet is reachable, the cost reflects the work of getting a piece accepted and live. Where it is not, no fee changes that, and any quote implying otherwise is pricing something it cannot deliver. Revisions sit in here too — unlimited sounds generous until you count the hours it can consume.',
        ],
      },
      {
        heading: 'Why outlets are not priced alike',
        paragraphs: [
          'Two forces pull in opposite directions. Reach is what a large national surface gives you: a lot of people who have never heard of you, most of whom will not act. Relevance is what a trade or regional title gives you: far fewer readers, but the ones who buy what you sell. Neither is automatically worth more, and the expensive mistake is buying the first when you needed the second.',
          "Selectivity is the other factor, and it is not for sale at any price. Forbes, Bloomberg, Business Insider, Inc. and Fast Company decide what they publish, so a quote can cover the work of building and pitching a story toward them — never the outcome. Outlets like Yahoo Finance, Benzinga, Digital Journal, CEO Weekly, NY Weekly and Women's Journal are more reachable, and that difference in reachability is most of what you are seeing in a price list.",
          'MSN, Apple News and Google News belong in a separate box. They are distribution surfaces and indexes, not newsrooms commissioning profiles, so coverage reaches them through a publication already in the network or the index. Paying for one of those logos directly is paying for something the seller does not control. Ask instead which publication the article runs on, and treat syndication as a possibility rather than a deliverable.',
        ],
      },
      {
        heading: 'What raises the cost on your side',
        paragraphs: [
          "Some of the price is decided by your situation rather than the outlet. A story that has to be found rather than simply written costs more, because the discovery work is real. Regulated fields — medicine, law, financial advice — carry review and careful phrasing that a coaching profile does not. So does anything involving other people's confidential work, where half the interesting detail cannot be printed.",
          'Speed costs. So does committee — every extra approver adds rounds, and rounds are hours. Volume works the other way: several pieces developed from one body of research cost less each than the first one did, because the expensive part is already done. If a quote surprises you, ask which of these is driving it. A good answer will be specific.',
        ],
        list: [
          'A thin story: more discovery time before anyone can write a first draft.',
          "Regulated industries: compliance review, careful claims, and language that survives a professional body's scrutiny.",
          'Confidential client work: the strongest details are unusable, so the piece has to earn attention another way.',
          'A short deadline: reordering other work costs more than fitting yours into a normal queue.',
          'Multiple approvers: each additional reviewer adds revision rounds, and revision rounds are the quiet budget killer.',
          'Several placements at once: research and story development are reused, so each piece after the first costs less.',
        ],
      },
      {
        heading: 'Before you pay, ask these',
        paragraphs: [
          'The cheapest protection available is a few blunt questions asked in writing. You are trying to establish exactly what will exist afterward: which site, what kind of page, whether it is labeled as paid, and whether it will still be there next year. Vagueness at this stage is information. Anyone who has done this properly will find the questions ordinary.',
          'One test beats all of them. Ask for three live links from the last year for clients like you, then read them the way a skeptical customer would. Does it read like journalism or a brochure? Is it still indexed? Would you be pleased to have your name on it? Ten minutes of that tells you more than any proposal will.',
        ],
      },
    ],
    realityCheck: 'We do not publish a price for a single feature, and there is no version of this page where we can. The honest reason is that the same headline outlet can involve very different amounts of work depending on your story and your industry. What we will commit to before you pay is the outlet route, the timeline as a range, and whether we are placing or only pitching. If a quote does not include those three, it is not really a quote.',
    faqs: [
      { question: 'Is paying for a feature the same as buying an ad?', answer: "No, though the line matters and you should know which side you are on. Advertising is space you buy and control, normally labeled. Editorial and contributor work has to satisfy someone else's standards before it runs, which is why it carries weight in a search. If nobody but you decides whether it publishes, treat it as advertising and value it accordingly." },
      { question: 'Why is a well-known logo not automatically worth more?', answer: 'Because the logo is not what convinces your buyer — the article is. A recognizable name on a piece that reads like a press release does less than a specific, well-argued article in a title your customers actually read. Reach is easy to sell and hard to convert. Ask what the piece will say before you ask where it will sit.' },
      { question: 'How long until the feature is live?', answer: "For outlets we place in regularly, most work goes live within a few weeks, and the variable is usually how many revisions you want rather than the publication. Anything we are pitching toward runs on someone else's clock, so we quote it as a range and never as a date. Be wary of a firm date attached to a selective title." },
    ],
  },
  {
    slug: 'how-to-get-press-for-your-business',
    intro: [
      'Most people start by naming a publication. That is the wrong end of the problem, and it explains a lot of unanswered pitches. Assume the person reading yours is not weighing whether you deserve coverage — they are weighing whether their readers will stay past the second paragraph. Everything practical follows from taking that seriously.',
      'What follows is the route we would give a founder with no budget and a few hours a week: how to find the story hiding in your business, how to choose outlets by audience rather than logo, what a pitch should contain, and what to do in the week after something publishes. None of it requires an agency. It does require you to be specific.',
    ],
    keyPoints: [
      "Your company's existence is not a story; what you learned, changed or measured while building it might be.",
      'Choose outlets by who reads them, then work outward from the smallest title that would genuinely take you.',
      'A pitch is three short paragraphs: the story, why it is credible, and what you are offering.',
      'Two follow-ups spaced a week apart is diligence; a fourth is a reason to stop hearing from you.',
      'Coverage does most of its work later, in search results and due diligence, so the week after publication matters.',
    ],
    sections: [
      {
        heading: 'Find the story, not the announcement',
        paragraphs: [
          'Nothing about your company is inherently interesting to someone who has never heard of it. What is interesting is a decision, a result or a change — a pricing model you abandoned, a hiring rule that cut turnover, a shift in your industry you noticed early and can explain. Start by writing down three things you know that your competitors would dispute. That list is where a story usually is.',
          'Test each candidate against one question: could this have been written about any other company in your category? If yes, it is a press release, not a story. Specifics are what survive the test — the number you cannot share is usually less interesting than the reasoning you can. A founder explaining why they walked away from a large customer beats a founder announcing growth.',
        ],
        list: [
          'The reversal: something your industry believes that your own results contradict, with the detail to back it.',
          'The method: how you actually do the work, explained specifically enough for a reader to copy it.',
          'The moment: a launch, an award, an acquisition — thin on its own, useful as a hook for a bigger point.',
          'The data you hold: patterns in your own business that nobody outside it can see.',
          'The correction: a claim your field repeats that you can show is wrong, politely.',
          'The seasonal hook: an argument that becomes relevant on a date everyone already has in their calendar.',
        ],
      },
      {
        heading: 'Pick outlets by who reads them',
        paragraphs: [
          'Make a list of the last ten people who bought from you and work out what they read. Not what you read — what they do. Trade newsletters, regional business pages, association publications, the two or three national sites they open at breakfast. That list is your target list, and it usually looks less glamorous than the one you would have written from memory.',
          "Then sort by reachability, honestly. Titles like Forbes, Bloomberg, Business Insider, Inc. and Fast Company are editorially selective; you can pitch them, and you cannot arrange them. Others — Yahoo Finance, Benzinga, Digital Journal, CEO Weekly, NY Weekly, Healthcare Business Today, LA Wire, US Reporter, Women's Journal, Fox Interviewer, International Business Times — are more reachable for a founder or expert with a clear story. Start where you can actually get published and build outward.",
          'Two more notes. MSN, Apple News and Google News are not places to pitch — they carry or index work from publications already in their networks, so the way in is the publication. And read three recent pieces from any title before you contact it. Pitching a story a site plainly does not run is a common reason for silence, and the easiest to avoid.',
        ],
      },
      {
        heading: 'What a pitch should contain',
        paragraphs: [
          'Three short paragraphs and a subject line that describes the story rather than you. First paragraph: the story in two sentences, written the way you would say it to a friend. Second: why it is credible — what you have built, what you can show, who else has covered it. Third: what you are offering, whether that is an interview, data, or a written piece.',
          'Leave out the adjectives. Leading, innovative, revolutionary and passionate all say the same thing, which is nothing, and they are the first signal that a pitch is not worth reading. Attach nothing on the first email. Do not send a press release as the pitch — send the reason someone would read the press release, and keep the whole thing under two hundred words.',
          'Write to a person, not an inbox. General submission addresses work occasionally; a note to someone whose recent piece you have actually read works more often, and referencing that piece in one clause is enough. Do not flatter. Say what you saw in their work, then say what you have that follows from it, then stop.',
        ],
      },
      {
        heading: 'Follow up without becoming a problem',
        paragraphs: [
          'Silence is normal and rarely personal. Follow up once after about a week, in the same thread, adding something rather than repeating yourself — a new development, a data point, a shorter version of the offer. Follow up a second time if you have a genuine reason. After that, leave it. The pitch is not dead; it is filed, and the next one from you should still be welcome.',
          'Meanwhile, be findable. Source-request platforms put you in front of writers already working on something, and answering fast and in full is most of the battle there. Keep a short biography, a decent photograph and two or three specific claims you can defend somewhere public. A lot of coverage happens because someone needed a credible voice quickly and you were the easiest one to verify.',
        ],
      },
      {
        heading: 'The week after it publishes',
        paragraphs: [
          'A published article does very little on its own. Most of its value arrives later, when someone searches your name before a call and finds a third party describing you instead of your own marketing. That means the job is not finished at publication. Put the link where the people who check you will hit it — your site, your profiles, your proposals, your email signature.',
          'Then use it to get the next one. A published piece makes the following pitch easier, because you are no longer an unknown quantity with a claim — you are someone a publication has already trusted. Send it to the people who would have said no last month. Coverage compounds in a way that is slow at first and then noticeably faster.',
          "One caution. Do not describe a contributed or sponsored piece as a staff-reported profile. People check, and the correction costs more than the coverage earned. Say what it is — 'wrote about X for Y' is accurate, unembarrassing, and does the same work for you when a prospect reads it.",
        ],
      },
      {
        heading: 'When to hire someone instead',
        paragraphs: [
          'Doing this yourself works, and it works best when you already know a writer or two and have hours to spend on follow-up. What defeats most people is not the writing. It is the fifth week of no replies while the business still needs running. If you can sustain that, you do not need us, and this page has told you most of what you would be paying for.',
          'Hiring makes sense when the timing matters, when the story is complicated enough that writing it well is a real job, or when you would rather buy the relationships than build them. That is what we do — develop the angle, write to editorial standard, and place it with publications your buyers already trust. It is also worth saying plainly that if nobody researches you before buying, none of this is the best use of your money.',
        ],
      },
    ],
    realityCheck: 'Doing this alone is slower than anyone selling PR will admit, and most pitches go unanswered without explanation. That is normal, not a verdict on your business. It is also true that the biggest titles stay out of reach for a while regardless of how good your pitch is, and no amount of persistence or budget changes an editorial decision. Aim at the outlets that will actually take you, and let the record build.',
    faqs: [
      { question: 'Do I need a press release?', answer: 'Usually not. A release is a format for announcing something to many people at once, and it is a poor pitch — it answers what happened without answering why anyone should care. Write the email instead: the story, the credibility, the offer. If a publication asks for a formal release afterward, write it then, when you know what they want.' },
      { question: 'My business is small and boring. Is there a story?', answer: 'Probably, but not the one you are looking for. Small and specific beats large and vague — a bookkeeper who can explain the three mistakes that trigger audits is more publishable than a bigger firm with nothing to add. The test is whether a reader finishes the piece able to do something differently. Boring businesses often pass that test easily.' },
      { question: 'How long before this produces customers?', answer: 'Slower than you want, and often indirectly. Press rarely works like an ad that runs on Tuesday and fills the calendar by Friday. It works when a prospect who already half-decided looks you up and finds someone independent taking you seriously. If you need leads this month, spend on something with a shorter loop and treat coverage as the longer game.' },
    ],
  },
  {
    slug: 'how-to-get-featured-in-entrepreneur',
    intro: [
      'Most pitches to Entrepreneur die in the subject line. They announce something — a launch, a funding round, an award — and announcements are the one thing a business magazine never runs short of. What tends to get published is the part that comes after the announcement: the decision you made, what it cost you, and what you would tell someone standing where you stood.',
      'That is good news if you have actually run something for a while. Most founders a few years in are sitting on several publishable stories without recognizing them, because from the inside they just look like a bad quarter and an awkward conversation. Finding them is the work. Pitching them is the easy part.',
    ],
    keyPoints: [
      'Entrepreneur publishes lessons an operator learned in public, not news a company would like people to know.',
      'The strongest angle is usually a decision that cost you something, described with the detail you would give a friend.',
      'A story too generic to name your own business in is too generic to publish anywhere.',
      'Nobody controls what the title runs, so treat it as one target among several rather than the only acceptable outcome.',
      'Ask whose byline goes on a piece and which route it takes before you agree to anything.',
    ],
    sections: [
      {
        heading: 'What a publishable story looks like',
        paragraphs: [
          'The pieces that hold up have four parts: a person, a decision, a consequence, and something a reader can copy by Friday. Strip any one of those out and you are left with a press release wearing better adjectives. The consequence is the part people leave out, because it is the part that makes them look fallible, and it is exactly the part that makes the rest believable.',
          'Test your idea against that shape before you write a word. If the story is that you launched a product, the decision is missing. If the story is that you raised money, the consequence is missing. And if the takeaway is work hard and stay focused, there is nothing for a reader to take away at all.',
        ],
        list: [
          'A pricing change you made against advice, with the churn and the conversations that followed.',
          'A hire that failed, described honestly enough that someone else avoids the same mistake.',
          'A market you walked away from, and how you worked out it was not yours.',
          'A process you built because nothing off the shelf fit the way you actually operate.',
          'A belief about your industry you have since changed your mind about, and what changed it.',
        ],
      },
      {
        heading: 'Finding the lesson inside your business',
        paragraphs: [
          'Sit down with the last two years and write out every decision you made that went against what you were told to do. Include the ones that went badly. Next to each, put the number that moved — revenue, churn, headcount, hours, whatever you genuinely track. You are not hunting for a triumph. You are hunting for a decision with a visible price attached to it.',
          'Most of that list will be unusable, which is fine. Two or three items will make you faintly uncomfortable to publish. Those are your candidates. Discomfort usually means the story contains something specific about how you operate, and specificity is the one thing a reader cannot get from a generic business article written by someone who has never run anything.',
          'If nothing survives the exercise, you have learned something worth more than a placement: the story is not there yet. Come back in six months with another year of operating decisions behind you. No outlet can make a business more interesting than it currently is, and any agency suggesting otherwise is selling you a logo rather than a story.',
        ],
      },
      {
        heading: 'Bylines, staff pieces and what to ask',
        paragraphs: [
          'Business titles carry more than one kind of writing. Some pieces are reported by staff journalists who chose the subject themselves. Others are bylined by founders and executives writing about their own experience. Both are real, both sit on the same domain, and they are not the same thing — a reader who glances at the byline will see the difference straight away.',
          'So ask the question directly, of us or of anyone else you are considering hiring. Which route are you pitching, whose name goes on the piece, and what will the page itself say about how it got there? An honest answer takes a sentence. Watch what happens to the conversation when the answer takes considerably longer than that.',
        ],
      },
      {
        heading: 'Writing it so it survives an edit',
        paragraphs: [
          'Cut every line about your mission, your passion, and the industry being ripe for disruption. What survives an edit is concrete: what you charged, what broke, who quit, what you tried second. Numbers from your own books are fair game because they are yours. Borrowed statistics you cannot source are how a piece gets killed, or worse, published and then quietly corrected.',
          'Write in the voice you use on a call rather than the one on your homepage. Read the draft out loud, and delete any sentence you would be embarrassed to say to a peer. Then hand it to someone outside your field and ask them what the point was. If they cannot tell you in a sentence, the problem is not the reader.',
        ],
      },
      {
        heading: 'While the pitch is open',
        paragraphs: [
          "Pitches to selective titles run on someone else's calendar and there is no version of this where you speed that up. Meanwhile the same story usually fits several outlets with a realistic route in. Running it there is not a downgrade — it puts something real under your name while the harder pitch stays open, and gives the next editor something to look at.",
          'Then use whatever publishes. Put the link where buyers actually look: your site, your email signature, the first page of results for your name, the material you send before a call. A placement nobody ever encounters does roughly as much for the business as one that never happened at all.',
        ],
      },
    ],
    realityCheck: 'Entrepreneur decides what Entrepreneur publishes. We pitch toward it, we place clients elsewhere, and we keep those two facts clearly separated in writing before you pay anything. If someone quotes a fixed fee for a confirmed feature, ask for their last three live URLs and read the domain and the byline carefully. What we will commit to is a story built to a standard the title would recognize, and honesty about where it actually lands.',
    faqs: [
      { question: 'Can I pitch Entrepreneur myself?', answer: 'Yes, and plenty of people do. Read a month of what the site actually publishes, work out which section your story belongs in, then send a short note with the piece or a tight outline: who you are, what you did, what it cost, why the lesson is yours. Expect silence more often than rejection. That is normal, and it is not a verdict on your business.' },
      { question: 'Is this worth chasing compared with a smaller outlet?', answer: 'It depends who your buyers are. If they research you before committing — clients hiring a consultant, patients choosing a practice — a recognizable business title keeps working for years. If you sell into a narrow trade audience, the publication they actually read will do more for less effort. Both can be true at once, and the order you do them in matters more than the logo.' },
      { question: 'What should a fair agency quote include here?', answer: 'Story development, the writing, unlimited revisions, and your approval before anything is submitted anywhere. What it cannot include is a confirmed Entrepreneur placement, at any price. We quote to your goals, and we tell you which outlets we place clients in regularly and which we can only pitch toward. Entrepreneur belongs in the second group, and a quote that treats it as the first deserves a hard look.' },
    ],
  },
  {
    slug: 'how-to-get-featured-in-business-insider',
    intro: [
      'There is a version of press you can arrange and a version you can only earn, and confusing the two gets expensive. Business Insider sits firmly on the earned side. Which makes the useful question not how to get in, but what would make a reporter call you rather than someone else who does roughly what you do.',
      'That reframe changes the work. You stop drafting pitches and start assembling a case: something first-hand nobody else can describe, a public record that checks out quickly, and the discipline to answer the same day when your sector is in the news. None of it is fast. All of it keeps paying after a story runs.',
    ],
    keyPoints: [
      'Reported newsrooms build stories from the reporter outward, so being findable and useful beats being persuasive.',
      'First-hand operating detail is scarce; opinion about your industry is available from anyone with a keyboard.',
      'Reply the same day, on the record, in three sentences, and you will be asked again.',
      'A guaranteed feature at a staffed newsroom is the clearest warning sign in this industry.',
      'Coverage elsewhere is not a consolation prize — it is what makes your name check out later.',
    ],
    sections: [
      {
        heading: 'Why nobody sells a slot',
        paragraphs: [
          'Reported journalism runs from the reporter outward. Someone decides a subject is worth a story, works out who would know, and starts calling. There is no queue to join and no inventory to buy, which is why an offer of a guaranteed feature at a staffed newsroom tells you something reliable about the person making the offer.',
          'Paid formats do exist across business media — sponsored posts, partner content, wire distribution — and the reputable ones carry a label. The label is the whole point. A reader deciding whether to trust you can see it, and so can the next journalist who looks you up. Buying one thing and describing it as the other loses you both.',
        ],
      },
      {
        heading: 'What actually makes you quotable',
        paragraphs: [
          'Opinion is abundant. A reporter can get a view on your industry from anyone with a keyboard and forty minutes to spare. What is scarce is first-hand operating detail — what you can see in your own numbers, from a seat most people do not have — plus the willingness to describe it plainly, on the record, while it is still relevant to something happening now.',
          'So work out what you can say that nobody else can. Not what you believe. What you observe, from where you sit, that an outsider could not know without asking you. Write it as one sentence. If that sentence could have come from any competitor in your category, you do not have it yet, and more polish will not produce it.',
        ],
        list: [
          "Patterns in your own customer data you can describe without breaching anyone's confidentiality.",
          'Cost or supply changes you are absorbing now, before they surface in published figures.',
          'What hiring is really like in your function, drawn from interviews you personally ran.',
          'A platform or regulatory change you are implementing, and the parts of it that broke.',
          'A widely repeated claim about your sector that does not match what you actually see.',
        ],
      },
      {
        heading: 'The background check you never see',
        paragraphs: [
          'Before anyone quotes you, someone checks you. It is quick and mostly passive — search results, a company page, whatever else surfaces beside your name. Anything ambiguous at that stage is a reason to move on to the next source, because a reporter is working to a deadline and has no obligation to resolve your ambiguity for you.',
          'Make that check boring. One consistent title everywhere you appear, a company page with real names on it, a current photograph, an email address a stranger can find, and published work under your byline that still says roughly what you would say today. It is unglamorous housekeeping, and it decides more outcomes than pitching does.',
        ],
      },
      {
        heading: 'Answering when the call comes',
        paragraphs: [
          'Speed is most of it. A reporter filing today will often use the source who replies within the hour over the better source who replies tomorrow, and that is not unfairness, it is a deadline. Keep a short answer ready: three sentences, on the record, with an offer of the underlying detail if they want to go further.',
          'Do not ask to approve the copy. That is not how reported journalism works, and asking marks you as someone who will be difficult next time. Say only what you would be content to see in print beside your name. If something genuinely has to be off the record, agree that before you say it rather than afterward.',
          'If a piece runs with a fact wrong, ask for a correction of that fact, politely, once. If a piece runs and you simply come off worse than you hoped, that is the price of being in reported journalism at all. Sources who handle that gracefully are the ones who get called a second time.',
        ],
      },
      {
        heading: "Pitching without wasting the desk's time",
        paragraphs: [
          'Find whoever already covers your subject by reading recent work on the site, then write four sentences: what happened, why it matters now, what you can show, and how to reach you. No attachments, no deck, no paragraph about your journey. If it is not interesting in four sentences, it will not become interesting in nine.',
          'Follow up once, then let it go and carry on doing whatever made the pitch plausible in the first place. Pitches go unanswered all the time, including good ones from people who do eventually get covered. Reading that silence as a verdict is how people quit roughly two years before the work would have paid off.',
        ],
      },
      {
        heading: 'What to build in the meantime',
        paragraphs: [
          'The record you build elsewhere is not a consolation prize. It is the thing that makes the background check come back clean. Real articles on real publications, permanent and searchable, do the quiet work of establishing that you exist, that your claims stay consistent, and that somebody with an editorial standard has already checked you once.',
          'Those placements also move faster. Most of the coverage we can actually place goes live within a few weeks, which gives you something to point at while the slower work of becoming a source continues underneath. Treat the two as one plan rather than a fallback and the sequencing stops feeling like a compromise.',
        ],
      },
    ],
    realityCheck: 'Say this out loud before signing anything: no fee buys a staff-written Business Insider story, from us or from anyone else. What an agency can honestly do is sharpen what makes you worth quoting, get a useful comment in front of the right desk while your sector is in the news, and place coverage it can actually deliver meanwhile. Some of that lands. Anyone promising more than that is describing a different website.',
    faqs: [
      { question: 'Are source-request platforms worth my time?', answer: 'Sometimes, in small doses. The volume is high, the fit is often poor, and plenty of requests come from smaller sites than the one you had in mind. Check twice a week, answer only where you are genuinely the right person, keep replies to a few sentences, and stop if it starts consuming an hour a day. Useful as background activity, never as the plan.' },
      { question: 'Someone offered me a guaranteed feature there. What is it?', answer: 'Ask for their last three live URLs, then read each domain letter by letter and look for a sponsored or partner label on the page. Usually you find a similar-sounding site, a marked commercial section, or an article that has since vanished. Occasionally it is a legitimate paid format being described dishonestly. Either way, you now know exactly what you would be buying.' },
      { question: 'Does coverage at smaller outlets help me here?', answer: 'Indirectly, and that is worth more than it sounds. Published work under your name gives a reporter something to read before deciding whether to call, and settles the basic questions about who you are. It will not make you newsworthy by itself. Being genuinely useful about something happening now does that; the record simply removes the reasons to skip you.' },
    ],
  },
  {
    slug: 'how-to-get-featured-in-bloomberg',
    intro: [
      'Start with the reader. Bloomberg is written for people who are at work — analysts, executives, traders, policy staff — and who may act on what they read before lunch. Every editorial habit at a title like that follows from serving readers with money and decisions at stake, which is why the bar sits where it sits.',
      'So the question is not whether you deserve coverage. It is whether anything you know would change what one of those readers does next. Plenty of excellent businesses honestly fail that test, and the sensible response is to aim elsewhere rather than spend a year and a budget discovering it. Telling the difference early is what this guide is for.',
    ],
    keyPoints: [
      "Bloomberg's readers act on what they read, which explains its standards better than any other single fact.",
      "If nothing you know would change a professional reader's decision, another outlet will serve you far better.",
      "No fee, retainer or relationship buys editorial coverage here — not ours, and not anyone else's.",
      'Expert sources are built over years through specificity, availability, and a record that survives checking.',
      'Paid offers using this name usually resolve to a lookalike domain, a labeled section, or a wire product.',
    ],
    sections: [
      {
        heading: 'Who the reporting is for',
        paragraphs: [
          'A general-interest outlet can run a story because it is interesting. A financial newsroom is writing for people who will make a call on the strength of it, so the questions come out differently: how big, compared with what, according to whom, and what happens to whom next. Your story has to survive that before anyone types a word of it.',
          'Which is why founder narratives that work beautifully elsewhere land flat here. The arc of how you built the company is not, on its own, information a fund manager can use. The exception is when your company is the market story — a sector reshaping, a price moving, a regulator arriving — and you happen to be standing inside it.',
        ],
      },
      {
        heading: 'Three honest positions to be in',
        paragraphs: [
          'Before doing anything else, work out which of three positions you actually occupy, because the right next move differs completely across them. Most people assume the first and are in fact in the third, and the year spent finding that out is the genuinely expensive part of the whole exercise. Be blunt with yourself here rather than optimistic.',
          'In the first position you do not need advice about visibility so much as preparation — be reachable, be consistent, know what you will and will not say. In the second, the work is a slow campaign of being useful to people on deadline. In the third, honesty is cheaper than effort: build the business, and build a record where your buyers actually read.',
        ],
        list: [
          'You are the story: your company, sector or filings are already the subject of reporting.',
          'You are a source: you can explain a market others are covering, credibly and at short notice.',
          "You are not in the picture: nothing you do yet touches a professional reader's decision.",
        ],
      },
      {
        heading: 'What a usable source offers',
        paragraphs: [
          'Availability, specificity, and a position you are prepared to defend. That means being reachable at short notice, offering numbers or observations instead of adjectives, and being willing to say something that could later turn out to be wrong. Sources who only say safe things are pleasant to deal with and almost never quoted, because there is nothing inside the quote.',
          'It also means understanding your own conflicts. If you hold a position in whatever you are commenting on, say so first and unprompted. Financial journalism treats undisclosed interest as a serious matter, and a source who volunteers it reads as trustworthy — while one who is caught holding it quietly tends not to get a second call.',
        ],
      },
      {
        heading: 'Being checkable is not optional',
        paragraphs: [
          'Assume everything you claim will be verified against a document. Registrations, filings, ownership, credentials, former employers, the figures you cite about your own business — all of it is checkable and some of it gets checked. The point is not that anyone suspects you of anything. It is that a reporter cannot publish what nobody is able to stand behind.',
          'So keep your public statements consistent and keep them accurate over time. A bio that quietly inflates a title, a headcount claim that contradicts a filing, a founding date that shifts between profiles — each is small on its own, and together they add up to a reason to use somebody else. Fix them before anyone has cause to notice.',
        ],
      },
      {
        heading: 'When someone offers to sell it',
        paragraphs: [
          'Fixed-fee offers of Bloomberg coverage circulate constantly, and they are worth understanding rather than only avoiding. Ask three questions: what exact URL will this appear on, who writes it, and what label sits on the page. The answers usually reveal a similarly named site, a syndication surface, a paid wire product, or a clearly marked commercial section.',
          'None of those are automatically frauds. Paid distribution is a real product with real uses, and labeled commercial formats are a normal part of media. The dishonesty lives in the naming. Buy one thing, describe it in your bio as another, and the people you most want to impress are precisely the ones equipped to notice.',
        ],
      },
      {
        heading: 'The long version, honestly',
        paragraphs: [
          "If this genuinely is the right outlet for you, treat it as a relationship measured in years rather than a campaign measured in months. Write and speak where your sector's professionals gather. Get quoted accurately in smaller places first. Answer quickly. Be right often enough to be worth a second call, and gracious on the occasions you are not.",
          'Keep the rest of your visibility working while that happens, because most of what your buyers, partners and future hires check is not a terminal. It is a search result. Coverage those people will actually encounter does more for the business this quarter than a pitch to the hardest title in business media realistically will.',
        ],
      },
    ],
    realityCheck: 'We will not sell you Bloomberg, because nobody can honestly sell it. There is no relationship, package or fee that produces a reported story about you there. If your work genuinely belongs in that coverage, the route is a source relationship built patiently over years, and we will tell you plainly what that involves. If it does not, we will say so in the first conversation and price the work that will actually move your business.',
    faqs: [
      { question: "Is there any paid route into Bloomberg's journalism?", answer: "Not into the reporting. Commercial formats exist across financial media and carry labels for a reason, and paid wire distribution is a separate product from a reported story. If a price is attached, what you are buying is placement of your own words, not a journalist's judgment about you. Both can be legitimate. Only one of them is what people mean by coverage." },
      { question: 'Do I need to run a public company?', answer: 'No, but your work needs a visible line to money that moves: a regulated sector, a supply chain under strain, a market with a price on it, a policy change with winners and losers. A private business can sit squarely on that line. A business that is interesting mainly to its own customers usually does not, which is no criticism of the business.' },
      { question: 'An agency says it has relationships there. Does that help?', answer: 'Relationships with reporters are real and they matter — they get an email opened and a call returned. They do not decide what runs, and no honest description of them claims otherwise. The test is simple: ask whether the agency is describing access or influence. Access is credible. Influence over an editorial decision is not something anyone outside a newsroom holds.' },
    ],
  },
  {
    slug: 'how-to-get-featured-in-fast-company',
    intro: [
      'Most pitches that reach a title like this one describe a company. The pieces that run describe a change — in how people work, how something gets designed, how an industry is being rebuilt — and the company is the evidence. That inversion is the whole difficulty, and it is why a strong business with nothing to argue gets passed over while a smaller one with a sharp point of view gets written about.',
      'The good news is that the argument is buildable. You already have the raw material if you have been operating long enough to disagree with your own industry about something. What follows is how to find that argument, where it fits among the sections and lists the title runs, and what an honest expectation looks like.',
    ],
    keyPoints: [
      'Fast Company publishes arguments about how work, design and technology are changing — your company is the evidence, not the subject.',
      'Being one example inside a reported trend story is a realistic outcome; being the profile subject rarely is.',
      'The lists and awards run on published deadlines and application rules — a separate door, and a slower one.',
      'No agency controls whether the newsroom bites, so build the argument first and pitch outlets you can actually reach alongside it.',
      'A story with one specific, checkable detail beats three paragraphs of positioning every time.',
    ],
    sections: [
      {
        heading: 'What the title actually covers',
        paragraphs: [
          "Fast Company's territory is innovation in a broad sense: technology and the companies building it, design and the way things get made, work and leadership, and the social and environmental side of business. Read a week of it and you will notice that most pieces are about a shift rather than a firm. A company shows up because it illustrates the shift, which tells you what your pitch has to supply.",
          'The formats vary more than people expect. There are reported features, short news pieces, first-person essays, design breakdowns, and the annual lists that run on their own calendar. Each one has a different bar and a different way in. Pitching a personal profile into a publication that mostly runs trend reporting is the most common mistake, and it is usually the reason a pitch gets no reply at all.',
        ],
      },
      {
        heading: 'Build the argument first',
        paragraphs: [
          'Before anything is written, you need a sentence someone could disagree with. Not "we help companies grow" — something like "the reason retrofits stall is procurement, not engineering," or "remote hiring made our design reviews worse, and here is what we changed." If a competitor would happily sign their name under your sentence, it is positioning, not an argument.',
          'Then find the evidence only you have. It might be a change you made and the result it produced, a pattern across your customer base, or a decision you got wrong in public. Editors are not looking for proprietary data so much as for something specific and checkable — a real before and after, with names and dates attached where you can share them.',
          'Write the argument down in three sentences and show it to someone in your field who is not on your payroll. If their reaction is "obviously," you have a truism. If it is "that is not true," you have an argument worth reporting. That test costs nothing and saves months.',
        ],
      },
      {
        heading: 'The lists are a different door',
        paragraphs: [
          "Alongside the journalism, the title runs recognition programs — the innovation lists, the design awards, the workplace rankings. These work like applications: there are entry windows, published criteria, and in most cases a submission fee. They are worth reading about directly on the publication's own pages rather than taking anyone's summary, including this one, because the rules change year to year.",
          'An application is not a pitch and it does not become one. Winning a place on a list gets you a line in a roundup and a badge you can use; it rarely produces a feature about you. Treat the two tracks as separate budgets of time, and do not let a submission deadline pull your attention away from the story you were building.',
        ],
      },
      {
        heading: 'What a workable pitch contains',
        paragraphs: [
          'Keep it short and lead with the claim rather than your biography. One paragraph on what you are asserting, one on the evidence behind it, one line on who you are and why you would know. Attach nothing. If a reporter wants the data, the deck or an interview, they will ask for it, and that request is the only real signal you will get early on.',
          'Timing matters more than volume. A pitch tied to something happening — a rule change, a funding cycle in your sector, a shift everyone in your industry is arguing about privately — reads as useful. The same pitch sent in a quiet week reads as a favor request. Send it once, follow up once, and move on to the next outlet without taking the silence personally.',
        ],
        list: [
          'A claim in the subject line that a reader could argue with, not your company name and a tagline.',
          'One number or result you are willing to have quoted, and permission from whoever owns it.',
          'A named human who will talk on the record, available this week rather than next month.',
          'Two or three other companies doing the same thing, so the reporter sees a trend and not an ad.',
          'Anything visual you can share — process shots, prototypes, before and after — for a desk that cares about design.',
        ],
      },
      {
        heading: 'If the answer is no',
        paragraphs: [
          'Most pitches to a title of this size go unanswered, and that is not a verdict on your business. The argument you built is portable — it works for a trade publication in your sector, a business title one tier down, a podcast, your own site. Each of those placements makes the next pitch easier because it gives the reporter something to check besides your own claims.',
          'This is also the point where a lot of founders get sold something. If someone offers you a guaranteed feature here, they are either describing a different product than you think, or they are describing something you would not want your name on. Ask which section it runs in, how it is labeled, and whether the label is visible to a reader on their phone.',
          'Where we come in is narrow and worth stating plainly: we help build the argument, write the piece to the standard the desk would apply, and place it with publications we can actually reach — while pitching toward the ones nobody controls. Which is which is settled before any work starts, not after.',
        ],
      },
    ],
    realityCheck: 'Fast Company cannot be bought, and we do not sell it. Nobody can promise you a feature there, and an agency that does is either counting on you not checking or planning to put you somewhere that only looks like it. What we can promise is an honest read on whether your story has a shot, a piece written to the standard the desk would apply, and placement at outlets we can actually reach while the pitch runs.',
    faqs: [
      { question: 'Can I pay to be in Fast Company?', answer: 'Not for editorial coverage. The lists and awards charge entry fees, which buys you consideration and nothing more, and any membership or sponsored program that publishes your writing is labeled as such. If someone quotes you a price for a staff-written feature, ask them to put in writing which section it runs in. That question usually ends the conversation.' },
      { question: 'Is my company too small for it?', answer: 'Size is not the filter; specificity is. A small company with an unusual method and a result it can show gets further than a large one with a rebrand to announce. What does hurt you is having nothing outside your own website for a reporter to check — no coverage, no talks, no published data. Fix that first, at smaller outlets, and the size question stops mattering.' },
      { question: 'How long does a pitch take to land?', answer: 'There is no useful average. Reported features can sit for months while a reporter works other stories, and a well-timed pitch can turn around in days if it fits something already in progress. We do not put a date on anything we do not control. The placements we handle ourselves usually go live within a few weeks, and we say which category you are in before you commit.' },
    ],
  },
  {
    slug: 'how-to-get-featured-in-inc',
    intro: [
      'Read a few Inc. stories back to back and a pattern shows up fast: the good ones are full of operating detail. Headcount before and after. The month the model stopped working. What the founder tried that failed, in enough detail that another operator could avoid it. That is the register the title writes in, and it is why a polished narrative with the numbers sanded off tends to go nowhere.',
      'So the first question is not how to reach an editor. It is how much you are willing to put on the record — about revenue, mistakes, and the parts of the business you would rather describe vaguely. Get honest about that and the rest of the work becomes straightforward.',
    ],
    keyPoints: [
      'Inc. writes for operators, so stories live on specifics — hiring, pricing, cash, and the decision that went badly.',
      'Decide early how much financial detail you will share on the record; vagueness is what kills most founder pitches.',
      'The Inc. 5000 is an application with eligibility rules and a verification step, not a pitch to a reporter.',
      'A list placement is a credential, not a profile — the two arrive by completely different routes.',
      'No agency can guarantee editorial coverage here; anyone selling a guaranteed Inc. feature is selling something else.',
    ],
    sections: [
      {
        heading: 'Who Inc. is written for',
        paragraphs: [
          'The reader is running something — usually a company past the first hires and into the messy middle, where the problems are cash timing, management, pricing and whether to take money. Stories that help that reader do their job get published. Stories that celebrate a founder do not, unless the celebration carries a lesson somebody else can copy on Monday morning.',
          'That reader test also tells you which of your stories is the right one. The launch you are proud of is probably not it. The way you restructured commissions after a bad quarter, or the customer segment you fired, or how you financed inventory without giving up equity — those are the pieces operators read to the end.',
        ],
      },
      {
        heading: 'The disclosure question comes first',
        paragraphs: [
          'Business journalism at this level runs on figures somebody will stand behind. You do not have to open your books to the world, but you do have to decide in advance what you can say: growth described in percentages, a revenue range, headcount, margin direction, the size of a round. Work that out with your co-founder and your accountant before you talk to anyone.',
          'The second half of disclosure is the uncomfortable half. Reporters at operator-focused titles ask what went wrong, and a founder who answers with a rehearsed line about learning and growth loses the room. If there is a layoff, a failed product or a bad hire in the story, decide how you will describe it honestly, and check whether anything is restricted by an agreement you signed.',
        ],
        list: [
          'What revenue figure or range you will confirm, and who else has to approve it before you say it.',
          'Whether investors, a board or a bank have anything to say about public financial statements.',
          'The failure you are willing to describe in detail, and the one you are not.',
          'Which customers will let you name them, in writing, before a reporter asks.',
          'Who at your company is allowed to speak, and who takes the call if you are traveling.',
        ],
      },
      {
        heading: 'The Inc. 5000 is not a pitch',
        paragraphs: [
          "The ranked lists are the best-known thing the title does, and they work nothing like a story pitch. There is an application window, eligibility rules about how long you have been operating and where, and a verification step where you supply financial documentation. The criteria live on the publication's own application pages, and those are the pages to read — not a summary from an agency, including ours.",
          'Being ranked is a credential. It is not coverage, and it does not put a reporter in touch with you. Plenty of ranked companies never appear in a story, and plenty of profiled founders have never applied. If both matter to you, run them as two separate efforts with two separate calendars, because the application deadline will otherwise eat the month you meant to spend building the story.',
        ],
      },
      {
        heading: 'Story shapes that tend to fit',
        paragraphs: [
          'The most reliable shape is a decision with a number on either side of it. You changed something, here is what it cost, here is what happened. The second is a problem common to a whole category of businesses that you happened to solve in an unusual way — the reporter gets a story that serves a whole readership, and you get to be the example rather than the subject.',
          'A third shape is the trend you can see from inside your industry before it is obvious from outside — a change in how customers buy, a supply shift, a hiring pattern. This one needs corroboration. Bring two or three other operators who will confirm it on the record, and you have handed a reporter most of a story instead of asking them to build one around you.',
        ],
      },
      {
        heading: 'Building the record that gets you read',
        paragraphs: [
          'Almost nobody gets a national business feature as their first piece of coverage. What usually happens is slower and duller: a trade publication in your sector, a regional business journal, a podcast your buyers listen to, a byline somewhere respectable. Each one adds something a reporter can verify without taking your word for it, and that is what makes the next conversation shorter.',
          'That sequence is what we do for clients, and you can run a version of it yourself. We develop the angle, write the piece to editorial standard, and get it published where our relationships are real — then pitch upward with a stronger record behind your name than you had at the start. Which outlets fall into which group is something we tell you before you spend anything.',
        ],
      },
    ],
    realityCheck: 'Inc. is editorially selective and cannot be bought. No agency controls whether a reporter there takes your story, and any guarantee of an Inc. feature should be read as a guarantee of something else — usually a different site with a similar-sounding name. We will tell you honestly whether we think a pitch is worth making, and where we can place you in the meantime. That answer is sometimes not yet.',
    faqs: [
      { question: 'Does being on the Inc. 5000 get me a feature?', answer: "No. The list is a ranking produced from an application and financial verification; a feature is a reporter's decision about whether your story is worth telling. They are separate tracks inside the same publication. A list placement is still useful — it is a third-party credential you can point to — but treat it as a credential rather than as coverage." },
      { question: 'I would rather not discuss revenue. Can I still be covered?', answer: 'Sometimes, but you are making it harder. Operator-focused journalism leans on figures, and a founder who will not confirm anything gives the writer very little to work with. If disclosure is genuinely off the table — a board restriction, a pending transaction — say so early and build the story around a method or a decision instead. Just know which stories that rules out.' },
      { question: 'How do I know a placement is really Inc.?', answer: 'Check the domain and the section, not the logo in a proposal. Look at how the piece is labeled, who is credited as the author, and whether the same headline appears on a network of sites with different names. If an agency will not show you the exact URL format before you pay, that is your answer. Ask us the same question about anything we quote you.' },
    ],
  },
  {
    slug: 'how-to-get-press-for-your-startup',
    intro: [
      'The advice founders get about coverage almost always skips the first question: whether it is too early. Coverage does not create demand that is not already there. What it changes is how quickly people trust you once they have heard your name from somewhere else — an investor, a recruiter, a customer who mentioned you in a meeting. If nobody is hearing your name yet, there is nothing for it to accelerate.',
      'Once they are, the calculus flips quickly. Three groups check you before they commit — investors between meetings, senior candidates before they resign, and first customers who have to defend the choice to somebody else. This is about what each of them is actually looking for, and how to give it to them without pretending you are further along than you are.',
    ],
    keyPoints: [
      'Press accelerates trust in people who already heard your name; it does not manufacture demand from nothing.',
      'Investors, senior candidates and first customers all search you at the same decision point, for different reasons.',
      'A funding announcement is one day of news; the story built around it keeps working for years.',
      'Before product-market fit, spend on the product — coverage of a company still changing shape ages badly.',
      'Pick outlets your specific readers already trust, not the ones with the most recognizable logo.',
    ],
    sections: [
      {
        heading: 'When it is too early',
        paragraphs: [
          'If you have a landing page, a waitlist and no shipped product, press is the wrong purchase. There is nothing yet for a writer to describe except intention, and an article about intention is the one piece of coverage that can actually hurt you — it dates fast, it ranks for your name, and it describes a company that no longer exists in that form six months later.',
          'The moment it starts paying is when someone outside your control begins searching for you. That is usually the week you open a round, post a senior role, or sign the kind of customer who has a procurement process. Before then, put the money into the product. After then, the absence of anything credible under your name is a cost you are paying without seeing the invoice.',
        ],
      },
      {
        heading: 'What each reader is checking',
        paragraphs: [
          'Investors are not reading your coverage for information. They are reading it for signal — whether an outsider found you credible enough to write about, whether your explanation of the market survives contact with someone who is not paid by you, and whether the story you told them in the meeting matches the one in print. Contradictions between the two do real damage.',
          'Senior candidates are running a risk assessment, often with a partner reading over their shoulder. They want to know the company is real, the founders are sane, and the thing has a future worth two years of their life. A single substantial article that explains what you are building answers more of that than a careers page ever will.',
          'First customers have the hardest job, because they are spending someone else\'s budget on an unknown vendor. What they need is something to forward — a link from a source their boss recognizes, which turns "I found this startup" into "this is the company that was written up about the supply problem we have." That forwarding moment is most of what press does for early revenue.',
        ],
      },
      {
        heading: 'Angles that exist before traction',
        paragraphs: [
          'You do not need growth numbers to have a story. Founders reliably underrate three things they already have: the specific reason they left a job to do this, the thing they learned building the first version that contradicts what their industry believes, and the problem their earliest users actually had, which is almost never the one the pitch deck describes.',
          'The test for any of these is whether a stranger in your industry would argue with it. Write the claim as one sentence. If it survives an argument with a skeptical peer, it will survive an editor, and it will give you something to say in an interview beyond describing your own product.',
        ],
        list: [
          'Why you left: the job you walked away from and the problem that made it unbearable.',
          'The wrong assumption: what your first build got wrong and what users made you change.',
          'The category argument: something your whole industry repeats that you now know is false.',
          'The operating detail: a process you run differently, described concretely enough to copy.',
          'The customer nobody serves: a segment everyone ignores and what you learned serving it.',
        ],
      },
      {
        heading: 'Funding news and its short life',
        paragraphs: [
          'A raise is the easiest thing to get written up and the least durable. The announcement runs, it appears in a few newsletters, and within a week it is behind whatever raised more. Plan for that. The version worth building is the feature around the raise — what the money is for, what the year before it taught you, what has to be true for the thesis to work.',
          'If you have not raised and do not plan to, you have not lost much. Bootstrapped companies have a cleaner story than funded ones in many sectors, and the operating detail is more interesting than a term sheet. Do not wait for a funding event to justify talking. Waiting for news is how founders end up with nothing published in the year that mattered.',
        ],
      },
      {
        heading: 'Choosing outlets your readers use',
        paragraphs: [
          'The instinct is to chase the largest logo available. The better question is which publications the three people above already read, or already trust when they see the name. For an enterprise buyer that is often a trade title nobody outside the sector has heard of. For a consumer product it might be a general-interest site with real search visibility for your category.',
          'It helps to know what kind of surface you are looking at. Fast Company, Inc., Business Insider and Bloomberg are editorially selective, and nobody can promise them to you. MSN, Apple News and Google News are not newsrooms at all — they carry or index work published elsewhere, so you reach them through a partner publication rather than by pitching them directly. Titles like Yahoo Finance, Benzinga and Digital Journal are more reachable, and worth understanding on their own terms rather than treating every logo as equivalent.',
        ],
      },
      {
        heading: 'Using the coverage once it exists',
        paragraphs: [
          'A published article is not the finish line; it is an asset most founders leave idle. Put the link where the three readers will hit it — the site, the deck, the outbound email, the careers page, the founder bio. Send it to the investors who passed, with one line and no ask. Coverage works hardest when it arrives just after someone has been thinking about you.',
          'It also feeds the systems that answer questions about you now. Search results are one; the AI assistants your buyers ask about vendors are another, and they summarize from published, attributable sources rather than from your homepage. A record of real articles under your name is what those tools have to work with. Nothing else you publish does that job.',
          'You can run all of this yourself with a few weeks of effort. If you would rather not, that is what we do — we build the angle, write the piece to editorial standard, and place it with publications your buyers already trust. We say plainly which outlets we can place and which we can only pitch toward.',
        ],
      },
    ],
    realityCheck: 'Press will not save a company that has not found its market. It shortens the distance between hearing your name and believing it, and that is all. If your problem is that nobody wants the product, coverage buys you a more visible version of the same problem. The other uncomfortable part: a wall of logos impresses nobody who reads carefully. One substantial article beats a page of syndicated reprints of the same paragraph.',
    faqs: [
      { question: 'How early is too early for press?', answer: "If the product is not in anyone's hands, too early. If you are raising, hiring above a certain level, or selling to companies with a procurement step, it is time — those three moments all end with someone searching your name. The test is not company age or revenue. It is whether people are already looking you up and finding nothing." },
      { question: 'Do investors actually care about press?', answer: "Not as a credential on its own. What they care about is consistency — whether the market you described holds up in someone else's words, and whether you can explain the business to a non-expert. Coverage is also how associates build a picture of you before the partner meeting. It rarely wins you a term sheet, and its absence rarely loses one, but it shapes the conversation you walk into." },
      { question: 'Should we hire an agency or do it ourselves?', answer: "Do it yourself while you have more time than money, and while the story is still changing weekly. It is slow but learnable, and founder-written pitches often land better than agency ones. Hire out when the founder's hours are worth more elsewhere, or when you need several placements in a defined window. Ask any agency which outlets it can place and which it can only pitch." },
    ],
  },
  {
    slug: 'how-to-get-press-for-your-saas-company',
    intro: [
      'Software is bought by more people than you ever meet. The person on the demo call is a champion, not a decision, and somewhere behind them sit a finance lead, a security reviewer and an executive who will type your company name into a search bar and judge you on whatever comes back.',
      'That search is the part of the funnel you cannot instrument, and it is where coverage earns its place. What follows is how to find a story inside a product that looks like a login screen, how to match it to outlets that will actually run it, and how to tell whether the moment is right at all.',
    ],
    keyPoints: [
      'Your champion has to sell you to people who never took the call; coverage is what they forward.',
      'A product tour is not a story — editors publish arguments, and the product shows up as evidence.',
      'Trade titles reach buyers who already have the problem; national surfaces reassure the committee that never met you.',
      'Selective business titles are pitched, never purchased; treat any quoted price for one as a warning.',
      'Answer engines describe your category from published sources, so absence from those sources is itself a result.',
    ],
    sections: [
      {
        heading: 'Who reads you before anybody signs',
        paragraphs: [
          'The demo call is the smallest part of a software purchase. Your champion likes the product and then has to carry it to people who were never on the call — a finance lead with a spreadsheet of renewals, a security reviewer who has to sign something, an executive who has heard of none of you. Each of them looks you up separately, and none of them tells you they did.',
          'What that search returns is fairly predictable. Your own site, which they discount because you wrote it. Review listings, which read the same for every vendor in your category. A LinkedIn page. Then, if it exists, something published by somebody with no stake in the deal — and that last item is the only part of the set that carries any independent weight.',
          'There is a second reader now. Buyers ask an AI assistant to summarize a category before they shortlist, and those summaries are assembled from what has been published about the companies in it. If nothing outside your own domain describes what you do, you are not in the summary. That is not a ranking problem you can fix with more pages on your blog.',
        ],
      },
      {
        heading: 'Find the story your product is hiding',
        paragraphs: [
          'Most SaaS pitches fail in the first paragraph because they describe software. An editor reading about a platform that helps teams streamline workflows has learned nothing, and neither has a reader. The product is not the story. It is the evidence for a story about how a particular kind of work is changing, and you have to decide what that argument is before anyone writes a word.',
          'The raw material is usually already in the building. You sit closer to how your customers actually work than any analyst does, you have made expensive decisions you could explain honestly, and you know which assumption everyone in your category repeats without checking. Pick one, write it for someone outside your industry, and let the product turn up as proof rather than as the subject.',
        ],
        list: [
          'The pattern in your usage data that contradicts what your industry assumes about how the work gets done.',
          'A decision with a cost attached: a plan you killed, a pricing model you abandoned, a bet that failed.',
          "The buyer's guide to your own category, including the cases where software like yours is the wrong answer.",
          'A migration story: what breaks when a company moves off the tool everyone in your market still defaults to.',
          'The operating detail behind a milestone — how the round is being spent, or how a team scaled without headcount.',
        ],
      },
      {
        heading: 'Say something a competitor would dispute',
        paragraphs: [
          'Softness is the most common reason a good company gets no coverage. If every sentence in your piece is something no reasonable person would argue with, there is nothing to publish. Take a position: that a category is defined wrongly, that the metric everyone reports is misleading, that the standard way of buying this software produces bad outcomes. Then defend it with what you have actually seen.',
          'There is a discipline to this that founders often skip. Every claim in the piece has to be one you can stand behind in front of a customer, an investor or a competitor, because it stays online permanently and it will be quoted back to you. If you cannot show the number, do not print the number. Write the observation instead — it is usually more convincing anyway.',
        ],
      },
      {
        heading: 'Where a software story realistically lands',
        paragraphs: [
          'Outlets are not one tier, and treating them as one is how founders lose months. Vertical trade titles have small readerships that happen to contain your actual buyers. Broad business and finance surfaces — Yahoo Finance, Benzinga, Digital Journal, International Business Times — reach a general reader and give a committee something recognizable to point at. The two do different jobs, and a sensible plan uses both.',
          'Above that sit the selective titles: Business Insider, Fast Company, Inc., Bloomberg. These are editorially selective, and nobody sells access to them. You can be pitched toward them, and a body of published work behind your name makes that pitch easier to make, but anyone quoting you a price for a placement there is selling something they do not control.',
          "MSN, Apple News and Google News are worth understanding correctly, because they are sold dishonestly more than anything else. None of them commissions a profile of your company. They are distribution surfaces and an index: a piece published by a partner publication can appear there, which is how those logos end up on a founder's press page. The placement is with the publication, not with Microsoft, Apple or Google.",
        ],
      },
      {
        heading: 'Timing it against your own roadmap',
        paragraphs: [
          'Funding is the obvious trigger and the most wasted one. A round is news for roughly a day, and the announcement itself is the least interesting thing about it. The version with a longer life explains what the money is for, what the year before it got wrong, and what has to be true for the plan to work. Write that, and the raise becomes the peg rather than the point.',
          'The less obvious windows are better. A pricing change, an enterprise customer you can finally name, a hire who came from somewhere your buyers respect, the first time your usage data says something you did not expect. None of these are announcements, which is exactly why they read as journalism rather than marketing. Keep a running list; most companies find they have several sitting unused.',
          'Do not wait for the perfect moment before you start. Coverage compounds: the second piece is easier to place than the first, the third easier again, and the outlet you actually want tends to become plausible only after there is a record behind your name. Starting the quarter before you need it is the whole trick.',
        ],
      },
      {
        heading: 'The week after it publishes',
        paragraphs: [
          'A link that sits in a Slack channel and nowhere else has done a fraction of its job. Put it where the searching happens: a press section on your site, the resources page your champion sends internally, the follow-up email after a demo, the cover note on a security questionnaire. Sales teams use these far more than marketing teams expect them to, once they know the link exists.',
          'Then look at the right signals. Branded search volume, what your champions say when you ask how the internal conversation went, how often a deal stalls on nobody having heard of you — those move before anything in your attribution model does. Judging a feature by last-click will always make it look worthless, because last-click cannot see the part of the cycle it works on.',
        ],
      },
    ],
    realityCheck: 'Press does not appear in last-click attribution, and anyone quoting you a pipeline figure from a feature is guessing. It works on the part of the cycle you cannot instrument — the search before the demo, the deck your champion builds internally, the security review. If your product is low-cost and self-serve, and nobody researches you before signing up, put the money into acquisition instead. And no agency, ours included, can guarantee a selective title.',
    faqs: [
      { question: 'We just closed a round. Is that enough to get covered?', answer: 'It is a reason to be in touch, not a story on its own. Rounds are announced constantly and most get a line in a database. What editors take is what sits underneath — the problem you raised against, the thing you got wrong last year, what the hiring plan says about where the market is going. Lead with that and mention the round second.' },
      { question: 'Can we do this ourselves instead of hiring an agency?', answer: 'Yes, and some founders do it well. The costs are time and reach: writing to an editorial standard is a real skill, and cold pitches from an unknown name mostly go unanswered. Hiring buys drafting and relationships with reporters, not certainty. If you have a strong writer in-house and the patience for rejection, start alone and see how far it gets.' },
      { question: 'We are pre-launch with no customers. Should we wait?', answer: 'Usually, yes. With no users, you have no evidence and no observations that are yours rather than borrowed, and a piece written from a roadmap reads exactly like one. The exception is a founder with a genuine record elsewhere, where the story is the person and the decision to build this. Otherwise, wait until the product has taught you something.' },
    ],
  },
  {
    slug: 'how-to-get-press-as-a-coach',
    intro: [
      'Anyone can print a business card that says coach. There is no board, no registry and no license to check, which means your buyer has to work out whether you are any good from whatever is publicly readable about you — and most of what they find, you wrote yourself.',
      'So the job is not to say you are credible. It is to put something in the world that somebody else stood behind. Below is what to publish when your results belong to your clients, which stories editors actually take from a coach, and how to use a feature once it exists.',
    ],
    keyPoints: [
      'Coaching has no board or registry, so a published article does the verification work a license would elsewhere.',
      'Publish the method, not the miracle; the reader who tries one exercise tonight is the one who books.',
      'Client stories need written permission and no numbers you cannot show — rounded outcomes read as invented.',
      'Aim at the trade outlet your clients read before the national magazine your peers admire.',
      "Click the logos on any seller's site before you buy; a mark linking nowhere is just a graphic.",
    ],
    sections: [
      {
        heading: 'The minutes after somebody likes you',
        paragraphs: [
          'Coaching clients rarely arrive cold. Somebody hears you on a podcast, sits in your session at a conference, or gets your name from a friend who worked with you — and then, before they book anything, they go looking. That gap between interest and the deposit is short, it is entirely private, and it is where most coaching businesses quietly lose people.',
          'The problem is what the search returns. Your site, your funnel, your testimonials page, your own posts — all of it written or commissioned by you. A careful buyer discounts every word of it, not because they think you are lying, but because they have no way to tell. They are looking for one thing you did not produce yourself.',
          'It matters more in coaching than in most fields because there is nothing else to check. No board, no license number, no registry, no malpractice record. A prospective client cannot verify you the way they would verify a dentist, so they substitute the only proxy available — whether anyone outside your business has taken you seriously in public.',
        ],
      },
      {
        heading: 'What you can publish about clients',
        paragraphs: [
          'The instinct is to lead with transformations, and it is the wrong instinct. Client work is confidential unless the client says otherwise, and a coach who publishes a recognizable story without asking has told every future client something about how they will be treated. Ask first, in writing, and be specific about what will appear.',
          'Then there is the numbers question. Rounded outcome claims — the revenue somebody tripled, the promotion they landed — are the fastest way to make a piece read as an infomercial, and you generally cannot prove them. If you did not measure it and cannot show it, leave it out. What survives that filter is usually more interesting: what the person believed when they arrived, where they got stuck, what changed their mind.',
        ],
        list: [
          'Patterns across many clients, with no individual identifiable — the objection you hear in week one, every time.',
          'Your own history: the job you left, the failure that taught you the work, what you got wrong early.',
          'A named client story, told with written permission and reviewed by them before it goes anywhere.',
          'Observations about your field: advice that keeps circulating, and what you have watched it cost people.',
          'The exercise itself, written out fully enough that a stranger could run it this week.',
        ],
      },
      {
        heading: 'Give the method away',
        paragraphs: [
          'Coaches hold back the framework because they think it is the product. It is not. The product is you applying it to a specific person under pressure, which nobody gets from an article. A reader who tries your first exercise and finds it useful has just had a sample of what working with you is like, and that is the only reason they will pay for the rest.',
          'There is a practical test for whether a draft is useful enough. Hand it to someone in your target market and ask what they would do differently tomorrow. If the answer is nothing, the piece is a brochure with a byline. If the answer is a specific action, you have something an editor can run and a reader will remember.',
        ],
      },
      {
        heading: 'Four stories that get published',
        paragraphs: [
          'Most coaching pitches are variations on the same piece: my journey, my framework, my results. The ones that get taken tend to have a sharper shape, usually because they contain something the writer would rather not say. Pick whichever of these is true for you, and resist the urge to soften it in the draft.',
          'Notice what these have in common. None of them is about how good you are, and all of them are things only you could write. Editors are not short of coaches offering to explain motivation. They are short of people willing to say something specific and slightly costly, with their name attached.',
        ],
        list: [
          'The screen: how you decide who you will not take on, and why you turn that work away.',
          'The reversal: something you taught for years, stopped teaching, and what changed your mind about it.',
          'The narrow piece: written for one profession you know well, rather than for everybody who wants to improve.',
          'The correction: a piece of advice your field repeats that you have watched fail in front of you.',
        ],
      },
      {
        heading: 'Where coaching pitches go wrong',
        paragraphs: [
          'The most common failure is voice. Copy written in the register of a sales page — the promise, the transformation, the invitation to book a call — will not survive an edit at any publication worth being in, and readers in your market have been trained to distrust it. Write the way you would speak to a client who is skeptical and paying attention.',
          "The second is the logo bar. Coaching is marketed to harder than almost any other field, and a lot of what gets sold is a row of publication marks linking to nothing, or to a page that has since disappeared. Before you buy anything, click the logos on the seller's own site. If the article does not load, or your name would sit on a page nobody visits, you are buying a graphic.",
          'The third is aiming at the wrong title. A coach who works with surgeons is better served by a healthcare trade outlet than by a national business magazine, and a piece placed where your buyers actually read does more than a famous name your buyers never see. Chase the reader, not the logo.',
        ],
      },
      {
        heading: 'Using the feature once it exists',
        paragraphs: [
          'A published piece does nothing sitting in a folder. It belongs in the bio you send podcast hosts, at the top of your booking page, in the follow-up email after a discovery call, and in the note you send the person who referred someone to you. The referrer will forward it, which is the highest-value use it has.',
          'Describe it accurately, always. Say where it ran and let people click. Do not stretch a contributor piece into a claim the reader will take as a staff profile, and do not imply an endorsement the publication never gave. The whole value of the thing is that somebody else vouched for you, and overstating it puts that back at zero.',
        ],
      },
    ],
    realityCheck: 'Coverage will not fill your calendar by itself. It shortens the distance between somebody hearing about you and trusting you enough to book, and it does nothing at all if the offer is unclear or the work is not good. Coaching also attracts more press-adjacent selling than most fields, so check anything you are quoted against the actual live article. And no agency can promise you the most selective titles.',
    faqs: [
      { question: 'Do I need a certification before a publication takes me seriously?', answer: 'No. Certifications matter to some corporate buyers and to almost no editors. What carries weight is specific experience — the years you spent running sales teams before you coached them, the clinic you managed, the pattern you have watched play out again and again. If you have none of that yet, build it publicly: write narrowly about what you are actually seeing, and let the record accumulate.' },
      { question: "Can I use a client's results in the article?", answer: 'With their written permission, and only the parts you can actually stand behind. Get sign-off on the exact wording before it goes anywhere, including anything that could identify them — the sector, the city and the role together often do. Where you cannot get permission, describe the pattern rather than the person. It reads as more credible anyway.' },
      { question: 'Which publications are realistic for a coach?', answer: "Business and lifestyle titles that run practical advice are reachable, and so are the trade outlets covering whatever profession your clients work in. Wider surfaces such as NY Weekly, CEO Weekly, Women's Journal and Fox Interviewer run this kind of profile and interview. The selective national magazines are a different matter — they can be pitched, not bought, and anyone telling you otherwise is guessing." },
    ],
  },
  {
    slug: 'how-to-get-press-as-a-consultant',
    intro: [
      "Most of the best evidence you have is unusable. The engagement that proves you know what you are doing sits behind an NDA, the client will not be named, and the numbers belong to someone else's board pack. So consultants tend to conclude there is nothing to publish and stay quiet.",
      'That is the wrong conclusion. What buyers want from a consultant is not a case study, it is evidence of judgment, and judgment can be shown without naming anybody. Here is what remains publishable under confidentiality, which outlets suit a practice your size, and how one article does work across a whole business development cycle.',
    ],
    keyPoints: [
      'Confidentiality rules out case studies, not publishing — the pattern, the sequence and the diagnosis are yours.',
      'You are compared with firms that have more people; published thinking is how a small practice shows method.',
      'Write about how you decide, and you help set the criteria you are later judged against.',
      'A trade title reaches buyers who can hire you; a national one reassures the committee behind them.',
      'Publish before you need it — the article must already exist the evening somebody looks you up.',
    ],
    sections: [
      {
        heading: 'Two searches decide the first call',
        paragraphs: [
          'Consulting work almost always arrives through a person. Someone in a meeting says your name, someone else writes it down, and two searches follow. The person who referred you checks that you still look like a safe recommendation. The buyer checks you against the other names on the list, at least one of which belongs to a firm with far more people than you have.',
          'Neither of those people is looking for a brochure. They are trying to work out whether you have seen their problem before, and whether you will embarrass the person who suggested you. A website tells them what you sell. Published work — under your name, in something they did not commission — tells them how you think, which is the thing they are actually buying.',
        ],
      },
      {
        heading: 'What confidentiality actually rules out',
        paragraphs: [
          "Take the constraint seriously and it turns out to be narrower than it feels. What you cannot publish is the client's identity, anything that identifies them by elimination, their numbers, their internal documents, and any characterization of their people. What you can publish is everything you learned that is not theirs: the pattern, the sequence, the diagnostic questions, the failure modes you keep meeting in that sector.",
          'The elimination point is the one people miss. A mid-sized regional insurer in the Southeast that acquired a competitor last year names the client to anyone in that industry. Strip the specifics that identify and keep the specifics that teach — the decision, the sequence, the thing that went wrong — then check the draft with one question: could a competitor of my client work out who this is?',
          'If you do want a named example, ask. Some clients will say yes to a piece that makes them look thoughtful, particularly once the engagement is finished and the results have landed. Put the request in writing, offer them approval over the wording, and accept a no without pushing. A single named engagement, cleared properly, is worth more than a page of vague allusion.',
        ],
      },
      {
        heading: 'Publish the diagnosis, not the outcome',
        paragraphs: [
          'Buyers cannot evaluate your results. They cannot verify them, and every consultant on the list claims good ones. What they can evaluate is your reasoning — so write about how you decide. What you look at before proposing anything. The question that changes a scope. The answer that makes you walk away from work. That part of the job is rarely written down, and it is the part that reads as competence.',
          'This has a second effect worth planning for. Whoever describes the criteria tends to define them, so a piece explaining how to choose between consultants who look identical on paper puts you inside the standard the buyer then applies. Written honestly — including the cases where a larger firm is the right answer — it is more persuasive than any claim you could make about yourself.',
          'One caution about failure stories, which are the most credible thing an independent consultant can publish. Write the structural reason a project did not work — a sponsor who left, a mandate that was never real, a decision taken before you arrived — and never the personal one. Blame reads as indiscretion, and every prospective client reads it as what you will eventually say about them.',
        ],
      },
      {
        heading: 'Narrow usually beats famous',
        paragraphs: [
          'Independent consultants tend to want the biggest name available, which is understandable and often the wrong call. A trade publication read by facilities directors, hospital administrators or logistics operators reaches a small audience composed almost entirely of people who can hire you. A national business title reaches an enormous audience composed almost entirely of people who cannot.',
          'The national piece still does a job, just a different one. It is what your champion forwards to a procurement committee that has never heard of you, and it is what sits in the search results when a referral checks you late at night. Broad surfaces like Yahoo Finance, Benzinga and International Business Times serve that purpose; the selective business magazines serve it better and cannot be bought.',
          'A sensible plan runs both and does not confuse them. Trade coverage for the buyers, broader coverage for the people who validate the decision, and no pretense that a syndication surface is a newsroom. If a piece appears on MSN or in Apple News, that happened because the publication that ran it distributes there — say it that way, because the person checking you can tell.',
        ],
      },
      {
        heading: 'Time it to how work arrives',
        paragraphs: [
          'Consulting demand is lumpy and mostly invisible until it is urgent. The useful principle is to publish before you need it, because the piece has to already exist on the evening somebody looks you up. Coverage that goes live during a quiet quarter is doing its work later, when a name gets written on a whiteboard in a meeting you are not in.',
          'Certain moments are worth building around: going independent after years inside a large firm, raising your fees, moving into a new sector, or publishing a point of view before a conference where your buyers gather. Each gives an editor a reason to run something now, which is usually what separates a pitch that lands from one that sits unanswered.',
        ],
      },
      {
        heading: 'Make one article do several jobs',
        paragraphs: [
          'The return on a single piece comes from reuse rather than from readership. Most consultants publish something, post it once and forget it, which wastes the part that actually converts. Build it into the machinery of how you sell — the places a buyer, a referrer or a committee member already encounters your name.',
          'Describe it precisely wherever it goes. Name the publication, link the article, and do not let a logo imply a staff profile you did not have. The people you are trying to impress are professional skeptics, and a small overstatement that gets caught costs more than the coverage was worth.',
        ],
        list: [
          'An appendix to every proposal, so the reasoning behind your approach arrives with the price.',
          'The link in an introduction email, so a referral opens the conversation already knowing how you work.',
          'Evidence for panel and conference organizers, who need something to check before they put you on stage.',
          'A page on your own site, so the search a buyer runs at night returns something you did not write.',
          'Material for the next pitch — a record of published work makes the following outlet easier to approach.',
        ],
      },
    ],
    realityCheck: 'Press is not a lead source for a consulting practice, and treating it as one will disappoint you. It changes the temperature of conversations you were already going to have. If your positioning is still vague, an article will make the vagueness permanent and public — fix that first. And the selective business titles cannot be promised by us or anyone else, whatever the pitch deck says.',
    faqs: [
      { question: 'How do I write about an engagement I cannot name?', answer: 'Describe the pattern rather than the project. The situation type, the decision, the sequence you followed and what you would do differently are all yours to publish. Remove anything that identifies by elimination — sector, region, size and timing together usually do. If you are unsure, show the draft to the client before it runs; many will agree to an anonymized version they have read.' },
      { question: 'Will coverage bring inbound work?', answer: 'Sometimes, and not reliably. The dependable effect is on work already heading your way: a referral who arrives convinced, a shortlist where you are no longer the unknown, a fee conversation that starts from method rather than day rate. If you need pipeline this quarter, coverage is the wrong instrument — call the people who already know you.' },
      { question: 'I am a fractional executive rather than a firm. Does this apply?', answer: 'Mostly, with one adjustment. Fractional roles are bought on judgment and availability, and the buyer is often a founder or a board rather than a procurement committee. Write for that reader: what the first months in the role actually look like, what you tell a founder who wants to hire full-time too early. The confidentiality rules are the same.' },
    ],
  },
  {
    slug: 'how-to-get-press-as-a-real-estate-agent',
    intro: [
      'The seller walks you to the door, thanks you, and mentions they have one more agent coming Thursday. What happens between now and Thursday is a search — your name, the team name, maybe the brokerage — and whatever comes back is the last argument made on your behalf.',
      'That search is where press earns its keep. Coverage will not ring your phone the way a mailer does; it settles a decision already in motion, and it keeps settling them for the next seller who looks you up months from now. The work is figuring out what you can say that no other agent in your market can, and then saying it somewhere a seller recognizes.',
    ],
    keyPoints: [
      'Press works on the listing appointment you already have, not on strangers — treat it as lead generation and you will be disappointed.',
      'Your only unfair advantage is street-level specificity: what buyers ask for this month, what sellers refuse to accept.',
      "Get your broker's media policy and your state's licensee disclosure rules in writing before a single draft exists.",
      'Fair housing rules govern how you describe neighborhoods in print exactly as they govern how you describe them aloud.',
      'An article is a leave-behind, a relocation referral credential and a search result — use all three or it underperforms.',
    ],
    sections: [
      {
        heading: 'What press actually moves',
        paragraphs: [
          'Agents usually want coverage to produce buyers. It rarely does that directly. What it does is win the comparison you are already in — the seller choosing between three people who all promised professional photography, a pricing strategy and a network of buyers. One of those three has an article under their name in a publication the seller has heard of. That is the whole mechanism, and it is worth more than it sounds.',
          'The second thing it moves is the referral that arrives from another market. Agents send relocating clients across state lines constantly, and the sending agent runs the same search a seller runs, with more at stake — their own client relationship is riding on the handoff. A name with published work behind it is easier to pass along than a name with a portal profile behind it.',
          'It also has a slower effect that is easy to miss. Prospects who are not selling yet still read, and the piece stays online. Six months after publication, someone who never contacted you can arrive at your listing appointment having already decided you are the serious one. You will not be able to trace that, which is why press is measured on the appointments you win rather than on clicks.',
        ],
      },
      {
        heading: 'What you know that editors want',
        paragraphs: [
          'Every agent pitch sounds the same because every agent pitches the same thing: experience, service, results. None of that is publishable. What is publishable is the granular, unglamorous knowledge you pick up walking through houses every week — the thing an editor cannot get from a national data set and a competitor cannot copy from your website.',
          'Be careful with numbers. If you quote market data, quote it from a source you can name — your MLS, a county recorder, a published index — and say where it came from. Agents get into trouble in print the same way they get into trouble in a listing presentation: repeating a figure they heard somewhere. An editor will cut an unsourced statistic, and a seller who checks one will remember.',
        ],
        list: [
          'What buyers have started asking for in showings this season, and what they have quietly stopped caring about.',
          'Which streets or buildings behave differently from the regional headline, and the reason locals give for it.',
          'The preparation decisions you watch sellers get wrong, from a listing appointment you actually sat in.',
          'What an out-of-state buyer misunderstands about your area before they arrive, and what changes their mind.',
          'How a deal in your market actually closes — timelines, inspection norms, who pays for what.',
        ],
      },
      {
        heading: 'Where an agent realistically lands',
        paragraphs: [
          'Aim at three tiers and understand the difference between them. Regional business journals and local news outlets care about your market because it is their market — that is the hardest tier and the most useful one. Real estate and business trade titles want operator detail. And there is a wide band of business and lifestyle publications that run professional features regularly, where the bar is a genuinely useful article rather than a news event.',
          'Agents ask specifically about MSN, Apple News and Google News. None of them commission profiles of realtors. They are distribution surfaces and indexes that carry or list material from publications already inside their network, so coverage reaches them by way of an outlet that is already there, and nobody can promise a particular story travels. Treat a syndicated appearance as a bonus rather than the goal.',
          'Yahoo Finance, MarketWatch, Benzinga and a number of regional digital titles are more reachable, and it is worth saying why rather than implying access nobody has. They publish at high volume and they carry contributed and partner material alongside staff reporting, so the route in is shorter. A seller who recognizes the name will not audit how the piece got there. You should still know which kind of placement you are getting.',
        ],
      },
      {
        heading: 'Your broker and the rules',
        paragraphs: [
          "Two conversations should happen before anything is drafted. The first is with your broker. Most brokerages have a media and advertising policy, some require review of anything published under an agent's name, and a few restrict how the brokerage name may appear. Ask for it in writing. Finding out afterward that a piece needed sign-off is a bad week for everyone involved.",
          "The second is with your state's rules. Licensing regulators differ on what must appear in an agent's advertising — license status, brokerage affiliation, sometimes a license number — and on whether an article carrying your name counts as advertising at all. Fair housing obligations apply to how you describe a neighborhood in print exactly as they apply out loud, which rules out shorthand about who lives where and puts the weight on housing stock, commute times and what things cost.",
          'Claims about your own production need the same care. Top producing and number one in the area are the sentences that get flagged, because they usually rest on a ranking with conditions attached. If you can name the source, the year and the geography, say all three. If you cannot, the article is better without the line, and it will read as more credible for not having it.',
        ],
      },
      {
        heading: 'Using the article after publication',
        paragraphs: [
          "A published piece that lives only on the publication's site is doing a fraction of its job. The highest-value use is the listing presentation. Print it. Leave it behind. It is the one item in the folder the other two agents did not bring, and it sits on a kitchen counter for a week while a couple decides.",
          'Then put it where the search happens. Link it from your site and your portal bios, add it to the email you send after an appointment, and give it to agents in other markets who send you referrals. The version of you that a stranger finds should include at least one thing you wrote, high enough on the page that they see it without scrolling.',
          'One piece is a credential. Three or four, spaced over a year and covering different ground, start to look like a body of work — and that is the difference between an agent who was written about once and an agent who is visibly the person people go to about this market.',
        ],
      },
    ],
    realityCheck: 'Press will not fill your pipeline. If you need transactions this quarter, spend the money on lead generation and come back to this later. Coverage does not target your zip code, cannot be guaranteed at any specific publication, and will not be traceable to a closing. What it does is win close comparisons and survive a search — which matters most to agents who already get appointments and lose some of them narrowly.',
    faqs: [
      { question: 'Will an article bring me listing leads?', answer: 'Occasionally, and not reliably enough to plan around. The dependable return is on appointments you already have — the seller comparing you with two other agents, the out-of-market agent deciding whether to send a referral. If your business needs volume at the top of the funnel, coverage is the wrong tool. If it needs a higher close rate on the appointments you get, it is the right one.' },
      { question: "Do I need my broker's permission?", answer: "Assume yes until someone tells you otherwise in writing. Most brokerages have a policy covering anything published under an agent's name, and some require review before it runs. The conversation is short, and it is far easier before a draft exists than after one is live. Where a brokerage does require changes, they are usually about naming and disclosure rather than substance." },
      { question: 'Should I aim for local press or national?', answer: 'Both, for different reasons. Local coverage carries more weight with a seller in that market and is harder to get, because you are competing with actual news. National and business titles are more attainable and travel further — they reach the relocating buyer and the referring agent from another state. Most agents do best with one strong local piece and a few broader ones.' },
    ],
  },
  {
    slug: 'how-to-get-press-as-an-attorney',
    intro: [
      'Legal advertising is one of the more heavily governed corners of marketing, and most of what firms produce shows it — careful, generic, interchangeable. Press is the unusual case where the constraints work in your favor. An article that explains the law cannot promise a result, so it never sounds like a promise, which is exactly why a reader trusts it.',
      'Two people will read it and neither is browsing. One has a problem and has been reading about it for days. The other is a lawyer with a conflict or a matter outside their practice, deciding whose name to put in an email. Write for those two and the rest of the work — where to place it, what your bar allows — gets much simpler.',
    ],
    keyPoints: [
      'Two readers matter: the person living through the problem, and the lawyer deciding whether to refer it to you.',
      "Your state's advertising rules, not your publicist, decide what the article can say — read them before drafting.",
      'Explanation outperforms achievement: how a matter actually proceeds beats any account of what you won.',
      'Timely commentary on a ruling or new statute is the easiest yes an editor gives a lawyer.',
      'Client facts stay out unless the client consents in writing, even when the matter is public record.',
    ],
    sections: [
      {
        heading: 'Write for the referring lawyer',
        paragraphs: [
          'Most firms write for prospective clients and stop there. The higher-value reader is often another attorney. Referrals arrive because a lawyer has a conflict, a matter in a practice area they do not touch, or a client who needs someone in your county — and they are staking their own relationship on the handoff. They will look you up, and what they want is evidence you know how this kind of matter unfolds.',
          'An article written at that reader is a different animal. It assumes legal literacy, it goes into procedure, and it is candid about where a matter gets difficult. A piece that says here is the point in these cases where things usually go sideways, and here is what we do about it, is worth more to a referral source than a decade of directory listings.',
          'The client-facing version is not the same piece. Someone in the middle of a problem needs calm, plain sequence: what happens first, what the deadlines are, what they should stop doing right now. Most firms need both eventually. Pick one to start, and be honest about which reader actually sends you work.',
        ],
      },
      {
        heading: 'What you can publish without a client',
        paragraphs: [
          "Confidentiality is the objection every lawyer raises first, and it is legitimate. You cannot narrate a client's matter to make yourself look good, and the fact that a filing is public does not by itself release you. Consent in writing is the only clean route to a specific story, and asking for it is usually more trouble than the article is worth.",
          'Which leaves a great deal. Patterns across many matters, stated generally. Published opinions and statutes, which belong to everyone. The mistakes people make before they hire anyone. The mechanics of a process — discovery, a hearing, a closing — described so a stranger can follow it. None of that requires a single identifiable client, and all of it demonstrates the thing a reader is trying to assess.',
        ],
        list: [
          'One rule in your practice area that people reliably misread, explained for the person it lands on.',
          'The first forty-eight hours: what to do, what to sign, and what to say nothing about.',
          'A recent decision or statutory change, with what it means for the businesses or families affected.',
          'How a matter in your specialty proceeds, written for the attorney who might refer one.',
          'The questions you answer in every consultation, written out once and answered properly.',
        ],
      },
      {
        heading: 'The rules that shape a draft',
        paragraphs: [
          'Every jurisdiction differs and none of this is legal advice to you, which is a strange sentence to write to a lawyer. The recurring constraints are familiar: no claims that create an unjustified expectation of results, care with specialist and expert language where certification governs it, restrictions on testimonials in some states, and required disclaimers or advertising labels depending on the format.',
          'Two more are easy to overlook. Jurisdiction — an article that reads as advice to a national audience can drift toward practicing where you are not admitted, so say plainly which state you are describing. And the reader relationship: an article does not create one, but a piece that invites people to send you their facts can blur the line. A short disclaimer saying the piece is general information costs you nothing.',
          "Practically, this means you review the draft against your own state's rules and your firm's policy, and you keep doing it until it is right. We write to editorial standard and revise without limit. The ethics judgment is yours, and it should be — you are the one holding the license.",
        ],
      },
      {
        heading: 'Commentary and the news cycle',
        paragraphs: [
          'The fastest route into a publication for a lawyer is timing. When a court rules, a statute takes effect, or a regulator changes a filing requirement, editors need someone who can say what it means by the end of the day. That is a standing opportunity, and it goes to whoever is ready rather than whoever is best.',
          'Being ready is unglamorous. Know which changes are coming in your area, have two or three sentences you can already say about each, and be reachable within an hour. Source-request platforms are one route and they cost more time than most partners expect. A relationship with a reporter who already knows you handle this beat is the better version, and it is built before the news rather than during it.',
          'Timely pieces also age well. An explainer dated to the week a rule took effect keeps surfacing in searches long after the coverage moves on, because that is when people go looking for it. It is the one kind of legal article that gets more useful with time rather than less.',
        ],
      },
      {
        heading: 'Where legal work actually lands',
        paragraphs: [
          'Match the publication to whoever sends you matters. A local personal injury or family practice is better served by regional news and city business media than by a national business title nobody in the county reads. A commercial or regulatory practice is the reverse — the general counsel who might hire you reads business and trade press, and would not notice a hometown feature.',
          "Be realistic about the top of the market. Business Insider, Bloomberg and Forbes make their own editorial decisions, and a lawyer usually enters those pages as a quoted source inside someone else's reported story rather than as the subject of a profile. That is a good outcome and it cannot be bought. Titles like Yahoo Finance, Digital Journal and the regional digital press are more reachable because they publish more and take contributed material.",
          'Then use it. Link the piece from your firm bio, send it with the intake email, and give it to the attorneys who refer to you — not as a boast, but because it saves them the work of vouching for you. A referral source who can forward an article instead of composing a paragraph will refer more often.',
        ],
      },
    ],
    realityCheck: 'Coverage will not make a phone ring on its own, and no agency can promise you a place in a specific publication — least of all the selective national titles. Bar rules constrain what any article under your name can claim, and they should. What press does is give the person checking you out something substantive to find, and give a referring lawyer something to forward. That is a real advantage, and it is not a lead source.',
    faqs: [
      { question: 'Can I write about a case I won?', answer: "Not without the client's informed consent in writing, and often not even then if the details identify anyone else. A public docket does not release you from confidentiality, and a result described in print can read as a promise of the same outcome, which most advertising rules prohibit. The general version of the same insight, drawn from many matters, is publishable and usually more useful to a reader." },
      { question: 'Does an article count as attorney advertising?', answer: 'Sometimes, and it depends on your state and on how the piece is written. A bylined explainer with no solicitation reads differently from one ending in a call to hire you, and some jurisdictions treat both as advertising subject to labeling or retention requirements. Check your rules first. It is easier to write within them than to fix a published piece afterward.' },
      { question: 'Is it worth it for a small firm?', answer: 'It depends on where your matters come from. If most arrive by referral or search, a couple of substantive articles do real work and keep doing it for years. If your practice runs on volume advertising in a crowded market, coverage supports that spend rather than replacing it. Firms with no online presence beyond a directory listing usually see the clearest change.' },
    ],
  },
  {
    slug: 'how-to-get-press-as-a-financial-advisor',
    intro: [
      'The prospects you lose to a search never tell you. They take the referral, type your name, find a firm site, a regulatory record and a headshot, and quietly decide to keep talking to the advisor their neighbor uses. Nothing about that shows up in your pipeline.',
      'Coverage is how you put something else in that result — writing that shows how you think about money rather than asserting that you are good at it. The constraint is compliance, and it is a real one. Work with it from the first sentence rather than discovering it at the approval stage, and most of what makes a good article is still available to you.',
    ],
    keyPoints: [
      'Bring compliance in before the first draft, not after — approval shapes the piece more than any editor will.',
      'Educational writing clears review; performance figures, predictions and anything testimonial-shaped generally will not.',
      'A narrow audience beats a broad one: write for the specific client you actually want more of.',
      'Market volatility creates standing demand for advisors who explain calmly and refuse to forecast.',
      'Your article has to survive months of silence between the first meeting and the transfer paperwork.',
    ],
    sections: [
      {
        heading: 'Start with the compliance conversation',
        paragraphs: [
          "Bring this to your CCO or your firm's marketing review before you have written anything. Advisors routinely do it backwards — commission a piece, fall in love with it, and then discover that half of it cannot run. The approval process is the real editor here, and it is much cheaper to design around than to argue with.",
          'The questions worth asking up front are practical. Does anything published under your name need pre-approval, and how long does that take? How should your credentials, firm and registration be described? Does the piece need to be captured and retained, and by whom? If you are a registered representative rather than an independent RIA, review is usually stricter and slower, so plan the timeline accordingly.',
          'One more is easy to forget: what happens if the article is picked up and republished elsewhere. You will not control where a syndicated copy appears or whether a headline gets changed on it. Ask your CCO how they want that handled before it happens rather than explaining it afterward.',
        ],
      },
      {
        heading: 'What survives review',
        paragraphs: [
          'The line that matters is between education and promotion. How you think about a decision travels; what your clients earned does not. Performance figures, projections, anything reading as a forecast, and client praise in quotation marks are the four things that reliably stop a draft. Once you accept that, the field is considerably wider than most advisors expect.',
          "Note what is missing from that list: you. The strongest advisor articles are almost entirely about the reader's problem, with the author present only as someone who has watched it happen many times. That is also, conveniently, the version most likely to clear review — a piece that makes no claim about you is hard to object to.",
        ],
        list: [
          'The question you answer in nearly every review meeting, written out once and properly.',
          'How a decision gets made — sequencing withdrawals, a concentrated position, a windfall — without recommending one.',
          'What changed in tax or retirement rules this year, and who it actually affects.',
          'Why you built the firm the way you did, and what you refused to sell.',
          'The mistakes you see arriving from other advisors, described as patterns and never as people.',
        ],
      },
      {
        heading: 'Write for one client type',
        paragraphs: [
          'Most advisory marketing describes a service that could belong to anyone: comprehensive planning, fiduciary standard, personalized approach. It is accurate and it is useless, because the competitor down the road says it word for word. Specificity is the fix, and it costs you the illusion of a large audience.',
          'Write for the business owner two years from a sale, or the physician who finished training with debt and a sudden income, or the widow handling money herself for the first time at seventy. Fewer people read it. The ones who do recognize themselves in the first paragraph, and recognition is what makes someone call a stranger about their savings. Editors prefer it too — a specific piece is a story, a general one is a brochure.',
          'This has a second benefit at review. A piece written for one clearly defined situation is easier to keep inside the rules than a broad one, because you are describing a set of circumstances rather than issuing advice to everyone who reads it. Reviewers are far more comfortable with a bounded scenario than an open-ended recommendation.',
        ],
      },
      {
        heading: 'When markets move, be ready',
        paragraphs: [
          "There is a recurring moment when reporters need advisors: a rate decision, a sharp drop, a headline that has everyone's clients calling at once. What they want is someone who explains what is happening in plain language and declines to say what happens next. Advisors who cannot resist a prediction get quoted once. Advisors who stay careful get called back.",
          "The preparation is the same preparation your clients need. Know what you would say about a drawdown, an inflation print, a change in retirement rules. Have it approved in advance if your firm requires it, because a compliance queue and a reporter's deadline do not run at the same speed. Being second is the same as being absent.",
          "This is also the honest limit of what a commentary strategy delivers. A quote inside someone else's article is a credential, not a campaign. It is worth having, it is not schedulable, and it belongs alongside writing you control rather than in place of it.",
        ],
      },
      {
        heading: 'Where advisors realistically get published',
        paragraphs: [
          'Finance has an unusually clear tiering. Bloomberg, Business Insider and Forbes staff coverage is editorially selective and cannot be arranged — an advisor generally appears there as a source inside a reported piece, if at all. Yahoo Finance, MarketWatch and Benzinga are more reachable, because they publish at volume and carry partner and contributed material alongside their own reporting.',
          'MSN, Apple News and Google News come up in almost every conversation. They do not commission articles about advisors. They carry or index work from publications already inside their networks, which means a piece can reach them through the outlet that published it and nobody can promise that it will. If someone sells you MSN as a placement, ask which publication is actually running the article.',
          "Where it lands matters less than most advisors think, provided the reader recognizes the name and the piece is genuinely good. The prospect running a search at eleven at night is not evaluating the masthead's editorial standards. They are deciding whether the person their friend recommended sounds like someone who understands their situation.",
        ],
      },
    ],
    realityCheck: 'Compliance may kill your best idea, and your firm can veto the whole exercise. No agency can guarantee placement in a selective title, and anyone promising Forbes or Bloomberg to an advisor is selling something they do not control. Coverage also will not shorten a sales cycle that runs on trust and paperwork. What it changes is what a prospect finds during the months you are not in the room.',
    faqs: [
      { question: 'Will my compliance department allow this?', answer: 'Usually, in some form. Educational writing that makes no performance claim and recommends nothing specific is the version most firms approve. What gets rejected is predictable: returns, forecasts, client quotes, and anything implying a result. Ask for the review requirements before you start, build the piece to them, and expect at least one round of edits. Revisions are unlimited on our side; the sign-off is theirs.' },
      { question: "Can I write about a client's situation?", answer: 'Only as a pattern, never as a person. Composite descriptions drawn from many households are fine and identifiable details are not, even with permission, since a client story in article form raises its own regulatory questions. The safer and better version describes the situation generically: a business owner approaching a sale, a family carrying a concentrated stock position into retirement.' },
      { question: 'How long before it does anything?', answer: 'The article itself moves quickly — most placements are live within a few weeks once the draft is approved, and compliance review is usually the longest step. The effect on your business is slower, because advisory decisions are slow. Expect it to show up as prospects arriving better informed and referrals that need less explaining, over quarters rather than weeks.' },
    ],
  },
]

export const guideBodyBySlug = new Map(guideBodies.map((g) => [g.slug, g]))
