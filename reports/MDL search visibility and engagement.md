# Turn one page into a findable Zimbabwe brand

Modern Digital Labs' biggest visibility problem is structural. Search engines, answer engines and LLMs see **one indexable commercial URL** (the scrolling homepage), **no structured data**, **no Harare or address signal**, **no third-party corroboration**, and a ZimDrive page whose **"Get it on Google Play" badges link back to the MDL homepage**. Each channel the user asked about (Google and Bing SEO, AEO, GEO, local, off-site, conversion) fails for a different reason, but the fixes overlap heavily, so a small team can make fast progress. The sequence is:

1. Repair the technical base so crawlers and real users on expensive Zimbabwean mobile data can see the content.
2. Split the homepage into dedicated service, pricing, case-study and ZimDrive guide pages, so each query has one URL to match.
3. Build the off-site entity: Google Business Profile, Bing Places, Clutch, LinkedIn, reviews, press and YouTube.

Off-site brand mentions correlate with AI Overview visibility **three times more strongly than backlinks** ([Ahrefs](https://ahrefs.com/blog/ai-overview-brand-correlation/)). Google says AI features need **nothing beyond normal SEO** ([Google](https://developers.google.com/search/docs/appearance/ai-features)). That makes "GEO" mostly a reputation-building job, not a markup job.

On the conversion side, three things are missing: WhatsApp links carry no prefilled message or tracking, there are no prices or social proof, and ZimDrive has no waitlist. All three take days, not months, to fix.

ZimDrive's content needs one caution before it scales. Its own page states facts about the VID test, including a **23/25 pass mark**, that conflict with other sources or can't be verified. Those facts must be checked before they are repeated across dozens of pages.

## The starting point leaks visibility at every layer

The code audit shows how little of MDL's real capability search engines can currently see:

- **Navigation and URLs.** Homepage navigation uses only `#fragment` links (`components/hero-header.tsx`, `components/site-footer.tsx`). Google says it can't reliably treat fragments as separate content and recommends real paths ([Google JavaScript SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)). Services exist only as h3 cards in `components/services-section.tsx`. The sitemap (`app/sitemap.ts`) lists seven URLs, five of them legal pages.
- **The h1.** It reads "Modern websites and digital solutions for growing businesses" (`components/hero-section.tsx:38-43`) and has no service or location term in it.
- **Structured data.** A grep for `ld+json` across `app/`, `components/` and `public/` finds none.
- **Contact details.** Contact is a bare `wa.me/263711314881` link (`components/contact-section.tsx:9-10`). There's no visible address, city or email on the homepage. The live homepage confirms there's no Harare mention, no reviews and no pricing ([moderndigitallabs.co.zw](https://moderndigitallabs.co.zw/)).

ZimDrive has the most damaging defect. "Get the App" (`app/zimdrive/page.tsx:185`) and both Play badges (`app/zimdrive/page.tsx:414-432` and `:485-503`) point to `https://moderndigitallabs.co.zw`, so every unit of app interest is thrown away. Measurement is the other gap. The only analytics is `@vercel/analytics` in `app/layout.tsx`, with no GA4, no Clarity and no custom events. On the Hobby plan, Vercel's custom `track()` events aren't available at all ([Vercel docs](https://vercel.com/docs/analytics/custom-events)). Today MDL can't tell which page, service or channel produced a WhatsApp enquiry.

The audience makes all of this more urgent. In Zimbabwe, **Google holds 95.63% of search and Bing 3.98%**, and **67.55% of web traffic is mobile** ([StatCounter search](https://gs.statcounter.com/search-engine-market-share/all/zimbabwe); [StatCounter platform](https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/zimbabwe)). A 2026 ranking based on Cable.co.uk data puts Zimbabwe's mobile data at **$43.75/GB, the most expensive of 237 countries** ([Les Afriques](https://lesafriques.com/en/2026/10/the-real-price-of-data-in-africa-ranking-of-53-countries-0-38-to-43-75-per-gb/)). WhatsApp is the leading mobile platform, and press coverage of POTRAZ Q4 2025 data puts it at roughly **one in five megabytes consumed** ([NewsDay](https://www.newsday.co.zw/local-news/article/200054686/data-consumption-keeps-mnos-afloat-as-costs-surge)). A heavy, WebGL-led single page with a WhatsApp link that can't be tracked is close to the worst fit for that audience.

## SEO for Google and Bing: fix rendering, then split the page

### Technical fixes come first because the hero hides the page's most important text

The largest technical problem is self-inflicted. The hero h1 is wrapped in a `motion.div` with `initial="hidden"`, and `lib/motion.ts` sets `fadeUp.hidden = { opacity: 0, y: 24 }`. The server-rendered h1 therefore arrives invisible. Chrome doesn't count invisible elements as LCP candidates, so LCP waits for the JavaScript to download, hydrate and finish the animation. The same pattern appears at `app/zimdrive/page.tsx:161`. Google's "good" thresholds are **LCP ≤2.5s, INP ≤200ms and CLS ≤0.1 at the 75th percentile of real users** ([web.dev](https://web.dev/articles/vitals)). The fix is to render the h1 visibly (`initial={false}`, or animate only `transform`).

The WebGL background in `components/floating-lines.tsx` is the second problem:

- It imports three.js statically.
- It runs `WebGLRenderer({ antialias: true })` at up to 2x DPR (lines 310-311).
- It loops `requestAnimationFrame` forever (line 455), with no pause when the tab is hidden or the hero is off-screen, and no `prefers-reduced-motion` check.

To fix it, load it with `next/dynamic(..., { ssr: false })` after first paint, cap DPR at 1–1.5 on mobile, drop antialiasing, pause the loop with IntersectionObserver or `document.hidden`, and show a static fallback for reduced-motion and Save-Data users.

Three structural fixes follow from the same audit:

- **Make the homepage a Server Component.** `app/page.tsx` is `"use client"` only to hold colour-preset state, so the whole tree ships as JavaScript. Move that state into a small client island.
- **Turn image optimisation back on.** `next.config.mjs` sets `images.unoptimized: true`, which means no resizing and no AVIF/WebP. `public/zimdrive-app.png` is 339 KB, shown at about 270px wide, and marked `priority` even though it sits below the fold (`components/projects-section.tsx:220-226`).
- **Remove dead code.** `components/smooth-scroll-provider.tsx` (Lenis) appears unused and should go, along with unused v0-scaffold dependencies.

Core Web Vitals are a modest ranking signal, and Google says they shouldn't be a small business's top SEO priority ([SERoundtable](https://www.seroundtable.com/google-core-web-vitals-priority-34937.html)). The case for this work is conversion. Deloitte's Google-commissioned study found that **a 0.1s mobile speed gain lifted conversions 8.4% in retail and 10.1% in travel** ([web.dev](https://web.dev/case-studies/milliseconds-make-millions)), and the effect is likely larger where every megabyte costs money.

### Indexing hygiene is a short checklist

**Google Search Console.** The repo verifies Search Console through an HTML file (`public/google2a066ca52722e840.html`), which only covers a URL-prefix property. A DNS-verified Domain property is better. After the fixes, use URL Inspection's "Test live URL" to confirm the rendered HTML contains the h1, the service text and the JSON-LD.

**Bing.** Bing matters beyond its 4% share. It grounds Microsoft Copilot, and Bing Webmaster Tools' **AI Performance report (public preview since February 2026)** is the only first-party dashboard that shows AI citations and the "grounding queries" behind them ([Bing Webmaster Blog](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)). Import the site from Search Console and submit the sitemap. Then add IndexNow:

- a key file at `public/<key>.txt`
- an `app/api/indexnow/route.ts` route protected by a secret, which POSTs the sitemap URLs to `api.indexnow.org`
- a trigger from a Vercel deploy hook

The protocol accepts up to 10,000 URLs per POST, and participating engines share submissions with each other ([IndexNow](https://www.indexnow.org/documentation)). Google doesn't take part in IndexNow.

**Smaller fixes:**

- `app/sitemap.ts`: stamp each URL with its real modification date instead of `new Date()` on every build.
- `app/robots.ts`: drop the Yandex-only `host:` line.
- `app/layout.tsx`: remove `generator: 'v0.app'` and trim the `keywords` array.
- `app/layout.tsx`: replace the `/favicon.jpg` icons with the `app/icon` conventions, since `public/icon.svg` and `apple-icon.png` exist but aren't used.
- `app/zimdrive/layout.tsx`: add OG image dimensions and a `twitter` block.

### A single page can't rank for five services

Google indexes URLs, not sections. Bing's February 2026 guideline rewrite explicitly asks publishers to keep **each URL focused on one topic**, with essential facts near the top ([Search Engine Journal](https://www.searchenginejournal.com/bing-adds-geo-to-official-guidelines-expands-ai-abuse-definitions/568442/)). Ahrefs also finds that splitting keywords across intent-mapped pages is "often more effective" ([Ahrefs](https://ahrefs.com/blog/?p=159106)). No controlled study measures the one-page penalty, but the practitioner consensus and both engines' guidance point the same way.

The recommended structure keeps the homepage for brand and broad "web development Zimbabwe" terms and adds the following, all built as Server Components, added to `app/sitemap.ts` and linked from the homepage service cards and footer:

- `/services` with spokes for website design, web app development, e-commerce, payment integration, hosting, `.co.zw` domain registration and maintenance
- `/pricing`
- `/work/<case-study>`
- `/about`
- a `/guides` blog
- one `/web-design-harare` page, only with real local proof

The footer doesn't currently link to `/zimdrive` at all.

### The pricing and payment-integration queries are the most winnable

The keyword research found four search clusters: price, location plus service, infrastructure (domains and hosting) and payments. The research tool couldn't measure Zimbabwean volumes, so validate everything with Search Console, Google Trends set to Zimbabwe, and Keyword Planner.

**Pricing.** The current results for "how much does a website cost in Zimbabwe" are weak. They include an opinion piece on iBzim, one Harare agency's packages (**$300 Basic / $500 Standard for 5 pages**) and South African guides ([Fanadoh](https://fanadoh.com/?p=3801); [IBZIM](https://www.ibzim.com/tech/info/you-are-paying-too-much-for-a-website-in-zimbabwe); [Procompare](https://www.procompare.co.za/pro-info-centre/success-tips/website-cost-south-africa)). A transparent USD pricing page is the clearest opening.

**Payment integration.** This is MDL's most defensible technical niche. Paynow publishes SDKs and a Shopify guide ([Paynow](https://developers.paynow.co.zw/about.html)). ZB's Smile and Pay launched in May 2025 covering EcoCash, ZimSwitch, InnBucks, OneMoney and cards ([TechZim](https://www.techzim.co.zw/2025/05/zb-launches-payment-gateway)). TechZim reports that local e-commerce firms rely on workarounds because no proper payments API exists ([TechZim](https://techzim.co.zw/?p=2185355)). A developer-led agency that explains these options with working code can earn both rankings and links from the local developer community.

**Domains.** ZISPA charges non-member registrars **USD35 per `.co.zw` domain per year** ([ZISPA](https://zispa.org.zw/)), yet resellers advertise from $3 ([JomeTech](https://www.jometechhosting.com/domains)). An honest explainer of that gap is useful content. MDL must not claim registrar or ZISPA status unless it actually holds it.

## AEO: build pages that answer the question, not pages that chase snippets

Answer engine optimisation for Google means being one of the sources AI Overviews and AI Mode cite. The official requirements are minimal. A page qualifies if it is **"indexed and eligible to be shown in Google Search with a snippet"**, and Google states there is **"no special schema.org structured data that you need to add"** ([Google: AI features](https://developers.google.com/search/docs/appearance/ai-features)). Google also describes **query fan-out**: AI Mode runs several related sub-searches. That rewards sites with a distinct URL for each sub-question, and the homepage's six-question FAQ gives it almost nothing to match. Google's May 2025 guidance asks for "unique, non-commodity content" and supporting images and video ([Google Search Central Blog](https://developers.google.com/search/blog/2025/05/succeeding-in-ai-search)).

FAQ rich results no longer apply. **Since May 7, 2026, FAQ rich results no longer appear in Google Search**, and HowTo rich results ended in 2023 ([TechWyse](https://www.techwyse.com/news/ai-search/google-faq-rich-results-deprecated-2026)). FAQ content is still worth having on the page. Bing's February 2026 guidance names clear headings, tables and **FAQ sections**, along with evidence and entity consistency, as good practice for Copilot citations ([Bing Webmaster Blog](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)). One unverified report says Bing advised against hiding key answers in accordions, so check that `components/faq-section.tsx` keeps collapsed answers in the server-rendered DOM.

The click economics change what each page should be for. Pew found users clicked a traditional result on **8% of visits when an AI summary appeared vs 15% without**, and clicked a link inside the summary only about **1%** of the time ([The Register](https://www.theregister.com/2025/07/22/google_ai_overviews_suppress_search/)). Ahrefs' February 2026 update measured **58% lower CTR for position 1** on informational queries with an AI Overview ([Ahrefs](https://ahrefs.com/blog/ai-overviews-reduce-clicks-update/)). Seer found brands cited inside the overview got **35% higher organic CTR** than uncited ones, though it couldn't prove causation ([Seer Interactive](https://www.seerinteractive.com/insights/aio-impact-on-google-ctr-september-2025-update)). All of this data is US-centric.

The implication for MDL and ZimDrive is to treat informational answers as a way into citations and brand recall, and make the clickable value something a summary can't provide:

- a cost estimator on `/pricing`
- a free interactive 10-question practice set on `/zimdrive/practice-test`
- answer explanations
- an action (quote, install, waitlist)

Search Console will likely show rising impressions with flat clicks. Track conversions instead, which is also Google's advice.

### Structured data is hygiene, not a lever

A controlled Ahrefs study (May 2026) found **no significant citation change** after 1,885 already-cited pages added JSON-LD ([TechWyse summary](https://www.techwyse.com/news/ai-search/schema-markup-ai-citations-ahrefs-study)). Schema is still worth adding because it costs almost nothing and helps entity disambiguation, logos and Bing ([Google: Organization](https://developers.google.com/search/docs/appearance/structured-data/organization)). Next.js recommends a native `<script type="application/ld+json">` in a layout or page, with `<` escaped ([Next.js JSON-LD guide](https://nextjs.org/docs/app/guides/json-ld)).

Because `app/page.tsx` and `app/zimdrive/page.tsx` are client components, put the markup in the server layouts:

- **`app/layout.tsx`:** an `@graph` with a `ProfessionalService` node (name "Modern Digital Labs", alternateName "MDL", logo, `telephone: "+263 71 131 4881"`, email, `areaServed`, `address` with addressLocality Harare and addressCountry ZW, and `sameAs` links to the business profiles) plus a `WebSite` node.
- **`app/zimdrive/layout.tsx`:** a `MobileApplication` node (ANDROID, EducationalApplication, price 0, publisher pointing to the MDL `@id`, and `installUrl` once a real Play URL exists).

`llms.txt` is optional. Google says no AI-specific files are needed, and log studies show AI crawlers almost never request the file. In Ahrefs' data, about 28% of domains publish one, but only about 1,100 sites received any request for it, mostly from SEO tools ([SEO Sherpa on Ahrefs](https://seosherpa.com/97-of-llms-txt-files-are-never-read/)). MDL shouldn't present it to clients as a ranking tactic.

## GEO: AI engines name brands that other sites already name

Generative engine optimisation means getting MDL and ZimDrive named in answers from ChatGPT, Perplexity, Copilot and Gemini.

### Access comes first

Each engine has its own search crawler, and blocking it removes the site:

- **OpenAI:** "Sites that are opted out of OAI-SearchBot will not be shown in ChatGPT search answers." GPTBot, the training crawler, is controlled separately ([OpenAI crawler docs](https://developers.openai.com/api/docs/bots)).
- **Perplexity:** PerplexityBot handles search inclusion and isn't used for model training ([Perplexity docs](https://docs.perplexity.ai/guides/bots)).
- **Google:** Google-Extended controls Gemini training and grounding only. It doesn't affect Search or AI Overviews.

`app/robots.ts` currently allows everything, which is the right setting. If a CDN or bot-protection layer sits in front of the site, check it. Cloudflare began **blocking AI crawlers by default for new customers on July 1, 2025** ([MIT Technology Review](https://www.technologyreview.com/2025/07/01/1119498/cloudflare-will-now-by-default-block-ai-bots-from-crawling-its-clients-websites/)), and a block at that layer overrides `robots.txt`. Blocking the training crawlers is a judgement call. For a small brand that wants to be remembered, allowing them has a plausible upside, though no direct evidence either way.

### Off-site signals drive most of the result

Ahrefs' study of 75,000 brands found that branded web mentions correlate with AI Overview visibility at **0.664, against 0.218 for backlinks**. The effect was winner-takes-all: the bottom half of brands got almost no AI mentions ([Ahrefs](https://ahrefs.com/blog/ai-overview-brand-correlation/)).

Local recommendations follow the same pattern. In a 10,000-business study, businesses that ChatGPT and Perplexity recommended averaged **133 Google reviews, against 11 for those ignored** ([eClincher](https://www.eclincher.com/articles/reviews-ai-visibility)). Businesses in Google's Local Pack were recommended **3.5x more often** ([Insites](https://insites.com/blog/what-ai-uses-to-choose-local-businesses-and-what-it-ignores/)).

Agency recommendations follow directories, and Clutch reportedly accounted for **about 84.5% of directory citations** in Momentic's 2026 study ([Momentic](https://research.momenticmarketing.com/state-of-agency-seo-2026)). Clutch's own claim that providers with 50+ reviews get 27x more AI citations is a vendor figure ([Clutch](https://clutch.co/resources/clutch-trust-ecosystem-ai)).

Community and video platforms make up the rest of the citation pool. Semrush found Reddit in about **40.1%** of LLM citations, Wikipedia 26.3% and YouTube 23.5% ([Statista](https://www.statista.com/statistics/1620335/top-web-domains-cited-by-llms)). BrightEdge measured YouTube at **about 29.5% of Google AI Overview citations**, the top domain overall ([BrightEdge](https://brightedge.com/resources/weekly-ai-search-insights/youtube-presence-ai-search)).

On content tactics, the academic GEO paper found that adding statistics, quotations and citations raised source visibility **by up to about 40%** on its benchmark, while keyword stuffing didn't help ([arXiv GEO paper](https://arxiv.org/abs/2311.09735)). The tests used 2023–24 engines, so treat the effect as directional.

All of these findings are correlational, none of them comes from African markets, and AI answers vary from run to run. Taken together, though, they say that MDL's AI visibility will come mostly from:

- consistent, crawlable mentions of "Modern Digital Labs" and "ZimDrive" with the same name, one-line description, location and URL everywhere
- Google and Clutch reviews
- YouTube explainers
- genuine, disclosed answers on Reddit and Quora

WhatsApp is the main conversion channel in Zimbabwe, but it can't be crawled. Anything posted there must be mirrored somewhere public.

### Measure GEO directly

Measurement needs three sources:

- **Bing Webmaster Tools AI Performance** for Copilot citations and grounding queries.
- **A monthly manual prompt log.** Run fixed prompts such as "best web developer in Harare" and "app to practice Zimbabwe VID test" in ChatGPT (search on), Perplexity, Copilot, Gemini and AI Mode. Record whether MDL or ZimDrive is named and which sources are cited, then go after those sources.
- **GA4 referral segments** for chatgpt.com, perplexity.ai, copilot.microsoft.com and gemini.google.com.

## Local SEO: claim the map pack competitors left empty

### Google Business Profile and Bing Places

MDL qualifies for a Google Business Profile as a **service-area business**. It can hide its address and list up to **20 service areas within about two hours' drive** of its base. Harare, Chitungwiza, Ruwa, Norton, Epworth, Marondera and Bindura fit. Bulawayo and "all of Zimbabwe" don't ([GBP Help](https://support.google.com/business/answer/9157481)).

Video verification is available to service-area businesses ([Google support](https://support.google.com/business/answer/14271705)). Prepare one continuous clip showing a Harare landmark, the workspace, branded material, live admin dashboards and registration documents. The research found no source on which verification methods Google actually offers in Zimbabwe, so MDL will only see its options during signup.

Suggested categories, not yet checked against Google's list: primary "Website designer", secondary "Software company" and "Web hosting company". Google's stated local ranking factors are **relevance, distance and prominence**, and prominence includes the number and rating of reviews ([GBP Help](https://support.google.com/business/answer/7091)).

Bing Places relaunched on **October 3, 2025** at bing.com/forbusiness. It can import a verified Google profile ([Bing blog](https://blogs.bing.com/search/October-2025/Introducing-the-New-Bing-Places-for-Business-Built-for-Business-Owners,-Powered-by-Research)), and third-party guides say a verified import is verified instantly on Bing too ([Whitespark](https://whitespark.ca/guides/the-ultimate-guide-to-your-bing-places-listing/)). Set up the Google profile first, then import it.

### Directories, NAP and reviews

Competitors mostly win "web design Harare" through directory profiles, not their own pages:

- TechBehemoths ([Harare list](https://techbehemoths.com/companies/web-design/harare))
- Clutch ([KuWeX](https://clutch.co/profile/kuwex-studios))
- DesignRush ([Antfarm](https://www.designrush.com/agency/profile/antfarm-tech-solutions))
- GoodFirms ([Zimbabwe](https://www.goodfirms.co/companies/web-development-agency/zimbabwe))
- Sortlist ([Ominitec](https://www.sortlist.co.uk/agency/ominitec))

A complete, reviewed profile on each of these is a ranking path in its own right. Add the local directories too: the SMEAZ marketplace ([SMEAZ](https://www.smeaz.org.zw/shop-online/products-catalogue/web-design-services)), the ZimTrade directory if MDL qualifies ([ZimTrade 2026](https://tradezimbabwe.com/wp-content/uploads/2026/05/ZIMTRADE-2026-WEB.pdf)), and Apple Business Connect.

Name, address and phone (NAP) must be identical everywhere: "Modern Digital Labs", one +263 number in one format, "Harare, Zimbabwe" and one canonical URL. That applies to the Google and Bing profiles, every directory, LinkedIn, Facebook, the schema, the site footer and the `.co.zw` WHOIS record. ZISPA doesn't allow WHOIS privacy, so the registrant details are public and act as a citation ([Openprovider](https://support.openprovider.eu/hc/en-us/articles/11524569401746--co-zw)). Show the number as visible text, not only inside a `wa.me` link.

The `.co.zw` domain is already a **"strong signal"** of country targeting ([Google Search Central](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites)). Use `lang="en"` or `en-ZW` and `og:locale` `en_ZW`, and skip hreflang unless MDL adds Shona or Ndebele versions.

Reviews are where MDL can pull ahead fastest. None of the competitor sites checked (Webdev, Digital Two, Angel & Walt) show customer reviews ([Webdev](https://www.webdev.co.zw/); [Digital Two](https://digitaltwo.net/web-development/)). Google allows asking for reviews but bans incentives, **review gating** (asking only happy customers) and reviews from people with a conflict of interest ([Google policy](https://support.google.com/contributionpolicy/answer/7400114)). A compliant workflow:

1. Send every client a WhatsApp message with the Google review short link at handover, or 1–2 weeks after launch.
2. Follow up once.
3. Reply to every review within 48 hours.
4. Separately, ask selected clients for a Clutch review.

Asking reviewers to mention the project type and "Harare" puts relevant terms into the review text.

## Off-site channels: PR, video and driving schools carry ZimDrive

### Link building: earn coverage, don't buy links

Google's spam policy rules out buying links, keyword-anchored guest posts, excessive link exchanges, and **"footer or template links distributed across sites"** ([Google spam policies](https://developers.google.com/search/docs/essentials/spam-policies)). "Website by Modern Digital Labs" credits on client sites should therefore use branded anchor text, be nofollow when there are many of them, and never be a contract requirement. They still produce brand mentions and referral clicks, which is what matters for AI visibility.

HARO-style platforms are poor value for a Zimbabwe agency. Connectively shut down in December 2024, HARO was revived under Featured in April 2025, and the queries on these platforms lean heavily toward the US and UK ([Press Gazette](https://pressgazette.co.uk/news/cision-closes-journalism-jobs-board-and-sells-expert-enquiry-service/)).

### PR: ZimDrive is the newsworthy asset

Local tech press does cover driving-test apps. TechZim covered ProvLabs in 2013 and Road Rules in 2015, and VOA Zimbabwe also covered ProvLabs ([TechZim 2013](https://techzim.co.zw/2013/03/provlabs-launches-zim-provisional-driving-license-application); [TechZim 2015](https://techzim.co.zw/2015/10/local-demo-africa-finalist-road-rules-launches-android-app)). The Herald covers the VID test itself ([Herald](https://www.heraldonline.co.zw/no-immediate-plans-to-change-learners-licence-test-2/)). The Financial Gazette republishes TechZim stories, so one placement can become several mentions ([Fingaz](https://fingaz.co.zw/muzinda-hub-and-its-army-of-1000-zimbabwean-techies-and-entrepreneurs/)).

Three story angles fit:

- a ZimDrive launch story
- a data story on the most-failed VID questions, from anonymised app data
- an "MDL tested X Zimbabwean business websites" speed and mobile study

Pitch them directly to named reporters at TechZim, NewsDay, the Herald, ITWeb Africa and TechCabal.

### Social platforms: match each audience

DataReportal's Digital 2026 report for Zimbabwe shows ([DataReportal](https://datareportal.com/reports/digital-2026-zimbabwe)):

- Facebook ad reach of **2.60M**
- **1.20M LinkedIn members**, which is unusually large for the market
- Instagram at 679K

Facebook drives **67% of social referrals** to websites ([StatCounter](https://gs.statcounter.com/social-media-stats/all/zimbabwe)).

DataReportal counts 6.54M internet users, while POTRAZ reports 84.55% internet penetration. The two measure different things (unique users vs subscriptions), so don't mix them.

For MDL's business audience, use LinkedIn (a company page plus the founder's profile, with case studies and "how we built it" posts), Facebook and the WhatsApp Business catalog with starting prices. For ZimDrive's learners, use:

- Facebook groups
- a WhatsApp Channel ("road sign of the day")
- WhatsApp Status shared by partner driving schools
- short video on YouTube Shorts, TikTok and Reels, kept small because data is expensive

YouTube explainers with Zimbabwe-specific titles, chapters and transcripts, embedded on the `/zimdrive` pages, are the best route for ZimDrive into Google's AI citations.

### Driving schools are the distribution channel

Earlier Zimbabwe test-prep apps partnered with schools: ProvLabs with Elite Driving School, and Road Rules built its content with a local school ([VOA Zimbabwe](https://voazimbabwe.com/a/provlabs-licences-application-accessibility-driving-motor-vehicles/1634039.html)). A partnership kit could include:

- QR posters
- WhatsApp Status assets
- a tracking code for each school
- a genuine "recommended by" listing on the ZimDrive page

Add a "share your mock-test score on WhatsApp" card in the app, and pair it with a public "passed with ZimDrive" wall so the shares also create crawlable mentions.

### Profiles that build the entity

List MDL on LinkedIn, Clutch, Crunchbase, GitHub and the Google Play developer page, and consider Wikidata. Wikipedia should wait until MDL has independent press coverage. Track unlinked mentions with Google Alerts.

## On-site engagement: make every WhatsApp click attributable

### Pricing and proof

Nielsen Norman Group finds that price is **the information business buyers want most**, and that many prospects won't make contact just to get one ([NN/g](https://www.nngroup.com/articles/show-price/)). Unbounce's 2020 data put agency landing pages at a **2.4% median conversion rate**, the lowest of 16 industries ([MarketingProfs](https://sb.marketingprofs.com/charts/2020/43021/median-landing-page-conversion-rates-for-16-industries)), so small absolute gains matter.

MDL currently has one portfolio item, no testimonials and no prices. Locally, only Webdev publishes prices well ([Webdev](https://www.webdev.co.zw/)). Digital Two quotes **roughly US$400 to over US$5,000** in its FAQ ([Digital Two](https://digitaltwo.net/web-development/)). On-site changes:

- Add 2–3 "from" packages in USD with inclusions and timelines.
- Turn ZimDrive into a full case study.
- Add named testimonials and a link to the Google review count.
- Replace generic "Contact Us" with specific CTAs ("Get a quote on WhatsApp") and repeat them after services, the case study and the FAQ.

### WhatsApp tracking

The click-to-chat format accepts a prefilled `?text=` parameter, and nothing is sent automatically ([Bird](https://bird.com/explained/whatsapp/what-is-a-whatsapp-click-to-chat-link)). Replace the bare `WHATSAPP_URL` in `components/contact-section.tsx` with prefilled messages for each CTA, each carrying a reference code. For example: "Hi MDL, I'd like a quote for a website (ref: WEB-HOME)". The code shows which page produced a real chat, not just a click.

GA4's enhanced measurement only logs these as generic outbound clicks. Add a `whatsapp_click` event with `cta_location` and `service` parameters and mark it as a key event ([Analytics Mania](https://analyticsmania.com/post/how-to-track-events-with-google-analytics-4-and-google-tag-manager/)). Then label chats in WhatsApp Business ("lead-web", "quoted", "won") so close rates can be calculated.

Desktop visitors need another route. Add a short form, a visible email and a `tel:` link. `app/privacy/page.tsx` already says "or by email" without giving an address.

### ZimDrive waitlist and Play pre-registration

Until a Play listing exists, replace the badges with an honest **"Join the waitlist"** form and a prefilled WhatsApp opt-in. Google Play pre-registration requires an APK or AAB on a release track, a launch **within 90 days**, and a setup about 3–6 weeks before launch ([Play Console Help](https://support.google.com/googleplay/android-developer/answer/9859047?hl=en)). Personal developer accounts created after November 2023 must also complete closed testing first.

Keep the owned waitlist after launch, because Play pre-registration doesn't give MDL any contact details. Once the app ships:

- Link the badges to the real `play.google.com/store/apps/details?id=` URL.
- Add `/.well-known/assetlinks.json` for Android App Links ([Android Developers](https://developer.android.com/training/app-links/add-applinks)).
- Tag Play links with install-referrer parameters.

### Play listing

Google Play's metadata rules allow titles of up to **30 characters** and short descriptions of up to **80**, and ban "free", "#1" and "best" ([Play Console Help](https://support.google.com/googleplay/android-developer/answer/4448378?hl=en)). "ZimDrive: VID Provisional Test" is exactly 30 characters. Differentiate on verified 2026 facts, answer explanations and post-2025 SADC signs. The "16 mock exams" claim won't stand out because a competing iOS app also offers 16 exams ([App Store](https://apps.apple.com/us/app/id6759820189)).

### Measurement stack and consent

Keep Vercel Analytics and add:

- **GA4** for key events
- **Microsoft Clarity** for heatmaps, scroll depth and rage clicks
- **Vercel Speed Insights** for field Core Web Vitals data

Clarity has enforced consent signals for EEA, UK and Swiss visitors since **October 31, 2025** ([Microsoft Learn](https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-consent-api-v2)). Zimbabwe's Cyber and Data Protection Act makes POTRAZ the regulator, and SI 155 of 2024 introduced data-controller licences ([DLA Piper Africa](https://www.dlapiperafrica.com/en/zimbabwe/insights/2024/A-Quick-Start-Guide-to-Zimbabwes-Data-Protection-Regulations)). To comply:

- Add an opt-in consent banner.
- Default Google Consent Mode to denied.
- Update the privacy page to name GA4, Clarity and Vercel and to disclose transfers to the US.

The site will have too few conversions for meaningful A/B tests. Compare four-week windows before and after each change instead.

## Facts to verify before ZimDrive content scales

ZimDrive sits close to "your money or your life" territory (legal requirements and road safety), where accuracy carries the most weight. Every fact below would be repeated across dozens of guide and sign pages. None has been confirmed against an official VID source.

| Claim | What the site says | What sources say | Status |
|---|---|---|---|
| Pass mark | 23/25 (`app/zimdrive/page.tsx:26`) | 22/25 ([open-exam-prep](https://open-exam-prep.com/practice/zw-zimtis-learner-licence-theory)). TellZim reports 88%, which equals 22/25 ([TellZim](https://tellzim.com/?p=1029)). | **Conflict. The evidence leans toward 22/25.** Confirm with VID or a driving instructor. |
| Time limit | 8 minutes (`app/zimdrive/page.tsx:26`) | open-exam-prep says VID doesn't publish a time limit | **Unverified** |
| Number of questions | 25 | 25, drawn from a bank of 1,000+ (open-exam-prep) | Consistent, but no official source found |
| 2026 learner-test fee | Not stated | The fee review was gazetted as SI 6 and SI 10 of 2026 ([AllAfrica/Herald](https://allafrica.com/stories/202601160028.html)), but no learner-test amount was found. Older reports say US$15–30, and open-exam-prep says US$20. | **Unknown.** Get the SI text from ZimLII or Veritas. |
| Oral test | Not stated | Only Scribd manuscripts surfaced ([Scribd](https://www.scribd.com/document/859544109/ORAL-LESSONS-MANUSCRIPT)) | **Existence and format unconfirmed.** Don't publish `/guides/vid-oral-test` until confirmed. |
| Wait before road test | Not stated | Six weeks or more after the learner's licence (a 2018 report, [TechZim](https://techzim.co.zw/2018/11/computerising-the-provisional-driving-test-is-a-few-days-away-this-is-both-good-and-bad)) | **Dated.** Re-verify. |
| Old warning signs phased out | Not stated | After 31 Dec 2025, per a Wikipedia mirror ([mirror](https://ipfs.ssi.eecc.de/ipns/en.wikipedia-on-ipfs.org/wiki/Road_signs_in_Zimbabwe)) | **Weak source** |
| Online booking portal | Not stated | A 2023 report on biometric booking ([Herald](https://www.heraldonline.co.zw/new-drivers-licence-launched-600-000-backlog-set-to-be-cleared/)) | **Current status unknown** |
| ZimDrive launch status and Play package ID | "Coming Soon" on the live site | Not applicable | **Needed** for badges, schema and App Links |

MDL also needs to confirm several of its own facts:

- company registration and the address to use for the Google profile and schema
- whether the WhatsApp number accepts voice calls, which matters for verification
- any ZISPA membership or registrar status
- founding year
- which Vercel plan the site is on, which determines whether image optimisation and `track()` are available
- whether any CDN is blocking AI crawlers
- which Search Console property type is in use
- whether MDL needs a POTRAZ data-controller licence

Every ZimDrive guide should carry its sources (Road Traffic Act [Ch 13:11], the TSCZ Highway Code, SI 6/10 of 2026), a "last verified" date, a named reviewer (ideally a certified instructor) and the disclaimer already in `components/zimdrive-disclaimer.tsx`. The Highway Code should be summarised, not copied. Spam PDF pages currently rank for "highway code Zimbabwe pdf" ([example](https://sawouangry.netlify.app/highway-code-zimbabwe-pdf)), so a legitimate HTML summary can beat them.

## Prioritised action plan

### Quick wins this week

| # | Action | Channel | Files / where |
|---|---|---|---|
| 1 | Point ZimDrive CTAs and Play badges to a waitlist (form plus prefilled WhatsApp) instead of the MDL homepage, and self-host the badge image | Conversion | `app/zimdrive/page.tsx:185`, `:414-432`, `:485-503` |
| 2 | Resolve the pass mark (22 vs 23) and the 8-minute claim, then edit or soften the copy | Trust / AEO | `app/zimdrive/page.tsx:26` |
| 3 | Make the hero h1 visible in server-rendered HTML | SEO / CWV | `components/hero-section.tsx:25-43`, `lib/motion.ts`, `app/zimdrive/page.tsx:161` |
| 4 | Add prefilled WhatsApp messages with a reference code for each CTA, show the number and email as visible text, add `tel:` and `mailto:` | Conversion / local | `components/contact-section.tsx:9-10`, hero and services CTAs, `app/privacy/page.tsx` |
| 5 | Add Organization/ProfessionalService and WebSite JSON-LD, plus MobileApplication on ZimDrive | SEO / AEO / Bing | `app/layout.tsx`, `app/zimdrive/layout.tsx` |
| 6 | Remove `generator`, trim `keywords`, fix favicons, set real sitemap lastmod dates, drop `host:`, link `/zimdrive` from the footer | SEO hygiene | `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`, `components/site-footer.tsx` |
| 7 | Verify a Search Console Domain property, submit the sitemap, import into Bing Webmaster Tools, check CDN bot settings | SEO / GEO | Accounts, DNS |
| 8 | Create the Google Business Profile as a service-area business (Harare plus nearby areas), then import it into Bing Places | Local / GEO | bing.com/forbusiness |
| 9 | Add GA4 key events (`whatsapp_click`, `join_waitlist`) and Clarity behind a consent banner | Measurement | `app/layout.tsx` |
| 10 | Run PageSpeed Insights (mobile) on `/` and `/zimdrive` to set a baseline, and start the monthly AI prompt log | Measurement | none |

### Next 30 days

| # | Action | Channel | Files / where |
|---|---|---|---|
| 11 | Defer and throttle the WebGL hero (dynamic import, DPR cap, pause when off-screen or hidden, reduced-motion and Save-Data fallback), delete the unused smooth-scroll provider | CWV / engagement | `components/floating-lines.tsx` (lines 310-311, 455), `components/smooth-scroll-provider.tsx` |
| 12 | Convert `app/page.tsx` to a Server Component with a client island for colour presets, re-enable image optimisation, remove `priority` from the below-fold ZimDrive image | CWV | `app/page.tsx`, `next.config.mjs`, `components/projects-section.tsx:220-226` |
| 13 | Add an IndexNow key file and a post-deploy submit route | Bing / GEO | `public/<key>.txt`, `app/api/indexnow/route.ts`, Vercel deploy hook |
| 14 | Ship `/pricing` (USD "from" packages, inclusions, renewal costs, payment methods) and `/about` (founder, photo, Harare, registration) | SEO / CRO / E-E-A-T | new `app/pricing/page.tsx`, `app/about/page.tsx`, `app/sitemap.ts` |
| 15 | Ship the first 3–4 service pages (website design, e-commerce, payment integration, domains and hosting), each 600–1,200 words with process, price range, real FAQs and a WhatsApp CTA | SEO / AEO | new `app/services/*`, link from `components/services-section.tsx` |
| 16 | Publish the ZimDrive case study at `/work/zimdrive` | E-E-A-T / PR | new `app/work/zimdrive/page.tsx` |
| 17 | Claim and complete profiles on Clutch, TechBehemoths, GoodFirms, DesignRush, Sortlist, SMEAZ, LinkedIn and Apple Business Connect with identical NAP, then add them to schema `sameAs` | Local / GEO | `app/layout.tsx` (`sameAs`) |
| 18 | Start the review workflow (Google plus Clutch) with every past and current client | Local / GEO | WhatsApp |
| 19 | Set up the WhatsApp Business catalog, labels and quick replies, and launch a ZimDrive WhatsApp Channel | Engagement | WhatsApp Business |

### Next 90 days

| # | Action | Channel | Files / where |
|---|---|---|---|
| 20 | Finish the remaining service pages and `/web-design-harare` (only with real local proof), and publish 6–8 guides (website cost 2026, `.co.zw` registration, Paynow vs Smile and Pay, EcoCash on WooCommerce, hosting, a pre-hire checklist) | SEO / AEO | `app/services/*`, `app/guides/*` |
| 21 | Build the ZimDrive hub: `/zimdrive/practice-test` (interactive, 10 questions per topic), `/road-signs` hub, 4 category pages and the top 30–40 sign pages, plus 6–8 verified guides with sources and last-verified dates | SEO / AEO | `app/zimdrive/*` |
| 22 | Publish a YouTube series ("Zimbabwe road signs explained", VID trick questions) with transcripts, embedded on ZimDrive pages and cross-posted to Shorts, TikTok and Reels | GEO / engagement | YouTube, `app/zimdrive/*` |
| 23 | Pitch the ZimDrive launch and a "most-failed VID questions" data story to TechZim, the Herald and NewsDay, then a website-speed study for MDL | Off-site / GEO | PR |
| 24 | Sign up a pilot group of driving schools (QR posters, Status assets, a code per school, a "recommended by" listing) | Off-site / engagement | `app/zimdrive/page.tsx` |
| 25 | When the APK is on a testing track: enable Play pre-registration, link the real Play URL, add `assetlinks.json` and App Links, add install-referrer tags | ASO / conversion | `public/.well-known/assetlinks.json`, `app/zimdrive/*` |
| 26 | Post genuine, disclosed answers on r/Zimbabwe, Quora and Facebook groups, and set up Google Alerts for brand mentions | GEO | none |
| 27 | Review the data monthly: Search Console queries and CTR, Bing AI Performance grounding queries, GA4 key events by CTA reference code, Clarity recordings, the AI prompt log. Refresh fee and price pages quarterly. | Measurement | none |

## Conclusion

The research changes how MDL should read the "SEO vs AEO vs GEO" framing. For a small Zimbabwean agency these aren't three strategies. They are one: crawlable pages with one focus each that state who, what and where plainly, backed by third parties that say the same thing. The extra layers that vendors sell (llms.txt, AI-specific schema, "AI ranking" services) have the weakest evidence. The work with the strongest evidence is ordinary: reviews, directory profiles, press, YouTube, and honest pricing.

Two things are specific to this market. Competitors have left reviews, transparent prices and tracked WhatsApp funnels almost untouched, so a disciplined team can lead locally with modest effort. And ZimDrive is MDL's strongest link-earning asset as long as its facts are right. A verified, dated, well-sourced VID resource can beat the spam PDFs and thin blogs that rank today, while every error would be repeated across the whole content hub, every app-store listing and every AI answer that cites it. Settle the pass mark, the 2026 fees and the oral-test question first, then scale.
