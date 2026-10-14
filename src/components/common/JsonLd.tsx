export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://kodexolabs.com/#website",
        "url": "https://kodexolabs.com/",
        "name": "Kodexo Labs",
        "description":
          "Kodexo Labs builds web apps, mobile apps, and intelligent AI systems for mid-market companies. Top-rated on Clutch, founded 2021, headquartered in Austin TX.",
        "publisher": {
          "@id": "https://kodexolabs.com/#organization",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://kodexolabs.com/#organization",
        "name": "Kodexo Labs",
        "url": "https://kodexolabs.com/",
        "logo": "https://kodexolabs.com/img/logo-light.webp",
        "sameAs": ["https://clutch.co/profile/kodexo-labs", "https://twitter.com/kodexolabs"],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Austin",
          "addressRegion": "TX",
          "addressCountry": "US",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://kodexolabs.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What company is leading AI development?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Kodexo Labs ranks among the top AI development companies, top-rated on Clutch and recognized as a Clutch Elite AI Firm with 51 AI-powered products shipped.",
            },
          },
          {
            "@type": "Question",
            "name": "Can you host AI models on private cloud infrastructure for HIPAA compliance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes. Kodexo Labs regularly deploys open-weight and proprietary models directly within client-controlled AWS VPCs, Azure, or on-premise hardware with zero telemetry back to third parties.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
