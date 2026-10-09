# Framework adaptation

The HTML deliverable is the source of truth. When the user asks for a framework version, port it without changing the design.

## Keep the tokens

Move the `:root` custom properties (`--bg`, `--surface`, `--fg`, `--muted`, `--accent`, `--accent-2`, `--rule`, fonts, radius, shadow) into the project's global stylesheet unchanged. Components reference `var(--token)`; never hard-code colors.

## React / Next.js

- One component per section (`Hero.tsx`, `Pricing.tsx` …) with typed props matching the section fields in `section-library.md`.
- Put the kit CSS in `app/globals.css` (or a CSS module per section). Keep class names so variants keep working.
- `<details>` FAQ needs no state. The mobile menu becomes a `useState` toggle on the nav.
- Next.js: sections are Server Components; only the nav toggle needs `"use client"`.

## Vue

- One SFC per section with `defineProps`; global tokens in `main.css`; scoped styles may reuse the kit classes.

## Tailwind CSS

- Map tokens in `tailwind.config` (`colors: { bg: "var(--bg)", accent: "var(--accent)", … }`, `borderRadius: { DEFAULT: "var(--radius)" }`) so utilities stay on-brand.
- Keep the `:root` block; utilities read the variables.

## Checks after porting

- Same visual at 390, 768 and 1280px; one `<h1>`; all inputs labelled; no network requests added.
