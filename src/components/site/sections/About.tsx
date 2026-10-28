import { Link } from "@tanstack/react-router";
import phillipHillPortrait from "../../../assets/phillip-hill-portrait.png.asset.json";
import { PlaceholderImage } from "../PlaceholderImage";
import { Reveal } from "../Reveal";

export function About({
  titleTag: TitleTag = "h2",
  showCta = true,
}: {
  titleTag?: "h1" | "h2";
  showCta?: boolean;
}) {
  return (
    <section id="about" className="bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-28">
        <Reveal className="lg:col-span-5">
          <PlaceholderImage
            label="Philip Hill, Founder, standing on the FIT training floor"
            src={phillipHillPortrait.url}
            aspect="aspect-[4/5]"
            className="shadow-elevated"
          />
        </Reveal>
        <Reveal delay={120} className="lg:col-span-7">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            About FIT Beyond Therapy
          </p>
          <TitleTag className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Built to close the gap between rehabilitation and real life.
          </TitleTag>
          <div className="mt-8 space-y-5 text-lg text-foreground/80">
            <p>
              Philip Hill's career has moved through athletic training, sports medicine, strength
              and conditioning, exercise physiology, clinical rehabilitation, and home health.
              Across those settings, he saw how often people needed more support after traditional
              treatment ended.
            </p>
            <p>
              The idea for FIT Beyond Therapy became clear when a woman who had completed
              rehabilitation after a hip replacement still did not feel able to return to the gym.
              She was no longer in the clinical phase, but she was not yet confident training on her
              own. Philip built FIT to serve that space.
            </p>
            <p>
              Today, FIT Beyond Therapy works with post-rehab clients, adults seeking personal
              training, active older adults, and athletes. Each person starts from a different
              place, but the goal is the same: build useful strength, move with greater confidence,
              and prepare for what matters outside the facility.
            </p>
          </div>

          <div className="mt-10 grid gap-6 border-t border-border pt-8 sm:grid-cols-2">
            <div>
              <h3 className="font-display text-lg font-bold">Philip Hill</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-accent">
                Founder
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Philip brings decades of experience across athletic training, sports medicine,
                strength and conditioning, exercise physiology, and rehabilitation settings. His
                Three Pillars of Core system gives the FIT team a consistent framework for
                individualized strength and movement training without treating every client the
                same.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-bold">Training Team</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                The FIT team includes trainers with backgrounds in kinesiology, athletic training,
                and personal training. Together, they coach children, adults, athletes, and older
                clients with programs adapted to the individual.
              </p>
            </div>
          </div>

          {showCta && (
            <Link
              to="/about"
              className="mt-10 inline-flex items-center rounded-md border border-border bg-card px-6 py-3 text-base font-semibold text-primary transition-colors hover:bg-surface"
            >
              Learn More About FIT Beyond
            </Link>
          )}
        </Reveal>
      </div>
    </section>
  );
}
