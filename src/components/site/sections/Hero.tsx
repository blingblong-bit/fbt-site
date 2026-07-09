import { Link } from "@tanstack/react-router";
import { PlaceholderImage } from "../PlaceholderImage";

export function Hero() {
  return (
    <section className="clip-diagonal-b relative overflow-hidden bg-background pb-16 lg:pb-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_100%_0%,oklch(0.5_0.21_258/0.08),transparent_60%)]" />

      {/* Diamond motif accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rotate-45 rounded-3xl border border-primary/15 bg-primary/[0.03]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-40 top-8 hidden h-24 w-24 rotate-45 rounded-lg border border-accent/20 lg:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 bottom-24 hidden h-40 w-40 rotate-45 rounded-2xl border border-primary/10 lg:block"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-24">
        <div className="lg:col-span-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <span className="h-2 w-2 rotate-45 bg-accent" />
            Tullahoma, TN
          </span>
          <h1 className="mt-5 text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
            Post-Rehab Strength Training That Gets You Back —{" "}
            <span className="text-primary">And Keeps You There.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Tullahoma's trusted bridge between physical therapy and full strength.
            Backed by physician referrals, data-driven assessments, and real results.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent-hover"
            >
              Schedule an Assessment
            </Link>
            <a
              href="tel:+19315550100"
              className="inline-flex items-center justify-center rounded-md border border-border bg-card px-6 py-3 text-base font-semibold text-primary transition-colors hover:bg-surface"
            >
              Call (931) 555-0100
            </a>
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
          <PlaceholderImage
            label="hero-training-photo.jpg — client training with coach on gym floor"
            aspect="aspect-[5/4]"
            className="relative z-10 shadow-elevated"
          />
        </div>
      </div>
    </section>
  );
}
