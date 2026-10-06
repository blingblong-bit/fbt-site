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
            label="Phillip Hill, Founder & Lead Trainer, standing on the FIT training floor"
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
            Built around assessment, progression, and measurable results.
          </TitleTag>
          <div className="mt-8 space-y-5 text-lg text-foreground/80">
            <p>
              FIT Beyond Therapy was created for people who need more than general exercise but no
              longer need traditional clinical rehabilitation.
            </p>
            <p>
              We work with adults rebuilding strength, individuals seeking structured personal
              training, and athletes working to improve performance. Our approach combines practical
              training experience, objective assessment, individualized programming, and consistent
              progression.
            </p>
            <p>
              We believe every client should understand what they are working on, why it matters,
              and how their program is moving them forward.
            </p>
          </div>

          <div className="mt-10 grid gap-6 border-t border-border pt-8 sm:grid-cols-2">
            <div>
              <h3 className="font-display text-lg font-bold">Phillip Hill</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-accent">
                Founder
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Phillip has spent decades helping people build strength, improve movement, and
                return to the activities that matter to them. Before creating FIT Beyond Therapy, he
                worked in clinical and rehabilitation environments, where he saw the gap between
                finishing treatment and feeling fully prepared for everyday life, exercise, or
                sport. FIT was built to help close that gap through individualized training,
                objective assessment, and consistent progression.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-bold">Training Team</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                FIT's trainers work with adults and athletes across a wide range of ages, abilities,
                and goals. Every trainer follows the same assessment-led approach while adapting the
                program to the individual.
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
