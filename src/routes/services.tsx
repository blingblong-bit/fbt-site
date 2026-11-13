import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/site";
import { Services } from "@/components/site/sections/Services";
import { ProblemGap } from "@/components/site/sections/ProblemGap";
import { PersonalTraining } from "@/components/site/sections/PersonalTraining";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Post-Rehab, Functional Strength & Mobility | FIT Beyond Therapy | Tullahoma, TN" },
      { name: "description", content: "Explore post-rehab and return-to-activity training, functional strength, mobility, and active-aging support at FIT Beyond Therapy in Tullahoma, TN." },
      { property: "og:title", content: "Post-Rehab, Functional Strength & Mobility | FIT Beyond Therapy | Tullahoma, TN" },
      { property: "og:description", content: "Explore post-rehab and return-to-activity training, functional strength, mobility, and active-aging support at FIT Beyond Therapy in Tullahoma, TN." },
      { name: "twitter:title", content: "Post-Rehab, Functional Strength & Mobility | FIT Beyond Therapy | Tullahoma, TN" },
      { name: "twitter:description", content: "Explore post-rehab and return-to-activity training, functional strength, mobility, and active-aging support at FIT Beyond Therapy in Tullahoma, TN." },
      { property: "og:url", content: absoluteUrl("/services") },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: absoluteUrl("/og-image.png") },
      { name: "twitter:image", content: absoluteUrl("/og-image.png") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/services") }],
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
            Training for recovery, strength, and performance.
          </h1>
        </div>
      </section>
      <Services heading={false} />
      <ProblemGap />
      <PersonalTraining />
    </>
  );
}
