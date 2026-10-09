---
name: sl-masonry-testimonial-wall-ui-block
description: Build a reusable masonry testimonial wall as a focused website section for product launches, marketing pages, and social campaigns. Use this skill when a team needs polished customer proof that feels warm, human, and editorial rather than like a rigid review grid. It guides the agent to create an accessible, responsive block with believable sample quotes, clear attribution, and a restrained teal accent, using system fonts and editable code.
---

# Masonry Testimonial Wall UI Block

Create a responsive testimonial wall that makes customer voices easy to scan and easy to trust.

Style: **Paper Current**. Warm paper tones and quiet teal give varied customer voices an editorial rhythm without making the section feel decorative or overly polished. Follow `references/style-guide.md` exactly.

## Use this skill when

- A product launch page with approved customer quotes
- A marketing site that needs a more editorial review layout
- A campaign page with a small set of varied testimonials

## Do not use

- Invented testimonials, review aggregation, or claims that require verification
- A full landing page or a multi-section marketing site
- To reproduce another company's brand, logo, product UI or copyrighted characters.

## Inputs

- Product or service name and a one-sentence description
- Two to six approved testimonials with speaker names and roles
- Target audience and intended placement, such as launch page or campaign landing page
- Preferred call to action or destination, if the block should include one

If something essential is missing, ask one short question before starting. Never invent facts, numbers, quotes or customer names; mark gaps as `[needs source]`.

## Workflow

1. Read the brief and `references/section-library.md`. Confirm which block the user needs and where it will live (plain HTML or a framework component).
2. Copy `references/template.html` to `section.html`. Keep the <style> block and the one focal section; delete every other section.
3. Apply the tokens from `references/style-guide.md` in the `:root` block. Do not introduce colors, fonts or radii outside the tokens.
4. Write real copy from the user's brief for every `REPLACE_` placeholder, inside the word limits. Never invent customer names, logos or numbers; label fictional testimonials and figures as sample content.
5. Check the layout at 390px, 768px and 1280px wide: no horizontal scrolling, readable type, tap targets at least 44px.
6. If the user works in React/Next.js, Vue or Tailwind, port the result with `references/framework-adaptation.md` after the HTML version passes.
7. Run the validator and fix every problem it reports:

   ```bash
   node scripts/validate-html.mjs section.html
   ```
8. Open the file in a browser (from `file://`) and check keyboard focus, the FAQ toggles and the mobile menu.

## What makes this excellent

- Use only supplied, approved customer statements; do not invent endorsements, outcomes, company affiliations, or identity details.
- Edit for length only when meaning and approval are preserved; otherwise keep the original wording and let card heights vary naturally.
- Order testimonials to create a credible narrative, such as discovery, day-to-day use, then concrete impact.
- Keep names and roles visually subordinate to quotes but readable; never imply a verified badge unless one is provided.
- Implement masonry responsively without CSS column ordering that changes the reading sequence; maintain logical DOM order.
- Ensure the section remains a single focal block with no navigation, footer, or unrelated promotional content.

## Output contract

- `section.html`: one self-contained HTML file (inline CSS, inline SVG, no network requests, no storage APIs) that opens from `file://`.
- Exactly one `<h1>`, labelled form inputs, alt text on every image, no `REPLACE_` placeholders or filler text.
- Responsive at 390 / 768 / 1280px, using only the style-guide tokens.
- A hand-off note: sections used, any sample content that must be replaced, framework port (if any) and the validator output.
- Deliver one reusable testimonials section with semantic heading and blockquote attribution markup.
- Keep all quote text, names, and roles editable in source; include responsive styling and visible keyboard focus where interactive controls exist.

## Reference demo and agent run

The preview (`preview/demo.html`) is a static reference built from sample content: it shows the layout, style, copy structure and the visible controls every interactive part needs (labelled form fields, carousel buttons, player chrome). Image areas are labelled placeholders and sample quotes or figures are marked as samples. In a real run the agent uses the user's content and assets, wires behaviour (form destinations, media sources, data) and keeps every promise in the output contract above.

## Failure rules

- Never hand over a file that fails the validator; fix it and run it again.
- If the brief lacks facts (prices, numbers, customer names), ask once; otherwise mark them clearly as sample content.
- Do not reproduce another company's website, logo or copy, even if asked to "make it look like" one; build an original page in this style instead.

---

From [SkillLoom](https://skillloom.dev) — see [Masonry Testimonial Wall UI Block](https://skillloom.dev/skills/sl-masonry-testimonial-wall-ui-block) for the rendered preview and the verification score.
