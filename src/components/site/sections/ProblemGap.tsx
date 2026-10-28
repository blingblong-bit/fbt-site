import { Link } from "@tanstack/react-router";
import { Reveal } from "../Reveal";
import { BackdropImage } from "../BackdropImage";
import { photos } from "@/assets/photos";

export function ProblemGap() {
  return (
    <section id="post-rehab" className="relative bg-background text-primary-foreground">
      <BackdropImage
        label="trainer guiding an older client through resistance-band training"
        overlay="soft"
        imageClassName="object-[center_28%]"
        src={photos.personalTraining}
      />
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-secondary-foreground">
            Post-Rehab Training
          </p>
          <h2 className="mt-3 text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
            Finishing therapy is not always the end of the process.
          </h2>
        </Reveal>
        <div className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-primary-foreground/80">
          <Reveal as="p" delay={80}>
            Philip kept seeing the same gap in clinical and rehabilitation settings: people
            finishing therapy without feeling ready for the gym, work, recreation, or daily life.
            FIT was built to close that gap with individualized strength and movement training
            after the clinical phase — not to replace physical therapy or provide medical
            treatment.
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
