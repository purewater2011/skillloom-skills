# Style guide: Launch Grid

A precise, energetic launch workspace with the visual discipline of a campaign plan.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--bg` | #063B3D | ground |
| `--surface` | #102B2E | cards and panels |
| `--fg` | #F7FFFC | primary text |
| `--muted` | #C5E3DF | secondary text |
| `--accent` | #79FFE1 | the one strong color: key words, primary action, one highlight per view |
| `--accent-2` | #FFD67D | supporting color, used sparingly |
| `--rule` | #568082 | hairlines and borders |

## Type

- Display: sans stack, weight 800, normal tracking, oversized scale.
- Body: mono stack. System fonts only; never load webfonts.

## Shape and texture

- Corner radius: 8px; borders: hairline; shadows: none.
- Background motif: grid. Density: balanced.

## Rules

- Use the deep-teal ground across the page; reserve charcoal surfaces for product screens, pricing plans, and controls.
- Draw a subtle square grid with CSS; align section labels, mockup edges, and dividers to its rhythm.
- Keep the hero headline to the product name; place the concrete value proposition immediately beneath it.
- Gradient one short phrase from cyan to warm amber; keep all essential copy solid and high-contrast.
- Build product previews as legible CSS device and interface mockups with realistic campaign data, not abstract rectangles.
- Limit corners to 8px, use one-pixel borders, and avoid glow effects, floating cards, and decorative shadows.
- Animate grid reveals and mockup transitions only on scroll, with a static reduced-motion presentation.
