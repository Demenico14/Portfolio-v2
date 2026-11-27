import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

/**
 * An exploded laptop. The lid separates into the website on screen, the app layer
 * behind it and the lid shell; the base separates into keyboard deck, logic board
 * and bottom case; two domain orbits circle the whole machine.
 * Everything is driven by a StageState computed from scroll, so the scene holds no timeline.
 */

export type LayerId = "web" | "app" | "code" | "host" | "domain";

export type StageState = {
  solid: number; // 0 = blueprint wireframe, 1 = rendered material
  explode: number; // 0 = assembled, 1 = parts pulled apart
  turn: number; // 0 = facing camera, 1 = three-quarter view
  spin: number; // extra yaw added at the end of the sequence
  posY: number; // vertical offset in viewport fractions (+ = up)
  posX: number; // horizontal offset in viewport fractions (+ = right)
  fit: number; // fraction of viewport width the object may occupy
  focus: number; // index into LAYER_ORDER, -1 for none
  focusAmt: number;
  dims: number; // blueprint dimension lines
  domain: number;
  pointerX: number;
  pointerY: number;
  time: number;
  idle: number; // 0 disables the floating idle motion (reduced motion)
};

export const LAYER_ORDER: LayerId[] = ["web", "app", "code", "host", "domain"];

// Laptop proportions (world units)
const W = 4.8; // width
const LID_H = 3.05; // lid height
const BASE_D = 3.25; // base depth
const SCREEN_W = 4.42;
const SCREEN_H = 2.72;
const LID_TILT = -0.26; // lid leans back ~15° past vertical

const COLORS = {
  line: new THREE.Color("#DCE8FF"),
  lineAccent: new THREE.Color("#93C5FD"),
  plate: new THREE.Color("#121a2b"),
  detail: new THREE.Color("#25324c"),
  soft: new THREE.Color("#BFDBFE"),
  accent: new THREE.Color("#3B82F6"),
  accentDeep: new THREE.Color("#1E40AF"),
};

const ss = (a: number, b: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};
const mix = (a: number, b: number, t: number) => a + (b - a) * t;

function roundedRect(w: number, h: number, r: number) {
  const s = new THREE.Shape();
  const x = -w / 2;
  const y = -h / 2;
  s.moveTo(x + r, y);
  s.lineTo(x + w - r, y);
  s.quadraticCurveTo(x + w, y, x + w, y + r);
  s.lineTo(x + w, y + h - r);
  s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  s.lineTo(x + r, y + h);
  s.quadraticCurveTo(x, y + h, x, y + h - r);
  s.lineTo(x, y + r);
  s.quadraticCurveTo(x, y, x + r, y);
  return s;
}

function slab(w: number, h: number, d: number, r = 0.04) {
  const g = new THREE.ExtrudeGeometry(roundedRect(w, h, Math.min(r, w / 2, h / 2)), {
    depth: d,
    bevelEnabled: false,
    curveSegments: 6,
  });
  g.translate(0, 0, -d / 2);
  return g;
}

type Kind = "plate" | "detail" | "soft" | "accent";

/**
 * One separable part. Built in its local XY plane with its face toward +Z;
 * it explodes along local Z (z0 → z1) and lifts along Z when focused.
 */
class Part {
  group = new THREE.Group();
  inner = new THREE.Group();
  mats: Record<Kind, THREE.MeshPhysicalMaterial>;
  line = new THREE.LineBasicMaterial({ color: COLORS.line, transparent: true, opacity: 1 });
  lineAccent = new THREE.LineBasicMaterial({ color: COLORS.lineAccent, transparent: true, opacity: 1 });
  anchor = new THREE.Vector3();

  constructor(
    public z0: number,
    public z1: number,
    public surface: number, // z of the face that details sit on
    public hot: number, // index in LAYER_ORDER, -1 for structural parts
    public heroReveal: number, // how much of it shows in the front-on hero
  ) {
    this.mats = {
      plate: new THREE.MeshPhysicalMaterial({
        color: COLORS.plate,
        metalness: 0.6,
        roughness: 0.3,
        clearcoat: 0.8,
        clearcoatRoughness: 0.25,
        transparent: true,
      }),
      detail: new THREE.MeshPhysicalMaterial({ color: COLORS.detail, metalness: 0.45, roughness: 0.42, transparent: true }),
      soft: new THREE.MeshPhysicalMaterial({
        color: COLORS.soft,
        metalness: 0.1,
        roughness: 0.5,
        emissive: COLORS.soft,
        emissiveIntensity: 0.12,
        transparent: true,
      }),
      accent: new THREE.MeshPhysicalMaterial({
        color: COLORS.accent,
        metalness: 0.2,
        roughness: 0.3,
        emissive: COLORS.accentDeep,
        emissiveIntensity: 0.9,
        transparent: true,
      }),
    };
    this.group.add(this.inner);
  }

  add(geo: THREE.BufferGeometry, kind: Kind, x: number, y: number, z = 0, rot?: [number, number, number]) {
    const mesh = new THREE.Mesh(geo, this.mats[kind]);
    mesh.position.set(x, y, z);
    if (rot) mesh.rotation.set(rot[0], rot[1], rot[2]);
    const edges = new THREE.LineSegments(new THREE.EdgesGeometry(geo, 20), kind === "accent" ? this.lineAccent : this.line);
    mesh.add(edges);
    this.inner.add(mesh);
    return mesh;
  }

  /** Detail block resting on the part's face. */
  block(w: number, h: number, x: number, y: number, kind: Kind = "detail", d = 0.04, r = 0.03) {
    return this.add(slab(w, h, d, r), kind, x, y, this.surface + d / 2);
  }

  dot(radius: number, x: number, y: number, kind: Kind = "soft", d = 0.03) {
    return this.add(new THREE.CylinderGeometry(radius, radius, d, 24), kind, x, y, this.surface + d / 2, [Math.PI / 2, 0, 0]);
  }

  setAlpha(solid: number, alpha: number) {
    const meshA = solid * alpha;
    for (const m of Object.values(this.mats)) {
      m.opacity = meshA;
      m.depthWrite = meshA > 0.97;
      m.visible = meshA > 0.004;
    }
    const lineA = mix(1, 0.16, solid) * alpha;
    this.line.opacity = lineA;
    this.lineAccent.opacity = Math.min(1, lineA * 1.3);
    this.line.visible = lineA > 0.004;
    this.lineAccent.visible = lineA > 0.004;
  }
}

// Deterministic pseudo-random so repeated details look the same on every load.
function rng(seed: number) {
  return () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
}

/* ── Lid parts (local Y = up the screen, +Z = toward the viewer) ───────── */

function buildScreen(P: Part) {
  // The website on the display
  P.add(slab(SCREEN_W, SCREEN_H, 0.03, 0.06), "plate", 0, 0);
  const top = SCREEN_H / 2;
  [-2.0, -1.86, -1.72].forEach((x) => P.dot(0.04, x, top - 0.16));
  P.block(2.0, 0.12, 0.1, top - 0.16, "detail", 0.02, 0.06);
  P.block(SCREEN_W - 0.16, 0.01, 0, top - 0.3, "detail", 0.01, 0.004);
  P.block(1.85, 0.18, -1.05, 0.62, "soft", 0.03, 0.03);
  P.block(1.35, 0.18, -1.3, 0.36, "soft", 0.03, 0.03);
  P.block(1.7, 0.055, -1.12, 0.1);
  P.block(1.3, 0.055, -1.32, -0.02);
  P.block(0.6, 0.18, -1.68, -0.32, "accent", 0.04, 0.09);
  P.block(0.6, 0.18, -0.98, -0.32, "detail", 0.04, 0.09);
  P.block(1.6, 1.18, 1.15, 0.3, "detail", 0.04, 0.05);
  P.dot(0.13, 1.6, 0.62, "accent", 0.05);
  [-1.43, 0, 1.43].forEach((x) => P.block(1.28, 0.5, x, -0.92, "detail", 0.03, 0.05));
}

function buildAppLayer(P: Part) {
  // The application behind the website: dashboard, chart, records
  P.add(slab(SCREEN_W, SCREEN_H, 0.03, 0.06), "plate", 0, 0);
  P.block(0.72, SCREEN_H - 0.2, -1.75, 0, "detail", 0.03, 0.05);
  [0.95, 0.7, 0.45, 0.2, -0.05].forEach((y, i) => P.block(0.45, 0.07, -1.78, y, i === 1 ? "accent" : "soft", 0.02, 0.03));
  [-0.8, 0.3, 1.4].forEach((x, i) => P.block(0.98, 0.52, x, 0.86, i === 0 ? "soft" : "detail", 0.03, 0.05));
  P.block(2.1, 1.3, -0.25, -0.4, "detail", 0.02, 0.05);
  [0.32, 0.55, 0.44, 0.78, 0.64, 0.96, 0.82].forEach((h, i) => {
    P.add(slab(0.15, h, 0.06, 0.02), i === 5 ? "accent" : "soft", -1.08 + i * 0.27, -0.98 + h / 2, P.surface + 0.05);
  });
  [-0.06, -0.4, -0.74, -1.08].forEach((y) => P.block(0.98, 0.22, 1.5, y, "detail", 0.03, 0.04));
}

function buildLidShell(P: Part) {
  // Outer lid with a bezel frame around the display opening
  P.add(slab(W, LID_H, 0.07, 0.16), "plate", 0, 0);
  P.block(0.8, 0.05, 0, -LID_H / 2 + 0.1, "detail", 0.02, 0.02); // name plate on the chin
  P.dot(0.03, 0, LID_H / 2 - 0.08, "accent", 0.02); // camera
}

/* ── Base parts (local Y = toward the hinge, +Z = up) ──────────────────── */

function buildDeck(P: Part) {
  // Keyboard deck
  P.add(slab(W, BASE_D, 0.07, 0.18), "plate", 0, 0);
  const r = rng(11);
  const cols = 13;
  const pitch = 0.32;
  const x0 = -((cols - 1) * pitch) / 2;
  for (let row = 0; row < 5; row++) {
    const y = 1.12 - row * 0.31;
    for (let c = 0; c < cols; c++) {
      const kind: Kind = r() > 0.96 ? "accent" : "detail";
      P.block(0.27, 0.25, x0 + c * pitch, y, kind, 0.04, 0.04);
    }
  }
  // bottom row with a space bar
  const yb = 1.12 - 5 * 0.31;
  [-1.92, -1.6, -1.28].forEach((x) => P.block(0.27, 0.25, x, yb, "detail", 0.04, 0.04));
  P.block(1.88, 0.25, 0, yb, "detail", 0.04, 0.04);
  [1.28, 1.6, 1.92].forEach((x) => P.block(0.27, 0.25, x, yb, "detail", 0.04, 0.04));
  // trackpad
  P.block(1.7, 0.9, 0, -1.08, "soft", 0.02, 0.06);
  // hinge barrel along the back edge
  P.add(new THREE.CylinderGeometry(0.07, 0.07, 3.8, 20), "detail", 0, BASE_D / 2 - 0.05, P.surface + 0.03, [0, 0, Math.PI / 2]);
}

function buildBoard(P: Part) {
  // Logic board: processor, memory, storage, batteries
  P.add(slab(W - 0.4, BASE_D - 0.35, 0.03, 0.1), "detail", 0, 0);
  P.block(0.72, 0.72, -0.5, 0.75, "accent", 0.08, 0.05);
  P.block(0.9, 0.9, -0.5, 0.75, "plate", 0.04, 0.06);
  [0.45, 0.75].forEach((x) => P.block(0.2, 0.8, x, 0.75, "soft", 0.05, 0.02));
  P.block(0.7, 0.42, 1.55, 0.95, "detail", 0.05, 0.04);
  P.block(0.7, 0.3, 1.55, 0.45, "soft", 0.04, 0.03);
  P.add(new THREE.TorusGeometry(0.4, 0.035, 10, 40), "soft", -1.7, 0.75, P.surface + 0.05);
  P.dot(0.12, -1.7, 0.75, "detail", 0.05);
  P.block(3.0, 0.07, 0.2, 0.15, "soft", 0.03, 0.03); // heat pipe
  [-1.15, 1.15].forEach((x) => P.block(2.0, 1.05, x, -0.8, "plate", 0.1, 0.08)); // batteries
}

function buildCase(P: Part) {
  // Bottom case with an inner rim and vents
  P.add(slab(W, BASE_D, 0.16, 0.18), "plate", 0, 0);
  for (let i = 0; i < 18; i++) P.block(0.05, 0.36, -1.45 + i * 0.17, BASE_D / 2 - 0.42, "detail", 0.02, 0.01);
  [-1.9, 1.9].forEach((x) => [-1.25, 1.25].forEach((y) => P.dot(0.1, x, y, "detail", 0.03)));
}

function circle(radius: number, segments = 180) {
  const pts: THREE.Vector3[] = [];
  for (let i = 0; i <= segments; i++) {
    const a = (i / segments) * Math.PI * 2;
    pts.push(new THREE.Vector3(Math.cos(a) * radius, 0, Math.sin(a) * radius));
  }
  return new THREE.BufferGeometry().setFromPoints(pts);
}

function dimensionLines(topMat: THREE.LineBasicMaterial, sideMat: THREE.LineBasicMaterial) {
  // Width and height of the display, drawn in the lid's plane. The width rule sits on the
  // light top of the hero gradient, so it gets its own darker material.
  const g = new THREE.Group();
  const w = SCREEN_W;
  const h = SCREEN_H;
  const top = LID_H / 2 + 0.3;
  const left = -W / 2 - 0.3;
  const t = 0.09;
  const seg = (pts: number[][], mat: THREE.LineBasicMaterial) => {
    const v: number[] = [];
    pts.forEach(([a, b, c, d]) => v.push(a, b, 0, c, d, 0));
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(v, 3));
    g.add(new THREE.LineSegments(geo, mat));
  };
  seg(
    [
      [-w / 2, top, w / 2, top],
      [-w / 2, top - t, -w / 2, top + t],
      [w / 2, top - t, w / 2, top + t],
      [-w / 2, h / 2 + 0.06, -w / 2, top - 0.02],
      [w / 2, h / 2 + 0.06, w / 2, top - 0.02],
    ],
    topMat,
  );
  seg(
    [
      [left, -h / 2, left, h / 2],
      [left - t, -h / 2, left + t, -h / 2],
      [left - t, h / 2, left + t, h / 2],
      [-W / 2 - 0.06, h / 2, left + 0.02, h / 2],
      [-W / 2 - 0.06, -h / 2, left + 0.02, -h / 2],
    ],
    sideMat,
  );
  return { group: g, anchors: [new THREE.Vector3(0, top + 0.2, 0), new THREE.Vector3(left - 0.2, 0, 0)] };
}

export type Projected = { x: number; y: number };

export function createBuildScene(canvas: HTMLCanvasElement) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environment = envTex;

  const key = new THREE.DirectionalLight("#cfe0ff", 1.6);
  key.position.set(4, 7, 8);
  const rim = new THREE.DirectionalLight("#3B82F6", 2.2);
  rim.position.set(-6, 2, -6);
  scene.add(key, rim);

  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
  camera.position.set(0, 0, 14);

  const root = new THREE.Group(); // scale + screen offset
  const pivot = new THREE.Group(); // rotation
  root.add(pivot);
  scene.add(root);

  // Base lies flat; its local +Z points up and +Y points back toward the hinge.
  const baseY = -1.35;
  const base = new THREE.Group();
  base.position.set(0, baseY, 0.45);
  base.rotation.x = -Math.PI / 2;
  // Lid hinges on the base's back edge.
  const lid = new THREE.Group();
  const hingeZ = 0.45 - BASE_D / 2;
  lid.position.set(0, baseY, hingeZ);
  lid.rotation.x = LID_TILT;
  const lidBody = new THREE.Group(); // lid parts centred on the lid, above the hinge
  lidBody.position.y = LID_H / 2 + 0.04;
  lid.add(lidBody);
  pivot.add(base, lid);

  //               z0     z1     surface  hot  heroReveal
  const screen = new Part(0.055, 1.35, 0.015, 0, 1);
  const appLayer = new Part(0.02, 0.5, 0.015, 1, 0.05);
  const shell = new Part(-0.02, -0.55, 0.035, -1, 0.35);
  const deck = new Part(0.0, 0.0, 0.035, 2, 1);
  const board = new Part(-0.09, -0.95, 0.015, 3, 0.05);
  const bottom = new Part(-0.2, -1.85, 0.08, -1, 0.3);

  buildScreen(screen);
  buildAppLayer(appLayer);
  buildLidShell(shell);
  buildDeck(deck);
  buildBoard(board);
  buildCase(bottom);
  [screen, appLayer, shell].forEach((p) => lidBody.add(p.group));
  [deck, board, bottom].forEach((p) => base.add(p.group));
  const parts = [screen, appLayer, shell, deck, board, bottom];

  // Hotspot anchors spread around the machine so labels never stack.
  screen.anchor.set(-SCREEN_W / 2, 0.1, 0); // left edge, label reads leftward
  appLayer.anchor.set(SCREEN_W / 2 - 0.2, SCREEN_H / 2 - 0.1, 0);
  deck.anchor.set(W / 2 - 0.2, 0.5, 0.04); // right edge of the keyboard
  board.anchor.set(-(W - 0.4) / 2, -0.6, 0.02); // left edge, label reads leftward
  const hotParts = [screen, appLayer, deck, board];

  // Domain: two orbits around the machine with a node travelling on the first.
  const domainMat = new THREE.LineBasicMaterial({ color: COLORS.lineAccent, transparent: true, opacity: 0 });
  const domain = new THREE.Group();
  const orbitA = new THREE.Line(circle(1), domainMat);
  const orbitB = new THREE.Line(circle(1), domainMat);
  orbitB.rotation.z = 0.9;
  orbitB.rotation.x = 0.35;
  const nodeMat = new THREE.MeshPhysicalMaterial({
    color: COLORS.accent,
    emissive: COLORS.accent,
    emissiveIntensity: 1.4,
    transparent: true,
    opacity: 0,
  });
  const node = new THREE.Mesh(new THREE.SphereGeometry(0.09, 24, 16), nodeMat);
  domain.add(orbitA, orbitB, node);
  pivot.add(domain);
  const domainAnchor = new THREE.Vector3();

  const dimMat = new THREE.LineBasicMaterial({ color: COLORS.line, transparent: true, opacity: 1 });
  const dimTopMat = new THREE.LineBasicMaterial({ color: new THREE.Color("#3A5287"), transparent: true, opacity: 1 });
  const dims = dimensionLines(dimTopMat, dimMat);
  lidBody.add(dims.group);

  const tmp = new THREE.Vector3();
  let width = 1;
  let height = 1;

  function resize(w: number, h: number) {
    width = Math.max(1, w);
    height = Math.max(1, h);
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  function visibleSize() {
    const h = 2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.position.z;
    return { w: h * camera.aspect, h };
  }

  function render(s: StageState) {
    const vis = visibleSize();
    // Approximate projected footprint of the machine for this pose, then fit it.
    const footW = mix(W + 1.4, 7.2, s.turn);
    const footH = mix(LID_H + 2.6, 7.4, s.turn) + s.explode * 0.6;
    const scale = Math.min((vis.w * s.fit) / footW, (vis.h * 0.7) / footH);
    root.scale.setScalar(scale);
    const bob = Math.sin(s.time * 0.6) * 0.05 * s.idle;
    root.position.set(s.posX * vis.w, s.posY * vis.h + bob, 0);

    pivot.rotation.set(
      mix(0.2, 0.42, s.turn) + s.pointerY * 0.05 * s.idle,
      mix(0, -0.72, s.turn) + s.spin + s.pointerX * 0.1 * s.idle,
      0,
    );

    // Lid lifts off the hinge while the parts separate.
    lid.position.y = baseY + s.explode * 0.95;
    lid.position.z = hingeZ - s.explode * 0.35;
    lid.rotation.x = LID_TILT + s.explode * 0.08;

    parts.forEach((p) => {
      const focused = p.hot >= 0 && s.focus === p.hot;
      const reveal = mix(p.heroReveal, 1, ss(0.15, 0.7, s.turn));
      const alpha = reveal * (s.focus >= 0 ? mix(1, focused ? 1 : 0.22, s.focusAmt) : 1);
      p.group.position.z = mix(p.z0, p.z1, s.explode);
      p.inner.position.z = focused ? 0.45 * s.focusAmt : 0;
      p.setAlpha(s.solid, alpha);
    });

    const dAlpha = s.domain * (s.focus >= 0 ? mix(1, s.focus === 4 ? 1 : 0.3, s.focusAmt) : 1);
    const radius = mix(3.0, 4.3, s.explode) * (1 + (s.focus === 4 ? 0.06 * s.focusAmt : 0));
    orbitA.scale.setScalar(radius);
    orbitB.scale.setScalar(radius * 0.92);
    domain.position.y = mix(0, 0.1, s.explode);
    domainMat.opacity = dAlpha;
    nodeMat.opacity = dAlpha;
    domain.visible = dAlpha > 0.004;
    domain.rotation.y = s.time * 0.08 * s.idle;
    const a = s.time * 0.5 * Math.max(0.2, s.idle) + 0.6;
    node.position.set(Math.cos(a) * radius, 0, Math.sin(a) * radius);
    domainAnchor.copy(node.position);

    dimMat.opacity = s.dims;
    dimTopMat.opacity = s.dims;
    dims.group.visible = s.dims > 0.004;

    renderer.render(scene, camera);
  }

  function toScreen(v: THREE.Vector3, obj: THREE.Object3D, out: Projected) {
    tmp.copy(v);
    obj.localToWorld(tmp);
    tmp.project(camera);
    out.x = (tmp.x * 0.5 + 0.5) * width;
    out.y = (-tmp.y * 0.5 + 0.5) * height;
    return out;
  }

  /** Screen-space anchors for hotspot labels, in LAYER_ORDER. */
  function projectHotspots(out: Projected[]) {
    hotParts.forEach((p, i) => toScreen(p.anchor, p.inner, out[i]));
    toScreen(domainAnchor, domain, out[4]);
  }

  function projectDims(out: Projected[]) {
    toScreen(dims.anchors[0], lidBody, out[0]);
    toScreen(dims.anchors[1], lidBody, out[1]);
  }

  function dispose() {
    scene.traverse((o) => {
      const m = o as THREE.Mesh;
      m.geometry?.dispose();
      const mat = m.material as THREE.Material | THREE.Material[] | undefined;
      if (Array.isArray(mat)) mat.forEach((x) => x.dispose());
      else mat?.dispose();
    });
    envTex.dispose();
    pmrem.dispose();
    renderer.dispose();
  }

  return { render, resize, projectHotspots, projectDims, dispose };
}
