import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Schedule an Assessment | FIT Beyond Therapy" },
      {
        name: "description",
        content:
          "Schedule a ForceDecks assessment or session at FIT Beyond Therapy. 449 W Lincoln St, Tullahoma, TN.",
      },
      { property: "og:title", content: "Contact | FIT Beyond Therapy" },
      {
        property: "og:description",
        content: "Schedule an assessment in Tullahoma, TN. Physician-referred welcome.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            Get in touch
          </p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl lg:text-6xl">
            Schedule an assessment.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Tell us a little about where you are and what you're working toward. A coach follows
            up within one business day.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-7">
              <h2 className="font-display text-xl font-bold">Visit</h2>
              <p className="mt-3 text-foreground/85">
                449 W Lincoln St
                <br />
                Tullahoma, TN 37388
              </p>

              <h2 className="mt-8 font-display text-xl font-bold">Call</h2>
              <p className="mt-3">
                <a href="tel:+19315550100" className="text-lg font-semibold text-primary hover:text-primary-hover">
                  (931) 555-0100
                </a>
              </p>

              <h2 className="mt-8 font-display text-xl font-bold">Email</h2>
              <p className="mt-3">
                <a href="mailto:info@fitbeyondtherapy.com" className="text-primary hover:text-primary-hover">
                  info@fitbeyondtherapy.com
                </a>
              </p>

              <h2 className="mt-8 font-display text-xl font-bold">Hours</h2>
              <ul className="mt-3 space-y-1 text-foreground/85">
                <li>Mon–Fri: 6:00a – 7:00p</li>
                <li>Sat: 8:00a – 12:00p</li>
                <li>Sun: Closed</li>
              </ul>
            </div>
          </div>
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
