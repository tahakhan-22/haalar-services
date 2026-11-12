import ServicesSliceCarousel from "@/components/common/ServicesSliceCarousel";
import { ROOT_CAUSE_SLICES } from "@/data/focusSlices";

export default function ProblemMatrix() {
  return (
    <ServicesSliceCarousel
      eyebrow="Root Cause Engineering"
      title="Most Problems We Fix Follow The Same Arc"
      exploreLabel="Explore all services"
      exploreHref="/services"
      items={ROOT_CAUSE_SLICES}
    />
  );
}
