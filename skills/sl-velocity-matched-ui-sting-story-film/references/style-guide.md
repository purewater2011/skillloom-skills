# Style guide: Kinetic Grid Signal

A sharp, saturated product story where every interface movement accelerates the narrative and resolves into confident proof.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--bg` | #08111F | ground |
| `--surface` | #12233A | cards and panels |
| `--fg` | #F5F7FA | primary text |
| `--muted` | #C2CBD8 | secondary text |
| `--accent` | #FF5A36 | the one strong color: key words, primary action, one highlight per view |
| `--accent-2` | #56D6C1 | supporting color, used sparingly |
| `--rule` | #496078 | hairlines and borders |

## Type

- Display: mono stack, weight 800, uppercase, tight tracking, oversized scale.
- Body: sans stack. System fonts only; never load webfonts.

## Shape and texture

- Corner radius: 8px; borders: hairline; shadows: hard.
- Background motif: grid. Density: dense.

## Rules

- Use a visible technical grid on every scene, with grid lines aligned to the same canvas coordinates.
- Set all major headlines in uppercase mono at 800 weight and keep them to six words or fewer.
- Make each cut inherit the direction and approximate speed of the previous UI movement.
- Use the orange accent for urgency and action, and reserve mint for confirmation or proof.
- Keep interface panels rectangular with an 8px radius and hairline borders; avoid soft cards and decorative blobs.
- Animate only purposeful interface changes, counters, bars, and transitions; never add idle floating motion.
- Use one shared cubic-bezier ease family across scenes, with no elastic bounce or unrelated easing styles.
- End with a quiet two-beat hold on the brand line so the final message remains legible.
