# Style guide: Sky Glass Editorial

Bright, composed, and analytical, with the visual depth of editorial photography rendered entirely in CSS.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--bg` | #FFFFFF | ground |
| `--surface` | #F3F6F5 | cards and panels |
| `--fg` | #111111 | primary text |
| `--muted` | #555555 | secondary text |
| `--accent` | #17615D | the one strong color: key words, primary action, one highlight per view |
| `--accent-2` | #A95A32 | supporting color, used sparingly |
| `--rule` | #BBC7C4 | hairlines and borders |

## Type

- Display: serif stack, weight 600, normal tracking, regular scale.
- Body: grotesk stack. System fonts only; never load webfonts.

## Shape and texture

- Corner radius: 0px; borders: hairline; shadows: none.
- Background motif: lines. Density: balanced.

## Rules

- Use pure white as the slide ground and near-black for every primary headline.
- Build photographic depth only with layered CSS gradients, translucent planes, and fine lines; do not load images.
- Set action titles as complete sentences in the serif display face; use grotesk for data, labels, and body copy.
- Keep glass panels square-cornered and use an opaque light backing behind any text placed over a gradient.
- Use the teal accent for conclusions or active data only; reserve the warm accent for a single comparison or annotation per slide.
- Align titles, charts, and footers to one consistent slide grid, with hairline rules separating content bands.
- Show units, time periods, and illustrative-data labels next to the figures they qualify.
