# Style guide: Slate Console

Restrained and practical, with cool paper surfaces, crisp typography, and one focused accent for meaningful state.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--bg` | #F4F6F7 | ground |
| `--surface` | #FFFFFF | cards and panels |
| `--fg` | #172126 | primary text |
| `--muted` | #505C62 | secondary text |
| `--accent` | #176B58 | the one strong color: key words, primary action, one highlight per view |
| `--accent-2` | #DCEBE5 | supporting color, used sparingly |
| `--rule` | #CDD5D8 | hairlines and borders |

## Type

- Display: rounded stack, weight 600, normal tracking, compact scale.
- Body: rounded stack. System fonts only; never load webfonts.

## Shape and texture

- Corner radius: 8px; borders: hairline; shadows: none.
- Background motif: lines. Density: dense.

## Rules

- Keep the canvas cool white or pale gray; reserve pure white for the main work surface.
- Use rounded system sans typography, with compact headings and regular-weight supporting labels.
- Use the green accent only for primary actions, selected controls, and positive status.
- Keep text and rules high-contrast; use muted text only for readable secondary labels.
- Build the console from thin dividers and aligned columns; avoid decorative shadows and ornamental panels.
- Use compact 4-8px control radii and stable widths for grid columns and action buttons.
- Use specific account-field labels; never display generic headers such as Field 2 or Field 4.
