# Media slots

This directory is where client-supplied media goes. Drop files here and reference them from the component asset slots.

## Expected assets

- `hero-reel.mp4` — 2.39:1 looping muted reel, ~15–25s, 1080p+, H.264/HEVC. Keep file under 6MB.
- `hero-reel.jpg` — poster frame for the above, same aspect.
- `stills/<slug>/01.jpg` — project still frames, 16:9 or 2.39:1.
- `crew/<name>.jpg` — square crew portraits, 600x600+.

Every placeholder in the UI is labeled with `ASSET SLOT 0X` and a caption so it's obvious what to replace.
