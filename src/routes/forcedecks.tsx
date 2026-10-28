import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/site";
import { ForceDecks } from "@/components/site/sections/ForceDecks";
import { FinalCTA } from "@/components/site/sections/FinalCTA";
import { FAQ } from "@/components/site/sections/FAQ";

export const Route = createFileRoute("/forcedecks")({
  head: () => ({
    meta: [
      { title: "ForceDecks Testing | FIT Beyond Therapy | Tullahoma, TN" },
      {
        name: "description",
        content:
          "ForceDecks force plate testing in Tullahoma, TN provides objective information about force, balance, and power when it can inform individualized training.",
      },
      { property: "og:title", content: "ForceDecks Testing | FIT Beyond Therapy | Tullahoma, TN" },
      {
        property: "og:description",
        content:
          "ForceDecks force plate testing in Tullahoma, TN provides objective information about force, balance, and power when it can inform individualized training.",
      },
      { property: "og:url", content: absoluteUrl("/forcedecks") },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/forcedecks") }],
  }),
  component: ForceDecksPage,
});

function ForceDecksPage() {
  return (
    <>
      <ForceDecks titleTag="h1" />
      <FAQ />
      <FinalCTA />
    </>
  );
}
