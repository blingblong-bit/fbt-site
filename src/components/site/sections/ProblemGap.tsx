import { Reveal } from "../Reveal";

export function ProblemGap() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            The Gap We Fill
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Physical Therapy Gets You Moving Again. We Get You Strong Again.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-8 text-lg leading-relaxed text-foreground/80 md:grid-cols-2">
          <Reveal as="p" delay={80}>
            Most people leave physical therapy still weak, still compensating, and still at real
            risk of re-injury. "Cleared" doesn't mean "recovered" — it means insurance stopped
            paying. There's a wide gap between walking without pain and returning to the strength,
            confidence, and capacity you had before.
          </Reveal>
          <Reveal as="p" delay={160}>
            FIT Beyond Therapy is the structured next step. We pick up where your PT ends —
            progressive loading, movement correction, and measurable strength benchmarks — so you
            don't just get back to baseline. You get back to full.
          </Reveal>
        </div>
      </div>
    </section>
  );
}
