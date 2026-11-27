"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, BookOpen, ClipboardList, MapPin, Zap, TrendingUp, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ZimDriveHeader } from "@/components/zimdrive-header";
import ZimDriveFooter from "@/components/zimdrive-footer";
import { ZIMDRIVE_WAITLIST_URL } from "@/lib/whatsapp";

// ─── Motion helpers ───────────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const features = [
  {
    icon: <ClipboardList className="size-5" />,
    title: "Mock Exams",
    desc: "16 full timed mock tests that match the real VID exam format — 25 questions, 8 minutes, pass mark 23/25.",
  },
  {
    icon: <MapPin className="size-5" />,
    title: "Road Signs",
    desc: "109 road signs across five classes: Danger Warning, Regulatory, Guidance, Informatory, and Temporary.",
  },
  {
    icon: <BookOpen className="size-5" />,
    title: "Study Notes",
    desc: "Structured study notes covering Zimbabwe VID Highway Code rules across categorised topics.",
  },
  {
    icon: <Zap className="size-5" />,
    title: "Daily Challenge",
    desc: "A fresh quiz every day to keep your knowledge sharp and build momentum toward your test date.",
  },
  {
    icon: <TrendingUp className="size-5" />,
    title: "Progress Tracking",
    desc: "Track how many tests you have attempted and passed so you know exactly where you stand.",
  },
  {
    icon: <RotateCcw className="size-5" />,
    title: "Quick Random Quiz",
    desc: "Jump into a random quiz at any time — great for a fast revision session on the go.",
  },
];

const benefits = [
  "Built specifically for Zimbabwe VID learner drivers",
  "Simple, distraction-free interface",
  "Practice anywhere, anytime — no internet required",
  "Learn from every mistake with instant answer feedback",
  "Prepare with confidence using real exam-style questions",
];

const previews = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-25%20at%2009.59.57-tlQjwtLbV6zDNnbv2kl3Tm6oVKbOkb.png",
    label: "Home Dashboard",
    desc: "See your Exam Readiness score, tests passed, best score, and jump into Quizzes & Tests or the Daily Challenge.",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mock%26Quiz-EYomWpzSIwVMTwDRrdVoCnOC0EPV4U.png",
    label: "Mock Exams & Quizzes",
    desc: "16 timed mock tests and categorised quizzes — all matched to the real VID exam format.",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Free%20Notes-X4u3ZLDGGuVgdJM6vcb4ktwY40WPXi.png",
    label: "Free Study Notes",
    desc: "Road Signs, Road Rules, and study tips — all the VID Highway Code content in one place.",
  },
];

const badges = [
  { label: "23 / 25", sub: "Pass Mark", top: "12%", left: "-2%", yFloat: -7, delay: 0 },
  { label: "16 tests", sub: "Mock Exams", top: "28%", right: "-2%", yFloat: 8, delay: 0.18 },
  { label: "109 Signs", sub: "Road Signs", bottom: "26%", left: "-2%", yFloat: -6, delay: 0.34 },
  { label: "Daily", sub: "Challenge", bottom: "14%", right: "-2%", yFloat: 6, delay: 0.5 },
];

// ─── Sub-components ───────────────────────────────────────────────────────────
function PhoneMockup({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div
      className={`relative rounded-[3rem] overflow-hidden ${className}`}
      style={{
        background: "#18181b",
        boxShadow: `0 0 0 1.5px #3f3f46, 0 0 0 3px #27272a, 0 32px 80px rgba(0,0,0,0.52), inset 0 0 0 1px rgba(255,255,255,0.04)`,
        padding: "10px 10px 14px",
      }}
    >
      <div className="flex justify-center items-center h-7 mb-1">
        <div className="h-5 w-20 rounded-full bg-[#09090b]" aria-hidden="true" />
      </div>
      <div className="relative overflow-hidden rounded-[2.2rem]" style={{ aspectRatio: "9/19.5" }}>
        <Image src={src} alt={alt} fill className="object-cover object-top" sizes="300px" />
      </div>
      <div className="flex justify-center mt-3" aria-hidden="true">
        <div className="w-20 h-1 rounded-full bg-black/20" />
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <motion.div
      variants={fadeUp}
      className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-3 hover:shadow-md transition-shadow duration-200"
    >
      <div
        className="flex size-10 items-center justify-center rounded-xl text-[#0D1B2A]"
        style={{ background: "#F97316" }}
      >
        {icon}
      </div>
      <h3 className="font-serif text-base font-bold text-foreground">{title}</h3>
      <p className="text-sm text-foreground/65 leading-relaxed font-sans">{desc}</p>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ZimDrivePage() {
  const prefersReduced = useReducedMotion();

  return (
    <div className="bg-background text-foreground overflow-x-hidden">

      <ZimDriveHeader />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative mx-auto max-w-7xl px-6 lg:px-12 pt-28 pb-24 md:pt-36 md:pb-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">

          {/* Left: copy */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >

            {/* Plain h1 (not animated) so it is visible in the server-rendered HTML and paints immediately for LCP */}
            <h1 className="font-serif text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight text-balance text-foreground">
              Pass your VID test with smarter practice.
            </h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-lg text-base sm:text-lg text-foreground/60 leading-relaxed font-sans text-pretty"
            >
              Practice mock exams, road signs, road rules, and study notes designed to help Zimbabwean learner drivers prepare with confidence.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="h-12 rounded-full pl-6 pr-5 text-base font-semibold text-[#0D1B2A]"
                style={{ background: "#F97316" }}
                asChild
              >
                <a href={ZIMDRIVE_WAITLIST_URL} target="_blank" rel="noopener noreferrer">
                  Join the Waitlist
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="h-12 rounded-full px-6 text-base border border-border hover:bg-muted"
                onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore Features
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: phone mockup with floating badges */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative flex justify-center items-center min-h-[520px]"
          >
            {/* Ambient glow */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              aria-hidden="true"
            >
              <div
                className="w-[300px] h-[440px] rounded-full blur-[80px]"
                style={{ background: "radial-gradient(ellipse, #F9731640 0%, #F9731610 55%, transparent 75%)" }}
              />
            </div>

            {/* Floating badges */}
            {badges.map((b, i) => (
              <motion.div
                key={i}
                className="absolute z-20"
                style={{ top: b.top, bottom: b.bottom, left: b.left, right: b.right }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + b.delay }}
              >
                <motion.div
                  animate={prefersReduced ? {} : { y: [0, b.yFloat, 0] }}
                  transition={{ duration: 3.6 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-2xl border border-black/10 bg-white/90 backdrop-blur-md shadow-xl px-3.5 py-3 w-32"
                  style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.10), 0 1.5px 0 #F9731622" }}
                >
                  <div className="mb-1.5 size-6 relative" aria-hidden="true">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/expo-logo-M8ppxWIxOKcz6thYwsG1wQ6aZhqSH2.png"
                      alt="ZimDrive logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-[11px] font-sans font-semibold uppercase tracking-widest text-zinc-500 leading-none mb-0.5">{b.sub}</p>
                  <p className="text-sm font-serif font-bold text-zinc-800 leading-tight">{b.label}</p>
                </motion.div>
              </motion.div>
            ))}

            {/* Phone */}
            <motion.div
              animate={prefersReduced ? {} : { y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <div
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[180px] h-[24px] rounded-full blur-2xl"
                style={{ background: "rgba(249,115,22,0.22)" }}
                aria-hidden="true"
              />
              <PhoneMockup
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-25%20at%2009.59.57-tlQjwtLbV6zDNnbv2kl3Tm6oVKbOkb.png"
                alt="ZimDrive app showing exam readiness dashboard"
                className="w-[230px] md:w-[260px]"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FEATURES
      ══════════════════════════════════════════ */}
      <section id="features" className="py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mb-16 text-center"
          >
            <motion.h2 variants={fadeUp} className="font-serif text-3xl md:text-4xl font-bold text-balance text-foreground">
              Built around the VID test
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 mx-auto max-w-lg text-base text-foreground/65 leading-relaxed font-sans">
              Every feature in ZimDrive is designed around one goal — helping you pass your Zimbabwe VID driving test.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          APP PREVIEW
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mb-16 text-center"
          >
            <motion.h2 variants={fadeUp} className="font-serif text-3xl md:text-4xl font-bold text-balance text-foreground">
              See it in action
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 max-w-4xl mx-auto"
          >
            {previews.map((p, i) => (
              <motion.div key={i} variants={fadeUp} className="flex flex-col items-center gap-4">
                <motion.div
                  animate={prefersReduced ? {} : { y: [0, i % 2 === 0 ? -8 : 8, 0] }}
                  transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full"
                >
                  <PhoneMockup
                    src={p.src}
                    alt={p.label}
                    className="w-full"
                  />
                </motion.div>
                <div className="text-center">
                  <p className="text-sm font-serif font-semibold text-foreground">{p.label}</p>
                  <p className="mt-1 text-xs text-foreground/65 leading-relaxed font-sans">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY ZIMDRIVE
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <motion.h2 variants={fadeUp} className="font-serif text-3xl md:text-4xl font-bold text-balance text-foreground">
                Designed for Zimbabwean learner drivers
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-5 text-base text-foreground/65 leading-relaxed font-sans max-w-lg">
                Most study apps are too generic. ZimDrive is built around the exact structure of the Zimbabwe VID test — so every question, sign, and rule you practice is directly relevant.
              </motion.p>
              <motion.ul variants={stagger} className="mt-8 flex flex-col gap-3.5">
                {benefits.map((b) => (
                  <motion.li
                    key={b}
                    variants={fadeUp}
                    className="flex items-start gap-3 text-sm font-sans text-foreground/70 leading-relaxed"
                  >
                    <CheckCircle2 className="size-4 mt-0.5 shrink-0" style={{ color: "#EA580C" }} />
                    {b}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Dark card */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="rounded-3xl p-8 md:p-10 flex flex-col gap-6"
              style={{ background: "#0D1B2A" }}
            >
              <h3 className="font-serif text-2xl font-bold text-white leading-snug">
                Start preparing for your VID test today.
              </h3>
              <p className="text-sm text-white/65 leading-relaxed font-sans">
                ZimDrive is launching soon on Google Play. Join the waitlist on WhatsApp and we&apos;ll message you the
                moment it&apos;s live.
              </p>
              {/* Google Play badge goes here once the Play listing URL exists (badge guidelines require it to link to the listing). */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="h-12 rounded-full pl-6 pr-5 text-base font-semibold text-[#0D1B2A] w-fit"
                  style={{ background: "#F97316" }}
                  asChild
                >
                  <a href={ZIMDRIVE_WAITLIST_URL} target="_blank" rel="noopener noreferrer">
                    Join the Waitlist
                    <ArrowRight className="ml-2 size-4" />
                  </a>
                </Button>
              </div>
              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 pt-2 border-t border-white/10">
                {[["16", "Mock Tests"], ["109", "Road Signs"], ["25", "Questions/Test"]].map(([n, l]) => (
                  <div key={l} className="flex flex-col gap-0.5">
                    <span className="font-serif text-xl font-bold text-white">{n}</span>
                    <span className="text-xs font-sans text-white/65 leading-tight">{l}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA FOOTER
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 border-t border-border" style={{ background: "#0D1B2A" }}>
        <div className="mx-auto max-w-2xl px-6 text-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl md:text-4xl font-bold text-white text-balance"
            >
              Start preparing for your VID test today.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-5 text-base text-white/65 leading-relaxed font-sans"
            >
              Coming soon to Google Play. Join the waitlist and be first to know when it launches.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="h-12 rounded-full pl-6 pr-5 text-base font-semibold text-[#0D1B2A]"
                style={{ background: "#F97316" }}
                asChild
              >
                <a href={ZIMDRIVE_WAITLIST_URL} target="_blank" rel="noopener noreferrer">
                  Join the Waitlist on WhatsApp
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="h-12 rounded-full px-6 text-base text-white/70 border border-white/15 hover:bg-white/10 hover:text-white"
                asChild
              >
                <Link href="/#projects">
                  Back to Work
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ZimDriveFooter />

    </div>
  );
}
