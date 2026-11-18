"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { useScroll, motion } from "motion/react";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "Services", href: "/#services" },
  { name: "Work", href: "/#projects" },
  { name: "About", href: "/#why-mdl" },
  { name: "Contact", href: "/#contact" },
];

export function ZimDriveHeader() {
  const [menuState, setMenuState] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const { scrollYProgress } = useScroll();

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrolled(latest > 0.02);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const closeMenu = () => setMenuState(false);

  return (
    <header>
      <nav
        data-state={menuState ? "active" : undefined}
        className="fixed z-20 w-full pt-2 px-4"
      >
        {/*
          Always show a solid frosted background — the ZimDrive page has a light
          background so we can never go transparent (text would be invisible).
          On scroll we tighten padding and deepen the shadow slightly.
        */}
        <div
          className={cn(
            "mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12",
            "bg-white/90 backdrop-blur-2xl shadow-sm border border-black/[0.06]",
            scrolled && "shadow-md"
          )}
        >
          <motion.div
            className={cn(
              "relative flex items-center justify-between gap-6 py-3 duration-200 lg:py-4"
            )}
          >
            {/* Logo — links back to MDL home */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <div className="relative size-7 shrink-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/expo-logo-M8ppxWIxOKcz6thYwsG1wQ6aZhqSH2.png"
                  alt="ZimDrive logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-serif font-bold text-lg tracking-tight text-foreground">
                ZimDrive
              </span>
              <span className="hidden sm:block h-4 w-px bg-foreground/20" />
              <span className="hidden sm:block font-sans text-xs tracking-widest uppercase text-foreground/65">
                by MDL
              </span>
            </Link>

            {/* Desktop nav — back to MDL homepage sections */}
            <ul className="hidden lg:flex gap-8 text-sm">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="block duration-150 text-foreground/60 hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                asChild
                size="sm"
                className="rounded-full px-5 font-semibold text-sm bg-foreground text-background hover:bg-foreground/90"
              >
                <Link href="/#contact">Contact Us</Link>
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuState(!menuState)}
              aria-label={menuState ? "Close Menu" : "Open Menu"}
              className="relative z-20 -m-2 p-2 block lg:hidden"
            >
              {menuState ? (
                <X className="size-6 text-foreground" />
              ) : (
                <Menu className="size-6 text-foreground" />
              )}
            </button>
          </motion.div>

          {/* Mobile drawer */}
          {menuState && (
            <div className="lg:hidden pb-6 rounded-2xl mb-3 border px-4 pt-4 bg-white border-black/10">
              <ul className="flex flex-col divide-y divide-border">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="block py-3.5 text-base font-medium duration-150 text-foreground/70 hover:text-foreground"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <Button
                  asChild
                  size="sm"
                  className="w-full rounded-full bg-foreground text-background hover:bg-foreground/90 font-semibold text-sm"
                >
                  <Link href="/#contact" onClick={closeMenu}>
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
