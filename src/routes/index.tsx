import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/site";
import { Hero } from "@/components/site/sections/Hero";
import { TrustBar } from "@/components/site/sections/TrustBar";
import { ChooseYourPath } from "@/components/site/sections/ChooseYourPath";
import { AthleticPerformanceFeature } from "@/components/site/sections/AthleticPerformanceFeature";
import { ProblemGap } from "@/components/site/sections/ProblemGap";
import { PersonalTraining } from "@/components/site/sections/PersonalTraining";
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
      <ChooseYourPath />
      <AthleticPerformanceFeature />
      <ProblemGap />
      <PersonalTraining />
      <ForceDecks />
      <Results />
      <About />
      <FitBeyondPlus />
      <FAQ />

      <FinalCTA />
    </>
  );
}
