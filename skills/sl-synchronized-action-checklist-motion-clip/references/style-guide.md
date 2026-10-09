# Style guide: Synchronized Ink Blocks

Quietly confident editorial motion with precise blocks, generous negative space, and one vivid signal color.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--bg` | #101214 | ground |
| `--surface` | #1b1f23 | cards and panels |
| `--fg` | #f4f5f2 | primary text |
| `--muted` | #b4bcc4 | secondary text |
| `--accent` | #d9ff4f | the one strong color: key words, primary action, one highlight per view |
| `--accent-2` | #8de1d0 | supporting color, used sparingly |
| `--rule` | #394149 | hairlines and borders |

## Type

- Display: grotesk stack, weight 800, uppercase, tight tracking, oversized scale.
- Body: grotesk stack. System fonts only; never load webfonts.

## Shape and texture

- Corner radius: 14px; borders: hairline; shadows: none.
- Background motif: blocks. Density: airy.

## Rules

- Set all primary headlines in uppercase grotesk at 800 weight, with no more than 6 words per headline.
- Use the accent only for completed states, active ticks, and one small progress signal per scene.
- Keep the canvas near-black with generous negative space; never fill more than 55% of the frame with interface blocks.
- Build checklist rows from aligned rectangular blocks with 14px corners and hairline rules, never pills.
- Animate every checklist item with the same easing and a shared baseline so the action reads as synchronized.
- Keep secondary labels in muted gray at regular weight and never let them compete with the active checklist state.
- Use only one strong accent color; accent2 is reserved for a rare secondary status cue.
- Avoid decorative illustrations, gradients, shadows, texture, and unrelated UI chrome.
