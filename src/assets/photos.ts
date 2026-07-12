/**
 * Central photo → slot mapping.
 *
 * All real client photos live in src/assets as Lovable asset descriptors.
 * Sections import their photo from here rather than from the asset files
 * directly, so re-assigning a photo to a different slot is a one-line change.
 *
 * Slot assignments (per the site rebuild plan):
 * - hero .................. strongest shot, both faces visible, clear coaching engagement
 * - problemGapBackdrop .... older client w/ ankle strap + resistance band, hands-on coaching
 * - finalCtaBackdrop ...... mid-jump, visible exertion, dynamic
 * - resultsBackdrop ....... wide action shot (reused; sits under a heavy primary overlay)
 * - athleticPerformance ... most visibly athletic shot of the four
 * - doctorReferralBackdrop  reused shot; nearly invisible under the primary overlay
 *
 * Still missing (keep as placeholders until shot):
 * - ForceDecks-in-use photo (client on plates + coach reading screen)
 * - About section team photo
 * - DoctorReferral inline photo (coach + client reviewing assessment data)
 */
import coachGuidedTraining from "./coach-guided-training.jpg.asset.json";
import trainingCoachSenior from "./training-coach-senior.jpg.asset.json";
import wallballTraining from "./wallball-training.jpg.asset.json";
import resistanceStep from "./resistance-step.jpg.asset.json";

export const photos = {
  hero: coachGuidedTraining.url,
  problemGapBackdrop: trainingCoachSenior.url,
  finalCtaBackdrop: wallballTraining.url,
  resultsBackdrop: wallballTraining.url,
  athleticPerformance: resistanceStep.url,
  doctorReferralBackdrop: coachGuidedTraining.url,
} as const;
