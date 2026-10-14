import PageHeader from "@/components/common/PageHeader";

export default function TermsConditionsPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        badge="Legal Terms"
        title="Terms & Engineering Services"
        highlightText="Conditions."
        description="Standard legal terms governing hardware manufacturing, Original Design Manufacturing (ODM), PCB reverse engineering, and quality warranties."
        breadcrumbs={[{ label: "Terms & Conditions" }]}
      />

      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-neutral text-neutral-700 text-sm sm:text-base leading-relaxed space-y-6">
        <p className="text-xs text-neutral-400 font-mono">Last Updated: June 2026</p>

        <h2 className="text-2xl font-bold text-neutral-900">1. Acceptance of Terms</h2>
        <p>
          By accessing this website or engaging Haalar Services (&quot;Haalar&quot;) for Original Design Manufacturing (ODM), Original Equipment Manufacturing (OEM), PCB reverse engineering, or RF development services, you agree to be bound by these Terms and Conditions and any accompanying technical Statement of Work (SOW) executed between the parties.
        </p>

        <h2 className="text-2xl font-bold text-neutral-900">2. Intellectual Property (100% Client Ownership)</h2>
        <p>
          Unless explicitly agreed otherwise in a signed Statement of Work, <strong>all custom hardware schematics, Gerber files, bill of materials (BOM), firmware source code, CAD/CAM models, and reverse-engineered documentation produced for the Client become the exclusive intellectual property of the Client</strong> upon receipt of payment for the corresponding milestone.
        </p>

        <h2 className="text-2xl font-bold text-neutral-900">3. Mutual Non-Disclosure & Confidentiality</h2>
        <p>
          All technical specifications, circuit diagrams, operational requirements, and physical board samples shared during discovery, prototyping, or production cycles are held under strict mutual confidentiality obligations and will not be disclosed to any third parties without prior written authorization.
        </p>

        <h2 className="text-2xl font-bold text-neutral-900">4. Manufacturing & IPC Quality Standards</h2>
        <p>
          Haalar Services warrants that all manufactured assemblies conform to agreed technical specifications, adhere to IPC-A-610 Class 3 standards for high-reliability electronics where specified, and undergo rigorous benchtop testing, harmonic verification, and visual inspection prior to dispatch.
        </p>

        <h2 className="text-2xl font-bold text-neutral-900">5. Governing Law</h2>
        <p>
          These Terms and any dispute arising from client service agreements shall be governed by and construed in accordance with the laws of Pakistan, under the jurisdiction of the competent courts of Islamabad.
        </p>
      </section>
    </div>
  );
}
