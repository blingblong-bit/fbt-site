import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-accent font-display font-bold text-accent-foreground">
                F
              </span>
              <span className="font-display text-lg font-bold text-primary-foreground">
                FIT Beyond Therapy
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm text-primary-foreground/70">
              Post-rehab strength training and athletic performance in Tullahoma, TN.
              The structured next step between physical therapy and full strength.
            </p>
            <p className="mt-6 text-sm text-primary-foreground/70">
              449 W Lincoln St, Tullahoma, TN 37388
              <br />
              <a href="tel:+19315550100" className="hover:text-accent">(931) 555-0100</a>
              <br />
              <a href="mailto:info@fitbeyondtherapy.com" className="hover:text-accent">
                info@fitbeyondtherapy.com
              </a>
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground">
              Explore
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/services" className="hover:text-accent">Services</Link></li>
              <li><Link to="/forcedecks" className="hover:text-accent">ForceDecks Assessment</Link></li>
              <li><Link to="/athletic-performance" className="hover:text-accent">Athletic Performance</Link></li>
              <li><Link to="/about" className="hover:text-accent">About</Link></li>
              <li><Link to="/doctor-referrals" className="hover:text-accent">Doctor Referrals</Link></li>
              <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground">
              Hours
            </h4>
            <ul className="mt-4 space-y-1 text-sm text-primary-foreground/70">
              <li>Mon–Fri: 6:00a – 7:00p</li>
              <li>Sat: 8:00a – 12:00p</li>
              <li>Sun: Closed</li>
            </ul>
            <p className="mt-6 text-sm text-primary-foreground/70">
              Connected to{" "}
              <a href="#" className="font-semibold text-accent hover:underline">
                FIT Beyond Plus
              </a>{" "}
              gym.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} FIT Beyond Therapy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
