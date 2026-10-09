---
name: sl-sky-glass-deck
description: Creates a self-contained 16:9 HTML presentation for executive reporting in media and publishing. Use it when a client needs precise, readable slides with an editorial-photography feel: luminous CSS-built compositions, restrained glass panels, strong rules, and consistent typography. No external images, fonts, or network access are required.
---

# Sky Glass Deck

Turn publishing performance and recommendations into a polished, self-contained executive deck.

Style: **Sky Glass Editorial**. Bright, composed, and analytical, with the visual depth of editorial photography rendered entirely in CSS. Follow `references/style-guide.md` exactly.

## Use this skill when

- Quarterly audience and membership reviews
- Client-facing editorial strategy reports
- Publisher performance and investment briefings

## Do not use

- Photo-led decks requiring actual product or event photography
- Presentations that need live data connections or embedded external media
- Reports whose claims cannot be checked against supplied source material
- To reproduce another company's brand, logo, product UI or copyrighted characters.

## Inputs

- Presentation objective, audience, and requested decision
- Source material with exact figures, dates, units, and citations
- Preferred slide count and any required sections
- Client terminology, approved wording, and confidentiality requirements

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

- Turn each section into a full-sentence action title that states the conclusion, not merely the topic.
- Check every number against the supplied material; flag missing denominators, periods, or sources instead of inventing them.
- Create the editorial-photography effect with CSS light fields, cropped translucent planes, and fine architectural lines; use no image assets.
- Place quantitative evidence on opaque surfaces so decorative transparency never weakens chart or label contrast.
- Carry one grid, footer position, type hierarchy, and restrained accent treatment through every slide.
- Include a clear executive decision and accountable next actions on the closing slide.

## Output contract

- One file, `deck.html`, 16:9, self-contained (no network requests, no storage APIs), opens from `file://`.
- Exactly the requested number of `section.slide` elements, each with a unique `data-slide-id` and speaker notes.
- A short hand-off note: slide count, layouts used, sources used, any `[needs source]` gaps, and the validator output.
- Deliver one self-contained 16:9 HTML file with inline CSS and JavaScript and no network dependencies.
- Include keyboard navigation, slide numbering, and a print-friendly presentation layout.
- Preserve the user's wording and figures exactly where marked as approved.

## Reference demo and agent run

The preview is a reference deck built from sample content. Figures on chart and stat slides are sample data and say so in the slide footer; image areas are labelled slots. In a real run the agent uses the user's sources and assets, adds a source note to every slide that states a figure or claim, and keeps every promise in the output contract above.

## Failure rules

- If the validator fails, fix the deck and run it again; do not hand over a failing deck.
- If source material contradicts itself, show both claims and flag it in the notes instead of choosing one silently.
- If the user needs an editable PowerPoint file, say that this skill delivers HTML before starting.

---

From [SkillLoom](https://skillloom.dev) — see [Sky Glass Deck](https://skillloom.dev/skills/sl-sky-glass-deck) for the rendered preview and the verification score.
