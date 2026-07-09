import { Link } from "@tanstack/react-router";
import { PlaceholderImage } from "../PlaceholderImage";
import { Reveal } from "../Reveal";


export function DoctorReferral() {
  return (
    <section id="referrals" className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:items-center lg:px-8 lg:py-28">
        <Reveal className="lg:col-span-7">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            Physician Partnership
          </p>
          <h2 className="mt-3 text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
            Trusted by Local Physicians.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Many of our clients come to us on a physician's recommendation as the next step
            after physical therapy. Ask your PT or physician about a referral to FIT Beyond
            Therapy — or send them our way directly.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { n: "01", t: "PT discharges", d: "Your therapist clears you from clinical rehab." },
              { n: "02", t: "Referral to FBT", d: "Physician or PT recommends a next-step assessment with us." },
              { n: "03", t: "Data-backed plan", d: "We assess, program, and share progress with your provider." },
            ].map((s) => (
              <div key={s.n} className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-5">
                <div className="font-mono text-xs font-bold text-accent">{s.n}</div>
                <div className="mt-2 font-display text-lg font-bold text-primary-foreground">{s.t}</div>
                <p className="mt-1 text-sm text-primary-foreground/75">{s.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6">
            <h3 className="font-display text-xl font-bold text-primary-foreground">For Providers</h3>
            <p className="mt-2 text-primary-foreground/80">
              Interested in a referral partnership? We coordinate directly with clinics and
              physicians, share objective assessment data, and keep you looped in on progress.
            </p>
            <Link
              to="/doctor-referrals"
              className="mt-4 inline-flex items-center rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
            >
              Start a referral conversation →
            </Link>
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-5">
          <PlaceholderImage
            label="clinical-credibility.jpg — coach reviewing assessment with client"
            aspect="aspect-[4/5]"
            tone="dark"
          />
        </Reveal>
      </div>
    </section>
  );
}
