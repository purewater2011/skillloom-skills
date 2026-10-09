---
name: sl-device-canvas-product-story-film
description: Create a polished social product-launch film from a concise product brief, using a distinctive device-canvas visual story. The film moves from a recognizable user problem through interface moments and evidence to a clear end card, with a chromatic split reveal, oversized cursor, and CSS-perspective device slab. Use this skill when a founder or product marketer needs a locally rendered, shareable launch or demo video without generated media.
---

# Device-Canvas Product Story Film

Build a short, evidence-first product story around a device canvas that splits, tilts, and opens into the product interface.

Style: **Split Canvas Reveal**. A cool, precise studio canvas turns one product interaction into a bold, dimensional reveal. Follow `references/style-guide.md` exactly.

## Use this skill when

- Launching a software product or feature on social channels.
- Showing one valuable interface interaction without live-action production.

## Do not use

- Films that require generated footage, live-action production, or licensed music.
- Product demos that depend on complex real-time software behavior unavailable in a composed interface.
- To reproduce another company's brand, logo, product UI or copyrighted characters.

## Inputs

- Product name, one-sentence promise, and preferred call to action
- Target audience and the specific problem the launch film should dramatize
- Product interface details or a concise description of the key interaction
- Verified proof point, source, and any wording or claims that must be avoided

If something essential is missing, ask one short question before starting. Never invent facts, numbers, quotes or customer names; mark gaps as `[needs source]`.

## Workflow

1. Read `references/motion-contract.md` and `references/style-guide.md`. Their rules are fixed for this skill.
2. Fill `references/scene-map.md` from the brief (4-8 scenes, 20-45 s). Never invent product numbers, names or quotes; ask for anything required that is missing.
3. Copy `references/composition.html` to `film/composition.html`. Keep the stage, the ambient layer, the progress line and the fit script.
4. Delete the example scenes you do not use, set each scene's text, `data-start`, `data-duration` and the absolute `animation-delay` values, and set `<html data-duration>` to the sum of scene durations.
5. Apply the style tokens in the `:root` block exactly as given in the style guide. Do not add colors or webfonts.
6. Open `film/composition.html` in a browser to preview; it plays in real time. Reload to replay.
7. Render: `node scripts/render.mjs film/composition.html --out film.mp4 --fps 30` (install once: `npm i -D playwright-core && npx playwright install chromium`; FFmpeg must be on PATH).
8. Run the validator below and fix every problem it reports.
9. Extract stills around each cut (`ffmpeg -ss <t> -i film.mp4 -frames:v 1 cut.png`) and check that nothing is cropped, overlapping or frozen.
10. Run the validator and fix every problem it reports:

   ```bash
   node scripts/validate-video.mjs film.mp4 --min-seconds 20 --max-seconds 45
   ```

## What makes this excellent

- Build the hook from the audience's real friction, then make the first device reveal visually answer that friction.
- Give the before state and after state distinct crimson and teal fields that meet in one crisp split reveal.
- Stage the device as a CSS-perspective slab and keep its interface readable at the chosen wide canvas size.
- Use the oversized cursor for one deliberate interaction; show the resulting product state before cutting away.
- Tie every metric or testimonial to supplied evidence, and label illustrative or unverified information instead of presenting it as fact.
- Reserve the final scene for the product name, one benefit line, and the supplied call to action.

## Output contract

- `film.mp4`: H.264, 30 fps, 1280x720, 20-45 seconds.
- `film/composition.html`: the editable single-file composition that produced it (re-render any time with `scripts/render.mjs`).
- A hand-off note: the filled scene map, total duration, anything left as a placeholder, and the validator output.
- Deliver a wide-canvas MP4 rendered locally from a multi-scene HTML/CSS composition.
- Keep the story between 20 and 45 seconds, with a readable end card as the final scene.

## Reference demo and agent run

The preview is a reference render of the bundled composition with sample copy. In a real run the agent rewrites the scenes from the user's brief and assets, re-times the composition and renders a fresh MP4 that meets the output contract above.

## Failure rules

- Never hand over a render that fails the validator.
- If the user's screenshots are low resolution, rebuild the surface in HTML instead of upscaling them.
- Music and footage must be supplied and licensed by the user; never download assets.

---

From [SkillLoom](https://skillloom.dev) — see [Device-Canvas Product Story Film](https://skillloom.dev/skills/sl-device-canvas-product-story-film) for the rendered preview and the verification score.
