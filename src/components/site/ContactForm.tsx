import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(7, "Phone is required").max(30),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(1, "Please add a short message").max(1000),
  serviceInterest: z.string().trim().min(1, "Please select what you're interested in"),
});

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
      message: fd.get("message"),
      serviceInterest: fd.get("serviceInterest"),
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
        <h3 className="font-display text-2xl font-bold text-primary">Thanks — message received.</h3>
        <p className="mt-3 text-foreground/80">
          A coach will follow up within one business day to schedule your assessment. If it's
          urgent, call{" "}
          <a href="tel:+19315550100" className="font-semibold text-accent hover:underline">
            (931) 555-0100
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8">
      <div className="grid gap-5">
        <Field label="Full name" name="name" error={errors.name} required autoComplete="name" />
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Phone" name="phone" type="tel" error={errors.phone} required autoComplete="tel" />
          <Field label="Email" name="email" type="email" error={errors.email} required autoComplete="email" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-primary">
            How can we help?
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            maxLength={1000}
            className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-foreground shadow-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
          />
          {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message}</p>}
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
            <option value="athletic-performance">Athletic performance</option>
            <option value="performance-testing">Performance testing</option>
            <option value="team-training">Team training</option>
            <option value="not-sure">Not sure yet</option>
          </select>
          {errors.serviceInterest && (
            <p className="mt-1 text-sm text-destructive">{errors.serviceInterest}</p>
          )}
        </div>

        <button
          type="submit"
          className="mt-2 inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent-hover"
        >
          Send message
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
