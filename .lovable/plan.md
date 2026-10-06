# Swap Final CTA background to the hero image

## What changes
- In `src/assets/photos.ts`, point the `finalCtaBackdrop` slot at the same photo the site hero uses (`coach-guided-training.jpg`) instead of the wall-ball photo.
- Nothing else changes: the dark overlay, text, buttons, layout, and all other sections stay as they are. The wall-ball photo remains on the Results backdrop.

## Why here
- All photos flow through the `photos` slot map, so re-assigning one slot is a single-line change with no component edits.

## Verification
- Confirm the Final CTA section ("Ready to start training with a plan?") shows the hero photo behind the text with the dark overlay intact, on desktop and mobile.
