import { Link } from "@tanstack/react-router";
import { Reveal } from "../Reveal";

const FOCUS_AREAS = [
  "Building strength",
  "Improving mobility",
  "Losing body fat",
  "Increasing energy and conditioning",
  "Returning to consistent exercise",
  "Training safely around previous injuries",
  "Preparing for demanding work or recreation",
];

export function PersonalTraining() {
  return (
    <section id="personal-training" className="bg-surface">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            Personal Training
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            A clear plan, professional coaching, and measurable progress.
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Personal training at FIT Beyond is designed for adults who want more structure than an
            ordinary gym membership provides.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-start">
          <Reveal delay={80}>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Your program may focus on
            </p>
            <ul className="mt-5 grid gap-3">
              {FOCUS_AREAS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-foreground/80">
                  <span aria-hidden className="mt-1.5 h-2 w-2 shrink-0 rotate-45 bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-lg text-foreground/80">
              Every program begins with a conversation about your goals, current ability, training
              history, and any limitations that need to be considered.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent-hover"
            >
              Ask About Personal Training
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
