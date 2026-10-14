export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://haalarservices.com/#website",
        "url": "https://haalarservices.com/",
        "name": "Haalar Services",
        "description":
          "Haalar Services specializes in trusted next-generation hardware and software solutions, PCB reverse engineering, OEM/ODM manufacturing, and indigenous RF/microwave systems.",
        "publisher": {
          "@id": "https://haalarservices.com/#organization",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://haalarservices.com/#organization",
        "name": "Haalar Services",
        "slogan": "Disrupt · Defend · Dominate",
        "url": "https://haalarservices.com/",
        "telephone": "+92-51-4490922",
        "email": "info@haalarservices.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Plot No 261 Humak Industrial Estate, Kahuta Road",
          "addressLocality": "Islamabad",
          "addressCountry": "PK",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://haalarservices.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What core capabilities distinguish Haalar Services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Haalar Services is an advanced engineering and manufacturing firm specializing in next-generation hardware, PCB reverse engineering, and indigenous RF/microwave systems under our motto 'Disrupt · Defend · Dominate'.",
            },
          },
          {
            "@type": "Question",
            "name": "How does your PCB reverse engineering process work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Our process includes precision de-layering of multi-layer PCBs, high-resolution optical scanning, netlist extraction, and schematic regeneration in Altium Designer with modern component decoding.",
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
