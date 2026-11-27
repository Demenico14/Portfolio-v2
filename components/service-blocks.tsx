import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ServiceFaq } from "@/lib/services";
import { whatsappLink } from "@/lib/whatsapp";

/** Shared building blocks for /services pages. Server-rendered so every word is in the HTML. */

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="mono-label flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px]">
        {items.map((item, i) => (
          <li key={item.name} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true" className="opacity-40">/</span>}
            {item.href ? (
              <Link href={item.href} className="opacity-70 transition-opacity hover:opacity-100">
                {item.name}
              </Link>
            ) : (
              <span aria-current="page">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Light-to-deep stage hero, matching the home page's opening. */
export function ServiceHero({
  crumbs,
  title,
  intro,
  whatsapp,
  refCode,
}: {
  crumbs: { name: string; href?: string }[];
  title: string;
  intro: string;
  whatsapp: string;
  refCode: string;
}) {
  return (
    <section data-nav-theme="light" className="relative isolate flex min-h-[78svh] flex-col overflow-hidden">
      <div aria-hidden="true" className="stage-light absolute inset-0 -z-10" />
      <div aria-hidden="true" className="stage-columns absolute inset-0 -z-10" />
      <div className="mx-auto w-full max-w-[90rem] px-6 pt-24 text-ink lg:px-12">
        <Breadcrumbs items={crumbs} />
      </div>
      <div className="mx-auto mt-auto grid w-full max-w-[90rem] gap-8 px-6 pb-12 pt-24 sm:pb-16 lg:grid-cols-12 lg:items-end lg:px-12">
        <h1 className="display text-balance text-[2.3rem] leading-[1.04] text-white sm:text-5xl lg:col-span-8 lg:text-[4rem] xl:text-[4.5rem]">
          {title}
        </h1>
        <div className="lg:col-span-4 lg:pb-2">
          <p className="max-w-sm text-[0.95rem] leading-relaxed text-white/75">{intro}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            <a href={whatsappLink(whatsapp, refCode)} target="_blank" rel="noopener noreferrer" className="btn-solid">
              Get a quote
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
            <Link href="/#contact" className="btn-line text-white">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/** FAQ as native <details>, so answers are in the HTML and open without JavaScript. */
export function FaqList({ faqs }: { faqs: ServiceFaq[] }) {
  return (
    <ul className="border-t border-ink/15">
      {faqs.map(({ q, a }) => (
        <li key={q} className="border-b border-ink/15">
          <details className="group">
            <summary className="flex cursor-pointer list-none items-baseline gap-5 py-5 [&::-webkit-details-marker]:hidden">
              <span aria-hidden="true" className="mono-label w-7 shrink-0 text-[12px] text-signal-deep">
                <span className="group-open:hidden">[+]</span>
                <span className="hidden group-open:inline">[–]</span>
              </span>
              <h3 className="font-serif text-base font-semibold transition-colors duration-200 hover:text-signal-deep md:text-lg">{q}</h3>
            </summary>
            <p className="max-w-[60ch] pb-6 pl-12 text-[0.95rem] leading-relaxed text-ink/70">{a}</p>
          </details>
        </li>
      ))}
    </ul>
  );
}

export function ServiceRow({ href, name, summary }: { href: string; name: string; summary: string }) {
  return (
    <li className="border-b border-ink/15">
      <Link href={href} className="group grid gap-2 py-7 md:grid-cols-12 md:items-baseline md:gap-8">
        <span className="display text-2xl transition-colors duration-200 group-hover:text-signal-deep md:col-span-5 md:text-[2rem]">
          {name}
        </span>
        <span className="text-sm leading-relaxed opacity-70 md:col-span-6">{summary}</span>
        <ArrowRight
          aria-hidden="true"
          className="hidden size-5 justify-self-end opacity-50 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 group-hover:opacity-100 md:col-span-1 md:block"
        />
      </Link>
    </li>
  );
}

/** Closing call to action on the dark stage. */
export function QuoteBand({ title, body, whatsapp, refCode }: { title: string; body: string; whatsapp: string; refCode: string }) {
  return (
    <section data-nav-theme="dark" className="relative overflow-hidden bg-stage-deep text-white">
      <div aria-hidden="true" className="stage-columns pointer-events-none absolute inset-0" />
      <div aria-hidden="true" className="stage-deep-glow pointer-events-none absolute inset-0 opacity-70" />
      <div className="relative mx-auto grid max-w-[90rem] gap-10 px-6 py-24 md:py-32 lg:grid-cols-12 lg:items-end lg:px-12">
        <h2 className="display text-balance text-4xl leading-[1.05] md:text-6xl lg:col-span-7">{title}</h2>
        <div className="lg:col-span-4 lg:col-start-9">
          <p className="leading-relaxed text-white/70">{body}</p>
          <a href={whatsappLink(whatsapp, refCode)} target="_blank" rel="noopener noreferrer" className="btn-solid mt-6 w-full justify-between">
            Chat on WhatsApp
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
