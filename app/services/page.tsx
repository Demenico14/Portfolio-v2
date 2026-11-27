import type { Metadata } from "next";
import { HeroHeader } from "@/components/hero-header";
import SiteFooter from "@/components/site-footer";
import { JsonLd, QuoteBand, ServiceHero, ServiceRow } from "@/components/service-blocks";
import { SERVICES } from "@/lib/services";

const SITE_URL = "https://moderndigitallabs.co.zw";

export const metadata: Metadata = {
  title: "Web Development Services in Zimbabwe",
  description:
    "Website development, web applications, hosting, domain registration and maintenance for businesses in Harare and across Zimbabwe.",
  alternates: { canonical: "/services" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/services`,
    title: "Web Development Services in Zimbabwe | Modern Digital Labs",
    description:
      "Website development, web applications, hosting, domain registration and maintenance for businesses in Harare and across Zimbabwe.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Modern Digital Labs" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ItemList",
      name: "Modern Digital Labs services",
      itemListElement: SERVICES.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.name,
        url: `${SITE_URL}/services/${s.slug}`,
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
      ],
    },
  ],
};

export default function ServicesIndexPage() {
  return (
    <div className="relative w-full overflow-x-clip bg-paper text-ink">
      <JsonLd data={jsonLd} />
      <HeroHeader />
      <main>
        <ServiceHero
          crumbs={[{ name: "Home", href: "/" }, { name: "Services" }]}
          title="Web development services in Zimbabwe"
          intro="Everything you need to establish and grow your digital presence, from development to deployment."
          whatsapp="Hi MDL, I'd like to discuss a project. What I need:"
          refCode="services-hero"
        />

        <section data-nav-theme="light" className="py-24 md:py-32">
          <div className="mx-auto max-w-[90rem] px-6 lg:px-12">
            <h2 className="display text-4xl md:text-5xl">Our services</h2>
            <ul className="mt-10 border-t border-ink/15">
              {SERVICES.map((s) => (
                <ServiceRow key={s.slug} href={`/services/${s.slug}`} name={s.name} summary={s.summary} />
              ))}
            </ul>
          </div>
        </section>

        <QuoteBand
          title="Not sure which service you need?"
          body="Tell us what you're trying to do and we'll recommend the right setup. We respond promptly on WhatsApp."
          whatsapp="Hi MDL, I'm not sure which service I need. What I'm trying to do:"
          refCode="services-cta"
        />
      </main>
      <div className="pt-16">
        <SiteFooter />
      </div>
    </div>
  );
}
