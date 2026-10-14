"use client";

import { ANNOUNCEMENT_ITEMS } from "@/data/siteData";

export default function AnnouncementBar() {
  return (
    <div
      className="bg-[#f54545] text-white py-1.5 px-4 overflow-hidden text-xs md:text-sm font-semibold tracking-wide select-none z-50 relative"
      aria-label="Announcements"
    >
      <div className="flex animate-marquee items-center gap-8">
        {[...ANNOUNCEMENT_ITEMS, ...ANNOUNCEMENT_ITEMS].map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 shrink-0">
            <span>{item}</span>
            <span className="text-white/60">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
