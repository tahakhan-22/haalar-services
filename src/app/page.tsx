import HeroSection from "@/components/home/HeroSection";
import ClientProofMarquee from "@/components/home/ClientProofMarquee";
import ProblemMatrix from "@/components/home/ProblemMatrix";
import ServicesShowcase from "@/components/home/ServicesShowcase";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import ComplianceSection from "@/components/home/ComplianceSection";
import FoundationModelsSection from "@/components/home/FoundationModelsSection";
import FaqSection from "@/components/home/FaqSection";
import ContactCtaSection from "@/components/home/ContactCtaSection";
import { ReconstructionProvider } from "@/components/intro/ReconstructionContext";
import HaalarIntroOverlay from "@/components/intro/HaalarIntroOverlay";
import ReconstructedSection from "@/components/intro/ReconstructedSection";
import ReplayIntroButton from "@/components/intro/ReplayIntroButton";

export default function Home() {
  return (
    <ReconstructionProvider>
      {/* Cinematic Logo-to-Swarm Website Reconstruction Experience */}
      <HaalarIntroOverlay />
      <ReplayIntroButton />

      {/* Hero Unit */}
      <ReconstructedSection revealAt="BUILD_HERO">
        <HeroSection />
      </ReconstructedSection>

      {/* Client Logos & Proof Marquee */}
      <ReconstructedSection revealAt="BUILD_SERVICES">
        <ClientProofMarquee />
      </ReconstructedSection>

      {/* Problem Matrix Interactive Switcher */}
      <ReconstructedSection revealAt="BUILD_SERVICES">
        <ProblemMatrix />
      </ReconstructedSection>

      {/* Services Showcase (Focus-Slice Accordion) */}
      <ReconstructedSection revealAt="BUILD_SERVICES">
        <ServicesShowcase />
      </ReconstructedSection>

      {/* Production Case Studies (Hardware Products) */}
      <ReconstructedSection revealAt="BUILD_PRODUCTS">
        <CaseStudiesSection />
      </ReconstructedSection>

      {/* Compliance & Security Guarantees */}
      <ReconstructedSection revealAt="BUILD_ALL">
        <ComplianceSection />
      </ReconstructedSection>

      {/* Foundation Models & Tech Stack */}
      <ReconstructedSection revealAt="BUILD_ALL">
        <FoundationModelsSection />
      </ReconstructedSection>

      {/* Frequently Asked Questions */}
      <ReconstructedSection revealAt="BUILD_ALL">
        <FaqSection />
      </ReconstructedSection>

      {/* Lead Capture / Architecture Review Form */}
      <ReconstructedSection revealAt="BUILD_ALL">
        <ContactCtaSection />
      </ReconstructedSection>
    </ReconstructionProvider>
  );
}
