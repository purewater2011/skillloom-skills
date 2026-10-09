# SkillLoom free skills

34 agent skills, MIT licensed, free to use and modify.

A skill is a folder your coding agent loads on demand: `SKILL.md` plus the references and
scripts it needs. These produce finished artefacts — slide decks, web pages, motion clips —
and they all render **locally**. No API key, no generation credits, no external service.

Works with Claude Code, Codex, Cursor, Gemini CLI, OpenCode and anything else that reads a
skill folder.

## Install

### One skill

```bash
npx skillloom install <slug>
```

### As a Claude Code plugin

All 34 at once, kept up to date:

```bash
claude plugin marketplace add purewater2011/skillloom-skills
claude plugin install skillloom@skillloom
```

### By hand

Or copy the folder straight into your agent's skills directory — these are plain files.

```bash
git clone https://github.com/purewater2011/skillloom-skills
cp -r skillloom-skills/skills/sl-beacon-saas-landing-page ~/.claude/skills/
```

Requirements: Node.js 20+. Motion and video skills also need FFmpeg and Chromium
(`npx playwright install chromium`).

## The skills

### Presentations (14)

| Skill | What it makes | |
|---|---|---|
| [Article Brief Deck](skills/sl-article-brief-deck/) | Turn an article or research packet into a clear, evidence-first presentation for teaching, curriculum planning, or editorial review. The deck keeps claims accurate while making the argument easy to scan and explain. | [Preview](https://skillloom.dev/skills/sl-article-brief-deck) |
| [Atmospheric Cinematic Svg Deck](skills/sl-atmospheric-cinematic-svg-deck/) | Build an image-led presentation that gives research and campaign material a cinematic sense of place. The deck uses editable SVG frames, restrained editorial typography, and deliberate pacing for professional storytelling. | [Preview](https://skillloom.dev/skills/sl-atmospheric-cinematic-svg-deck) |
| [Brand Story Deck](skills/sl-brand-story-deck/) | An editable, browser-ready 16:9 presentation that turns brand strategy into a polished story using bold, grounded color blocks and an editorial type pairing. | [Preview](https://skillloom.dev/skills/sl-brand-story-deck) |
| [Cobalt System Deck](skills/sl-cobalt-system-deck/) | A self-contained HTML deck for executive reporting in media and publishing. Its locked cobalt-and-lemon system keeps data, decisions, and exact wording consistent across slides. | [Preview](https://skillloom.dev/skills/sl-cobalt-system-deck) |
| [Confetti Gathering Deck](skills/sl-confetti-gathering-deck/) | A colorful editorial HTML deck for event concepts, guest journeys, program reveals, and recaps, built around slanted serif headlines and tactile confetti-paper details. | [Preview](https://skillloom.dev/skills/sl-confetti-gathering-deck) |
| [Consulting Storyline Deck](skills/sl-consulting-storyline-deck/) | Build an executive presentation around a clear decision. Each slide states a conclusion, supports it with focused evidence, and advances a coherent business case in a distinctive teal-and-amber visual system. | [Preview](https://skillloom.dev/skills/sl-consulting-storyline-deck) |
| [Editable Visual Deck](skills/sl-editable-visual-deck/) | An offline-ready HTML presentation with a dark modular-grid look, sharp action headlines, and editable charts and diagrams. Built for product launches and executive updates that need both polish and fast revision. | [Preview](https://skillloom.dev/skills/sl-editable-visual-deck) |
| [Field Notes Deck](skills/sl-field-notes-deck/) | Create an offline-ready executive presentation with a green field-notes canvas, crisp serif typography, aligned reference grids, and evidence-first charts. Best for publishing teams reporting results and asking clients to make a clear decision. | [Preview](https://skillloom.dev/skills/sl-field-notes-deck) |
| [Inclusive Cutpaper Deck](skills/sl-inclusive-cutpaper-deck/) | Create a client-ready executive presentation with layered cutpaper forms, editorial image windows, and exact, readable reporting. Built for course creators and designers presenting publishing work, audience insights, and decisions. | [Preview](https://skillloom.dev/skills/sl-inclusive-cutpaper-deck) |
| [Learning Loop Deck](skills/sl-learning-loop-deck/) | A presentation skill for explaining a learning cycle or reporting a training pilot. It turns source material into action-titled 16:9 slides with a consistent four-stage loop, bright editorial typography, learner activities, and clearly labeled evidence. | [Preview](https://skillloom.dev/skills/sl-learning-loop-deck) |
| [Ochre Editorial Deck](skills/sl-ochre-editorial-deck/) | A style-locked HTML deck for publishing reviews and executive reporting. It pairs assertive editorial headlines with precise charts, cool-paper layouts, and restrained ochre accents. | [Preview](https://skillloom.dev/skills/sl-ochre-editorial-deck) |
| [Research Talk Deck](skills/sl-research-talk-deck/) | An editable HTML deck for explaining a research question, method, evidence, and limitations in a conference-minimal warm-neutral style. Designed for talks where accuracy and legibility matter as much as visual polish. | [Preview](https://skillloom.dev/skills/sl-research-talk-deck) |
| [Sky Glass Deck](skills/sl-sky-glass-deck/) | A self-contained executive presentation style for publishing teams. It combines precise reporting, serif action titles, square glass panels, and luminous CSS compositions without relying on images. | [Preview](https://skillloom.dev/skills/sl-sky-glass-deck) |
| [Yellow Sketchnote Deck](skills/sl-yellow-sketchnote-deck/) | Turn a lesson, workshop, or explainer into a bold yellow sketchnote presentation with editorial typography, ink gestures, clean structure, and exact teaching content. | [Preview](https://skillloom.dev/skills/sl-yellow-sketchnote-deck) |

### Web pages (12)

| Skill | What it makes | |
|---|---|---|
| [Activity Calendar Chart UI Block](skills/sl-activity-calendar-chart-ui-block/) | Create a reusable activity calendar chart section that makes daily patterns legible at a glance. Its warm-neutral editorial styling combines an ink canvas, clay surfaces, and teal intensity cells for product analytics and executive reporting. | [Preview](https://skillloom.dev/skills/sl-activity-calendar-chart-ui-block) |
| [Basalt Dev Portfolio Site](skills/sl-basalt-dev-portfolio-site/) | A polished developer portfolio built around clear project proof, a dark basalt palette, and restrained cyan beam details. Made for developers who need an editable site that presents their work with confidence. | [Preview](https://skillloom.dev/skills/sl-basalt-dev-portfolio-site) |
| [Beacon SaaS Landing Page](skills/sl-beacon-saas-landing-page/) | Create a responsive launch page for a focused software product, with clear positioning, concise proof, and an editable dark minimalist design. | [Preview](https://skillloom.dev/skills/sl-beacon-saas-landing-page) |
| [Cadence Marketing Landing Page](skills/sl-cadence-marketing-landing-page/) | A conversion-focused software landing page with a campaign-grid visual system, CSS product mockups, concrete launch copy, pricing, and purchase-focused FAQs. | [Preview](https://skillloom.dev/skills/sl-cadence-marketing-landing-page) |
| [Interactive System Map Web Page](skills/sl-interactive-system-map-web-page/) | A web-page skill for turning architecture evidence into a navigable system map with editable nodes, directed relationships, semantic states, and inspectable citations. Designed for teaching, research, design review, and durable engineering documentation. | [Preview](https://skillloom.dev/skills/sl-interactive-system-map-web-page) |
| [Masonry Testimonial Wall UI Block](skills/sl-masonry-testimonial-wall-ui-block/) | A responsive, editorial testimonial section with varied quote heights, warm paper surfaces, and restrained teal details. Designed for product launches and marketing pages that need customer proof to feel human and easy to scan. | [Preview](https://skillloom.dev/skills/sl-masonry-testimonial-wall-ui-block) |
| [Minimal Motion Hero UI Block](skills/sl-minimal-motion-hero-ui-block/) | A reusable hero section for software launches and product sites, styled with a saturated teal ground, warm editorial typography, and restrained, accessible motion. | [Preview](https://skillloom.dev/skills/sl-minimal-motion-hero-ui-block) |
| [Project Knowledge Graph Web Page](skills/sl-project-knowledge-graph-web-page/) | A source-faithful web page for turning project evidence into an executive-readable knowledge graph. It combines claim cards, entity relationships, milestone context, confidence signals, and citation trails in a distinctive dark constellation canvas. | [Preview](https://skillloom.dev/skills/sl-project-knowledge-graph-web-page) |
| [Sage Sneaker Store Site](skills/sl-sage-sneaker-store-site/) | Create an editable sneaker storefront with a bold citron identity, a compact product-led hero, scannable listings, practical fit details, and a clear shopping path. | [Preview](https://skillloom.dev/skills/sl-sage-sneaker-store-site) |
| [Scattered-Cards Magazine Site](skills/sl-scattered-cards-magazine-site/) | An editable, multi-page editorial site with a lively card-led homepage, browsable topics, and distraction-free articles. | [Preview](https://skillloom.dev/skills/sl-scattered-cards-magazine-site) |
| [Scrapbook Resume Site](skills/sl-scrapbook-resume-site/) | Turn a creative professional's resume into a responsive portfolio site with a lanyard-style profile badge, paper-like project previews, cobalt highlights, and clear career history. | [Preview](https://skillloom.dev/skills/sl-scrapbook-resume-site) |
| [Slate Admin Console UI Block](skills/sl-slate-admin-console-ui-block/) | A reusable operations console block with key metrics, searchable account records, and working record editing. Designed for product teams that need a focused admin surface. | [Preview](https://skillloom.dev/skills/sl-slate-admin-console-ui-block) |

### Motion and video (8)

| Skill | What it makes | |
|---|---|---|
| [Agent-Chorus Capability Reel Story Film](skills/sl-agent-chorus-capability-reel-story-film/) | A short launch film that repeats one prompt across four product surfaces, turning a request into visible work. Built for social feeds with hard cuts, readable interface moments, and proof grounded in the material you provide. | [Preview](https://skillloom.dev/skills/sl-agent-chorus-capability-reel-story-film) |
| [Code-Change Explainer Story Film](skills/sl-code-change-explainer-story-film/) | A short, locally rendered video that turns a verified software fix into a clear narrative: the failure, the change, the proof, and the result. Framed code evidence and restrained editorial motion make it suitable for launch updates and changelogs. | [Preview](https://skillloom.dev/skills/sl-code-change-explainer-story-film) |
| [Count Up Hero Number Driven Ui Story Film](skills/sl-count-up-hero-number-driven-ui-story-film/) | A guided video-narrative skill for turning one measurable product promise into a sharp launch film. It combines count-up typography, cursor-led UI choreography, editorial answer lines, and near-black interface panels on a white field. | [Preview](https://skillloom.dev/skills/sl-count-up-hero-number-driven-ui-story-film) |
| [Device-Canvas Product Story Film](skills/sl-device-canvas-product-story-film/) | A locally rendered product-launch film that turns a real user problem into a dimensional device reveal, focused interface moment, and evidence-led ending. | [Preview](https://skillloom.dev/skills/sl-device-canvas-product-story-film) |
| [Liquid-Rupture Logo Reveal Story Film](skills/sl-liquid-rupture-logo-reveal-story-film/) | A cinematic social brand film that turns a fictional logo reveal into a short narrative: tension gathers in liquid colour fields, the system finds form, one rupture exposes the identity, and the final lockup lands with editorial restraint. | [Preview](https://skillloom.dev/skills/sl-liquid-rupture-logo-reveal-story-film) |
| [Synchronized Action Checklist Motion Clip](skills/sl-synchronized-action-checklist-motion-clip/) | A focused wide-format b-roll animation for showing a short publishing workflow moving from pending to complete in one controlled visual rhythm. It is built for social creators and educators who need polished, editable motion without a generation model. | [Preview](https://skillloom.dev/skills/sl-synchronized-action-checklist-motion-clip) |
| [Title Scene Takeover Motion Clip](skills/sl-title-scene-takeover-motion-clip/) | A focused motion clip for title scenes, lesson openers, and recurring editorial posts. It uses a saturated ground, an oversized didone title, a restrained grotesk caption, and one precise accent movement to make a series name feel established without visual noise. | [Preview](https://skillloom.dev/skills/sl-title-scene-takeover-motion-clip) |
| [Velocity-Matched UI Sting Story Film](skills/sl-velocity-matched-ui-sting-story-film/) | A narrative video skill for turning a software workflow into a fast, memorable social brand film. It choreographs interface fragments, counters, proof bars, and end-card typography around one motion language. Use it for launches, campaign cutdowns, and product stories that need a distinctive visual signature. | [Preview](https://skillloom.dev/skills/sl-velocity-matched-ui-sting-story-film) |

## Rendered previews

Every skill has a rendered sample of its output on [skillloom.dev](https://skillloom.dev) — the links in
the tables above go straight to them. Browsing the previews is the fastest way to tell
whether a skill makes the thing you want.

There is a larger paid catalog there too. These 34 are the free ones, mirrored
here under MIT so you can read them, fork them and learn from how they are written.

## License

MIT — see [LICENSE](LICENSE).
