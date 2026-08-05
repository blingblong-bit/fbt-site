import { Reveal } from "../Reveal";

const ITEMS = [
  {
    title: "Personalized Programming",
    body: "Training is built around your current ability, goals, training history, and progress.",
  },
  {
    title: "Objective Testing",
    body: "ForceDecks technology helps us measure strength, power, balance, and asymmetry.",
  },
  {
    title: "Experienced Coaching",
    body: "Every program is coached, progressed, and adjusted with purpose.",
  },
  {
    title: "Connected to FIT Beyond Plus",
    body: "Continue building strength and fitness with access to a full commercial gym.",
  },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 80} className="flex items-start gap-3">
              <span aria-hidden className="mt-1.5 h-2.5 w-2.5 shrink-0 rotate-45 bg-accent" />
              <div>
                <p className="font-display text-base font-bold text-foreground">{item.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
