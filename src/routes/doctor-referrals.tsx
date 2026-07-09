import { createFileRoute } from "@tanstack/react-router";
import { DoctorReferral } from "@/components/site/sections/DoctorReferral";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/doctor-referrals")({
  head: () => ({
    meta: [
      { title: "Doctor Referrals & Physician Partnerships | FIT Beyond Therapy" },
      {
        name: "description",
        content:
          "Referral partnerships with local physicians and PTs. FIT Beyond Therapy is the structured post-PT strength step in Tullahoma, TN.",
      },
      { property: "og:title", content: "Doctor Referrals | FIT Beyond Therapy" },
      {
        property: "og:description",
        content: "Physician-referred post-rehab strength training in Tullahoma, TN.",
      },
      { property: "og:url", content: "/doctor-referrals" },
    ],
    links: [{ rel: "canonical", href: "/doctor-referrals" }],
  }),
  component: DoctorReferralsPage,
});

function DoctorReferralsPage() {
  return (
    <>
      <DoctorReferral />
      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold sm:text-4xl">Send a referral.</h2>
            <p className="mt-5 text-foreground/80">
              Providers: use the form to start a referral conversation. We'll follow up to
              coordinate assessment scheduling and progress reporting.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              Or call us directly:{" "}
              <a href="tel:+19315550100" className="font-semibold text-primary hover:text-primary-hover">
                (931) 555-0100
              </a>
            </p>
          </div>
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
