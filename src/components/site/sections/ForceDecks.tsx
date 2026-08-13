import { Link } from "@tanstack/react-router";
import { Reveal } from "../Reveal";
import { AsymmetryIcon, BalanceIcon, StrengthIcon, PowerIcon } from "../ValdIcons";
import fdLogo from "@/assets/vald/FD_Logo_RGB_Full_Rev.svg";
import valdVersatilityImage from "@/assets/vald-versatility-image";

const METRICS = [
  { label: "Asymmetry", Icon: AsymmetryIcon },
  { label: "Balance", Icon: BalanceIcon },
  { label: "Strength", Icon: StrengthIcon },
  { label: "Power", Icon: PowerIcon },
];

const CAN_ASSESS = [
  "Lower-body strength",
  "Explosive power",
  "Balance",
  "Left-to-right asymmetry",
  "Jump performance",
  "Braking and landing ability",
  "Changes over time",
];

export function ForceDecks({ titleTag: TitleTag = "h2" }: { titleTag?: "h1" | "h2" }) {
  return (
    <section id="forcedecks" className="bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-28">
        <Reveal>
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            ForceDecks Performance Testing
          </p>
          <TitleTag className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            We don't guess. We measure.
          </TitleTag>
          <div className="mt-6 inline-flex items-center gap-3 rounded-lg bg-accent px-4 py-2.5 shadow-sm">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-accent-foreground/70">
              Powered by
            </span>
            <img src={fdLogo} alt="ForceDecks — Dual Force Plate System" className="h-7 w-auto" />
          </div>
          <p className="mt-6 text-lg text-foreground/80">
            ForceDecks technology allows us to objectively evaluate how you produce and absorb
            force — whether we're working with an athlete, a post-rehab client, or an adult building
            strength and confidence.
          </p>

          <div className="mt-8">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Depending on your goals, testing can help assess
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {CAN_ASSESS.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[15px] text-foreground/80">
                  <span aria-hidden className="mt-1.5 h-2 w-2 shrink-0 rotate-45 bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 text-foreground/80">
            The data gives our coaches a clearer starting point, helps guide training decisions,
            and gives us another way to measure meaningful change over time.
          </p>

          <div className="mt-8">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              What we measure
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4">
              {METRICS.map(({ label, Icon }, i) => (
                <Reveal
                  key={label}
                  as="li"
                  delay={i * 80}
                  className="group flex flex-col items-start gap-4"
                >
                  <span className="grid h-12 w-12 rotate-45 place-items-center rounded-lg bg-primary text-primary-foreground shadow-sm transition-transform duration-500 ease-out group-hover:rotate-[60deg]">
                    <Icon className="h-5 w-5 -rotate-45 transition-transform duration-500 ease-out group-hover:-rotate-[60deg]" />
                  </span>
                  <span className="text-sm font-semibold">{label}</span>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              to="/forcedecks"
              className="inline-flex items-center rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent-hover"
            >
              Learn About Performance Testing
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-md border border-border bg-card px-6 py-3 text-base font-semibold text-primary transition-colors hover:bg-surface"
            >
              Schedule an Assessment
            </Link>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <figure className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-elevated">
            <img
              src={valdVersatilityImage}
              alt="Client completing a ForceDecks assessment at FIT Beyond Therapy"
              className="aspect-[4/5] w-full object-cover object-center"
            />
            <figcaption className="border-t border-border bg-card p-5 sm:p-6">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-accent">
                One system, multiple applications
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                The same objective testing tools can support athletic development, post-rehab
                progression, and general strength training — with the assessment selected around the
                person and the goal.
              </p>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
