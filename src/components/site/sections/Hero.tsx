import { Link } from "@tanstack/react-router";
import { useScrollY } from "@/hooks/useScrollY";
import { photos } from "@/assets/photos";

const TILES = [
  {
    label: "Personal Training",
    src: photos.heroPersonalTraining,
    pos: "object-[60%_30%]",
    alt: "Trainer demonstrating a medicine ball movement to an adult client",
  },
  {
    label: "Athletic Performance",
    src: photos.performanceGroupDemonstration,
    pos: "object-[50%_35%]",
    alt: "Trainer demonstrating a drill to a group of young athletes",
  },
  {
    label: "Active Aging",
    src: photos.heroActiveAging,
    pos: "object-[45%_30%]",
    alt: "Older adult performing a resistance band row while the trainer observes",
  },
  {
    label: "Individualized Coaching",
    src: photos.heroIndividualized,
    pos: "object-[55%_38%]",
    alt: "Trainer guiding a pregnant client through a banded lunge step",
  },
];

export function Hero() {
  const y = useScrollY();
  const slow = { transform: `translateY(${y * 0.15}px)` };
  const slower = { transform: `translateY(${y * 0.08}px)` };
  const slowest = { transform: `translateY(${y * 0.22}px)` };

  return (
    <section className="clip-diagonal-b relative overflow-hidden bg-background pb-16 lg:pb-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_100%_0%,oklch(0.5_0.21_258/0.08),transparent_60%)]" />

      {/* Diamond motif accents — parallax */}
      <div
        aria-hidden
        style={slow}
        className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rotate-45 rounded-3xl border border-primary/15 bg-primary/[0.03] will-change-transform"
      />
      <div
        aria-hidden
        style={slowest}
        className="pointer-events-none absolute right-40 top-8 hidden h-24 w-24 rotate-45 rounded-lg border border-accent/20 will-change-transform lg:block"
      />
      <div
        aria-hidden
        style={slower}
        className="pointer-events-none absolute -left-16 bottom-24 hidden h-40 w-40 rotate-45 rounded-2xl border border-primary/10 will-change-transform lg:block"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-24">
        <div className="lg:col-span-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <span className="h-2 w-2 rotate-45 bg-accent" />
            Assessment-Driven Training in Tullahoma, TN
          </span>
          <h1 className="mt-5 text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
            Training built around where you are —{" "}
            <span className="text-primary">and where you want to go.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            FIT Beyond Therapy provides one-on-one personal training, post-rehab strength
            development, athletic performance coaching, and objective testing for adults and
            athletes at every starting point.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent-hover"
            >
              Schedule a Consultation
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-md border border-border bg-card px-6 py-3 text-base font-semibold text-primary transition-colors hover:bg-surface"
            >
              Explore Our Services
            </Link>
          </div>
          <p className="mt-6 text-sm font-medium text-muted-foreground">
            For everyday strength, post-rehab progress, active aging, and athletic performance.
          </p>
        </div>

        <div className="relative lg:col-span-6">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-4 -z-0 rotate-45 rounded-3xl border-2 border-primary/20"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-6 -right-6 -z-0 h-32 w-32 rotate-45 rounded-xl bg-primary/10"
          />
          <div className="relative z-10 grid aspect-[4/5] grid-cols-2 grid-rows-2 gap-3 overflow-hidden rounded-2xl shadow-elevated lg:grid-cols-[58fr_42fr] lg:grid-rows-3">
            {TILES.map((t, i) => (
              <figure
                key={t.label}
                className={`group relative overflow-hidden rounded-xl bg-muted ${i === 0 ? "lg:row-span-3" : ""}`}
              >
                <img
                  src={t.src}
                  alt={t.alt}
                  loading={i === 0 ? "eager" : "lazy"}
                  fetchPriority={i === 0 ? "high" : "auto"}
                  decoding="async"
                  className={`absolute inset-0 h-full w-full object-cover transition-transform duration-500 motion-safe:lg:group-hover:scale-[1.02] ${t.pos}`}
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/65 to-transparent" />
                <figcaption className="absolute bottom-2 left-2.5 whitespace-nowrap text-[11px] font-semibold uppercase tracking-wider text-white sm:text-xs">
                  {t.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
