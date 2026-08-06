import { Reveal } from "../Reveal";

const FAQS = [
  {
    q: "Do I need a referral to begin?",
    a: "No. You can contact FIT Beyond Therapy directly. We will discuss your goals and help determine whether our services are appropriate for you.",
  },
  {
    q: "Is FIT Beyond Therapy a physical-therapy clinic?",
    a: "No. FIT Beyond Therapy is not a physical-therapy clinic. We provide strength training, personal training, athletic development, and performance testing — including structured training after someone has completed physical therapy.",
  },
  {
    q: "Do I need to finish physical therapy before starting?",
    a: "If you're coming to us for post-rehab training, yes — that program is designed for people who have completed physical therapy or been cleared from clinical rehabilitation but still need help rebuilding strength, confidence, and capacity. Our personal training and performance programs don't require any PT history at all.",
  },
  {
    q: "What ages do you train?",
    a: "We work with adults and athletes. Athletic programs may be divided by age, grade, experience, and physical readiness.",
  },
  {
    q: "Do I need training experience?",
    a: "No. Programs are adjusted to your current ability. Beginners are welcome.",
  },
  {
    q: "Do you offer individual and small-group training?",
    a: "Yes. Depending on the program, you can train one-on-one, in a small group, or as part of a team — we'll help you figure out which format fits best.",
  },
  {
    q: "What happens during the first consultation?",
    a: "We discuss your goals, training history, current ability, previous injuries or limitations, and which service is the best fit. An assessment may be recommended before training begins.",
  },
  {
    q: "What is ForceDecks testing?",
    a: "ForceDecks uses force plates to measure how you produce and absorb force. Testing may include balance, jump, strength, power, and asymmetry assessments.",
  },
  {
    q: "Do you offer team training?",
    a: "Yes. Team programs may be conducted at FIT Beyond or at the team's facility depending on group size, equipment needs, and scheduling.",
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
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">Common questions.</h2>
        </Reveal>

        <div className="mt-12 divide-y divide-border rounded-2xl border border-border bg-card shadow-card">
          {FAQS.map((f, i) => (
            <Reveal
              as="details"
              key={f.q}
              delay={i * 60}
              className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden"
            >
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
