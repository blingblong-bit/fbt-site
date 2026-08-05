import { createFileRoute, Link } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/site";
import { PlaceholderImage } from "@/components/site/PlaceholderImage";
import { Reveal } from "@/components/site/Reveal";
import { AthleteInquiryForm } from "@/components/site/AthleteInquiryForm";
import { BackdropImage } from "@/components/site/BackdropImage";
import { photos } from "@/assets/photos";

export const Route = createFileRoute("/athletic-performance")({
  head: () => ({
    meta: [
      { title: "Athletic Performance Training — Tullahoma, TN | FIT Beyond Therapy" },
      {
        name: "description",
        content:
          "Assessment-driven speed, power, and athleticism training for middle-school, high-school, and competitive athletes in Tullahoma, TN. Built on ForceDecks testing.",
      },
      { property: "og:title", content: "Athletic Performance Training | FIT Beyond Therapy" },
      {
        property: "og:description",
        content: "Stronger. Faster. More prepared for competition. Tullahoma, TN.",
      },
      { property: "og:url", content: absoluteUrl("/athletic-performance") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/athletic-performance") }],
  }),
  component: AthleticPerformancePage,
});

const WHO_WE_TRAIN = [
  {
    t: "Middle-School Athletes",
    d: "Build coordination, movement skill, strength foundations, sprint mechanics, and confidence in a structured environment.",
  },
  {
    t: "High-School Athletes",
    d: "Develop greater strength, power, speed, durability, and physical preparation for competition.",
  },
  {
    t: "Competitive Athletes",
    d: "Use targeted programming and objective testing to address specific performance needs and continue progressing.",
  },
  {
    t: "Teams",
    d: "Create a structured strength, speed, conditioning, or testing program designed around the needs of the full roster.",
  },
];

const PILLARS = [
  {
    t: "Speed",
    d: "Improve acceleration, sprint mechanics, posture, rhythm, and the ability to apply force into the ground.",
  },
  {
    t: "Strength",
    d: "Build the force-producing capacity athletes need for sprinting, jumping, contact, and long-term development.",
  },
  {
    t: "Power",
    d: "Train athletes to express strength quickly through jumps, throws, explosive lifts, and athletic movements.",
  },
  {
    t: "Movement Skill",
    d: "Develop coordination, balance, body control, deceleration, landing ability, and change-of-direction mechanics.",
  },
  {
    t: "Conditioning",
    d: "Build the ability to repeat high-quality efforts and meet the energy demands of practice and competition.",
  },
  {
    t: "Physical Resilience",
    d: "Improve strength, movement control, and preparation for the repeated demands of sport.",
  },
];

const PROCESS = [
  {
    n: "1",
    t: "Athlete Consultation",
    d: "We learn about the athlete's sport, position, schedule, training history, goals, and previous injuries.",
  },
  {
    n: "2",
    t: "Initial Assessment",
    d: "The athlete may complete movement, strength, jump, sprint, or ForceDecks testing depending on age and program needs.",
  },
  {
    n: "3",
    t: "Program Placement",
    d: "We determine whether individual coaching, small-group training, team training, or a testing-only service is the best fit.",
  },
  {
    n: "4",
    t: "Structured Training",
    d: "Sessions follow a clear plan that develops the athlete over time rather than changing randomly each workout.",
  },
  {
    n: "5",
    t: "Progress Tracking",
    d: "We monitor training performance, movement quality, attendance, and selected objective metrics.",
  },
  {
    n: "6",
    t: "Retesting",
    d: "When appropriate, athletes are retested to show what improved and what should be emphasized next.",
  },
];

const TRAINING_OPTIONS = [
  {
    t: "Individual Performance Training",
    d: "One-on-one coaching for athletes with specific goals, individual limitations, or advanced programming needs.",
    cta: "Ask About Individual Training",
  },
  {
    t: "Small-Group Performance Training",
    d: "Structured sessions that allow athletes to train with others while still receiving coaching and progression.",
    cta: "Join a Performance Group",
  },
  {
    t: "Team Training",
    d: "Strength, speed, power, movement, conditioning, and testing programs for school, club, and travel teams.",
    cta: "Request Team Information",
  },
  {
    t: "Performance Testing",
    d: "Standalone or recurring ForceDecks, jump, movement, and athletic testing for individuals or teams.",
    cta: "Schedule Performance Testing",
  },
];

const FORCEDECKS_MEASURES = [
  "Explosive force production",
  "Jump strategy",
  "Braking ability",
  "Landing control",
  "Left-to-right differences",
  "Strength qualities",
  "Balance",
  "Changes after a training phase",
];

const PARENT_EXPECTATIONS = [
  "Clear coaching",
  "Organized sessions",
  "Age-appropriate progression",
  "Emphasis on technique and effort",
  "Communication about program expectations",
  "Testing and progress reviews when included",
  "A professional training environment",
];

const TEAM_PROGRAMS_INCLUDE = [
  "Preseason preparation",
  "Offseason strength and speed",
  "In-season supplemental training",
  "Team conditioning",
  "Jump and ForceDecks testing",
  "Baseline and retesting days",
  "On-site sessions",
  "Facility-based sessions",
];

const FAQS = [
  {
    q: "What ages can participate?",
    a: "Programs may be available for middle-school, high-school, and competitive athletes. Placement depends on age, maturity, experience, and group availability.",
  },
  {
    q: "Does an athlete need previous lifting experience?",
    a: "No. Beginners are taught foundational movement and training skills before progressing to more advanced exercises.",
  },
  {
    q: "Is the training sport-specific?",
    a: "The program develops physical qualities that support many sports. Certain exercises, conditioning methods, and priorities may be adjusted based on the athlete's sport and position.",
  },
  {
    q: "How large are the groups?",
    a: "Group size depends on athlete age, facility space, and the type of session. Groups are limited so athletes can receive meaningful coaching.",
  },
  {
    q: "How often should an athlete train?",
    a: "Frequency depends on the athlete's goals, sport schedule, age, and current training load. Most structured programs involve one to three sessions per week.",
  },
  {
    q: "Do you work with teams?",
    a: "Yes. Programs can be created for school, travel, club, and community teams.",
  },
  {
    q: "What should athletes bring?",
    a: "Athletes should arrive in athletic clothing with appropriate footwear and water. Additional instructions will be provided before the first session.",
  },
  {
    q: "Is ForceDecks testing required?",
    a: "Not for every athlete or program. Testing is used when it provides meaningful information for the athlete's goals and development.",
  },
];

function AthleticPerformancePage() {
  return (
    <>
      {/* Performance Hero */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              FIT Beyond Performance
            </p>
            <h1 className="mt-3 text-4xl font-bold sm:text-5xl lg:text-6xl">
              Stronger. Faster. More prepared for competition.
            </h1>
            <p className="mt-6 text-lg text-foreground/80">
              Assessment-driven training for middle-school, high-school, and competitive athletes
              who want to improve speed, strength, power, coordination, and physical readiness.
            </p>
            <p className="mt-4 text-lg text-foreground/80">
              Our athletes do not follow random workouts. Every program is coached, progressed, and
              adjusted around the athlete's age, training experience, sport, schedule, and goals.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/athletic-performance"
                hash="assessment"
                className="inline-flex items-center rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent-hover"
              >
                Request an Athlete Assessment
              </Link>
              <Link
                to="/athletic-performance"
                hash="team-training"
                className="inline-flex items-center rounded-md border border-border bg-card px-6 py-3 text-base font-semibold text-primary transition-colors hover:bg-surface"
              >
                Ask About Team Training
              </Link>
            </div>
            <p className="mt-6 text-sm font-medium text-muted-foreground">
              Individual training. Small groups. Team programs. Performance testing.
            </p>
          </div>
          <PlaceholderImage
            label="Athlete training on the FIT Beyond Therapy floor"
            aspect="aspect-[4/5]"
            className="shadow-elevated"
            src={photos.athleticPerformance}
          />
        </div>
      </section>

      {/* Who We Train */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              Who It Is For
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Development for athletes at every stage.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {WHO_WE_TRAIN.map((item, i) => (
              <Reveal
                key={item.t}
                delay={i * 80}
                className="rounded-2xl border border-border bg-card p-6 shadow-card"
              >
                <div className="font-display text-xl font-bold text-primary">{item.t}</div>
                <p className="mt-3 text-sm text-foreground/75">{item.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Training Pillars */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              What We Develop
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
              The physical qualities behind better athletic performance.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal
                key={p.t}
                as="article"
                delay={i * 80}
                className="rounded-2xl border border-border bg-card p-7 shadow-card"
              >
                <h3 className="text-xl font-bold text-primary">{p.t}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-foreground/75">{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How the Program Works */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              Our Process
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Assessment. Training. Progression. Retesting.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROCESS.map((step, i) => (
              <Reveal
                key={step.n}
                delay={i * 60}
                className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-card"
              >
                <span className="grid h-9 w-9 shrink-0 rotate-45 place-items-center rounded-lg bg-primary font-mono text-sm font-bold text-primary-foreground">
                  <span className="-rotate-45">{step.n}</span>
                </span>
                <div>
                  <h3 className="font-display font-bold">{step.t}</h3>
                  <p className="mt-2 text-sm text-foreground/75">{step.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Training Options */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              Ways to Train
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Choose the format that matches the athlete's needs.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {TRAINING_OPTIONS.map((opt, i) => (
              <Reveal
                key={opt.t}
                delay={i * 80}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card"
              >
                <h3 className="font-display text-lg font-bold">{opt.t}</h3>
                <p className="mt-3 flex-1 text-sm text-foreground/75">{opt.d}</p>
                <Link
                  to="/athletic-performance"
                  hash="assessment"
                  className="mt-5 inline-flex items-center text-sm font-semibold text-primary hover:text-primary-hover"
                >
                  {opt.cta} →
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facility and Equipment */}
      <section className="relative bg-primary text-primary-foreground">
        <BackdropImage
          label="facility and equipment, wide shot"
          overlay="primary"
          src={photos.athleticPerformance}
        />
        <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <Reveal>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-secondary-foreground">
              Built for Development
            </p>
            <h2 className="mt-3 text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
              A training environment designed for serious progress.
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/80">
              FIT Beyond has invested in new equipment, facility improvements, and performance
              technology to create a better environment for coached athletic development. Athletes
              train with equipment selected to support strength development, sprint and acceleration
              training, jump and power training, change of direction, conditioning, movement skill,
              performance testing, and progressive loading at different ages and experience levels.
            </p>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Our facility allows athletes to train with structure, supervision, and access to tools
              that are difficult to replicate through school practices or unplanned gym workouts.
            </p>
            <Link
              to="/athletic-performance"
              hash="assessment"
              className="mt-8 inline-flex items-center rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent-hover"
            >
              Request an Athlete Assessment
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ForceDecks for Athletes */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <Reveal>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              Objective Performance Testing
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
              See how an athlete produces force — not just how high they jump.
            </h2>
            <p className="mt-6 text-lg text-foreground/80">
              ForceDecks testing gives us more information than a stopwatch or jump height alone.
            </p>
            <p className="mt-4 font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Depending on the assessment, we may examine
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {FORCEDECKS_MEASURES.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[15px] text-foreground/80">
                  <span aria-hidden className="mt-1.5 h-2 w-2 shrink-0 rotate-45 bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-foreground/80">
              Testing helps establish a baseline, guide programming decisions, and demonstrate
              progress over time.
            </p>
            <Link
              to="/forcedecks"
              className="mt-6 inline-flex items-center rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent-hover"
            >
              Learn About ForceDecks
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Parent Section */}
      <section className="bg-surface">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <Reveal>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              For Parents
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Structured coaching — not random exhaustion.
            </h2>
            <p className="mt-6 text-lg text-foreground/80">
              A productive athlete-development program should do more than make young athletes
              tired. Our goal is to teach athletes how to train, move, and compete more effectively
              while building physical qualities appropriate for their age and development.
            </p>
            <p className="mt-6 font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Parents can expect
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {PARENT_EXPECTATIONS.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[15px] text-foreground/80">
                  <span aria-hidden className="mt-1.5 h-2 w-2 shrink-0 rotate-45 bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Team Training */}
      <section id="team-training" className="bg-background">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <Reveal>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              Team Programs
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Bring structured performance training to the entire roster.
            </h2>
            <p className="mt-6 text-lg text-foreground/80">
              FIT Beyond works with coaches and organizations to create programs based on the team's
              age, sport, calendar, roster size, and primary needs.
            </p>
            <p className="mt-6 font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Programs may include
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {TEAM_PROGRAMS_INCLUDE.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[15px] text-foreground/80">
                  <span aria-hidden className="mt-1.5 h-2 w-2 shrink-0 rotate-45 bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent-hover"
            >
              Request a Team Consultation
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Athletic Performance FAQ */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <Reveal className="text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">Common questions.</h2>
          </Reveal>
          <div className="mt-12 divide-y divide-border rounded-2xl border border-border bg-card shadow-card">
            {FAQS.map((f, i) => (
              <Reveal
                as="details"
                key={f.q}
                delay={i * 50}
                className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-start justify-between gap-6 font-display text-lg font-semibold text-foreground">
                  {f.q}
                  <span className="mt-1 grid h-5 w-5 shrink-0 rotate-45 place-items-center rounded-[4px] border border-[var(--secondary-foreground)]/40 bg-[var(--secondary-foreground)]/5 text-[var(--secondary-foreground)] transition-transform group-open:rotate-[135deg]">
                    <span className="-rotate-45 text-xs font-bold leading-none">+</span>
                  </span>
                </summary>
                <p className="mt-4 text-foreground/80">{f.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Athlete Assessment Request */}
      <section id="assessment" className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
              Give your athlete more than another workout. Give them a development plan.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Tell us about the athlete, their sport, and what they want to improve. We will help
              determine the best training or assessment option.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-3xl">
            <AthleteInquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
