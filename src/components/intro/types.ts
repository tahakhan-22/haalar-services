export type ReconstructionStage =
  | "INITIAL_LOGO"          // 0.0s - 1.2s: Center logo over Vanta net background
  | "DISINTEGRATING"        // 1.2s - 1.9s: Logo fractures into 1038 shards
  | "SWARM_EXPANDING"       // 1.9s - 2.6s: Shards morph into sleek cursors
  | "BUILD_BADGE"           // 2.6s - 3.0s: Cursor draws pill box, pill background fills
  | "BUILD_BADGE_TEXT"      // 3.0s - 3.4s: Cursor draws inner text box, "Disrupt · Defend · Dominate" appears
  | "BUILD_H1_IDEA"         // 3.4s - 3.9s: Cursor draws box for "Your Idea,"
  | "BUILD_H1_EXPERTISE"    // 3.9s - 4.4s: Cursor draws box for "Our Expertise." + underline
  | "BUILD_SUBTITLE_EAGLE"  // 4.4s - 4.9s: Cursor draws subtitle & pings 3D eagle
  | "BUILD_CTA_CONTAINER"   // 4.9s - 5.4s: Cursor draws button box -> button fills with vibrant red!
  | "BUILD_CTA_CONTENT"     // 5.4s - 6.0s: Cursor draws inner box -> Sparkles + text + secondary button appear!
  | "CONVERGING"            // 6.0s - 6.9s: Cursors converge to center, assemble Haalar logo
  | "FLIGHT_TO_NAV"         // 6.9s - 7.6s: Reassembled logo flies to top-left Navbar logo!
  | "COMPLETE";

export interface ActiveParticle {
  x: number;
  y: number;
  origX: number;
  origY: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  vRot: number;
  aspect: number;
  shapeType: 0 | 1 | 2; // 0: triangle, 1: quad, 2: shard
  alpha: number;
  color: string;
  cursorIndex: number;
}
