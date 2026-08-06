import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/site";
import { About } from "@/components/site/sections/About";
import { FitBeyondPlus } from "@/components/site/sections/FitBeyondPlus";
import { FinalCTA } from "@/components/site/sections/FinalCTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About FIT Beyond Therapy | Tullahoma, TN" },
      {
        name: "description",
        content:
          "FIT Beyond Therapy provides personal training, post-rehab progression, and athletic performance development backed by objective ForceDecks testing in Tullahoma, TN.",
      },
      { property: "og:title", content: "About | FIT Beyond Therapy" },
      {
        property: "og:description",
        content:
          "Built by coaches who take assessment, progression, and results seriously. Personal training, post-rehab, and athletic performance in Tullahoma, TN.",
      },
      { property: "og:url", content: absoluteUrl("/about") },
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
