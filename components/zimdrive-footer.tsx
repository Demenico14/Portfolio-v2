import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "Privacy Policy", href: "/zimdrive/privacy" },
  { label: "Terms & Conditions", href: "/zimdrive/terms" },
  { label: "Delete Account", href: "/zimdrive/delete-account" },
  { label: "Modern Digital Labs", href: "/" },
];

export default function ZimDriveFooter() {
  return (
    <footer className="border-t border-white/10 py-10" style={{ background: "#0D1B2A" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Brand */}
          <Link href="/zimdrive" className="flex items-center gap-2.5">
            <div className="relative size-6 shrink-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/expo-logo-M8ppxWIxOKcz6thYwsG1wQ6aZhqSH2.png"
                alt="ZimDrive logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-serif font-bold text-base text-white">ZimDrive</span>
            <span className="h-4 w-px bg-white/20" />
            <span className="font-sans text-xs text-white/60 tracking-widest uppercase">by MDL</span>
          </Link>

          {/* Links */}
          <nav aria-label="ZimDrive footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-6">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="inline-block py-2 text-xs text-white/60 hover:text-white transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Copyright */}
          <p className="text-xs text-white/60">&copy; 2026 Modern Digital Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
