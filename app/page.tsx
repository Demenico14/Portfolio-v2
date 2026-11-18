"use client";

import dynamic from "next/dynamic";

// three.js is large; load the WebGL background after the page content so it never blocks first paint.
// The black placeholder matches the shader's background so the white hero text is readable before WebGL loads.
// (It must not sit *under* the canvas: the canvas uses mix-blend-mode: multiply, and multiplying over black hides the lines.)
const FloatingLines = dynamic(() => import("@/components/floating-lines"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-black" />,
});
import HeroSection from "@/components/hero-section";
import { HeroHeader } from "@/components/hero-header";
import ServicesSection from "@/components/services-section";
import WhyMdlSection from "@/components/why-mdl-section";
import HowWeWorkSection from "@/components/how-we-work-section";
import ProjectsSection from "@/components/projects-section";
import FaqSection from "@/components/faq-section";
import ContactSection from "@/components/contact-section";
import SiteFooter from "@/components/site-footer";
import { useState } from "react";

export default function Home() {
  const [colorPreset, setColorPreset] = useState<string[]>(["#EEF4FF", "#BFDBFE", "#3B82F6", "#1E40AF"]);

  return (
    <div className="relative w-full overflow-x-hidden bg-background text-foreground">
      {/* Animated Background — covers only the hero viewport */}
      <div className="absolute inset-x-0 top-0 h-svh z-0 pointer-events-none">
        <FloatingLines
          linesGradient={colorPreset}
          enabledWaves={["bottom", "middle", "top"]}
          lineCount={[4, 6, 3]}
          lineDistance={[8, 5, 10]}
          animationSpeed={0.8}
          interactive={true}
          bendRadius={5.0}
          bendStrength={-0.5}
          mouseDamping={0.05}
          parallax={true}
          parallaxStrength={0.15}
          mixBlendMode="multiply"
        />
      </div>

      <HeroHeader onColorPresetChange={setColorPreset} />

      {/* Hero Content */}
      <div className="relative z-10">
        <HeroSection />
      </div>

      {/* Page Sections */}
      <div className="relative z-10 page-grid-bg">
        <ServicesSection />
        <WhyMdlSection />
        <HowWeWorkSection />
        <ProjectsSection />
        <FaqSection />
        <ContactSection />
        <SiteFooter />
      </div>
    </div>
  );
}
