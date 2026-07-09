import { Link } from "@tanstack/react-router";

export function FinalCTA() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
        <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
          Ready to Get Back to Full Strength?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-primary-foreground/80">
          Schedule a ForceDecks assessment and get an honest, data-backed picture of where you
          are — and a plan for what's next.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent-hover"
          >
            Schedule an Assessment
          </Link>
          <a
            href="tel:+19315550100"
            className="inline-flex items-center rounded-md border border-primary-foreground/25 px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            (931) 555-0100
          </a>
        </div>
        <p className="mt-8 text-sm text-primary-foreground/70">
          449 W Lincoln St, Tullahoma, TN 37388
        </p>
      </div>
    </section>
  );
}
