import { Reveal } from "../Reveal";
import { FBP_URL } from "@/lib/site";

export function FitBeyondPlus() {
  return (
    <section className="bg-surface-strong">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-start gap-6 rounded-3xl border border-border bg-card p-8 shadow-card md:flex-row md:items-center md:justify-between md:p-10">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              Connected to FIT Beyond Plus
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
              A complete training environment under one FIT Beyond system.
            </h2>
            <p className="mt-3 text-foreground/75">
              FIT Beyond Therapy provides individualized coaching, post-rehab progression,
              performance development, and objective testing. FIT Beyond Plus provides 24-hour gym
              access, commercial strength equipment, cardio equipment, classes, and an environment
              where clients can continue building long-term fitness. Together, the two businesses
              provide a clearer path from coached training to greater independence.
            </p>
          </div>
          <a
            href={FBP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md border border-primary bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            Visit FIT Beyond Plus →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
