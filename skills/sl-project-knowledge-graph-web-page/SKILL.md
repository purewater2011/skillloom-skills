---
name: sl-project-knowledge-graph-web-page
description: Build a responsive, self-contained Project Knowledge Graph web page for executive reporting, research synthesis, or technical documentation. Use a signature constellation-dark knowledge canvas with citation-led evidence trails, structured relationship blocks, and a logic-first reading order. Agents should use this skill when source fidelity, traceable claims, and clear project dependencies matter more than decorative storytelling.
---

# Project Knowledge Graph Web Page

Create a source-faithful project knowledge graph page that turns scattered evidence into a navigable constellation of claims, entities, dependencies, and citations.

Style: **Constellation Ledger**. A dark research instrument where evidence, relationships, and project decisions form a precise illuminated constellation. Follow `references/style-guide.md` exactly.

## Use this skill when

- Client or executive reporting where decisions need traceable evidence.
- Research and technical communication with many linked sources and dependencies.
- Project status pages that must expose assumptions, risks, and lineage clearly.

## Do not use

- Marketing landing pages that need emotional persuasion without source-backed project content.
- Unstructured brainstorm boards, generic mind maps, or pages where claims cannot be traced to evidence.
- Highly decorative data visualizations that hide uncertainty, provenance, or relationship direction.
- To reproduce another company's brand, logo, product UI or copyrighted characters.

## Inputs

- Project name, reporting audience, and the decision or research question the page must support.
- Source inventory with URLs, documents, owners, dates, and quoted evidence or extracted claims.
- Entities, milestones, risks, dependencies, and unresolved questions to represent in the graph.
- Preferred emphasis, such as executive summary, technical lineage, delivery risk, or research confidence.
- Any required terminology, confidentiality labels, and responsive content constraints.

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

- Start with a source register and convert every important claim into a concise node with an adjacent citation key.
- Organize the page around one central project thesis, then expose dependencies, evidence clusters, and unresolved questions in a deliberate reading order.
- Use the visual canvas to distinguish entities, claims, decisions, and sources through block treatment, connector direction, and accent color.
- Write executive copy that states implications first, while preserving a visible path back to the supporting source and date.
- Include confidence or status language where evidence is incomplete; never imply certainty that the supplied sources do not support.
- Make the graph legible on narrow screens by stacking clusters into an ordered evidence trail without losing source labels.
- Keep fictional sample content internally consistent across milestones, stakeholders, sources, and technical dependencies.

## Output contract

- `index.html`: one self-contained HTML file (inline CSS, inline SVG, no network requests, no storage APIs) that opens from `file://`.
- Exactly one `<h1>`, labelled form inputs, alt text on every image, no `REPLACE_` placeholders or filler text.
- Responsive at 390 / 768 / 1280px, using only the style-guide tokens.
- A hand-off note: sections used, any sample content that must be replaced, framework port (if any) and the validator output.
- Deliver one responsive page with a dark knowledge-canvas composition, clear graph-like relationships, and source markers attached to substantive claims.
- Use self-contained HTML, CSS, and JavaScript or a directly portable component implementation with no required network assets.
- Preserve supplied source wording for quotations and distinguish extracted facts from editorial interpretation.
- Ensure every major visual cluster has a readable mobile order and that no connector or citation label obscures content.

## Reference demo and agent run

The preview (`preview/demo.html`) is a static reference built from sample content: it shows the layout, style, copy structure and the visible controls every interactive part needs (labelled form fields, carousel buttons, player chrome). Image areas are labelled placeholders and sample quotes or figures are marked as samples. In a real run the agent uses the user's content and assets, wires behaviour (form destinations, media sources, data) and keeps every promise in the output contract above.

## Failure rules

- Never hand over a file that fails the validator; fix it and run it again.
- If the brief lacks facts (prices, numbers, customer names), ask once; otherwise mark them clearly as sample content.
- Do not reproduce another company's website, logo or copy, even if asked to "make it look like" one; build an original page in this style instead.

---

From [SkillLoom](https://skillloom.dev) — see [Project Knowledge Graph Web Page](https://skillloom.dev/skills/sl-project-knowledge-graph-web-page) for the rendered preview and the verification score.
