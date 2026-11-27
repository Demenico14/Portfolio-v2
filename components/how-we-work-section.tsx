"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";

const steps = [
  { title: "Planning", description: "Understanding your goals and project requirements." },
  { title: "Design", description: "Creating clean and user-friendly layouts." },
  { title: "Development", description: "Building and testing the final product." },
  { title: "Launch", description: "Deployment, hosting setup, and support." },
];

/** The process drawn as a measuring rule: the fill advances as the section scrolls through. */
export default function HowWeWorkSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.55"] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <section id="process" data-nav-theme="dark" className="relative bg-stage-deep pb-28 text-white md:pb-40">
      <div aria-hidden="true" className="stage-columns pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-[90rem] px-6 lg:px-12">
        <div className="flex flex-col gap-4 border-t border-white/10 pt-16 md:flex-row md:items-end md:justify-between md:pt-24">
          <h2 className="display text-4xl md:text-5xl">How we work</h2>
          <p className="max-w-sm text-sm leading-relaxed text-white/60 md:text-right">
            A transparent, collaborative process designed to deliver results from day one.
          </p>
        </div>

        <div ref={ref} className="relative mt-16 md:mt-24">
          {/* Rule: minor ticks every 2.5%, major ticks at each step */}
          <div aria-hidden="true" className="relative hidden h-6 md:block">
            <div
              className="absolute inset-x-0 bottom-0 h-3"
              style={{
                backgroundImage: "linear-gradient(to right, rgb(191 219 254 / 0.28) 1px, transparent 1px)",
                backgroundSize: "2.5% 100%",
              }}
            />
            <div className="absolute inset-x-0 bottom-0 h-px bg-white/20" />
            <motion.div style={{ scaleX: fill }} className="absolute inset-x-0 bottom-0 h-px origin-left bg-signal-soft" />
          </div>

          <ol className="grid gap-10 md:grid-cols-4 md:gap-0">
            {steps.map(({ title, description }, i) => (
              <li key={title} className="relative md:pr-10">
                <span aria-hidden="true" className="absolute -top-6 left-0 hidden h-6 w-px bg-blueprint/70 md:block" />
                <p className="mono-label text-[11px] text-signal-soft md:mt-5">[{String(i + 1).padStart(2, "0")}]</p>
                <h3 className="display mt-3 text-2xl">{title}</h3>
                <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-white/60">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
