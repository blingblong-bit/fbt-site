import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/sections/Hero";
import { TrustBar } from "@/components/site/sections/TrustBar";
import { ProblemGap } from "@/components/site/sections/ProblemGap";
import { Services } from "@/components/site/sections/Services";
import { ForceDecks } from "@/components/site/sections/ForceDecks";
import { DoctorReferral } from "@/components/site/sections/DoctorReferral";
import { Results } from "@/components/site/sections/Results";
import { About } from "@/components/site/sections/About";
import { FitBeyondPlus } from "@/components/site/sections/FitBeyondPlus";
import { FAQ } from "@/components/site/sections/FAQ";
import { FinalCTA } from "@/components/site/sections/FinalCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "canonical", href: "/" }],
    meta: [{ property: "og:url", content: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProblemGap />
      <Services />
      <ForceDecks />
      <DoctorReferral />
      <Results />
      <About />
      <FitBeyondPlus />
      <FAQ />
      <FinalCTA />
    </>
  );
}
