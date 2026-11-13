import * as THREE from "three";

function circleTexture(stops: [number, string][]) {
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  const g = c.getContext("2d")!;
  const grd = g.createRadialGradient(32, 32, 2, 32, 32, 30);
  for (const [o, col] of stops) grd.addColorStop(o, col);
  g.fillStyle = grd;
  g.fillRect(0, 0, 64, 64);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

type Puff = { sprite: THREE.Sprite; life: number; max: number };
type Bit = { mesh: THREE.Object3D; life: number; vel: THREE.Vector3; spin: number };
type Arc = { mesh: THREE.Object3D; t: number; from: THREE.Vector3; to: THREE.Vector3 };

export class Juice {
  readonly group = new THREE.Group();
  private dustTex = circleTexture([
    [0, "rgba(255,255,255,0.9)"],
    [0.45, "rgba(255,255,255,0.35)"],
    [1, "rgba(255,255,255,0)"],
  ]);
  private dustMat: THREE.SpriteMaterial;
  private puffs: Puff[] = [];
  private bits: Bit[] = [];
  private arcs: Arc[] = [];
  private trail: THREE.Mesh[] = [];
  private arrow: THREE.Mesh;
  private dustAcc = 0;
  private tint = new THREE.Color("#d8ec9a");

  constructor() {
    this.dustMat = new THREE.SpriteMaterial({
      map: this.dustTex,
      transparent: true,
      depthWrite: false,
      color: this.tint,
    });
    const arrowGeo = new THREE.ConeGeometry(0.16, 0.42, 4);
    arrowGeo.rotateX(Math.PI / 2);
    this.arrow = new THREE.Mesh(
      arrowGeo,
      new THREE.MeshBasicMaterial({ color: 0xfff1a8 }),
    );
    this.arrow.visible = false;
    this.group.add(this.arrow);
    const dot = new THREE.SphereGeometry(0.07, 6, 6);
    for (let i = 0; i < 7; i++) {
      const m = new THREE.Mesh(
        dot,
        new THREE.MeshBasicMaterial({
          color: 0xfff6c8,
          transparent: true,
          opacity: 0.85,
        }),
      );
      m.visible = false;
      this.trail.push(m);
      this.group.add(m);
    }
  }

  setGroundTint(hex: string) {
    this.tint.set(hex);
  }

  spawnDust(x: number, z: number) {
    let sprite = this.puffs.find((p) => p.life <= 0)?.sprite;
    if (!sprite) {
      sprite = new THREE.Sprite(this.dustMat.clone());
      this.group.add(sprite);
      this.puffs.push({ sprite, life: 0, max: 0.45 });
    }
    const puff = this.puffs.find((p) => p.sprite === sprite)!;
    puff.life = 0.42;
    puff.max = 0.42;
    sprite.position.set(x + (Math.random() - 0.5) * 0.2, 0.08, z + (Math.random() - 0.5) * 0.2);
    sprite.scale.setScalar(0.18);
    (sprite.material as THREE.SpriteMaterial).color.copy(this.tint);
    (sprite.material as THREE.SpriteMaterial).opacity = 0.8;
    sprite.visible = true;
  }

  burst(x: number, z: number, color = "#ffe38a") {
    for (let i = 0; i < 14; i++) {
      const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(0.08, 0.08, 0.08),
        new THREE.MeshBasicMaterial({ color: i % 2 ? color : "#ffffff" }),
      );
      mesh.position.set(x, 0.8, z);
      const a = (i / 14) * Math.PI * 2;
      const vel = new THREE.Vector3(Math.cos(a) * 2.2, 2.4 + Math.random(), Math.sin(a) * 2.2);
      this.group.add(mesh);
      this.bits.push({ mesh, life: 0.7, vel, spin: Math.random() * 6 });
    }
  }

  heart(x: number, z: number) {
    const mesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.09, 8, 6),
      new THREE.MeshBasicMaterial({ color: "#ff7a9a" }),
    );
    mesh.scale.set(1, 0.85, 0.7);
    mesh.position.set(x, 1.3, z);
    this.group.add(mesh);
    this.bits.push({
      mesh,
      life: 0.8,
      vel: new THREE.Vector3((Math.random() - 0.5) * 0.4, 1.6, (Math.random() - 0.5) * 0.4),
      spin: 2,
    });
  }

  coinArc(mesh: THREE.Object3D, from: THREE.Vector3, to: THREE.Vector3) {
    mesh.position.copy(from);
    this.group.add(mesh);
    this.arcs.push({ mesh, t: 0, from: from.clone(), to: to.clone() });
  }

  guide(px: number, pz: number, tx: number, tz: number, active: boolean, time: number) {
    const dx = tx - px;
    const dz = tz - pz;
    const len = Math.hypot(dx, dz);
    const show = active && len > 0.55;
    this.arrow.visible = show;
    for (const m of this.trail) m.visible = show;
    if (!show) return;
    const yaw = Math.atan2(dx, dz);
    this.arrow.position.set(px + (dx / len) * 0.72, 0.22 + Math.sin(time * 6) * 0.05, pz + (dz / len) * 0.72);
    this.arrow.rotation.set(0, yaw, 0);
    const pulse = 1 + Math.sin(time * 5) * 0.12;
    this.arrow.scale.setScalar(pulse);
    for (let i = 0; i < this.trail.length; i++) {
      const d = 1.15 + i * 0.48 + ((time * 1.4) % 0.48);
      const m = this.trail[i];
      if (d > len - 0.2) {
        m.visible = false;
        continue;
      }
      m.visible = true;
      m.position.set(px + (dx / len) * d, 0.1, pz + (dz / len) * d);
      const mat = m.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.9 - i * 0.1;
    }
  }

  footstep(dt: number, moving: boolean, x: number, z: number) {
    if (!moving) return;
    this.dustAcc += dt;
    if (this.dustAcc > 0.12) {
      this.dustAcc = 0;
      this.spawnDust(x, z);
    }
  }

  update(dt: number) {
    for (const p of this.puffs) {
      if (p.life <= 0) continue;
      p.life -= dt;
      const k = 1 - p.life / p.max;
      p.sprite.position.y += dt * 0.45;
      p.sprite.scale.setScalar(0.18 + k * 0.45);
      (p.sprite.material as THREE.SpriteMaterial).opacity = Math.max(0, 0.75 * (1 - k));
      if (p.life <= 0) p.sprite.visible = false;
    }
    for (const b of this.bits) {
      b.life -= dt;
      b.vel.y -= dt * 6;
      b.mesh.position.addScaledVector(b.vel, dt);
      b.mesh.rotation.y += b.spin * dt;
      if (b.life <= 0) {
        b.mesh.removeFromParent();
        const mesh = b.mesh as THREE.Mesh;
        mesh.geometry?.dispose();
        (mesh.material as THREE.Material)?.dispose?.();
      }
    }
    this.bits = this.bits.filter((b) => b.life > 0);
    for (const a of this.arcs) {
      a.t += dt / 0.48;
      const t = Math.min(1, a.t);
      const lift = Math.sin(t * Math.PI) * 1.35;
      a.mesh.position.lerpVectors(a.from, a.to, t);
      a.mesh.position.y += lift;
      a.mesh.rotation.y += dt * 8;
      if (t >= 1) a.mesh.removeFromParent();
    }
    this.arcs = this.arcs.filter((a) => a.t < 1);
  }
}
