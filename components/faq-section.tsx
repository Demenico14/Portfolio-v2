"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

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
      "Yes, we develop custom web applications tailored to your specific business needs, from dashboards to booking systems and beyond.",
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
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <>
      {/* Dark → light bookend, mirroring the hero's light → dark descent */}
      <div aria-hidden="true" className="relative h-[45svh]">
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, var(--stage-deep) 0%, #1A2440 28%, var(--stage-slate) 55%, var(--stage-mist) 80%, var(--paper) 100%)" }} />
        <div data-nav-theme="dark" className="absolute inset-x-0 top-0 h-1/2" />
        <div data-nav-theme="light" className="absolute inset-x-0 bottom-0 h-1/2" />
      </div>

      <section id="faq" data-nav-theme="light" className="bg-paper pb-28 pt-12 text-ink md:pb-36">
        <div className="mx-auto grid max-w-[90rem] gap-12 px-6 lg:grid-cols-12 lg:px-12">
          <h2 className="display text-balance text-4xl leading-[1.05] md:text-5xl lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
            Frequently asked questions
          </h2>

          <ul className="border-t border-ink/15 lg:col-span-7 lg:col-start-6">
            {faqs.map(({ question, answer }, idx) => {
              const isOpen = openIdx === idx;
              const panelId = `faq-panel-${idx}`;
              return (
                <li key={question} className="border-b border-ink/15">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenIdx(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="group flex w-full items-baseline gap-5 py-5 text-left"
                    >
                      <span className="mono-label w-7 shrink-0 text-[12px] text-signal-deep" aria-hidden="true">
                        [{isOpen ? "–" : "+"}]
                      </span>
                      <span className="font-serif text-base font-semibold transition-colors duration-200 group-hover:text-signal-deep md:text-lg">
                        {question}
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-[60ch] pb-6 pl-12 text-[0.95rem] leading-relaxed text-ink/70">{answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
