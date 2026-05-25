"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { staggerContainer, fadeUp, staggerItem } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type FormValues = z.infer<typeof schema>;

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(_data: FormValues) {
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
  }

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
            <motion.span variants={fadeUp} className="inline-block mb-3 text-xs font-sans font-semibold tracking-widest uppercase text-foreground/40">
              Contact
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-serif text-3xl font-bold text-balance text-foreground md:text-4xl xl:text-5xl">
              Get in Touch
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-6 text-foreground/60 text-base leading-relaxed max-w-md">
              Need a website, application, or hosting solution? Get in touch with Modern Digital Labs to discuss your project.
            </motion.p>

            <motion.ul variants={staggerContainer} className="mt-8 flex flex-col gap-3">
              {[
                "Get Started",
                "Request a Quote",
                "Contact Us",
              ].map((item) => (
                <motion.li key={item} variants={staggerItem} className="flex items-center gap-3 text-sm text-foreground/60">
                  <CheckCircle2 className="size-4 text-foreground/40 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-card p-12 text-center"
              >
                <CheckCircle2 className="size-10 text-foreground/50" />
                <h3 className="font-serif text-xl font-semibold text-foreground">Message Sent</h3>
                <p className="text-sm text-foreground/55 max-w-xs leading-relaxed">
                  Thanks for reaching out! We will be in touch within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="rounded-2xl border border-border bg-card p-8 flex flex-col gap-5"
              >
                {/* Name */}
                <motion.div variants={fadeUp} className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-sans font-semibold text-foreground/50 tracking-wide uppercase">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    {...register("name")}
                    className={cn(
                      "h-11 rounded-lg border bg-background px-4 text-sm text-foreground placeholder:text-foreground/30 outline-none transition-colors duration-200 focus:border-foreground/40",
                      errors.name ? "border-destructive" : "border-border"
                    )}
                  />
                  {errors.name && (
                    <p className="text-xs text-destructive">{errors.name.message}</p>
                  )}
                </motion.div>

                {/* Email */}
                <motion.div variants={fadeUp} className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-sans font-semibold text-foreground/50 tracking-wide uppercase">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    {...register("email")}
                    className={cn(
                      "h-11 rounded-lg border bg-background px-4 text-sm text-foreground placeholder:text-foreground/30 outline-none transition-colors duration-200 focus:border-foreground/40",
                      errors.email ? "border-destructive" : "border-border"
                    )}
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive">{errors.email.message}</p>
                  )}
                </motion.div>

                {/* Message */}
                <motion.div variants={fadeUp} className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-sans font-semibold text-foreground/50 tracking-wide uppercase">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your project..."
                    {...register("message")}
                    className={cn(
                      "rounded-lg border bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 outline-none resize-none transition-colors duration-200 focus:border-foreground/40",
                      errors.message ? "border-destructive" : "border-border"
                    )}
                  />
                  {errors.message && (
                    <p className="text-xs text-destructive">{errors.message.message}</p>
                  )}
                </motion.div>

                <motion.div variants={fadeUp}>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full h-11 rounded-full text-sm bg-foreground text-background hover:bg-foreground/90 font-semibold disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending..." : (
                      <>
                        Send Message <ArrowRight className="ml-2 size-4" />
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
