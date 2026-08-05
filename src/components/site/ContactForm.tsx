import { useState } from "react";
import { z } from "zod";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(7, "Phone is required").max(30),
  email: z.string().trim().email("Enter a valid email").max(255),
  serviceInterest: z.string().trim().min(1, "Please select what you're interested in"),
  trainingFor: z.string().trim().min(1, "Please let us know who the training is for"),
  primaryGoal: z.string().trim().min(1, "Please add a short primary goal").max(500),
  preferredContact: z.string().trim().min(1, "Please select a preferred contact method"),
  message: z.string().trim().max(1000).optional(),
});

// NOTE: This form currently only validates locally and shows a success state —
// it does not yet store the submission or send a notification anywhere.
// TODO: wire onSubmit to an actual backend (Supabase table + email/notification,
// or a form service) before treating a submission as "sent". Do not ship the
// success state below to production until that's connected — a false success
// message is worse than a visible error.
export function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      phone: fd.get("phone"),
      email: fd.get("email"),
      serviceInterest: fd.get("serviceInterest"),
      trainingFor: fd.get("trainingFor"),
      primaryGoal: fd.get("primaryGoal"),
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
        <h3 className="font-display text-2xl font-bold text-primary">
          Thank you. Your request has been received.
        </h3>
        <p className="mt-3 text-foreground/80">
          A member of the FIT Beyond team will contact you within one business day. For immediate
          assistance, call{" "}
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
        <Field label="Full name" name="name" error={errors.name} required autoComplete="name" />
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
          <label htmlFor="serviceInterest" className="block text-sm font-semibold text-primary">
            What are you interested in?
          </label>
          <select
            id="serviceInterest"
            name="serviceInterest"
            required
            defaultValue=""
            className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-foreground shadow-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
          >
            <option value="" disabled>
              Select one
            </option>
            <option value="personal-training">Personal training</option>
            <option value="post-rehab">Post-rehab training</option>
            <option value="fit-beyond-performance">FIT Beyond Performance</option>
            <option value="not-sure">Not sure yet</option>
          </select>
          {errors.serviceInterest && (
            <p className="mt-1 text-sm text-destructive">{errors.serviceInterest}</p>
          )}
        </div>

        <Field
          label="Who is the training for?"
          name="trainingFor"
          error={errors.trainingFor}
          required
          placeholder="e.g. myself, my child, our team"
        />

        <div>
          <label htmlFor="primaryGoal" className="block text-sm font-semibold text-primary">
            Primary goal
          </label>
          <textarea
            id="primaryGoal"
            name="primaryGoal"
            rows={3}
            required
            maxLength={500}
            className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-foreground shadow-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
          />
          {errors.primaryGoal && (
            <p className="mt-1 text-sm text-destructive">{errors.primaryGoal}</p>
          )}
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
            rows={4}
            maxLength={1000}
            className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-foreground shadow-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
          />
          {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="mt-2 inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent-hover"
        >
          Request a Consultation
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
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
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
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-foreground shadow-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
      />
      {error && <p className="mt-1 text-sm text-destructive">{error}</p>}
    </div>
  );
}
