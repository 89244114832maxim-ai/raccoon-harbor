import * as THREE from "three";

const VERT = /* glsl */ `
  uniform float uTime;
  varying vec3 vWorld;
  varying vec3 vNormalW;
  float wave(vec2 p) {
    return sin(p.x * 0.34 + uTime * 1.25) * 0.12
      + cos(p.y * 0.27 - uTime * 0.95) * 0.09
      + sin(p.x * 0.62 + p.y * 0.41 + uTime * 1.55) * 0.04;
  }
  void main() {
    vec3 pos = position;
    float w = wave(pos.xz);
    float dx = wave(pos.xz + vec2(0.4, 0.0)) - w;
    float dz = wave(pos.xz + vec2(0.0, 0.4)) - w;
    pos.y += w;
    vec4 world = modelMatrix * vec4(pos, 1.0);
    vWorld = world.xyz;
    vNormalW = normalize(mat3(modelMatrix) * vec3(-dx, 0.4, -dz));
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`;

const FRAG = /* glsl */ `
  uniform vec3 uShallow;
  uniform vec3 uDeep;
  uniform vec3 uFoam;
  uniform float uTime;
  varying vec3 vWorld;
  varying vec3 vNormalW;
  void main() {
    vec2 e = vWorld.xz / vec2(9.55, 9.2);
    float r = length(e);
    float shore = smoothstep(0.84, 0.98, r) * (1.0 - smoothstep(1.04, 1.22, r));
    float pier = smoothstep(2.4, 1.2, abs(vWorld.x))
      * smoothstep(6.4, 7.5, vWorld.z)
      * smoothstep(16.4, 14.0, vWorld.z);
    float lace = 0.5 + 0.5 * sin(vWorld.x * 0.85 + vWorld.z * 0.35 + uTime * 1.6);
    lace = smoothstep(0.15, 0.85, lace);
    float depth = smoothstep(0.05, 1.35, r);
    vec3 col = mix(uShallow, uDeep, depth);
    float foam = clamp(max(shore, pier * 0.85) * (0.72 + 0.28 * lace), 0.0, 1.0);
    col = mix(col, uFoam, foam);
    vec3 viewDir = normalize(cameraPosition - vWorld);
    vec3 lightDir = normalize(vec3(0.35, 0.9, 0.2));
    vec3 halfDir = normalize(lightDir + viewDir);
    float spec = pow(max(dot(normalize(vNormalW), halfDir), 0.0), 6.0);
    col += vec3(1.0, 0.98, 0.92) * spec * 0.18;
    gl_FragColor = vec4(col, 1.0);
  }
`;

const SKY_VERT = /* glsl */ `
  varying float vH;
  void main() {
    vH = normalize(position).y;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const SKY_FRAG = /* glsl */ `
  uniform vec3 uTop;
  uniform vec3 uMid;
  uniform vec3 uHor;
  varying float vH;
  void main() {
    float t = smoothstep(-0.15, 0.55, vH);
    vec3 col = mix(uHor, uMid, smoothstep(0.0, 0.42, t));
    col = mix(col, uTop, smoothstep(0.35, 1.0, t));
    gl_FragColor = vec4(col, 1.0);
  }
`;

export function createOcean() {
  const geo = new THREE.PlaneGeometry(150, 150, 90, 90);
  geo.rotateX(-Math.PI / 2);
  const mat = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uShallow: { value: new THREE.Color("#7EDEF0") },
      uDeep: { value: new THREE.Color("#1478B0") },
      uFoam: { value: new THREE.Color("#F4FBFF") },
    },
    vertexShader: VERT,
    fragmentShader: FRAG,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.y = -0.42;
  mesh.receiveShadow = true;
  mesh.frustumCulled = false;
  return { mesh, mat };
}

export function createSky() {
  const geo = new THREE.SphereGeometry(90, 32, 20);
  const mat = new THREE.ShaderMaterial({
    uniforms: {
      uTop: { value: new THREE.Color("#5EB0EE") },
      uMid: { value: new THREE.Color("#B7E4F8") },
      uHor: { value: new THREE.Color("#FFE3B8") },
    },
    vertexShader: SKY_VERT,
    fragmentShader: SKY_FRAG,
    side: THREE.BackSide,
    depthWrite: false,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.y = 6;
  mesh.frustumCulled = false;
  return { mesh, mat };
}

export function makeClouds(parent: THREE.Object3D) {
  const group = new THREE.Group();
  const mat = new THREE.MeshLambertMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.92,
    depthWrite: false,
  });
  for (let i = 0; i < 7; i++) {
    const puff = new THREE.Group();
    const n = 3 + (i % 3);
    for (let k = 0; k < n; k++) {
      const s = new THREE.Mesh(new THREE.SphereGeometry(1.1 + (k % 2) * 0.45, 12, 8), mat);
      s.position.set((k - n / 2) * 1.15, Math.sin(k) * 0.25, (k % 2) * 0.2);
      s.scale.y = 0.62;
      puff.add(s);
    }
    const ang = (i / 7) * Math.PI * 2;
    const rad = 22 + (i % 3) * 6;
    puff.position.set(Math.cos(ang) * rad, 11 + (i % 4) * 1.4, Math.sin(ang) * rad);
    puff.userData.spin = 0.015 + i * 0.004;
    puff.userData.base = puff.position.clone();
    group.add(puff);
  }
  parent.add(group);
  return group;
}
