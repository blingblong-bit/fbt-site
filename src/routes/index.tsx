import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/site";
import { Hero } from "@/components/site/sections/Hero";
import { ChooseYourPath } from "@/components/site/sections/ChooseYourPath";
import { HowItWorks } from "@/components/site/sections/HowItWorks";
import { Testimonials } from "@/components/site/sections/Testimonials";
import { FinalCTA } from "@/components/site/sections/FinalCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FIT Beyond Therapy | Individualized Training in Tullahoma, TN" },
      {
        name: "description",
        content:
          "Individualized post-rehab training, personal training, active aging, and athletic performance coaching for adults and athletes in Tullahoma, TN.",
      },
      {
        property: "og:title",
        content: "FIT Beyond Therapy | Individualized Training in Tullahoma, TN",
      },
      {
        property: "og:description",
        content:
          "Individualized post-rehab training, personal training, active aging, and athletic performance coaching for adults and athletes in Tullahoma, TN.",
      },
      { property: "og:url", content: absoluteUrl("/") },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: absoluteUrl("/og-image.png") },
      { name: "twitter:image", content: absoluteUrl("/og-image.png") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/") }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <ChooseYourPath />
      <HowItWorks />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
