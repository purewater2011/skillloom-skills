---
name: sl-agent-chorus-capability-reel-story-film
description: Create a 20-45 second social brand film for a software product using a four-surface chorus: one repeated prompt drives visible progress across capture, planning, building, and publishing. Use this skill for product launches and social campaigns when a founder or marketing team needs a fast, evidence-first MP4 made from supplied product details and artifacts. The agent composes and renders the film locally with HTML/CSS, hard cuts, and no generative video.
---

# Agent-Chorus Capability Reel Story Film

Turn one product request into a brisk, four-surface story that shows the work and ends on the brand.

Style: **Four-Surface Chorus**. Precise and propulsive, with each repeated prompt revealing a new piece of visible progress. Follow `references/style-guide.md` exactly.

## Use this skill when

- A founder introducing a workflow product
- An app developer showing a new capability
- A marketing manager preparing a social launch

## Do not use

- Documentary footage, character animation, or photorealistic product demonstrations
- Campaigns that require unsourced growth claims or fabricated customer quotes
- Detailed tutorials that need lengthy narration or sustained screen recordings
- To reproduce another company's brand, logo, product UI or copyrighted characters.

## Inputs

- Product name, one-sentence purpose, and intended audience
- One real user request or launch scenario to anchor the story
- Screenshots, interface copy, or verified descriptions of up to four product surfaces
- A verifiable outcome or artifact to show as proof
- Preferred call to action and destination

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

- Write the story as hook, friction, four repeated product beats, proof, and end card; keep the total between 20 and 45 seconds.
- Turn the user's scenario into one prompt of no more than five words, then repeat it verbatim across the four surface beats.
- Assign capture, plan, build, and publish distinct interface states while retaining a fixed prompt position and consistent framing.
- Make each hard cut land when the next surface answers the previous surface's unresolved question.
- Use supplied screenshots or verified interface copy for product claims; label invented interface details as illustrative in the production notes.
- Hold the proof scene long enough to read its artifact, and omit any metric that lacks a source.
- End with the product name and one specific action, leaving the final card visible for at least two seconds.

## Output contract

- `film.mp4`: H.264, 30 fps, 1280x720, 20-45 seconds.
- `film/composition.html`: the editable single-file composition that produced it (re-render any time with `scripts/render.mjs`).
- A hand-off note: the filled scene map, total duration, anything left as a placeholder, and the validator output.
- Deliver a locally rendered wide MP4 and the editable HTML/CSS composition.
- Include a scene-by-scene timing and copy sheet with the total runtime.
- List which on-screen claims use supplied evidence and which interface states are illustrative.

## Reference demo and agent run

The preview is a reference render of the bundled composition with sample copy. In a real run the agent rewrites the scenes from the user's brief and assets, re-times the composition and renders a fresh MP4 that meets the output contract above.

## Failure rules

- Never hand over a render that fails the validator.
- If the user's screenshots are low resolution, rebuild the surface in HTML instead of upscaling them.
- Music and footage must be supplied and licensed by the user; never download assets.

---

From [SkillLoom](https://skillloom.dev) — see [Agent-Chorus Capability Reel Story Film](https://skillloom.dev/skills/sl-agent-chorus-capability-reel-story-film) for the rendered preview and the verification score.
