import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | FIT Beyond Therapy | Tullahoma, TN" },
      {
        name: "description",
        content:
          "How FIT Beyond Therapy collects, uses, and protects the information you share when you contact us through our website, our Facebook and Instagram lead forms, or by phone.",
      },
      {
        property: "og:title",
        content: "Privacy Policy | FIT Beyond Therapy | Tullahoma, TN",
      },
      {
        property: "og:description",
        content:
          "How FIT Beyond Therapy collects, uses, and protects the information you share when you contact us through our website, our Facebook and Instagram lead forms, or by phone.",
      },
      {
        name: "twitter:title",
        content: "Privacy Policy | FIT Beyond Therapy | Tullahoma, TN",
      },
      {
        name: "twitter:description",
        content:
          "How FIT Beyond Therapy collects, uses, and protects the information you share when you contact us through our website, our Facebook and Instagram lead forms, or by phone.",
      },
      { property: "og:url", content: absoluteUrl("/privacy") },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/privacy") }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Reveal>
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            Legal
          </p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: November 18, 2026</p>
          <p className="mt-6 text-lg text-foreground/85">
            FIT Beyond Therapy (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is a post-rehab strength
            training facility in Tullahoma, Tennessee. This policy explains what information we
            collect when you contact us through our website, our Facebook and Instagram lead forms,
            or by phone, and how we use it.
          </p>
        </Reveal>

        <div className="mt-12 space-y-8">
          <Reveal>
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-7">
              <h2 className="font-display text-xl font-bold">Information we collect</h2>
              <p className="mt-3 text-foreground/85">
                Your name, phone number, email address, and any answers you give us, such as what
                you would like help with and the best time to reach you.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-7">
              <h2 className="font-display text-xl font-bold">How we use it</h2>
              <p className="mt-3 text-foreground/85">
                Only to contact you by phone call or text message about scheduling and preparing for
                your free assessment, and to provide the services you ask for. Message and data
                rates may apply to texts. You can reply STOP to any text to opt out.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-7">
              <h2 className="font-display text-xl font-bold">What we don&rsquo;t do</h2>
              <p className="mt-3 text-foreground/85">
                We never sell or rent your information. We do not share it with anyone except
                service providers who help us run our business (for example, our scheduling and
                messaging tools), and only so they can do that work for us.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-7">
              <h2 className="font-display text-xl font-bold">How long we keep it</h2>
              <p className="mt-3 text-foreground/85">
                We keep your information only as long as we need it to contact you and serve you, or
                as required by law.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-7">
              <h2 className="font-display text-xl font-bold">Your choices</h2>
              <p className="mt-3 text-foreground/85">
                You can ask us at any time to update or delete your information, or to stop
                contacting you, by calling or texting{" "}
                <a
                  href={PHONE_TEL}
                  className="font-semibold text-primary hover:text-primary-hover"
                >
                  {PHONE_DISPLAY}
                </a>
                .
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-7">
              <h2 className="font-display text-xl font-bold">Website analytics</h2>
              <p className="mt-3 text-foreground/85">
                This site uses Lovable&rsquo;s visitor analytics, a small script added to every page.
                It uses no cookies and stores nothing on your device. It does not keep your IP
                address and does not identify you or recognize you as a returning visitor.
              </p>
              <p className="mt-3 text-foreground/85">
                It records the pages visited, where visitors came from, their country, browser,
                operating system and device type, how long they stay, how fast pages load, errors,
                and which buttons and links are clicked. Detailed data is kept for 90 days and
                daily summaries for a year.
              </p>
              <p className="mt-3 text-foreground/85">
                This site does not show a cookie banner or ask for a consent choice, so all of this
                is recorded for every visitor. Lovable collects this data for us.{" "}
                <a
                  href="https://lovable.dev/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary hover:text-primary-hover"
                >
                  Lovable&rsquo;s privacy policy
                </a>{" "}
                explains how it handles it.
              </p>
              <p className="mt-3 text-foreground/85">
                This page also loads its web fonts (Inter and Sora) from Google Fonts. As part of
                that request, Google receives the visitor&rsquo;s IP address.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-7">
              <h2 className="font-display text-xl font-bold">Changes</h2>
              <p className="mt-3 text-foreground/85">
                If we update this policy, we will post the new version on this page with a new date.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl border border-border bg-primary p-6 text-primary-foreground sm:p-7">
              <h2 className="font-display text-xl font-bold text-primary-foreground">Contact</h2>
              <p className="mt-3 text-primary-foreground/85">
                FIT Beyond Therapy, Tullahoma, TN,{" "}
                <a href={PHONE_TEL} className="font-semibold text-accent hover:underline">
                  {PHONE_DISPLAY}
                </a>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
