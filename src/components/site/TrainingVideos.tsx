import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import teamVideo from "@/assets/performance-team-training.mp4.asset.json";
import teamPoster from "@/assets/performance-team-training-poster.jpg.asset.json";
import speedVideo from "@/assets/performance-speed-training.mp4.asset.json";
import speedPoster from "@/assets/performance-speed-training-poster.jpg.asset.json";

type Video = {
  id: string;
  label: string;
  description: string;
  poster: string;
  posterAlt: string;
  src: string;
  /** native aspect ratio (w / h) */
  ratio: number;
  cardClass: string;
  posterClass: string;
};

const VIDEOS: Video[] = [
  {
    id: "team",
    label: "High School Basketball Performance Training",
    description: "Team speed, power, movement, and ForceDecks testing led by FIT coaches.",
    poster: teamPoster.url,
    posterAlt: "FIT coach correcting an athlete's lunge position during team training",
    src: teamVideo.url,
    ratio: 1188 / 2026,
    cardClass: "aspect-[4/5] lg:col-span-3 lg:aspect-auto lg:h-[520px]",
    posterClass: "object-[center_40%]",
  },
  {
    id: "speed",
    label: "Speed Development at FIT",
    description: "Sprint mechanics, reaction work, hurdles, and competitive movement training.",
    poster: speedPoster.url,
    posterAlt: "Athletes sprinting through cones on the FIT training floor",
    src: speedVideo.url,
    ratio: 1320 / 758,
    cardClass: "aspect-[4/3] lg:col-span-2 lg:aspect-auto lg:h-[520px]",
    posterClass: "object-[45%_center]",
  },
];

export function TrainingVideos() {
  const [active, setActive] = useState<Video | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (active && !d.open) d.showModal();
  }, [active]);

  const close = () => {
    dialogRef.current?.close();
  };

  const onClosed = () => {
    setActive(null);
    triggerRef.current?.focus();
  };

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            Training in Action
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            See how we develop better athletes.
          </h2>
          <p className="mt-5 text-lg text-foreground/80">
            FIT Beyond Performance combines objective assessment with deliberate coaching and
            competitive training. These sessions show how we develop speed, power, movement
            quality, and confidence with individual athletes and full teams.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          {VIDEOS.map((v, i) => (
            <Reveal key={v.id} delay={i * 100} className={v.id === "team" ? "lg:col-span-3" : "lg:col-span-2"}>
              <button
                type="button"
                onClick={(e) => {
                  triggerRef.current = e.currentTarget;
                  setActive(v);
                }}
                aria-label={`Play video: ${v.label}`}
                className={`group relative block w-full overflow-hidden rounded-2xl border border-border shadow-elevated focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent ${v.cardClass.replace(/lg:col-span-\d/, "")}`}
              >
                <img
                  src={v.poster}
                  alt={v.posterAlt}
                  loading="lazy"
                  decoding="async"
                  className={`absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100 ${v.posterClass}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent" />
                <span className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-background/95 text-primary shadow-elevated transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100">
                  <svg viewBox="0 0 24 24" className="ml-1 h-8 w-8 fill-current" aria-hidden>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span className="absolute inset-x-0 bottom-0 p-5 text-left sm:p-6">
                  <span className="flex items-center gap-2">
                    <span aria-hidden className="h-2 w-2 rotate-45 bg-accent" />
                    <span className="font-display text-lg font-bold text-background sm:text-xl">
                      {v.label}
                    </span>
                  </span>
                  <span className="mt-1.5 block text-sm text-background/85">{v.description}</span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        onClose={onClosed}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        aria-label={active?.label}
        className="m-auto max-h-none max-w-none bg-transparent p-0 backdrop:bg-foreground/85 motion-safe:backdrop:transition-opacity"
      >
        {active && (
          <div className="relative flex items-center justify-center p-4" onClick={(e) => e.target === e.currentTarget && close()}>
            <button
              type="button"
              onClick={close}
              aria-label="Close video"
              className="absolute right-2 top-2 z-10 grid h-10 w-10 place-items-center rounded-full bg-background text-foreground shadow-elevated focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent"
            >
              <X className="h-5 w-5" />
            </button>
            <video
              key={active.src}
              src={active.src}
              poster={active.poster}
              controls
              playsInline
              preload="none"
              className="block rounded-xl bg-foreground"
              style={{
                aspectRatio: String(active.ratio),
                width: `min(calc(100vw - 2rem), calc((100dvh - 2rem) * ${active.ratio}))`,
              }}
            />
          </div>
        )}
      </dialog>
    </section>
  );
}
