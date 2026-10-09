---
name: sl-atmospheric-cinematic-svg-deck
description: Create a self-contained 16:9 HTML presentation from research, campaign, or editorial material using an atmospheric cinematic SVG visual language. Use this skill when a professional audience needs a memorable image-led narrative with editable vector compositions, restrained typography, strong pacing, and a polished presentation-ready output.
---

# Atmospheric Cinematic Svg Deck

An editable 16:9 HTML slide deck that turns source material into a cinematic visual narrative built from atmospheric SVG frames, disciplined typography, and purposeful editorial pacing.

Style: **Cinematic Frame Study**. Quietly dramatic and tactile, pairing documentary restraint with luminous framed compositions that make each idea feel like a carefully observed scene. Follow `references/style-guide.md` exactly.

## Use this skill when

- Science, culture, and public-interest storytelling
- Campaign concepts, editorial briefings, and creative strategy presentations
- Audiences that need memorable visual framing around credible evidence

## Do not use

- Dense operational dashboards, long-form reports, or presentations that require many simultaneous tables and controls.
- Brand systems that depend on photorealistic product imagery, playful illustration, or highly decorative interface components.
- To reproduce another company's brand, logo, product UI or copyrighted characters.

## Inputs

- Source material such as research notes, campaign brief, article draft, or interview transcript
- Audience, presentation setting, and desired decision or response
- Key evidence, metrics, quotations, or visual references to preserve
- Preferred closing action, publication context, and any required terminology

If something essential is missing, ask one short question before starting. Never invent facts, numbers, quotes or customer names; mark gaps as `[needs source]`.

## Workflow

1. Read all source material. Separate facts from opinions and keep the user's terminology; mark missing facts as `[needs source]` instead of inventing quotes, numbers or names.
2. Write the title spine first: one action title per slide (a full sentence with a verb). Read the titles in order; they must make the argument on their own.
3. Copy `references/template.html` to the output path, for example `deck.html`. Keep its paging engine, overview mode (press `o`), notes panel (press `n`) and print stylesheet intact.
4. Apply the tokens from `references/style-guide.md` (they are already set in the template's `:root`); do not add other colors or webfonts.
5. Choose layouts from `references/layouts.md`. Never use the same layout on more than two consecutive slides. Copy the matching example slide, fill every `REPLACE_` value and delete unused examples.
6. Keep body text under 40 words per slide; move detail into speaker notes. Write notes for every `data-slide-id` in `window.__SLIDE_NOTES__`; notes add delivery context and do not repeat the slide.
7. Icons and diagrams are inline SVG only (the template's icon set or simple shapes in token colors). Never use emoji, icon fonts or remote images.
8. Run the validator and fix every problem it reports:

   ```bash
   node scripts/validate-deck.mjs deck.html --expected-slides 8
   ```
9. Open the deck in a browser: check arrow keys, overview, notes, a 390px wide window and print preview (one 16:9 slide per page).

## What makes this excellent

- Reduce the source into a clear emotional and informational arc before selecting slide layouts; each slide should advance the argument rather than merely restate a section.
- Translate abstract ideas into editable SVG atmosphere: contour lines, cropped fields, framed horizons, translucent planes, and one deliberate accent mark.
- Open with a title slide that establishes the subject as an image and a proposition, then alternate analytical slides with visual breathing room.
- Use action titles that state what the audience should understand or do, and keep supporting copy short enough to scan at presentation distance.
- Treat charts, statistics, and comparisons as editorial evidence inside the frame system; label units clearly and add a concise takeaway.
- Vary layouts across the deck and never repeat the same layout three times consecutively; preserve rhythm through shared alignment and frame geometry.
- Finish with a concrete next step and a visually quiet closing composition that can remain on screen during discussion.

## Output contract

- One file, `deck.html`, 16:9, self-contained (no network requests, no storage APIs), opens from `file://`.
- Exactly the requested number of `section.slide` elements, each with a unique `data-slide-id` and speaker notes.
- A short hand-off note: slide count, layouts used, sources used, any `[needs source]` gaps, and the validator output.
- Deliver a self-contained 16:9 HTML deck with inline editable SVG shapes, local system fonts, and no external network dependencies.
- Use at least six distinct slide layouts across an 8-10 slide sample deck, with the title layout first and a closing action slide last.
- Preserve the source hierarchy, label every chart unit, and keep all visible text editable in the generated HTML.

## Reference demo and agent run

The preview is a reference deck built from sample content. Figures on chart and stat slides are sample data and say so in the slide footer; image areas are labelled slots. In a real run the agent uses the user's sources and assets, adds a source note to every slide that states a figure or claim, and keeps every promise in the output contract above.

## Failure rules

- If the validator fails, fix the deck and run it again; do not hand over a failing deck.
- If source material contradicts itself, show both claims and flag it in the notes instead of choosing one silently.
- If the user needs an editable PowerPoint file, say that this skill delivers HTML before starting.

---

From [SkillLoom](https://skillloom.dev) — see [Atmospheric Cinematic Svg Deck](https://skillloom.dev/skills/sl-atmospheric-cinematic-svg-deck) for the rendered preview and the verification score.
