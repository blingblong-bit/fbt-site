import { useEffect, useState } from "react";
import { useInViewFade } from "@/hooks/useInViewFade";

type CountUpProps = {
  value: string;
  duration?: number;
  className?: string;
};

/**
 * Animates the numeric portion of a string like "94%" or "500+"
 * from 0 to target once the element scrolls into view. Non-numeric
 * suffix (%, +, etc.) is preserved.
 */
export function CountUp({ value, duration = 1400, className }: CountUpProps) {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  const target = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : value;
  const isInt = Number.isInteger(target);

  const { ref, inView } = useInViewFade<HTMLSpanElement>();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      setN(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  const display = isInt ? Math.round(n) : n.toFixed(1);
  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
