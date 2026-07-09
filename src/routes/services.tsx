import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/site/sections/Services";
import { FinalCTA } from "@/components/site/sections/FinalCTA";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Post-Rehab Strength & Performance Training | FIT Beyond Therapy" },
      {
        name: "description",
        content:
          "Post-rehab strength, ForceDecks assessments, injury prevention, functional training, athletic performance, and conditioning in Tullahoma, TN.",
      },
      { property: "og:title", content: "Services | FIT Beyond Therapy" },
      { property: "og:description", content: "Assessment-driven training programs in Tullahoma, TN." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-4 pt-16 pb-4 sm:px-6 lg:px-8 lg:pt-24">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            Services
          </p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl lg:text-6xl">
            Programs built on data — not guesswork.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Every service starts with an objective assessment and moves through structured
            progression. From post-rehab strength to athletic performance, this is what we do.
          </p>
        </div>
      </section>
      <Services heading={false} />
      <FinalCTA />
    </>
  );
}
