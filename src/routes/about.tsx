import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/site/sections/About";
import { FitBeyondPlus } from "@/components/site/sections/FitBeyondPlus";
import { FinalCTA } from "@/components/site/sections/FinalCTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Clinical-Grade Strength Coaching | FIT Beyond Therapy" },
      {
        name: "description",
        content:
          "FIT Beyond Therapy was built to close the gap between physical therapy and full strength. Meet the coaches serving Tullahoma, TN.",
      },
      { property: "og:title", content: "About | FIT Beyond Therapy" },
      {
        property: "og:description",
        content:
          "Built by coaches who take the clinical side seriously. Post-rehab strength and performance in Tullahoma, TN.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <About />
      <FitBeyondPlus />
      <FinalCTA />
    </>
  );
}
