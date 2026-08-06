import type { ElementType, ReactNode, CSSProperties } from "react";
import { useInViewFade } from "@/hooks/useInViewFade";

type RevealProps = {
  as?: ElementType;
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  id?: string;
};

/**
 * Wraps content in a fade+rise reveal on scroll. Uses a single
 * transition-all so children can be staggered via `delay` (ms).
 */
export function Reveal({
  as: Tag = "div",
  children,
  delay = 0,
  className = "",
  style,
  id,
}: RevealProps) {
  const { ref, inView } = useInViewFade<HTMLElement>();
  const state = inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6";
  return (
    <Tag
      ref={ref as never}
      id={id}
      className={`transition-all duration-700 ease-out will-change-transform ${state} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}
