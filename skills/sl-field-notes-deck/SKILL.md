---
name: sl-field-notes-deck
description: Build a self-contained 16:9 HTML presentation from a user's reporting material. Use this skill for executive updates, editorial performance reviews, and publishing strategy decks that need exact copy, consistent slide styling, and a distinctive field-notes look: a saturated green canvas, fine reference grid, serif typography, and restrained data displays.
---

# Field Notes Deck

Turn editorial reporting into a precise, series-consistent HTML deck with the character of a well-kept field notebook.

Style: **Sage Grid Notes**. An observant editorial report, with the discipline of an executive briefing and the energy of a sports analysis spread. Follow `references/style-guide.md` exactly.

## Use this skill when

- Client reporting for a publishing or media team
- Course performance or editorial programme reviews
- A recurring presentation series that needs a locked visual style

## Do not use

- A pitch that depends on full-bleed product photography or elaborate animation
- Scientific or financial reporting that requires unprovided data to be inferred
- To reproduce another company's brand, logo, product UI or copyrighted characters.

## Inputs

- Audience, meeting purpose, and the decision the deck should support
- Source material, approved wording, and any claims that must appear verbatim
- Metrics with units, dates, definitions, and actual-versus-target status
- Preferred slide count and any required sections
- Organisation name and confidentiality or attribution requirements

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

- Extract the decision, reporting period, metric definitions, and approved claims before writing slide titles.
- Build an evidence sequence: context, measured performance, interpretation, trade-offs, and requested decision.
- Treat the grid as a field-reference system: align annotations, chart ticks, page numbers, and section labels to it.
- Use small editorial labels for sources and periods, but keep the main takeaway legible from a meeting-room screen.
- Check every quoted phrase and number against the supplied material; mark missing evidence as a question rather than inventing it.
- Render every slide at 16:9 and inspect long titles, chart labels, and footnotes for clipping or collisions.
- Keep navigation, print styling, and all visual assets self-contained so the HTML works offline.

## Output contract

- One file, `deck.html`, 16:9, self-contained (no network requests, no storage APIs), opens from `file://`.
- Exactly the requested number of `section.slide` elements, each with a unique `data-slide-id` and speaker notes.
- A short hand-off note: slide count, layouts used, sources used, any `[needs source]` gaps, and the validator output.
- Deliver one self-contained 16:9 HTML deck with embedded CSS and any required assets.
- Include keyboard navigation and print styles that place one slide on each page.
- Preserve supplied wording and figures exactly; identify any unresolved source gaps outside the slides.

## Reference demo and agent run

The preview is a reference deck built from sample content. Figures on chart and stat slides are sample data and say so in the slide footer; image areas are labelled slots. In a real run the agent uses the user's sources and assets, adds a source note to every slide that states a figure or claim, and keeps every promise in the output contract above.

## Failure rules

- If the validator fails, fix the deck and run it again; do not hand over a failing deck.
- If source material contradicts itself, show both claims and flag it in the notes instead of choosing one silently.
- If the user needs an editable PowerPoint file, say that this skill delivers HTML before starting.

---

From [SkillLoom](https://skillloom.dev) — see [Field Notes Deck](https://skillloom.dev/skills/sl-field-notes-deck) for the rendered preview and the verification score.
