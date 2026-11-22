// Three.js hero: Te Atatū Peninsula as a Japanese village diorama, matte and low-poly.
// Loaded lazily by script.js on capable desktops; the SVG map stays as the fallback.
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.min.js";

const C = {
  sea: 0x3f6d8f, grass: 0x84a84a, earth: 0xa98a5c, stone: 0x8f8d82, plaster: 0xf1efe6,
  roof: 0x39434a, gold: 0xc99b3f, shu: 0xc2462c, wood: 0x6b4b32, thatch: 0xc7a35a,
  paddy: 0xa8d3dc, pine: 0x3e6a3a, sakura: 0xe8a9c5, cloud: 0xffffff,
};

const matte = color => new THREE.MeshStandardMaterial({ color, roughness: 1, metalness: 0, flatShading: true });

// small deterministic value noise for the ranges
function noise2(x, y) {
  const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return s - Math.floor(s);
}
function smoothNoise(x, y) {
  const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
  const a = noise2(xi, yi), b = noise2(xi + 1, yi), c = noise2(xi, yi + 1), d = noise2(xi + 1, yi + 1);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}
function fbm(x, y) {
  let f = 0, amp = .5;
  for (let i = 0; i < 5; i++) { f += amp * smoothNoise(x, y); x *= 2.03; y *= 2.03; amp *= .5; }
  return f;
}

function land(outlines) {
  const g = new THREE.Group();
  const top = matte(C.grass), side = matte(C.earth);
  for (const o of outlines) {
    const shape = new THREE.Shape(o.map(([x, z]) => new THREE.Vector2(x, -z)));
    const geo = new THREE.ExtrudeGeometry(shape, { depth: .16, bevelEnabled: true, bevelThickness: .05, bevelSize: .04, bevelSegments: 1 });
    geo.rotateX(-Math.PI / 2);
    const m = new THREE.Mesh(geo, [top, side]);
    m.position.y = -.06;
    m.receiveShadow = true;
    g.add(m);
  }
  return g;
}

function ranges() {
  // the Waitākere Ranges, west of the peninsula
  const geo = new THREE.PlaneGeometry(16, 34, 70, 140);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position, col = [];
  const low = new THREE.Color(0x6f9150), high = new THREE.Color(0x4d6b45), rock = new THREE.Color(0x9a9a88);
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i);
    const ridge = Math.max(0, 1 - Math.abs(x + 1.5) / 7);          // ridge line along z
    const peak = Math.exp(-((z + 2) ** 2) / 30) * 2.8;              // one tall summit
    const h = Math.max(0, (ridge * ridge) * (2.2 + peak) * (0.55 + fbm(x * .45 + 3, z * .45)) - .15);
    pos.setY(i, h);
    const c = h > 2.6 ? rock : low.clone().lerp(high, Math.min(1, h / 2.6));
    col.push(c.r, c.g, c.b);
  }
  geo.setAttribute("color", new THREE.Float32BufferAttribute(col, 3));
  geo.computeVertexNormals();
  const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1, metalness: 0, flatShading: true }));
  m.position.set(-15.5, -.1, -1);
  m.receiveShadow = true;
  return m;
}

function castle([x, z]) {
  const g = new THREE.Group();
  const tier = (w, h, y) => {
    const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, w * .8), new THREE.MeshStandardMaterial({ color: C.plaster, roughness: 1, flatShading: true, emissive: 0x6a675e }));
    b.position.y = y + h / 2;
    return b;
  };
  const roof = (w, y) => {
    const r = new THREE.Mesh(new THREE.CylinderGeometry(w * .42, w * .86, w * .28, 4, 1), matte(C.roof));
    r.rotation.y = Math.PI / 4;
    r.scale.z = .8;
    r.position.y = y + w * .14;
    return r;
  };
  const base = new THREE.Mesh(new THREE.CylinderGeometry(.34, .5, .3, 4, 1), matte(C.stone));
  base.rotation.y = Math.PI / 4;
  base.position.y = .15;
  g.add(base);
  let y = .3;
  [[.5, .2], [.38, .17], [.27, .15]].forEach(([w, h]) => {
    g.add(tier(w, h, y));
    y += h;
    g.add(roof(w + .14, y - .02));
    y += (w + .14) * .2;
  });
  const fin = new THREE.Mesh(new THREE.ConeGeometry(.03, .08, 5), matte(C.gold));
  fin.position.y = y + .06;
  g.add(fin);
  g.traverse(o => { o.castShadow = true; o.receiveShadow = true; });
  g.position.set(x, .1, z);
  g.rotation.y = .5;
  g.scale.setScalar(.62);
  return g;
}

function torii(x, z) {
  const g = new THREE.Group(), m = matte(C.shu);
  [-.07, .07].forEach(px => {
    const p = new THREE.Mesh(new THREE.CylinderGeometry(.012, .014, .18, 6), m);
    p.position.set(px, .09, 0);
    g.add(p);
  });
  const top = new THREE.Mesh(new THREE.BoxGeometry(.22, .025, .03), m);
  top.position.y = .19;
  const low = new THREE.Mesh(new THREE.BoxGeometry(.17, .015, .02), m);
  low.position.y = .15;
  g.add(top, low);
  g.position.set(x, .1, z);
  g.rotation.y = .6;
  g.traverse(o => { o.castShadow = true; });
  return g;
}

function instanced(geo, mat, items, place) {
  const mesh = new THREE.InstancedMesh(geo, mat, items.length);
  const o = new THREE.Object3D();
  items.forEach((it, i) => { place(o, it, i); o.updateMatrix(); mesh.setMatrixAt(i, o.matrix); });
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function village(d) {
  const g = new THREE.Group();
  const rnd = i => (Math.sin(i * 91.7) + 1) / 2;

  // pines: trunk + two cones
  const trunkGeo = new THREE.CylinderGeometry(.012, .016, .08, 5);
  trunkGeo.translate(0, .04, 0);
  g.add(instanced(trunkGeo, matte(C.wood), d.pines, (o, [x, z], i) => { o.position.set(x, .1, z); o.scale.setScalar(.8 + rnd(i) * .6); }));
  const coneA = new THREE.ConeGeometry(.09, .16, 6); coneA.translate(0, .14, 0);
  const coneB = new THREE.ConeGeometry(.065, .13, 6); coneB.translate(0, .23, 0);
  [coneA, coneB].forEach(geo => g.add(instanced(geo, matte(C.pine), d.pines, (o, [x, z], i) => {
    o.position.set(x, .1, z); o.scale.setScalar(.8 + rnd(i) * .6); o.rotation.y = rnd(i + 3) * 3;
  })));

  // sakura: trunk + three blossom blobs
  g.add(instanced(trunkGeo, matte(C.wood), d.sakura, (o, [x, z]) => { o.position.set(x, .1, z); o.scale.set(1.2, 1.4, 1.2); }));
  const blob = new THREE.IcosahedronGeometry(.075, 0);
  const blobs = d.sakura.flatMap(([x, z], i) => [[x, z, 0, .2], [x + .05, z + .02, 1, .17], [x - .04, z - .03, 2, .18]].map(b => [...b, i]));
  g.add(instanced(blob, matte(C.sakura), blobs, (o, [x, z, k, y, i]) => {
    o.position.set(x, .1 + y, z); o.scale.setScalar(.85 + rnd(i * 3 + k) * .5); o.rotation.set(k, i, 0);
  }));

  // thatched houses: dark timber box + thatch prism
  const wall = new THREE.BoxGeometry(.16, .08, .11); wall.translate(0, .04, 0);
  g.add(instanced(wall, matte(C.wood), d.houses, (o, [x, z, r]) => { o.position.set(x, .1, z); o.rotation.y = r; }));
  const roofGeo = new THREE.CylinderGeometry(.075, .075, .2, 3, 1);
  roofGeo.rotateZ(Math.PI / 2);
  roofGeo.scale(1, 1.2, 1.15);
  roofGeo.translate(0, .115, 0);
  g.add(instanced(roofGeo, matte(C.thatch), d.houses, (o, [x, z, r]) => { o.position.set(x, .1, z); o.rotation.y = r; }));

  // rice paddies: a terraced cluster, each tier a step higher than the one in front
  const tierH = i => .1 + i * .04;
  const wallGeo = new THREE.BoxGeometry(.3, 1, .24); wallGeo.translate(0, .5, 0);
  g.add(instanced(wallGeo, matte(C.earth), d.paddies, (o, [x, z], i) => { o.position.set(x, .08, z); o.scale.y = tierH(i) - .08 + .012; o.rotation.y = .35; }));
  const water = new THREE.MeshStandardMaterial({ color: C.paddy, roughness: .55, metalness: 0, flatShading: true, emissive: 0x2a4048 });
  const bedGeo = new THREE.BoxGeometry(.26, .01, .2);
  g.add(instanced(bedGeo, water, d.paddies, (o, [x, z], i) => { o.position.set(x, tierH(i) + .008, z); o.rotation.y = .35; }));

  // river stones along the creek banks
  if (d.rocks) g.add(instanced(new THREE.DodecahedronGeometry(.05, 0), matte(0x6c6a62), d.rocks, (o, [x, z, sc], i) => {
    o.position.set(x, .015, z); o.scale.set(sc * 1.3, sc * .75, sc); o.rotation.set(i, i * 2, 0);
  }));
  return g;
}

function bridge([x, z, len]) {
  const span = Math.max(len * 1.6, .32);
  const g = new THREE.Group(), m = matte(C.shu);
  const deck = new THREE.Mesh(new THREE.TorusGeometry(span / 2, .018, 5, 18, Math.PI), m);
  const rail = deck.clone();
  rail.position.z = .05;
  deck.position.z = -.05;
  g.add(deck, rail);
  for (let i = 1; i < 6; i++) {
    const a = Math.PI * i / 6;
    const post = new THREE.Mesh(new THREE.BoxGeometry(.012, .05, .11), m);
    post.position.set(Math.cos(a) * span / 2, Math.sin(a) * span / 2 * .6 + .02, 0);
    g.add(post);
  }
  g.scale.y = .6;
  g.position.set(x, .02, z);
  g.traverse(o => { o.castShadow = true; });
  return g;
}

function flagTexture(kanji) {
  const c = document.createElement("canvas");
  c.width = 64; c.height = 160;
  const ctx = c.getContext("2d");
  ctx.fillStyle = "#c2462c"; ctx.fillRect(0, 0, 64, 160);
  ctx.strokeStyle = "#1f1c19"; ctx.lineWidth = 6; ctx.strokeRect(3, 3, 58, 154);
  ctx.fillStyle = "#fbf7ef";
  ctx.font = '44px "Dela CJK", sans-serif';
  ctx.textAlign = "center"; ctx.textBaseline = "middle";
  ctx.fillText(kanji, 32, 62);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function banner([x, z], kanji) {
  const g = new THREE.Group();
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(.01, .01, .55, 5), matte(C.roof));
  pole.position.y = .275;
  const flag = new THREE.Mesh(new THREE.PlaneGeometry(.13, .32), new THREE.MeshStandardMaterial({ map: flagTexture(kanji), roughness: 1, side: THREE.DoubleSide }));
  flag.position.set(.075, .36, 0);
  const knob = new THREE.Mesh(new THREE.SphereGeometry(.022, 8, 6), matte(C.gold));
  knob.position.y = .56;
  g.add(pole, flag, knob);
  g.position.set(x, .1, z);
  g.traverse(o => { o.castShadow = true; });
  g.userData.flag = flag;
  return g;
}

function clouds() {
  const g = new THREE.Group(), m = new THREE.MeshStandardMaterial({ color: C.cloud, roughness: 1, flatShading: true, emissive: 0x8a9298 });
  const geo = new THREE.IcosahedronGeometry(1, 1);
  [[-11, 3.6, -7, 1.2], [-9, 4.3, 3, 1], [-14, 4.8, -2, 1.5], [-7, 3.9, -12, 1.1], [-12, 3.2, 7, .9]].forEach(([x, y, z, s], k) => {
    const c = new THREE.Group();
    for (let i = 0; i < 5; i++) {
      const b = new THREE.Mesh(geo, m);
      b.position.set((i - 2) * .9 * s, Math.sin(i * 2.1 + k) * .25 * s, Math.cos(i * 1.7 + k) * .4 * s);
      b.scale.set(1.1 * s, .55 * s, .8 * s);
      c.add(b);
    }
    c.position.set(x, y, z);
    g.add(c);
  });
  return g;
}

export function start(host, data, { labels, reduced }) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  host.prepend(renderer.domElement);

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0xd6e4e6, 7, 30);

  const camera = new THREE.PerspectiveCamera(38, 1, .05, 120);
  // low over the harbour, east of the castle, looking west to the Waitākere Ranges
  const target = new THREE.Vector3(-1.7, .45, -1.15);
  const home = new THREE.Vector3(3.5, 1.55, .15);

  scene.add(new THREE.HemisphereLight(0xe4f0f8, 0x6c7a4c, 1.15));
  const sun = new THREE.DirectionalLight(0xfff0d4, 2.1);
  sun.position.set(7, 11, 5);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -4, right: 4, top: 4, bottom: -4, near: 1, far: 30 });
  sun.shadow.bias = -.0008;
  scene.add(sun);

  // sea with a slow swell, displaced in the shader so the CPU stays idle
  const uTime = { value: 0 };
  const seaMat = new THREE.MeshStandardMaterial({ color: C.sea, roughness: .95, metalness: 0, flatShading: true });
  seaMat.onBeforeCompile = s => {
    s.uniforms.uTime = uTime;
    s.vertexShader = "uniform float uTime;\n" + s.vertexShader.replace("#include <begin_vertex>",
      "#include <begin_vertex>\ntransformed.z += sin(position.x * 1.7 + uTime) * .025 + cos(position.y * 1.3 + uTime * .8) * .025;");
  };
  const sea = new THREE.Mesh(new THREE.PlaneGeometry(90, 90, 120, 120), seaMat);
  sea.rotation.x = -Math.PI / 2;
  sea.position.y = -.02;
  sea.receiveShadow = true;
  scene.add(sea);

  scene.add(land(data.outlines), ranges(), castle(data.castle), village(data), clouds());
  const [cx, cz] = data.castle;
  scene.add(torii(cx - .25, cz + .45));
  if (data.bridge) scene.add(bridge(data.bridge));

  const kanji = { research: "研", spie: "光", command: "将", languages: "語", tutoring: "塾", home: "郷" };
  const banners = Object.entries(data.banners3d || data.banners).map(([id, p]) => {
    const b = banner(p, kanji[id]);
    scene.add(b);
    return { id, obj: b, anchor: new THREE.Vector3(p[0], .72, p[1]), el: labels.querySelector(`[data-route="${id}"]`) };
  });

  // pointer parallax: a commander's slow glance, never a spin
  const look = { x: 0, y: 0 };
  host.addEventListener("pointermove", e => {
    const r = host.getBoundingClientRect();
    look.x = (e.clientX - r.left) / r.width - .5;
    look.y = (e.clientY - r.top) / r.height - .5;
  });

  let w = 0, h = 0;
  function resize() {
    w = host.clientWidth; h = host.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    // narrower screens step the camera back so the peninsula stays in frame
    camera.fov = w / h < 1.3 ? 48 : 38;
    camera.updateProjectionMatrix();
  }
  new ResizeObserver(resize).observe(host);
  resize();

  const v = new THREE.Vector3();
  function frame(t) {
    const s = t / 1000;
    uTime.value = s * .9;
    const sway = reduced ? 0 : Math.sin(s * .12) * .18;
    camera.position.set(home.x + look.x * .25, home.y - look.y * .15, home.z + sway + look.x * .35);
    camera.lookAt(target);
    banners.forEach((b, i) => {
      if (!reduced) b.obj.userData.flag.rotation.y = Math.sin(s * 1.4 + i) * .18;
      v.copy(b.anchor).project(camera);
      if (b.el) {
        b.el.style.transform = `translate(${(v.x * .5 + .5) * w}px, ${(-v.y * .5 + .5) * h}px)`;
        b.el.hidden = v.z > 1 || Math.abs(v.x) > .95 || Math.abs(v.y) > .95;
      }
    });
    renderer.render(scene, camera);
  }

  // only animate while the hero is on screen and the tab is visible
  let visible = true, raf = 0;
  const loop = t => { frame(t); raf = requestAnimationFrame(loop); };
  const sync = () => {
    cancelAnimationFrame(raf);
    if (reduced) frame(0);
    else if (visible && !document.hidden) raf = requestAnimationFrame(loop);
  };
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; sync(); }).observe(host);
  document.addEventListener("visibilitychange", sync);
  frame(0);
  sync();
}
