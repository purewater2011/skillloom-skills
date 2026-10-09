#!/usr/bin/env node
// Renders a composition HTML to an H.264 MP4, frame by frame and deterministically.
// Usage: node scripts/render.mjs composition.html --out clip.mp4 [--fps 30] [--width 1280 --height 720]
// Needs: playwright-core (npm i -D playwright-core) with a Chromium (npx playwright install chromium,
// or CHROMIUM_PATH=/path/to/chrome), and FFmpeg on PATH. Duration comes from <html data-duration>.
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const args = process.argv.slice(2);
const opt = (k, d) => {
  const i = args.indexOf(k);
  return i >= 0 ? args[i + 1] : d;
};
const input = args[0];
if (!input || input.startsWith("--")) {
  console.error("usage: render.mjs composition.html --out clip.mp4 [--fps 30] [--width 1280 --height 720]");
  process.exit(2);
}
const out = resolve(opt("--out", "clip.mp4"));
const fps = Number(opt("--fps", 30));
const width = Number(opt("--width", 1280));
const height = Number(opt("--height", 720));

async function loadPlaywright() {
  const candidates = [process.env.PLAYWRIGHT_CORE_PATH, "playwright-core", "playwright"].filter(Boolean);
  for (const c of candidates) {
    try {
      const m = await import(c.startsWith("/") ? pathToFileURL(join(c, "index.mjs")).href : c);
      return m.chromium ?? m.default?.chromium;
    } catch {}
  }
  console.error("playwright-core not found. Install it next to this project: npm i -D playwright-core && npx playwright install chromium");
  process.exit(3);
}

function chromePath() {
  if (process.env.CHROMIUM_PATH) return process.env.CHROMIUM_PATH;
  const known = [
    "/usr/bin/chromium", "/usr/bin/chromium-browser", "/usr/bin/google-chrome",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
  ];
  return known.find((p) => existsSync(p)); // undefined: use Playwright's own downloaded Chromium
}

try {
  execFileSync("ffmpeg", ["-version"], { stdio: "ignore" });
} catch {
  console.error("FFmpeg not found on PATH. Install it (brew install ffmpeg / apt install ffmpeg / winget install ffmpeg).");
  process.exit(4);
}

const chromium = await loadPlaywright();
let browser;
try {
  browser = await chromium.launch({ executablePath: chromePath(), args: ["--no-sandbox", "--disable-dev-shm-usage", "--font-render-hinting=none"] });
} catch (err) {
  console.error("Could not start Chromium. Run: npx playwright install chromium (or set CHROMIUM_PATH).", String(err).split("\n")[0]);
  process.exit(5);
}
const ctx = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1 });
await ctx.route(/^https?:/, (r) => r.abort()); // compositions must be self-contained
const page = await ctx.newPage();
await page.clock.install({ time: 0 });
await page.goto(pathToFileURL(resolve(input)).href, { waitUntil: "load" });
await page.evaluate(() => document.fonts && document.fonts.ready);
const duration = Number(await page.evaluate(() => document.documentElement.dataset.duration));
if (!duration || duration <= 0) {
  console.error("<html data-duration> is missing or invalid; set it to the total length in seconds.");
  await browser.close();
  process.exit(6);
}
const frames = mkdtempSync(join(tmpdir(), "render-"));
const total = Math.round(duration * fps);
for (let i = 0; i < total; i++) {
  const ms = (i * 1000) / fps;
  await page.evaluate((t) => {
    for (const a of document.getAnimations()) {
      a.pause();
      a.currentTime = t;
    }
  }, ms);
  writeFileSync(join(frames, "f" + String(i).padStart(5, "0") + ".jpg"), await page.screenshot({ type: "jpeg", quality: 92 }));
  await page.clock.runFor(1000 / fps);
  if (i % fps === 0) process.stdout.write("\rrendering " + (i / fps).toFixed(0) + "/" + duration.toFixed(0) + "s");
}
await browser.close();
mkdirSync(resolve(out, ".."), { recursive: true });
execFileSync("ffmpeg", ["-y", "-loglevel", "error", "-framerate", String(fps), "-i", join(frames, "f%05d.jpg"),
  "-c:v", "libx264", "-pix_fmt", "yuv420p", "-movflags", "+faststart", "-an", out], { stdio: "inherit" });
rmSync(frames, { recursive: true, force: true });
console.log("\nsaved " + out + " (" + total + " frames, " + duration + "s @ " + fps + "fps)");
