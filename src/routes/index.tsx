import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/site";
import { Hero } from "@/components/site/sections/Hero";
import { TrustBar } from "@/components/site/sections/TrustBar";
import { Services } from "@/components/site/sections/Services";
import { ProblemGap } from "@/components/site/sections/ProblemGap";
import { ForceDecks } from "@/components/site/sections/ForceDecks";
import { Results } from "@/components/site/sections/Results";
import { About } from "@/components/site/sections/About";
import { FitBeyondPlus } from "@/components/site/sections/FitBeyondPlus";
import { FAQ } from "@/components/site/sections/FAQ";
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
      <TrustBar />
      <Services />
      <ProblemGap />
      <ForceDecks />
      <Results />
      <About />
      <FitBeyondPlus />
      <FAQ />

      <FinalCTA />
    </>
  );
}
