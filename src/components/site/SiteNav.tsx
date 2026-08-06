import { Link } from "@tanstack/react-router";
import { useScrollY } from "@/hooks/useScrollY";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import fbtLogo from "@/assets/fbt-logo.png.asset.json";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/fit-beyond-performance", label: "FIT Beyond Performance" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const y = useScrollY();
  const scrolled = y > 40;
  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-border/80 bg-background/85 shadow-card backdrop-blur-md"
          : "border-transparent bg-background/70 backdrop-blur"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 transition-all duration-300 sm:px-6 lg:px-8 ${scrolled ? "py-2" : "py-3.5"}`}
      >
        <Link to="/" className="flex shrink-0 items-center">
          <img
            src={fbtLogo.url}
            alt="FIT Beyond Therapy"
            className={`w-auto object-contain transition-all duration-300 ${scrolled ? "h-9" : "h-11"}`}
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.slice(1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-foreground/75 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={PHONE_TEL}
            className="hidden text-sm font-semibold text-primary hover:text-primary-hover md:inline"
          >
            {PHONE_DISPLAY}
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent-hover"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>

      {/* Mobile nav */}
      <div className="border-t border-border lg:hidden">
        <nav className="mx-auto flex max-w-7xl gap-4 overflow-x-auto px-4 py-2 text-sm sm:px-6">
          {NAV_LINKS.slice(1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="whitespace-nowrap text-foreground/75 hover:text-primary"
              activeProps={{ className: "text-primary font-semibold" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
