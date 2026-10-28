import { Reveal } from "../Reveal";

const SERVICES = [
  {
    id: "post-rehab",
    icon: "PR",
    title: "Post-Rehab Training",
    body: "Individualized strength and movement training for people who have completed rehabilitation but do not yet feel ready to return to normal exercise, work, recreation, or sport.",
  },
  {
    id: "fit-beyond-performance",
    icon: "FP",
    title: "FIT Beyond Performance",
    body: "Individual, small-group, and team performance training for middle-school, high-school, and competitive athletes — focused on strength, speed, power, movement, and measurable development.",
  },
  {
    id: "personal-training",
    icon: "PT",
    title: "Personal Training",
    body: "One-on-one coaching for strength, mobility, conditioning, active aging, and the physical demands of everyday life.",
  },
];

export function Services({ heading = true }: { heading?: boolean }) {
  return (
    <section id="services" className="bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        {heading && (
          <Reveal className="max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              What We Do
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Training for recovery, strength, and performance.
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              We build your training around your goals, history, and current ability.
            </p>
          </Reveal>
        )}

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal
              key={s.title}
              as="article"
              id={s.id}
              delay={i * 80}
              className="group flex scroll-mt-24 flex-col rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-elevated"
            >
              <div className="grid h-11 w-11 rotate-45 place-items-center rounded-lg bg-primary font-mono text-sm font-bold text-primary-foreground shadow-sm transition-transform duration-500 ease-out group-hover:rotate-[60deg]">
                <span className="-rotate-45 transition-transform duration-500 ease-out group-hover:-rotate-[60deg]">
                  {s.icon}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-foreground/75">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
