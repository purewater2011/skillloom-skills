---
name: sl-inclusive-cutpaper-deck
description: Build a self-contained 16:9 HTML presentation from a user's material in an inclusive cutpaper style: layered paper shapes, editorial photo windows, rounded typography, and a consistent warm-ground palette. Use it for course-creator or design-led client executive reports that need a memorable visual identity without sacrificing exact wording, legible evidence, or clear decisions.
---

# Inclusive Cutpaper Deck

Turn executive reporting material into a precise, series-consistent HTML deck with the energy of an editorial paper collage.

Style: **Common Ground Cutpaper**. An optimistic editorial workshop aesthetic gives diverse perspectives room to be seen while keeping executive evidence easy to scan. Follow `references/style-guide.md` exactly.

## Use this skill when

- Publishing performance reviews for client leadership
- Course or content-program updates with clear next decisions
- Editorial strategy presentations using approved photography

## Do not use

- A neutral corporate template with no visible editorial character
- A report that requires invented audience demographics or unsupported impact claims
- A photo-heavy deck when image rights and provenance cannot be established
- To reproduce another company's brand, logo, product UI or copyrighted characters.

## Inputs

- Audience, meeting purpose, and decision the presentation should support
- Source material with exact figures, dates, quotations, and any required caveats
- Preferred slide count and required sections or messages
- Approved photographs or illustration assets, if available
- Organization name and any wording or accessibility requirements

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

- Convert each source section into an evidence-led action title; distinguish confirmed findings from recommendations and open questions.
- Establish one reusable cutpaper system with fixed tab, margin, page number, and photo-window positions before composing individual slides.
- Use editorial photographs only when supplied or clearly licensed; otherwise use abstract paper silhouettes that make no factual claim about the audience.
- For representation-related material, avoid tokenizing imagery and avoid inferring demographics from photographs.
- Preserve supplied numbers and quotes exactly, including units and time periods; mark illustrative sample data as fictional.
- Give every chart a direct takeaway, visible values or scale, and a source or illustrative-data note where applicable.
- Check the finished deck at 16:9 desktop size and at a reduced preview size for clipping, reading order, and contrast.

## Output contract

- One file, `deck.html`, 16:9, self-contained (no network requests, no storage APIs), opens from `file://`.
- Exactly the requested number of `section.slide` elements, each with a unique `data-slide-id` and speaker notes.
- A short hand-off note: slide count, layouts used, sources used, any `[needs source]` gaps, and the validator output.
- Deliver one self-contained 16:9 HTML file with embedded CSS and no network dependencies.
- Keep slide text selectable and charts accessible as HTML or CSS, not flattened screenshots.
- Include an explicit illustrative-data label wherever sample figures appear.

## Reference demo and agent run

The preview is a reference deck built from sample content. Figures on chart and stat slides are sample data and say so in the slide footer; image areas are labelled slots. In a real run the agent uses the user's sources and assets, adds a source note to every slide that states a figure or claim, and keeps every promise in the output contract above.

## Failure rules

- If the validator fails, fix the deck and run it again; do not hand over a failing deck.
- If source material contradicts itself, show both claims and flag it in the notes instead of choosing one silently.
- If the user needs an editable PowerPoint file, say that this skill delivers HTML before starting.

---

From [SkillLoom](https://skillloom.dev) — see [Inclusive Cutpaper Deck](https://skillloom.dev/skills/sl-inclusive-cutpaper-deck) for the rendered preview and the verification score.
