import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { clone as cloneSkinned } from "three/examples/jsm/utils/SkeletonUtils.js";
import { ASSET_FIT } from "../data/assets";

export type Master = {
  key: string;
  scene: THREE.Object3D;
  clips: THREE.AnimationClip[];
};

function assetUrl(key: string) {
  const path = key.startsWith("poly:")
    ? `assets/polyfork/${key.slice(5)}.glb`
    : `assets/glb/${key.slice(4)}.glb`;
  return new URL(path, document.baseURI).href;
}

export function stylizePolyfork(root: THREE.Object3D) {
  root.traverse((obj) => {
    const mesh = obj as THREE.Mesh;
    if (!mesh.isMesh) return;
    const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    for (const mat of mats) {
      const m = mat as THREE.MeshStandardMaterial;
      if (!m || !m.color) continue;
      m.metalness = 0;
      m.roughness = Math.min(1, (m.roughness ?? 0.6) * 0.35 + 0.55);
      m.color.r = Math.min(1, m.color.r * 1.06 + 0.015);
      m.color.g = Math.min(1, m.color.g * 1.03);
      m.color.b = Math.min(1, m.color.b * 0.95);
      if (m.map) m.map.colorSpace = THREE.SRGBColorSpace;
      m.needsUpdate = true;
    }
    mesh.castShadow = true;
    mesh.receiveShadow = true;
  });
}

function fitMaster(root: THREE.Object3D, key: string) {
  const fit = ASSET_FIT[key];
  if (!fit) return;
  root.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(root);
  const size = box.getSize(new THREE.Vector3());
  const s = fit.h
    ? fit.h / Math.max(0.001, size.y)
    : (fit.max ?? 1.4) / Math.max(0.001, size.x, size.y, size.z);
  root.scale.multiplyScalar(s);
  root.updateMatrixWorld(true);
  const box2 = new THREE.Box3().setFromObject(root);
  const center = box2.getCenter(new THREE.Vector3());
  root.position.x -= center.x;
  root.position.z -= center.z;
  root.updateMatrixWorld(true);
  const box3 = new THREE.Box3().setFromObject(root);
  root.position.y -= box3.min.y;
}

export class AssetLibrary {
  private loader = new GLTFLoader();
  private masters = new Map<string, Master>();
  private failed = new Set<string>();
  private inflight = new Map<string, Promise<Master | null>>();

  async load(key: string): Promise<Master | null> {
    const hit = this.masters.get(key);
    if (hit) return hit;
    if (this.failed.has(key)) return null;
    const pending = this.inflight.get(key);
    if (pending) return pending;
    const job = this.loader
      .loadAsync(assetUrl(key))
      .then((gltf) => {
        const scene = gltf.scene;
        if (key.startsWith("poly:")) {
          stylizePolyfork(scene);
          fitMaster(scene, key);
        }
        scene.traverse((obj) => {
          const mesh = obj as THREE.Mesh;
          if (mesh.isMesh) {
            mesh.castShadow = true;
            mesh.receiveShadow = true;
          }
        });
        const master: Master = { key, scene, clips: gltf.animations ?? [] };
        this.masters.set(key, master);
        this.inflight.delete(key);
        return master;
      })
      .catch((err) => {
        console.warn("asset failed", key, err);
        this.failed.add(key);
        this.inflight.delete(key);
        return null;
      });
    this.inflight.set(key, job);
    return job;
  }

  spawn(key: string): THREE.Object3D | null {
    const master = this.masters.get(key);
    if (!master) return null;
    let skinned = false;
    master.scene.traverse((obj) => {
      if ((obj as THREE.SkinnedMesh).isSkinnedMesh) skinned = true;
    });
    return skinned ? cloneSkinned(master.scene) : master.scene.clone(true);
  }

  clips(key: string) {
    return this.masters.get(key)?.clips ?? [];
  }

  has(key: string) {
    return this.masters.has(key);
  }
}
