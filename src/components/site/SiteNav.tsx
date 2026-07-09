import { Link } from "@tanstack/react-router";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/forcedecks", label: "ForceDecks" },
  { to: "/athletic-performance", label: "Athletic Performance" },
  { to: "/about", label: "About" },
  { to: "/doctor-referrals", label: "Doctor Referrals" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-primary font-display text-primary-foreground font-bold">
            F
          </span>
          <span className="font-display text-base font-bold tracking-tight text-primary sm:text-lg">
            FIT Beyond Therapy
          </span>
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
            href="tel:+19315550100"
            className="hidden text-sm font-semibold text-primary hover:text-primary-hover md:inline"
          >
            (931) 555-0100
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent-hover"
          >
            Schedule a Session
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
