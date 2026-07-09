import { Link } from "@tanstack/react-router";
import { PlaceholderImage } from "./PlaceholderImage";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_100%_0%,oklch(0.28_0.06_255/0.06),transparent_60%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-24">
        <div className="lg:col-span-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Tullahoma, TN
          </span>
          <h1 className="mt-5 text-4xl font-bold text-primary sm:text-5xl lg:text-6xl">
            Post-Rehab Strength Training That Gets You Back — And Keeps You There.
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

        <div className="lg:col-span-6">
          <PlaceholderImage
            label="hero-training-photo.jpg — client training with coach on gym floor"
            aspect="aspect-[5/4]"
            className="shadow-elevated"
          />
        </div>
      </div>
    </section>
  );
}
