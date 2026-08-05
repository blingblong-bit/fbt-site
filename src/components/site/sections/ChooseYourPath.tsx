import { Link } from "@tanstack/react-router";
import { Reveal } from "../Reveal";

const PATHS = [
  {
    icon: "PT",
    title: "Personal Training",
    body: "Build strength, improve movement, increase confidence, and train with a structured plan designed specifically for you.",
    cta: "Explore Personal Training",
    to: "/services" as const,
    hash: "personal-training",
  },
  {
    icon: "PR",
    title: "Post-Rehab Training",
    body: "Finished physical therapy but not ready to return to unrestricted training? We help bridge the gap between basic rehabilitation and full strength.",
    cta: "Explore Post-Rehab Training",
    to: "/services" as const,
    hash: "post-rehab",
  },
  {
    icon: "AP",
    title: "Athletic Performance",
    body: "Speed, strength, power, coordination, and conditioning for middle-school, high-school, and competitive athletes.",
    cta: "Explore Athletic Performance",
    to: "/athletic-performance" as const,
  },
  {
    icon: "FD",
    title: "Performance Testing",
    body: "Measure force production, power, balance, and asymmetry using ForceDecks technology and structured performance assessments.",
    cta: "Explore Performance Testing",
    to: "/forcedecks" as const,
  },
];

export function ChooseYourPath() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            How Can We Help?
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Start with the service that fits your goals.
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            You do not need to know exactly what type of program you need before contacting us. We
            will help determine the right starting point based on your goals, experience, and
            current ability.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PATHS.map((p, i) => (
            <Reveal
              key={p.title}
              as="article"
              delay={i * 80}
              className="group flex flex-col rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-elevated"
            >
              <div className="grid h-11 w-11 rotate-45 place-items-center rounded-lg bg-primary font-mono text-sm font-bold text-primary-foreground shadow-sm transition-transform duration-500 ease-out group-hover:rotate-[60deg]">
                <span className="-rotate-45 transition-transform duration-500 ease-out group-hover:-rotate-[60deg]">
                  {p.icon}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold">{p.title}</h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-foreground/75">{p.body}</p>
              <Link
                to={p.to}
                hash={p.hash}
                className="mt-6 inline-flex items-center text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
              >
                {p.cta} →
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
