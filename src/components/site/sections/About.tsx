import { PlaceholderImage } from "../PlaceholderImage";
import { Reveal } from "../Reveal";

export function About() {
  return (
    <section id="about" className="bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-28">
        <Reveal className="lg:col-span-5">
          <PlaceholderImage
            label="staff-team-photo.jpg — head coach + team on the training floor"
            aspect="aspect-[4/5]"
            className="shadow-elevated"
          />
        </Reveal>
        <Reveal delay={120} className="lg:col-span-7">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            About FIT Beyond Therapy
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Built by coaches who take the clinical side seriously.
          </h2>
          <div className="mt-8 space-y-5 text-lg text-foreground/80">
            <p>
              FIT Beyond Therapy was founded to close a gap our head coach kept seeing: clients
              finishing physical therapy still weak, still compensating, and unsure of what to
              do next. Instead of handing them a generic gym membership, we built a program.
            </p>
            <p>
              Our approach is clinical in its rigor — objective assessment, structured
              progression, measurable outcomes — and athletic in its ambition. We don't just
              want you pain-free. We want you strong, resilient, and confident under load.
            </p>
          </div>

          <div className="mt-10 grid gap-6 border-t border-border pt-8 sm:grid-cols-2">
            <div>
              <h3 className="font-display text-lg font-bold">Head Coach & Founder</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                [Name], [Credentials — e.g. CSCS, ATC]. Two decades of coaching experience
                bridging clinical rehab and performance training. [Short bio placeholder — swap
                in real copy.]
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-bold">Coaching Team</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Certified strength coaches with backgrounds in rehab, athletic training, and
                sport performance. Space reserved here for additional staff bios.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
