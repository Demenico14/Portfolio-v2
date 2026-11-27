"use client";

import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { staggerContainer, fadeUp } from "@/lib/motion";

const reasons = [
  { title: "Modern Development", description: "Built using current technologies and development practices." },
  { title: "Responsive Design", description: "Optimized for desktop, tablet, and mobile devices." },
  { title: "Reliable Support", description: "Clear communication and ongoing technical assistance." },
  { title: "Scalable Solutions", description: "Systems designed to support future growth." },
];

export default function WhyMdlSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="why-mdl" data-nav-theme="dark" className="relative bg-stage-deep py-28 text-white md:py-40">
      <div aria-hidden="true" className="stage-columns pointer-events-none absolute inset-0" />
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative mx-auto grid max-w-[90rem] gap-16 px-6 lg:grid-cols-12 lg:px-12"
      >
        <div className="lg:col-span-5">
          <motion.h2 variants={fadeUp} className="display text-balance text-4xl leading-[1.05] md:text-6xl">
            Why work with MDL?
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 max-w-sm leading-relaxed text-white/65">
            Our approach is simple: build products that are functional, modern, and easy to use.
          </motion.p>
        </div>

        <dl className="grid gap-px overflow-hidden rounded-[3px] bg-white/10 sm:grid-cols-2 lg:col-span-7">
          {reasons.map(({ title, description }) => (
            <motion.div key={title} variants={fadeUp} className="group relative bg-stage-deep p-7 md:p-9">
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-px w-full origin-left scale-x-0 bg-signal transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
              />
              <dt className="display text-xl md:text-2xl">{title}</dt>
              <dd className="mt-3 text-sm leading-relaxed text-white/60">{description}</dd>
            </motion.div>
          ))}
        </dl>
      </motion.div>
    </section>
  );
}
