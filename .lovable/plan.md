# Homepage hero: four-photo collage + new copy

Only the homepage hero changes. Nav, colors, line/diamond graphics, headline, buttons, and the rest of the page stay as they are.

## Copy
- Headline: unchanged.
- New paragraph: "FIT Beyond Therapy provides one-on-one personal training, post-rehab strength development, athletic performance coaching, and objective testing for adults and athletes at every starting point."
- Both buttons: unchanged.
- New line under the buttons: "For everyday strength, post-rehab progress, active aging, and athletic performance."

## Photos
- Large left tile, "Personal Training": new medicine-ball photo (image-4).
- Top right, "Athletic Performance": the group-of-athletes demonstration photo already on the FIT Beyond Performance page. No new group photo came with this upload, so I'll reuse that one.
- Middle right, "Active Aging": new resistance-band photo with the older adult (image-7).
- Bottom right, "Individualized Coaching": new photo with the pregnant client (image-5; image-6 is the same photo, so I'll upload it once).
- Photos are used exactly as provided. Nothing is generated or edited.

## Layout
- Desktop: the main tile takes about 58% of the width and runs the full height. The other three are stacked on the right with about 12px gaps. The collage keeps the current large rounded outer corners, and the inner tiles get slightly smaller corners. It sits in the same frame size as the current photo, so the page doesn't shift.
- Each tile is cropped to keep the people in view (not the ceiling or floor). It gets a soft dark fade at the bottom and a small white label.
- Mobile: text and buttons come first, then a 2x2 grid of photos. The personal-training tile is slightly larger. No carousel.
- Interaction: a very slight zoom on hover (about 1.02x) on desktop only, turned off for people who prefer reduced motion. No arrows, dots, or autoplay.

## Performance
- The main photo loads first (high priority). The others lazy-load. Fixed frame sizes prevent layout shift. The photos are served from the image host already in use. Converting them to WebP/AVIF isn't possible in this setup, so the original files will be sized down by the browser.

## Technical details
- Upload 3 photos with lovable-assets: `hero-personal-training.png`, `hero-active-aging.png`, `hero-individualized.png`. Add `heroPersonalTraining`, `heroActiveAging`, `heroIndividualized` slots to `src/assets/photos.ts`. `photos.hero` stays as it is, because the Final CTA and Doctor Referral sections still use it.
- Replace the single `PlaceholderImage` in `src/components/site/sections/Hero.tsx` with a `HeroCollage` component. Desktop uses a CSS grid (`lg:grid-cols-[58fr_42fr] grid-rows-3`, main tile `row-span-3`, fixed `aspect-[4/5]`). Mobile uses `grid-cols-2`. Each tile sets its own focal point with `object-position` and uses `motion-safe:lg:hover:scale-[1.02]`.
- Check the result in a browser at 1280px and 390px wide.
