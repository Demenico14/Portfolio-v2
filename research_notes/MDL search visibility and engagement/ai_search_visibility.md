# AI Search and Answer-Engine Visibility (2025-2026) for MDL and ZimDrive

Evidence-quality legend used throughout:
- **[OFFICIAL]**: platform documentation or official blog (Google, Microsoft/Bing, OpenAI, Perplexity)
- **[PRIMARY STUDY]**: published dataset or academic study with stated method (still mostly correlational)
- **[VENDOR STUDY]**: SEO/marketing vendor research. Useful but commercially motivated; methods vary
- **[SECONDARY]**: news or blog summary of someone else's data. I could not verify it against the original
- **[SPECULATION]**: industry opinion with no data behind it

Research date: November 2026. Most sources are from 2025 to mid-2026.

## 1. What Google officially says about AI Overviews / AI Mode eligibility and optimisation

### Takeaway
Google's official position is clear and has not changed: there are no extra requirements, no special schema, and no AI-specific file needed for AI Overviews or AI Mode. A page that is indexed and eligible to show with a snippet can be used as a supporting link. Normal SEO fundamentals, unique non-commodity content and an up-to-date Business Profile are what Google recommends.

### Cited Findings
- [OFFICIAL] Eligibility: a page can be a supporting link if it is "indexed and eligible to be shown in Google Search with a snippet." There are no additional technical requirements, and meeting the requirements does not guarantee inclusion. — [Google Search Central: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [OFFICIAL] "There are no additional requirements to appear in AI Overviews or AI Mode, nor other special optimizations necessary." — [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [OFFICIAL] No new markup, machine-readable files or AI-specific files are needed: "There's also no special schema.org structured data that you need to add." Any structured data that is used must match the visible text. — [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [OFFICIAL] Listed best practices: allow crawling in robots.txt and in any CDN or hosting setup; make content findable through internal links; provide a good page experience; keep important content in text form; support text with images and video; keep structured data matched to the page; keep Merchant Center and **Business Profile** information current; verify the site in Search Console. — [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [OFFICIAL] Query fan-out: AI Overviews and AI Mode may issue "multiple related searches across subtopics and data sources." This produces a wider set of supporting links than classic results. The two features can use different models, so their links can differ. AI Overviews trigger only when Google thinks they add value, so many queries show none. — [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [OFFICIAL] Controls: nosnippet, data-nosnippet and max-snippet limit what is shown, and noindex removes the page. **Google-Extended does not control Search.** It limits use for training and for grounding in some other Google systems such as Gemini apps. Googlebot rules are the only control over crawling for Search, including AI Overviews. — [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [OFFICIAL] Measurement: AI-feature traffic is included in Search Console's Performance report under the "Web" search type and is not broken out separately. Google says clicks from pages with AI Overviews are "higher quality" and that those users spend more time on site. — [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [OFFICIAL] Google's May 21, 2025 blog post ("Top ways to ensure your content performs well in Google's AI experiences") says to "Focus on making unique, non-commodity content." This matters more because AI search brings longer, more specific follow-up questions. The post also recommends supporting text with high-quality images and video for multimodal search, and measuring conversions rather than raw clicks. — [Google Search Central Blog, May 2025](https://developers.google.com/search/blog/2025/05/succeeding-in-ai-search)

### Inferences
- For MDL and ZimDrive, the main Google lever is ordinary SEO: indexable, crawlable text pages with a clear entity and topic. Add a complete, verified Google Business Profile for MDL as a Harare business. Nothing marketed as "AI Overview optimisation" goes beyond this, according to Google.
- Query fan-out favours sites that cover sub-questions. A single-page homepage with an FAQ gives fan-out few distinct URLs to match. Dedicated pages could help: services, a pricing explainer, case studies, a "web development in Harare" page, and ZimDrive pages on VID test format, road signs and booking. This is an inference from the fan-out description, not something Google has stated.
- Blocking Google-Extended would not remove MDL from AI Overviews. It would only affect Gemini and grounding uses, so there is little reason for a small business that wants visibility to block it.

### Gaps
- Google provides no separate AI Overview or AI Mode report in Search Console, so citation share in Google AI features cannot be measured from official tools.
- The docs page shows no last-updated date.

## 2. Bing Copilot, IndexNow, ChatGPT search, Perplexity, and robots.txt for AI crawlers

### Takeaway
Copilot is grounded on the Bing index, and Bing now reports AI citations directly in Bing Webmaster Tools (AI Performance report, public preview since February 2026). That makes Bing Webmaster Tools plus IndexNow the most measurable lever outside Google. ChatGPT search inclusion is governed by **OAI-SearchBot**, which is separate from GPTBot (training). Perplexity inclusion is governed by **PerplexityBot**. A business that wants AI visibility should allow all the search/retrieval bots. Blocking the training bots (GPTBot, Google-Extended) is a separate choice that the platforms' docs say does not affect search inclusion.

### Cited Findings
- [OFFICIAL] Bing Webmaster Tools' **AI Performance report** (public preview, February 2026) shows when a site is cited in Microsoft Copilot, in AI-generated summaries in Bing, and in "select partner integrations." Metrics: Total Citations, Average Cited Pages per day, **Grounding queries** (the phrases the AI used when retrieving the content; sampled), page-level citation activity, and visibility trends. Bing notes that citations do not indicate placement or importance. — [Bing Webmaster Blog, Feb 2026](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)
- [OFFICIAL] The same post recommends: IndexNow, which notifies participating engines "whenever content is added, updated, or removed" so AI uses the current version; regular content updates; clear headings, tables and **FAQ sections**; evidence (examples, data, cited sources); consistent entity descriptions across text, images and video; and **Bing Places for Business** for local businesses. — [Bing Webmaster Blog, Feb 2026](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)
- [OFFICIAL] Bing says it processes sitemaps at least once every 24 hours and that sitemaps remain important for discoverability in AI-powered search. — [Bing Webmaster Blog, July 2025: Sitemaps in AI Powered Search](https://blogs.bing.com/webmaster/July-2025/Keeping-Content-Discoverable-with-Sitemaps-in-AI-Powered-Search)
- [SECONDARY] Bing's webmaster guidelines reportedly describe one crawling, indexing and ranking foundation that surfaces content across Bing search, Copilot and grounding API results. A NOARCHIVE directive reportedly keeps content out of Copilot responses and grounding. — [PPC Land summary](https://ppc.land/microsoft-positions-grounding-as-the-invisible-infrastructure-powering-ai/); [eseospace: confirmed vs not](https://eseospace.com/blog/bing-webmaster-tools-indexnow-ai-search/)
- [SECONDARY] Google does not participate in IndexNow, so IndexNow helps Bing and other participating engines (such as Yandex, Seznam and Naver) but not Google. — [eseospace](https://eseospace.com/blog/bing-webmaster-tools-indexnow-ai-search/)
- [OFFICIAL] OpenAI crawlers (developers.openai.com/api/docs/bots):
  - **OAI-SearchBot**: "used to surface websites in search results in ChatGPT's search features." "Sites that are opted out of OAI-SearchBot will not be shown in ChatGPT search answers," though they may still appear as navigational links. Changes take about 24 hours. — [OpenAI crawler docs](https://developers.openai.com/api/docs/bots)
  - **GPTBot**: training. "Disallowing GPTBot indicates a site's content should not be used in training generative AI foundation models." Settings are independent of OAI-SearchBot. — [OpenAI crawler docs](https://developers.openai.com/api/docs/bots)
  - **ChatGPT-User**: fetches pages for user-initiated actions; "robots.txt rules may not apply"; "not used to determine whether content may appear in Search." — [OpenAI crawler docs](https://developers.openai.com/api/docs/bots)
- [OFFICIAL] Perplexity: **PerplexityBot** is "designed to surface and link websites in search results on Perplexity" and is "not used to crawl content for AI foundation models." Perplexity recommends allowing it. **Perplexity-User** handles user-initiated fetches and "generally ignores robots.txt rules." — [Perplexity crawler docs](https://docs.perplexity.ai/guides/bots)
- [OFFICIAL] Google-Extended controls Gemini training and grounding but not Google Search or AI Overviews. — [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [SECONDARY / news] On July 1, 2025, Cloudflare began blocking AI crawlers **by default for new customers**, with one-click blocking for existing customers and a private-beta "Pay Per Crawl" scheme. OpenAI declined to participate. — [MIT Technology Review](https://www.technologyreview.com/2025/07/01/1119498/cloudflare-will-now-by-default-block-ai-bots-from-crawling-its-clients-websites/); [Search Engine Land](https://searchengineland.com/cloudflare-to-block-ai-crawlers-by-default-with-new-pay-per-crawl-initiative-457708); [The Register](https://www.theregister.com/2025/07/01/cloudflare_creates_ai_crawler_toll/)
- [OFFICIAL] Google's own guidance tells sites to allow crawling "in robots.txt and in any CDN or hosting setup," which acknowledges that CDN or bot-protection layers can silently block crawlers. — [Google: AI features](https://developers.google.com/search/docs/appearance/ai-features)
- [SECONDARY] There are reports, from vendors and SEO commentary, that ChatGPT search draws on Bing results. OpenAI's docs describe only its own OAI-SearchBot and do not document a Bing dependency. Treat "ChatGPT = Bing" as plausible but not officially confirmed in current docs. — [OpenAI crawler docs](https://developers.openai.com/api/docs/bots) (absence of claim); [Cloutly/agency commentary](https://cloutly.com/blog/does-chatgpt-recommend-your-business/)

### Inferences
- Recommended robots.txt posture for MDL and ZimDrive, which both want visibility:
  - Allow Googlebot, Bingbot, OAI-SearchBot, PerplexityBot and ChatGPT-User.
  - Optionally block GPTBot, Google-Extended, CCBot and similar training bots if content reuse is a concern. For a small agency whose goal is to be named, allowing training bots has a plausible upside: brand facts get into model memory for answers given without browsing. This is a judgement call with no direct evidence either way.
- If moderndigitallabs.co.zw sits behind Cloudflare or a host's bot protection (Vercel and similar), check the AI-crawler blocking settings. A default block would silently exclude the site from ChatGPT and Perplexity regardless of what robots.txt says.
- Bing Webmaster Tools is the only first-party dashboard that currently reports AI citations and grounding queries. Registering both properties there and enabling IndexNow (there are Next.js-compatible options, or a ping on deploy) is low cost and gives real measurement.

### Gaps
- I could not confirm from OpenAI's current docs whether ChatGPT search still licenses Bing results or how much it relies on its own index.
- Perplexity's ranking and source-selection logic is not documented beyond crawler behaviour.
- Gemini app grounding (as distinct from AI Overviews) has no separate public citation guidance.

## 3. llms.txt: status, adoption, evidence of effect

### Takeaway
llms.txt is a community proposal (llmstxt.org), not a standard adopted by any major AI search platform. Adoption is growing, but multiple log-file studies show AI crawlers almost never request it. Google said it doesn't support it, and there is no credible evidence that it affects citations. It is cheap to add and harmless, but it should not be prioritised or sold as a visibility tactic.

### Cited Findings
- [OFFICIAL] Google's AI features doc says no "machine-readable files or AI-specific files" are needed. — [Google: AI features](https://developers.google.com/search/docs/appearance/ai-features)
- [SECONDARY] Google's Gary Illyes reportedly said in July 2025 that Google doesn't support llms.txt and has no plans to. OpenAI's crawler docs don't mention it. — [PPC Land](https://ppc.land/llms-txt-adoption-stalls-as-major-ai-platforms-ignore-proposed-standard/); [Search Engine Land: does llms.txt matter](https://searchengineland.com/does-llms-txt-matter-467740)
- [VENDOR STUDY] Ahrefs found about 28% of domains in its dataset publish llms.txt, but only about 1,100 sites got any requests for the file. Most of those requests came from SEO tools, validators and profilers, not AI platforms ("97% never read"). — [SEO Sherpa summary of Ahrefs](https://seosherpa.com/97-of-llms-txt-files-are-never-read/); [PPC Land](https://ppc.land/llms-txt-adoption-rises-8-8x-but-97-of-files-get-zero-ai-requests/)
- [VENDOR STUDY] Optimizely's roundup cites one test with 84 llms.txt requests out of more than 62,100 AI bot visits, and a Limy analysis of more than 500M AI bot visits over 90 days with only 408 direct llms.txt requests. — [Optimizely: does llms.txt work](https://www.optimizely.com/field-notes/articles/does-llms-txt-work/)
- [VENDOR STUDY] Something Inc.'s 12-week log study saw OpenAI's crawler fetch llms.txt 7 times against 3,990 robots.txt fetches. Meta's crawler was the one outlier that appeared to use it. — [Something Inc.](https://somethinginc.com/blog/llms-txt-ai-crawlers-fetch-data/)
- [SECONDARY] Originality.ai data reportedly shows 8.8x growth in llms.txt adoption over 12 months to May 2026, with near-zero evidence that AI systems read the files. — [PPC Land](https://ppc.land/llms-txt-adoption-rises-8-8x-but-97-of-files-get-zero-ai-requests/)
- [SECONDARY] A Search Engine Land test reporting a 25% AI-traffic lift was confounded by a simultaneous PR campaign. — [Search Engine Land](https://searchengineland.com/does-llms-txt-matter-467740)

### Inferences
- MDL can add an llms.txt in a few minutes as a hygiene item or a portfolio demonstration. It should not claim this to clients as a ranking or citation factor.

### Gaps
- No peer-reviewed or platform-confirmed evidence of any citation effect. Studies use different methods and their counts are not comparable.

## 4. CTR impact of AI Overviews, and what still gets clicks

### Takeaway
Every major independent dataset (Pew, Ahrefs, Seer, BrightEdge) shows a large CTR drop on queries with an AI Overview, roughly 35-61% lower organic CTR for top results, while impressions rise ("the great decoupling"). Google disputes these findings and says the remaining clicks are higher quality. Being *cited* inside the AI Overview correlates with better CTR than not being cited. For a small business, the most resilient traffic is commercial, local, navigational and branded queries, plus queries where the user needs to act (hire, download, book). Informational "what is X" content is the most exposed.

### Cited Findings
- [PRIMARY STUDY] Pew Research Center (July 2025; browsing data from 900 US adults, March 2025, about 69,000 searches): users clicked a traditional result on 8% of visits when an AI summary appeared vs 15% without. Only about 1% clicked a link inside the AI summary. AI summaries appeared on 18% of searches. Wikipedia, YouTube, Reddit and government sites were the most cited sources. Google disputed the methodology. — [The Register](https://www.theregister.com/2025/07/22/google_ai_overviews_suppress_search/); [Search Engine Land](https://www.searchengineland.com/google-ai-overviews-hurting-clicks-study-459434/); [The Decoder](https://the-decoder.com/pew-finds-that-only-1-percent-of-users-click-a-source-link-directly-from-googles-ai-overviews/)
- [VENDOR STUDY] Ahrefs, April 2025: an AI Overview correlated with a 34.5% lower CTR for the #1 result (300K keywords). Ahrefs' **February 2026 update** (Dec 2025 GSC data, 150K AIO vs 150K non-AIO informational keywords) found **58% lower** CTR for position 1. Reported drops were 50.8% at position 2 and 19.4% at position 10. These are correlations. — [Ahrefs: AI Overviews reduce clicks by 58%](https://ahrefs.com/blog/ai-overviews-reduce-clicks-update/); [PPC Land](https://ppc.land/googles-ai-summaries-now-swallow-58-of-clicks-that-once-went-to-websites/)
- [VENDOR STUDY] Seer Interactive, September 2025 update (informational queries, June 2024 to September 2025): on AIO queries, organic CTR fell 61% and paid CTR fell 68% (paid 19.7% to 6.34%). CTR also fell on non-AIO queries. Brands **cited in** the AIO had 35% higher organic CTR and 91% higher paid CTR than those not cited. Seer cautions: "We cannot definitively prove that citation causes higher CTRs." — [Seer Interactive Sept 2025](https://www.seerinteractive.com/insights/aio-impact-on-google-ctr-september-2025-update)
- [SECONDARY] A later Seer update through February 2026 (53 accounts, about 5.5M queries) reportedly put organic CTR at 2.36% with an AIO vs 3.82% without, with paid CTR on AIO queries recovering somewhat. I did not verify this on Seer's own page. — [DesignRush](https://news.designrush.com/ai-overview-ctr-recovers-organic-search-loses-ground)
- [VENDOR STUDY] BrightEdge, May 2025 (one year of AIOs): impressions up more than 49%, CTR down nearly 30%. — [BrightEdge press release](https://brightedge.com/news/press-releases/one-year-google-ai-overviews-brightedge-data-reveals-google-search-usage)
- [VENDOR STUDY] Ahrefs "Great Decoupling": the correlation between clicks and impressions turned negative (-0.352) in H1 2025. One reason is that AIOs cite several URLs, each of which is credited an impression. — [Ahrefs: The Great Decoupling](https://ahrefs.com/blog/the-great-decoupling)
- [OFFICIAL] Google's counter-position: AIO clicks are "higher quality" and users spend more time on site. Google advises measuring conversions, not clicks. — [Google Search Central Blog, May 2025](https://developers.google.com/search/blog/2025/05/succeeding-in-ai-search)
- [VENDOR STUDY, mixed] Conversion quality of AI-referred visitors: Semrush reportedly found AI visitors convert 4.4x better than organic (July 2025). Seer reported Perplexity converting at 15.9% vs 9.77% for organic. Amsive (September 2025) found LLM traffic does **not** convert significantly better. A Search Engine Land analysis of 94 e-commerce sites found ChatGPT traffic converting 31% better than non-branded organic, on small volume. AI referrals reportedly made up about 0.59% of Google referral volume in June 2025. — [Semrush AI search study](https://www.semrush.com/blog/ai-search-seo-traffic-study/); [Seer: ChatGPT traffic converts](https://www.seerinteractive.com/insights/case-study-6-learnings-about-how-traffic-from-chatgpt-converts); [Amsive](https://amsive.com/insights/seo/does-llm-traffic-convert-better-than-organic-a-new-data-backed-study/); [Search Engine Land](https://searchengineland.com/chatgpt-vs-non-branded-organic-search-conversions-470321)

### Inferences
- All the major CTR studies are US-centric and focus on informational queries. No Zimbabwe- or Africa-specific data turned up. Low-volume, local-intent queries like "web developer Harare" may trigger AIOs less often and fall more on the Local Pack and Business Profile.
- For ZimDrive, a query like "how many questions in the VID test" is informational and likely to be answered in-SERP. The click-worthy angle is the action: practice, take a mock test, download the app. Pages should offer something an AI summary can't: interactive practice and a free sample quiz. This is inference, consistent with Google's "unique, non-commodity content" advice.
- Rising impressions alongside flat or falling clicks in Search Console should not alarm MDL. Track conversions instead (contact form, WhatsApp clicks, app installs).

### Gaps
- No studies segment CTR impact for small local service businesses or emerging markets.
- No independent data on AI Mode CTR specifically (as distinct from AI Overviews).
- Pew's primary report was summarised via secondary coverage. Figures are consistent across outlets.

## 5. GEO / answer-engine optimisation tactics: supported vs hype

### Takeaway
The best-supported findings are these. Off-site brand mentions correlate strongly with AI visibility, much more than backlinks (Ahrefs, 75K brands). For local recommendations, reviews, Business Profile completeness and presence in listing and review sites correlate with being recommended. Adding statistics, quotations and citations to content improved visibility in one academic benchmark (GEO paper, KDD 2024). Structured data is officially *not required*, and a controlled Ahrefs study found no citation lift from adding it. llms.txt is unsupported. Most "GEO playbooks" restate SEO basics. Claims of guaranteed AI rankings are hype.

### Cited Findings
- [PRIMARY STUDY, academic] Aggarwal et al., "GEO: Generative Engine Optimization" (arXiv 2311.09735, KDD 2024). Using the GEO-bench benchmark, adding citations, quotations and statistics boosted source visibility by up to about 40%, with up to 37% on live Perplexity. Keyword stuffing did not help. Effectiveness depended on the query's domain. Caveat: the tests used 2023-24 engines, and the per-method numbers vary across secondary summaries. — [arXiv: GEO paper](https://arxiv.org/abs/2311.09735)
- [VENDOR STUDY] Ahrefs, 75K brands, May 2025. Correlations with AI Overview brand visibility: web (brand) mentions 0.664, branded anchors 0.527, branded search volume 0.392, backlinks only 0.218. Paid ad spend was weak (about 0.215). Results were winner-takes-all: the top quartile by mentions averaged 169 AIO mentions vs 14 for the next quartile, and the bottom half was near zero. Correlation only. — [Ahrefs: AI Overview brand correlation](https://ahrefs.com/blog/ai-overview-brand-correlation/)
- [SECONDARY] A December 2025 Ahrefs follow-up reportedly added ChatGPT and AI Mode, with YouTube mentions correlating at about 0.737. I only found this on a secondary Medium post. — [Medium summary](https://medium.com/@lorenzoswanson786/ahrefs-studied-75-000-brands-brand-mentions-beat-backlinks-3-to-1-for-ai-visibility-e86ef9f6baba)
- [OFFICIAL] Structured data is not required for AI features, and no special schema exists. — [Google: AI features](https://developers.google.com/search/docs/appearance/ai-features)
- [VENDOR STUDY via SECONDARY] Ahrefs, May 2026: 1,885 pages that added JSON-LD vs about 4,000 matched controls showed no significant citation change (AI Mode +2.4%, ChatGPT +2.2%, AIO -4.6%). Caveat: all of these pages were already heavily cited, so the result says nothing about schema's role in initial discovery. Conflicting data: AirOps reportedly found a +6.5pp advantage for JSON-LD pages in ChatGPT, and SE Ranking found that 65-71% of cited pages carry schema (correlation). — [TechWyse summary](https://www.techwyse.com/news/ai-search/schema-markup-ai-citations-ahrefs-study); [CMSWire](https://www.cmswire.com/digital-marketing/does-structured-data-actually-improve-answer-engine-citations/); [Analyzify roundup](https://analyzify.com/hub/schema-markup-ai-citations-research)
- [OFFICIAL] Bing recommends clear headings, tables, **FAQ sections**, evidence and data, entity consistency across formats, freshness and IndexNow. This is the most explicit official endorsement of FAQ-style structure. — [Bing Webmaster Blog, Feb 2026](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)
- [VENDOR STUDY] Local recommendations:
  - In a 10,000-business study, businesses recommended by ChatGPT and Perplexity averaged 133 Google reviews vs 11 for ignored ones. — [eClincher](https://www.eclincher.com/articles/reviews-ai-visibility)
  - Businesses in Google's Local Pack were recommended 3.5x more often, and GBP completeness was significant. — [Insites](https://insites.com/blog/what-ai-uses-to-choose-local-businesses-and-what-it-ignores/)
  - LLMs use Yelp and other listings to pull business info and summarise reviews. — [BrightLocal: AI search using listings sources](https://brightlocal.com/blog/ai-search-using-listings-sources)
  - Conflicting claims on ChatGPT's local data source: some say Foursquare-first, others say Google/Bing and GBP. Whitespark reported not seeing GBP results in ChatGPT. — [Zarla](https://www.zarla.com/guides/does-chatgpt-recommend-local-businesses); [Whitespark](https://whitespark.ca/?p=8204)
- [VENDOR STUDY] Pew found Wikipedia, YouTube, Reddit and government sites were the most frequent AIO sources, which points to third-party and community platforms as citation pools. — [The Register on Pew](https://www.theregister.com/2025/07/22/google_ai_overviews_suppress_search/)

Hype vs supported summary:

| Tactic | Evidence status |
|---|---|
| Normal SEO (crawlable, indexed, snippet-eligible, unique content) | **Officially required/recommended** (Google, Bing) |
| Allow search/retrieval bots (OAI-SearchBot, PerplexityBot, Bingbot, Googlebot) | **Officially required** for inclusion |
| Brand mentions on third-party sites / PR / YouTube | **Strong correlation** (Ahrefs), not causal |
| Reviews, GBP/Bing Places completeness, listings | **Official recommendation** (Google, Bing) + **vendor correlation** |
| FAQ / clear headings / tables | **Official Bing recommendation**; plausible for passage retrieval |
| Statistics, quotations, citations in content | **One academic benchmark** (GEO paper), older engines |
| Entity consistency (same name/NAP/description everywhere) | **Official Bing recommendation**; widely asserted, little direct data |
| Freshness / IndexNow | **Official Bing recommendation** (Bing ecosystem only) |
| Structured data / schema for AI | **Not required** (Google); controlled study shows **no lift** for already-cited pages; contested |
| llms.txt | **Unsupported**; crawlers largely ignore it |
| "Guaranteed AI ranking" services, prompt-injection-style content, keyword stuffing | **Hype / no evidence** (stuffing didn't help in GEO paper) |

### Inferences
- The off-site signal (mentions, reviews, listings) probably matters more for small businesses than any on-page "GEO" trick. LLMs answering "best X in [city]" tend to synthesise from listicles, directories and review sites.
- Schema (Organization, LocalBusiness, SoftwareApplication/MobileApplication, FAQPage) is still worth having for rich results, entity clarity and Bing. It should not be expected to move AI citations by itself.

### Gaps
- No causal, controlled studies on brand mentions or reviews driving AI recommendations.
- AI answers vary between runs, so most "share of voice" measurement is noisy.
- No study covers African or Zimbabwean markets, where third-party coverage is thin and models may have very little data, which could make single sources more decisive.

## 6. Practical steps for MDL ("best web developer in Harare") and ZimDrive ("app to practice Zimbabwe VID test")

### Takeaway
To be named in AI answers, a small local agency or niche app should: (a) make sure every AI search crawler can reach and index it; (b) have clear, crawlable pages that state who/what/where in plain text; (c) build third-party corroboration (Business Profile, Bing Places, directories, reviews, listicles, press, app-store listing, YouTube, Reddit and Facebook mentions); and (d) measure with Bing Webmaster Tools' AI Performance report plus manual prompt checks. These steps rest on the official guidance and correlational evidence above. None of them is guaranteed.

### Cited Findings (basis for the steps)
- Indexed, snippet-eligible pages plus a current Business Profile are Google's stated basis for AI features. — [Google: AI features](https://developers.google.com/search/docs/appearance/ai-features)
- OAI-SearchBot and PerplexityBot must be allowed for inclusion in ChatGPT and Perplexity search. — [OpenAI](https://developers.openai.com/api/docs/bots); [Perplexity](https://docs.perplexity.ai/guides/bots)
- Bing Places, IndexNow, FAQ sections and entity consistency are recommended for Copilot citations, and citations can be measured in BWT. — [Bing Webmaster Blog](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)
- Brand mentions are the strongest correlate of AIO visibility. — [Ahrefs](https://ahrefs.com/blog/ai-overview-brand-correlation/)
- Review volume and Local Pack presence correlate with local AI recommendations. — [eClincher](https://www.eclincher.com/articles/reviews-ai-visibility); [Insites](https://insites.com/blog/what-ai-uses-to-choose-local-businesses-and-what-it-ignores/)
- Unique, non-commodity content and multimodal assets (images, video) are recommended. — [Google blog, May 2025](https://developers.google.com/search/blog/2025/05/succeeding-in-ai-search)

### Inferences (recommended actions, my synthesis)
**Technical (both):**
1. Audit robots.txt and the CDN or host bot settings. Allow Googlebot, Bingbot, OAI-SearchBot, ChatGPT-User, PerplexityBot and Perplexity-User. Decide separately on GPTBot and Google-Extended (allowing them is reasonable for brand recall).
2. Confirm Next.js renders the key text server-side (SSR/SSG). FAQ answers should not sit only in client-side JavaScript or collapsed widgets that might not render. Google says to keep important content in text.
3. Verify both properties in Google Search Console and Bing Webmaster Tools. Submit sitemaps and enable IndexNow. Watch BWT's AI Performance "grounding queries" for what Copilot retrieves.
4. Keep Organization/LocalBusiness and SoftwareApplication (MobileApplication) JSON-LD that matches visible text. Treat it as hygiene, not a lever.
5. An llms.txt is optional. Add it only as a low-effort extra.

**MDL (local agency):**
6. Create, verify and fully complete a Google Business Profile (category "Website designer" / "Software company", Harare address or service area, hours, photos, services). Do the same for Bing Places. Also list MDL on the sources ChatGPT may use for local data (Apple Business Connect, Foursquare, Yelp if available in ZW) and on Zimbabwe directories (for example, local business directories and Clutch, GoodFirms or DesignRush profiles).
7. Ask satisfied clients for Google reviews that mention the service and city, for example "built our e-commerce site in Harare."
8. Move beyond the single page. Add crawlable pages for each service, case studies with named clients, outcomes and numbers (the statistics and quotations tactic), pricing guidance in USD/ZiG, and an "About / team / location" page. Each one should be a distinct URL that query fan-out can match.
9. Use the same name, description, address, phone and WhatsApp number everywhere (entity consistency).
10. Earn mentions: get into "top web developers in Zimbabwe" listicles, local tech press (TechZim and similar), LinkedIn articles, YouTube walkthroughs of builds, and Reddit/Facebook community answers.

**ZimDrive (niche app):**
11. Build a strong landing page at /zimdrive and consider sub-pages: VID provisional/learner test format, road-sign guide, sample questions (a free interactive mini-quiz is non-commodity content), FAQ (cost, offline use, languages), and a link to the app store.
12. App-store listings (Google Play, App Store) with a description that literally says "Zimbabwe VID learner's licence test practice," plus reviews. These listings are third-party pages that AI engines can cite.
13. Seed mentions where people ask: Zimbabwean Facebook groups, Reddit (r/Zimbabwe), YouTube demos, driving-school partnerships, and local news or tech blogs. An app that nobody else mentions is unlikely to be recommended.

**Measurement:**
14. Monthly manual checks of fixed prompts in ChatGPT (search on), Perplexity, Copilot, Gemini and Google AI Mode ("best web developer in Harare," "app to practice Zimbabwe VID test"). Log whether MDL or ZimDrive is named and which sources are cited, then target those cited sources for listings and mentions. Expect run-to-run variance.
15. Track conversions (form submissions, WhatsApp clicks, installs) in GA4. Segment referrals from chatgpt.com, perplexity.ai, copilot.microsoft.com and gemini.google.com.

### Gaps
- There is no evidence on how AI engines source Zimbabwe-specific local data, such as whether Foursquare, Yelp or GBP coverage in Zimbabwe is meaningful.
- There are no published benchmarks for how long new local listings or reviews take to show up in AI recommendations.
- Whether a VID-test app competitor is already cited could not be checked as part of this research.
