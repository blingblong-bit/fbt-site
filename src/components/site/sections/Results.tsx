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
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rotate-45 rounded-3xl border border-primary-foreground/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rotate-45 rounded-3xl border border-primary-foreground/10"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            Results & Referrals
          </p>
          <h2 className="mt-3 text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
            Real Results, Real Referrals.
          </h2>
          <p className="mt-5 text-lg text-primary-foreground/80">
            Most of our clients find us through their doctor or a friend who trained here.
            That's not marketing — that's the model.
          </p>
        </div>

        <dl className="mt-14 grid gap-y-10 gap-x-6 border-y border-primary-foreground/15 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.l} className="flex items-start gap-4">
              <span aria-hidden className="mt-3 h-3 w-3 shrink-0 rotate-45 bg-accent" />
              <div>
                <dt className="stat-number text-6xl text-primary-foreground sm:text-7xl">{s.n}</dt>
                <dd className="mt-3 text-sm uppercase tracking-wider text-primary-foreground/70">{s.l}</dd>
              </div>
            </div>
          ))}
        </dl>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-7"
            >
              <blockquote className="text-lg leading-relaxed text-primary-foreground/90">
                <span className="font-display text-3xl leading-none text-accent">"</span>
                {t.body}
              </blockquote>
              <figcaption className="mt-5 border-t border-primary-foreground/15 pt-4">
                <div className="font-semibold text-primary-foreground">{t.name}</div>
                <div className="text-sm text-primary-foreground/70">{t.detail}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
