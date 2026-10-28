import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/site";
import { About } from "@/components/site/sections/About";
import { FitBeyondPlus } from "@/components/site/sections/FitBeyondPlus";
import { FinalCTA } from "@/components/site/sections/FinalCTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Philip Hill & the FIT Story | FIT Beyond Therapy | Tullahoma, TN" },
      {
        name: "description",
        content:
          "Learn why Philip Hill built FIT Beyond Therapy to bridge the gap between rehabilitation and real life, with individualized training in Tullahoma, TN.",
      },
      {
        property: "og:title",
        content: "Philip Hill & the FIT Story | FIT Beyond Therapy | Tullahoma, TN",
      },
      {
        property: "og:description",
        content:
          "Learn why Philip Hill built FIT Beyond Therapy to bridge the gap between rehabilitation and real life, with individualized training in Tullahoma, TN.",
      },
      { property: "og:url", content: absoluteUrl("/about") },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: absoluteUrl("/og-image.png") },
      { name: "twitter:image", content: absoluteUrl("/og-image.png") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/about") }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <About titleTag="h1" showCta={false} />
      <FitBeyondPlus />
      <FinalCTA />
    </>
  );
}
