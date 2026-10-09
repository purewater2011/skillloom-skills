---
name: sl-consulting-storyline-deck
description: Create a self-contained 16:9 HTML consulting deck from a user's business material. Use this skill for executive decisions, client reporting, business cases, and fundraising narratives that need a clear recommendation supported by evidence. The Verdict Margin style pairs sentence-length action titles with a saturated teal canvas, restrained amber emphasis, and a consistent space for the decision each slide advances.
---

# Consulting Storyline Deck

Turn business evidence into an executive-ready deck with a recommendation that stays visible from opening to decision.

Style: **Verdict Margin**. Decisive and composed, with editorial typography and a bold canvas that keeps the argument in focus. Follow `references/style-guide.md` exactly.

## Use this skill when

- Executive steering committee updates
- Client strategy recommendations
- Software investment business cases
- Fundraising narratives grounded in operating evidence

## Do not use

- An image-led keynote with little analytical content
- A deck that must reproduce an existing corporate template exactly
- Claims that require independent research when no source material or research access is available
- To reproduce another company's brand, logo, product UI or copyrighted characters.

## Inputs

- Audience, decision sought, and presentation setting
- Source material, including metrics, dates, definitions, and provenance
- Current situation, alternatives considered, and preferred recommendation
- Constraints, risks, and any claims that require qualification

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

- Write the governing recommendation first, then arrange slide titles so reading them alone forms a complete argument.
- Separate observed facts, estimates, and proposed targets; label each visibly and never present an assumption as measured performance.
- Build the case in decision order: stakes, evidence, options, economics, execution, risks, and approval request.
- Make chart scales and comparison criteria consistent; place the takeaway next to the exhibit it interprets.
- For a business case, reconcile baseline, investment, savings, and timing before presenting a return figure.
- End with a specific decision, owner, and next milestone rather than a generic thank-you slide.

## Output contract

- One file, `deck.html`, 16:9, self-contained (no network requests, no storage APIs), opens from `file://`.
- Exactly the requested number of `section.slide` elements, each with a unique `data-slide-id` and speaker notes.
- A short hand-off note: slide count, layouts used, sources used, any `[needs source]` gaps, and the validator output.
- Deliver one self-contained, offline-capable 16:9 HTML slide deck.
- Include visible source or assumption notes for material claims and calculations.
- Keep slide navigation and print-to-PDF output usable without network access.

## Reference demo and agent run

The preview is a reference deck built from sample content. Figures on chart and stat slides are sample data and say so in the slide footer; image areas are labelled slots. In a real run the agent uses the user's sources and assets, adds a source note to every slide that states a figure or claim, and keeps every promise in the output contract above.

## Failure rules

- If the validator fails, fix the deck and run it again; do not hand over a failing deck.
- If source material contradicts itself, show both claims and flag it in the notes instead of choosing one silently.
- If the user needs an editable PowerPoint file, say that this skill delivers HTML before starting.

---

From [SkillLoom](https://skillloom.dev) — see [Consulting Storyline Deck](https://skillloom.dev/skills/sl-consulting-storyline-deck) for the rendered preview and the verification score.
