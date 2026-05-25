"use client";

import { motion, useReducedMotion } from "motion/react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/motion";
import { Button } from "@/components/ui/button";

const floatingCards = [
  {
    id: "pass-mark",
    label: "Pass Mark",
    value: "23 / 25",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="size-4" aria-hidden="true">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 10.5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accent: "#F97316",
    position: "top-[8%] -left-[14%] md:-left-[18%]",
    delay: 0,
    yFloat: -6,
  },
  {
    id: "daily-challenge",
    label: "Daily Challenge",
    value: "Today's pick",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="size-4" aria-hidden="true">
        <path d="M10 2v2M10 16v2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M2 10h2M16 10h2M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    accent: "#F97316",
    position: "top-[22%] -right-[14%] md:-right-[18%]",
    delay: 0.15,
    yFloat: 8,
  },
  {
    id: "mock-exams",
    label: "Mock Exams",
    value: "16 available",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="size-4" aria-hidden="true">
        <rect x="4" y="3" width="12" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 7h6M7 10h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    accent: "#0D1B2A",
    position: "bottom-[18%] -left-[14%] md:-left-[18%]",
    delay: 0.3,
    yFloat: -8,
  },
  {
    id: "road-rules",
    label: "Road Rules",
    value: "20 questions",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="size-4" aria-hidden="true">
        <path d="M10 3v14M7 3l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="3" y="14" width="14" height="3" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    accent: "#0D1B2A",
    position: "bottom-[18%] -right-[14%] md:-right-[18%]",
    delay: 0.45,
    yFloat: 6,
  },
];

function FloatingCard({
  label,
  value,
  icon,
  accent,
  position,
  delay,
  yFloat,
  inView,
}: (typeof floatingCards)[number] & { inView: boolean }) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className={`absolute ${position} z-20 w-36 md:w-40`}
      initial={{ opacity: 0, x: position.includes("left") ? -20 : 20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: position.includes("left") ? -20 : 20 }}
      transition={{ duration: 0.55, delay: 0.6 + delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.div
        animate={prefersReduced ? {} : { y: [0, yFloat, 0] }}
        transition={{ duration: 3.5 + delay, repeat: Infinity, ease: "easeInOut" }}
        className="rounded-2xl border border-black/10 bg-white/90 backdrop-blur-md shadow-xl px-3.5 py-3"
        style={{ boxShadow: `0 8px 32px 0 rgba(0,0,0,0.10), 0 1.5px 0 0 ${accent}22` }}
      >
        <div
          className="mb-2 flex size-7 items-center justify-center rounded-xl"
          style={{ background: accent, color: "#fff" }}
        >
          {icon}
        </div>
        <p className="text-[10px] font-sans font-semibold uppercase tracking-widest text-zinc-400 leading-none mb-0.5">
          {label}
        </p>
        <p className="text-sm font-serif font-bold text-zinc-800 dark:text-zinc-100 leading-tight">
          {value}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });
  const prefersReduced = useReducedMotion();

  return (
    <section id="projects" className="py-24 md:py-32 border-t border-border overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12" ref={ref}>

        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-20 text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block mb-3 text-xs font-sans font-semibold tracking-widest uppercase text-foreground/40"
          >
            Selected Work
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-3xl font-bold text-balance text-foreground md:text-4xl xl:text-5xl"
          >
            Built by Modern Digital Labs
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 mx-auto max-w-xl text-foreground/60 text-base leading-relaxed"
          >
            Real products shipped for real users. ZimDrive is our first public mobile app — more launches coming soon.
          </motion.p>
        </motion.div>

        {/* Hero mockup */}
        <div className="relative flex justify-center items-center min-h-[600px] md:min-h-[700px]">

          {/* Ambient glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            aria-hidden="true"
          >
            <div
              className="w-[340px] h-[480px] md:w-[420px] md:h-[560px] rounded-full blur-[90px]"
              style={{ background: "radial-gradient(ellipse, #F9731640 0%, #F9731610 55%, transparent 75%)" }}
            />
          </motion.div>

          {/* Floating feature cards */}
          {floatingCards.map((card) => (
            <FloatingCard key={card.id} {...card} inView={inView} />
          ))}

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 8, rotateY: -6 }}
            animate={inView ? { opacity: 1, y: 0, rotateX: 6, rotateY: -4 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ perspective: 1200, transformStyle: "preserve-3d" }}
            className="relative z-10"
          >
            {/* Continuous float */}
            <motion.div
              animate={prefersReduced ? {} : { y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Drop shadow beneath phone */}
              <div
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[200px] h-[28px] rounded-full blur-2xl"
                style={{ background: "rgba(249,115,22,0.22)" }}
                aria-hidden="true"
              />

              {/* Phone frame */}
              <div
                className="relative w-[240px] md:w-[270px] rounded-[3.2rem] overflow-hidden"
                style={{
                  background: "#18181b",
                  boxShadow: `
                    0 0 0 1.5px #3f3f46,
                    0 0 0 3px #27272a,
                    0 30px 80px rgba(0,0,0,0.55),
                    0 8px 24px rgba(0,0,0,0.3),
                    inset 0 0 0 1px rgba(255,255,255,0.04)
                  `,
                  padding: "10px 10px 14px",
                }}
              >
                {/* Top notch bar */}
                <div className="relative z-10 flex justify-center items-center h-7 mb-1">
                  {/* Dynamic island */}
                  <div
                    className="h-5 w-20 rounded-full"
                    style={{ background: "#09090b" }}
                    aria-hidden="true"
                  />
                </div>

                {/* App screenshot */}
                <div className="relative overflow-hidden rounded-[2.2rem]" style={{ aspectRatio: "9/19.5" }}>
                  <Image
                    src="/zimdrive-app.png"
                    alt="ZimDrive app screenshot showing exam readiness and daily challenge features"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 240px, 270px"
                    priority
                  />
                </div>

                {/* Home indicator */}
                <div className="flex justify-center mt-3" aria-hidden="true">
                  <div className="w-20 h-1 rounded-full bg-black/20" />
                </div>
              </div>

              {/* Phone side button highlights (left) */}
              <div
                className="absolute left-[-3px] top-[30%] w-[3px] h-8 rounded-l-full"
                style={{ background: "linear-gradient(180deg, #3f3f46, #52525b)" }}
                aria-hidden="true"
              />
              <div
                className="absolute left-[-3px] top-[44%] w-[3px] h-12 rounded-l-full"
                style={{ background: "linear-gradient(180deg, #3f3f46, #52525b)" }}
                aria-hidden="true"
              />
              {/* Right power button */}
              <div
                className="absolute right-[-3px] top-[36%] w-[3px] h-14 rounded-r-full"
                style={{ background: "linear-gradient(180deg, #3f3f46, #52525b)" }}
                aria-hidden="true"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Project label row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
          className="mt-16 flex flex-col items-center gap-3 text-center"
        >
          <div className="flex items-center gap-2">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-sans font-semibold uppercase tracking-widest"
              style={{ background: "#F9731615", color: "#F97316" }}
            >
              <span
                className="inline-block size-1.5 rounded-full animate-pulse"
                style={{ background: "#F97316" }}
                aria-hidden="true"
              />
              Coming Soon
            </span>
          </div>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">ZimDrive</h3>
          <p className="max-w-sm text-sm text-foreground/55 leading-relaxed font-sans">
            A mobile app helping Zimbabweans ace their VID driving test — with mock exams, daily challenges, and real road rules.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-2 h-11 rounded-full pl-6 pr-4 text-sm font-semibold bg-foreground text-background hover:bg-foreground/85"
          >
            <Link href="/zimdrive">
              <span>View ZimDrive</span>
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
