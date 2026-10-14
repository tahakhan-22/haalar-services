import type { Metadata } from "next";
import { Manrope, Anton, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingChatWidget from "@/components/layout/FloatingChatWidget";
import JsonLd from "@/components/common/JsonLd";

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
  title: "Haalar Services | Disrupt · Defend · Dominate — Hardware, RF & Software",
  description:
    "Haalar Services specializes in trusted next-generation hardware, PCB reverse engineering, OEM/ODM manufacturing, and indigenous RF/microwave systems.",
  keywords: [
    "Haalar Services",
    "PCB reverse engineering",
    "RF and microwave systems",
    "OEM manufacturing Islamabad",
    "ODM electronic design",
    "defense electronic countermeasures",
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
        <JsonLd />
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
