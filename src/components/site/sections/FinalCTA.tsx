import { Link } from "@tanstack/react-router";
import { Reveal } from "../Reveal";
import { BackdropImage } from "../BackdropImage";
import { photos } from "@/assets/photos";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  EMAIL_DISPLAY,
  EMAIL_HREF,
  ADDRESS_LINE1,
  ADDRESS_LINE2,
} from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="relative bg-primary text-primary-foreground">
      <BackdropImage label="client mid-session" overlay="dark" src={photos.finalCtaBackdrop} />
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
            Ready to start training with a plan?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-primary-foreground/80">
            Tell us what you are working toward. We will help you determine the best place to begin.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent-hover"
            >
              Schedule a Consultation
            </Link>
          </div>
          <p className="mt-8 text-sm text-primary-foreground/70">
            Call{" "}
            <a href={PHONE_TEL} className="font-semibold text-primary-foreground hover:underline">
              {PHONE_DISPLAY}
            </a>{" "}
            or email{" "}
            <a href={EMAIL_HREF} className="font-semibold text-primary-foreground hover:underline">
              {EMAIL_DISPLAY}
            </a>
            .
          </p>
          <p className="mt-2 text-sm text-primary-foreground/70">
            {ADDRESS_LINE1}, {ADDRESS_LINE2}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
