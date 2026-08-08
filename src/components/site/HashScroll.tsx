import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Scrolls to the element matching the current URL hash after the route has
 * painted. The router's built-in hash scroll can run before section content
 * (scroll-reveal sections, images) has laid out, leaving the page near the top.
 */
export function HashScroll() {
  const hash = useRouterState({ select: (s) => s.location.hash });
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (!hash) return;
    let cancelled = false;

    const scroll = () => {
      if (cancelled) return;
      const el = document.getElementById(hash);
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const raf = requestAnimationFrame(() => {
      scroll();
      // Re-run once more after reveal animations settle.
      setTimeout(scroll, 350);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, [hash, pathname]);

  return null;
}
