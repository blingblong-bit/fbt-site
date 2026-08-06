import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
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

const TESTIMONIALS = [
  {
    body: "Before starting, I did not feel confident returning to regular training. The program gave me a clear progression and helped me rebuild strength without feeling lost.",
    name: "Client Name",
    detail: "Post-rehab client",
  },
  {
    body: "The testing helped me understand what I needed to improve, and the training gave me a plan instead of just random workouts.",
    name: "Athlete or Parent",
    detail: "Athletic performance client",
  },
  {
    body: "[Client testimonial coming — space reserved for a first-person quote on personal training results.]",
    name: "Client Name",
    detail: "Personal training client",
  },
  {
    body: "[Coach testimonial coming — space reserved for a team or athlete coach's quote.]",
    name: "Coach Name",
    detail: "Team training partner",
  },
];

function DiamondArrow({
  direction,
  onClick,
  disabled,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={direction === "prev" ? "Previous testimonial" : "Next testimonial"}
      onClick={onClick}
      disabled={disabled}
      className="group relative grid h-12 w-12 rotate-45 place-items-center rounded-lg border border-primary-foreground/25 bg-primary-foreground/5 transition-all hover:border-accent hover:bg-accent/15 disabled:cursor-not-allowed disabled:opacity-40"
    >
      <span className="-rotate-45 text-primary-foreground transition-colors group-hover:text-accent">
        {direction === "prev" ? "‹" : "›"}
      </span>
    </button>
  );
}

export function Results() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);
  const [canPrev, setCanPrev] = useState(true);
  const [canNext, setCanNext] = useState(true);
  const [snaps, setSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

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
            Real Progress
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

        <Reveal className="mt-14">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="min-w-0 flex-[0_0_100%] pr-4 md:flex-[0_0_50%]">
                  <figure className="h-full rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-7">
                    <blockquote className="text-lg leading-relaxed text-primary-foreground/90">
                      <span className="font-display text-3xl leading-none text-accent">"</span>
                      {t.body}
                    </blockquote>
                    <figcaption className="mt-5 border-t border-primary-foreground/15 pt-4">
                      <div className="font-semibold text-primary-foreground">{t.name}</div>
                      <div className="text-sm text-primary-foreground/70">{t.detail}</div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <DiamondArrow
                direction="prev"
                onClick={() => emblaApi?.scrollPrev()}
                disabled={!canPrev}
              />
              <DiamondArrow
                direction="next"
                onClick={() => emblaApi?.scrollNext()}
                disabled={!canNext}
              />
            </div>
            <div className="flex items-center gap-3">
              {snaps.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`h-2.5 w-2.5 rotate-45 transition-all ${
                    i === selected
                      ? "bg-accent scale-125"
                      : "bg-primary-foreground/30 hover:bg-primary-foreground/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
