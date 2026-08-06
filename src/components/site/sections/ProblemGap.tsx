import { Link } from "@tanstack/react-router";
import { Reveal } from "../Reveal";
import { BackdropImage } from "../BackdropImage";
import { photos } from "@/assets/photos";

export function ProblemGap() {
  return (
    <section id="post-rehab" className="relative bg-background text-primary-foreground">
      <BackdropImage
        label="client bridging rehab to strength"
        overlay="soft"
        src={photos.problemGapBackdrop}
      />
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-secondary-foreground">
            Post-Rehab Training
          </p>
          <h2 className="mt-3 text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
            Physical therapy gets you moving again. We help you become strong again.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-8 text-lg leading-relaxed text-primary-foreground/80 md:grid-cols-2">
          <Reveal as="p" delay={80}>
            Being discharged from physical therapy does not always mean you are ready to return to
            unrestricted exercise, demanding work, recreation, or sports. FIT Beyond Therapy
            provides structured strength and movement training for people who have completed
            rehabilitation but still need help rebuilding confidence, capacity, and physical
            resilience.
          </Reveal>
          <Reveal as="p" delay={160}>
            Our goal is not to replace physical therapy. We begin after the clinical phase and help
            you progress toward stronger, more capable movement.
          </Reveal>
        </div>
        <Reveal delay={220} className="mt-10">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent-hover"
          >
            Schedule a Post-Rehab Consultation
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
