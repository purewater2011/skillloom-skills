---
name: sl-interactive-system-map-web-page
description: Build a responsive, self-contained web page that explains a complex software system through an editable interactive map. Use a technical-blueprint style with a dark grid, semantic signal colors, evidence-first annotations, and clear navigation. Use this skill when a technical audience needs to inspect dependencies, runtime flow, ownership boundaries, or architectural tradeoffs.
---

# Interactive System Map Web Page

Create a responsive interactive system map that turns architecture evidence into a navigable, editable explanation for technical readers.

Style: **Signal Blueprint**. A disciplined dark-grid canvas where semantic signals reveal system structure, evidence, and change paths. Follow `references/style-guide.md` exactly.

## Use this skill when

- Explaining a request path across services, queues, stores, and external actors
- Teaching a technical audience how a system behaves and where evidence comes from

## Do not use

- Marketing landing pages that need emotional storytelling instead of technical inspection.
- Unverified architecture diagrams presented as authoritative documentation.
- Large graph datasets that require specialist graph-analysis software.
- To reproduce another company's brand, logo, product UI or copyrighted characters.

## Inputs

- System components, services, data stores, and external actors with stable IDs and names
- Directed relationships, request paths, event flows, and layer membership
- Evidence references, ownership details, confidence levels, and known unknowns
- Primary audience, teaching objective, and expected technical depth
- Editable-output requirements such as filters, annotations, and export format

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

- Define editable node, edge, path, layer, and citation data separately from DOM and SVG rendering logic.
- Render a real map viewport with labeled, directed edges and selectable nodes; do not substitute a static diagram or feature copy.
- Wire node click, Enter, and Space to selection state and an evidence-aware detail panel showing role, inputs, outputs, owner, confidence, citations, and unknowns.
- Wire path and layer controls to visible map changes; preserve selection when valid and explain when a filter hides it.
- Provide a text legend for verified, inferred, warning, and unresolved states, with non-color cues on nodes and relationships.
- On mobile, allow map panning or horizontal scrolling while keeping controls and the selected-node detail readable.
- Verify interaction with at least two nodes and two layers, keyboard focus, and layouts at 390, 768, and 1280px.
- Deliver a file://-ready index.html with inline CSS and SVG, no network or storage APIs, plus the required hand-off note and validator output.

## Output contract

- `index.html`: one self-contained HTML file (inline CSS, inline SVG, no network requests, no storage APIs) that opens from `file://`.
- Exactly one `<h1>`, labelled form inputs, alt text on every image, no `REPLACE_` placeholders or filler text.
- Responsive at 390 / 768 / 1280px, using only the style-guide tokens.
- A hand-off note: sections used, any sample content that must be replaced, framework port (if any) and the validator output.
- Deliver a complete responsive HTML page or a directly runnable React, Vue, or Tailwind equivalent with no external runtime dependency.
- Include an interactive map viewport, node selection state, path or layer controls, legend, and an evidence-aware detail panel.
- Keep component data separate from rendering logic so the user can edit labels, relationships, confidence, and citations.
- Include accessible labels, keyboard-reachable controls, visible focus states, and a non-color explanation for every semantic signal.

## Reference demo and agent run

The preview (`preview/demo.html`) is a static reference built from sample content: it shows the layout, style, copy structure and the visible controls every interactive part needs (labelled form fields, carousel buttons, player chrome). Image areas are labelled placeholders and sample quotes or figures are marked as samples. In a real run the agent uses the user's content and assets, wires behaviour (form destinations, media sources, data) and keeps every promise in the output contract above.

## Failure rules

- Never hand over a file that fails the validator; fix it and run it again.
- If the brief lacks facts (prices, numbers, customer names), ask once; otherwise mark them clearly as sample content.
- Do not reproduce another company's website, logo or copy, even if asked to "make it look like" one; build an original page in this style instead.

---

From [SkillLoom](https://skillloom.dev) — see [Interactive System Map Web Page](https://skillloom.dev/skills/sl-interactive-system-map-web-page) for the rendered preview and the verification score.
