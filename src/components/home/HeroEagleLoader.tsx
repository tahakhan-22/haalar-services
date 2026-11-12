"use client";

import dynamic from "next/dynamic";

const HeroEagleCanvas = dynamic(() => import("./HeroEagleCanvas"), {
  ssr: false,
});

export default function HeroEagleLoader() {
  return <HeroEagleCanvas />;
}
