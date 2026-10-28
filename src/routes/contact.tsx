import { createFileRoute } from "@tanstack/react-router";
import {
  absoluteUrl,
  PHONE_DISPLAY,
  PHONE_TEL,
  EMAIL_DISPLAY,
  EMAIL_HREF,
  ADDRESS_LINE1,
  ADDRESS_LINE2,
} from "@/lib/site";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact FIT Beyond Therapy | Tullahoma, TN" },
      {
        name: "description",
        content:
          "Talk with the FIT team in Tullahoma, TN about post-rehab training, personal training, active aging, or athletic performance. Share your goals and starting point.",
      },
      { property: "og:title", content: "Contact FIT Beyond Therapy | Tullahoma, TN" },
      {
        property: "og:description",
        content:
          "Talk with the FIT team in Tullahoma, TN about post-rehab training, personal training, active aging, or athletic performance. Share your goals and starting point.",
      },
      { property: "og:url", content: absoluteUrl("/contact") },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/contact") }],
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
            Tell us what you want to get back to.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Share your goals and where you are starting. A member of the FIT team will contact you
            to talk through the best next step.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-7">
              <h2 className="font-display text-xl font-bold">Visit</h2>
              <p className="mt-3 text-foreground/85">
                {ADDRESS_LINE1}
                <br />
                {ADDRESS_LINE2}
              </p>

              <h2 className="mt-8 font-display text-xl font-bold">Call</h2>
              <p className="mt-3">
                <a
                  href={PHONE_TEL}
                  className="text-lg font-semibold text-primary hover:text-primary-hover"
                >
                  {PHONE_DISPLAY}
                </a>
              </p>

              <h2 className="mt-8 font-display text-xl font-bold">Email</h2>
              <p className="mt-3">
                <a href={EMAIL_HREF} className="text-primary hover:text-primary-hover">
                  {EMAIL_DISPLAY}
                </a>
              </p>

              <h2 className="mt-8 font-display text-xl font-bold">Hours</h2>
              <ul className="mt-3 space-y-1 text-foreground/85">
                <li>Mon–Fri: 9:00a – 6:45p</li>
                <li>Sat: Closed</li>
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
