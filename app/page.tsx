import BuildStage from "@/components/build-stage";
import { HeroHeader } from "@/components/hero-header";
import WhyMdlSection from "@/components/why-mdl-section";
import HowWeWorkSection from "@/components/how-we-work-section";
import ProjectsSection from "@/components/projects-section";
import FaqSection from "@/components/faq-section";
import ContactSection from "@/components/contact-section";
import SiteFooter from "@/components/site-footer";

export default function Home() {
  return (
    <div className="relative w-full overflow-x-clip bg-stage-deep">
      <HeroHeader />
      <main>
        <BuildStage />
        <WhyMdlSection />
        <HowWeWorkSection />
        <ProjectsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
