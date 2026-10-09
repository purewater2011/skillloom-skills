---
name: sl-learning-loop-deck
description: Build a self-contained 16:9 HTML presentation from a training brief, curriculum outline, or learning-program report. Use this skill when a corporate trainer or curriculum designer needs to explain how practice, feedback, and revision improve learning, or report a pilot to executives. The deck uses a saturated green canvas, high-contrast editorial type, and a recurring gradient loop that makes the learning cycle easy to follow.
---

# Learning Loop Deck

Turn learning-program material into a clear, presentation-ready story with a visible cycle of practice, feedback, and improvement.

Style: **Loop in Motion**. Bright, assured, and learner-centered, with the energy of a workshop and the discipline of an executive report. Follow `references/style-guide.md` exactly.

## Use this skill when

- Explaining a new learning approach to facilitators
- Reporting a training pilot to program sponsors
- Turning a curriculum outline into a workshop briefing

## Do not use

- A compliance course that requires verbatim legal or policy language on every slide
- A research report that needs extensive tables, citations, and methodological detail
- A brand-specific deck that must follow an existing visual identity
- To reproduce another company's brand, logo, product UI or copyrighted characters.

## Inputs

- Audience, presentation purpose, and desired decision or learning outcome
- Source material, curriculum outline, or report findings
- Learner group, delivery setting, and time available
- Evidence or metrics, including sources and cohort definitions
- Preferred slide count and any required terminology

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

- Identify the learner problem, the behavior to practice, and the decision the audience should make before arranging slides.
- Map source material to the four loop stages; do not imply that the loop is a validated model unless the user provides that evidence.
- Use one concrete learner activity and one observable feedback signal to make each proposed cycle teachable.
- Separate measured outcomes from proposed targets and illustrative examples; label each distinctly on its slide.
- For executive reporting, lead with the implication of the evidence, then show the cohort, measure, and limitation.
- Vary layouts while keeping the loop's stage labels, order, and color assignments consistent.
- Check the deck at presentation size for legibility, text overflow, and contrast before delivery.

## Output contract

- One file, `deck.html`, 16:9, self-contained (no network requests, no storage APIs), opens from `file://`.
- Exactly the requested number of `section.slide` elements, each with a unique `data-slide-id` and speaker notes.
- A short hand-off note: slide count, layouts used, sources used, any `[needs source]` gaps, and the validator output.
- Deliver a self-contained 16:9 HTML slide deck with embedded CSS and no network dependencies.
- Include keyboard navigation and a visible slide counter.
- Keep any illustrative data explicitly labeled in both the deck and presenter notes.

## Reference demo and agent run

The preview is a reference deck built from sample content. Figures on chart and stat slides are sample data and say so in the slide footer; image areas are labelled slots. In a real run the agent uses the user's sources and assets, adds a source note to every slide that states a figure or claim, and keeps every promise in the output contract above.

## Failure rules

- If the validator fails, fix the deck and run it again; do not hand over a failing deck.
- If source material contradicts itself, show both claims and flag it in the notes instead of choosing one silently.
- If the user needs an editable PowerPoint file, say that this skill delivers HTML before starting.

---

From [SkillLoom](https://skillloom.dev) — see [Learning Loop Deck](https://skillloom.dev/skills/sl-learning-loop-deck) for the rendered preview and the verification score.
