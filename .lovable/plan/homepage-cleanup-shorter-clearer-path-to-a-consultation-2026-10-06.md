# Homepage cleanup: shorter, clearer path to a consultation

## New homepage order
1. Hero collage: unchanged.
2. Three service paths. The existing cards stay, with the same copy, and become the main ways into the detail pages:
   - Post-Rehab Training → /services#post-rehab
   - FIT Beyond Performance → /fit-beyond-performance
   - Personal Training → /services#personal-training
3. **How FIT Works** (new, compact). Three steps in the existing diamond style:
   - Assess where you are: a conversation plus objective testing, including ForceDecks force plates when useful.
   - Build an individualized plan: programming around your goals, history, and current ability.
   - Measure progress: retesting and tracking so changes are visible.
   One small link, "Learn about performance testing", goes to the ForceDecks page.
4. **What Clients Say** (new). Three real testimonials. Each card is labeled "Verified Google review" and credited by name. The wording stays authentic:
   - Linda King: her full quote, unedited.
   - Ginger Ann: her full quote, unedited.
   - Kimberly Rhodes: exactly "Thanks to him she is back up walking on her own and able to do her normal daily activities. I highly recommend Phillip at Fit Beyond Therapy."
5. Final consultation call-to-action: unchanged. Then the footer.

## Removed from the homepage only (still on the site)
- The athletic-performance feature is already covered on the FIT Beyond Performance page.
- The dark post-rehab section and the personal-training feature move to the Services page, under the service cards, so the two links above land on them.
- The full ForceDecks section and the FAQ are already on the ForceDecks page.
- The About/team and FIT Beyond Plus sections are already on the About page.
- The blue "Results should be visible…" section is removed from the homepage.

## Verification
- Start on the homepage and click each service card in one session, without refreshing. Confirm each card lands on its destination: Services scrolls to the right section, and Performance opens its page.
- Check the homepage at 1280px and 390px wide, and confirm the page has no overflow and the build is clean.

## Technical details
- `src/routes/index.tsx` renders Hero, ChooseYourPath, HowItWorks, Testimonials, and FinalCTA.
- New files: `src/components/site/sections/HowItWorks.tsx` and `Testimonials.tsx`, both using the existing tokens and Reveal.
- `src/routes/services.tsx` adds ProblemGap and PersonalTraining. ProblemGap gets `id="post-rehab"` if it lacks it; PersonalTraining already has `id="personal-training"`. Any existing `id="post-rehab"` in Services is checked so it isn't duplicated.
- Unused components (Results, AthleticPerformanceFeature) stay in the codebase.
