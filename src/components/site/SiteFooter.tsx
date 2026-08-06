import { Link } from "@tanstack/react-router";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  EMAIL_DISPLAY,
  EMAIL_HREF,
  ADDRESS_LINE1,
  ADDRESS_LINE2,
} from "@/lib/site";
import fbtLogo from "@/assets/fbt-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="inline-flex rounded-lg bg-white px-4 py-3 shadow-sm">
              <img
                src={fbtLogo.url}
                alt="FIT Beyond Therapy"
                className="h-11 w-auto object-contain"
              />
            </div>
            <p className="mt-4 max-w-md text-sm text-primary-foreground/70">
              Personal training, post-rehab progression, and athletic performance development in
              Tullahoma, TN — backed by objective ForceDecks testing.
            </p>
            <p className="mt-6 text-sm text-primary-foreground/70">
              {ADDRESS_LINE1}, {ADDRESS_LINE2}
              <br />
              <a href={PHONE_TEL} className="hover:text-accent">
                {PHONE_DISPLAY}
              </a>
              <br />
              <a href={EMAIL_HREF} className="hover:text-accent">
                {EMAIL_DISPLAY}
              </a>
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground">
              Explore
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
              <li>
                <Link to="/services" className="hover:text-accent">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/fit-beyond-performance" className="hover:text-accent">
                  FIT Beyond Performance
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent">
                  Contact
                </Link>
              </li>
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
