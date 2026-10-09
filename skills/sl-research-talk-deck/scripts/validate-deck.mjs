#!/usr/bin/env node
// Validates an HTML deck built from the SkillLoom deck engine. Zero dependencies.
// Usage: node scripts/validate-deck.mjs <deck.html> [--expected-slides N]
import { readFileSync } from "node:fs";

const args = process.argv.slice(2);
const file = args[0];
if (!file || file.startsWith("--")) {
  console.error("usage: validate-deck.mjs <deck.html> [--expected-slides N]");
  process.exit(2);
}
const expectIdx = args.indexOf("--expected-slides");
const expected = expectIdx >= 0 ? Number(args[expectIdx + 1]) : null;
let html;
try {
  html = readFileSync(file, "utf8");
} catch {
  console.error(`FAIL ${file}\n  - file not found`);
  process.exit(1);
}
const problems = [];

const slides = [...html.matchAll(/<section\b[^>]*class=["'][^"']*\bslide\b[^"']*["'][^>]*>/gi)];
const ids = slides.map((s) => s[0].match(/data-slide-id=["']([^"']+)["']/i)?.[1]);
if (slides.length === 0) problems.push('no <section class="slide"> found');
if (expected !== null && slides.length !== expected) problems.push(`expected ${expected} slides, found ${slides.length}`);
if (ids.some((id) => !id)) problems.push("every slide needs a data-slide-id");
const dupes = ids.filter((id, k) => id && ids.indexOf(id) !== k);
if (dupes.length) problems.push(`duplicate data-slide-id: ${[...new Set(dupes)].join(", ")}`);

const notesMatch = html.match(/window\.__SLIDE_NOTES__\s*=\s*(\{[\s\S]*?\});/);
if (!notesMatch) problems.push("missing window.__SLIDE_NOTES__");
else {
  try {
    const notes = JSON.parse(notesMatch[1]);
    for (const id of ids) if (id && !String(notes[id] ?? "").trim()) problems.push(`no speaker notes for ${id}`);
  } catch {
    problems.push("window.__SLIDE_NOTES__ is not valid JSON");
  }
}

const placeholders = [...new Set(html.match(/REPLACE_[A-Z0-9_]+/g) ?? [])];
if (placeholders.length) problems.push(`unfilled placeholders: ${placeholders.slice(0, 8).join(", ")}`);
if (!/@media\s+print/i.test(html)) problems.push("missing print stylesheet");
if (!/@page\s*\{[^}]*size:\s*(1600px\s+900px|1920px\s+1080px|16in\s+9in)/i.test(html)) problems.push("print stylesheet needs a 16:9 @page size (1600px 900px)");
if (/(?:src|href)\s*=\s*["']\s*(?:https?:)?\/\//i.test(html)) problems.push("external resource referenced (src/href)");
if (/@import\s+(?:url\()?["']?\s*(?:https?:)?\/\//i.test(html)) problems.push("external stylesheet imported");
if (/url\(\s*["']?\s*(?:https?:)?\/\//i.test(html)) problems.push("external url() in CSS");
if (/\b(localStorage|sessionStorage|indexedDB)\b/.test(html)) problems.push("storage APIs are not allowed (decks must work from file://)");
if (/\p{Extended_Pictographic}/u.test(html)) problems.push("emoji used (use inline SVG icons)");
const images = [...html.matchAll(/src=["'](data:image\/[^"']{64,})["']/gi)].map((m) => m[1].slice(0, 200));
if (new Set(images).size !== images.length) problems.push("the same embedded image is used twice");

if (problems.length) {
  console.error(`FAIL ${file}`);
  for (const p of [...new Set(problems)]) console.error(`  - ${p}`);
  process.exit(1);
}
console.log(`OK ${file} (${slides.length} slides)`);
