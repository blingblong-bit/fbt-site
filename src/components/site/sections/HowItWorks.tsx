import { Link } from "@tanstack/react-router";
import { Reveal } from "../Reveal";

const STEPS = [
  {
    n: "01",
    title: "Assess where you are",
    body: "We start with a conversation about your goals and history, plus objective testing — including ForceDecks force plates when it's useful.",
  },
  {
    n: "02",
    title: "Build an individualized plan",
    body: "Your program is built around your goals, training history, and current ability — not a template.",
  },
  {
    n: "03",
    title: "Measure progress",
    body: "We retest and track along the way so the changes are visible, not guessed.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <Reveal className="max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            How FIT Works
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Assess. Plan. Measure.
          </h2>
        </Reveal>
        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 80} className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 rotate-45 place-items-center rounded-lg bg-primary font-mono text-sm font-bold text-primary-foreground shadow-sm">
                <span className="-rotate-45">{s.n}</span>
              </span>
              <div>
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-foreground/75">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
        <Reveal delay={240} className="mt-10">
          <Link
            to="/forcedecks"
            className="inline-flex items-center text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
          >
            Learn about performance testing →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
