"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Cpu, Layers, Shield, Radio, Wrench, Check, Microchip } from "lucide-react";

const MANUFACTURING_SERVICES = [
  {
    title: "Original Design Manufacturing (ODM)",
    desc: "All you have to bring is an operational concept. Our team manages product specification, schematic engineering, PCB layout, firmware, and pilot fabrication.",
    features: ["End-to-End Product Ideation", "Multi-Layer PCB Layout in Altium", "Custom Aluminum & Rugged Casing", "Turnkey Functional Prototyping"],
    icon: Layers,
    href: "/services/odm-manufacturing",
  },
  {
    title: "Original Equipment Manufacturing (OEM)",
    desc: "State-of-the-art precision hardware manufacturing and component assembly built strictly according to military and IPC-A-610 Class 3 standards.",
    features: ["Precision SMD & Through-Hole Assembly", "IPC-A-610 Class 3 Soldering Quality", "Automated Optical & Functional Testing", "Mil-Spec Mechanical Integration"],
    icon: Cpu,
    href: "/services/oem-production",
  },
  {
    title: "Research & Development (R&D)",
    desc: "Continuous innovation in advanced electronic modules, frequency synthesizers, RF countermeasures, and sovereign hardware infrastructure.",
    features: ["Indigenous Technological Innovation", "Thermal & Stress Finite Element Analysis", "Rapid Iterative Prototyping", "Electromagnetic Interference (EMI) Shielding"],
    icon: Microchip,
    href: "/services/research-development",
  },
  {
    title: "Legacy Systems Modernization & Repair",
    desc: "Diagnostics, retrofitting, and form-fit-function upgrades for obsolete defense, aerospace, and industrial electronic equipment.",
    features: ["Obsolete Equipment Life Extension", "Substrate & Trace Micro-Soldering", "Pin-Compatible Modern Chip Adaptation", "Full Performance Recertification"],
    icon: Wrench,
    href: "/services/legacy-modernization",
  },
];

const ELECTRONICS_SERVICES = [
  {
    title: "Reverse Engineering of PCBs",
    desc: "Multi-layer de-layering, optical micro-sectioning, netlist extraction, and full schematic reconstruction when original design documentation is lost.",
    features: ["Single, Double & Multi-Layer PCBs", "Full Netlist & Schematic Extraction", "Component Decoding & BOM Generation", "Gerber Regeneration for Fabrication"],
    icon: Cpu,
    href: "/services/pcb-reverse-engineering",
  },
  {
    title: "RF & Microwave Engineering",
    desc: "Custom high-power RF amplifiers, Direct Digital Synthesis (DDS) modules, antenna matching networks, and jamming countermeasure systems.",
    features: ["High-Power RF Amplifier Design", "Direct Digital Synthesis (DDS) Sweepers", "Radar & Telemetry Transceivers", "Harmonic & Spectrum Certification"],
    icon: Radio,
    href: "/services/rf-microwave-systems",
  },
  {
    title: "Embedded Software & Firmware",
    desc: "Deterministic, low-latency firmware written in C, C++, and Rust for bare-metal microcontrollers, digital signal processors (DSP), and real-time operating systems.",
    features: ["Bare-Metal & RTOS Firmware", "Hardware Abstraction Layers (HAL)", "DSP Signal Filtering Algorithms", "Secure Encrypted Bootloaders"],
    icon: Layers,
    href: "/services/embedded-firmware",
  },
  {
    title: "Component Decoding & Obsolescence",
    desc: "Decapsulation, pinout reverse engineering, and modern drop-in replacement sourcing for unmarked, scrubbed, or discontinued semiconductors.",
    features: ["Unmarked & Proprietary IC Decoding", "Micro-X-Ray Substrate Imaging", "Functional Verification Test Jigs", "Guaranteed Supply Chain Continuity"],
    icon: Shield,
    href: "/services/component-decoding",
  },
];

export default function ServicesShowcase() {
  const [activeTab, setActiveTab] = useState<"mfg" | "electronics">("mfg");

  const services = activeTab === "mfg" ? MANUFACTURING_SERVICES : ELECTRONICS_SERVICES;

  return (
    <section id="services" className="py-24 bg-neutral-50/60 border-t border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-[#f54545] font-mono text-xs uppercase tracking-widest font-bold">
              Engineering Disciplines
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 mt-3 tracking-tight">
              Eight Core Engineering Practices. <br />
              <span className="text-neutral-500 font-bold">One Sovereign Solutions Partner.</span>
            </h2>
          </div>

          {/* Segmented Switcher */}
          <div className="bg-neutral-200/80 p-1.5 rounded-full inline-flex self-start md:self-auto">
            <button
              onClick={() => setActiveTab("mfg")}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "mfg"
                  ? "bg-neutral-950 text-white shadow-md"
                  : "text-neutral-700 hover:text-neutral-900"
              }`}
            >
              Turnkey ODM & OEM Manufacturing
            </button>
            <button
              onClick={() => setActiveTab("electronics")}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "electronics"
                  ? "bg-neutral-950 text-white shadow-md"
                  : "text-neutral-700 hover:text-neutral-900"
              }`}
            >
              PCB Reverse Engineering & RF
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-neutral-200 hover-card-elevate flex flex-col justify-between group"
              >
                <div>
                  <div className="size-12 rounded-2xl bg-red-50 text-[#f54545] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 group-hover:text-[#f54545] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-neutral-600 text-sm mt-3 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="mt-6 pt-6 border-t border-neutral-100">
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold block mb-3">
                      Technical Capabilities
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {item.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs font-semibold text-neutral-700">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#f54545] hover:text-[#a50e19] transition-colors"
                  >
                    <span>View Technical Specifications</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
