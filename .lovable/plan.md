# Add real photos to the FIT Beyond Performance page

Replace the remaining labeled placeholders on `/fit-beyond-performance` with the five uploaded photos.

## Current state

The page has four spots without real photos:

- Hero photo (uses the `athleticPerformance` slot — currently the single-leg step photo)
- "What We Develop" section — two side-by-side placeholders ("Sprint and jump training in progress", "Coach working directly with an athlete")
- Performance Testing section — placeholder ("Athlete on ForceDecks plates with coach reading the screen")
- "Built for Development" facility section — backdrop with no image

## Photo assignments

| Uploaded photo | Where it goes |
|---|---|
| Coach guiding three athletes on step platforms (06:45) | Page hero — replaces the step photo in the `athleticPerformance` slot |
| Athlete jumping on VALD ForceDecks plates | Testing section inline photo |
| Athlete jumping on the VertiMax platform | "Sprint and jump training in progress" |
| Coach demonstrating movement to a group of young athletes | Second "What We Develop" photo, with group-demonstration alt text |
| Trainer coaching a group in the gym with blue walls | Facility section full-bleed backdrop |

The step photo currently in the hero stays in use for the ProblemGap and FinalCTA backdrops; nothing else changes on other pages.

## Steps

1. Upload all five photos to the CDN and write asset pointer files in `src/assets/`.
2. Update `src/assets/photos.ts` with slots for the new shots (hero slot repointed, four new slots).
3. Update `src/routes/fit-beyond-performance.tsx` to pass each photo into its placeholder/backdrop, preserve the existing dark facility overlay, and use focal positioning for the hero and facility images without changing the layout.
4. Verify in the browser that all five photos render, the facility text stays legible, and the hero and facility crops keep the coach and athletes visible on desktop and mobile widths.

No copy, layout, or styling changes beyond the photo slots.
