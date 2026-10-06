import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/site";
import { Hero } from "@/components/site/sections/Hero";
import { ChooseYourPath } from "@/components/site/sections/ChooseYourPath";
import { HowItWorks } from "@/components/site/sections/HowItWorks";
import { Testimonials } from "@/components/site/sections/Testimonials";
import { FinalCTA } from "@/components/site/sections/FinalCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "canonical", href: absoluteUrl("/") }],
    meta: [{ property: "og:url", content: absoluteUrl("/") }],
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
