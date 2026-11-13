import * as THREE from "three";

const VERT = /* glsl */ `
  varying vec3 vWorld;
  void main() {
    vec4 w = modelMatrix * vec4(position, 1.0);
    vWorld = w.xyz;
    gl_Position = projectionMatrix * viewMatrix * w;
  }
`;

const FRAG = /* glsl */ `
  uniform vec3 uGrass;
  uniform vec3 uShade;
  uniform vec3 uSand;
  varying vec3 vWorld;
  void main() {
    vec2 e = vWorld.xz / vec2(9.45, 9.05);
    float r = length(e);
    float n = sin(vWorld.x * 1.65) * sin(vWorld.z * 1.35);
    float m = sin(vWorld.x * 0.45 + vWorld.z * 0.7);
    vec3 col = mix(uGrass, uShade, smoothstep(-0.35, 0.9, n) * 0.38 + smoothstep(0.2, 1.0, m) * 0.12);
    col = mix(col, uSand, smoothstep(0.78, 1.02, r));
    if (r > 1.02) discard;
    gl_FragColor = vec4(col, 1.0);
  }
`;

function ring(rx: number, rz: number, y: number, segs: number, color: THREE.Color, positions: number[], colors: number[]) {
  for (let i = 0; i <= segs; i++) {
    const a = (i / segs) * Math.PI * 2;
    positions.push(Math.cos(a) * rx, y, Math.sin(a) * rz);
    colors.push(color.r, color.g, color.b);
  }
}

export function createIsland(palette: { ground: string; sand: string; tree: string; accent: string }, biome: number) {
  const group = new THREE.Group();
  const grass = new THREE.Mesh(
    new THREE.CircleGeometry(1, 80),
    new THREE.ShaderMaterial({
      uniforms: {
        uGrass: { value: new THREE.Color(palette.ground) },
        uShade: { value: new THREE.Color(palette.tree) },
        uSand: { value: new THREE.Color(palette.sand) },
      },
      vertexShader: VERT,
      fragmentShader: FRAG,
    }),
  );
  grass.rotation.x = -Math.PI / 2;
  grass.scale.set(9.55, 9.15, 1);
  grass.position.y = 0.04;
  grass.receiveShadow = true;
  group.add(grass);

  const segs = 72;
  const positions: number[] = [];
  const colors: number[] = [];
  const sand = new THREE.Color(palette.sand);
  const rock = new THREE.Color(palette.tree).lerp(new THREE.Color("#6a5344"), biome === 9 ? 0.15 : 0.45);
  if (biome === 9) rock.set("#C5D5DE");
  if (biome === 10) rock.set("#E7B089");
  if (biome === 8) rock.set("#4E7A55");
  const lip = sand.clone().lerp(new THREE.Color("#ffffff"), biome === 9 ? 0.35 : 0.08);
  ring(9.45, 9.12, 0.03, segs, sand, positions, colors);
  ring(10.55, 10.15, -0.12, segs, lip, positions, colors);
  ring(12.4, 11.9, -1.65, segs, rock, positions, colors);

  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(positions);
  const col = new Float32Array(colors);
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
  const idx: number[] = [];
  const stride = segs + 1;
  for (let row = 0; row < 2; row++) {
    for (let i = 0; i < segs; i++) {
      const a = row * stride + i;
      const b = a + stride;
      idx.push(a, b, a + 1, b, b + 1, a + 1);
    }
  }
  geo.setIndex(idx);
  geo.computeVertexNormals();
  const skirt = new THREE.Mesh(
    geo,
    new THREE.MeshLambertMaterial({ vertexColors: true }),
  );
  skirt.receiveShadow = true;
  skirt.castShadow = true;
  group.add(skirt);

  const tuftMat = new THREE.MeshLambertMaterial({ color: palette.tree });
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2 + 0.3;
    const rad = 6.4 + (i % 3) * 0.7;
    const tuft = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.45, 5), tuftMat);
    tuft.position.set(Math.cos(a) * rad, 0.22, Math.sin(a) * rad * 0.94);
    tuft.castShadow = true;
    group.add(tuft);
  }
  return group;
}
