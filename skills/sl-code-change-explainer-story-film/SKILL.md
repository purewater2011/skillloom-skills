---
name: sl-code-change-explainer-story-film
description: Creates a 20-45 second, evidence-first MP4 that explains a software change as a short story. Use it when a founder, product manager, or technical writer needs to turn a verified diff, test, and user impact into a launch or changelog video. The signature look frames syntax-tinted code evidence against a muted sage ground, with restrained clay accents and quick capability cuts. Built from HTML and CSS and rendered locally without generation models.
---

# Code-Change Explainer Story Film

Turn a verified code change into a concise story film that shows what broke, what changed, and how it was checked.

Style: **The Evidence Frame**. Editorial warmth gives a precise technical change the pace and clarity of a short film. Follow `references/style-guide.md` exactly.

## Use this skill when

- Explaining a bug fix in a release update
- Showing the impact of a small product change
- Making a technical changelog easier to share

## Do not use

- Changes without a verifiable source diff, behavior description, or test result
- Long-form tutorials that require live coding or detailed API documentation
- Campaign videos requiring filmed footage, voice cloning, or generated imagery
- To reproduce another company's brand, logo, product UI or copyrighted characters.

## Inputs

- A code diff or precise description of the change and its affected behavior
- The user-facing problem and the outcome after the change
- A reproducible test, fixture, or other verifiable proof
- Optional product label and intended publishing channel

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

- Open with the user-visible failure, then identify the exact operation that caused it before showing code.
- Translate the diff into at most two product moments; keep identifiers faithful to the supplied source.
- Use terminal-inset scenes for a before state and the changed behavior, with short rows legible at video size.
- Reserve the checklist and proof scene for checks actually present in the source material; never invent metrics or testimonials.
- Give each scene one claim, and hold evidence long enough to read before the next cut.
- Close on the corrected behavior and a modest product label, without an unsupported performance promise.

## Output contract

- `film.mp4`: H.264, 30 fps, 1280x720, 20-45 seconds.
- `film/composition.html`: the editable single-file composition that produced it (re-render any time with `scripts/render.mjs`).
- A hand-off note: the filled scene map, total duration, anything left as a placeholder, and the validator output.
- Deliver one locally rendered wide MP4, 20-45 seconds, with 6-10 scenes and an end scene.
- Include the scene copy and an evidence-to-claim mapping alongside the video.
- Flag any unverified claim instead of presenting it as proof.

## Reference demo and agent run

The preview is a reference render of the bundled composition with sample copy. In a real run the agent rewrites the scenes from the user's brief and assets, re-times the composition and renders a fresh MP4 that meets the output contract above.

## Failure rules

- Never hand over a render that fails the validator.
- If the user's screenshots are low resolution, rebuild the surface in HTML instead of upscaling them.
- Music and footage must be supplied and licensed by the user; never download assets.

---

From [SkillLoom](https://skillloom.dev) — see [Code-Change Explainer Story Film](https://skillloom.dev/skills/sl-code-change-explainer-story-film) for the rendered preview and the verification score.
