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
        className="pointer-events-none absolute -right-24 top-24 hidden h-72 w-72 rotate-45 rounded-3xl border border-primary/15 bg-primary/[0.03] will-change-transform lg:block"
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
        <div className="text-center lg:col-span-6 lg:text-left">
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
            The first thing we identify is{" "}
            <span className="mx-auto block w-fit lg:mx-0">
              <span className="block text-5xl font-extrabold tracking-tight text-primary sm:text-6xl lg:text-7xl">
                <span className="text-[0.8em] font-bold text-primary/70">“</span>
                THE GAP
                <span className="text-[0.8em] font-bold text-primary/70">”</span>
              </span>

              {/* The gap indicator — sized to the headline so the arrow drops into its center */}
              <span
                aria-hidden="true"
                className="mt-3 flex justify-center text-primary"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-7 w-7 sm:h-8 sm:w-8"
                >
                  <path d="M12 4v14" />
                  <path d="m6 13 6 6 6-6" />
                </svg>
              </span>
              <span aria-hidden="true" className="mt-1 flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rotate-45 rounded-[1px] bg-accent" />
                <span className="h-px flex-1 bg-primary/40" />
                <span className="w-6 shrink-0 sm:w-8" />
                <span className="h-px flex-1 bg-primary/40" />
                <span className="h-1.5 w-1.5 shrink-0 rotate-45 rounded-[1px] bg-accent" />
              </span>
              <span className="mt-3 hidden items-baseline justify-between gap-6 text-[11px] font-semibold uppercase leading-tight tracking-wide text-muted-foreground lg:flex">
                <span className="whitespace-nowrap">Where are you?</span>
                <span className="whitespace-nowrap">Where do you want to go?</span>
              </span>
            </span>
            <span
              aria-hidden="true"
              className="mx-auto mt-3 grid w-full grid-cols-[minmax(0,1fr)_24px_minmax(0,1fr)] items-baseline text-[10px] font-semibold uppercase leading-tight tracking-wide text-muted-foreground sm:grid-cols-[minmax(0,1fr)_32px_minmax(0,1fr)] sm:text-[11px] lg:hidden"
            >
              <span className="text-center text-balance">Where are you?</span>
              <span />
              <span className="text-center text-balance">Where do you want to go?</span>
            </span>
          </h1>


          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
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
                <figcaption className="absolute bottom-2 left-2 whitespace-nowrap text-[9.5px] font-semibold uppercase tracking-wide sm:left-2.5 sm:tracking-wider text-white sm:text-xs">
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
