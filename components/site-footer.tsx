import Link from "next/link";
import { SERVICES } from "@/lib/services";

const footerLinks = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/#projects" },
  { label: "ZimDrive", href: "/zimdrive" },
  { label: "About", href: "/#why-mdl" },
  { label: "Process", href: "/#process" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export default function SiteFooter() {
  return (
    <footer data-nav-theme="light" className="bg-paper text-ink">
      <div className="mx-auto max-w-[90rem] px-6 lg:px-12">
        <nav aria-label="Footer navigation" className="border-t border-ink/15 py-8">
          <ul className="flex flex-wrap gap-x-8 gap-y-1">
            {footerLinks.map(({ label, href }, i) => (
              <li key={label}>
                <Link href={href} className="mono-label inline-flex gap-2 py-2 text-[11px] text-ink/70 transition-colors duration-150 hover:text-ink">
                  <span className="text-ink/40">[{String(i + 1).padStart(2, "0")}]</span>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services" className="border-t border-ink/15 py-8">
          <ul className="grid gap-x-8 gap-y-1 sm:grid-cols-2 lg:grid-cols-5">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="inline-block py-2 font-serif text-sm font-semibold text-ink/80 transition-colors duration-150 hover:text-signal-deep">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/" aria-label="Modern Digital Labs, back to top" className="block select-none overflow-hidden">
          <span className="display block whitespace-nowrap pb-[0.14em] text-[min(9.1vw,8.2rem)] font-semibold leading-[0.95] tracking-[-0.045em] text-ink">
            Modern Digital Labs
          </span>
        </Link>

        <div className="flex flex-col gap-4 border-t border-ink/15 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="mono-label text-[10px] text-ink/60">&copy; 2026 Modern Digital Labs. All rights reserved.</p>
          <nav aria-label="Legal navigation">
            <ul className="flex gap-6">
              {legalLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="mono-label inline-block py-2 text-[10px] text-ink/60 transition-colors hover:text-ink">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
