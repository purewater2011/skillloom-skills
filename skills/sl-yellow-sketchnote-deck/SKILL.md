---
name: sl-yellow-sketchnote-deck
description: Create a self-contained 16:9 HTML presentation that turns teaching material into a bold yellow sketchnote deck. Use this skill when a course creator or graphic designer needs a memorable, text-accurate explainer with ink-editorial energy, clear visual hierarchy, hand-drawn cues, and a consistent series look across slides.
---

# Yellow Sketchnote Deck

Builds polished 16:9 HTML presentations with yellow sketchnote energy, editorial headlines, black ink marks, mustard highlights, and disciplined teaching structure.

Style: **Yellow Ink Notes**. Bright, confident, and editorial, using yellow annotation energy to make complex teaching ideas feel immediate and memorable. Follow `references/style-guide.md` exactly.

## Use this skill when

- Teaching a method, framework, or behavior change
- Making complex educational material memorable without childish visuals
- Building a repeatable visual series for courses or workshops

## Do not use

- Corporate investor decks that require restrained financial styling or dense tables.
- Highly photographic campaigns, product launches, or decks whose main value depends on realistic imagery.
- Materials that require extensive data tables, legal copy, or more than a few words of text per slide.
- To reproduce another company's brand, logo, product UI or copyrighted characters.

## Inputs

- Source material, lesson plan, or rough teaching notes
- Audience level, presentation goal, and expected viewing context
- Required facts, terminology, metrics, and wording that must remain exact
- Optional brand colors, logo substitute, speaker name, and session length

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

- Convert the source into a teaching arc with a clear tension, method, evidence, and next action before choosing layouts.
- Write every slide title as an action sentence that advances the lesson, rather than labeling a topic generically.
- Use a recurring yellow highlight, ink arrow, and margin-note device so the deck reads as one visual series.
- Translate abstract concepts into hand-drawn diagrams, comparisons, timelines, or annotated evidence whenever the material allows.
- Keep all numbers, quotations, terminology, and sequence labels faithful to the supplied material; never invent instructional claims.
- Balance expressive marks with a stable grid, accessible contrast, and enough negative space for projected viewing.

## Output contract

- One file, `deck.html`, 16:9, self-contained (no network requests, no storage APIs), opens from `file://`.
- Exactly the requested number of `section.slide` elements, each with a unique `data-slide-id` and speaker notes.
- A short hand-off note: slide count, layouts used, sources used, any `[needs source]` gaps, and the validator output.
- Deliver a self-contained 16:9 HTML slide deck that works offline with system font stacks and no external brand assets.
- Include concise speaker-ready copy, strong action titles, accessible contrast, and a distinct yellow sketchnote cue on every slide.
- Keep the sample and generated deck free of real companies, products, trademarks, people, and emoji.

## Reference demo and agent run

The preview is a reference deck built from sample content. Figures on chart and stat slides are sample data and say so in the slide footer; image areas are labelled slots. In a real run the agent uses the user's sources and assets, adds a source note to every slide that states a figure or claim, and keeps every promise in the output contract above.

## Failure rules

- If the validator fails, fix the deck and run it again; do not hand over a failing deck.
- If source material contradicts itself, show both claims and flag it in the notes instead of choosing one silently.
- If the user needs an editable PowerPoint file, say that this skill delivers HTML before starting.

---

From [SkillLoom](https://skillloom.dev) — see [Yellow Sketchnote Deck](https://skillloom.dev/skills/sl-yellow-sketchnote-deck) for the rendered preview and the verification score.
