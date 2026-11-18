# Technical SEO for Google and Bing (2025-2026), Applied to moderndigitallabs.co.zw

Research date: 2026-11-18. Code audit is read-only against /Users/admin/Documents/GitHub/portfoliov3 (Next.js 16.2.6, React 19, motion 12, three 0.184). "Older" means pre-2025 and is marked as such.

## What Google's current official guidance says matters, and what changed recently

### Takeaway
Google's official position hasn't changed: rankings reward helpful, reliable, people-first content, with trust at the center of E-E-A-T. The helpful content system now lives inside core ranking, so there is no separate "HCU" to recover from. The 2025-2026 changes were mostly regular core updates and fewer SERP features, not new ranking factors. For MDL, the levers are first-hand proof of the work (who built what, for whom, with what results), clear authorship and business identity, and content that fully answers each service query.

### Cited Findings
- Google's self-assessment questions: would your audience find the content useful if they arrived directly; does it show first-hand experience or depth of knowledge; does the site have a clear primary purpose; will readers come away able to reach their goal. — [Google: Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- Warning signs of search-engine-first content: writing to a word count, faking freshness by changing dates, extensive automation, summarizing others without adding value. — [Google: Creating helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- Trust is the most important part of E-E-A-T. E-E-A-T is not itself a ranking factor, but it is weighted more heavily for YMYL topics. Quality-rater scores do not directly affect rankings. — [Google: Creating helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- "Who / How / Why" framework: make authorship clear, disclose how content was produced (including AI use where readers would expect it), and make helping people the primary purpose. Mass-produced AI text without oversight is "little to no effort". AI used mainly to manipulate rankings violates spam policies. — [Google: Creating helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- The helpful content system is now part of the core ranking systems and no longer ships as separate updates. This happened with the March 2024 core update (older, but still the current state). — [Practical Ecommerce](https://www.practicalecommerce.com/googles-core-updates-explained); [SE Roundtable](https://www.seroundtable.com/google-core-updates-more-often-nada-39660.html)
- 2025 core updates as reported by industry press: March 2025 (about 14 days), June 30 to July 17, 2025, and December 2025 (about 18 days, finished December 29). Google's line is that sites making satisfying content have "nothing special to do". Some sites hit by the 2023 HCU partly recovered in June 2025. — [Bluetone Media](https://www.bluetonemedia.com/Blog/google-seo-updates-in-2025); [Seeders](https://seeders.com/blog/june-2025-google-core-update/); [Herdl](https://herdl.com/googles-december-2025-core-update/). These are secondary sources; I didn't fetch the Google Search Status Dashboard to confirm dates.
- One source reports a March 2026 core update that further cut FAQ rich-result impressions. — [TechWyse](https://www.techwyse.com/news/ai-search/google-faq-rich-results-deprecated-2026)
- SERP simplification. In June 2025 Google phased out rich results for Book Actions, Course Info, ClaimReview, Estimated Salary, Learning Video, Special Announcement and Vehicle Listing, and said this changes appearance, not rankings. In November 2025 Google began phasing out more lesser-used features, including Practice Problems; Dataset markup is now used only in Dataset Search. Search Console support for those types was removed starting January 2026. — [Google Search Central blog, Jun 12 2025](https://developers.google.com/search/blog/2025/06/simplifying-search-results); [Google Search Central blog, Nov 5 2025](https://developers.google.com/search/blog/2025/11/update-on-our-efforts); [Search Engine Journal](https://www.searchenginejournal.com/google-retires-7-structured-data-features-to-streamline-search-results/548952/)
- JavaScript SEO, from Google's current docs: SSR or pre-rendering is recommended. Links must be `<a href>` elements. Don't use `#fragment` URLs to load different content, because Googlebot can't reliably resolve them; use real paths with the History API instead. Prefer `rel=canonical` in the HTML and never point it at a different URL via JavaScript. Use unique titles and descriptions per page. — [Google: JavaScript SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
- Spam policies (site reputation abuse, scaled content abuse, expired domain abuse) date from the March 2024 update. They are older but still in force. They're mainly relevant to MDL as things to avoid, for example mass-generated "web design in [every city]" pages.

### Inferences
- Nothing in 2025-2026 official guidance gives a technical trick for small agencies. What helps MDL is (a) original, specific evidence of work and expertise (case studies with named clients, screenshots, outcomes, the founder's identity), (b) clear business identity and trust signals (a real person, contact details, legal pages, which already exist), and (c) a clean technical base so Google can see all of it.
- AI-written service copy is acceptable only with real editorial input and first-hand detail. Generic "we build fast, modern websites" copy is what core updates tend to demote.

### Gaps
- I didn't fetch the Google Search Status Dashboard incident list, so exact 2025-2026 core and spam update dates come from secondary sources.
- I didn't verify whether Google announced any new named spam policies in 2026.

## Core Web Vitals now, and how WebGL/three.js and heavy client components affect them (Next.js fixes)

### Takeaway
The thresholds are LCP ≤2.5s, INP ≤200ms and CLS ≤0.1, measured at the 75th percentile of real users for mobile and desktop separately. INP replaced FID in March 2024. On this site, the main risks are the hero h1 starting at opacity 0 until hydration (delayed LCP), main-thread work from an always-running full-screen WebGL shader plus motion on every section (INP), and `images.unoptimized: true` (oversized PNGs, no AVIF/WebP). The likely Zimbabwean audience, mostly mobile and often on mid-range Android over variable connections, makes these worse.

### Cited Findings
- "Good" thresholds: LCP ≤2.5s, INP ≤200ms, CLS ≤0.1, at the 75th percentile, segmented by mobile and desktop. A page passes only if it meets all three. INP "became a stable Core Web Vital metric in 2024", replacing FID. — [web.dev: Web Vitals](https://web.dev/articles/vitals)
- The "poor" boundaries (LCP >4s, INP >500ms, CLS >0.25) come from my own knowledge of web.dev's threshold docs. The fetched page shows them only as images, so treat them as unverified in this session. — [web.dev: Web Vitals](https://web.dev/articles/vitals)
- Google says to judge page experience holistically, not on one or two metrics. — [Google: Creating helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)

### Code audit: performance (file-referenced)
- **Hero h1 is hidden until JS runs.** `components/hero-section.tsx:25-43` wraps the h1 in `motion.div variants={staggerContainer} initial="hidden"`, and `lib/motion.ts` `fadeUp.hidden = { opacity: 0, y: 24 }`. SSR outputs the h1 with `opacity:0`, and Chrome doesn't count invisible elements as LCP candidates. LCP therefore waits for JS download, hydration and the 0.55s animation, plus a 0.05s delay and 0.1s stagger. This is probably the biggest LCP problem on the homepage. `app/zimdrive/page.tsx:161` (the ZimDrive h1) has the same pattern. Fix: render the h1 and hero copy visible in SSR (`initial={false}`, or animate only `transform`), or limit entrance animation to non-LCP elements.
- **All sections are client components.** `app/page.tsx:1` is `"use client"` only to hold `colorPreset` state, and every section component (`services-section`, `why-mdl-section`, `how-we-work-section`, `projects-section`, `faq-section`, `contact-section`, `hero-section`) is `"use client"`. Next.js still SSRs them, so the text is in the HTML, which is good for indexing. However, the whole tree ships as JS and hydrates, which raises bundle size and INP and TBT risk. Fix: make `app/page.tsx` a Server Component. Isolate the WebGL background and color-preset state in a small client island, and keep static section markup server-rendered. motion can stay inside small client leaf components.
- **WebGL hero loads eagerly and never pauses.** `components/floating-lines.tsx` imports three.js statically, creates `WebGLRenderer({ antialias: true })` at `setPixelRatio(min(dpr, 2))` (line 310-311), and runs `requestAnimationFrame` forever (line 455). There is no pause on `visibilitychange` or when scrolled off-screen, no `prefers-reduced-motion` check (only `projects-section.tsx` uses `useReducedMotion`), and a pointermove handler runs on every frame. A full-viewport fragment shader at DPR 2 on mid-range phones competes with input handling and hurts INP and battery. Fixes:
  - load it with `next/dynamic(() => import(...), { ssr: false })` after idle or first paint
  - cap DPR at 1-1.5 on mobile and drop `antialias`
  - pause the RAF loop with IntersectionObserver or `document.hidden`
  - respect reduced motion
  - consider a static CSS or SVG fallback on low-end devices (`navigator.hardwareConcurrency` or `deviceMemory`)
- **Images.** `next.config.mjs` sets `images.unoptimized: true`, so `next/image` serves original files with no resizing or AVIF/WebP. `public/zimdrive-app.png` is 339 KB, displayed at about 270px wide (`components/projects-section.tsx:220-226`), and is marked `priority` even though it sits well below the fold in the Projects section. That adds a wasted high-priority preload competing with hero resources. `app/zimdrive/page.tsx` loads screenshots from `*.public.blob.vercel-storage.com` and the Play badge from `play.google.com` unoptimized. Fix: remove `unoptimized` (Vercel's image optimization usage-based limits apply on the Hobby plan; check the plan) or pre-convert to WebP/AVIF at display size. Use `priority`/`preload` only for the actual above-the-fold LCP image (the ZimDrive hero screenshot on /zimdrive). Add `remotePatterns` for the blob host.
- **Fonts.** `app/layout.tsx` loads three Google fonts through `next/font/google` (Geist_Mono, Montserrat, Open_Sans). `next/font` self-hosts them and avoids layout shift, which is good. Geist Mono may be unused weight; check whether it's referenced, since each family adds preload bytes.
- **Dead code.** `components/smooth-scroll-provider.tsx` (Lenis plus its own RAF loop) isn't imported anywhere I found, and `@studio-freight/lenis` is still a dependency. Many `@radix-ui/*` and `recharts` dependencies look like v0 scaffolding. They only ship if imported, but worth pruning.
- **Analytics.** `@vercel/analytics` is present. Vercel Speed Insights (`@vercel/speed-insights`) is not, so there is no field CWV monitoring beyond CrUX and Search Console. CrUX may have too little traffic data for a small .co.zw site.

### Inferences
- With minimal content changes, fixing the hero opacity, deferring WebGL and making the page server-first would likely move mobile LCP and INP the most.
- CWV is a modest ranking signal, mostly a tiebreaker among similarly relevant pages. For a small agency, content, relevance and local signals matter more, but a heavy WebGL page hurts conversions on slow mobile connections regardless.

### Gaps
- I didn't run Lighthouse or PageSpeed Insights or pull CrUX data for the live site in this session, so actual LCP, INP and CLS values are unknown. Next step: PSI on `/` and `/zimdrive` (mobile), plus Search Console's Core Web Vitals report.
- I didn't fetch Google's official "page experience" doc to quote its current wording on how much CWV weighs.

## Bing specifics: Webmaster Tools, IndexNow, ranking guidance, Bing Places, and how Bing differs

### Takeaway
Bing matters beyond its own SERP because it grounds Microsoft Copilot and other engines that use Bing's index. Microsoft's February 2026 guideline rewrite formally covers Copilot and grounding citations and names "GEO". The practical steps for MDL:
- verify in Bing Webmaster Tools (one-click import from Google Search Console)
- submit the sitemap
- add an IndexNow key file plus a post-deploy ping
- create or claim a Bing Places listing, which was relaunched in October 2025 with Google Business Profile import

The repo currently has no Bing verification (`BingSiteAuth.xml` or `msvalidate.01`) and no IndexNow key.

### Cited Findings
- Microsoft rewrote the Bing Webmaster Guidelines around February 27, 2026, without a separate announcement. They now cover Copilot and grounding API results and name "Generative Engine Optimization (GEO)" for eligibility to be cited in AI answers. GEO doesn't guarantee citations. — [Search Engine Journal](https://www.searchenginejournal.com/bing-adds-geo-to-official-guidelines-expands-ai-abuse-definitions/568442/); [SE Roundtable](https://www.seroundtable.com/bing-webmaster-guidelines-updated-41002.html)
- New grounding guidance: state facts directly, use clear and consistent entity names, keep each URL focused on one topic, and put essential information near the top of the page. — [Search Engine Journal](https://www.searchenginejournal.com/bing-adds-geo-to-official-guidelines-expands-ai-abuse-definitions/568442/)
- Robots directives and Copilot: NOARCHIVE blocks use in Copilot answers and grounding; NOCACHE limits Copilot to URL, title and snippet; NOSNIPPET and data-nosnippet may reduce citation quality. Bing advises against NOCACHE if you want rich citations. — [Search Engine Journal](https://www.searchenginejournal.com/bing-adds-geo-to-official-guidelines-expands-ai-abuse-definitions/568442/)
- The AI-content stance softened: the target is large-scale content "generated without oversight, quality control, or editorial review". "Keyword Stuffing" became "Keyword Stuffing and Artificially Engineered Language", and a "Prompt Injection and AI Manipulation" abuse section was added. The rewrite removed the detailed JavaScript-rendering and sitemap-format guidance. The guidelines also recommend tracking impressions and citation eligibility, not just clicks. Bing launched an AI Performance dashboard in Webmaster Tools about two weeks before the rewrite. — [Search Engine Journal](https://www.searchenginejournal.com/bing-adds-geo-to-official-guidelines-expands-ai-abuse-definitions/568442/)
- Bing reportedly advised in October 2025 against hiding key answers in tabs or accordions for AI search. This is secondary reporting I couldn't verify against Microsoft's text. — [summarized in search results; Relevant Audience](https://www.relevantaudience.com/seo/how-to-optimize-content-for-microsoft-search-ai-in-2025/)
- IndexNow protocol:
  - The key is 8-128 characters from `a-z A-Z 0-9 -`.
  - Host `https://host/{key}.txt` containing the key, or use `keyLocation`, which limits scope to that path.
  - Submit by GET `https://<engine>/indexnow?url=...&key=...` or POST JSON `{host, key, keyLocation?, urlList}` with up to 10,000 URLs.
  - Responses: 200 OK, 202 accepted pending validation, 400 bad format, 403 invalid key, 422 URLs not matching the host, 429 rate-limited.
  - Participating engines share submissions with each other.
  — [IndexNow documentation](https://www.indexnow.org/documentation)
- IndexNow on Next.js/Vercel: there is no built-in Next.js integration. The common pattern is `public/{key}.txt` (served at the root) plus a route handler or post-deploy script that POSTs sitemap URLs, with the key in a Vercel environment variable. A Vercel cron job (`vercel.json`) can trigger periodic submits. — [freeCodeCamp](https://www.freecodecamp.org/news/how-to-index-nextjs-pages-with-indexnow/); [DEV: IndexNow in Next.js](https://dev.to/iurii_rogulia/indexnow-in-nextjs-instant-indexing-after-every-deploy-41am); [Trevor Lasn](https://trevorlasn.com/blog/how-to-setup-indexnow-for-instant-search-engine-indexing) (community sources)
- Bing Webmaster Tools can import sites from Google Search Console, which skips separate DNS or file verification. This is a long-standing feature. — [Global Media Insight](https://www.globalmediainsight.com/blog/bing-webmaster-tools/); [DreamHost](https://www.dreamhost.com/blog/bing-webmaster-tools/)
- Bing Places for Business was relaunched on October 3, 2025 at bing.com/forbusiness, with better Google listing import, new dashboards, bulk editing and a recommendation tool. It is free. — [Bing blog, Oct 2025](https://blogs.bing.com/search/October-2025/Introducing-the-New-Bing-Places-for-Business-Built-for-Business-Owners,-Powered-by-Research); [PPC Land](https://ppc.land/bing-places-for-business-migrates-to-bing-com-domain-with-import-tools/)
- One unconfirmed single-source report says Bing Webmaster Tools extended performance history to 24 months in August 2025. — via [PPC Land (search summary)](https://ppc.land/bing-places-for-business-migrates-to-bing-com-domain-with-import-tools/)

### Code audit: Bing (file-referenced)
- No `public/BingSiteAuth.xml` or `msvalidate.01` meta tag. GSC import makes this optional; alternatively add `verification: { other: { 'msvalidate.01': '...' } }` to `metadata` in `app/layout.tsx`.
- No IndexNow key file in `public/` and no submit route. Implementation:
  1. Add `public/<key>.txt`.
  2. Add `app/api/indexnow/route.ts`, protected by a secret, that reads `app/sitemap.ts` URLs and POSTs to `https://api.indexnow.org/indexnow`.
  3. Trigger it from a Vercel deploy hook or a post-deploy GitHub Action.
- `app/robots.ts` emits `host:`. This is a Yandex-only directive that Google ignores. It's harmless, but remove it or keep it bare.
- `app/sitemap.ts` sets `lastModified = new Date()` on every build for every URL, so lastmod is always "now". Bing and Google use lastmod only when it's consistently accurate (my knowledge of Google's sitemap guidance; not fetched this session). Use real per-page dates.

### Inferences
- Bing's emphasis on entity consistency and essential facts near the top supports adding Organization/ProfessionalService JSON-LD and a plain-text NAP block (name, address, phone, plus email) visible on the page. Today, contact is a WhatsApp link only (`components/contact-section.tsx:9-10`). The privacy and terms pages expose an email address, but the homepage doesn't show a street or city address.
- The FAQ answers in `components/faq-section.tsx` sit inside an accordion. Per the Bing advice above, which I couldn't verify, make sure the answer text is in the DOM when collapsed (Radix-style accordions may unmount closed content). Worth checking in the rendered HTML.

### Gaps
- I didn't fetch the live Bing Webmaster Guidelines page directly; findings come from SEJ and SERoundtable coverage.
- I found no reliable data on Bing's share of search in Zimbabwe specifically.

## Google Search Console setup, sitemap submission, URL inspection

### Takeaway
The repo has an HTML-file verification token (`public/google2a066ca52722e840.html`), which verifies a URL-prefix property only. A Domain property (DNS TXT) is better because it covers http/https, www and non-www, and any subdomains. Submit `/sitemap.xml`, use URL Inspection's "Test live URL" to confirm the rendered HTML contains section content and JSON-LD, and request indexing for key pages.

### Cited Findings
- `public/google2a066ca52722e840.html` contains `google-site-verification: google2a066ca52722e840.html`. This is GSC's HTML-file method, which applies to a URL-prefix property. (Code observation.)
- Domain properties use DNS verification and cover all protocols and subdomains. This is from my own knowledge of Search Console help; I didn't fetch it this session.
- Google's local-ranking guidance: ranking depends on relevance, distance and prominence, where prominence includes links and the number and rating of reviews. It recommends verifying the Business Profile, keeping hours, category and address accurate, responding to reviews, and adding photos. You can't pay for better local ranking. — [Google Business Profile Help: local ranking](https://support.google.com/business/answer/7091)
- FAQ rich-result reports were removed from Search Console in June 2026 and from the Search Console API in August 2026. — [TechWyse](https://www.techwyse.com/news/ai-search/google-faq-rich-results-deprecated-2026)

### Code audit: indexing and metadata (file-referenced)
- Canonicals are set correctly: `/` in `app/layout.tsx`, `/zimdrive` in `app/zimdrive/layout.tsx`, and every legal page has its own `alternates.canonical`. No inherited-canonical bug.
- `robots.ts` allows everything and points to the sitemap. That's fine.
- The sitemap lists seven URLs, five of them legal or utility pages. There are no service pages to list.
- `app/layout.tsx` `generator: 'v0.app'` leaks the scaffolding tool into a meta tag. It's harmless, but remove it.
- `app/layout.tsx` `keywords` array: Google ignores the meta keywords tag (older, long-standing guidance). Bing has historically treated keyword-stuffed meta keywords as a possible spam signal (older guidance; not reconfirmed in the 2026 rewrite). Trim it or drop it.
- `app/layout.tsx` icons point at `/favicon.jpg` for icon, shortcut and apple, while `public/icon.svg`, `icon-*-32x32.png` and `apple-icon.png` exist unused. Google's favicon guidance asks for a square image of at least 48x48 in a supported format (my knowledge; not fetched). Prefer `app/icon.svg` or `icon.png` and `app/apple-icon.png` conventions.
- `app/zimdrive/layout.tsx` OpenGraph image has no width or height, and there's no `twitter` block (it inherits the root's MDL title and description on X/Twitter cards; check this).
- Homepage navigation uses only `#fragment` links (`components/hero-header.tsx`, `components/site-footer.tsx`). These are fine as in-page anchors, but Google treats them as the same URL, so the site has effectively one indexable commercial URL plus /zimdrive.
- On `/zimdrive` (`app/zimdrive/page.tsx:414-432` and `:485-503`), the "Get it on Google Play" badges link to `https://moderndigitallabs.co.zw`, not to the Play Store listing. This is a broken user path and a missed entity link. If the app is published, link to its `play.google.com/store/apps/details?id=...` URL and use it in `sameAs`/`installUrl` in the schema.

### Inferences
- After the fixes, run URL Inspection, then "View crawled page", then check that the HTML contains the h1, the service text and the JSON-LD. Request indexing for `/` and `/zimdrive`. Then import into Bing Webmaster Tools.

### Gaps
- I can't tell which GSC property type is in use or whether the sitemap has been submitted; that requires account access.

## Which schema.org types are worth it now, and which rich results Google has deprecated or restricted

### Takeaway
There is no structured data anywhere in the repo (no `application/ld+json`). Worth adding now:
- **Organization**, or better a **ProfessionalService** (LocalBusiness subtype) with logo, sameAs, contact and address, plus **WebSite** with `name` for the site-name display. These go on the homepage and are cheap, durable entity signals for Google, Bing and AI answer engines.
- **SoftwareApplication/MobileApplication** for ZimDrive (app rich results need an aggregateRating or review to show).
- **BreadcrumbList** only once there are real nested pages.

FAQPage no longer produces a Google rich result (ended May 7, 2026; restricted to government and health sites since August 2023). HowTo rich results were removed in 2023. Several niche types were retired in 2025. FAQ content is still useful on the page, and the markup is harmless for other engines.

### Cited Findings
- Organization markup helps Google disambiguate the organization and can influence the logo and knowledge panel. No properties are required. Recommended: `name`, `alternateName`, `legalName`, `url`, `logo` (≥112x112, crawlable), `address`, `telephone`, `email`, `contactPoint`, `sameAs`, `description`, `foundingDate`. Place it on the homepage or an About page. A physical business should use the most specific LocalBusiness subtype. — [Google: Organization structured data](https://developers.google.com/search/docs/appearance/structured-data/organization)
- FAQ rich results: Google says "As of May 7, 2026, FAQ rich results are no longer appearing in Google Search". The Search Console report and Rich Results Test support were dropped in June 2026 and API support in August 2026. Before that, they had been restricted to well-known government and health sites since August 2023. — [TechWyse](https://www.techwyse.com/news/ai-search/google-faq-rich-results-deprecated-2026); [Search Engine Land](https://searchengineland.com/google-to-no-longer-support-faq-rich-results-476957) (fetch blocked; headline only)
- FAQPage markup doesn't need removing, and other engines may still use it. — [summary of jsonld.com and others](https://jsonld.com/google-faq-rich-results-deprecated/)
- HowTo rich results were fully deprecated in September 2023 (older). — per the search summary of [PPC Land](https://ppc.land/google-kills-faq-rich-results-what-seos-saw-coming-since-2019/). I didn't independently fetch Google's 2023 post.
- Retired in June 2025: Book Actions, Course Info, ClaimReview, Estimated Salary, Learning Video, Special Announcement, Vehicle Listing. Retired from November 2025: Practice Problems; Dataset moved to Dataset Search only. Google said this is "definitely not an end to all structured data". — [Google blog Jun 2025](https://developers.google.com/search/blog/2025/06/simplifying-search-results); [Google blog Nov 2025](https://developers.google.com/search/blog/2025/11/update-on-our-efforts)
- Next.js App Router recommendation: render a native `<script type="application/ld+json">` in `layout.js` or `page.js`, escape `<` as `<`, don't use `next/script`, and optionally type it with `schema-dts`. Validate with Rich Results Test or validator.schema.org. Docs last updated 2026-03-02. — [Next.js: JSON-LD guide](https://nextjs.org/docs/app/guides/json-ld)

### Code audit: structured data (file-referenced)
- None present. `grep` for `ld+json` or `schema.org` across `app/`, `components/` and `public/` returned nothing.
- Recommended placement:
  - `app/layout.tsx` (a Server Component, so the JSON-LD lands in the SSR HTML): `@graph` with an `Organization`/`ProfessionalService` node (`name: "Modern Digital Labs"`, `alternateName: "MDL"`, `url`, `logo`, `telephone: "+263 71 131 4881"` as in `contact-section.tsx:9`, `email`, `areaServed: "ZW"`, `address` with locality and country, `sameAs` for social and GBP URLs) and a `WebSite` node (`name`, `alternateName`, `url`).
  - `app/zimdrive/layout.tsx`: `MobileApplication` (`operatingSystem: "ANDROID"`, `applicationCategory: "EducationalApplication"`, `offers` with `price: 0`, `publisher` → the MDL `@id`, `installUrl` → the Play Store URL). Google's software-app rich result needs ratings to appear (my knowledge of the SoftwareApplication doc; not fetched this session).
  - FAQPage: optional. It gives no Google SERP benefit since May 2026, but is harmless and may help other engines. The six Q&As are in `components/faq-section.tsx:12-37`.
  - Because `app/page.tsx` and `app/zimdrive/page.tsx` are `"use client"`, put the JSON-LD in the server layouts, or in a server wrapper page once the page is refactored.

### Inferences
- For a local services firm, the highest-value entity work is off-site: a verified Google Business Profile and Bing Places listing with reviews, matched to the on-site schema NAP. Schema reinforces those listings but doesn't replace them.

### Gaps
- I didn't fetch Google's LocalBusiness or SoftwareApplication docs this session, so required fields for those rich results are from prior knowledge.
- I couldn't confirm whether Google uses FAQPage markup for anything else, such as AI Overviews, after May 2026. No reliable source found.

## Does a single-page site hurt ranking for multiple service keywords vs dedicated service pages?

### Takeaway
Yes, for a multi-service agency. Google indexes URLs, not `#sections`, so the homepage is one document trying to rank for web design, app development, domains, hosting and e-commerce at once. Bing's 2026 guidelines explicitly favor "each URL focused on one topic". Practitioner consensus, which is opinion rather than controlled studies, is a hybrid: keep the scrolling homepage for broad brand and "web development Zimbabwe" terms, and add a dedicated, substantive page per service and per case study, linked from the homepage sections.

### Cited Findings
- Google can't reliably treat `#fragment` URLs as separate content; it recommends real paths. — [Google: JavaScript SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
- Bing grounding guidance: keep each URL focused on one topic and put essential information near the top. — [Search Engine Journal](https://www.searchenginejournal.com/bing-adds-geo-to-official-guidelines-expands-ai-abuse-definitions/568442/)
- Ahrefs: you can target several keywords on one landing page, but it is "often more effective" to split targeting across dedicated pages through keyword mapping by intent. — [Ahrefs blog](https://ahrefs.com/blog/?p=159106)
- A single-page site's ability to target multiple keywords is "severely restricted"; the recommended hybrid is a scrolling homepage plus dedicated service and contact pages. — [SilverServers](https://www.silverservers.com/website-design/the-problem-with-one-page-websites-for-seo) (vendor blog)
- Moz Q&A practitioners suggest broad terms on the homepage and specific terms on per-service pages, and warn about two pages competing for the same keyword (cannibalization). — [Moz Q&A thread](https://mozprod.nodebb.com/community/q/topic/50904/listing-all-services-on-one-page-vs-separate-pages-per-service/3) (anecdotal)
- Google's people-first guidance warns against content created mainly to attract search visits, so service pages need real substance, not thin location or keyword doorways. — [Google: Creating helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)

### Code audit: content structure and internal links (file-referenced)
- Heading structure: one h1 per page, good. `components/hero-section.tsx:38-43` reads "Modern websites and digital solutions for growing businesses." It contains no service-plus-location term such as "Zimbabwe", "Harare" or "web development". The title tag carries those words, but the h1 doesn't.
- Each section has an h2 (`services`, `why-mdl`, `process`, `projects`, `faq`, `contact`) with h3 children, which is a sound outline.
- Services exist only as h3 cards inside `components/services-section.tsx:97`. There are no standalone URLs for web design, app development, e-commerce, domains or hosting.
- Internal links: homepage nav and footer go only to `#anchors` plus `/privacy` and `/terms` (`components/site-footer.tsx:3-14`). There's one contextual link to `/zimdrive` (`components/projects-section.tsx:286`). The footer has no link to `/zimdrive`. ZimDrive pages link back to `/` and `/#contact`.
- Projects: one case study (ZimDrive). There are no client case-study pages, which are the first-hand experience proof that E-E-A-T rewards.
- Contact is WhatsApp-only (`components/contact-section.tsx`). There's no on-page address or city, no visible email on the homepage, and no About or team page naming the founder. These are trust and "Who" signals that both Google and Bing emphasize.

### Inferences
- Suggested information architecture:
  - `/services/website-design`, `/services/web-app-development`, `/services/mobile-app-development`, `/services/ecommerce`, `/services/domains-hosting`, each with its own metadata, h1 including "Zimbabwe" or "Harare", process, pricing approach, FAQs and links to related work
  - `/work/<case-study>` pages
  - `/about` with founder, bio and photo
  - all added to `app/sitemap.ts`, with homepage service cards linking to them
- Make the new pages Server Components from the start, which avoids the client-rendering issues above.

### Gaps
- I found no controlled study quantifying the ranking difference between one-page and multi-page sites; the evidence is practitioner consensus.
- No keyword-volume data for Zimbabwean service queries was gathered here (out of scope).
