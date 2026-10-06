# Homepage cleanup: shorter, clearer path to a consultation

## New homepage order
1. Hero collage — unchanged.
2. Three service paths (existing cards: Post-Rehab Training, FIT Beyond Performance, Personal Training). These become the main ways into the detailed pages. The copy stays the same.
3. **How FIT Works** (new, compact). Three steps in the existing diamond style:
   - Assess where you are: a conversation plus objective testing, including ForceDecks force plates when it's useful.
   - Build an individualized plan: programming built around your goals, history, and current ability.
   - Measure progress: retesting and tracking so the changes are visible.
   One small link: "Learn about performance testing" goes to the ForceDecks page.
4. **What Clients Say** (new). Three real testimonials, shown as cards and credited by name: Linda King, Ginger Ann, and Kimberly Rhodes. They'll be trimmed slightly so they read well. Nothing will be invented.
5. Final consultation call-to-action — unchanged. Then the footer.

## Removed from the homepage only (still on the site)
- The athletic-performance feature is already covered on the FIT Beyond Performance page.
- The dark post-rehab section and the personal-training feature move to the Services page, under the existing service cards. The "Post-Rehab" and "Personal Training" links will scroll to them.
- The full ForceDecks section already lives on the ForceDecks page.
- The blue "Results should be visible…" section is removed from the homepage.
- The About/team section and the FIT Beyond Plus section already live on the About page.
- The FAQ already lives on the ForceDecks page.

## One thing to check on the testimonials
Kimberly's quote says Phillip "came to see her for physical therapy" and "helped get [her] fractured hip diagnosed." The site says clearly that FIT is not a physical-therapy clinic. I suggest trimming her quote to the recovery part: "Thanks to him she is back up walking on her own and able to do her normal daily activities. I highly recommend Phillip at Fit Beyond Therapy." Ginger's mention of "traditional physical therapy elsewhere" is fine, because it refers to another provider.

## Technical details
- `src/routes/index.tsx`: render Hero, ChooseYourPath, a new HowItWorks section, a new Testimonials section, and FinalCTA.
- Add new `src/components/site/sections/HowItWorks.tsx` and `Testimonials.tsx`. Both use the existing tokens, Reveal, and the diamond markers.
- `src/routes/services.tsx`: add ProblemGap (with `id="post-rehab"` if it's missing) and PersonalTraining (which already has `id="personal-training"`).
- Leave the unused components in place. Results and AthleticPerformanceFeature stay in the codebase.
- Check in Playwright at 1280px and 390px, and confirm the service-card links still land on the right spots.
