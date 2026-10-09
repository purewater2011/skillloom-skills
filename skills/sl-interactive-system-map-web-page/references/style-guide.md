# Style guide: Signal Blueprint

A disciplined dark-grid canvas where semantic signals reveal system structure, evidence, and change paths.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--bg` | #07111F | ground |
| `--surface` | #10233A | cards and panels |
| `--fg` | #F4F7FB | primary text |
| `--muted` | #B7C5D8 | secondary text |
| `--accent` | #2ED6C5 | the one strong color: key words, primary action, one highlight per view |
| `--accent-2` | #F3B562 | supporting color, used sparingly |
| `--rule` | #29405B | hairlines and borders |

## Type

- Display: grotesk stack, weight 800, uppercase, wide tracking, oversized scale.
- Body: serif stack. System fonts only; never load webfonts.

## Shape and texture

- Corner radius: 8px; borders: hairline; shadows: none.
- Background motif: grid. Density: dense.

## Rules

- Make the interactive map the primary page content; keep the grid subordinate to nodes and edges.
- Use short uppercase display headings; keep control labels compact and readable.
- Use cyan for active paths and amber for uncertainty; pair every color signal with text or a distinct pattern.
- Keep nodes rectangular, keyboard reachable, and consistently sized across responsive states.
- Label edge direction and relationship type; expose confidence and citations in the detail panel.
- Use readable serif body copy and compact sans-serif controls and metadata.
- Show persistent focus and selected states; do not use hover as the only route to evidence.
