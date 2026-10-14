import PageHeader from "@/components/common/PageHeader";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        badge="Governance & Trust"
        title="Privacy & Non-Disclosure"
        highlightText="Policy."
        description="Our commitment to client confidentiality, defense trade secret protection, air-gapped laboratory security, and strict data sovereignty."
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-neutral text-neutral-700 text-sm sm:text-base leading-relaxed space-y-6">
        <p className="text-xs text-neutral-400 font-mono">Last Updated: June 2026</p>

        <h2 className="text-2xl font-bold text-neutral-900">1. Client Confidentiality & Sovereign Security</h2>
        <p>
          At Haalar Services (&quot;Haalar&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), we engineer and manufacture advanced hardware, RF countermeasure systems, and electronic assemblies for defense, aerospace, and strategic industrial organizations. Due to the mission-critical and proprietary nature of our work, we operate under rigorous <strong>Non-Disclosure Agreement (NDA) and Air-Gapped Laboratory Protocols</strong>.
        </p>

        <h2 className="text-2xl font-bold text-neutral-900">2. Hardware Schematics & Intellectual Property Guarantee</h2>
        <p>
          We explicitly guarantee that all client schematics, Gerber files, bill of materials (BOM), firmware source code, netlists, and physical circuit boards provided for reverse engineering or manufacturing remain the exclusive property of the client. Hardware specifications and operational parameters are never shared, leased, or disclosed to third parties.
        </p>

        <h2 className="text-2xl font-bold text-neutral-900">3. Physical & Digital Security Safeguards</h2>
        <p>
          Our engineering and assembly benches at Plot No. 261, Humak Industrial Estate, Islamabad, maintain controlled physical access, biometric verification for sensitive R&D laboratories, air-gapped test networks, and encrypted local storage for all CAD and CAM design files.
        </p>

        <h2 className="text-2xl font-bold text-neutral-900">4. Information We Collect</h2>
        <p>
          When you interact with our website (haalarservices.com) or submit a technical inquiry, we collect basic contact information including your name, official email address, organization name, and high-level project scope for the sole purpose of responding to your inquiry. We do not sell, rent, or distribute contact details to third-party brokers.
        </p>

        <h2 className="text-2xl font-bold text-neutral-900">5. Contact & Privacy Governance</h2>
        <p>
          If you have questions regarding our security protocols, non-disclosure agreements, or data management, contact our compliance office directly at <a href="mailto:info@haalarservices.com" className="text-[#f54545] font-bold">info@haalarservices.com</a> or visit our headquarters at Plot No. 261, Humak Industrial Estate, Kahuta Road, Islamabad, Pakistan.
        </p>
      </section>
    </div>
  );
}
