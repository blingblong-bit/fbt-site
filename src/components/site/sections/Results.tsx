const STATS = [
  { n: "94%", l: "of clients return to full activity" },
  { n: "500+", l: "athletes trained" },
  { n: "10+", l: "years in Tullahoma" },
  { n: "80%", l: "of clients from referrals" },
];

const TESTIMONIALS = [
  {
    body: "[Client testimonial coming — space reserved for a first-person quote about returning to strength after PT.]",
    name: "Client Name",
    detail: "Post-op knee rehab · 2024",
  },
  {
    body: "[Physician testimonial coming — reserved for a referring provider quote on outcomes and communication.]",
    name: "Physician Name, MD",
    detail: "Tullahoma referring provider",
  },
  {
    body: "[Athlete testimonial coming — reserved for a high-school or collegiate athlete quote on performance gains.]",
    name: "Athlete Name",
    detail: "High school athletics · 2025",
  },
  {
    body: "[Client testimonial coming — reserved for a longer-form quote on the difference between PT and FBT.]",
    name: "Client Name",
    detail: "Rotator cuff · 2023",
  },
];

export function Results() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            Results & Referrals
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Real Results, Real Referrals.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Most of our clients find us through their doctor or a friend who trained here.
            That's not marketing — that's the model.
          </p>
        </div>

        <dl className="mt-12 grid gap-6 border-y border-border py-8 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.l}>
              <dt className="font-display text-4xl font-bold text-primary sm:text-5xl">{s.n}</dt>
              <dd className="mt-2 text-sm text-muted-foreground">{s.l}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="rounded-2xl border border-border bg-card p-7 shadow-card"
            >
              <blockquote className="text-lg leading-relaxed text-foreground/85">
                <span className="font-display text-3xl leading-none text-accent">"</span>
                {t.body}
              </blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <div className="font-semibold text-primary">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.detail}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
