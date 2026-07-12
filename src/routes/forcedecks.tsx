import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/site";
import { ForceDecks } from "@/components/site/sections/ForceDecks";
import { FinalCTA } from "@/components/site/sections/FinalCTA";
import { FAQ } from "@/components/site/sections/FAQ";

export const Route = createFileRoute("/forcedecks")({
  head: () => ({
    meta: [
      { title: "ForceDecks Assessment — Objective Force Plate Testing | FIT Beyond Therapy" },
      {
        name: "description",
        content:
          "ForceDecks force plate assessment in Tullahoma, TN. Objective measurement of force production, asymmetries, and movement quality — the tech used by pro programs.",
      },
      { property: "og:title", content: "ForceDecks Assessment | FIT Beyond Therapy" },
      { property: "og:description", content: "We don't guess. We measure. Force plate assessments in Tullahoma, TN." },
      { property: "og:url", content: absoluteUrl("/forcedecks") },
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
