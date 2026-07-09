interface PlaceholderImageProps {
  label: string;
  aspect?: string;
  className?: string;
  tone?: "light" | "dark";
  src?: string;
}

/**
 * Labeled placeholder block. When `src` is provided, renders the actual photo
 * with the same container/aspect so layout stays identical when photos are swapped in.
 */
export function PlaceholderImage({
  label,
  aspect = "aspect-[4/3]",
  className = "",
  tone = "light",
  src,
}: PlaceholderImageProps) {
  if (src) {
    return (
      <div
        className={`relative ${aspect} w-full overflow-hidden rounded-2xl border border-border ${className}`}
      >
        <img src={src} alt={label} className="absolute inset-0 h-full w-full object-cover" />
      </div>
    );
  }
  const bg = tone === "dark" ? "bg-primary/90 text-primary-foreground" : "bg-surface-strong text-muted-foreground";
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative flex ${aspect} w-full items-center justify-center overflow-hidden rounded-2xl border border-border ${bg} ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(45deg,transparent_49%,currentColor_49%,currentColor_51%,transparent_51%)] [background-size:14px_14px]" />
      <div className="relative z-10 max-w-[80%] text-center">
        <div className="mx-auto mb-2 grid h-9 w-9 place-items-center rounded-full border border-current/40 text-xs font-bold">
          IMG
        </div>
        <p className="font-mono text-xs uppercase tracking-wider opacity-80">Photo placeholder</p>
        <p className="mt-1 text-sm font-medium">{label}</p>
      </div>
    </div>
  );
}
