import * as THREE from "three";
import { CSS2DObject, CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer.js";
import { A, O, R, X, gt, ht, mt, _t } from "../sim/engine";
import {
  BIOME_DRESS,
  BOOT_ASSETS,
  EMOJI,
  GOOD_POLY,
  PARTICLE_KIND,
  STATION_POLY,
  type Prop,
} from "../data/assets";
import { AssetLibrary } from "./assets";
import { createIsland } from "./terrain";
import { createOcean, createSky, makeClouds } from "./ocean";
import { Juice } from "../vfx/juice";

type Actor = {
  root: THREE.Group;
  model: THREE.Object3D;
  mixer: THREE.AnimationMixer | null;
  actions: Record<string, THREE.AnimationAction>;
  current: string;
  anchor: THREE.Object3D;
  play: (name: string) => void;
};

type StationView = {
  id: string;
  def: any;
  solid: THREE.Object3D | null;
  holo: THREE.Object3D | null;
  pad: THREE.Group;
  fill: THREE.ShaderMaterial;
  pill: CSS2DObject;
  squash: number;
  squashWrap: THREE.Group;
  base: THREE.Group;
};

const ALIAS: Record<string, string[]> = {
  idle: ["idle"],
  run: ["run", "walk"],
  carry_run: ["carry_run", "walk_carry", "run", "walk"],
  carry_idle: ["carry_idle", "idle"],
  walk: ["walk", "run"],
  walk_carry: ["walk_carry", "carry_run", "walk"],
  cheer: ["cheer", "idle"],
};

const PIE_VERT = `varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`;
const PIE_FRAG = `
  uniform float u; uniform vec3 color; varying vec2 vUv;
  void main(){
    vec2 p = vUv - 0.5;
    float r = length(p);
    float ring = smoothstep(0.33, 0.38, r) * (1.0 - smoothstep(0.46, 0.5, r));
    float ang = atan(p.y, p.x);
    float a = fract((ang + 1.5708) / 6.28318);
    if (ring < 0.05 || a > u) discard;
    gl_FragColor = vec4(color, 0.95);
  }
`;

function emoji(id?: string | null) {
  if (!id) return "✨";
  return EMOJI[id] ?? "✨";
}

function stationKey(st: any): string | null {
  if (st.item && STATION_POLY[st.item] && (st.kind === "producer" || st.kind === "processor")) {
    const mapped = mt(st.kind, st.item, st.visual, Math.max(0, (st.k ?? 1) - 1));
    if (!mapped) return STATION_POLY[st.item];
  }
  if (st.kind === "stall") return "glb:stall";
  if (st.kind === "till") return "glb:till";
  if (st.kind === "house") return "glb:helper_house";
  if (st.kind === "hire") return "glb:signpost";
  if (st.kind === "backpack") return null;
  if (st.kind === "delivery") return "glb:prop_delivery_boat";
  if (st.kind === "attraction") return "glb:station_ferris_wheel";
  if (st.kind === "decor") {
    return ["glb:bench", "glb:flower_patch", "glb:lamp_post", "glb:flower_patch", "glb:bench"][
      Math.max(0, (st.k ?? 1) - 1)
    ];
  }
  const mapped = mt(st.kind, st.item, st.visual, Math.max(0, (st.k ?? 1) - 1));
  return mapped ? `glb:${mapped}` : st.item ? STATION_POLY[st.item] ?? null : null;
}

function goodKey(id: string) {
  if (GOOD_POLY[id]) return GOOD_POLY[id];
  const name = _t(id);
  return name ? `glb:${name}` : "glb:coin";
}

function fallbackProp(color: string) {
  const mesh = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.28, 0.4, 4, 8),
    new THREE.MeshLambertMaterial({ color }),
  );
  mesh.position.y = 0.5;
  mesh.castShadow = true;
  return mesh;
}

export class HarborView {
  readonly engine: {
    runRenderLoop: (fn: () => void) => void;
    stopRenderLoop: () => void;
  };
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera: THREE.PerspectiveCamera;
  private css2d: CSS2DRenderer;
  private canvas: HTMLCanvasElement;
  private lib = new AssetLibrary();
  private ocean;
  private sky;
  private clouds: THREE.Group;
  private island = new THREE.Group();
  private juice = new Juice();
  private hemi: THREE.HemisphereLight;
  private sun: THREE.DirectionalLight;
  private stations = new Map<string, StationView>();
  private player: Actor | null = null;
  private customers = new Map<number, Actor>();
  private helpers = new Map<string, Actor>();
  private mixers: THREE.AnimationMixer[] = [];
  private pending = new Set<string>();
  private props: { obj: THREE.Object3D; bob: boolean; baseY: number; phase: number }[] = [];
  private spinners: { obj: THREE.Object3D; axis: "y" | "z"; speed: number }[] = [];
  private stacks = new Map<string, THREE.Object3D[]>();
  private quality: string;
  private look = new THREE.Vector3(0.2, 0.4, 3);
  private zoomExtra = 0;
  private sweep = 0;
  private shakeT = 0;
  private shakeMag = 0;
  private cheerT = 0;
  private fpsWindow: number[] = [];
  private loopFn: (() => void) | null = null;
  private raf = 0;
  private clock = 0;
  private particles!: THREE.Points;
  private particleKind = "leaves";
  private save: any = null;
  private def: any = null;
  private coinMaster: THREE.Object3D | null = null;

  private constructor(canvas: HTMLCanvasElement, quality: string) {
    this.canvas = canvas;
    this.quality = quality;
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: quality !== "low",
      alpha: false,
      powerPreference: "high-performance",
      stencil: false,
    });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.12;
    this.renderer.shadowMap.enabled = quality !== "low";
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.camera = new THREE.PerspectiveCamera(38, 1, 0.1, 180);
    this.ocean = createOcean();
    this.sky = createSky();
    this.scene.add(this.sky.mesh, this.ocean.mesh, this.island, this.juice.group);
    this.clouds = makeClouds(this.scene);
    this.hemi = new THREE.HemisphereLight("#fff6e4", "#7fbf62", 0.78);
    this.sun = new THREE.DirectionalLight("#ffe0b0", 1.35);
    this.sun.position.set(14, 20, 8);
    this.sun.castShadow = quality !== "low";
    this.sun.shadow.mapSize.set(1024, 1024);
    this.sun.shadow.camera.near = 2;
    this.sun.shadow.camera.far = 48;
    const s = 16;
    this.sun.shadow.camera.left = -s;
    this.sun.shadow.camera.right = s;
    this.sun.shadow.camera.top = s;
    this.sun.shadow.camera.bottom = -s;
    this.sun.shadow.bias = -0.0008;
    this.scene.add(this.hemi, this.sun, this.sun.target);
    this.css2d = new CSS2DRenderer();
    this.css2d.domElement.style.position = "fixed";
    this.css2d.domElement.style.inset = "0";
    this.css2d.domElement.style.pointerEvents = "none";
    this.css2d.domElement.style.zIndex = "2";
    document.body.appendChild(this.css2d.domElement);
    this.makeParticles();
    this.resize();
    this.engine = {
      runRenderLoop: (fn) => {
        this.loopFn = fn;
        if (this.raf) return;
        const step = () => {
          if (!this.loopFn) {
            this.raf = 0;
            return;
          }
          this.raf = requestAnimationFrame(step);
          this.loopFn();
        };
        this.raf = requestAnimationFrame(step);
      },
      stopRenderLoop: () => {
        this.loopFn = null;
        if (this.raf) cancelAnimationFrame(this.raf);
        this.raf = 0;
      },
    };
  }

  static async create(canvas: HTMLCanvasElement, quality: string) {
    return new HarborView(canvas, quality || "auto");
  }

  async preload(progress: (n: number) => void) {
    let done = 0;
    await Promise.all(
      BOOT_ASSETS.map(async (key) => {
        await this.lib.load(key);
        done++;
        progress?.(done / BOOT_ASSETS.length);
      }),
    );
    this.coinMaster = this.lib.spawn("glb:coin");
  }

  resize() {
    const w = this.canvas.clientWidth || window.innerWidth;
    const h = this.canvas.clientHeight || window.innerHeight;
    const portrait = w < h;
    this.renderer.setPixelRatio(this.pixelRatio());
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / Math.max(1, h);
    this.camera.fov = portrait ? 42 : 34;
    this.camera.updateProjectionMatrix();
    this.css2d.setSize(w, h);
  }

  setQuality(q: string) {
    this.quality = q;
    this.renderer.shadowMap.enabled = q !== "low";
    this.sun.castShadow = q !== "low";
    this.resize();
  }

  private pixelRatio() {
    const dpr = window.devicePixelRatio || 1;
    if (this.quality === "low") return 1;
    if (this.quality === "medium") return Math.min(dpr, 1.25);
    if (this.quality === "high") return Math.min(dpr, 1.75);
    return Math.min(dpr, 1.5);
  }

  fps() {
    if (!this.fpsWindow.length) return 60;
    return this.fpsWindow.reduce((a, b) => a + b, 0) / this.fpsWindow.length;
  }

  sampleFps(dt: number) {
    if (dt > 0 && dt < 0.5) {
      this.fpsWindow.push(1 / dt);
      if (this.fpsWindow.length > 90) this.fpsWindow.shift();
    }
    return this.fps();
  }

  axes() {
    const fwd = new THREE.Vector3();
    this.camera.getWorldDirection(fwd);
    fwd.y = 0;
    if (fwd.lengthSq() < 1e-6) fwd.set(0, 0, 1);
    fwd.normalize();
    const right = new THREE.Vector3().crossVectors(new THREE.Vector3(0, 1, 0), fwd).normalize();
    return { fx: fwd.x, fz: fwd.z, rx: right.x, rz: right.z };
  }

  zoom(delta: number) {
    this.zoomExtra = Math.max(-7, Math.min(9, this.zoomExtra + delta));
  }

  shake(mag = 0.2) {
    this.shakeMag = mag;
    this.shakeT = 0.28;
  }

  cheer() {
    this.cheerT = 1.1;
    this.player?.play("cheer");
  }

  project(x: number, y: number, z: number) {
    const v = new THREE.Vector3(x, y, z).project(this.camera);
    if (v.z > 1) return null;
    const w = this.canvas.clientWidth || window.innerWidth;
    const h = this.canvas.clientHeight || window.innerHeight;
    return { x: (v.x * 0.5 + 0.5) * w, y: (-v.y * 0.5 + 0.5) * h };
  }

  private makeParticles() {
    const n = 48;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 1] = 1 + Math.random() * 6;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 16;
    }
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    this.particles = new THREE.Points(
      geo,
      new THREE.PointsMaterial({
        color: "#fff1c4",
        size: 0.12,
        transparent: true,
        opacity: 0.55,
        depthWrite: false,
        sizeAttenuation: true,
      }),
    );
    this.scene.add(this.particles);
  }

  private applyBiome(def: any) {
    const sky = new THREE.Color(def.sky);
    const water = new THREE.Color(def.water);
    const deep = water.clone().lerp(new THREE.Color("#0d4e78"), 0.55);
    this.ocean.mat.uniforms.uShallow.value.copy(water).lerp(new THREE.Color("#ffffff"), 0.18);
    this.ocean.mat.uniforms.uDeep.value.copy(deep);
    this.sky.mat.uniforms.uMid.value.copy(sky);
    this.sky.mat.uniforms.uTop.value.copy(sky).lerp(new THREE.Color("#3a78c4"), 0.35);
    this.sky.mat.uniforms.uHor.value.set(def.id === 9 ? "#e7f4ff" : def.id === 12 ? "#f3d2ff" : "#ffe3b8");
    this.renderer.setClearColor(sky, 1);
    this.hemi.groundColor.set(def.ground);
    const ground = new THREE.Color(def.ground);
    this.juice.setGroundTint("#" + ground.clone().lerp(new THREE.Color("#ffffff"), 0.35).getHexString());
    const mat = this.particles.material as THREE.PointsMaterial;
    const kind = PARTICLE_KIND[def.id] ?? "leaves";
    this.particleKind = kind;
    const colors: Record<string, string> = {
      leaves: "#7dcc55",
      spark: "#fff6c8",
      petals: "#ffb7c8",
      dust: "#e7d2a4",
      bees: "#ffd15c",
      flour: "#fff8ee",
      steam: "#f4fbff",
      fireflies: "#d6ff7a",
      snow: "#ffffff",
      bubbles: "#d7f6ff",
      confetti: "#ff8ad4",
      stars: "#fff1a8",
    };
    mat.color.set(colors[kind] ?? "#ffffff");
    mat.size = kind === "bees" || kind === "fireflies" ? 0.16 : 0.11;
  }

  private clearIsland() {
    for (const st of this.stations.values()) {
      st.pill.element.remove();
    }
    this.stations.clear();
    this.props = [];
    this.spinners = [];
    this.stacks.clear();
    this.customers.clear();
    this.helpers.clear();
    this.player = null;
    this.mixers = [];
    this.island.clear();
  }

  async loadIsland(save: any) {
    this.save = save;
    const def = O(save.profile.currentIsland);
    this.def = def;
    this.clearIsland();
    this.applyBiome(def);
    this.island.add(createIsland(def, def.id));
    const tasks: Promise<void>[] = [];
    for (const st of def.stations) {
      const key = stationKey(st);
      tasks.push(this.mountStation(st, key));
    }
    for (const prop of BIOME_DRESS[def.id] ?? BIOME_DRESS[1]) tasks.push(this.mountProp(prop));
    for (const good of def.goods) tasks.push(this.lib.load(goodKey(good.id)).then(() => undefined));
    tasks.push(
      this.lib.load("glb:raccoon_hero").then(() => {
        this.player = this.makeActor("glb:raccoon_hero", "#c5ced6", true);
        if (this.player) {
          this.player.root.position.set(save.profile.playerX, 0, save.profile.playerZ);
          this.island.add(this.player.root);
        }
      }),
    );
    const kinds = new Set<string>([...def.customers, "bunny"]);
    for (const kind of kinds) {
      const mesh = ht(kind);
      if (mesh) tasks.push(this.lib.load(`glb:${mesh}`).then(() => undefined));
    }
    await Promise.all(tasks);
    this.look.set(save.profile.playerX - 0.4, 0.4, save.profile.playerZ - 0.2);
    this.camera.position.set(save.profile.playerX + 11, 14, save.profile.playerZ + 11);
    this.sweep = 1.45;
    this.sun.target.position.set(0, 0, 0);
  }

  private async mountStation(st: any, key: string | null) {
    const base = new THREE.Group();
    base.position.set(st.x, 0, st.z);
    const color = this.itemColor(st.item) || this.def?.accent || "#ffb938";
    let solid: THREE.Object3D | null = null;
    let holo: THREE.Object3D | null = null;
    if (key) {
      await this.lib.load(key);
      solid = this.lib.spawn(key) ?? fallbackProp(color);
      holo = this.lib.spawn(key) ?? fallbackProp(color);
    } else if (st.kind === "backpack") {
      solid = new THREE.Group();
      holo = new THREE.Group();
    } else {
      solid = fallbackProp(color);
      holo = fallbackProp(color);
    }
    this.paintHolo(holo, color);
    if (st.item === "starfruit") solid.scale.multiplyScalar(2.2);
    const squashWrap = new THREE.Group();
    squashWrap.add(solid);
    base.add(squashWrap);
    holo.position.y = 0.02;
    base.add(holo);
    this.tagMovers(solid);
    const state = this.save?.islands?.[this.def.id - 1]?.stations?.[st.id];
    const built = !!state?.built || st.kind === "hire" || st.kind === "till";
    solid.visible = built;
    holo.visible = !built;
    const pad = this.makePad(color);
    base.add(pad);
    const pillEl = document.createElement("div");
    pillEl.className = "pad-pill";
    pillEl.innerHTML = `<i class="ring"></i><span class="emo"></span><b></b>`;
    const pill = new CSS2DObject(pillEl);
    pill.position.set(0, 1.85, 0);
    base.add(pill);
    this.island.add(base);
    const fill = (pad.getObjectByName("fill") as THREE.Mesh).material as THREE.ShaderMaterial;
    this.stations.set(st.id, { id: st.id, def: st, solid, holo, pad, fill, pill, squash: 1, squashWrap, base });
  }

  private tagMovers(root: THREE.Object3D) {
    root.traverse((obj) => {
      const name = obj.name.toLowerCase();
      if (name.includes("sail")) this.spinners.push({ obj, axis: "y", speed: 1.4 });
      else if (name.includes("wheel")) this.spinners.push({ obj, axis: "z", speed: 0.45 });
      else if (name.includes("lamp")) {
        const mesh = obj as THREE.Mesh;
        const mat = mesh.material as THREE.MeshStandardMaterial;
        if (mat?.emissive) {
          mat.emissive = new THREE.Color("#ffe38a");
          mat.emissiveIntensity = 0.8;
        }
      }
    });
  }

  private paintHolo(root: THREE.Object3D, color: string) {
    root.traverse((obj) => {
      const mesh = obj as THREE.Mesh;
      if (!mesh.isMesh) return;
      mesh.material = new THREE.MeshStandardMaterial({
        color,
        transparent: true,
        opacity: 0.42,
        roughness: 0.2,
        metalness: 0,
        depthWrite: false,
        emissive: new THREE.Color(color),
        emissiveIntensity: 0.55,
      });
      mesh.castShadow = false;
    });
  }

  private makePad(color: string) {
    const pad = new THREE.Group();
    const border = new THREE.Mesh(
      new THREE.TorusGeometry(1.05, 0.07, 8, 40),
      new THREE.MeshBasicMaterial({ color: 0xff9a1f }),
    );
    border.rotation.x = Math.PI / 2;
    border.position.y = 0.06;
    border.name = "border";
    const disc = new THREE.Mesh(
      new THREE.CircleGeometry(0.98, 28),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.18, depthWrite: false }),
    );
    disc.rotation.x = -Math.PI / 2;
    disc.position.y = 0.04;
    const fillMesh = new THREE.Mesh(
      new THREE.CircleGeometry(0.72, 32),
      new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        uniforms: { u: { value: 0 }, color: { value: new THREE.Color("#7BD35A") } },
        vertexShader: PIE_VERT,
        fragmentShader: PIE_FRAG,
      }),
    );
    fillMesh.rotation.x = -Math.PI / 2;
    fillMesh.position.y = 0.07;
    fillMesh.name = "fill";
    pad.add(border, disc, fillMesh);
    return pad;
  }

  private async mountProp(prop: Prop) {
    await this.lib.load(prop.asset);
    const obj = this.lib.spawn(prop.asset);
    if (!obj) return;
    obj.position.set(prop.x, prop.y ?? 0, prop.z);
    obj.rotation.y = prop.rot ?? 0;
    this.island.add(obj);
    this.props.push({ obj, bob: !!prop.bob, baseY: prop.y ?? 0, phase: prop.x * 0.7 + prop.z });
    this.tagMovers(obj);
  }

  private itemColor(id?: string) {
    const good = this.def?.goods?.find((g: any) => g.id === id);
    return good?.color as string | undefined;
  }

  private makeActor(key: string, color: string, hero = false): Actor | null {
    const model = this.lib.spawn(key) ?? fallbackProp(color);
    const root = new THREE.Group();
    root.add(model);
    const clips = this.lib.clips(key);
    const mixer = clips.length ? new THREE.AnimationMixer(model) : null;
    const actions: Record<string, THREE.AnimationAction> = {};
    if (mixer) {
      for (const clip of clips) actions[clip.name] = mixer.clipAction(clip);
      this.mixers.push(mixer);
    }
    const anchor = model.getObjectByName("socket_stack") ?? root;
    const actor: Actor = {
      root,
      model,
      mixer,
      actions,
      current: "",
      anchor,
      play: (name: string) => {
        const options = ALIAS[name] ?? [name];
        const found = options.find((n) => actions[n]);
        if (!found || actor.current === found) return;
        const next = actions[found];
        const prev = actor.current ? actions[actor.current] : null;
        next.reset().fadeIn(0.12).play();
        prev?.fadeOut(0.12);
        actor.current = found;
      },
    };
    actor.play(hero ? "idle" : "idle");
    return actor;
  }

  private tintHelper(actor: Actor, helper: any) {
    const tint = new THREE.Color(helper?.color || "#ffffff");
    const accent = new THREE.Color(helper?.accent || "#ffd15c");
    actor.model.traverse((obj) => {
      const mesh = obj as THREE.Mesh;
      if (!mesh.isMesh) return;
      const src = mesh.material as THREE.MeshStandardMaterial;
      if (!src?.color || Array.isArray(mesh.material)) return;
      const copy = src.clone();
      copy.color.lerp(tint, 0.5);
      mesh.material = copy;
    });
    const role = helper?.role ?? "general";
    let hat: THREE.Object3D;
    const mat = new THREE.MeshLambertMaterial({ color: accent });
    if (role === "farmer" || helper?.rarity === "legendary") {
      hat = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.26, 8), mat);
      hat.position.set(0, 1.12, 0);
    } else if (role === "cashier") {
      hat = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.26, 0.08), mat);
      hat.position.set(0, 0.62, 0.2);
    } else if (role === "carrier") {
      hat = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.22, 0.14), mat);
      hat.position.set(0, 0.72, -0.18);
    } else {
      hat = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.04, 6, 12), mat);
      hat.rotation.x = Math.PI / 2;
      hat.position.set(0, 0.78, 0.12);
    }
    actor.root.add(hat);
  }

  private ensureCustomer(c: any) {
    if (this.customers.has(c.id)) return;
    const token = `c${c.id}`;
    if (this.pending.has(token)) return;
    const mesh = ht(c.kind);
    const key = mesh ? `glb:${mesh}` : "glb:customer_bunny";
    this.pending.add(token);
    void this.lib.load(key).then(() => {
      this.pending.delete(token);
      if (!this.def || this.customers.has(c.id)) return;
      const actor = this.makeActor(key, "#f4e6d4");
      if (!actor) return;
      actor.root.position.set(c.x, 0, c.z);
      this.island.add(actor.root);
      this.customers.set(c.id, actor);
    });
  }

  private ensureHelper(id: string) {
    if (this.helpers.has(id) || this.pending.has(id)) return;
    const helper = A(id);
    const mesh = gt(id, helper?.look ?? "bear");
    const key = `glb:${mesh}`;
    this.pending.add(id);
    void this.lib.load(key).then(() => {
      this.pending.delete(id);
      if (!this.def || this.helpers.has(id)) return;
      const actor = this.makeActor(key, helper?.color ?? "#b5774a");
      if (!actor) return;
      this.tintHelper(actor, helper);
      this.island.add(actor.root);
      this.helpers.set(id, actor);
    });
  }

  private setStack(anchor: THREE.Object3D, key: string, item: string | null, count: number, sway: number) {
    let slots = this.stacks.get(key);
    if (!slots) {
      slots = [];
      this.stacks.set(key, slots);
    }
    const n = Math.max(0, Math.min(6, count));
    for (let i = slots.length; i < n; i++) {
      const gkey = item ? goodKey(item) : "glb:coin";
      const mesh = (this.lib.has(gkey) ? this.lib.spawn(gkey) : null) ?? new THREE.Mesh(
        new THREE.SphereGeometry(0.12, 8, 6),
        new THREE.MeshLambertMaterial({ color: this.itemColor(item ?? "") || "#ffb938" }),
      );
      if (!this.lib.has(gkey) && item) void this.lib.load(gkey);
      mesh.scale.setScalar(item && GOOD_POLY[item] ? 1 : 0.85);
      anchor.add(mesh);
      slots.push(mesh);
    }
    for (let i = 0; i < slots.length; i++) {
      const mesh = slots[i];
      mesh.visible = i < n && !!item;
      mesh.position.set(Math.sin(i + sway) * 0.04, 0.05 + i * 0.22, 0);
      mesh.rotation.z = sway * 0.35;
    }
  }

  sync(runtime: any, dt: number, target: any, pads: any[] = []) {
    this.clock += dt;
    this.save = runtime.save;
    const hot = new Set((pads ?? []).map((p: any) => p.stationId));
    if (this.player) {
      this.player.root.position.set(runtime.px, 0, runtime.pz);
      this.player.root.rotation.y = runtime.yaw;
      const carrying = runtime.stackCount > 0;
      if (this.cheerT > 0) this.cheerT -= dt;
      else if (runtime.moving && carrying) this.player.play("carry_run");
      else if (runtime.moving) this.player.play("run");
      else if (carrying) this.player.play("carry_idle");
      else this.player.play("idle");
      const bob = runtime.moving ? 1 + Math.sin(this.clock * 14) * 0.035 : 1;
      this.player.model.scale.set(1 + (1 - bob) * 0.6, bob, 1 + (1 - bob) * 0.6);
      this.setStack(this.player.anchor, "player", runtime.stackItem, runtime.stackCount, Math.sin(this.clock * 8) * (runtime.moving ? 1 : 0.2));
      this.juice.footstep(dt, !!runtime.moving, runtime.px, runtime.pz);
    }
    const alive = new Set<number>();
    for (const c of runtime.customers) {
      alive.add(c.id);
      this.ensureCustomer(c);
      const actor = this.customers.get(c.id);
      if (!actor) continue;
      const prevX = actor.root.position.x;
      const prevZ = actor.root.position.z;
      actor.root.position.set(c.x, Math.abs(Math.sin(this.clock * 8 + c.id)) * 0.04, c.z);
      const dx = c.x - prevX;
      const dz = c.z - prevZ;
      if (dx * dx + dz * dz > 1e-6) actor.root.rotation.y = Math.atan2(dx, dz);
      const moving = dx * dx + dz * dz > 4e-4;
      if (moving && c.item) actor.play("walk_carry");
      else if (moving) actor.play("walk");
      else actor.play("idle");
      this.setStack(actor.anchor, `c${c.id}`, c.item, c.item ? 1 : 0, 0);
    }
    for (const [id, actor] of this.customers) {
      if (!alive.has(id)) actor.root.visible = false;
    }
    const crew = new Set<string>();
    for (const h of runtime.helpers) {
      crew.add(h.id);
      this.ensureHelper(h.id);
      const actor = this.helpers.get(h.id);
      if (!actor) continue;
      actor.root.visible = true;
      const dx = h.x - actor.root.position.x;
      const dz = h.z - actor.root.position.z;
      actor.root.position.set(h.x, h.moving ? Math.abs(Math.sin(this.clock * 10)) * 0.04 : 0, h.z);
      if (h.moving && dx * dx + dz * dz > 1e-6) actor.root.rotation.y = Math.atan2(dx, dz);
      if (h.moving && h.carry) actor.play("carry_run");
      else if (h.moving) actor.play("run");
      else actor.play("idle");
    }
    for (const [id, actor] of this.helpers) actor.root.visible = crew.has(id);

    const island = runtime.island;
    for (const st of runtime.def.stations) {
      const view = this.stations.get(st.id);
      const state = island.stations[st.id];
      if (!view || !state) continue;
      const always = st.kind === "hire" || st.kind === "till";
      const built = !!state.built || always;
      if (view.solid) view.solid.visible = built;
      if (view.holo) view.holo.visible = !built;
      const quote =
        st.kind === "hire"
          ? { kind: "build", cost: R(runtime.islandId, (island.crew?.length ?? 0) + 1) }
          : X(runtime.save, runtime.def, st);
      const structural = st.kind !== "decor";
      const showPad =
        quote.kind !== "max" &&
        (st.kind === "hire" ||
          (!built && structural) ||
          state.invested > 0.4 ||
          hot.has(st.id));
      view.pad.visible = showPad;
      const cost = Math.max(0, Math.round(quote.cost - (state.invested || 0)));
      const progress = quote.cost > 0 ? Math.min(1, (state.invested || 0) / quote.cost) : 0;
      view.fill.uniforms.u.value = Math.max(0.001, progress);
      const el = view.pill.element;
      const emo = el.querySelector(".emo");
      const label = el.querySelector("b");
      const ring = el.querySelector(".ring") as HTMLElement | null;
      if (emo) emo.textContent = emoji(st.item) || (st.kind === "hire" ? "🤝" : "🏠");
      if (label) label.textContent = cost ? String(cost) : "✓";
      if (ring) ring.style.setProperty("--p", String(Math.round(progress * 100)));
      const scr = this.project(st.x, 1.7, st.z);
      const vw = this.canvas.clientWidth || 1;
      const vh = this.canvas.clientHeight || 1;
      const onScreen = !!scr && scr.x > 28 && scr.x < vw - 28 && scr.y > 64 && scr.y < vh - 108;
      view.pill.visible = view.pad.visible && onScreen;
      const pulse = 1 + Math.sin(this.clock * 3 + st.x) * (hot.has(st.id) ? 0.06 : 0.025);
      view.pad.scale.setScalar(pulse);
      view.squash += (1 - view.squash) * Math.min(1, dt * 8);
      const q = view.squash;
      view.squashWrap.scale.set(2 - q, q, 2 - q);
      if (built && (st.kind === "producer" || st.kind === "processor" || st.kind === "stall")) {
        this.setStack(view.base, `st${st.id}`, st.item ?? null, Math.min(4, state.stock || 0), 0);
        const slots = this.stacks.get(`st${st.id}`) ?? [];
        slots.forEach((mesh, i) => {
          mesh.position.set((i - 1) * 0.22, st.kind === "stall" ? 1.05 : 0.85, 0.15);
        });
      }
    }
    for (const fx of runtime.fx ?? []) {
      if (fx.type === "pop" || fx.type === "build" || fx.type === "confetti") {
        const hit = [...this.stations.values()].find((s) => Math.hypot(s.def.x - fx.x, s.def.z - fx.z) < 1.2);
        if (hit) hit.squash = fx.type === "build" ? 1.35 : 1.18;
        if (fx.type === "build" || fx.type === "confetti") {
          this.juice.burst(fx.x, fx.z, fx.type === "build" ? "#ffe38a" : "#ffffff");
          this.shake(fx.type === "build" ? 0.16 : 0.08);
        }
      }
      if (fx.type === "coin" && this.coinMaster) {
        const coin = this.coinMaster.clone(true);
        coin.scale.setScalar(0.55);
        this.juice.coinArc(coin, new THREE.Vector3(runtime.px, 0.9, runtime.pz), new THREE.Vector3(fx.x, 0.5, fx.z));
      }
      if (fx.type === "ding") this.juice.heart(fx.x, fx.z);
    }
    const guideOn = target && target.kind !== "turbo" && target.kind !== "quests";
    this.juice.guide(runtime.px, runtime.pz, target?.x ?? runtime.px, target?.z ?? runtime.pz, !!guideOn, this.clock);
    this.follow(runtime, dt);
  }

  private follow(runtime: any, dt: number) {
    const w = this.canvas.clientWidth || 1;
    const h = this.canvas.clientHeight || 1;
    const portrait = w < h;
    if (this.sweep > 0) this.sweep = Math.max(0, this.sweep - dt);
    const yaw = Math.PI / 4 + Math.sin(this.sweep) * this.sweep * 0.55;
    const dist = (portrait ? 19.2 : 21.4) + this.zoomExtra;
    const height = portrait ? 15.6 : 14.2;
    const tx = runtime.px - 0.35;
    const tz = runtime.pz - 0.15;
    const desired = new THREE.Vector3(tx + Math.sin(yaw) * dist * 0.72, height, tz + Math.cos(yaw) * dist * 0.72);
    const k = 1 - Math.exp(-dt * 4.2);
    this.camera.position.lerp(desired, this.sweep > 0 ? 1 : k);
    this.look.lerp(new THREE.Vector3(tx, 0.35, tz), k);
    if (this.shakeT > 0) {
      this.shakeT -= dt;
      const e = this.shakeT / 0.28;
      this.look.x += Math.sin(performance.now() * 0.05) * this.shakeMag * e;
      this.look.z += Math.cos(performance.now() * 0.04) * this.shakeMag * e;
    }
    this.camera.lookAt(this.look);
    this.sky.mesh.position.set(this.look.x, 6, this.look.z);
  }

  render(dt: number) {
    this.ocean.mat.uniforms.uTime.value = this.clock;
    for (const mixer of this.mixers) mixer.update(dt);
    for (const spin of this.spinners) {
      if (spin.axis === "y") spin.obj.rotation.y += dt * spin.speed;
      else spin.obj.rotation.z += dt * spin.speed;
    }
    for (const prop of this.props) {
      if (!prop.bob) continue;
      prop.obj.position.y = prop.baseY + Math.sin(this.clock * 1.6 + prop.phase) * 0.08;
    }
    for (const puff of this.clouds.children) {
      const base = puff.userData.base as THREE.Vector3;
      const ang = this.clock * (puff.userData.spin as number);
      puff.position.x = base.x + Math.sin(ang) * 1.4;
      puff.position.z = base.z + Math.cos(ang * 0.8) * 1.1;
    }
    this.driftParticles(dt);
    this.juice.update(dt);
    this.renderer.render(this.scene, this.camera);
    this.css2d.render(this.scene, this.camera);
  }

  private driftParticles(dt: number) {
    const pos = this.particles.geometry.attributes.position as THREE.BufferAttribute;
    const arr = pos.array as Float32Array;
    const rise = this.particleKind === "steam" || this.particleKind === "bubbles" || this.particleKind === "fireflies";
    for (let i = 0; i < arr.length; i += 3) {
      arr[i] += Math.sin(this.clock + i) * dt * 0.15;
      arr[i + 2] += dt * 0.25;
      arr[i + 1] += (rise ? 0.35 : -0.55) * dt;
      if (arr[i + 1] < 1.4 || arr[i + 1] > 8) {
        arr[i] = (Math.random() - 0.5) * 16;
        arr[i + 1] = rise ? 1.6 : 6.2;
        arr[i + 2] = (Math.random() - 0.5) * 16;
      }
    }
    pos.needsUpdate = true;
  }
}
