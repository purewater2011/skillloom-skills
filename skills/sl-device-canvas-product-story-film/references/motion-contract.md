# Motion contract: Split Canvas Reveal

These rules are fixed for this skill. Check every cut against them before rendering.

1. **One ease family.** Every arrival uses `cubic-bezier(.22,1,.36,1)` (soft); exits use the same curve. No bounce, no elastic, no linear moves except continuous loops (marquee, ambient drift).
2. **One scene transition.** Scenes change with a fade (cross-fade), 0.3-0.45 s, built into each scene's visibility keyframes.
3. **Nothing freezes at a cut.** The ambient layer and the progress line run for the whole film, so motion never stops at a seam.
4. **Durations.** Total 20-45 s, 4-8 scenes of 2-6 s; the end card holds at least 1.5 s.
5. **Staggers.** Elements inside a scene enter 0.08-0.3 s apart, top to bottom, reading order first.
6. **Type minimums.** Headlines at least 54 px, body lines at least 24 px on the 1280x720 stage. Never more than 12 words on screen at once.
7. **Safe area.** Keep text and key shapes 72 px inside every edge.
8. **Color.** `--accent` marks one thing per scene: the key word, the leading bar, the final number.
9. **Truth.** Numbers, names and claims come from the user's brief. Never invent metrics.

Ease family: soft · Transition: fade · Family: a short story film (20-45 s).
