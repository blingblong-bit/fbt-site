import { PlaceholderImage } from "../PlaceholderImage";

export function ForceDecks() {
  return (
    <section id="forcedecks" className="bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-28">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            ForceDecks · Force Plate Assessment
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            We Don't Guess. We Measure.
          </h2>
          <p className="mt-6 text-lg text-foreground/80">
            FIT Beyond Therapy uses ForceDecks force plate technology to objectively assess force
            production, landing mechanics, and left/right asymmetries — the same tech used by pro
            and collegiate performance programs.
          </p>
          <p className="mt-4 text-lg text-foreground/80">
            That means we build a plan on data — not guesswork — and your referring physician
            gets real progress metrics they can trust.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8">
            {[
              { t: "Data points captured", n: "40+" },
              { t: "Assessment time", n: "~45 min" },
              { t: "Asymmetry threshold", n: "<10%" },
              { t: "Reassess every", n: "6–8 wks" },
            ].map((item) => (
              <div key={item.t} className="flex items-start gap-3">
                <span aria-hidden className="mt-2 h-2.5 w-2.5 shrink-0 rotate-45 bg-accent" />
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {item.t}
                  </dt>
                  <dd className="stat-number mt-2 text-4xl text-primary sm:text-5xl">{item.n}</dd>
                </div>
              </div>
            ))}
          </dl>

        </div>

        <div>
          <PlaceholderImage
            label="forcedecks-in-use.jpg — athlete on force plates + dashboard screenshot"
            aspect="aspect-[4/5]"
            className="shadow-elevated"
          />
        </div>
      </div>
    </section>
  );
}
