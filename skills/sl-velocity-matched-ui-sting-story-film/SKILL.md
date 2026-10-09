---
name: sl-velocity-matched-ui-sting-story-film
description: Create a 20–45 second narrative brand film from HTML and CSS, using a saturated grid canvas, kinetic interface fragments, and velocity-matched cuts. Use this skill when a product-marketing or brand team needs a concise social video that turns a software workflow into a memorable visual story with a hook, tension, product moments, proof, and a polished end card.
---

# Velocity-Matched UI Sting Story Film

A high-energy narrative UI sting film that makes a product feel fast, focused, and inevitable through synchronized interface motion and velocity-matched scene transitions.

Style: **Kinetic Grid Signal**. A sharp, saturated product story where every interface movement accelerates the narrative and resolves into confident proof. Follow `references/style-guide.md` exactly.

## Use this skill when

- Product launches that need a concise, ownable motion identity
- Social campaigns explaining a workflow improvement in under one minute
- Software brands with a measurable outcome and a few visualizable capabilities

## Do not use

- Long-form product demos, onboarding tutorials, or feature tours that require persistent interaction detail.
- Lifestyle advertising, cinematic live-action footage, or campaigns that depend on generated imagery.
- Data-heavy executive presentations with more than one proof point per scene.
- To reproduce another company's brand, logo, product UI or copyrighted characters.

## Inputs

- Fictional product or campaign name and one-sentence promise
- The workflow friction or customer problem to dramatize
- Two to four product capabilities that can appear as UI rows or panels
- One credible proof metric or outcome
- Preferred social crop safe zone and delivery duration

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

- Open with a single high-contrast title frame, then let its exit movement become the first velocity vector of the next scene.
- Represent the problem as a congested interface state with overlapping queues, delayed status changes, or unresolved handoffs.
- Reveal the product through a device scene whose rows enter on the same horizontal trajectory as the preceding words.
- Use the card scene for the clearest product promise, with one metric only and no competing paragraph copy.
- Build proof with bars that accelerate into place in a shared direction, then switch the accent from orange to mint at completion.
- Use the checklist as a visual resolution: each check should arrive on a distinct beat while the grid remains fixed.
- Keep the end card materially simpler than the preceding scenes and hold its brand line long enough for social playback.

## Output contract

- `film.mp4`: H.264, 30 fps, 1280x720, 20-45 seconds.
- `film/composition.html`: the editable single-file composition that produced it (re-render any time with `scripts/render.mjs`).
- A hand-off note: the filled scene map, total duration, anything left as a placeholder, and the validator output.
- Render a wide MP4 from a deterministic multi-scene HTML/CSS composition with no external image or font dependencies.
- Maintain readable headline and metric safe zones for later 1:1 or 4:5 social reframing.
- Include a scene timing map so the velocity handoff and end-card hold can be reviewed precisely.

## Reference demo and agent run

The preview is a reference render of the bundled composition with sample copy. In a real run the agent rewrites the scenes from the user's brief and assets, re-times the composition and renders a fresh MP4 that meets the output contract above.

## Failure rules

- Never hand over a render that fails the validator.
- If the user's screenshots are low resolution, rebuild the surface in HTML instead of upscaling them.
- Music and footage must be supplied and licensed by the user; never download assets.

---

From [SkillLoom](https://skillloom.dev) — see [Velocity-Matched UI Sting Story Film](https://skillloom.dev/skills/sl-velocity-matched-ui-sting-story-film) for the rendered preview and the verification score.
