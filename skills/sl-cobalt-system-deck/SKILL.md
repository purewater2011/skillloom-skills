---
name: sl-cobalt-system-deck
description: Create a self-contained 16:9 HTML presentation from the user's material using a disciplined cobalt-and-lemon identity system. Use it for executive reports, publishing strategy reviews, and course-creator presentations that need accurate text, consistent slide styling, and clear decisions. The deck pairs near-black grounds with cobalt geometry, lemon data emphasis, and a restrained dot motif.
---

# Cobalt System Deck

Turn reporting material into a coherent, decision-ready HTML deck with a distinctive cobalt-and-lemon visual system.

Style: **Cobalt Dot System**. Precise and energetic, with the discipline of an identity guide and the pace of an executive briefing. Follow `references/style-guide.md` exactly.

## Use this skill when

- Quarterly publishing performance reviews
- Editorial strategy updates for client executives
- Course business reports with approved metrics

## Do not use

- A free-form pitch deck that needs a different visual identity on every slide
- Reports whose figures cannot be sourced or clearly marked as illustrative
- A static image deck that must remain editable in presentation software
- To reproduce another company's brand, logo, product UI or copyrighted characters.

## Inputs

- Audience, meeting purpose, and the decision the deck should support
- Source material, approved wording, and required slide topics
- Metrics with units, periods, definitions, and source citations
- Organisation name, presentation date, and any required confidentiality label

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

- Build the argument around a decision: establish the performance signal, explain the cause, compare options, and end with named actions.
- Map every reported number to the user's source material; label missing or illustrative figures explicitly and never present them as verified results.
- Keep the cobalt geometry and corner dot matrix consistent while varying slide composition across narrative, data, and decision slides.
- Check long headlines and exact quotations at presentation size; preserve the user's wording and adjust layout before shortening approved text.
- For charts, state the measure and period, label values directly, and write a takeaway that is supported by the plotted data.
- Verify the HTML deck at 16:9, including overflow, keyboard navigation, and print or PDF capture.

## Output contract

- One file, `deck.html`, 16:9, self-contained (no network requests, no storage APIs), opens from `file://`.
- Exactly the requested number of `section.slide` elements, each with a unique `data-slide-id` and speaker notes.
- A short hand-off note: slide count, layouts used, sources used, any `[needs source]` gaps, and the validator output.
- Deliver one self-contained 16:9 HTML deck with embedded CSS and no network-dependent assets.
- Keep all slide text selectable and preserve supplied wording, figures, units, and citations.
- Include visible slide numbers and concise source or illustration notes where data appears.

## Reference demo and agent run

The preview is a reference deck built from sample content. Figures on chart and stat slides are sample data and say so in the slide footer; image areas are labelled slots. In a real run the agent uses the user's sources and assets, adds a source note to every slide that states a figure or claim, and keeps every promise in the output contract above.

## Failure rules

- If the validator fails, fix the deck and run it again; do not hand over a failing deck.
- If source material contradicts itself, show both claims and flag it in the notes instead of choosing one silently.
- If the user needs an editable PowerPoint file, say that this skill delivers HTML before starting.

---

From [SkillLoom](https://skillloom.dev) — see [Cobalt System Deck](https://skillloom.dev/skills/sl-cobalt-system-deck) for the rendered preview and the verification score.
