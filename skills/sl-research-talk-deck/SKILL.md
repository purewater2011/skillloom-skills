---
name: sl-research-talk-deck
description: Create an editable, self-contained 16:9 HTML research presentation from a paper, abstract, notes, or study results. Use this skill for conference talks, lab meetings, and graduate seminars that need a clear research argument, legible methods and figures, and a calm warm-neutral visual style. Preserve the distinction between supplied evidence, interpretation, and illustrative material.
---

# Research Talk Deck

Turn research material into an editable talk deck with a clear argument, readable evidence, and restrained warm-neutral styling.

Style: **Emberline Research**. Calm and human, with warm paper grounds, precise typography, and a restrained luminous emphasis on key evidence. Follow `references/style-guide.md` exactly.

## Use this skill when

- Conference and lab-meeting research talks
- Graduate seminars and technical explainers
- Presentations built from a paper or structured study notes

## Do not use

- Presentations that require fabricated research findings or citations
- Posters, manuscripts, or other deliverables that are not slide decks
- Brand-led pitch decks where research evidence is secondary
- To reproduce another company's brand, logo, product UI or copyrighted characters.

## Inputs

- Research paper, abstract, manuscript, or structured study notes
- Audience, talk length, and venue or course context
- Research question, methods, findings, and limitations
- Figures, tables, equations, and their source information, if available
- Preferred citation format and any required acknowledgments

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

- Build a narrative from question to method to evidence to interpretation; give each slide one claim the audience can repeat.
- Separate reported results from interpretation. Do not invent sample sizes, effect sizes, significance tests, citations, or study conclusions.
- For missing evidence, use a clearly labeled placeholder or ask for the source material; mark any demonstration data as illustrative on the slide itself.
- Translate dense tables into editable charts only when the underlying values and units are available, and retain a source note.
- Keep methodological details sufficient to evaluate the claim: sample, comparison, measure, and timing should remain visible where relevant.
- Introduce notation before using an equation; keep equations editable and avoid placing more than one substantial derivation on a slide.
- End with the supported conclusion, the main limitation, and a concrete question for discussion.

## Output contract

- One file, `deck.html`, 16:9, self-contained (no network requests, no storage APIs), opens from `file://`.
- Exactly the requested number of `section.slide` elements, each with a unique `data-slide-id` and speaker notes.
- A short hand-off note: slide count, layouts used, sources used, any `[needs source]` gaps, and the validator output.
- Deliver one self-contained 16:9 HTML deck with all CSS and scripts embedded and no network dependencies.
- Keep slide text, charts, labels, and equations editable in the HTML source.
- Include keyboard navigation, visible slide numbers, and a print stylesheet.
- Identify illustrative values and unresolved source details visibly rather than presenting them as verified findings.

## Reference demo and agent run

The preview is a reference deck built from sample content. Figures on chart and stat slides are sample data and say so in the slide footer; image areas are labelled slots. In a real run the agent uses the user's sources and assets, adds a source note to every slide that states a figure or claim, and keeps every promise in the output contract above.

## Failure rules

- If the validator fails, fix the deck and run it again; do not hand over a failing deck.
- If source material contradicts itself, show both claims and flag it in the notes instead of choosing one silently.
- If the user needs an editable PowerPoint file, say that this skill delivers HTML before starting.

---

From [SkillLoom](https://skillloom.dev) — see [Research Talk Deck](https://skillloom.dev/skills/sl-research-talk-deck) for the rendered preview and the verification score.
