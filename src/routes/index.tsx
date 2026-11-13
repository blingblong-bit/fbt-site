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
      { title: "Post-Rehab Strength Training & Athletic Performance | Tullahoma, TN" },
      { name: "description", content: "Finished physical therapy but not ready to return to normal activity, the gym, or sport? FIT Beyond Therapy provides assessment-based strength, mobility, and performance training in Tullahoma." },
      { property: "og:title", content: "Post-Rehab Strength Training & Athletic Performance | Tullahoma, TN" },
      { property: "og:description", content: "Finished physical therapy but not ready to return to normal activity, the gym, or sport? FIT Beyond Therapy provides assessment-based strength, mobility, and performance training in Tullahoma." },
      { name: "twitter:title", content: "Post-Rehab Strength Training & Athletic Performance | Tullahoma, TN" },
      { name: "twitter:description", content: "Finished physical therapy but not ready to return to normal activity, the gym, or sport? FIT Beyond Therapy provides assessment-based strength, mobility, and performance training in Tullahoma." },
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
