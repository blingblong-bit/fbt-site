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
        imageClassName="object-[center_15%]"
        src={photos.problemGapBackdrop}
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
        <div className="mt-10 grid gap-8 text-lg leading-relaxed text-primary-foreground/80 md:grid-cols-2">
          <Reveal as="p" delay={80}>
            Phillip saw the same problem repeatedly in clinical and rehabilitation settings: people
            could be discharged from therapy and still feel unprepared for the gym, work,
            recreation, or daily life. A woman struggling to return to exercise after a hip
            replacement made the gap especially clear.
          </Reveal>
          <Reveal as="p" delay={160}>
            FIT Beyond Therapy was created to help close that gap with individualized strength and
            movement training after the clinical phase. We do not replace physical therapy or
            provide medical treatment; we help people keep building once they are ready for
            training.
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
