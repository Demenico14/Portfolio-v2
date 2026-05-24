"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "react-intersection-observer";
import { staggerContainer, fadeUp } from "@/lib/motion";

const faqs = [
  {
    question: "How long does a website take to build?",
    answer:
      "Most websites are completed within a few days to a few weeks depending on complexity and the scope of features required.",
  },
  {
    question: "Do you provide hosting?",
    answer:
      "Yes, we provide web hosting solutions and full deployment assistance to get your site live and running reliably.",
  },
  {
    question: "Can you help with domains?",
    answer:
      "Absolutely. We assist clients with domain registration, DNS configuration, and full setup so everything works seamlessly.",
  },
  {
    question: "Do you build custom applications?",
    answer:
      "Yes, we develop custom web applications tailored to your specific business needs — from dashboards to booking systems and beyond.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Yes, every website and application we build is fully responsive and optimized for all screen sizes from day one.",
  },
  {
    question: "How is pricing determined?",
    answer:
      "Every project is unique, so pricing depends on your requirements, features, and timeline. Contact us for a custom quote tailored to your business.",
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="faq" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-3xl px-6 lg:px-12" ref={ref}>
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16 text-center"
        >
          <motion.span variants={fadeUp} className="inline-block mb-3 text-xs font-sans font-semibold tracking-widest uppercase text-foreground/40">
            FAQ
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-serif text-3xl font-bold text-balance text-foreground md:text-4xl xl:text-5xl">
            Frequently Asked Questions
          </motion.h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col divide-y divide-border border-t border-border"
        >
          {faqs.map(({ question, answer }, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div key={question} variants={fadeUp}>
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-serif font-semibold text-foreground text-base">{question}</span>
                  <ChevronDown
                    className={cn(
                      "flex-shrink-0 size-5 text-foreground/40 transition-transform duration-200",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm text-foreground/60 leading-relaxed">{answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
