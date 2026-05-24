"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function HeroSection() {
  return (
    <main className="overflow-x-hidden">
      <section id="home">
        <div className="py-28 md:pb-36 lg:pb-44 lg:pt-72">
          <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left"
            >
              <motion.span
                variants={fadeUp}
                className="inline-block mb-4 text-xs font-sans font-semibold tracking-widest uppercase text-white/60 border border-white/20 rounded-full px-4 py-1.5"
              >
                Modern Digital Labs
              </motion.span>

              <motion.h1
                variants={fadeUp}
                className="font-serif mt-4 max-w-3xl text-balance text-5xl text-white md:text-6xl lg:mt-6 xl:text-7xl font-bold leading-tight"
              >
                Modern websites and digital solutions for growing businesses.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-xl text-balance text-lg text-white/70 leading-relaxed"
              >
                Modern Digital Labs builds functional, modern, and easy-to-use digital products — from professional websites to custom web applications.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start"
              >
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-full pl-6 pr-4 text-base bg-white text-foreground hover:bg-white/90 font-semibold"
                >
                  <Link href="#contact">
                    <span className="text-nowrap">Start a Project</span>
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="h-12 rounded-full px-6 text-base text-white bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20"
                >
                  <Link href="#services">
                    <span className="text-nowrap">Our Services</span>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center pb-10">
          <a
            href="#services"
            aria-label="Scroll to services"
            className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors"
          >
            <ChevronDown className="size-5 animate-bounce" />
          </a>
        </div>
      </section>
    </main>
  );
}
