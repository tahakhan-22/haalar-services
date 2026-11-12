"use client";

import { usePathname } from "next/navigation";

export default function EagleCredit() {
  const pathname = usePathname();
  if (pathname !== "/") {
    return null;
  }

  return (
    <p className="text-xs text-neutral-500">
      Eagle model:{" "}
      <a
        href="https://sketchfab.com/3d-models/free-eagle-9f25e7c83840435396225970ba47b75e"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-neutral-300 underline underline-offset-2 transition-colors"
      >
        Free Eagle by Filip, CC BY 4.0.
      </a>
    </p>
  );
}
