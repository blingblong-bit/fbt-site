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
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Data points captured
              </dt>
              <dd className="mt-1 font-display text-3xl font-bold text-primary">40+</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Assessment time
              </dt>
              <dd className="mt-1 font-display text-3xl font-bold text-primary">~45 min</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Asymmetry threshold
              </dt>
              <dd className="mt-1 font-display text-3xl font-bold text-primary">&lt; 10%</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Reassess every
              </dt>
              <dd className="mt-1 font-display text-3xl font-bold text-primary">6–8 wks</dd>
            </div>
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
