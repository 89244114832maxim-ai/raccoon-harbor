import fs from "fs";
import path from "path";

const distHtml = fs.readFileSync("dist/index.html", "utf8");
fs.writeFileSync("index.html", distHtml);

const from = path.join("dist", "assets");
const to = path.join("assets");
fs.mkdirSync(to, { recursive: true });
const produced = new Set();
for (const name of fs.readdirSync(from)) {
  fs.copyFileSync(path.join(from, name), path.join(to, name));
  produced.add(name);
}

for (const name of fs.readdirSync(to)) {
  const full = path.join(to, name);
  if (fs.statSync(full).isDirectory()) continue;
  if (produced.has(name)) continue;
  if (/\.(js|css|woff2?|map)$/.test(name)) fs.unlinkSync(full);
}

console.log("published", [...produced].join(", "));
