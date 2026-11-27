"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";

const features = [
  { label: "Pass mark", value: "23 / 25", side: "left", top: "16%" },
  { label: "Daily challenge", value: "Today's pick", side: "right", top: "28%" },
  { label: "Mock exams", value: "16 available", side: "left", top: "62%" },
  { label: "Road rules", value: "20 questions", side: "right", top: "74%" },
] as const;

function Hotspot({ label, value, side, top }: (typeof features)[number]) {
  const left = side === "left";
  return (
    <div
      className={`absolute hidden items-center gap-3 md:flex ${left ? "left-0 flex-row" : "right-0 flex-row-reverse text-right"}`}
      style={{ top }}
    >
      <div>
        <p className="mono-label text-[11px] text-white/70">
          <span className="text-signal-soft">[+]</span> {label}
        </p>
        <p className="display mt-1 text-lg text-white">{value}</p>
      </div>
      <span aria-hidden="true" className="h-px w-10 bg-blueprint/40 lg:w-20" />
      <span aria-hidden="true" className="hotspot-dot block size-[10px] shrink-0 rounded-full border border-blueprint/80" />
    </div>
  );
}

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.5 });
  const rotateY = useTransform(smooth, [0, 0.5, 1], reduce ? [0, 0, 0] : [-22, -4, 14]);
  const rotateX = useTransform(smooth, [0, 0.5, 1], reduce ? [0, 0, 0] : [10, 4, -4]);
  const y = useTransform(smooth, [0, 1], reduce ? [0, 0] : [60, -60]);

  return (
    <section id="projects" data-nav-theme="dark" className="relative overflow-hidden bg-stage-deep pb-28 text-white md:pb-40">
      <div aria-hidden="true" className="stage-columns pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-[90rem] gap-16 border-t border-white/10 px-6 pt-16 md:pt-24 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-4 lg:self-center">
          <h2 className="display text-balance text-4xl leading-[1.05] md:text-5xl">Built by Modern Digital Labs</h2>
          <p className="mt-6 max-w-sm leading-relaxed text-white/65">
            Real products shipped for real users. ZimDrive is our first public mobile app, with more launches coming soon.
          </p>
          <div className="mt-10 border-t border-white/10 pt-6">
            <h3 className="display text-2xl">ZimDrive</h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">
              Coming soon to Google Play. A mobile app helping Zimbabweans ace their VID driving test, with mock exams, daily challenges, and real road rules.
            </p>
            <Link href="/zimdrive" className="btn-solid mt-6">
              View ZimDrive
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div ref={ref} className="relative mx-auto h-[600px] w-full max-w-[44rem] md:h-[700px] lg:col-span-8" style={{ perspective: 1400 }}>
          {/* Registration frame */}
          <div aria-hidden="true" className="absolute inset-x-[18%] inset-y-[4%] hidden md:block">
            {["left-0 top-0 border-l border-t", "right-0 top-0 border-r border-t", "left-0 bottom-0 border-l border-b", "right-0 bottom-0 border-r border-b"].map((c) => (
              <span key={c} className={`absolute size-4 border-blueprint/50 ${c}`} />
            ))}
            <span className="mono-label absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-blueprint/70">390 × 844</span>
          </div>

          {features.map((f) => (
            <Hotspot key={f.label} {...f} />
          ))}

          <motion.div
            style={{ rotateY, rotateX, y, transformStyle: "preserve-3d" }}
            className="absolute left-1/2 top-1/2 -ml-[120px] -mt-[260px] w-[240px] md:-ml-[135px] md:-mt-[292px] md:w-[270px]"
          >
            <div
              className="relative rounded-[3rem] p-[10px] pb-[14px]"
              style={{
                background: "linear-gradient(160deg, #2a3550, #10172a 55%)",
                boxShadow: "0 0 0 1px rgb(191 219 254 / 0.25), 0 40px 80px -20px rgb(0 0 0 / 0.7), 0 10px 30px rgb(30 64 175 / 0.25)",
              }}
            >
              <div className="flex h-7 items-center justify-center" aria-hidden="true">
                <div className="h-5 w-20 rounded-full bg-[#05070d]" />
              </div>
              <div className="relative overflow-hidden rounded-[2.2rem]" style={{ aspectRatio: "9/19.5" }}>
                <Image
                  src="/zimdrive-app.png"
                  alt="ZimDrive app screenshot showing exam readiness and daily challenge features"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 240px, 270px"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature list for small screens, where the hotspots don't fit */}
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[3px] bg-white/10 md:hidden">
          {features.map((f) => (
            <div key={f.label} className="bg-stage-deep p-4">
              <dt className="mono-label text-[10px] text-white/60">{f.label}</dt>
              <dd className="display mt-1 text-base">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
