import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/site";
import { Services } from "@/components/site/sections/Services";
import { ProblemGap } from "@/components/site/sections/ProblemGap";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Post-Rehab & Personal Training | FIT Beyond Therapy | Tullahoma, TN" },
      {
        name: "description",
        content:
          "Strength and movement training for life, work, recreation, and sport. Explore post-rehab training, personal training, active aging, and athletic performance in Tullahoma, TN.",
      },
      {
        property: "og:title",
        content: "Post-Rehab & Personal Training | FIT Beyond Therapy | Tullahoma, TN",
      },
      {
        property: "og:description",
        content:
          "Strength and movement training for life, work, recreation, and sport. Explore post-rehab training, personal training, active aging, and athletic performance in Tullahoma, TN.",
      },
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
    </>
  );
}
