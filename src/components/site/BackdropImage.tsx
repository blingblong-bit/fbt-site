interface BackdropImageProps {
  label: string;
  overlay?: "primary" | "dark" | "soft";
  className?: string;
}

export function BackdropImage({
  label,
  overlay = "primary",
  className = "",
}: BackdropImageProps) {
  const gradient =
    overlay === "primary"
      ? "bg-gradient-to-b from-primary/92 via-primary/85 to-primary/95"
      : overlay === "dark"
      ? "bg-gradient-to-b from-black/85 via-black/70 to-black/90"
      : "bg-gradient-to-b from-black/60 via-black/65 to-black/75";

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute inset-0 flex items-center justify-center bg-surface-strong">
        <div className="absolute inset-0 text-muted-foreground opacity-40 [background-image:linear-gradient(45deg,transparent_49%,currentColor_49%,currentColor_51%,transparent_51%)] [background-size:16px_16px]" />
        <p className="relative z-10 rounded-full border border-current/30 bg-background/80 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          Backdrop placeholder — {label}
        </p>
      </div>
      <div className={`absolute inset-0 ${gradient}`} />
    </div>
  );
}
