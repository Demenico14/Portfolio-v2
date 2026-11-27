import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HeroHeader } from "@/components/hero-header";
import SiteFooter from "@/components/site-footer";
import { FaqList, JsonLd, QuoteBand, ServiceHero, ServiceRow } from "@/components/service-blocks";
import { PROCESS, SERVICES, getService } from "@/lib/services";

const SITE_URL = "https://moderndigitallabs.co.zw";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const path = `/services/${service.slug}`;
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: `${SITE_URL}${path}`,
      title: `${service.metaTitle} | Modern Digital Labs`,
      description: service.metaDescription,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Modern Digital Labs" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.metaTitle} | Modern Digital Labs`,
      description: service.metaDescription,
      images: ["/og-image.png"],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const url = `${SITE_URL}/services/${service.slug}`;
  const related = service.related.map((r) => getService(r)).filter((s) => s !== undefined);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: service.name,
        serviceType: service.name,
        description: service.metaDescription,
        url,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: [
          { "@type": "City", name: "Harare" },
          { "@type": "Country", name: "Zimbabwe" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
          { "@type": "ListItem", position: 3, name: service.name, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };

  return (
    <div className="relative w-full overflow-x-clip bg-paper text-ink">
      <JsonLd data={jsonLd} />
      <HeroHeader />
      <main>
        <ServiceHero
          crumbs={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: service.name }]}
          title={service.h1}
          intro={service.intro}
          whatsapp={service.whatsapp}
          refCode={`service-${service.slug}-hero`}
        />

        {/* What's included */}
        <section data-nav-theme="light" className="py-24 md:py-32">
          <div className="mx-auto grid max-w-[90rem] gap-12 px-6 lg:grid-cols-12 lg:px-12">
            <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
              <h2 className="display text-balance text-4xl leading-[1.05] md:text-5xl">What&apos;s included</h2>
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink/65">{service.summary}</p>
            </div>
            <dl className="lg:col-span-7 lg:col-start-6">
              {service.includes.map(({ title, body }) => (
                <div key={title} className="grid gap-2 border-t border-ink/15 py-7 last:border-b sm:grid-cols-[2.5rem_1fr]">
                  <span aria-hidden="true" className="mono-label hidden pt-1 text-[12px] text-signal-deep sm:block">[+]</span>
                  <div>
                    <dt className="display text-xl md:text-2xl">{title}</dt>
                    <dd className="mt-2 max-w-[56ch] leading-relaxed text-ink/70">{body}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Who it's for + process */}
        <section data-nav-theme="light" className="pb-24 md:pb-32">
          <div className="mx-auto grid max-w-[90rem] gap-16 border-t border-ink/15 px-6 pt-16 md:pt-24 lg:grid-cols-12 lg:px-12">
            <div className="lg:col-span-4">
              <h2 className="display text-3xl md:text-4xl">Who it&apos;s for</h2>
              <ul className="mt-6 space-y-3">
                {service.fit.map((f) => (
                  <li key={f} className="flex gap-3 leading-relaxed text-ink/75">
                    <span aria-hidden="true" className="mt-[0.6em] h-px w-4 shrink-0 bg-signal-deep" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <h2 className="display text-3xl md:text-4xl">How we work</h2>
              <ol className="mt-8 grid gap-8 sm:grid-cols-2">
                {PROCESS.map((step, i) => (
                  <li key={step.title} className="border-t border-ink/15 pt-5">
                    <p className="mono-label text-[11px] text-signal-deep">[{String(i + 1).padStart(2, "0")}]</p>
                    <h3 className="display mt-2 text-xl">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/65">{step.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section data-nav-theme="light" className="pb-24 md:pb-32">
          <div className="mx-auto grid max-w-[90rem] gap-12 border-t border-ink/15 px-6 pt-16 md:pt-24 lg:grid-cols-12 lg:px-12">
            <h2 className="display text-balance text-4xl leading-[1.05] md:text-5xl lg:col-span-4">Questions about {service.name.toLowerCase()}</h2>
            <div className="lg:col-span-7 lg:col-start-6">
              <FaqList faqs={service.faqs} />
            </div>
          </div>
        </section>

        {/* Related services */}
        <section data-nav-theme="light" className="pb-24 md:pb-32">
          <div className="mx-auto max-w-[90rem] border-t border-ink/15 px-6 pt-16 md:pt-24 lg:px-12">
            <h2 className="display text-3xl md:text-4xl">Related services</h2>
            <ul className="mt-6 border-t border-ink/15">
              {related.map((r) => (
                <ServiceRow key={r.slug} href={`/services/${r.slug}`} name={r.name} summary={r.summary} />
              ))}
            </ul>
          </div>
        </section>

        <QuoteBand
          title={`Ready to talk about your ${service.name.toLowerCase()}?`}
          body="Send us a message on WhatsApp. We respond promptly to every enquiry and quote based on your requirements."
          whatsapp={service.whatsapp}
          refCode={`service-${service.slug}-cta`}
        />
      </main>
      <div className="pt-16">
        <SiteFooter />
      </div>
    </div>
  );
}
