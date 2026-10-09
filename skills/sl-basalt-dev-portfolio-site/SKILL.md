---
name: sl-basalt-dev-portfolio-site
description: Build a responsive, multi-page developer portfolio in a signature dark-zinc and cyan visual style, with restrained beam-motion details and precise hover-glow project cards. Use this skill when an app developer, indie hacker, or job seeker needs a polished, editable portfolio that presents real projects, technical strengths, and a clear contact path. Deliver a complete, self-contained HTML page or a faithful React, Vue, or Tailwind port.
---

# Basalt Dev Portfolio Site

Create a distinctive developer portfolio with a dark, architectural canvas, cyan light-beam accents, and project cards that make the work easy to inspect.

Style: **Basalt Beam**. A focused developer portfolio where restrained cyan light cuts through a deep basalt canvas to give projects clarity and momentum. Follow `references/style-guide.md` exactly.

## Use this skill when

- Developers applying for roles who need their strongest work to scan quickly.
- Indie hackers and app developers presenting shipped products or technical case studies.

## Do not use

- A product marketing landing page whose main purpose is to sell a software product.
- A portfolio that depends on invented employment history, client endorsements, metrics, or project links.
- To reproduce another company's brand, logo, product UI or copyrighted characters.

## Inputs

- Developer name, role, short bio, location or availability, and preferred contact destination.
- Three to six projects with title, problem, contribution, technology, outcome, and any approved links or screenshots.
- Optional experience, services, testimonials, writing, and social links to include.
- Preferred implementation format and any existing brand colors or accessibility requirements.

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

- Shape the hero around a specific engineering role and a credible point of view; avoid generic claims such as 'building the future'.
- Give each project a concise problem, the developer's actual contribution, and a concrete outcome; clearly label illustrative or confidential work.
- Choose project ordering to support the target audience, placing the strongest and most relevant proof first.
- Use a compact skills or technology vocabulary tied to the featured work rather than an unfiltered tool list.
- Make contact and project links functional, clearly labeled, and keyboard accessible; do not invent social profiles or URLs.
- Keep the portfolio adaptable as a multi-page site when requested, with consistent navigation and a clear active-page state.
- Ensure beam motion and hover glow are progressive enhancements, with readable static states and reduced-motion support.

## Output contract

- `index.html`: one self-contained HTML file (inline CSS, inline SVG, no network requests, no storage APIs) that opens from `file://`.
- Exactly one `<h1>`, labelled form inputs, alt text on every image, no `REPLACE_` placeholders or filler text.
- Responsive at 390 / 768 / 1280px, using only the style-guide tokens.
- A hand-off note: sections used, any sample content that must be replaced, framework port (if any) and the validator output.
- Deliver a complete responsive portfolio page with usable navigation, project presentation, and contact path; keep all copy specific and editable.
- Use semantic HTML, visible focus states, accessible contrast, and reduced-motion behavior; do not require remote fonts or assets.

## Reference demo and agent run

The preview (`preview/demo.html`) is a static reference built from sample content: it shows the layout, style, copy structure and the visible controls every interactive part needs (labelled form fields, carousel buttons, player chrome). Image areas are labelled placeholders and sample quotes or figures are marked as samples. In a real run the agent uses the user's content and assets, wires behaviour (form destinations, media sources, data) and keeps every promise in the output contract above.

## Failure rules

- Never hand over a file that fails the validator; fix it and run it again.
- If the brief lacks facts (prices, numbers, customer names), ask once; otherwise mark them clearly as sample content.
- Do not reproduce another company's website, logo or copy, even if asked to "make it look like" one; build an original page in this style instead.

---

From [SkillLoom](https://skillloom.dev) — see [Basalt Dev Portfolio Site](https://skillloom.dev/skills/sl-basalt-dev-portfolio-site) for the rendered preview and the verification score.
