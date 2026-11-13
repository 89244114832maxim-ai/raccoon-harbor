import fs from "fs";

const lines = fs.readFileSync("/tmp/rh/pretty.js", "utf8").split("\n");
let src = [...lines.slice(69, 2880), ...lines.slice(4460)].join("\n");

if (!src.includes("var Et = re(),")) throw new Error("missing lz hook");
src = src.replace("var Et = re(),", "var Et = __lz,");

src = src.replace(
  `var Kn = \`rh.slot\`,
  qn = (e) => \`rh.save.\${e}\`,`,
  `var Kn = SLOT_KEY,
  qn = (e) => saveKey(e),`,
);

src = src.replaceAll("SDK.data?.get(`rh`)", "SDK.data?.get(CLOUD_KEY)");
src = src.replaceAll("SDK.data?.set(`rh`", "SDK.data?.set(CLOUD_KEY");

src = src.replace(
  `    tick() {
      if (!this.ctx || !this.musicGain || !this.musicOn || this.muted) return;
      let e = [261.63, 293.66, 329.63, 392, 440, 523.25, 392, 329.63],
        t = [0, 2, 4, 2, 5, 4, 2, 0, 3, 4, 7, 4, 2, 1, 0, 2];
      for (; this.nextNote < this.ctx.currentTime + 0.25; )
        this.pluck(this.nextNote, e[t[this.step % t.length]], 0.22, \`triangle\`),
          this.step % 2 == 0 &&
            this.pluck(this.nextNote, e[0] / 2, 0.18, \`sine\`),
          (this.nextNote += 0.6),
          this.step++;
    }`,
  `    tick() {
      scheduleIslandBeat(this);
    }`,
);

src = src.replace(
  `    chest() {
      this.tone(400, 0.1, \`triangle\`, 0.2, 300);
    }`,
  `    chest() {
      this.tone(400, 0.1, \`triangle\`, 0.2, 300);
    }
    splash() {
      this.tone(190, 0.16, \`sine\`, 0.16, -120);
      this.tone(520, 0.09, \`triangle\`, 0.1, 80);
    }`,
);

const rr = `function rr(e) {
  let t = e.lang;
  let d = "";
  for (let i = 0; i < D.length; i++) {
    let x = 50 + Math.sin(i * 0.9) * 18;
    let y = 36 + i * 78;
    d += (i ? " L " : "M ") + x + " " + y;
  }
  return \`<div class="archipelago"><svg class="arch-path" viewBox="0 0 100 \${D.length * 78}" preserveAspectRatio="none"><path d="\${d}" /></svg>\${D.map((n, r) => {
    let i = e.save.islands[n.id - 1],
      a = U(e.save, n.id),
      here = e.save.profile.currentIsland === n.id,
      left = 22 + Math.sin(r * 0.9) * 18,
      top = 12 + r * 78,
      stars = i.unlocked ? "★".repeat(a) + "☆".repeat(3 - a) : t === "ru" ? "Закрыто" : "Locked",
      act = i.unlocked ? (here ? "nav" : "travel") : "sail-ask",
      id = i.unlocked ? (here ? "island" : String(n.id)) : String(n.id);
    return \`<button class="isle \${here ? "here" : ""} \${i.unlocked ? "" : "locked"}" style="left:\${left}%;top:\${top}px" data-act="\${act}" data-id="\${id}">
      <span class="isle-blob" style="background:\${n.ground}"></span>
      <span><b>\${n.name[t]}</b><small>\${stars}</small></span>
      \${here ? \`<i class="isle-boat">⛵</i>\` : ""}
    </button>\`;
  }).join("")}</div>\`;
}`;

const ir = `function ir(e) {
  let t = e.lang,
    n = e.save.profile.currentIsland,
    r = It(e.save, n),
    i = e.save.islands[n - 1].crew.length,
    face = { bunny: "🐰", fox: "🦊", cat: "🐱", bear: "🐻", bird: "🦆", owl: "🦉", penguin: "🐧", pig: "🐷", goat: "🐐", crab: "🦀", capybara: "🐹", raccoon: "🦝" },
    perkLine = (helper, level) => {
      let s = 1 + 0.08 * (level - 1),
        p = helper.perk,
        bits = [],
        pct = (v) => Math.round(v * s * 100);
      if (p.serve) bits.push("+" + pct(p.serve) + "% " + (t === "ru" ? "скорость кассы" : "till speed"));
      if (p.speed) bits.push("+" + pct(p.speed) + "% " + (t === "ru" ? "скорость" : "speed"));
      if (p.prod) bits.push("+" + pct(p.prod) + "% " + (t === "ru" ? "производство" : "production"));
      if (p.income) bits.push("+" + pct(p.income) + "% " + (t === "ru" ? "доход" : "income"));
      if (p.lambda) bits.push("+" + pct(p.lambda) + "% " + (t === "ru" ? "гости" : "guests"));
      if (p.offline) bits.push("+" + pct(p.offline) + "% " + (t === "ru" ? "офлайн" : "offline"));
      if (p.cap) bits.push("+" + Math.max(1, Math.round((p.cap || 0) * s)) + " " + (t === "ru" ? "к рюкзаку" : "pack"));
      return bits.join(" · ");
    },
    a = e.save.helpers
      .map((h) => {
        let def = A(h.id);
        if (!def) return "";
        let slot = h.islandId === n
          ? (t === "ru" ? "На этом острове" : "On this island")
          : h.islandId
            ? (t === "ru" ? "Другой остров" : "Another island") + " · " + O(h.islandId).name[t]
            : (t === "ru" ? "Свободный слот" : "Open slot");
        return \`<article class="card crew-card rarity-\${def.rarity}">
      <div class="crew-top">
        <span class="avatar" style="background:\${def.color};border-color:\${def.accent}">\${face[def.look] || "✨"}</span>
        <div>
          <h3>\${def.name[t]}</h3>
          <p class="tags"><em class="badge rarity">\${C(t, "rarity." + def.rarity)}</em> <em class="badge role">\${C(t, "role." + def.role)}</em></p>
        </div>
      </div>
      <p class="perk">\${perkLine(def, h.level)}</p>
      <p class="muted">\${def.blurb[t]}</p>
      <p class="slot">\${slot} · \${C(t, "level", { n: h.level })}</p>
      <div class="row">
        \${h.islandId === n ? \`<button class="btn ghost" data-act="unassign" data-id="\${h.id}">\${C(t, "unassign")}</button>\` : \`<button class="btn" data-act="assign" data-id="\${h.id}">\${C(t, "assign")} · \${w(R(n, i + 1), t)} 🪙</button>\`}
        <button class="btn ghost" data-act="level-helper" data-id="\${h.id}">\${C(t, "levelup")} · \${tt(h.level)} 🐚</button>
      </div>
    </article>\`;
      })
      .join(""),
    o = Le.filter((def) => !e.save.helpers.some((h) => h.id === def.id))
      .slice(0, 8)
      .map((def) => \`<p class="muted crew-locked"><span class="avatar mini" style="background:\${def.color}">\${face[def.look] || "✨"}</span> \${def.name[t]} · \${C(t, "rarity." + def.rarity)} · \${perkLine(def, 1)}</p>\`)
      .join("");
  return \`<p class="slot-line">\${C(t, "slots", { used: i, max: r })}</p>\${a}<h3>\${C(t, "crew.none")}</h3>\${o}\`;
}`;

if (!/function rr\(e\) \{/.test(src)) throw new Error("no rr");
src = src.replace(/function rr\(e\) \{[\s\S]*?\nfunction ir\(e\) \{/, rr + "\nfunction ir(e) {");
src = src.replace(/function ir\(e\) \{[\s\S]*?\nfunction ar\(e\) \{/, ir + "\nfunction ar(e) {");

src = src.replace(
  "`<p class=\"body\">${C(t, `policy.body`)}</p>`",
  "`<p class=\"body\">${C(t, `policy.body`)}</p>${creditsHtml(t)}`",
);

src = src.replace(
  `    for (let r of e) {
      let e = t.project(r.x, 1.7, r.z);
      if (!e || this.labelBlocked(e.x, e.y)) continue;
      let i =
        r.kind === \`upgrade\`
          ? C(this.lang, \`chip.upgrade\`, {
              level: r.level,
              cost: Math.round(r.cost),
            })
          : C(this.lang, \`chip.build\`, { cost: Math.round(r.cost) });
      n.push({ ...e, text: i, kind: \`pad\` });
    }`,
  `    for (let r of e) r;`,
);

src = src.replace(
  "n.push({ ...r, text: e.item ? `🥕` : `💭`, kind: `bubble` });",
  "n.push({ ...r, text: e.item ? goodEmoji(e.item) : `💭`, kind: `bubble` });",
);

src = src.replace(
  "let a = e.item === `cabbage` ? `🥬` : e.item === `pumpkin` ? `🎃` : `🥕`;",
  "let a = goodEmoji(e.item);",
);

src = src.replace(
  `<button class="round" data-act="nav" data-id="quests" id="btn-quests" aria-label="quests">\${Q(\`gift\`)}</button>
          <button class="round" data-act="nav" data-id="calendar" id="btn-cal" aria-label="calendar">\${Q(\`cal\`)}</button>`,
  `<button class="round" data-act="nav" data-id="quests" id="btn-quests" aria-label="quests">\${Q(\`gift\`)}<small id="lbl-q"></small></button>
          <button class="round" data-act="nav" data-id="calendar" id="btn-cal" aria-label="calendar">\${Q(\`cal\`)}<small id="lbl-cal"></small></button>`,
);

src = src.replace(
  `<button class="round" data-act="nav" data-id="event" id="btn-event" aria-label="event">\${Q(\`event\`)}</button>
          <button class="round" data-act="nav" data-id="mail" id="btn-mail" aria-label="mail">\${Q(\`mail\`)}</button>`,
  `<button class="round" data-act="nav" data-id="event" id="btn-event" aria-label="event">\${Q(\`event\`)}<small id="lbl-ev"></small></button>
          <button class="round" data-act="nav" data-id="mail" id="btn-mail" aria-label="mail">\${Q(\`mail\`)}<small id="lbl-mail"></small></button>`,
);

src = src.replace(
  "let v = this.root.querySelector(`#joy`),",
  `let labels = t === "ru" ? ["Квесты", "Календарь", "Событие", "Почта"] : ["Quests", "Calendar", "Event", "Mail"];
    let lq = this.root.querySelector("#lbl-q");
    if (lq) lq.textContent = labels[0];
    let lc = this.root.querySelector("#lbl-cal");
    if (lc) lc.textContent = labels[1];
    let le = this.root.querySelector("#lbl-ev");
    if (le) le.textContent = labels[2];
    let lm = this.root.querySelector("#lbl-mail");
    if (lm) lm.textContent = labels[3];
    let v = this.root.querySelector(\`#joy\`),`,
);

src = src.replace(
  "this.consumeSim(s);",
  `this.consumeSim(s);
    if (this.runtime.moving && this.runtime.pz > 7.2 && Math.abs(this.runtime.px) < 2.1) {
      this.splashAcc = (this.splashAcc || 0) + t;
      if (this.splashAcc > 0.62) (this.splashAcc = 0), this.audio.splash();
    }`,
);

src = src.replace("let s = 1200 - (performance.now() - o);", "let s = 680 - (performance.now() - o);");

const tail = `var Mr = new ae();
window.addEventListener(\`error\`, (e) => {
  Mr.track(\`error\`, { message: String(e.message || \`error\`) });
}),
  jr().catch((e) => {
    console.error(e);
    let t = document.querySelector(\`#boot p\`);
    t && (t.textContent = e instanceof Error ? e.message : String(e));
  });`;

if (!src.includes("var Mr = new ae();")) throw new Error("missing boot tail");
src = src.replace(
  tail,
  `var Mr = new ae();
window.addEventListener(\`error\`, (e) => {
  Mr.track(\`error\`, { message: String(e.message || \`error\`) });
});
export function boot() {
  return jr().catch((e) => {
    console.error(e);
    let t = document.querySelector(\`#boot p\`);
    t && (t.textContent = e instanceof Error ? e.message : String(e));
  });
}
export { O, A, mt, ht, gt, _t, X, R, D, Le };`,
);

const header = `// @ts-nocheck
// Faithful port of the live harbor simulation, save codec, quests and DOM shell.
import { compressToUTF16, decompressFromUTF16 } from "lz-string";
import { scheduleIslandBeat } from "../audio/music";
import { CLOUD_KEY, SLOT_KEY, saveKey } from "../save/keys";
import { POLYFORK_CREDITS } from "../data/assets";

const __lz = { compressToUTF16, decompressFromUTF16 };
let wt = null;
export function setView(v) {
  wt = v;
}
function goodEmoji(id) {
  return (
    {
      carrot: "🥕",
      cabbage: "🥬",
      pumpkin: "🎃",
      fish: "🐟",
      smoked: "🍢",
      apple: "🍎",
      juice: "🧃",
      pie: "🥧",
      milk: "🥛",
      cheese: "🧀",
      honey: "🍯",
      candle: "🕯️",
      wheat: "🌾",
      flour: "🥣",
      bread: "🍞",
      coffee: "☕",
      cup: "☕",
      bun: "🥐",
      berry: "🫐",
      jam: "🍓",
      snow: "❄️",
      ice: "🍦",
      sorbet: "🍧",
      coconut: "🥥",
      cocktail: "🍹",
      cotton: "🍭",
      ticket: "🎟️",
      starfruit: "⭐",
      mooncake: "🍰",
      tea: "🍵",
    }[id] || "✨"
  );
}
function creditsHtml(lang) {
  const note =
    lang === "ru"
      ? "Низкополигональные пропы Polyfork (polyfork.dev) — лицензия CC BY 4.0 или Polyfork без обязательной атрибуции. Коммерческое использование разрешено; файлы не перепродаются как набор ассетов. Персонажи, касса и грядки нарисованы для Енотовой Гавани."
      : "Low-poly props from Polyfork (polyfork.dev) are CC BY 4.0 or Polyfork no-attribution. Commercial use is allowed; the files are not resold as an asset pack. Characters, the till and the beds were made for Raccoon Harbor.";
  const title = lang === "ru" ? "Авторы моделей" : "Model credits";
  const items = POLYFORK_CREDITS.map(
    ([name, id]) => \`<li>\${name} <span class="muted">\${id}</span></li>\`,
  ).join("");
  return \`<h3>\${title}</h3><p class="body">\${note}</p><ul class="credits">\${items}</ul>\`;
}

`;

fs.mkdirSync("src/sim", { recursive: true });
fs.writeFileSync("src/sim/engine.ts", header + src);
console.log("engine bytes", header.length + src.length);
