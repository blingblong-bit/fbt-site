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
      { title: "Contact | FIT Beyond Therapy" },
      {
        name: "description",
        content:
          "Request a consultation for personal training, post-rehab training, athletic performance, or performance testing at FIT Beyond Therapy. Tullahoma, TN.",
      },
      { property: "og:title", content: "Contact | FIT Beyond Therapy" },
      {
        property: "og:description",
        content: "Tell us how we can help. Request a consultation in Tullahoma, TN.",
      },
      { property: "og:url", content: absoluteUrl("/contact") },
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
            Tell us how we can help.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Complete the form below and a member of the FIT Beyond team will contact you to discuss
            your goals and the best next step.
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
