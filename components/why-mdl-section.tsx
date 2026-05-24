"use client";

import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { staggerContainer, fadeUp } from "@/lib/motion";

const reasons = [
  {
    index: "01",
    title: "Modern Development",
    description:
      "Built using current technologies and development practices.",
  },
  {
    index: "02",
    title: "Responsive Design",
    description:
      "Optimized for desktop, tablet, and mobile devices.",
  },
  {
    index: "03",
    title: "Reliable Support",
    description:
      "Clear communication and ongoing technical assistance.",
  },
  {
    index: "04",
    title: "Scalable Solutions",
    description:
      "Systems designed to support future growth.",
  },
];

export default function WhyMdlSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="why-mdl" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-12" ref={ref}>

        {/* Header row */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col gap-4 mb-16 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <motion.span variants={fadeUp} className="inline-block mb-3 text-xs font-sans font-semibold tracking-widest uppercase text-foreground/40">
              Why Choose MDL
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl font-bold text-balance text-foreground md:text-5xl xl:text-6xl">
              Why Work<br />With MDL?
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} className="max-w-xs text-sm text-foreground/50 leading-relaxed md:text-right">
            Our approach is simple: build products that are functional, modern, and easy to use.
          </motion.p>
        </motion.div>

        {/* Reason rows */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col"
        >
          {reasons.map(({ index, title, description }, i) => (
            <motion.div
              key={title}
              variants={fadeUp}
              custom={i}
              className="group grid grid-cols-[3rem_1fr] md:grid-cols-[6rem_1fr_auto] items-start md:items-center gap-x-6 md:gap-12 py-8 border-t border-border last:border-b hover:bg-card/40 transition-colors duration-300 px-4 -mx-4 rounded-xl"
            >
              {/* Index */}
              <span className="font-serif text-sm font-semibold text-accent tabular-nums pt-1 md:pt-0">
                {index}
              </span>

              {/* Title + description stacked on mobile, title only on md+ */}
              <div className="flex flex-col gap-1 md:gap-0">
                <h3 className="font-serif text-xl font-semibold text-foreground md:text-2xl group-hover:text-foreground transition-colors duration-300">
                  {title}
                </h3>
                <p className="block md:hidden text-sm text-foreground/50 leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Description — right-aligned, desktop only */}
              <p className="hidden md:block text-sm text-foreground/50 leading-relaxed text-right max-w-xs">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
