import { Reveal } from "../Reveal";

// Real, verified Google reviews only — wording must stay authentic.
const REVIEWS = [
  {
    name: "Linda King",
    quote:
      "I love it, because everything that he (Philip Hill) does, he explains to me, what we're gonna do. My body was in pretty bad shape when I came. I was walking with a cane. People see me today without the cane and say, 'You look wonderful!' I owe it all to Philip",
  },
  {
    name: "Ginger Ann",
    quote:
      "When I came to Fit and Beyond Therapy, I was walking with a cane and facing a three-month recovery after surgery. I had already tried traditional physical therapy elsewhere with zero improvement, and I was fully prepared to have the surgery as the only hope to help my pain.. But thanks to the team at Fit and Beyond, that surgery is no longer needed! After just 8 visits, I no longer need my cane and am basically pain-free. I am so grateful I tried them out—they have helped me tremendously.",
  },
  {
    name: "Kimberly Rhodes",
    quote:
      "Thanks to him she is back up walking on her own and able to do her normal daily activities. I highly recommend Phillip at Fit Beyond Therapy.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <Reveal className="max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            What Clients Say
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">Real results, in their words.</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal
              as="figure"
              key={r.name}
              delay={i * 80}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-card"
            >
              <blockquote className="flex-1 text-[15px] leading-relaxed text-foreground/80">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-display font-bold text-foreground">{r.name}</p>
                <p className="mt-1 font-mono text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                  Verified Google review
                </p>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
