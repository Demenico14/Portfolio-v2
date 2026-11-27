"use client";

import { ArrowUpRight } from "lucide-react";
import { whatsappLink, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

const WHATSAPP_URL = whatsappLink("Hi MDL, I'd like to discuss a project. What I need:", "home-contact");

export default function ContactSection() {
  return (
    <section id="contact" data-nav-theme="light" className="bg-paper pb-28 text-ink md:pb-36">
      <div className="mx-auto max-w-[90rem] px-6 lg:px-12">
        <div className="grid gap-12 border-t border-ink/15 pt-16 md:pt-24 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="display text-balance text-[2.6rem] leading-[1.02] md:text-7xl">Get in touch</h2>
            <p className="mt-6 max-w-md leading-relaxed text-ink/70">
              Need a website, application, or hosting solution? Reach out to Modern Digital Labs on WhatsApp. We respond promptly to every enquiry.
            </p>
          </div>

          <div className="flex flex-col justify-end lg:col-span-4 lg:col-start-9">
            <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 border-b border-ink/15 pb-6 text-sm">
              <dt className="mono-label text-[11px] text-ink/60">WhatsApp</dt>
              <dd className="mono-label select-all text-right text-[12px]">{WHATSAPP_DISPLAY}</dd>
              <dt className="mono-label text-[11px] text-ink/60">Based in</dt>
              <dd className="mono-label text-right text-[12px]">Harare, Zimbabwe</dd>
              <dt className="mono-label text-[11px] text-ink/60">Status</dt>
              <dd className="mono-label flex items-center justify-end gap-2 text-right text-[12px]">
                <span className="size-1.5 rounded-full bg-[#1FA855]" aria-hidden="true" />
                Available
              </dd>
            </dl>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-solid btn-ink group mt-6 w-full justify-between">
              Chat on WhatsApp
              <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
