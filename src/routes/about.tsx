import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/site";
import { About } from "@/components/site/sections/About";
import { FitBeyondPlus } from "@/components/site/sections/FitBeyondPlus";
import { FinalCTA } from "@/components/site/sections/FinalCTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Philip Hill & FIT’s Training Approach | FIT Beyond Therapy | Tullahoma, TN" },
      {
        name: "description",
        content:
          "Meet Philip Hill and learn how his rehabilitation experience shaped FIT Beyond Therapy’s approach to bridging the gap to fitness and performance in Tullahoma.",
      },
      {
        property: "og:title",
        content: "Philip Hill & FIT’s Training Approach | FIT Beyond Therapy | Tullahoma, TN",
      },
      {
        property: "og:description",
        content:
          "Meet Philip Hill and learn how his rehabilitation experience shaped FIT Beyond Therapy’s approach to bridging the gap to fitness and performance in Tullahoma.",
      },
      {
        name: "twitter:title",
        content: "Philip Hill & FIT’s Training Approach | FIT Beyond Therapy | Tullahoma, TN",
      },
      {
        name: "twitter:description",
        content:
          "Meet Philip Hill and learn how his rehabilitation experience shaped FIT Beyond Therapy’s approach to bridging the gap to fitness and performance in Tullahoma.",
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
