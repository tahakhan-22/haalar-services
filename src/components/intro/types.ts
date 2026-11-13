export type ReconstructionStage =
  | "INITIAL_LOGO"          // 0.0s - 1.2s: Center logo over Vanta net background
  | "DISINTEGRATING"        // 1.2s - 1.8s: Logo fractures into 1038 shards
  | "SWARM_EXPANDING"       // 1.8s - 2.5s: Shards morph into sleek cursors
  | "BUILD_CONTAINERS"      // 2.5s - 3.8s: ALL cursors simultaneously draw outer boxes
  | "BUILD_CONTENT"         // 3.8s - 5.0s: Button fills red! Inner boxes drawn simultaneously
  | "CONVERGING"            // 5.0s - 5.9s: Cursors converge to center, assemble Haalar logo
  | "FLIGHT_TO_NAV"         // 5.9s - 6.7s: Reassembled logo flies to top-left Navbar logo!
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
