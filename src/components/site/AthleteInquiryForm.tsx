import { useState } from "react";
import { z } from "zod";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { submitAthleteInquiry } from "@/lib/leads";

const schema = z.object({
  guardianName: z.string().trim().min(1, "Parent/guardian name is required").max(100),
  athleteName: z.string().trim().min(1, "Athlete name is required").max(100),
  phone: z.string().trim().min(7, "Phone is required").max(30),
  email: z.union([z.string().trim().email("Enter a valid email"), z.literal("")]).optional(),
  message: z.string().trim().max(1000).optional(),
});

export function AthleteInquiryForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const parsed = schema.safeParse({
      guardianName: fd.get("guardianName"),
      athleteName: fd.get("athleteName"),
      phone: fd.get("phone"),
      email: fd.get("email"),
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
    setStatus("submitting");
    try {
      await submitAthleteInquiry({ data: parsed.data });
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong submitting this form. Please call or text us directly.",
      );
    }
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
        {status === "error" && (
          <div className="rounded-md border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
            {errorMessage} You can also reach us directly at{" "}
            <a href={PHONE_TEL} className="font-semibold underline">
              {PHONE_DISPLAY}
            </a>
            .
          </div>
        )}
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
          <Field
            label="Phone number"
            name="phone"
            type="tel"
            error={errors.phone}
            required
            autoComplete="tel"
          />
          <Field
            label="Email address (optional)"
            name="email"
            type="email"
            error={errors.email}
            autoComplete="email"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-primary">
            Anything else we should know? (optional)
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
          disabled={status === "submitting"}
          className="mt-2 inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Submit Athlete Inquiry"}
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
