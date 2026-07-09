import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Reveal } from "../Reveal";
import { CountUp } from "../CountUp";

const STATS = [
  { n: "94%", l: "of clients return to full activity" },
  { n: "500+", l: "athletes trained" },
  { n: "10+", l: "years in Tullahoma" },
  { n: "80%", l: "of clients from referrals" },
];

const TESTIMONIALS = [
  {
    body: "[Client testimonial coming — space reserved for a first-person quote about returning to strength after PT.]",
    name: "Client Name",
    detail: "Post-op knee rehab · 2024",
  },
  {
    body: "[Physician testimonial coming — reserved for a referring provider quote on outcomes and communication.]",
    name: "Physician Name, MD",
    detail: "Tullahoma referring provider",
  },
  {
    body: "[Athlete testimonial coming — reserved for a high-school or collegiate athlete quote on performance gains.]",
    name: "Athlete Name",
    detail: "High school athletics · 2025",
  },
  {
    body: "[Client testimonial coming — reserved for a longer-form quote on the difference between PT and FBT.]",
    name: "Client Name",
    detail: "Rotator cuff · 2023",
  },
];

function DiamondArrow({ direction, onClick, disabled }: { direction: "prev" | "next"; onClick: () => void; disabled: boolean }) {
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
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rotate-45 rounded-3xl border border-primary-foreground/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rotate-45 rounded-3xl border border-primary-foreground/10"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            Results & Referrals
          </p>
          <h2 className="mt-3 text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
            Real Results, Real Referrals.
          </h2>
          <p className="mt-5 text-lg text-primary-foreground/80">
            Most of our clients find us through their doctor or a friend who trained here.
            That's not marketing — that's the model.
          </p>
        </Reveal>

        <dl className="mt-14 grid gap-y-10 gap-x-6 border-y border-primary-foreground/15 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.l} delay={i * 80} className="flex items-start gap-4">
              <span aria-hidden className="mt-3 h-3 w-3 shrink-0 rotate-45 bg-accent" />
              <div>
                <dt className="stat-number text-6xl text-primary-foreground sm:text-7xl">
                  <CountUp value={s.n} />
                </dt>
                <dd className="mt-3 text-sm uppercase tracking-wider text-primary-foreground/70">{s.l}</dd>
              </div>
            </Reveal>
          ))}
        </dl>

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
              <DiamondArrow direction="prev" onClick={() => emblaApi?.scrollPrev()} disabled={!canPrev} />
              <DiamondArrow direction="next" onClick={() => emblaApi?.scrollNext()} disabled={!canNext} />
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
