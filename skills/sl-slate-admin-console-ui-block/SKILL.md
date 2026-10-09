---
name: sl-slate-admin-console-ui-block
description: Build one reusable admin-console page block for product operations or internal tools. Use this skill when an agent needs a polished dashboard section with meaningful metrics, a searchable records grid, and working controls to edit fictional account data. The output stays focused on one operational block rather than expanding into an entire application.
---

# Slate Admin Console UI Block

Create a focused admin console block with operational metrics and account records users can search and edit.

Style: **Slate Console**. Restrained and practical, with cool paper surfaces, crisp typography, and one focused accent for meaningful state. Follow `references/style-guide.md` exactly.

## Use this skill when

- Launching a product with an operational dashboard preview.
- Creating a focused internal tool or admin page section.

## Do not use

- Marketing landing pages, editorial dashboards, or consumer-facing account pages.
- A complete admin application requiring authentication, live data, or backend integrations.
- To reproduce another company's brand, logo, product UI or copyrighted characters.

## Inputs

- Product or workspace name and the operational area this console serves.
- Primary audience, key metrics, and the records or entities users need to scan.
- Account fields, relevant statuses, editable fields, and any brand color that should replace the default accent.

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

- Build one self-contained admin console section with a metric row and a six-row editable records grid; do not add navigation or a footer.
- Give every metric a clear label, unit, period where relevant, and plausible value.
- Use explicit account columns: Account, ID, Owner, Status, Updated, Monthly value, and Version. Do not render numbered or generic field headers.
- Provide working record editing: an accessible Edit action for each row opens labelled fields, Save commits the changes in the current page, and Cancel leaves the row unchanged.
- Provide a visibly labelled account search input of type search that filters records by account name, ID, owner, plan if present, or status.
- Keep filter, sort, New record, and edit controls keyboard accessible and usable at 390px; prioritize account identity, status, and edit actions on narrow screens.
- Use only fictional organizations and people. Keep the block functional from file:// without network requests or storage APIs.

## Output contract

- `section.html`: one self-contained HTML file (inline CSS, inline SVG, no network requests, no storage APIs) that opens from `file://`.
- Exactly one `<h1>`, labelled form inputs, alt text on every image, no `REPLACE_` placeholders or filler text.
- Responsive at 390 / 768 / 1280px, using only the style-guide tokens.
- A hand-off note: sections used, any sample content that must be replaced, framework port (if any) and the validator output.
- Deliver one editable page block with metrics and an editable records grid; omit navigation and footer.
- Search must use a labelled type=search input with working record filtering, not an email or newsletter form.
- Use specific account-field headers, realistic fictional data, labelled edit controls, strong contrast, stable alignment, and responsive narrow-screen behavior.
- Deliver a self-contained section.html and a hand-off note covering sections used, sample content to replace, any framework port, and validator output.

## Reference demo and agent run

The preview (`preview/demo.html`) is a static reference built from sample content: it shows the layout, style, copy structure and the visible controls every interactive part needs (labelled form fields, carousel buttons, player chrome). Image areas are labelled placeholders and sample quotes or figures are marked as samples. In a real run the agent uses the user's content and assets, wires behaviour (form destinations, media sources, data) and keeps every promise in the output contract above.

## Failure rules

- Never hand over a file that fails the validator; fix it and run it again.
- If the brief lacks facts (prices, numbers, customer names), ask once; otherwise mark them clearly as sample content.
- Do not reproduce another company's website, logo or copy, even if asked to "make it look like" one; build an original page in this style instead.

---

From [SkillLoom](https://skillloom.dev) — see [Slate Admin Console UI Block](https://skillloom.dev/skills/sl-slate-admin-console-ui-block) for the rendered preview and the verification score.
