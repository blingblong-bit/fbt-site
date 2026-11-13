import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/site";
import { ForceDecks } from "@/components/site/sections/ForceDecks";
import { FinalCTA } from "@/components/site/sections/FinalCTA";
import { FAQ } from "@/components/site/sections/FAQ";

export const Route = createFileRoute("/forcedecks")({
  head: () => ({
    meta: [
      { title: "ForceDecks Performance Testing & Assessment | Tullahoma, TN" },
      { name: "description", content: "ForceDecks testing at FIT Beyond Therapy in Tullahoma provides objective strength, force, and power assessment to inform training and track progress." },
      { property: "og:title", content: "ForceDecks Performance Testing & Assessment | Tullahoma, TN" },
      { property: "og:description", content: "ForceDecks testing at FIT Beyond Therapy in Tullahoma provides objective strength, force, and power assessment to inform training and track progress." },
      { name: "twitter:title", content: "ForceDecks Performance Testing & Assessment | Tullahoma, TN" },
      { name: "twitter:description", content: "ForceDecks testing at FIT Beyond Therapy in Tullahoma provides objective strength, force, and power assessment to inform training and track progress." },
      { property: "og:url", content: absoluteUrl("/forcedecks") },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: absoluteUrl("/og-image.png") },
      { name: "twitter:image", content: absoluteUrl("/og-image.png") },
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
