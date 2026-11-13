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

      {/* Hero Unit (Sub-components individually reconstructed by cursors) */}
      <ReconstructedSection revealAt="BUILD_CONTAINERS">
        <HeroSection />
      </ReconstructedSection>

      {/* Client Logos & Proof Marquee */}
      <ReconstructedSection revealAt="BUILD_CONTENT">
        <ClientProofMarquee />
      </ReconstructedSection>

      {/* Problem Matrix Interactive Switcher */}
      <ReconstructedSection revealAt="BUILD_CONTENT">
        <ProblemMatrix />
      </ReconstructedSection>

      {/* Services Showcase (Focus-Slice Accordion) */}
      <ReconstructedSection revealAt="BUILD_CONTENT">
        <ServicesShowcase />
      </ReconstructedSection>

      {/* Production Case Studies (Hardware Products) */}
      <ReconstructedSection revealAt="BUILD_CONTENT">
        <CaseStudiesSection />
      </ReconstructedSection>

      {/* Compliance & Security Guarantees */}
      <ReconstructedSection revealAt="CONVERGING">
        <ComplianceSection />
      </ReconstructedSection>

      {/* Foundation Models & Tech Stack */}
      <ReconstructedSection revealAt="CONVERGING">
        <FoundationModelsSection />
      </ReconstructedSection>

      {/* Frequently Asked Questions */}
      <ReconstructedSection revealAt="CONVERGING">
        <FaqSection />
      </ReconstructedSection>

      {/* Lead Capture / Architecture Review Form */}
      <ReconstructedSection revealAt="CONVERGING">
        <ContactCtaSection />
      </ReconstructedSection>
    </ReconstructionProvider>
  );
}
