import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
} from "recharts";
import { absoluteUrl } from "@/lib/site";
import { PlaceholderImage } from "@/components/site/PlaceholderImage";
import { Reveal } from "@/components/site/Reveal";
import { AthleteInquiryForm } from "@/components/site/AthleteInquiryForm";
import { BackdropImage } from "@/components/site/BackdropImage";
import { Results } from "@/components/site/sections/Results";
import { AsymmetryIcon, BalanceIcon, StrengthIcon, PowerIcon } from "@/components/site/ValdIcons";
import fdLogo from "@/assets/vald/FD_Logo_RGB_Full_Rev.svg";
import { photos } from "@/assets/photos";

export const Route = createFileRoute("/fit-beyond-performance")({
  head: () => ({
    meta: [
      { title: "FIT Beyond Performance — Athletic Training & Testing | Tullahoma, TN" },
      {
        name: "description",
        content:
          "Individual, small-group, and team athletic performance training with ForceDecks testing for middle-school, high-school, and competitive athletes in Tullahoma, TN.",
      },
      { property: "og:title", content: "FIT Beyond Performance | FIT Beyond Therapy" },
      {
        property: "og:description",
        content: "Stronger. Faster. More prepared for competition. Tullahoma, TN.",
      },
      { property: "og:url", content: absoluteUrl("/fit-beyond-performance") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/fit-beyond-performance") }],
  }),
  component: FitBeyondPerformancePage,
});

const WHO_WE_TRAIN = [
  {
    t: "Middle School",
    d: "Build coordination, movement skill, strength foundations, sprint mechanics, and confidence in a structured environment.",
  },
  {
    t: "High School",
    d: "Develop greater strength, power, speed, durability, and physical preparation for competition.",
  },
  {
    t: "Individual Athletes",
    d: "Targeted programming and objective testing to address specific performance needs and continue progressing.",
  },
  {
    t: "Teams",
    d: "A structured strength, speed, conditioning, or testing program designed around the needs of the full roster.",
  },
];

const TRAINING_OPTIONS = [
  {
    t: "Individual",
    d: "One-on-one coaching for athletes with specific goals, individual limitations, or advanced programming needs.",
    cta: "Ask About Individual Training",
  },
  {
    t: "Small Group",
    d: "Structured sessions that allow athletes to train with others while still receiving coaching and progression.",
    cta: "Join a Performance Group",
  },
  {
    t: "Team Programs",
    d: "Strength, speed, power, movement, conditioning, and testing programs for school, club, and travel teams.",
    cta: "Request Team Information",
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
    t: "Coordination",
    d: "Develop body control, balance, and the movement skill that separates athletes from athletes who just work hard.",
  },
  {
    t: "Deceleration",
    d: "Landing control and change-of-direction mechanics — slowing down safely is a trainable skill, not luck.",
  },
  {
    t: "Conditioning",
    d: "Build the ability to repeat high-quality efforts and meet the energy demands of practice and competition.",
  },
];

const METRICS = [
  { label: "Asymmetry", Icon: AsymmetryIcon },
  { label: "Balance", Icon: BalanceIcon },
  { label: "Strength", Icon: StrengthIcon },
  { label: "Power", Icon: PowerIcon },
];

const TESTING_INCLUDES = [
  "ForceDecks force plate assessment",
  "Baseline measurement",
  "Asymmetry and power data",
  "Retesting on a regular cadence",
  "Progress reports you and your athlete can actually read",
];

const SAMPLE = [
  { leg: "Left Leg", force: 1420, fill: "oklch(0.5 0.21 258)" },
  { leg: "Right Leg", force: 1685, fill: "oklch(0.7 0.132 232)" },
];
const asymmetry = Math.round(((SAMPLE[1].force - SAMPLE[0].force) / SAMPLE[1].force) * 100);

const FACILITY_POINTS = [
  {
    t: "New Equipment",
    d: "Equipment selected specifically for strength development, sprint work, jump training, and conditioning.",
  },
  {
    t: "Renovated Training Environment",
    d: "A dedicated space built for coached athletic development — not a corner of a general gym floor.",
  },
  {
    t: "Real Athlete Photography",
    d: "See the space and the coaching in action before you ever walk in the door.",
  },
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

function FitBeyondPerformancePage() {
  return (
    <>
      {/* 1. Hero */}
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
              Individual, small-group, and team athletic training — built on real coaching and
              backed by ForceDecks performance testing. For middle-school, high-school, and
              competitive athletes in Tullahoma, TN.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/fit-beyond-performance"
                hash="assessment"
                className="inline-flex items-center rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent-hover"
              >
                Request an Athlete Assessment
              </Link>
              <Link
                to="/fit-beyond-performance"
                hash="testing"
                className="inline-flex items-center rounded-md border border-border bg-card px-6 py-3 text-base font-semibold text-primary transition-colors hover:bg-surface"
              >
                Explore Performance Testing
              </Link>
            </div>
          </div>
          <PlaceholderImage
            label="Athlete training on the FIT Beyond Therapy floor"
            aspect="aspect-[4/5]"
            className="shadow-elevated"
            src={photos.athleticPerformance}
          />
        </div>
      </section>

      {/* 2. Who it is for */}
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

      {/* 3. Training options */}
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
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TRAINING_OPTIONS.map((opt, i) => (
              <Reveal
                key={opt.t}
                delay={i * 80}
                className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-card"
              >
                <h3 className="font-display text-xl font-bold">{opt.t}</h3>
                <p className="mt-3 flex-1 text-[15px] text-foreground/75">{opt.d}</p>
                <Link
                  to="/fit-beyond-performance"
                  hash="assessment"
                  className="mt-6 inline-flex items-center text-sm font-semibold text-primary hover:text-primary-hover"
                >
                  {opt.cta} →
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. What athletes develop */}
      <section className="bg-surface">
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

      {/* 5. Performance testing — major section, not a competing tab */}
      <section id="testing" className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-28">
          <Reveal>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              Performance Testing
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
              We don't guess. We measure.
            </h2>
            <div className="mt-6 inline-flex items-center gap-3 rounded-lg bg-accent px-4 py-2.5 shadow-sm">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-accent-foreground/70">
                Powered by
              </span>
              <img src={fdLogo} alt="ForceDecks — Dual Force Plate System" className="h-7 w-auto" />
            </div>
            <p className="mt-6 text-lg text-foreground/80">
              Every FIT Beyond Performance athlete has access to ForceDecks testing — the same force
              plate technology used by pro and collegiate programs — as part of how we build and
              adjust the training plan, not as a separate add-on service.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {TESTING_INCLUDES.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[15px] text-foreground/80">
                  <span aria-hidden className="mt-1.5 h-2 w-2 shrink-0 rotate-45 bg-accent" />
                  {item}
                </li>
              ))}
            </ul>

            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4">
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

            <Link
              to="/forcedecks"
              className="mt-8 inline-flex items-center rounded-md border border-border bg-card px-6 py-3 text-base font-semibold text-primary transition-colors hover:bg-surface"
            >
              Learn More About ForceDecks →
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-elevated sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                    Sample: Countermovement Jump
                  </p>
                  <p className="mt-1 text-lg font-bold">Peak Force — Left vs Right</p>
                </div>
                <div className="text-right">
                  <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    Asymmetry
                  </div>
                  <div className="stat-number text-3xl text-accent">{Math.abs(asymmetry)}%</div>
                </div>
              </div>
              <div className="mt-6 h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={SAMPLE} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="oklch(0.9 0.005 260)"
                      vertical={false}
                    />
                    <XAxis
                      dataKey="leg"
                      tick={{ fontSize: 12, fill: "oklch(0.4 0.01 260)" }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fontSize: 11, fill: "oklch(0.5 0.01 260)" }}
                      axisLine={false}
                      tickLine={false}
                      unit="N"
                    />
                    <Tooltip
                      cursor={{ fill: "oklch(0.95 0.005 260 / 0.5)" }}
                      contentStyle={{
                        borderRadius: 8,
                        border: "1px solid oklch(0.9 0.005 260)",
                        fontSize: 12,
                      }}
                      formatter={(v: number) => [`${v} N`, "Peak Force"]}
                    />
                    <Bar dataKey="force" radius={[6, 6, 0, 0]}>
                      {SAMPLE.map((entry, i) => (
                        <Cell key={i} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-4 text-xs italic text-muted-foreground">
                Example assessment display. Individual results and selected tests vary by client.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. Facility and equipment */}
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
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {FACILITY_POINTS.map((p, i) => (
                <Reveal key={p.t} delay={i * 80}>
                  <h3 className="font-display font-bold text-primary-foreground">{p.t}</h3>
                  <p className="mt-2 text-sm text-primary-foreground/80">{p.d}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. Results / testimonials */}
      <Results />

      {/* 8. Parent FAQ */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <Reveal className="text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              Parent FAQ
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

      {/* 9. Athlete inquiry form */}
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
