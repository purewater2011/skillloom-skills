---
name: sl-brand-story-deck
description: Create an editable, self-contained 16:9 HTML presentation that gives a brand story a clear strategic arc and a distinctive color-block editorial style. Use this skill for brand identity work, product launches, and marketing presentations when the user needs a polished narrative deck that can be reviewed, presented, and refined in a browser.
---

# Brand Story Deck

Build an editable 16:9 HTML deck that turns brand strategy into a confident, color-blocked story for launch and identity presentations.

Style: **Moss & Signal**. Grounded, editorial, and confidently modern, with deep muted green fields punctuated by sharp chartreuse blocks. Follow `references/style-guide.md` exactly.

## Use this skill when

- Brand identity and positioning presentations for internal or client review.
- Product launch narratives for marketing and cross-functional teams.

## Do not use

- Long-form investor, financial, or technical presentations that require dense evidence and detailed footnotes.
- A finished identity system with production-ready logos, packaging files, or bespoke photography.
- To reproduce another company's brand, logo, product UI or copyrighted characters.

## Inputs

- Brand or product name, audience, and launch or identity context
- Positioning, audience insight, proof points, and desired audience response
- Any supplied research, product details, constraints, or existing brand guidance

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

- Establish the audience tension before introducing the brand promise; make the story feel earned rather than asserted.
- Translate positioning into a concise promise and three repeatable message pillars that can guide real campaign work.
- Use only supplied facts for performance claims; label illustrative figures clearly or omit unsupported metrics.
- Make each slide advance the narrative, from audience need through distinctiveness to launch action.
- Use the quote slide for a sourced or explicitly attributed audience insight; never invent a real person's endorsement.
- Build the visual slide from a concrete art-direction description using blocks, scale, and color rather than stock imagery.
- Keep the final slide actionable with a short set of decisions, deliverables, or next steps.

## Output contract

- One file, `deck.html`, 16:9, self-contained (no network requests, no storage APIs), opens from `file://`.
- Exactly the requested number of `section.slide` elements, each with a unique `data-slide-id` and speaker notes.
- A short hand-off note: slide count, layouts used, sources used, any `[needs source]` gaps, and the validator output.
- Deliver a self-contained, editable 16:9 HTML slide deck that works offline with system fonts and no external assets.
- Use fictional names and clearly identify illustrative sample data; preserve the user's supplied facts and terminology.

## Reference demo and agent run

The preview is a reference deck built from sample content. Figures on chart and stat slides are sample data and say so in the slide footer; image areas are labelled slots. In a real run the agent uses the user's sources and assets, adds a source note to every slide that states a figure or claim, and keeps every promise in the output contract above.

## Failure rules

- If the validator fails, fix the deck and run it again; do not hand over a failing deck.
- If source material contradicts itself, show both claims and flag it in the notes instead of choosing one silently.
- If the user needs an editable PowerPoint file, say that this skill delivers HTML before starting.

---

From [SkillLoom](https://skillloom.dev) — see [Brand Story Deck](https://skillloom.dev/skills/sl-brand-story-deck) for the rendered preview and the verification score.
