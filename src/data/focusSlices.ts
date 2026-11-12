export interface FocusSliceItem {
  id: string;
  title: string;
  tag: string;
  description: string;
  image: string;
  href: string;
}

export const ROOT_CAUSE_SLICES: FocusSliceItem[] = [
  {
    id: "obsolete",
    title: "Obsolete Components",
    tag: "PCB Reverse Engineering",
    description:
      "Multi-layer PCB de-layering, unmarked IC decoding, and pin-compatible modern replacements when OEM schematics no longer exist.",
    image: "/img/pcb-obsolete-bg.jpg",
    href: "/services/pcb-reverse-engineering",
  },
  {
    id: "odm",
    title: "Turnkey ODM Need",
    tag: "Turnkey ODM Engineering",
    description:
      "Concept-to-production hardware spanning specification, multi-layer Altium PCBs, firmware, CNC casings, and pilot fabrication.",
    image: "/img/odm-turnkey-bg.jpg",
    href: "/services/odm-manufacturing",
  },
  {
    id: "rf",
    title: "High-Frequency RF & EW",
    tag: "RF & Electronic Warfare",
    description:
      "Indigenous HF, VHF, UHF, and ISM power amplifiers, DDS frequency sweepers, and rugged tactical countermeasure hardware.",
    image: "/img/rf-ew-bg.jpg",
    href: "/services/rf-microwave-systems",
  },
  {
    id: "repair",
    title: "Unrepairable Equipment",
    tag: "Diagnostic Modernization",
    description:
      "Component-level failure analysis, substrate micro-soldering, BGA reballing, and lifecycle upgrades for critical electronics.",
    image: "/img/repair-equipment-bg.jpg",
    href: "/services/legacy-modernization",
  },
  {
    id: "firmware",
    title: "Firmware Bottlenecks",
    tag: "Embedded Firmware & RTOS",
    description:
      "Deterministic C, C++, and Rust firmware for bare-metal microcontrollers, DSP cores, and zero-jitter hardware control.",
    image: "/img/firmware-bottlenecks-bg.jpg",
    href: "/services/embedded-firmware",
  },
  {
    id: "standards",
    title: "Strict Military Standards",
    tag: "IPC Class 3 & Mil-Spec",
    description:
      "IPC-A-610 Class 3 assembly, conformal coating, vibration qualification, and full optical validation for defense deployments.",
    image: "/img/military-standards-bg.jpg",
    href: "/services/oem-production",
  },
];
