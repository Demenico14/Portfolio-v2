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
      {/*
        min-h-svh: uses the "small viewport" unit — accounts for iOS Safari's
        dynamic toolbar so the hero never gets taller than the visible area.
        flex + flex-col lets us push the scroll button to the bottom with mt-auto.
      */}
      <section
        id="home"
        className="flex min-h-svh flex-col"
      >
        {/* Hero content — grows to fill available space, centres vertically */}
        <div className="flex flex-1 items-center">
          <div className="relative mx-auto w-full max-w-7xl px-6 pt-28 pb-10 lg:px-12 lg:pt-36">
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

        {/* Scroll button — always pinned to the bottom of the viewport */}
        <div className="flex justify-center pb-10 shrink-0">
          <motion.button
            type="button"
            aria-label="Scroll to services"
            onClick={() => {
              document.getElementById("services")?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.45, ease: "easeOut" }}
            className="group flex flex-col items-center gap-2 cursor-pointer"
          >
            <span className="font-sans text-xs tracking-widest uppercase text-white/50 group-hover:text-white/80 transition-colors duration-150">
              Scroll
            </span>
            <span className="flex items-center justify-center w-10 h-10 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-150">
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
                className="flex"
              >
                <ChevronDown className="size-4 text-white/60 group-hover:text-white transition-colors duration-150" />
              </motion.span>
            </span>
          </motion.button>
        </div>
      </section>
    </main>
  );
}
