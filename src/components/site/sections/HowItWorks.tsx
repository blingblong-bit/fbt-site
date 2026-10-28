import { Link } from "@tanstack/react-router";
import { Reveal } from "../Reveal";

const STEPS = [
  {
    n: "01",
    title: "Talk through your goals",
    body: "We start with your history, current ability, and the activities you want to return to or improve.",
  },
  {
    n: "02",
    title: "Train with an individualized plan",
    body: "Your coaching is built around you and guided by the same systematic approach Philip developed through years of training and rehabilitation experience.",
  },
  {
    n: "03",
    title: "Progress with purpose",
    body: "We adjust the plan as you improve and use objective testing, including ForceDecks, when it adds useful information.",
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
            Start where you are. Build from there.
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
