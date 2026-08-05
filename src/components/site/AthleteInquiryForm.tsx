import { useState } from "react";
import { z } from "zod";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

const schema = z.object({
  guardianName: z.string().trim().min(1, "Parent/guardian name is required").max(100),
  athleteName: z.string().trim().min(1, "Athlete name is required").max(100),
  athleteAge: z.string().trim().min(1, "Athlete age is required").max(10),
  grade: z.string().trim().min(1, "Current grade is required").max(20),
  sport: z.string().trim().min(1, "Sport is required").max(100),
  position: z.string().trim().max(100).optional(),
  primaryGoals: z.string().trim().min(1, "Please add primary goals").max(500),
  experience: z.string().trim().max(500).optional(),
  injuryInfo: z.string().trim().max(500).optional(),
  trainingInterest: z.string().trim().min(1, "Please select an option"),
  phone: z.string().trim().min(7, "Phone is required").max(30),
  email: z.string().trim().email("Enter a valid email").max(255),
  preferredContact: z.string().trim().min(1, "Please select a preferred contact method"),
  message: z.string().trim().max(1000).optional(),
});

// NOTE: same as ContactForm — local validation only for now. Wire to a real
// backend before this success state ships to production.
export function AthleteInquiryForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      guardianName: fd.get("guardianName"),
      athleteName: fd.get("athleteName"),
      athleteAge: fd.get("athleteAge"),
      grade: fd.get("grade"),
      sport: fd.get("sport"),
      position: fd.get("position"),
      primaryGoals: fd.get("primaryGoals"),
      experience: fd.get("experience"),
      injuryInfo: fd.get("injuryInfo"),
      trainingInterest: fd.get("trainingInterest"),
      phone: fd.get("phone"),
      email: fd.get("email"),
      preferredContact: fd.get("preferredContact"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        errs[issue.path[0] as string] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sent");
    e.currentTarget.reset();
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
        <h3 className="font-display text-2xl font-bold text-primary">Athlete inquiry received.</h3>
        <p className="mt-3 text-foreground/80">
          A member of the FIT Beyond team will contact you within one business day to discuss the
          athlete's goals and available training options. For immediate assistance, call{" "}
          <a href={PHONE_TEL} className="font-semibold text-accent hover:underline">
            {PHONE_DISPLAY}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8"
    >
      <div className="grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            label="Parent or guardian name"
            name="guardianName"
            error={errors.guardianName}
            required
            autoComplete="name"
          />
          <Field label="Athlete name" name="athleteName" error={errors.athleteName} required />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Athlete age" name="athleteAge" error={errors.athleteAge} required />
          <Field label="Current grade" name="grade" error={errors.grade} required />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Sport or sports" name="sport" error={errors.sport} required />
          <Field label="Position, if applicable" name="position" />
        </div>

        <div>
          <label htmlFor="primaryGoals" className="block text-sm font-semibold text-primary">
            Primary goals
          </label>
          <textarea
            id="primaryGoals"
            name="primaryGoals"
            rows={3}
            required
            maxLength={500}
            className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-foreground shadow-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
          />
          {errors.primaryGoals && (
            <p className="mt-1 text-sm text-destructive">{errors.primaryGoals}</p>
          )}
        </div>

        <div>
          <label htmlFor="experience" className="block text-sm font-semibold text-primary">
            Previous training experience
          </label>
          <textarea
            id="experience"
            name="experience"
            rows={2}
            maxLength={500}
            className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-foreground shadow-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
          />
        </div>

        <div>
          <label htmlFor="injuryInfo" className="block text-sm font-semibold text-primary">
            Current injury or recent rehabilitation information
          </label>
          <textarea
            id="injuryInfo"
            name="injuryInfo"
            rows={2}
            maxLength={500}
            className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-foreground shadow-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
          />
        </div>

        <div>
          <label htmlFor="trainingInterest" className="block text-sm font-semibold text-primary">
            Individual, small-group, team, or testing interest
          </label>
          <select
            id="trainingInterest"
            name="trainingInterest"
            required
            defaultValue=""
            className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-foreground shadow-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
          >
            <option value="" disabled>
              Select one
            </option>
            <option value="individual">Individual</option>
            <option value="small-group">Small group</option>
            <option value="team">Team</option>
            <option value="testing">Performance testing only</option>
            <option value="not-sure">Not sure yet</option>
          </select>
          {errors.trainingInterest && (
            <p className="mt-1 text-sm text-destructive">{errors.trainingInterest}</p>
          )}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            label="Phone number"
            name="phone"
            type="tel"
            error={errors.phone}
            required
            autoComplete="tel"
          />
          <Field
            label="Email address"
            name="email"
            type="email"
            error={errors.email}
            required
            autoComplete="email"
          />
        </div>

        <div>
          <label htmlFor="preferredContact" className="block text-sm font-semibold text-primary">
            Preferred contact method
          </label>
          <select
            id="preferredContact"
            name="preferredContact"
            required
            defaultValue=""
            className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-foreground shadow-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
          >
            <option value="" disabled>
              Select one
            </option>
            <option value="phone">Phone</option>
            <option value="text">Text</option>
            <option value="email">Email</option>
          </select>
          {errors.preferredContact && (
            <p className="mt-1 text-sm text-destructive">{errors.preferredContact}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-primary">
            Additional information
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            maxLength={1000}
            className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-foreground shadow-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
          />
        </div>

        <button
          type="submit"
          className="mt-2 inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent-hover"
        >
          Submit Athlete Inquiry
        </button>
        <p className="text-xs text-muted-foreground">
          We'll respond within one business day. Your information is never shared.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-primary">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-foreground shadow-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
      />
      {error && <p className="mt-1 text-sm text-destructive">{error}</p>}
    </div>
  );
}
