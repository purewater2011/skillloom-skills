# Style guide: The Evidence Frame

Editorial warmth gives a precise technical change the pace and clarity of a short film.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--bg` | #B9C4B5 | ground |
| `--surface` | #F5F2E9 | cards and panels |
| `--fg` | #17231E | primary text |
| `--muted` | #34453C | secondary text |
| `--accent` | #783326 | the one strong color: key words, primary action, one highlight per view |
| `--accent-2` | #34575A | supporting color, used sparingly |
| `--rule` | #67776B | hairlines and borders |

## Type

- Display: serif stack, weight 700, normal tracking, regular scale.
- Body: sans stack. System fonts only; never load webfonts.

## Shape and texture

- Corner radius: 4px; borders: hairline; shadows: none.
- Background motif: frame. Density: balanced.

## Rules

- Keep a visible hairline frame inset from all four canvas edges in every scene.
- Set story headlines in serif type, at no more than eight words per frame.
- Use the clay accent only for the changed code line, a key outcome, or one transition marker per scene.
- Render code evidence inside a dark terminal inset with no more than four readable rows.
- Tint removed and added diff rows differently; never rely on color alone to distinguish them.
- Keep all explanatory copy on the warm paper surface and use sans type for labels and evidence.
- Cut between evidence frames; do not animate code character by character.
