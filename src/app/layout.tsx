import type { Metadata } from "next";
import { Manrope, Anton, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingChatWidget from "@/components/layout/FloatingChatWidget";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  weight: "400",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "AI Software Development Company | Kodexo Labs",
  description:
    "Businesses trust Kodexo Labs to build web, mobile, and AI systems that deliver measurable outcomes. 51 shipped. Inc. 5000 clients. Top-rated on Clutch.",
  keywords: [
    "ai software development company",
    "agentic ai development",
    "custom software development",
    "mobile app development",
    "hipaa ai development",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${anton.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-white text-neutral-900 selection:bg-[#f54545] selection:text-white">
        <SmoothScrollProvider>
          <AnnouncementBar />
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
          <FloatingChatWidget />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
