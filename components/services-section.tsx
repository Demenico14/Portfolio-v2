"use client";

import { Globe, AppWindow, Server, AtSign, Wrench } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/motion";

const services = [
  {
    number: "01",
    icon: Globe,
    title: "Website Development",
    description:
      "Responsive websites designed for businesses, brands, and startups.",
  },
  {
    number: "02",
    icon: AppWindow,
    title: "Web Applications",
    description:
      "Custom systems and applications built around your business requirements.",
  },
  {
    number: "03",
    icon: Server,
    title: "Web Hosting",
    description:
      "Reliable hosting solutions with deployment and setup support.",
  },
  {
    number: "04",
    icon: AtSign,
    title: "Domain Registration",
    description:
      "Assistance with securing and configuring domain names.",
  },
  {
    number: "05",
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Updates, improvements, and technical support after launch.",
  },
];

export default function ServicesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_2fr]" ref={ref}>

          {/* Left: sticky label col */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start"
          >
            <motion.h2 variants={fadeUp} className="font-serif text-3xl font-bold text-balance text-foreground md:text-4xl xl:text-5xl">
              Our Services
            </motion.h2>
            <motion.p variants={fadeUp} className="text-foreground/65 text-base leading-relaxed max-w-xs">
              Everything you need to establish and grow your digital presence — from development to deployment.
            </motion.p>
          </motion.div>

          {/* Right: service rows */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col divide-y divide-border"
          >
            {services.map(({ number, icon: Icon, title, description }) => (
              <motion.div
                key={title}
                variants={staggerItem}
                className="group flex items-start gap-6 py-8 first:pt-0 last:pb-0 hover:bg-transparent transition-colors duration-200"
              >
                {/* Number */}
                <span className="hidden sm:block font-mono text-xs text-foreground/60 mt-1 w-6 shrink-0 select-none">
                  {number}
                </span>

                {/* Icon */}
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-card group-hover:border-foreground/20 transition-colors duration-300">
                  <Icon className="size-4 text-foreground/65 group-hover:text-foreground/80 transition-colors duration-300" />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-serif text-base font-semibold text-foreground">{title}</h3>
                  <p className="text-sm text-foreground/65 leading-relaxed">{description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
