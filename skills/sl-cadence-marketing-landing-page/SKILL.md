---
name: sl-cadence-marketing-landing-page
description: Build a responsive, self-contained landing page for a software launch in a saturated deep-teal style defined by a visible planning grid, cyan accents, gradient display typography, and CSS-built product screens. Use this skill when a growth marketer or founder needs a conversion-focused page with specific product copy, clear pricing, accessible interactions, and a credible view of the product rather than generic launch imagery.
---

# Cadence Marketing Landing Page

Turn a software launch brief into a complete landing page that makes the product visible and the next action clear.

Style: **Launch Grid**. A precise, energetic launch workspace with the visual discipline of a campaign plan. Follow `references/style-guide.md` exactly.

## Use this skill when

- A founder launching a campaign coordination tool
- A growth marketer replacing a generic product page
- A small team that can supply real pricing and product details

## Do not use

- Editorial homepages or content-heavy publications
- Launches without a defined product, buyer, or conversion action
- Pages that require invented customer endorsements or performance claims
- To reproduce another company's brand, logo, product UI or copyrighted characters.

## Inputs

- Product name, one-sentence value proposition, and primary conversion goal
- Target buyer and the launch problem they need solved
- Three to five actual capabilities and any product screenshots or interface details
- Pricing, trial terms, and destination URLs for calls to action
- Approved proof, legal copy, and contact details, if available

If something essential is missing, ask one short question before starting. Never invent facts, numbers, quotes or customer names; mark gaps as `[needs source]`.

## Workflow

1. Read the brief and `references/section-library.md`. List the sections the page needs, in order, before writing any markup.
2. Copy `references/template.html` to `index.html`. Delete the sections the brief does not need; reorder the rest.
3. Apply the tokens from `references/style-guide.md` in the `:root` block. Do not introduce colors, fonts or radii outside the tokens.
4. Write real copy from the user's brief for every `REPLACE_` placeholder, inside the word limits. Never invent customer names, logos or numbers; label fictional testimonials and figures as sample content.
5. Check the layout at 390px, 768px and 1280px wide: no horizontal scrolling, readable type, tap targets at least 44px.
6. If the user works in React/Next.js, Vue or Tailwind, port the result with `references/framework-adaptation.md` after the HTML version passes.
7. Run the validator and fix every problem it reports:

   ```bash
   node scripts/validate-html.mjs index.html
   ```
8. Open the file in a browser (from `file://`) and check keyboard focus, the FAQ toggles and the mobile menu.

## What makes this excellent

- Lead with the product name, then state the buyer, launch task, and practical outcome within the first viewport.
- Make the hero product mockup depict a campaign timeline with channel-specific assets, owners, and approval states; its content must match the feature copy.
- Use a visible grid as the page's organizing idea, carrying it through section numbering, alignment, and the campaign interface.
- Give the primary call to action one consistent label and destination; make the secondary action lead to the product preview or a working demo.
- Show the actual pricing and trial conditions supplied by the user. If they are missing, request them or mark example prices clearly before publishing.
- Write FAQ answers for purchase decisions such as setup effort, collaborators, cancellation, and what the trial includes.
- Check the full page at narrow mobile and wide desktop sizes, including mockup legibility, keyboard access, contrast, and reduced-motion behavior.

## Output contract

- `index.html`: one self-contained HTML file (inline CSS, inline SVG, no network requests, no storage APIs) that opens from `file://`.
- Exactly one `<h1>`, labelled form inputs, alt text on every image, no `REPLACE_` placeholders or filler text.
- Responsive at 390 / 768 / 1280px, using only the style-guide tokens.
- A hand-off note: sections used, any sample content that must be replaced, framework port (if any) and the validator output.
- Deliver one responsive, self-contained HTML page with embedded CSS and minimal JavaScript, or port the same design to the requested framework.
- Include working navigation anchors, calls to action, FAQ controls, focus states, and reduced-motion support.
- Flag any illustrative pricing or product data that must be replaced before publication.

## Reference demo and agent run

The preview (`preview/demo.html`) is a static reference built from sample content: it shows the layout, style, copy structure and the visible controls every interactive part needs (labelled form fields, carousel buttons, player chrome). Image areas are labelled placeholders and sample quotes or figures are marked as samples. In a real run the agent uses the user's content and assets, wires behaviour (form destinations, media sources, data) and keeps every promise in the output contract above.

## Failure rules

- Never hand over a file that fails the validator; fix it and run it again.
- If the brief lacks facts (prices, numbers, customer names), ask once; otherwise mark them clearly as sample content.
- Do not reproduce another company's website, logo or copy, even if asked to "make it look like" one; build an original page in this style instead.

---

From [SkillLoom](https://skillloom.dev) — see [Cadence Marketing Landing Page](https://skillloom.dev/skills/sl-cadence-marketing-landing-page) for the rendered preview and the verification score.
