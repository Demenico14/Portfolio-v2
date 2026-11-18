import Link from "next/link";

const footerLinks = [
  { label: "Services", href: "/#services" },
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
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Brand */}
          <Link href="/#home" className="flex items-center gap-2">
            <span className="font-serif font-bold text-base text-foreground">MDL</span>
            <span className="h-4 w-px bg-border" />
            <span className="font-sans text-xs text-foreground/60 tracking-widest uppercase">Modern Digital Labs</span>
          </Link>

          {/* Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-6">
              {footerLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="inline-block py-2 text-xs text-foreground/60 hover:text-foreground transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Copyright */}
          <p className="text-xs text-foreground/60">
            &copy; 2026 Modern Digital Labs. All rights reserved.
          </p>
        </div>

        {/* Legal links */}
        <nav aria-label="Legal navigation" className="mt-8 border-t border-border pt-6">
          <ul className="flex flex-wrap items-center justify-center gap-6">
            {legalLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="inline-block py-2 text-xs text-foreground/60 hover:text-foreground transition-colors duration-150"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
