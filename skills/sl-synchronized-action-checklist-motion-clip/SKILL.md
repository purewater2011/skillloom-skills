---
name: sl-synchronized-action-checklist-motion-clip
description: Create a restrained, editorial motion b-roll clip that makes a publishing checklist feel synchronized and deliberate. Use this skill when an AI coding agent needs a style-locked, series-consistent HTML/CSS animation for social posts, educational explainers, or workflow content. The output is rendered locally as an editable MP4 with clear timing, coordinated checklist motion, and a deep dark typographic system.
---

# Synchronized Action Checklist Motion Clip

A minimalist wide-format motion clip where publishing actions lock into place in a single coordinated rhythm.

Style: **Synchronized Ink Blocks**. Quietly confident editorial motion with precise blocks, generous negative space, and one vivid signal color. Follow `references/style-guide.md` exactly.

## Use this skill when

- Social posts explaining a repeatable publishing routine
- Educational clips that turn process steps into visual rhythm
- Series content that needs a consistent motion language

## Do not use

- Long-form tutorials that need screenshots, narration, or dense procedural detail
- Product interfaces, recognizable software replicas, or brand-specific marketing animations
- To reproduce another company's brand, logo, product UI or copyrighted characters.

## Inputs

- The publishing action sequence, with 2 to 4 short checklist items
- The intended social channel or aspect-safe crop context
- Optional closing line or series label
- Preferred clip duration between 6 and 12 seconds

If something essential is missing, ask one short question before starting. Never invent facts, numbers, quotes or customer names; mark gaps as `[needs source]`.

## Workflow

1. Read `references/motion-contract.md` and `references/style-guide.md`. Their rules are fixed for this skill.
2. Fill `references/scene-map.md` from the brief (3-5 scenes, 6-12 s). Never invent product numbers, names or quotes; ask for anything required that is missing.
3. Copy `references/composition.html` to `clip/composition.html`. Keep the stage, the ambient layer, the progress line and the fit script.
4. Delete the example scenes you do not use, set each scene's text, `data-start`, `data-duration` and the absolute `animation-delay` values, and set `<html data-duration>` to the sum of scene durations.
5. Apply the style tokens in the `:root` block exactly as given in the style guide. Do not add colors or webfonts.
6. Open `clip/composition.html` in a browser to preview; it plays in real time. Reload to replay.
7. Render: `node scripts/render.mjs clip/composition.html --out clip.mp4 --fps 30` (install once: `npm i -D playwright-core && npx playwright install chromium`; FFmpeg must be on PATH).
8. Run the validator below and fix every problem it reports.
9. Extract stills around each cut (`ffmpeg -ss <t> -i clip.mp4 -frames:v 1 cut.png`) and check that nothing is cropped, overlapping or frozen.
10. Run the validator and fix every problem it reports:

   ```bash
   node scripts/validate-video.mjs clip.mp4 --min-seconds 6 --max-seconds 12
   ```

## What makes this excellent

- Open with a single editorial statement before the checklist appears, leaving clear negative space around the type.
- Use one consistent left edge for the title, checklist rows, status labels, and closing line.
- Reveal checklist rows in a shared rhythmic beat, then resolve them together into completed states rather than checking them independently.
- Make the active accent travel through the rows as a small block or tick, keeping its motion legible at social-feed size.
- Hold the completed checklist long enough for a viewer to scan every item before transitioning to the final line.
- Keep all copy short enough to remain on one line in a 1280px-wide render, with no more than four checklist rows.
- End on a clean editorial lockup with the same alignment system and no added logo or product reference.

## Output contract

- `clip.mp4`: H.264, 30 fps, 1280x720, 6-12 seconds.
- `clip/composition.html`: the editable single-file composition that produced it (re-render any time with `scripts/render.mjs`).
- A hand-off note: the filled scene map, total duration, anything left as a placeholder, and the validator output.
- Render a wide MP4 between 6 and 12 seconds with three to six purposeful scenes and no external assets.
- Deliver editable HTML and CSS alongside the rendered video so copy, timing, colors, and checklist rows can be changed.
- Maintain synchronized row timing, stable typography, and a clean final hold suitable for social publishing.

## Reference demo and agent run

The preview is a reference render of the bundled composition with sample copy. In a real run the agent rewrites the scenes from the user's brief and assets, re-times the composition and renders a fresh MP4 that meets the output contract above.

## Failure rules

- Never hand over a render that fails the validator.
- If the user's screenshots are low resolution, rebuild the surface in HTML instead of upscaling them.
- Music and footage must be supplied and licensed by the user; never download assets.

---

From [SkillLoom](https://skillloom.dev) — see [Synchronized Action Checklist Motion Clip](https://skillloom.dev/skills/sl-synchronized-action-checklist-motion-clip) for the rendered preview and the verification score.
