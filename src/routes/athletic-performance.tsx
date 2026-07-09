import { createFileRoute, Link } from "@tanstack/react-router";
import { PlaceholderImage } from "@/components/site/PlaceholderImage";
import { FinalCTA } from "@/components/site/sections/FinalCTA";

export const Route = createFileRoute("/athletic-performance")({
  head: () => ({
    meta: [
      { title: "Athletic Performance Training — Tullahoma, TN | FIT Beyond Therapy" },
      {
        name: "description",
        content:
          "Assessment-driven speed, power, and athleticism training for youth and competitive athletes in Tullahoma, TN. Built on ForceDecks data.",
      },
      { property: "og:title", content: "Athletic Performance Training | FIT Beyond Therapy" },
      {
        property: "og:description",
        content: "Speed, power, and durability for youth and competitive athletes in Tullahoma, TN.",
      },
      { property: "og:url", content: "/athletic-performance" },
    ],
    links: [{ rel: "canonical", href: "/athletic-performance" }],
  }),
  component: AthleticPerformancePage,
});

const PILLARS = [
  { t: "Speed", d: "Sprint mechanics, acceleration, top-end velocity — measured and progressed, not guessed." },
  { t: "Power", d: "Force production and rate of force development, tracked on the same ForceDecks data your rehab clients see." },
  { t: "Durability", d: "Movement quality and asymmetry work that reduces the injuries that end seasons." },
  { t: "Athleticism", d: "Coordination, deceleration, and change-of-direction skill — the qualities that separate athletes." },
];

function AthleticPerformancePage() {
  return (
    <>
      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              Athletic Performance
            </p>
            <h1 className="mt-3 text-4xl font-bold sm:text-5xl lg:text-6xl">
              Faster. Stronger. Harder to injure.
            </h1>
            <p className="mt-6 text-lg text-foreground/80">
              Our performance track uses the same clinical rigor and force-plate assessment as our
              post-rehab work — applied to youth and competitive athletes who want to move
              better, hit harder, and stay on the field.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent-hover"
              >
                Book an athlete assessment
              </Link>
            </div>
          </div>
          <PlaceholderImage
            label="athlete-training.jpg — young athlete performing a sprint or jump on the training floor"
            aspect="aspect-[4/5]"
            className="shadow-elevated"
          />
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">
            Four pillars, one program.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p) => (
              <div key={p.t} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="font-display text-xl font-bold text-primary">{p.t}</div>
                <p className="mt-3 text-sm text-foreground/75">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
