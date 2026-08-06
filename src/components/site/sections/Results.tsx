import { Reveal } from "../Reveal";
import { BackdropImage } from "../BackdropImage";
import { photos } from "@/assets/photos";

const EVALUATE_THROUGH = [
  "Strength improvements",
  "Movement quality",
  "Performance testing",
  "Training consistency",
  "Confidence and independence",
  "Return to work, recreation, or sport",
];

// NOTE: testimonials removed intentionally — do not add placeholder or
// fabricated client quotes back in. Only real, attributed testimonials
// should go here once they exist.
export function Results() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <BackdropImage
        label="athlete training session"
        overlay="primary"
        src={photos.resultsBackdrop}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rotate-45 rounded-3xl border border-primary-foreground/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rotate-45 rounded-3xl border border-primary-foreground/10"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            How Progress Is Measured
          </p>
          <h2 className="mt-3 text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
            Results should be visible, measurable, and meaningful.
          </h2>
          <p className="mt-5 text-lg text-primary-foreground/80">
            Progress does not look the same for every client. For one person, it may mean returning
            to exercise without fear. For another, it may mean improving jump power, sprint speed,
            strength, or confidence on the field.
          </p>
        </Reveal>

        <div className="mt-14 border-y border-primary-foreground/15 py-12">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-primary-foreground/60">
            We evaluate progress through
          </p>
          <ul className="mt-6 grid gap-y-4 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {EVALUATE_THROUGH.map((item, i) => (
              <Reveal as="li" key={item} delay={i * 60} className="flex items-start gap-3">
                <span aria-hidden className="mt-1.5 h-2.5 w-2.5 shrink-0 rotate-45 bg-accent" />
                <span className="text-[15px] text-primary-foreground/85">{item}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
