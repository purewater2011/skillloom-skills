#!/usr/bin/env node
// Validates a rendered video with ffprobe: codec, frame rate, duration and (optionally) size.
// Usage: node scripts/validate-video.mjs <file.mp4> [--min-seconds N] [--max-seconds N] [--fps 30] [--width W --height H]
import { execFileSync } from "node:child_process";

const args = process.argv.slice(2);
const file = args[0];
const opt = (k, d) => {
  const i = args.indexOf(k);
  return i >= 0 ? Number(args[i + 1]) : d;
};
if (!file || file.startsWith("--")) {
  console.error("usage: validate-video.mjs <file.mp4> [--min-seconds N] [--max-seconds N] [--fps 30] [--width W --height H]");
  process.exit(2);
}
let info;
try {
  info = JSON.parse(execFileSync("ffprobe", ["-v", "error", "-print_format", "json", "-show_format", "-show_streams", file], { encoding: "utf8" }));
} catch {
  console.error("ffprobe failed: is FFmpeg installed and is the file a valid video?");
  process.exit(1);
}
const v = info.streams.find((s) => s.codec_type === "video");
const problems = [];
const duration = Number(info.format.duration);
if (!v) problems.push("no video stream");
else {
  if (v.codec_name !== "h264") problems.push("codec " + v.codec_name + ", expected h264");
  if (v.pix_fmt && v.pix_fmt !== "yuv420p") problems.push("pixel format " + v.pix_fmt + ", expected yuv420p (plays everywhere)");
  const [n, d] = String(v.avg_frame_rate).split("/").map(Number);
  const fps = d ? n / d : n;
  const want = opt("--fps", 30);
  if (Math.abs(fps - want) > 1) problems.push("fps " + fps.toFixed(2) + ", expected " + want);
  const w = opt("--width", 0);
  const h = opt("--height", 0);
  if (w && v.width !== w) problems.push("width " + v.width + ", expected " + w);
  if (h && v.height !== h) problems.push("height " + v.height + ", expected " + h);
  if (v.width % 2 || v.height % 2) problems.push("odd dimensions " + v.width + "x" + v.height);
}
if (duration < opt("--min-seconds", 0)) problems.push("duration " + duration.toFixed(2) + "s is too short");
if (duration > opt("--max-seconds", 3600)) problems.push("duration " + duration.toFixed(2) + "s is too long");
if (problems.length) {
  console.error("FAIL " + file);
  for (const p of problems) console.error("  - " + p);
  process.exit(1);
}
console.log("OK " + file + " (" + duration.toFixed(2) + "s, " + v.width + "x" + v.height + ")");
