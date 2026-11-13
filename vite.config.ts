import fs from "fs";
import path from "path";
import { defineConfig } from "vite";

const staticRoots = ["/assets/glb/", "/assets/polyfork/", "/fonts/", "/favicon.svg"];

function serveRepoStatic() {
  return {
    name: "serve-repo-static",
    configureServer(server: { middlewares: { use: Function } }) {
      server.middlewares.use((req: { url?: string }, res: { setHeader: Function; end: Function }, next: Function) => {
        const url = decodeURIComponent((req.url ?? "").split("?")[0]);
        const hit = staticRoots.some((prefix) => url === prefix || url.startsWith(prefix));
        if (!hit) return next();
        const file = path.join(process.cwd(), url);
        if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) return next();
        const ext = path.extname(file);
        const types: Record<string, string> = {
          ".glb": "model/gltf-binary",
          ".svg": "image/svg+xml",
          ".css": "text/css",
          ".woff2": "font/woff2",
        };
        res.setHeader("Content-Type", types[ext] ?? "application/octet-stream");
        fs.createReadStream(file).pipe(res as unknown as NodeJS.WritableStream);
      });
    },
  };
}

export default defineConfig({
  base: "./",
  publicDir: false,
  plugins: [serveRepoStatic()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    assetsDir: "assets",
  },
});
