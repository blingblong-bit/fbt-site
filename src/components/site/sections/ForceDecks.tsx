import { Link } from "@tanstack/react-router";
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
import { Reveal } from "../Reveal";
import { AsymmetryIcon, BalanceIcon, StrengthIcon, PowerIcon } from "../ValdIcons";
import fdLogo from "@/assets/vald/FD_Logo_RGB_Full_Rev.svg";

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

const SAMPLE = [
  { leg: "Left Leg", force: 1420, fill: "oklch(0.5 0.21 258)" },
  { leg: "Right Leg", force: 1685, fill: "oklch(0.7 0.132 232)" },
];

const asymmetry = Math.round(((SAMPLE[1].force - SAMPLE[0].force) / SAMPLE[1].force) * 100);

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
            force.
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
            The data gives our coaches a clearer starting point and helps us determine whether
            training is producing meaningful results. Testing is available for athletes, post-rehab
            clients, personal-training clients, and teams.
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
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-elevated sm:p-8">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rotate-45 rounded-2xl border border-primary/15"
            />
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

            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-4 text-xs">
              <span className="inline-flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 rotate-45"
                  style={{ background: "oklch(0.5 0.21 258)" }}
                />
                Left Leg — 1,420 N
              </span>
              <span className="inline-flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 rotate-45"
                  style={{ background: "oklch(0.7 0.132 232)" }}
                />
                Right Leg — 1,685 N
              </span>
            </div>

            <p className="mt-4 text-xs italic text-muted-foreground">
              Example assessment display. Individual results and selected tests vary by client.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
