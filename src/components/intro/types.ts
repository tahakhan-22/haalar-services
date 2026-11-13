export type ReconstructionStage =
  | "INITIAL_LOGO"      // 0.0s - 1.25s: Original logo centered, stationary
  | "DISINTEGRATING"    // 1.25s - 2.1s: Logo breaks into geometric shards
  | "SWARM_EXPANDING"   // 2.1s - 2.9s: 12 shards morph into cursors
  | "BUILD_NAV"         // 2.9s - 3.7s: Cursors build Navbar & Announcement
  | "BUILD_HERO"        // 3.6s - 4.5s: Cursors build Hero & 3D Eagle
  | "BUILD_SERVICES"    // 4.4s - 5.3s: Cursors build Capabilities & Services
  | "BUILD_PRODUCTS"    // 5.1s - 5.9s: Cursors build Hardware Products & Specs
  | "BUILD_ALL"         // 5.7s - 6.2s: Cursors finish Compliance & Footer
  | "CONVERGING"        // 6.2s - 7.3s: Cursors & shards converge back to center
  | "LOGO_REASSEMBLED"  // 7.3s - 8.1s: Assembled logo holds, then transitions
  | "COMPLETE";         // Intro unmounted, site fully live

export interface CursorState {
  id: number;
  label: string;
  role: string;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  angle: number;
  scale: number;
  opacity: number;
  isClicking: boolean;
  statusText?: string;
  // Bounding box being drawn
  drawBox?: {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    label: string;
    progress: number;
  } | null;
}

export interface ClickRipple {
  id: number;
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
  color: string;
}

export interface ActiveParticle {
  // Current position
  x: number;
  y: number;
  // Original resting position in centered logo
  origX: number;
  origY: number;
  // Velocity
  vx: number;
  vy: number;
  // Shard physics
  size: number;
  rotation: number;
  vRot: number;
  aspect: number;
  shapeType: 0 | 1 | 2; // 0: triangle, 1: quad, 2: shard
  // Morph & opacity
  alpha: number;
  color: string;
  // Designation
  cursorIndex: number; // >= 0 if this particle links to a cursor
}
