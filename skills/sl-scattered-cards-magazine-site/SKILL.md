---
name: sl-scattered-cards-magazine-site
description: Build a responsive, editable multi-page magazine or blog site with a distinctive scattered-editorial-card identity. Use this skill when a publisher, blogger, or small business needs an article-led website with a strong homepage, topic browsing, readable stories, and a coherent visual system. The design pairs slab headlines and grotesk body text with a cool paper ground, subtle noise, and carefully offset story cards.
---

# Scattered-Cards Magazine Site

An editorial website where loosely arranged story cards lead into focused, comfortable reading.

Style: **Offset Edition**. An independent magazine with a lively front page and calm, deliberate reading pages. Follow `references/style-guide.md` exactly.

## Use this skill when

- Independent publishers building a recognizable editorial home
- Founders publishing substantial stories around their work
- Small teams organizing articles by topic

## Do not use

- A single-screen campaign splash page without articles or topic navigation
- A dense analytics dashboard or transactional storefront
- To reproduce another company's brand, logo, product UI or copyrighted characters.

## Inputs

- Publication name, editorial premise, and intended readers
- Topic names and navigation priorities
- Article titles, excerpts, authors, dates, and full story copy
- Story photography or permission to use clearly marked local image placeholders
- Newsletter destination and any required contact or legal links

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

- Build linked home, topic index, article, archive, and about pages; keep the same navigation and footer across them.
- Use real local page destinations for Stories, Topics, Archive, About, Contact, and Newsletter links; reserve in-page anchors only for the newsletter form or clearly identified sections.
- Let the homepage cards appear casually offset while preserving a predictable reading order in the DOM and keyboard navigation.
- Give each topic a browsable index with a clear active state; make every featured story and topic card a keyboard-accessible link to a complete destination page.
- Use a stacked hero layout with non-overlapping text, artwork, and CTA controls; reserve the artwork area before loading and verify both buttons remain fully visible.
- Use subject-relevant, inspectable photography with meaningful alt text; maintain image aspect ratios and reserve space before loading.
- Make article pages quieter than the homepage, with byline, publication date, reading structure, captions, and related stories.
- At narrow widths, remove card rotation and overlap, collapse into a clean single-column feed, and verify no text or controls collide.

## Output contract

- `index.html`: one self-contained HTML file (inline CSS, inline SVG, no network requests, no storage APIs) that opens from `file://`.
- Exactly one `<h1>`, labelled form inputs, alt text on every image, no `REPLACE_` placeholders or filler text.
- Responsive at 390 / 768 / 1280px, using only the style-guide tokens.
- A hand-off note: sections used, any sample content that must be replaced, framework port (if any) and the validator output.
- Deliver editable source for all linked pages, with local styles and no required webfont or external runtime.
- Include believable sample stories and working navigation; every story and topic card must link to its corresponding local page, with no generic #top
- Document where the publisher replaces story copy, images, and newsletter destination.
- Include a hand-off note naming the sections used, identifying sample copy and images to replace, stating any framework port, and recording validator output.

## Reference demo and agent run

The preview (`preview/demo.html`) is a static reference built from sample content: it shows the layout, style, copy structure and the visible controls every interactive part needs (labelled form fields, carousel buttons, player chrome). Image areas are labelled placeholders and sample quotes or figures are marked as samples. In a real run the agent uses the user's content and assets, wires behaviour (form destinations, media sources, data) and keeps every promise in the output contract above.

## Failure rules

- Never hand over a file that fails the validator; fix it and run it again.
- If the brief lacks facts (prices, numbers, customer names), ask once; otherwise mark them clearly as sample content.
- Do not reproduce another company's website, logo or copy, even if asked to "make it look like" one; build an original page in this style instead.

---

From [SkillLoom](https://skillloom.dev) — see [Scattered-Cards Magazine Site](https://skillloom.dev/skills/sl-scattered-cards-magazine-site) for the rendered preview and the verification score.
