# Section library

This skill delivers a **complete page** (`index.html`). Reference composition from the demo, in order: `nav` → `hero` → `gallery` → `split` → `stats` → `features` → `steps` → `cta` → `footer`. `nav`, `hero` and `footer` are always required; the others follow the brief.

| Kind | Purpose | Word limits |
|---|---|---|
| `nav` | Brand, 2-5 links, one call to action. Sticky; collapses to a menu button under 640px. | brand ≤ 3 words; links 1-2 words; cta ≤ 3 words |
| `hero` | The promise. Variants: split (copy + product visual), centered (copy over visual), stacked (oversized headline). | eyebrow ≤ 5 words; headline ≤ 12 words; sub ≤ 30 words; two buttons ≤ 3 words each |
| `logos` | Social proof strip of customer or partner wordmarks (text only; never real third-party logos without permission). | label ≤ 8 words; 4-6 names |
| `features` | 3-6 benefits with an icon each. In system-map / knowledge-graph scenes this renders as a node map: the first item is the core node. | heading ≤ 4 words; body ≤ 22 words |
| `split` | One idea explained in depth next to a visual; alternate `flip` between consecutive splits. | title ≤ 10 words; body ≤ 45 words; 2-4 bullets ≤ 10 words |
| `stats` | 3-4 numbers that prove the promise. In chart / KPI / monitor scenes this renders as a chart panel (KPI row + chart). | value ≤ 6 characters; label ≤ 8 words |
| `steps` | How it works in 3-4 steps. | heading ≤ 4 words; body ≤ 22 words |
| `testimonials` | 2-3 quotes. Layout follows the scene (grid, masonry, ticker, carousel, spotlight, tilted, portrait, feed, columns, colour block). | quote ≤ 40 words; name; role ≤ 6 words. Fictional quotes must be labelled as sample content. |
| `pricing` | 2-3 plans; exactly one `featured`. | plan name ≤ 2 words; 3-5 features ≤ 8 words |
| `faq` | 3-6 expandable questions (native <details>, no JavaScript). | question ≤ 14 words; answer ≤ 45 words |
| `gallery` | Work, products or posts as cards. In data-grid / records / admin scenes this renders as a sortable-looking table. | title ≤ 5 words; meta ≤ 8 words |
| `newsletter` | Email capture with a labelled input. | headline ≤ 10 words; sub ≤ 25 words |
| `cta` | Closing call to action band. | headline ≤ 10 words; sub ≤ 25 words; button ≤ 3 words |
| `footer` | Brand, 2-4 link columns, legal line. | column heading ≤ 2 words; 2-5 links |

## Rules

- One `<h1>` per page (the hero headline; in a block, the block title). Every other section title is `<h2>`.
- Write real copy from the brief. Never ship lorem ipsum or `REPLACE_` placeholders.
- Icons are the inline SVGs already in the template (24px, 1.5px stroke). No emoji, no icon fonts, no remote images.
- Visuals are built from tokens (CSS shapes, SVG). If the user supplies their own images, add them with `alt` text and keep them inside the skill output folder.
- Interactive parts use native HTML (`<details>`, `<form>`, `<a>`). Short `<script>` blocks are allowed for the mobile menu, carousel controls and player toggles; no inline `on*=` handlers.
