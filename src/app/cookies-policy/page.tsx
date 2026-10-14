import PageHeader from "@/components/common/PageHeader";

export default function CookiesPolicyPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        badge="Consent & Tracking"
        title="Cookie & Local Storage"
        highlightText="Policy."
        description="Transparent overview of how cookies and browser storage are utilized on Kodexo Labs web properties."
        breadcrumbs={[{ label: "Cookie Policy" }]}
      />

      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-neutral text-neutral-700 text-sm sm:text-base leading-relaxed space-y-6">
        <p className="text-xs text-neutral-400 font-mono">Last Updated: June 2026</p>

        <h2 className="text-2xl font-bold text-neutral-900">1. What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your computer or mobile device when you visit our website. They are widely used to make web applications function efficiently, preserve user preferences, and provide anonymous performance metrics.
        </p>

        <h2 className="text-2xl font-bold text-neutral-900">2. Categories of Cookies We Use</h2>
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
            <h3 className="font-bold text-neutral-900 text-base">Strictly Necessary Cookies</h3>
            <p className="text-xs text-neutral-600 mt-1">
              Essential for basic site navigation, routing security, and load balancing across our CloudFront content delivery network.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
            <h3 className="font-bold text-neutral-900 text-base">Performance & Analytics</h3>
            <p className="text-xs text-neutral-600 mt-1">
              Anonymous aggregation of page performance, Core Web Vitals (LCP/FID), and user navigation funnels to optimize site speed.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
            <h3 className="font-bold text-neutral-900 text-base">Functional Cookies</h3>
            <p className="text-xs text-neutral-600 mt-1">
              Preserves your preferences such as theme preferences or meeting scheduler selections across page reloads.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-neutral-900">3. Managing Your Preferences</h2>
        <p>
          You can adjust or disable cookie permissions at any time via your browser settings or by utilizing our on-site cookie consent banner. Please note that disabling essential cookies may impact certain interactive scheduling features.
        </p>
      </section>
    </div>
  );
}
