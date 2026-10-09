---
name: sl-liquid-rupture-logo-reveal-story-film
description: Create a 20–45 second wide social brand film that reveals a fictional logo through one controlled liquid rupture. The skill orchestrates a multi-scene HTML/CSS composition with warm paper grounds, glass-fringe refraction, metaball-like merging, and a single-event reveal. Use it when a launch needs a memorable identity moment rather than a generic logo sting, especially for social campaigns, motion identity studies, and polished art-direction tests.
---

# Liquid-Rupture Logo Reveal Story Film

A narrative logo-reveal film where unstable colour fields converge, rupture once, and resolve into a crisp identity lockup.

Style: **Paper Rupture**. Warm editorial calm builds into a precise, tactile burst of refracted colour and resolved identity. Follow `references/style-guide.md` exactly.

## Use this skill when

- Brand launches that need a distinctive identity moment
- Art-direction tests for social campaigns and motion systems
- Fictional product concepts requiring a polished reveal film

## Do not use

- Literal product demos, UI walkthroughs, or multi-feature explainers with several competing visual events.
- Projects that require a supplied vector logo to be traced, modified, or reproduced with exact geometry.
- To reproduce another company's brand, logo, product UI or copyrighted characters.

## Inputs

- Fictional brand or product name and exact logo lockup text
- Campaign promise or short positioning line
- Preferred accent colour, if it must replace the burgundy default
- Target social aspect crop and approximate runtime
- Optional proof point or launch message for the middle scenes

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

- Open with a quiet paper field and a small unresolved colour seam so the viewer understands that the film is about tension before identity.
- Treat the problem scene as visual instability: separated translucent blobs, clipped type, and near-misses should precede any clean logo treatment.
- Make the product moment a sequence of controlled merges, using CSS gradients, border highlights, blur, and pseudo-element refraction rather than generated imagery.
- Stage the rupture exactly once near the final third; freeze the merged shape for a beat before cutting to the readable identity lockup.
- Use the proof scene to show repeatable clarity through a compact metric, checklist, or device-like application context without introducing another visual motif.
- End with a quiet, high-contrast logo card on the same paper ground, preserving the final mark long enough for a social viewer to read it.

## Output contract

- `film.mp4`: H.264, 30 fps, 1280x720, 20-45 seconds.
- `film/composition.html`: the editable single-file composition that produced it (re-render any time with `scripts/render.mjs`).
- A hand-off note: the filled scene map, total duration, anything left as a placeholder, and the validator output.
- Render a wide MP4 locally from the HTML/CSS composition with six to ten scenes and a total runtime between 20 and 45 seconds.
- Keep all visual effects deterministic and offline-safe; use CSS gradients, transforms, filters, and layered DOM shapes instead of generation models.
- The last scene must be a legible end card with the fictional brand name and a concise campaign line.
- Preserve the single-event rupture as the only major impact beat in the edit.

## Reference demo and agent run

The preview is a reference render of the bundled composition with sample copy. In a real run the agent rewrites the scenes from the user's brief and assets, re-times the composition and renders a fresh MP4 that meets the output contract above.

## Failure rules

- Never hand over a render that fails the validator.
- If the user's screenshots are low resolution, rebuild the surface in HTML instead of upscaling them.
- Music and footage must be supplied and licensed by the user; never download assets.

---

From [SkillLoom](https://skillloom.dev) — see [Liquid-Rupture Logo Reveal Story Film](https://skillloom.dev/skills/sl-liquid-rupture-logo-reveal-story-film) for the rendered preview and the verification score.
