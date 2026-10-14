import PageHeader from "@/components/common/PageHeader";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        badge="Governance & Trust"
        title="Privacy & Data Protection"
        highlightText="Policy."
        description="Our commitment to zero-data-retention AI architectures, HIPAA Business Associate Agreements, and enterprise confidentiality."
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-neutral text-neutral-700 text-sm sm:text-base leading-relaxed space-y-6">
        <p className="text-xs text-neutral-400 font-mono">Last Updated: June 2026</p>

        <h2 className="text-2xl font-bold text-neutral-900">1. Architectural Data Privacy Commitment</h2>
        <p>
          At Kodexo Labs (&quot;Kodexo&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), we design and engineer production software and AI systems for mid-market and enterprise organizations. Because our client engagements regularly involve sensitive data — including Protected Health Information (PHI) under HIPAA, proprietary trade secrets, and personal data governed by GDPR — we operate under a strict <strong>Zero-Data-Retention & Zero-Telemetry Principle</strong>.
        </p>

        <h2 className="text-2xl font-bold text-neutral-900">2. AI Models & Non-Training Guarantee</h2>
        <p>
          We explicitly guarantee that client data, source code, database contents, and user prompts processed through systems we engineer are <strong>never utilized to train, fine-tune, or improve third-party foundation models</strong>. When utilizing commercial model endpoints (such as OpenAI, Anthropic, or Google Cloud Vertex AI), we configure zero-retention enterprise tier agreements.
        </p>

        <h2 className="text-2xl font-bold text-neutral-900">3. HIPAA & Business Associate Agreements (BAA)</h2>
        <p>
          For healthcare and medtech engagements, Kodexo Labs executes comprehensive Business Associate Agreements (BAAs). All software architectures deployed under healthcare contracts implement end-to-end encryption in transit (TLS 1.3) and at rest (AES-256), cryptographic audit logs, and automated PHI de-identification proxy layers.
        </p>

        <h2 className="text-2xl font-bold text-neutral-900">4. Information We Collect</h2>
        <p>
          When you interact with our website (kodexolabs.com) or book a discovery meeting, we collect standard contact information including your full name, business email address, company name, and project scope details for the sole purpose of responding to your inquiry. We do not sell or rent user contact data to any third-party brokers.
        </p>

        <h2 className="text-2xl font-bold text-neutral-900">5. GDPR Compliance & Data Subject Rights</h2>
        <p>
          If you are a resident of the European Economic Area (EEA) or the United Kingdom, you maintain full rights to access, rectify, port, or request the immediate deletion of your personal data. To exercise any of these rights, contact our Data Protection Officer directly at <a href="mailto:privacy@kodexolabs.com" className="text-[#f54545] font-bold">privacy@kodexolabs.com</a>.
        </p>
      </section>
    </div>
  );
}
