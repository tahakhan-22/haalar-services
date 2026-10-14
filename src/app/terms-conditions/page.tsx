import PageHeader from "@/components/common/PageHeader";

export default function TermsConditionsPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        badge="Legal Terms"
        title="Terms & Professional Services"
        highlightText="Conditions."
        description="Standard legal terms governing software development, intellectual property assignment, and professional service contracts."
        breadcrumbs={[{ label: "Terms & Conditions" }]}
      />

      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-neutral text-neutral-700 text-sm sm:text-base leading-relaxed space-y-6">
        <p className="text-xs text-neutral-400 font-mono">Last Updated: June 2026</p>

        <h2 className="text-2xl font-bold text-neutral-900">1. Acceptance of Terms</h2>
        <p>
          By accessing this website or engaging Kodexo Labs (&quot;Kodexo&quot;) for custom software engineering, AI architecture consulting, or staff augmentation services, you agree to be bound by these Terms and Conditions and any accompanying Statement of Work (SOW) executed between the parties.
        </p>

        <h2 className="text-2xl font-bold text-neutral-900">2. Intellectual Property (100% Client Ownership)</h2>
        <p>
          Unless explicitly agreed otherwise in a signed Statement of Work, <strong>all custom software, application source code, machine learning model weights, training scripts, database schemas, and documentation created for the Client become the exclusive intellectual property of the Client</strong> upon receipt of payment for the corresponding milestone.
        </p>

        <h2 className="text-2xl font-bold text-neutral-900">3. Mutual Confidentiality (NDA)</h2>
        <p>
          All technical architecture documents, proprietary dataset samples, system diagrams, and business logic shared during discovery or sprint cycles are held under strict mutual confidentiality obligations and will not be disclosed to any third parties without prior written authorization.
        </p>

        <h2 className="text-2xl font-bold text-neutral-900">4. Warranties & Code Quality Standards</h2>
        <p>
          Kodexo Labs warrants that all delivered software will perform substantially in accordance with agreed technical specifications, undergo automated regression and security scanning, and remain free of critical security vulnerabilities at the time of deployment.
        </p>

        <h2 className="text-2xl font-bold text-neutral-900">5. Governing Law</h2>
        <p>
          These Terms and any dispute arising from client service agreements shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law principles.
        </p>
      </section>
    </div>
  );
}
