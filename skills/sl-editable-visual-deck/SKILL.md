---
name: sl-editable-visual-deck
description: Build a self-contained, editable 16:9 HTML presentation from a user's product-launch or executive-reporting material. Use a dark construction-grid style with bold modular blocks, condensed action headlines, and native HTML and CSS shapes instead of flattened slide images. Use this skill when the audience needs a visually polished deck whose text, charts, and diagrams remain easy to revise.
---

# Editable Visual Deck

Turn launch plans and executive updates into a distinctive HTML deck made of editable visual components.

Style: **Signal Blocks**. Precise and energetic, like a product story assembled from a visible system of modular parts. Follow `references/style-guide.md` exactly.

## Use this skill when

- A product launch narrative for internal or client stakeholders
- An executive update that turns evidence into decisions
- A presentation that will undergo several content revisions

## Do not use

- Pixel-identical reproduction of an existing presentation
- Image-only decks whose slide content does not need editing
- Reports requiring a native presentation file as the sole deliverable
- To reproduce another company's brand, logo, product UI or copyrighted characters.

## Inputs

- Presentation goal, audience, and desired decision or response
- Source material, including approved claims, figures, and dates
- Product or project name and positioning
- Preferred slide count and any required sections
- Brand colors or visual constraints, if available

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

- Extract one decision-relevant claim per slide and write it as a complete action title before choosing a layout.
- Map the story from context to evidence to implication to next action; use the construction grid to make that progression visible.
- Keep all supplied figures exact and label illustrative or assumed figures explicitly.
- Use proportional, labeled native shapes for charts; include units, baselines, and a concise takeaway.
- Vary block scale and placement across slides while preserving the same column grid, type hierarchy, and color roles.
- Check each slide at presentation size for clipped text, legibility, and whether every meaningful object can be edited independently.

## Output contract

- One file, `deck.html`, 16:9, self-contained (no network requests, no storage APIs), opens from `file://`.
- Exactly the requested number of `section.slide` elements, each with a unique `data-slide-id` and speaker notes.
- A short hand-off note: slide count, layouts used, sources used, any `[needs source]` gaps, and the validator output.
- Deliver a self-contained 16:9 HTML deck that works offline.
- Keep slide text, charts, and diagrams editable as native document objects.
- Provide clear slide navigation and print styling for presentation or PDF export.

## Reference demo and agent run

The preview is a reference deck built from sample content. Figures on chart and stat slides are sample data and say so in the slide footer; image areas are labelled slots. In a real run the agent uses the user's sources and assets, adds a source note to every slide that states a figure or claim, and keeps every promise in the output contract above.

## Failure rules

- If the validator fails, fix the deck and run it again; do not hand over a failing deck.
- If source material contradicts itself, show both claims and flag it in the notes instead of choosing one silently.
- If the user needs an editable PowerPoint file, say that this skill delivers HTML before starting.

---

From [SkillLoom](https://skillloom.dev) — see [Editable Visual Deck](https://skillloom.dev/skills/sl-editable-visual-deck) for the rendered preview and the verification score.
