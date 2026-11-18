"use client";

import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/motion";

const steps = [
  {
    number: "01",
    title: "Planning",
    description:
      "Understanding your goals and project requirements.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Creating clean and user-friendly layouts.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Building and testing the final product.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Deployment, hosting setup, and support.",
  },
];

export default function HowWeWorkSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="process" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-12" ref={ref}>
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16 text-center"
        >
          <motion.h2 variants={fadeUp} className="font-serif text-3xl font-bold text-balance text-foreground md:text-4xl xl:text-5xl">
            How We Work
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 mx-auto max-w-xl text-foreground/60 text-base leading-relaxed">
            A transparent, collaborative process designed to deliver results from day one.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map(({ number, title, description }, idx) => (
            <motion.div key={number} variants={staggerItem} className="relative flex flex-col gap-4">
              {/* Connector line on desktop */}
              {idx < steps.length - 1 && (
                <div
                  className="absolute top-5 left-10 hidden h-px w-full bg-border lg:block"
                  aria-hidden="true"
                />
              )}
              <div className="relative z-10 flex size-10 items-center justify-center rounded-full border border-border bg-card text-xs font-mono font-semibold text-foreground/65">
                {number}
              </div>
              <h3 className="font-serif text-base font-semibold text-foreground">{title}</h3>
              <p className="text-sm text-foreground/65 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
