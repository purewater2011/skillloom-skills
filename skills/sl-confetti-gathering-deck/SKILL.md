---
name: sl-confetti-gathering-deck
description: Create a self-contained 16:9 HTML presentation for event planners and designers who need a lively, polished gathering deck. The signature look pairs deep ink backgrounds and editorial serif typography with oversized slanted headlines, tactile paper shapes, and deliberate bursts of confetti color. Use it for event concepts, guest journeys, program reveals, and post-event recaps that must feel cohesive, celebratory, and text-accurate.
---

# Confetti Gathering Deck

Build a self-contained 16:9 HTML deck that turns event plans into a confident, colorful editorial presentation with a consistent confetti-gathering signature.

Style: **Confetti Gathering**. A dark editorial canvas becomes a festive paper gathering through slanted serif headlines, tactile cut-paper shapes, and controlled bursts of color. Follow `references/style-guide.md` exactly.

## Use this skill when

- Event planners presenting a gathering concept, schedule, or guest experience.
- Designers creating a memorable event deck that still keeps logistics readable.

## Do not use

- Investor, legal, or technical presentations that require a restrained corporate evidence-first visual language.
- Presentations whose core content depends on dense tables, exhaustive documentation, or unverified data.
- To reproduce another company's brand, logo, product UI or copyrighted characters.

## Inputs

- Event name, purpose, audience, date, venue, and any confirmed event details.
- Source copy, program timings, speaker names, metrics, and approved quotes that must remain accurate.
- Preferred tone, brand colors or restrictions, and any accessibility or production requirements.

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

- Separate confirmed event facts from proposed creative direction; do not invent venue, timing, attendance, speaker, or budget details.
- Shape the narrative around the gathering: why it matters, who it brings together, how the experience unfolds, and what guests should do next.
- Use one signature confetti-paper composition per slide, varying its scale and placement while keeping the ink ground and registration detail consistent.
- Keep exact spelling, names, dates, numbers, and supplied quotations intact; flag missing or contradictory source details rather than silently resolving them.
- Make program and guest-journey information scannable with concise labels, realistic time sequences, and clear visual hierarchy.
- Use charts only when the supplied data supports a meaningful comparison; label units and make the takeaway explicit.
- Check the rendered deck at presentation size for readable contrast, uncropped text, balanced paper shapes, and layouts that do not repeat three times consecutively.

## Output contract

- One file, `deck.html`, 16:9, self-contained (no network requests, no storage APIs), opens from `file://`.
- Exactly the requested number of `section.slide` elements, each with a unique `data-slide-id` and speaker notes.
- A short hand-off note: slide count, layouts used, sources used, any `[needs source]` gaps, and the validator output.
- Deliver a self-contained HTML slide deck with a 16:9 canvas and no external font or asset dependencies.
- Preserve supplied factual text exactly and ensure every slide remains legible against the dark ground.

## Reference demo and agent run

The preview is a reference deck built from sample content. Figures on chart and stat slides are sample data and say so in the slide footer; image areas are labelled slots. In a real run the agent uses the user's sources and assets, adds a source note to every slide that states a figure or claim, and keeps every promise in the output contract above.

## Failure rules

- If the validator fails, fix the deck and run it again; do not hand over a failing deck.
- If source material contradicts itself, show both claims and flag it in the notes instead of choosing one silently.
- If the user needs an editable PowerPoint file, say that this skill delivers HTML before starting.

---

From [SkillLoom](https://skillloom.dev) — see [Confetti Gathering Deck](https://skillloom.dev/skills/sl-confetti-gathering-deck) for the rendered preview and the verification score.
