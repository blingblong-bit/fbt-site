const SERVICES = [
  {
    icon: "PR",
    title: "Post-Rehab Strength Training",
    body: "Structured progression for clients discharged from PT who need to rebuild real strength and confidence in movement — not just tolerate it.",
  },
  {
    icon: "FD",
    title: "ForceDecks Performance Assessment",
    body: "Force plate testing that objectively measures asymmetries, force production, and movement quality. Real data — for you, for us, and for your doctor.",
  },
  {
    icon: "IP",
    title: "Injury Prevention & Movement Correction",
    body: "Identify and correct the compensation patterns quietly setting you up for the next injury, before they cost you another six months.",
  },
  {
    icon: "FT",
    title: "Functional Training",
    body: "Real-world movement patterns — hinge, squat, push, pull, carry, rotate — not isolated machine work that doesn't transfer to your life.",
  },
  {
    icon: "AP",
    title: "Athletic Performance Development",
    body: "Speed, power, and athleticism for youth and competitive athletes, built on the same assessment-driven foundation as our rehab work.",
  },
  {
    icon: "CO",
    title: "Conditioning",
    body: "Sport-ready and life-ready conditioning, programmed only after strength foundations are in place — never before.",
  },
];

export function Services({ heading = true }: { heading?: boolean }) {
  return (
    <section id="services" className="bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        {heading && (
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              What We Do
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Assessment-driven training, from post-rehab to peak performance.
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              Every service starts with an objective look at where you are — then builds a plan to
              get you where you're going.
            </p>
          </div>
        )}

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-elevated"
            >
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary font-mono text-sm font-bold text-primary-foreground">
                {s.icon}
              </div>
              <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-foreground/75">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
