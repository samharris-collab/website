import type { Faq } from './types'

export type OutletPage = {
  slug: string
  /** Opening paragraphs, one entry per paragraph. */
  intro: string[]
  whatItIs: string
  whoItsFor: string
  howItWorks: string[]
  /** Plain talk about what can and cannot be promised at this publication. */
  realityCheck: string
  faqs: Faq[]
}

/**
 * Body copy for /get-featured-in/<slug>. Publication names are locked; everything
 * here is supporting copy written for the rebuild against a fixed rule set — no
 * invented statistics, no named editors, no placement guarantees, no claimed
 * affiliation. Distribution surfaces (MSN, Apple News, Google News) and the wire
 * (AP News) are described as what they are. See CONTENT-NOTES.md.
 */
export const outletPages: OutletPage[] = [
  {
    slug: 'forbes',
    intro: [
      'Forbes is the title people name when they picture being featured. That is exactly why it is the hardest one to earn, and why you should be suspicious of any agency that sells it like a product on a shelf.',
      'We will tell you plainly where you stand. If your story has a genuine shot, we build it and pitch it toward Forbes. If it does not yet, we say so, and we put you in front of the readers you actually need while the record behind your name gets stronger.',
    ],
    whatItIs: "Forbes covers business, finance, technology and leadership, with work from staff journalists and from a contributor network that writes under the title's own editorial oversight. Access to that network is Forbes' decision, not something an agency hands out. Whatever route a piece takes, it has to clear an editorial bar, and copy that reads like promotion rarely clears it. Think of Forbes as a newsroom with a wide surface, not an open submissions queue.",
    whoItsFor: 'Forbes suits people with something already in motion — a company with traction, a track record someone else can verify, data you can share, or a view on your industry that holds up under questioning. It is a poor fit if you are early, unproven, or looking for a logo to put on a website. Those clients get further elsewhere first.',
    howItWorks: [
      'We start by testing whether there is a Forbes-shaped story in your business at all — a real result, a contrarian position, or a shift in your market you saw before other people did.',
      'You fill in a short questionnaire and sit for a conversation. Our editorial team does the writing from there, so nothing depends on you finding a spare weekend to draft an article.',
      'We shape the angle for a business-desk reader rather than a customer, strip out anything that reads as a sales page, and hold the piece to the standard the desk would apply itself.',
      'You review and revise until it reads the way you would say it. Revisions are unlimited and nothing is sent anywhere, or published anywhere, without your sign-off.',
      'Then we pitch, and we tell you the truth about how it lands. Where Forbes does not bite, the same story is placed at outlets we can reach, so the work is never wasted.',
    ],
    realityCheck: 'We cannot guarantee Forbes, and neither can anyone else — a guarantee is the clearest sign you are being sold something. What we can do is build the story properly, pitch it honestly, and place you at the outlets where we do have reach while your name and record get stronger. If Forbes is the only outcome you will accept, we will say up front whether we think it is realistic.',
    faqs: [
      { question: 'Can you guarantee a Forbes feature?', answer: 'No, and you should be careful with anyone who does. Editorial coverage at the biggest titles is an editorial decision no agency controls. We tell you honestly which outlets we can place you in and which we can only pitch toward, and Forbes sits firmly in the second group.' },
      { question: 'What happens if Forbes passes?', answer: 'The story does not die with the pitch. We take the same piece, adjust it for the outlets that fit it, and place it where we have reach — business and industry titles, national general-interest surfaces, finance sites. Coverage builds on coverage, and a body of published work makes the next pitch to a title like Forbes easier to make.' },
      { question: 'How long does this take?', answer: "Most placements we control go live within a few weeks. A pitch toward Forbes runs on the publication's clock, not ours, so we do not put a date on it. We keep you updated either way, and we do not leave you waiting in silence while a pitch sits unanswered." },
    ],
  },
  {
    slug: 'usa-today',
    intro: [
      'USA Today reaches a general national audience — people who are not in your industry and have never heard of you. That is its value and its constraint. The writing has to make sense to a reader with no context, which is a different job from writing for your peers.',
      'Two things share the name: the newsroom itself, and a contributor content program that runs alongside it. We are straight with you about which one a piece is aimed at, because the difference matters to anyone who checks.',
    ],
    whatItIs: 'USA Today is a national general-interest newspaper and website, covering news, money, sports, travel and life for a broad American readership. Its newsroom works like any other — reporters, desks, editorial judgment. Separately, the title carries contributor and partner content, which is produced under different arrangements and labeled as such. Both live on a domain with real search authority, which is a large part of why founders want to be there.',
    whoItsFor: 'This one fits businesses that serve ordinary consumers as much as industry insiders — practices, law firms, real estate, coaching, consumer brands, founders whose customers Google them before booking. If your work only makes sense to a specialist audience, a trade title will do more for you than a national one, and we will tell you that rather than take the order.',
    howItWorks: [
      'We agree first on what a general reader would find interesting about you — usually a lesson, a change in your field, or something you do differently that can be explained in a sentence.',
      'You complete a short questionnaire; our editorial team writes the article. We keep the language plain enough for someone outside your industry to follow without losing the detail that makes it credible.',
      'We tell you which route we are pursuing — a newsroom pitch or the contributor side — before any work goes out, so you know exactly what you are getting and how to describe it later.',
      'Revisions run until you are satisfied. Nothing is submitted with your name on it before you have read the final version and told us to go ahead.',
      'Once it publishes, you get the live link and a short note on how to use it — bio lines, sales conversations, your site, the pitch to the next outlet up.',
    ],
    realityCheck: 'USA Today is reachable, but not on demand. Newsroom coverage is earned like anywhere else, and even the contributor side has standards and its own timeline — so we quote timing as a range, never a date. What we will not do is imply a staff-written feature when a piece ran through a different route. You will know which one you have, and so will anyone who looks.',
    faqs: [
      { question: 'Is a USA Today placement the same as being written about by the newsroom?', answer: 'Not necessarily, and the honest answer depends on the route. A reported newsroom story is an editorial decision we can pitch toward but not arrange. Contributor content is a separate program with its own requirements. We tell you which one applies to your piece before you commit, so nothing about it surprises you afterward.' },
      { question: 'Do I have to write the article?', answer: 'No. Beyond a short questionnaire and a conversation about your story, the writing is ours. Our editorial team drafts it, you revise it as many times as you like, and it publishes only after you sign off. Most people spend far less time on this than they expect to.' },
      { question: 'Will the article stay up?', answer: 'Yes. Placements are permanent and searchable, which is the whole point — the article keeps working every time someone looks you up, whether that is a prospect doing due diligence, a partner checking you out, or a journalist deciding whether to quote you next time.' },
    ],
  },
  {
    slug: 'msn',
    intro: [
      'MSN is not a newsroom you can pitch. It is a distribution surface that carries stories from publications already in its network, which means the way in is the publication, not MSN itself. Anyone offering to talk to MSN editors on your behalf is describing something that does not work that way.',
      'Our approach is simpler and more honest. We place your story with outlets whose content already travels to MSN, and we tell you plainly that syndication is a possibility rather than a switch we can flip.',
    ],
    whatItIs: "MSN is Microsoft's news and content portal, seen by many people as a default homepage and inside Windows and Edge. It aggregates and republishes work from a large roster of partner publishers rather than commissioning its own founder profiles. An article appears there because the publication that ran it is in the network and the piece was picked up — the relationship is between MSN and the publisher, not between MSN and you.",
    whoItsFor: 'MSN suits anyone who wants scale and a recognizable name in front of a general audience — consumer brands, founders, practices, coaches. It is less useful if you need a specific trade readership or a piece a niche buyer will take seriously; a targeted industry title beats broad reach in that case. Reach and relevance are different things, and you should be clear which you are buying.',
    howItWorks: [
      'We start from the outlets, not the logo. From our network of more than 1,100 publications we identify the ones that fit your industry and whose work already travels across to MSN.',
      'Your story gets built the usual way — short questionnaire from you, the writing from our editorial team, revisions until it reads right, no publication without your approval.',
      'We write it to travel. Syndicated pieces live or die on the headline and the first paragraph, because that is all most readers see before they decide, so those get disproportionate attention.',
      'The placement is the deliverable. It publishes on the partner outlet, permanently and searchably, and whether it also appears on MSN is a call made downstream of us — we never sell it as certain.',
      'You get the live links, and if the piece is picked up we send you that too. Either way you leave with a real article you can point people to.',
    ],
    realityCheck: 'Nobody can guarantee MSN, because nobody pitching a client controls what a syndication network picks up. What we control is where the story runs first and how well it is written. Some pieces travel; some stay put. We would rather tell you that up front than let you assume a logo is included, and we will show you real examples instead of promises.',
    faqs: [
      { question: 'Do you pitch MSN directly?', answer: 'No, and neither does anyone else in this business. MSN carries content from publications in its partner network, so the work is placing you in one of those publications and writing something worth carrying. If an agency tells you it has an MSN contact, ask them to explain how that actually works.' },
      { question: 'Is an MSN placement a real article?', answer: 'Yes. Every placement is a real, permanent, searchable article on a genuine publication — not a directory listing or a paid link farm. When a piece is carried on MSN it is that same article, appearing on a second surface in front of a much larger general audience.' },
      { question: 'What should I expect this to do for my business?', answer: 'Visibility with people who have never heard of you, and something credible waiting when they search your name afterward. It is rarely a same-week lead machine. Treat it as part of the record that reassures buyers, referral partners and journalists deciding whether you are worth taking seriously.' },
    ],
  },
  {
    slug: 'entrepreneur',
    intro: [
      'Entrepreneur is one of the first titles founders picture when they think about press, and one of the most misunderstood. It does not run announcements. It runs what you learned building the thing.',
      'We treat it as a story problem rather than a submission problem — find the lesson in your business that is genuinely yours, write it to the standard the magazine expects, and pitch it where it fits. Sometimes that works. Other times it points you toward a different outlet, and we say so.',
    ],
    whatItIs: 'Entrepreneur is a long-running business magazine and website built for people who start and run companies — franchising, marketing, leadership, money, the daily mechanics of operating. Its coverage comes from staff reporting and from bylined contributor writing by founders and executives, which is why the site carries both news and first-person lessons. Either way, the material that runs tends to be practical. A reader should finish it able to do something differently.',
    whoItsFor: 'Founders and operators with something built behind them — a company with customers, a franchise system, a way of hiring or selling that you can explain in detail. It suits you if you can talk specifics without a script. It suits you less if what you want is a flattering profile, or if your business is still an idea with a landing page attached.',
    howItWorks: [
      'We start with a short questionnaire, then a conversation. What we are hunting for is the one thing you do differently that a reader could actually copy.',
      'Our editorial team drafts the piece — you write nothing beyond that questionnaire. It gets built as a lesson with your operating detail underneath it, not as a company announcement dressed up as a story.',
      'You revise it as many times as you need. Nothing goes anywhere until you sign off, because your name is on it and the facts have to be yours.',
      'Then we pitch it, and we are straight with you about where. Entrepreneur is one target among several, and we line up the outlets we work with regularly where the same story has a realistic route to publication.',
      'If it lands, we make it work afterward — the link in your bio, your site, your sales material, your search results. A placement that nobody sees is half a placement.',
    ],
    realityCheck: 'Entrepreneur is a selective title, and we do not guarantee it. What we can tell you is that a well-built, lesson-led piece has a real route here in a way a funding announcement does not — and that the same story often finds a home faster at another business outlet while an Entrepreneur pitch is still open. We would rather quote you on that basis than sell you a name.',
    faqs: [
      { question: 'What kind of story does Entrepreneur actually run?', answer: 'Lessons, not announcements. The pieces that fit are the ones where an operator explains a decision and what it cost — a pricing change, a hire that went wrong, a market they walked away from. A funding round on its own is rarely enough; what you learned raising it might be.' },
      { question: 'Can you guarantee a feature in Entrepreneur?', answer: 'No. Entrepreneur decides what it publishes, and any agency claiming otherwise is either misdescribing what it sells or selling something else entirely. Before you pay, we tell you which outlets we place clients in regularly and which we can only pitch toward. Entrepreneur is the second kind.' },
      { question: 'Does my company need to be a certain size?', answer: 'Size matters less than whether you can say something specific. A solo consultant with a genuinely different method is a better fit than a larger company with nothing to add. What does not travel is a piece that could have been written about any company in your category.' },
    ],
  },
  {
    slug: 'business-insider',
    intro: [
      'Business Insider is reported journalism. A staff writer decides there is a story, works out who to talk to, and calls them. Nobody sells a slot in that process, including us.',
      'So the honest framing is different here. You are not buying a placement — you are becoming the kind of source a reporter working on a story would want, and then being visible and reachable at the moment they go looking. That is slower, and it is the only version of this that is real.',
    ],
    whatItIs: 'Business Insider is a digital business and tech newsroom staffed by reporters and editors who commission and write their own work. It runs from breaking company news to deeply reported features on how industries actually operate, much of it behind a subscription. People appear in those stories because a journalist judged them relevant to something already being reported. Editorial decisions sit with the newsroom, and nothing in it is for sale.',
    whoItsFor: 'This suits people who have something a reporter needs — a company doing something at real scale, data nobody else holds, a first-hand view of an industry story in the news. It does not suit a founder who mainly wants a logo on a website. If the goal is credibility by next quarter, we would build that elsewhere first and treat Business Insider as a longer play.',
    howItWorks: [
      'We start by working out what you can say that a reporter could not get from anyone else. If the answer is nothing yet, we say so, and we go build it with you before anything is pitched.',
      'Our monitoring runs on trends and breaking news, so when a story starts moving in your sector we already know. Getting a considered, quotable comment in front of the right desk early is most of the job.',
      'In parallel we build the record a journalist checks: published pieces under your name elsewhere, a clean set of search results, a bio and photo that make you easy to verify quickly.',
      'We pitch through the 45+ publicists and journalists on our team, and we tell you what came back. Silence from a desk is information too, and you will hear it from us rather than wonder.',
      'Meanwhile the coverage we can place goes live — real articles on real publications, permanent and searchable. That record is what makes the next pitch to a reporter easier than the last one.',
    ],
    realityCheck: 'We cannot guarantee Business Insider, and we will not take money on the pretense that we can. Nobody sells access to a staff newsroom. What we can do is make you a credible, findable, quotable source, put you in front of the right desks when your sector is in the news, and build the published record that makes a reporter take the call. Some of that lands. We will not pretend it always does.',
    faqs: [
      { question: 'Can you get me into Business Insider?', answer: 'Not on demand, and we will say that in the first conversation rather than the fourth. Business Insider assigns its own stories. We work on the inputs — expertise that is worth quoting, a verifiable public record, and timing against stories already in motion — then pitch honestly and report back either way.' },
      { question: 'Someone offered me a guaranteed Business Insider feature. Is that real?', answer: 'Ask them one question: will the article be published on businessinsider.com by a staff journalist, or somewhere that syndicates onto a different surface? The answers we hear usually involve a lookalike site, a sponsored label, or a page that quietly disappears. A guarantee on a staff newsroom is the clearest warning sign in this industry.' },
      { question: 'What should I aim for while we work on it?', answer: "Coverage your buyers will actually encounter — business and finance outlets, founder profiles, syndication surfaces that carry partner content. Those go live within a few weeks and stay searchable. They also do the quiet work of making a reporter's background check come back clean when a bigger title does take an interest." },
    ],
  },
  {
    slug: 'bloomberg',
    intro: [
      'Bloomberg exists to serve people who move money on what they read. Its reporting is checked accordingly, and it is among the most editorially selective titles in business media. That single fact explains everything about how you get in, and how you do not.',
      'We treat Bloomberg as a source relationship rather than a placement. If you are quotable on something the terminal audience genuinely cares about — a market, a sector, a regulatory change with real consequences — there is a path. It is long, and it starts nowhere near a pitch email.',
    ],
    whatItIs: 'Bloomberg is a financial news organization built around a professional audience — traders, analysts, executives, policymakers — served through the terminal, the website, television and its magazine. Its journalists cover markets, companies and policy, and the reporting is expected to hold up in front of readers who will act on it. Stories are assigned and written in-house by staff journalists and columnists. Nothing about that process is open to purchase.',
    whoItsFor: 'Realistically: people whose work touches markets. Fund managers, public-company executives, founders in a sector under regulatory pressure, economists with a defensible position on something contested. If you run a local practice or a service business, Bloomberg is not the outlet that will bring you clients, and we would rather point you at the ones that will than bill you for a long shot.',
    howItWorks: [
      'First we tell you whether this is worth attempting at all. For most clients it is not, and hearing that early is worth more than a year of polite pitching that goes nowhere.',
      'If it is worth attempting, we narrow you to one subject you can speak on with authority — not your company, a subject. A source with a beat gets called back. A founder with a story does not.',
      'Then we build the public evidence. Published commentary elsewhere, a track record that is on the record, and a position that has survived being wrong in public — that is what a financial journalist checks before quoting anyone.',
      'Our team watches for the moments when your subject becomes news, and moves then. Commentary offered on the day a story breaks is worth more than the same commentary offered as a general introduction.',
      'Everything else runs in parallel. The placements we can actually secure keep building your searchable record, which is the same asset a Bloomberg journalist would look at if your subject ever lands on their desk.',
    ],
    realityCheck: 'Bloomberg cannot be bought, and we cannot guarantee it. No agency can, and anyone who tells you otherwise is describing something else — a lookalike domain, a sponsored section, or a placement on a site with a similar-sounding name. What we offer here is a long, honest attempt at a source relationship, alongside coverage we can actually deliver in the meantime. If that is not what you want, say so and we will price the rest.',
    faqs: [
      { question: 'Can DNA get me featured in Bloomberg?', answer: "No agency can promise that, and we do not. Bloomberg's journalists decide who appears in their reporting, and the decision is made on whether you are useful to a story their readers care about. We can work toward being that person. We cannot put a date on it, and we will not invoice as though we could." },
      { question: 'I have seen agencies advertise Bloomberg placements. What are they selling?', answer: 'Usually something adjacent — a press release distributed to a wire that appears on a finance page, a paid section, or a domain that reads like Bloomberg at a glance. Read the URL and check who wrote the byline before you pay. If the article is not on bloomberg.com under a staff byline, it is not what you were sold.' },
      { question: 'So what should I actually spend on?', answer: 'Coverage that reaches the people who decide whether to work with you. For most clients that means business and finance outlets, founder features, and the surfaces those syndicate onto — placements that are permanent, searchable, and live within a few weeks. Tell us what you are trying to change and we will quote it to those goals.' },
    ],
  },
  {
    slug: 'fast-company',
    intro: [
      'Fast Company covers design, innovation, technology and the changing shape of work. It is an ideas publication — the stories that run there argue something about where an industry is heading, not simply that a company exists.',
      "That makes it one of the harder titles on this list, and one of the more rewarding when it lands. We will tell you before you spend anything whether your story has a genuine argument in it. If it does, we build the pitch around that argument and take it out. If it doesn't yet, we say so.",
    ],
    whatItIs: 'Fast Company is a business magazine and website built around innovation, design, leadership and the future of work. Its own editorial staff commissions and reports the bulk of what runs, and parts of the site carry bylined commentary from outside contributors. Either way, a person inside the publication decides. Nobody sells editorial space there, and an agency implying otherwise is describing advertising, or an outlet that is not Fast Company.',
    whoItsFor: "Fast Company suits founders and operators whose work says something about a category — a new design approach, an unusual hiring model, a technology being used in a way the industry hasn't caught up with yet. It is a poor fit if your goal is a straightforward credibility badge on a homepage. For that, there are faster and more certain routes.",
    howItWorks: [
      'We start with the argument. In a short questionnaire you give us the operating detail, and our editorial team finds the claim inside it that an innovation desk would actually find worth publishing.',
      'Our editorial team writes the piece and the pitch to editorial standard, not marketing standard. You review both, revise as many times as you want, and nothing leaves our hands until you have signed off.',
      'From there our publicists take it to the journalists and editors covering that beat, timed to whatever is already moving in the news cycle. Cold announcements travel badly here; a story attached to a live conversation travels much further.',
      'While that pitch is live, we place the same story at outlets we can commit to, so your campaign is producing permanent, searchable coverage rather than waiting on one answer that may never come.',
      'You hear what happened either way. If the desk passes, we tell you it passed and what we are doing next, instead of leaving a Fast Company logo sitting on your proposal indefinitely.',
    ],
    realityCheck: 'We cannot guarantee Fast Company, and you should walk away from anyone who does. Editorial coverage there is decided by editorial staff, on their judgment of the idea, and no agency controls that. What we can do is build the strongest honest version of your story, pitch it where it belongs, and place you meanwhile at outlets we can commit to. That is the difference between a real pitch and a sales promise.',
    faqs: [
      { question: 'Can DNA guarantee a Fast Company feature?', answer: 'No. Fast Company decides what it runs, and that decision belongs to its editors, not to us or to any agency quoting you a price for it. We will tell you honestly whether we think your story has a shot, pitch it properly if it does, and keep your campaign moving at outlets we can commit to either way.' },
      { question: 'What kind of story does Fast Company actually run?', answer: "Ideas with evidence behind them. A design decision that changed how customers behave, a hiring model other companies are copying, a technology applied somewhere unexpected. Announcements rarely make it. If your business has done something genuinely different, our editorial team's job is to find it and make the argument clearly enough to be worth a journalist's attention." },
      { question: 'Do I have to write anything myself?', answer: 'No. You fill in a short questionnaire and talk to us about your work; our editorial team writes the piece. You get unlimited revisions, and nothing is sent to a publication or published anywhere until you have approved it. The facts and the voice stay yours, because it is your story.' },
    ],
  },
  {
    slug: 'inc',
    intro: [
      'Inc. writes about the business of building a company — hiring, cash, systems, the decisions founders make when the outcome is not obvious yet. Its readers are operators, so the detail matters more than the adjectives.',
      'It is a selective title, and we treat it that way. We will look at what you have actually built, tell you whether there is a story an editor there would care about, and pitch it if there is. What we will not do is sell you a logo we cannot deliver.',
    ],
    whatItIs: 'Inc. is a business publication for people running growing companies — reported features, founder interviews, lists and practical operating coverage, produced by its own editorial staff. Its center of gravity is the small and mid-sized company rather than the enterprise or the venture headline. Stories tend to be built on specifics: what the business does, what changed, and what the person running it learned doing it. That specificity is the bar.',
    whoItsFor: 'This one fits founders with an operating record — revenue you can talk about, a team you have grown, a decision that went badly and taught you something worth repeating. Early-stage companies with an idea and little else are a harder sell here, and we would rather point you at outlets where your current stage lands than take the money and stall.',
    howItWorks: [
      'First we get the operating detail out of you — the questionnaire is short, but we push on the parts an editor would ask about: what changed, when, and how you know it worked.',
      'Our editorial team writes the piece. You revise it as many times as you need, and we hold it until you are satisfied that the numbers, the timeline and the tone are all accurate.',
      'Then it goes out to the reporters and desks covering founders and growth-stage business, framed as the story they cover rather than the announcement you would like to run.',
      'In parallel we run the same story at outlets we can commit to, so you have permanent, searchable coverage in hand while the selective pitch is still open.',
      'You get told the truth about where it stands. Interest, silence or a pass — you hear it from us, with a recommendation about what to do next.',
    ],
    realityCheck: 'Inc. cannot be bought and we will not guarantee it. Its editors decide what runs, and any agency selling you a confirmed placement there is either misdescribing what it sells or selling something that is not Inc. We are happy to pitch it, and we are equally happy to tell you when your story is not ready — because hearing it early costs you less than finding out much later.',
    faqs: [
      { question: 'Can you guarantee a placement in Inc.?', answer: 'No. We do not guarantee any editorially selective title, and Inc. is one of them. What we guarantee is the work: a story developed and written by our editorial team, revised until you approve it, pitched properly, and supported by placements at outlets where we can commit to an outcome.' },
      { question: 'My company is small. Is Inc. realistic?', answer: 'Sometimes, and size is not the only thing that decides it. Inc. covers growing companies, so an unglamorous business with real operating detail can be a better fit than a large one with nothing to say. Tell us where you are and we will give you a straight read before you commit to anything.' },
      { question: 'How long does this take?', answer: "Most of our placements go live within a few weeks, though a selective pitch runs on the publication's clock rather than ours. We map a realistic timeline before we start, keep the rest of your campaign moving while the pitch is out, and reply to you within 24 hours whenever you ask where things stand." },
    ],
  },
  {
    slug: 'apple-news',
    intro: [
      'Apple News is not a magazine you pitch. It is a reading app that aggregates and curates content from publishers already in its network, which means the route in runs through those publishers, not through Apple.',
      'So when you see an article of yours in Apple News, what happened is that a publication carrying your story is part of that network and the piece traveled with it. We are honest about this because the alternative — implying we have a line into Apple — is the kind of claim that should make you close the tab.',
    ],
    whatItIs: 'Apple News is a distribution surface built into iPhone, iPad and Mac. Publishers join the network and their articles become available to readers inside the app, where a mix of algorithmic feeds and human curation decides what surfaces and how prominently. Nobody at Apple commissions founder profiles, and there is no submission desk for individuals. Being in Apple News is a consequence of being published somewhere that already feeds it.',
    whoItsFor: 'Apple News suits people who care about reach and a familiar surface more than one particular masthead. If a prospect looking you up needs to see a specific title, say so and we will aim at that title directly. What this surface does well is put your story in front of a large mainstream readership on the device already in their hand.',
    howItWorks: [
      'We start by asking what you actually want from this. If Apple News is shorthand for mainstream reach, we plan around reach; if it is shorthand for one title, we plan around the title.',
      'Then we target publications that are already in the Apple News network and that genuinely fit your story, so distribution is a property of the placement rather than a separate promise.',
      'Our editorial team writes the article from your questionnaire and shapes it for the outlet we are targeting. You revise it as often as you like; nothing publishes without your sign-off.',
      'Once the piece is live, we send you the link on the publication itself — the permanent, searchable version — and tell you plainly what syndication did or did not do with it.',
      'Where it makes sense, we build a run of coverage instead of one article, because a name that shows up repeatedly across mainstream surfaces lands differently with a buyer than a single hit.',
    ],
    realityCheck: "Here is the honest version. We do not control Apple News, we have no relationship with Apple, and no one can promise you a particular position inside the app. What we can do is place your story with publications that already feed that network, which is the only real route in. Whether a given article then surfaces prominently for any individual reader is out of everyone's hands but Apple's.",
    faqs: [
      { question: 'Can you get me featured in Apple News?', answer: "We can place your story with publications that are part of the Apple News network, which is how anyone gets there. What nobody can do is pitch Apple directly or buy a spot in the app's curation. If someone tells you they have an Apple News contact, ask them to explain the mechanism." },
      { question: 'Will the article still exist if it disappears from the app?', answer: 'Yes. The article lives on the publication that ran it, and that version is permanent and searchable. Feeds move on quickly; the page you can link to in an email, a proposal or an about section does not. That page is the asset — the app is reach on top of it.' },
      { question: 'How do I know whether my piece actually reached Apple News?', answer: 'You will have the live link from us either way, and we will tell you plainly what happened with syndication rather than leaving you to guess. Where a piece travels beyond the original publication, we say so. Where it does not, we say that too, and we tell you what we would do differently next.' },
    ],
  },
  {
    slug: 'google-news',
    intro: [
      'Google News is not a publication you can pitch. It is an index — a place where articles from sources Google already treats as news get gathered and surfaced. There is no desk, no editor, no submission form.',
      'So the honest version of "get featured in Google News" is this: get published somewhere Google already indexes, on a story worth surfacing when someone searches your name. That is the part we can actually work on, and it is the part that matters.',
    ],
    whatItIs: "Google News aggregates articles from publications it already recognizes as news sources and organizes them by topic, by story and by search. Nothing is commissioned there and nothing is written there. Inclusion is decided by Google's own systems against its policies, not by a person you can email, and there is no paid route in. When people say they were featured in Google News, they mean an article about them, published elsewhere, appeared in that index.",
    whoItsFor: 'This suits anyone whose buyers search their name before they commit — founders, attorneys, medical practices, consultants, realtors and B2B companies. If what you want is a News tab that shows real coverage instead of your own social profiles, the goal is sound. If you want a specific Google News ranking or a permanent top slot, no agency can sell you that.',
    howItWorks: [
      'We start with the outlets, not the index. Our team maps which publications in our network of 1,100+ outlets Google already carries as news sources, and which of those fit your industry and audience.',
      'You fill in a short questionnaire and nothing more. Our editorial team takes it from there — angle, reporting, draft — because a piece written to editorial standard is the only kind worth indexing.',
      'Nothing publishes until you sign it off, and revisions are unlimited. Your name, your claims and your figures have to be right before the piece goes anywhere near an index.',
      "We place the article, then watch what Google does with it. Most placements go live within a few weeks; indexing follows on Google's schedule, and we tell you what we see rather than what you want to hear.",
      'Then we build on it. One article rarely owns a name search — a second and third placement across different outlets is what makes your coverage hold its shape over time.',
    ],
    realityCheck: 'Nobody can guarantee Google News. There is no editor to persuade and no placement to buy — Google decides what it indexes and how it ranks, and it changes its mind without telling anyone. What we control is the input: a real article, on a real publication, written to a standard that gives it a fair chance. Anyone selling you guaranteed Google News inclusion is selling something they do not own.',
    faqs: [
      { question: 'Can you get me into Google News?', answer: "We can place you on publications that Google already indexes as news sources, which is the only honest version of that question. Whether a given article surfaces in Google News, and for how long, is Google's call. We will tell you which outlets we can place you in and which we can only pitch toward." },
      { question: 'Will the article still be there in a year?', answer: 'The article itself is permanent and searchable on the publication that runs it — that is the asset you are buying. How Google News displays it can change, because aggregation surfaces reorganize constantly. Judge the placement by the live article and by what comes up when someone searches your name.' },
      { question: 'Why does my article show in search but not in the News tab?', answer: 'They are different systems. Regular search will index almost any page that is crawlable; the News surface draws from sources Google already treats as news publishers. An article can rank perfectly well for your name and never appear there, and that is a decision about the publication rather than about your piece.' },
    ],
  },
  {
    slug: 'marketwatch',
    intro: [
      'MarketWatch covers markets, companies and personal finance for readers who are making decisions with their own money. It is a Dow Jones title, staffed by working financial journalists, and it reads like it.',
      'That audience is the reason people want it, and the reason it is hard. A MarketWatch reader is checking a ticker, not browsing profiles. We are straight with you about that from the first call: we pitch toward MarketWatch, we do not sell it.',
    ],
    whatItIs: 'MarketWatch is a financial news publication — market movements, earnings, economic data, retirement and investing coverage — written for an audience that trades and invests. Its journalism is staff-reported and editorially controlled, so a story runs because a newsroom judged it worth running. That judgment is not for sale, and no agency, ours included, sits inside it. Treat anyone who implies otherwise the way you would treat a stock tip from a stranger.',
    whoItsFor: 'MarketWatch fits people with something genuinely market-facing to say — fund managers, fintech founders, financial advisors, economists, public-company executives and analysts with a view they can defend. It does not fit a local service business or a personal brand with no market angle. If your expertise does not touch money, rates or markets, your audience is reading somewhere else.',
    howItWorks: [
      'We test the angle before we spend your money on it. Our team asks what you can say about markets that a financial journalist could not get from anyone else — and tells you if the answer is nothing.',
      'Your data does the arguing. Whatever proprietary numbers, client patterns or market observations you actually hold, we build the pitch around them, because financial desks respond to evidence and not to adjectives.',
      'We write the piece and the pitch. You answer a short questionnaire; our editorial team — 45+ publicists and journalists — handles the drafting, the framing and the outreach, and you approve every word before anything leaves our hands.',
      'While that runs, we place you where placement is realistic. Finance-adjacent outlets we can actually deliver keep your coverage growing instead of leaving you waiting on one answer that may never come.',
      'You hear the truth on timing. Most placements go live within a few weeks, but a pitch to a newsroom like this one runs on its schedule, and we would rather say so than manage you with vague updates.',
    ],
    realityCheck: "We cannot promise MarketWatch, and we will not take money on the pretense that we can. It is a staffed newsroom making editorial calls, and nobody outside it controls those calls. What we can do is sharpen a market angle worth a journalist's attention, pitch it properly, and in the meantime put real coverage on outlets where we know we can deliver. That is the trade, stated plainly.",
    faqs: [
      { question: 'Can you guarantee a MarketWatch feature?', answer: 'No. MarketWatch is editorially selective and no agency controls what its newsroom runs — anyone guaranteeing it is either misinformed or lying to you. We will pitch toward it with a genuine market angle, and we will be clear about which outlets on your list are placements and which are pitches.' },
      { question: "What makes a pitch worth a financial newsroom's time?", answer: 'Something the reader can use — a data set only you hold, a call you made early that turned out right, a shift you are seeing in your own book of business. Position and job title are not stories. If we cannot find that substance with you, we say so before you commit.' },
      { question: 'If MarketWatch does not happen, what do I get?', answer: 'Real placements on outlets we can deliver, written by our editorial team and approved by you — the same permanent, searchable articles that show up when someone looks you up. Most go live within a few weeks. We would rather build you visible coverage than hold your budget hostage to one masthead.' },
    ],
  },
  {
    slug: 'yahoo-finance',
    intro: [
      'Yahoo Finance carries one of the largest finance audiences online — quotes, market data, and a constant feed of news. Part of what it publishes is its own reporting. Part arrives from partner publishers and wire distribution.',
      'That second route is why the answer here differs from Forbes or Bloomberg. Coverage can reach Yahoo Finance through publications and wires already syndicated there — reachable, then, but never automatic, and worth understanding before you buy anything.',
    ],
    whatItIs: 'Yahoo Finance is a finance portal and a publisher at once. It runs staff journalism, video and market data, and it also carries articles syndicated from partner publications and newswires, which is how a great deal of what you read there arrives. Understanding which of those two doors a piece came through matters, because they are not the same thing and an honest agency will tell you which one it is using.',
    whoItsFor: 'This is a strong fit for founders raising money, fintech and crypto companies, advisors, and any business whose buyers or investors check what a finance audience has seen about you. It is a weaker fit if your customers are local and never look at markets — a Yahoo Finance placement impresses an investor far more than it impresses a homeowner choosing a contractor.',
    howItWorks: [
      'We tell you which route we are using before you pay for anything. Placement on Yahoo Finance runs through outlets and wire distribution already syndicated there, and you will know exactly which publication carries your piece.',
      'The angle gets built for a finance reader. Funding, growth, market view, a category shift you can explain — our team shapes your story into something that belongs next to a ticker rather than in a lifestyle section.',
      'You write nothing beyond a short questionnaire. Our editorial team drafts the piece, you take as many revisions as you need, and nothing publishes without your sign-off — your numbers and claims stay yours.',
      'Then it goes live and you get the links. Most placements publish within a few weeks, and we send you the article on the originating publication as well as wherever it lands after that.',
      'We treat it as a foundation, not a finish line. A finance placement pairs well with coverage aimed at your actual buyers, and we will say when a different outlet would do more for you.',
    ],
    realityCheck: "Yahoo Finance is reachable, and that word is doing real work. Reachable means we can put a genuine article on a publication whose content flows there — not that we control Yahoo, hold a relationship with it, or can promise a specific placement stays visible forever. The permanent asset is the article on its originating publication. Anything a syndication surface does with it afterward is that surface's decision, not ours.",
    faqs: [
      { question: 'Is a Yahoo Finance placement the same as being interviewed by their reporters?', answer: 'No, and the difference is worth knowing. Staff reporting is earned the hard way and cannot be bought. What we place reaches Yahoo Finance through partner and wire routes — a real article, on a real publication, appearing on a surface your investors and buyers already read. We tell you which one you are getting.' },
      { question: 'How long does it take?', answer: 'Most placements go live within a few weeks, depending on how many revisions you want and which publication carries the piece. We give you a realistic timeline before you commit and keep you posted as it moves. If something slips, you hear it from us rather than finding out yourself.' },
      { question: 'What does it cost?', answer: 'It depends on the route. Coverage reaches Yahoo Finance through partner and wire content rather than by pitching a Yahoo editor, so the originating publication changes both the work involved and the price. Tell us who you need to reach and we will quote the whole path rather than a line item.' },
    ],
  },
  {
    slug: 'benzinga',
    intro: [
      'Benzinga sits in the financial media stack that investors, traders and finance reporters check during the day. It is fast, market-focused, and far more reachable than the titles most people name first — which is exactly why it is worth understanding what it does and does not do for you.',
      'We place founders, funds and finance-adjacent companies here when there is a real market angle to work with. If your story is about money, growth, markets or the mechanics of an industry investors care about, this is a sensible place to be seen.',
    ],
    whatItIs: 'Benzinga is a financial news outlet built for people who follow markets — earnings, movers, sector news, crypto, and the companies behind them. It publishes at high volume through the trading day, and its content travels: finance stories from outlets like this one often resurface on the larger portals and aggregators that carry market news. Its readers are financially literate and skim quickly, so specifics beat adjectives.',
    whoItsFor: 'Benzinga suits founders and executives whose audience thinks in numbers — fintech, investing, crypto, real estate capital, funds, advisory firms, and companies raising or preparing to raise. It also works for operators in ordinary industries who can speak credibly about cost, demand or margin. It is a poor fit if your buyer is a local consumer who has never read a markets page in their life.',
    howItWorks: [
      'We start with the money in your story — what you build, who pays for it, what changed this quarter. A market-literate reader needs a reason to keep reading past the first line.',
      'A short questionnaire captures your story — that is the only writing you do. Our editorial team drafts the piece, keeps claims to what you can support, and cuts the promotional language a finance reader ignores.',
      'You review it. Unlimited revisions, and nothing publishes without your sign-off — which matters more here than elsewhere, because a sloppy figure in a finance story follows you around.',
      'We handle placement and confirm the piece live, then send you the link and assets. Most placements go live within a few weeks, and we give you a realistic timeline before we start.',
      'From there we look at what the placement should feed — search results, your investor materials, the next pitch to a harder title that wants to see prior coverage before it takes you seriously.',
    ],
    realityCheck: 'Benzinga is reachable because financial media runs on volume and there are established routes for company and founder stories — not because anyone at DNA controls the newsroom. What a placement gives you is a credible, permanent article on a title investors recognize. What it does not give you is analyst coverage, a share price move, or an implied endorsement. Anyone selling you those is selling something else.',
    faqs: [
      { question: 'Can you guarantee a Benzinga placement?', answer: 'We do not guarantee coverage anywhere, and you should be wary of anyone who does. What we will do is tell you honestly, before you spend anything, whether your story fits this outlet and what the realistic timeline looks like. If we think a different publication serves your goals better, we say so.' },
      { question: 'Do I need to be a public company?', answer: 'No. Private founders, funds, advisory firms and growth-stage companies all have angles that work here. What matters is that the story connects to money in a way a market reader recognizes — demand, pricing, capital, risk, or a shift in how an industry makes its living.' },
      { question: 'How much does a Benzinga feature cost?', answer: 'Every engagement is quoted to your goals — which outlets you want, how many placements, and how much writing is involved. Some clients want one feature around a raise or a launch; others want a run of coverage across several titles. Tell us what you are after and we will price it.' },
    ],
  },
  {
    slug: 'ap-news',
    intro: [
      'AP News is the one on this list that behaves differently from all the others. The Associated Press is a wire service — a cooperative that reports the news and moves it to newsrooms around the world. There is no contributor program and nothing you can buy your way into.',
      'So we approach it the only way it can honestly be approached: by making you a credible, verifiable source on a subject reporters are already covering, and by being straight with you about the odds.',
    ],
    whatItIs: 'The Associated Press is a not-for-profit news cooperative whose journalism is carried by member and subscriber newsrooms worldwide, as well as on its own site. Its sourcing standards are strict: reporters verify, attribute and corroborate before anything runs. Nothing appears there because a company wanted it to. That standard is precisely what makes an AP mention worth something — and why it cannot be arranged.',
    whoItsFor: 'AP is for people with genuine subject expertise and something verifiable to say — researchers, operators inside industries in the news, attorneys, medical practices, and founders in regulated fields. If your goal is a profile about how far you have come, this is the wrong door. If your goal is to be the person a reporter calls, it is the right one.',
    howItWorks: [
      'We tell you up front that AP is a pitch-toward outlet, not a placement. That conversation happens before you spend anything, because the alternative is selling you a maybe and calling it a plan.',
      'Then we build the credibility a wire reporter needs to see: a clear area of expertise, facts that hold up to checking, and a body of published work showing you have been quoted responsibly before.',
      'Our team monitors the stories breaking in your field and puts you forward for comment while the news is still moving, rather than waiting for a release to be noticed.',
      'Media training comes next for clients who want it, so that when a reporter does call, you answer in the kind of clean, attributable language a wire story can actually use.',
      'Meanwhile we place you in the outlets we can place you in, because prior coverage is part of how a journalist decides whether an unfamiliar name is worth a call.',
    ],
    realityCheck: 'We cannot guarantee AP coverage, and no agency can. Editorial decisions at a wire belong to its journalists, full stop. What we can do is prepare you to be the source they reach for, pitch you into stories where you genuinely belong, and keep you visible elsewhere in the meantime. If someone offers to sell you an AP feature outright, ask exactly what they are selling — paid wire distribution is a different product from AP journalism.',
    faqs: [
      { question: 'Can DNA get me into AP News?', answer: 'Not on demand, and we will not pretend otherwise. AP is a wire service whose journalists decide what runs. We can make you a credible source, put you in front of the right reporting, and build the published track record that makes an unfamiliar name easier to trust. The decision stays with them.' },
      { question: 'Is a press release on a wire the same as being covered by AP?', answer: "No, and the difference matters. Paid distribution puts your announcement onto commercial newswire feeds; AP journalism is reported and verified by AP's own staff. Both have uses, but only one is editorial coverage. We will always tell you which one a given placement is before you agree to it." },
      { question: 'So what should I aim for instead?', answer: 'Start where you can actually be published, then let that work compound. A body of real, permanent articles gives a reporter something to check when your name comes up, and gives your buyers something to find. We will map the outlets we can place you in and the ones we can only pitch toward, honestly, in the first call.' },
    ],
  },
  {
    slug: 'fox-interviewer',
    intro: [
      'Start with the name, because it confuses people. Fox Interviewer is a digital publication built around long-form Q&A — a separate title from the Fox broadcast network, and any agency that lets you blur the two has told you something about itself.',
      'What it actually is, is a good format. One subject, one point of view, at length — the kind of piece that answers the questions a prospect has about you before they ever get on a call.',
    ],
    whatItIs: 'Fox Interviewer publishes interview-format features — a subject, a set of questions, and answers in their own words. The form does most of the work: instead of a reporter compressing you into two lines of a trend piece, you get room to explain how you think, what you have built and why you made the calls you made. It is a profile surface, not a breaking-news one.',
    whoItsFor: 'This suits people who are interesting in conversation — founders with an origin story, consultants with a method, creatives, coaches, practice owners, anyone whose buyers want to know what they are like before hiring them. As a first credible feature, it earns its place. It is less useful if you need a markets audience or a hard news angle; other titles serve that better.',
    howItWorks: [
      'We work out what you are actually good at explaining. An interview lives or dies on the questions, so we spend real time there before anyone writes an answer.',
      'Your questionnaire gives us your voice and the specifics — the decisions, the mistakes, the numbers you are comfortable sharing. Our editorial team turns that into a piece that reads like you talking, not like a brochure.',
      'You revise it as many times as you need. Since the answers are attributed to you and stay online permanently, we would rather you push back now than wince at a sentence a year from now.',
      'Placement follows, usually within a few weeks, and we confirm the article live before we hand you the link. Nothing goes out without your sign-off — every word, every time.',
      'Then we point it where it earns its keep — your site, your search results, your sales conversations, and the next pitch, where an editor can see you have already been interviewed well.',
    ],
    realityCheck: 'Fox Interviewer is reachable because the interview format is built for subjects like you, and because it is not competing to be the front page of a national daily. That is the honest trade. It gives you a real, permanent, searchable article with your name on it — not the reach or the reputation of a legacy newsroom. Used for what it is, it does a specific job well. Sold as something bigger, it is a red flag.',
    faqs: [
      { question: 'Is Fox Interviewer the same as Fox News?', answer: 'No. It is a separate digital publication that runs interview features, and we would rather say that plainly than let a logo do work it has not earned. If a proposal puts a Fox Interviewer link next to a broadcast network logo without explaining the difference, treat that as a warning.' },
      { question: 'Do I have to sit for an actual interview?', answer: 'No. You complete a short questionnaire and our editorial team writes the piece from it, then you revise until the answers sound like you. If you would rather talk it through with your publicist, we can work that way too — either way, the words published under your name are words you approved.' },
      { question: 'Will one interview feature actually do anything?', answer: 'On its own, it does one job: someone searching your name finds a substantial article where you sound like the person you claim to be. That is worth having. It works better as part of a run of coverage, and in the first call we will tell you honestly whether one piece is enough for what you want.' },
    ],
  },
  {
    slug: 'ceo-weekly',
    intro: [
      'CEO Weekly publishes founder and executive profiles — the story of how somebody built a business, told at length and under their own name. It is a digital title rather than a legacy newsroom, and it is one of the more dependable homes for a client feature.',
      'That makes it a sensible first credible feature for a lot of the people who come to us. The piece is real, permanent and searchable, and it gives your name something to sit behind when a buyer looks you up.',
    ],
    whatItIs: 'CEO Weekly is a digital business publication built around the executive interview and the founder profile. Its stock in trade is the individual behind the company — how the business started, what it got wrong, what the person running it has learned. Pieces are bylined, dated and archived like any other article, and they stay online and searchable afterwards. It is a profile title, not a breaking-news desk, and it reads that way.',
    whoItsFor: 'Founders, agency owners, practice operators, consultants and executives fit here — people with a real story of building something, whose buyers look them up before committing. It is a weaker fit if you want a household-name logo above all else, or if the business is too new to have anything to say beyond a launch date.',
    howItWorks: [
      'We start by deciding whether CEO Weekly is the right home for the story at all. If a different outlet on our list serves your buyers better, we say so before you commit to anything.',
      'You fill in a short questionnaire — the beginnings, the turning point, the thing you know that your competitors do not. That is the only writing you do.',
      'Our editorial team builds the angle and writes the full piece in your voice, shaped to what this title actually runs rather than to a press release template.',
      'You read it and mark it up. Revisions are unlimited, and nothing goes live until you have signed off on every line — the quotes especially, because they are attributed to you.',
      'We place it, confirm it live, and send you the link. Most placements publish within a few weeks, and the article stays up and searchable long after the launch it was written around.',
    ],
    realityCheck: 'CEO Weekly is one of the reachable ones, and we will say plainly that we place clients here regularly rather than only pitch toward it. What we will not do is promise the piece will be picked up elsewhere, rank for a term you want, or carry the weight of a national title. It is a credible, permanent feature under a business masthead. Judge it as that.',
    faqs: [
      { question: 'Can you guarantee a CEO Weekly feature?', answer: 'We do not use the word guarantee, on this outlet or any other. What we can tell you is that CEO Weekly is one of the titles we place in rather than only pitch toward, and we will give you a realistic timeline before you commit. If we think your story is a poor fit, we will say so first.' },
      { question: 'Do I have to write anything?', answer: 'No. Beyond a short questionnaire about your background and the business, our editorial team does the writing — angle, structure, quotes and all. You then edit it as hard as you like. Revisions are unlimited, and the piece does not publish until you have approved it.' },
      { question: 'Is a CEO Weekly piece worth doing on its own, or only as part of a run?', answer: 'Either works. A single feature gives you something credible to point to in a pitch, a bio or a search result, which is often all a first-time client needs. A run of coverage across several outlets builds faster and holds up better under scrutiny. We will tell you which one your goals actually call for.' },
    ],
  },
  {
    slug: 'ny-weekly',
    intro: [
      'NY Weekly covers New York the way New York works — the people building things, the culture around them, and the businesses that come out of both. Profiles and interviews are most of what it runs, and the format leaves room for a point of view rather than an announcement.',
      'For our clients it tends to be the outlet where personality is allowed on the page. If the thing that makes you interesting is how you think, this is a good place to put it — permanently, and in your own words.',
    ],
    whatItIs: 'NY Weekly is a digital publication built around New York — its founders, its culture, its businesses and the people who make them interesting. The bulk of what it publishes is profile and interview work rather than breaking news. It is a smaller operation than a national newsroom, which is exactly why a well-made story has a route in. Articles carry a byline and a date, and they stay online afterwards.',
    whoItsFor: 'Best suited to founders, creatives, real estate professionals, restaurateurs and public-facing operators — people whose work has some texture to it and whose customers care who they are. Less suited to a company that wants a straight product announcement, or to anyone who would rather not have their personality anywhere near the page.',
    howItWorks: [
      'First we work out the reason this story belongs in a New York title — a location, a market, a scene, a body of work. Without that reason, the pitch is just a biography.',
      'The questionnaire comes next. It is short, and it is the whole of your writing obligation — we are after specifics, opinions and the parts most people leave out of a bio.',
      'Our editorial team drafts the feature in your voice, with quotes you would actually say. Because this title gives a subject room, we write toward a point of view instead of a summary of your career.',
      'You approve it. Unlimited revisions, and no publication without your sign-off — if a sentence does not sound like you, it changes or it goes.',
      'Then we place it and send you the live link with assets you can use. Most placements are live within a few weeks, and the article remains searchable for as long as the publication does.',
    ],
    realityCheck: 'NY Weekly sits on the reachable side of the list — we can place here rather than only pitch. Reachable is not the same as automatic. A thin story gets a thin piece, and no outlet can make a business more interesting than it is. Nor will a single feature rewrite your search results by itself. What it does is give you a real article, in your voice, that holds up when someone checks.',
    faqs: [
      { question: 'Do I need to be based in New York?', answer: 'Not necessarily, but the story needs a reason to sit in a New York publication — clients there, work happening there, a market you operate in, a scene you are part of. We look for that reason before we pitch, and if it is not there we will point you at an outlet where your story fits better.' },
      { question: 'How is this different from a CEO Weekly feature?', answer: 'Framing, mostly. CEO Weekly is squarely a business-executive read; NY Weekly gives more room to culture, personality and the city around your work. Some clients run both, because the two pieces say different things about the same person. We will recommend one or the other based on who you are trying to convince.' },
      { question: 'How long does it take?', answer: 'Most placements go live within a few weeks. The variable is usually you — how quickly the questionnaire comes back and how many rounds of revisions you want, which we do not cap. We give you a realistic timeline before anything starts, and we keep you updated rather than going quiet.' },
    ],
  },
  {
    slug: 'international-business-times',
    intro: [
      "Int'l Business Times reports business, markets and technology for an international readership, with editions serving different regions. It carries the weight of a real business news brand, and it is more selective than the founder-profile titles we also work with.",
      'Which route your story takes depends on what it is. Company and market news, data you can stand behind, or expert commentary tied to something moving in the world all travel further here than a personal profile. We will tell you honestly which of those you have, before you spend anything.',
    ],
    whatItIs: "Int'l Business Times is a digital business news publication with international editions, covering markets, companies, economics and technology for readers across several regions. It is a news operation first — the center of gravity is what happened and what it means, not who somebody is. Different sections and editions work differently, so the honest answer about any specific route in is that it depends on the story and the moment.",
    whoItsFor: "This one fits companies and executives with something substantive to say about a market — fintech and crypto operators, investors, analysts, tech founders, anyone whose work sits close to money or policy. It fits poorly if what you want is a flattering personal profile. That story is worth telling, but it is a different outlet's job.",
    howItWorks: [
      'We start with the substance test: is there news, data, or a genuinely informed view here? A business news readership is unforgiving about filler, and so are the people who decide what runs.',
      'Next we set expectations in writing — which route we are pursuing, what we believe is realistic, and what we cannot promise. You get that before you commit, not after.',
      'The questionnaire captures your position and the evidence behind it. Our editorial team then writes the piece to business news standards — sourced claims, no puffery, and nothing attributed to you that you have not said.',
      'You review and revise as many times as you need. Nothing publishes without your sign-off, and if a claim cannot be supported we take it out rather than dress it up.',
      'If the story does not land here, we say so and redirect it to an outlet where it will. That is a normal outcome at this level, and we would rather tell you early than bill you for silence.',
    ],
    realityCheck: "Int'l Business Times is a step up from the profile titles, and we treat it that way. We do not guarantee it. Editorial judgment sits with the publication, not with us, and any agency telling you otherwise is selling you something. What we can commit to is an honest read on whether your story has the substance this kind of outlet needs, and a straight answer when it does not.",
    faqs: [
      { question: "Is Int'l Business Times harder to get into than CEO Weekly or NY Weekly?", answer: 'Yes. It is a business news publication with an international readership, and the bar for what it runs is higher than a founder-profile title. We are candid about that in the first conversation. If your story is not ready for it yet, we will say so and suggest what would need to change.' },
      { question: 'What kind of story works here?', answer: 'Something with substance behind it — a market shift you can explain, results or research you can stand behind, a technology development your work gives you a real view on. Personal narrative alone rarely carries a business news piece. The test we apply is simple: would a reader who has never heard of you still want to read this?' },
      { question: 'What does it cost?', answer: 'Every engagement is quoted to your goals — which outlets you are after, how many placements, and how much writing is involved. A single feature is priced differently from an ongoing program, and a harder outlet is not the same job as a reachable one. Tell us what you want and we will price it. We reply within 24 hours.' },
    ],
  },
]

export const outletPageBySlug = new Map(outletPages.map((o) => [o.slug, o]))
