import HeroSection from "@/components/home/HeroSection";
import ClientProofMarquee from "@/components/home/ClientProofMarquee";
import ProblemMatrix from "@/components/home/ProblemMatrix";
import ServicesShowcase from "@/components/home/ServicesShowcase";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import ComplianceSection from "@/components/home/ComplianceSection";
import FoundationModelsSection from "@/components/home/FoundationModelsSection";
import FaqSection from "@/components/home/FaqSection";
import ContactCtaSection from "@/components/home/ContactCtaSection";

export default function Home() {
  return (
    <>
      {/* Hero Unit */}
      <HeroSection />

      {/* Client Logos & Proof Marquee */}
      <ClientProofMarquee />

      {/* Problem Matrix Interactive Switcher */}
      <ProblemMatrix />

      {/* Services Showcase (Software vs AI) */}
      <ServicesShowcase />

      {/* Production Case Studies */}
      <CaseStudiesSection />

      {/* Compliance & Security Guarantees */}
      <ComplianceSection />

      {/* Foundation Models & Tech Stack */}
      <FoundationModelsSection />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Lead Capture / Architecture Review Form */}
      <ContactCtaSection />
    </>
  );
}
