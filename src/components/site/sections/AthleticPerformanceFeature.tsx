import { Link } from "@tanstack/react-router";
import { Reveal } from "../Reveal";

const TRAINING_INCLUDES = [
  "Acceleration and sprint mechanics",
  "Strength and power development",
  "Jumping and landing",
  "Deceleration and change of direction",
  "Coordination and movement skill",
  "Conditioning",
  "ForceDecks testing and progress tracking",
];

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

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:items-start">
          <Reveal delay={80} className="lg:col-span-7">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Training may include
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {TRAINING_INCLUDES.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-foreground/80">
                  <span aria-hidden className="mt-1.5 h-2 w-2 shrink-0 rotate-45 bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-foreground/80">
              We offer individual coaching, small-group training, team programs, and athlete
              assessments.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Train with experienced coaching, objective testing, and equipment selected
              specifically for strength and athletic development.
            </p>
          </Reveal>

          <Reveal delay={160} className="flex flex-col gap-3 lg:col-span-5">
            <Link
              to="/athletic-performance"
              className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent-hover"
            >
              Explore Athletic Performance
            </Link>
            <Link
              to="/athletic-performance"
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
