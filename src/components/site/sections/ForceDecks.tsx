import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell } from "recharts";
import { Reveal } from "../Reveal";

const SAMPLE = [
  { leg: "Left Leg", force: 1420, fill: "oklch(0.5 0.21 258)" },
  { leg: "Right Leg", force: 1685, fill: "oklch(0.7 0.132 232)" },
];

const asymmetry = Math.round(
  ((SAMPLE[1].force - SAMPLE[0].force) / SAMPLE[1].force) * 100,
);

export function ForceDecks() {
  return (
    <section id="forcedecks" className="bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-28">
        <Reveal>
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            ForceDecks · Force Plate Assessment
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            We Don't Guess. We Measure.
          </h2>
          <p className="mt-6 text-lg text-foreground/80">
            FIT Beyond Therapy uses ForceDecks force plate technology to objectively assess force
            production, landing mechanics, and left/right asymmetries — the same tech used by pro
            and collegiate performance programs.
          </p>
          <p className="mt-4 text-lg text-foreground/80">
            That means we build a plan on data — not guesswork — and your referring physician
            gets real progress metrics they can trust.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8">
            {[
              { t: "Data points captured", n: "40+" },
              { t: "Assessment time", n: "~45 min" },
              { t: "Asymmetry threshold", n: "<10%" },
              { t: "Reassess every", n: "6–8 wks" },
            ].map((item, i) => (
              <Reveal key={item.t} delay={i * 80} className="flex items-start gap-3">
                <span aria-hidden className="mt-2 h-2.5 w-2.5 shrink-0 rotate-45 bg-accent" />
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {item.t}
                  </dt>
                  <dd className="stat-number mt-2 text-4xl text-primary sm:text-5xl">{item.n}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
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
                  <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.9 0.005 260)" vertical={false} />
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
                <span className="h-2.5 w-2.5 rotate-45" style={{ background: "oklch(0.5 0.21 258)" }} />
                Left Leg — 1,420 N
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2.5 w-2.5 rotate-45" style={{ background: "oklch(0.7 0.132 232)" }} />
                Right Leg — 1,685 N
              </span>
            </div>

            <p className="mt-4 text-xs italic text-muted-foreground">
              Sample data — your actual assessment is personalized.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
