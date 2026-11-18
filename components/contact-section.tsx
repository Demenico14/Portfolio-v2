"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useInView } from "react-intersection-observer";
import { staggerContainer, fadeUp, staggerItem } from "@/lib/motion";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

import { whatsappLink, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

const WHATSAPP_URL = whatsappLink(
  "Hi MDL, I'd like to discuss a project. What I need:",
  "home-contact",
);

// Inline WhatsApp SVG — official brand mark, no external dependency
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="24" fill="#25D366" />
      <path
        d="M34.5 13.4A14.77 14.77 0 0 0 24.02 9C15.73 9 9 15.73 9 24.02c0 2.68.7 5.3 2.04 7.6L9 39l7.57-1.99a14.96 14.96 0 0 0 7.44 1.96h.01C32.29 39 39 32.27 39 23.98a14.82 14.82 0 0 0-4.5-10.58ZM24.02 36.5a12.44 12.44 0 0 1-6.34-1.73l-.45-.27-4.68 1.23 1.25-4.56-.3-.47a12.44 12.44 0 0 1-1.9-6.68c0-6.86 5.58-12.44 12.44-12.44 3.32 0 6.44 1.3 8.79 3.64a12.4 12.4 0 0 1 3.65 8.82c-.02 6.87-5.6 12.46-12.46 12.46Zm6.83-9.32c-.37-.19-2.2-1.09-2.54-1.21-.34-.12-.59-.18-.83.19-.25.37-.95 1.21-1.16 1.46-.21.25-.43.28-.8.09a10.1 10.1 0 0 1-2.97-1.83 11.15 11.15 0 0 1-2.06-2.56c-.21-.37-.02-.57.16-.75.17-.17.37-.43.56-.65.18-.21.24-.37.37-.62.12-.25.06-.46-.03-.65-.1-.19-.84-2.02-1.15-2.77-.3-.73-.61-.63-.84-.64l-.71-.01c-.25 0-.65.09-1 .46-.34.37-1.3 1.27-1.3 3.1s1.33 3.6 1.52 3.84c.18.25 2.62 4 6.35 5.61.89.38 1.58.61 2.12.78.89.28 1.7.24 2.34.15.71-.11 2.2-.9 2.51-1.77.31-.87.31-1.62.22-1.77-.09-.16-.34-.25-.71-.44Z"
        fill="white"
      />
    </svg>
  );
}

// 3-D tilt card wrapper
function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springConfig = { stiffness: 200, damping: 22, mass: 0.6 };
  const rotateX = useSpring(useTransform(rawY, [-1, 1], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(rawX, [-1, 1], [-6, 6]), springConfig);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    rawX.set(x);
    rawY.set(y);
  }

  function handleMouseLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 800 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

export default function ContactSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-12" ref={ref}>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-start">

          {/* Left: Copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl font-bold text-balance text-foreground md:text-4xl xl:text-5xl"
            >
              Get in Touch
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 text-foreground/60 text-base leading-relaxed max-w-md"
            >
              Need a website, application, or hosting solution? Reach out to
              Modern Digital Labs on WhatsApp — we respond promptly to every
              enquiry.
            </motion.p>

            <motion.ul variants={staggerContainer} className="mt-8 flex flex-col gap-3">
              {["Get Started", "Request a Quote", "Contact Us"].map((item) => (
                <motion.li
                  key={item}
                  variants={staggerItem}
                  className="flex items-center gap-3 text-sm text-foreground/60"
                >
                  <CheckCircle2 className="size-4 text-foreground/60 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right: WhatsApp CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <TiltCard>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-border bg-card p-8 transition-shadow duration-300 hover:shadow-xl hover:shadow-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Chat with Modern Digital Labs on WhatsApp"
              >
                {/* Floating WhatsApp logo */}
                <div className="mb-7 flex items-start justify-between">
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="drop-shadow-lg"
                  >
                    <WhatsAppIcon className="size-16" />
                  </motion.div>

                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-xs font-sans font-semibold tracking-wide text-foreground/65 uppercase">
                    <span className="size-1.5 rounded-full bg-[#25D366]" />
                    Available
                  </span>
                </div>

                {/* Headline */}
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  Chat on WhatsApp
                </h3>
                <p className="text-sm text-foreground/65 leading-relaxed mb-7 max-w-xs">
                  Send us a message directly — discuss your project, ask
                  questions, or request a quote. No forms, no waiting.
                </p>

                {/* Number */}
                <p className="mb-7 font-mono text-xs text-foreground/60 tracking-widest select-all">
                  {WHATSAPP_DISPLAY}
                </p>

                {/* CTA button */}
                <div
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-2.5 text-sm font-semibold text-background transition-colors duration-200 group-hover:bg-foreground/85"
                >
                  Open WhatsApp
                  <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            </TiltCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
