import { Link } from "@tanstack/react-router";
import { Reveal } from "../Reveal";
import { photos } from "@/assets/photos";

const BENEFITS = [
  "Build useful, everyday strength",
  "Improve mobility, balance, and conditioning",
  "Return to consistent exercise",
  "Stay active and capable as you age",
  "Train around previous injuries or limitations",
  "Prepare for demanding work or recreation",
];

export function PersonalTraining() {
  return (
    <section id="personal-training" className="scroll-mt-24 bg-surface">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
        <Reveal>
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            Personal Training
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Training built around your life.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-foreground/85">
            Personal training at FIT is for adults who want professional guidance, a clear plan,
            and coaching that accounts for their goals, history, and current ability.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            You do not need to be recovering from an injury or training for a sport. We work with
            people who want to feel stronger, move with more confidence, stay active as they age,
            or return to a consistent exercise routine.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {BENEFITS.map((b) => (
              <li key={b} className="flex items-start gap-3 text-[15px] text-foreground/85">
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-2.5 w-2.5 shrink-0 rotate-45 rounded-[2px] bg-primary"
                />
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-card">
            <h3 className="text-lg font-bold">How it starts</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-foreground/75">
              We begin with a conversation about what you want to improve, what has held you back,
              and what your training needs to prepare you for. From there, we build and adjust the
              plan around your progress.
            </p>
          </div>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent-hover"
          >
            Schedule a Personal Training Consultation
          </Link>
        </Reveal>

        <Reveal delay={120}>
          <div className="overflow-hidden rounded-2xl shadow-elevated">
            <img
              src={photos.heroPersonalTraining}
              alt="FIT trainer coaching a client through a medicine-ball exercise"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover object-center"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
