import { Reveal } from "../Reveal";

const FAQS = [
  {
    q: "Do I need a physician referral?",
    a: "No — a referral isn't required. Many clients come to us on their own after PT. That said, we work closely with local physicians and PTs, and if you have a referral we'll coordinate directly with your provider on assessment data and progress.",
  },
  {
    q: "What is a ForceDecks assessment?",
    a: "ForceDecks is a force plate system used by pro and collegiate performance programs. It objectively measures how much force you produce, how symmetrical you are side-to-side, and how you land and absorb load. Your assessment gives us real numbers to build your plan around — and re-measure against.",
  },
  {
    q: "How is this different from physical therapy?",
    a: "Physical therapy restores baseline function — pain-free movement, range of motion, clearance to return to daily life. We start where PT ends: rebuilding real strength under load, correcting compensations, and getting you back to full performance. Different scope, different stage, complementary work.",
  },
  {
    q: "Do you work with athletes who aren't injured?",
    a: "Yes. Our athletic performance track uses the same assessment-driven model for healthy youth and competitive athletes focused on speed, power, and durability. Many athletes work with us specifically to reduce injury risk before it becomes a problem.",
  },
  {
    q: "What should I expect at my first session?",
    a: "Your first visit is a conversation and an assessment — history, goals, ForceDecks testing, and movement screening. You'll leave with a clear picture of where you are and a proposed plan for what's next. No pressure, no packages pushed on you.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-background">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">

        <Reveal className="text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Common questions.
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-border rounded-2xl border border-border bg-card shadow-card">
          {FAQS.map((f, i) => (
            <Reveal as="details" key={f.q} delay={i * 60} className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-start justify-between gap-6 font-display text-lg font-semibold text-foreground">
                {f.q}
                <span className="mt-1 grid h-5 w-5 shrink-0 rotate-45 place-items-center rounded-[4px] border border-[var(--secondary-foreground)]/40 bg-[var(--secondary-foreground)]/5 text-[var(--secondary-foreground)] transition-transform group-open:rotate-[135deg]">
                  <span className="-rotate-45 text-xs font-bold leading-none">+</span>
                </span>
              </summary>
              <p className="mt-4 text-foreground/80">{f.a}</p>
            </Reveal>

          ))}
        </div>
      </div>
    </section>
  );
}
