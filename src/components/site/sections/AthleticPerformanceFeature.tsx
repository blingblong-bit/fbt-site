import { Link } from "@tanstack/react-router";
import { Reveal } from "../Reveal";

export function AthleticPerformanceFeature() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            FIT Beyond Performance
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Develop the physical qualities that carry over to competition.
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            FIT Beyond Performance helps athletes become stronger, faster, more powerful, and better
            prepared for the demands of their sport.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:gap-8">
          <Reveal delay={80}>
            <p className="text-lg text-foreground/80">
              We offer individual coaching, small-group training, team programs, and athlete
              assessments.
            </p>
          </Reveal>

          <Reveal delay={160} className="flex flex-wrap gap-3">
            <Link
              to="/fit-beyond-performance"
              className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent-hover"
            >
              Explore FIT Beyond Performance
            </Link>
            <Link
              to="/fit-beyond-performance"
              hash="assessment"
              className="inline-flex items-center justify-center rounded-md border border-border bg-card px-6 py-3 text-base font-semibold text-primary transition-colors hover:bg-surface"
            >
              Request an Athlete Assessment
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
