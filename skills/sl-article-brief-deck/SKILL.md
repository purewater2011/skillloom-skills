---
name: sl-article-brief-deck
description: Creates a self-contained 16:9 HTML presentation that turns a research article or evidence packet into an accurate, teachable content brief. Use it for K-12 lessons, course planning, editorial review, or client-facing explainers when claims, sources, and visual hierarchy must remain clear. The output uses a strict modular grid, black-and-white editorial typography, concise action titles, and evidence-led slide sequencing.
---

# Article Brief Deck

Builds polished article brief decks for educators, curriculum teams, and content creators who need research translated into a clear, presentation-ready teaching or publishing plan.

Style: **Gridline Article Brief**. A disciplined editorial system that makes evidence easy to scan, compare, teach, and act on. Follow `references/style-guide.md` exactly.

## Use this skill when

- K-12 lesson explainers and curriculum planning meetings
- Research-backed content briefs for education publishers
- Client reviews where evidence and next actions must be explicit

## Do not use

- Marketing pitches, brand launches, or sales presentations that need persuasive product positioning
- Long-form academic manuscripts, full literature reviews, or citation-management workflows
- Decks that require live web research, proprietary fonts, or external assets unavailable to the renderer
- To reproduce another company's brand, logo, product UI or copyrighted characters.

## Inputs

- The source article, abstract, research notes, or evidence packet to interpret
- Audience, grade level, subject area, and intended learning or publishing outcome
- Required claims, constraints, terminology, and citation details
- Preferred number of slides and presentation context
- Optional visual assets, data tables, or lesson standards

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

- Extract the article's central claim, evidence quality, audience relevance, and limitations before drafting slide copy.
- Translate technical findings into classroom-appropriate language without adding claims that are absent from the source.
- Give each slide an action title that states what the audience should understand or decide.
- Use cards, timelines, comparisons, and charts only when they clarify the article's actual structure or evidence.
- Place source cues, sample sizes, dates, and uncertainty beside the relevant claim rather than hiding them in a final note.
- Keep examples fictional and generic when demonstrating the skill, while making the content specific enough to feel presentation-ready.

## Output contract

- One file, `deck.html`, 16:9, self-contained (no network requests, no storage APIs), opens from `file://`.
- Exactly the requested number of `section.slide` elements, each with a unique `data-slide-id` and speaker notes.
- A short hand-off note: slide count, layouts used, sources used, any `[needs source]` gaps, and the validator output.
- A self-contained 16:9 HTML deck with 8-10 slides, editable text, and no external font or asset dependency.
- A coherent article-to-brief narrative covering the claim, evidence, teaching implications, limitations, and next actions.
- Evidence labels and qualifications remain visible on the slides where the associated claims appear.
- The first slide uses the title layout and the deck uses at least six distinct layouts without repeating one layout three times consecutively.

## Reference demo and agent run

The preview is a reference deck built from sample content. Figures on chart and stat slides are sample data and say so in the slide footer; image areas are labelled slots. In a real run the agent uses the user's sources and assets, adds a source note to every slide that states a figure or claim, and keeps every promise in the output contract above.

## Failure rules

- If the validator fails, fix the deck and run it again; do not hand over a failing deck.
- If source material contradicts itself, show both claims and flag it in the notes instead of choosing one silently.
- If the user needs an editable PowerPoint file, say that this skill delivers HTML before starting.

---

From [SkillLoom](https://skillloom.dev) — see [Article Brief Deck](https://skillloom.dev/skills/sl-article-brief-deck) for the rendered preview and the verification score.
