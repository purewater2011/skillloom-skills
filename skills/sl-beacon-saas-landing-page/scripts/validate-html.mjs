#!/usr/bin/env node
// Validates a self-contained HTML page or section. Zero dependencies.
// Usage: node scripts/validate-html.mjs <file.html> [--allow-host example.com]
import { readFileSync } from "node:fs";

const args = process.argv.slice(2);
const file = args[0];
if (!file || file.startsWith("--")) {
  console.error("usage: validate-html.mjs <file.html> [--allow-host host]");
  process.exit(2);
}
const allow = new Set(args.flatMap((a, i) => (a === "--allow-host" ? [args[i + 1]] : [])));
const html = readFileSync(file, "utf8");
const problems = [];
const strip = (s) => s.replace(/<[^>]+>/g, "").replace(/&[a-z#0-9]+;/gi, " ").trim();

if (!/^\s*<!doctype html>/i.test(html)) problems.push("missing <!doctype html>");
if (!/<html[^>]+lang=["'][a-z]/i.test(html)) problems.push("missing <html lang>");
if (!/<meta[^>]+charset=/i.test(html)) problems.push("missing <meta charset>");
if (!/<meta[^>]+name=["']viewport["']/i.test(html)) problems.push("missing <meta name=viewport>");
if (!/<title>[^<]{3,}<\/title>/i.test(html)) problems.push("missing or empty <title>");
const h1 = (html.match(/<h1\b/gi) || []).length;
if (h1 !== 1) problems.push(`expected exactly one <h1>, found ${h1}`);
if (/\bREPLACE[_A-Z0-9]*\b/.test(html)) problems.push("unreplaced REPLACE_ placeholder");
if (/lorem ipsum|dolor sit amet/i.test(html)) problems.push("lorem ipsum filler text");
// © ® ™ are Extended_Pictographic too, but they are typography, not emoji.
if (/(?![\u00a9\u00ae\u2122])\p{Extended_Pictographic}/u.test(html)) problems.push("emoji used (use inline SVG icons)");
for (const m of html.matchAll(/(?:src|href|action|poster)=["'](?:https?:)?\/\/([^/"']+)/gi)) {
  if (!allow.has(m[1])) problems.push(`external resource: ${m[1]}`);
}
for (const m of html.matchAll(/url\(\s*["']?(?:https?:)?\/\/([^/"')]+)/gi)) if (!allow.has(m[1])) problems.push(`external url(): ${m[1]}`);
if (/@import\b/i.test(html)) problems.push("@import is not allowed (inline all CSS)");
if (/\blocalStorage\b|\bsessionStorage\b|\bindexedDB\b|\bfetch\s*\(|XMLHttpRequest|navigator\.sendBeacon|document\.cookie/.test(html))
  problems.push("uses storage or network APIs (must run offline in a sandboxed iframe)");
if (/\son[a-z]+\s*=\s*["']/i.test(html)) problems.push("inline event handler attribute (use addEventListener in a <script>)");
for (const m of html.matchAll(/<img\b[^>]*>/gi)) if (!/\balt=/i.test(m[0])) problems.push("img without alt");
for (const m of html.matchAll(/<button\b([^>]*)>([\s\S]*?)<\/button>/gi))
  if (!strip(m[2]) && !/aria-label=["'][^"']+/i.test(m[1])) problems.push("button without text or aria-label");
for (const m of html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)) {
  if (!strip(m[2]) && !/aria-label=["'][^"']+/i.test(m[1])) problems.push("link without text or aria-label");
  if (!/\bhref=/i.test(m[1])) problems.push("link without href");
}
for (const m of html.matchAll(/<input\b([^>]*)>/gi)) {
  const id = m[1].match(/\bid=["']([^"']+)/)?.[1];
  const labelled = /aria-label=/i.test(m[1]) || (id && new RegExp(`<label[^>]+for=["']${id}["']`).test(html));
  if (!labelled && !/type=["'](hidden|submit|button)["']/i.test(m[1])) problems.push("input without a <label for> or aria-label");
}
const ids = [...html.matchAll(/\sid=["']([^"']+)["']/g)].map((m) => m[1]);
const dup = ids.filter((id, i) => ids.indexOf(id) !== i);
if (dup.length) problems.push(`duplicate id: ${[...new Set(dup)].join(", ")}`);
if (html.length > 400_000) problems.push("file is larger than 400 KB");

if (problems.length) {
  console.error(`FAIL ${file}`);
  for (const p of [...new Set(problems)]) console.error(`  - ${p}`);
  process.exit(1);
}
console.log(`OK ${file}`);
