import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

/**
 * Server-side lead delivery for both forms on the site.
 * Emails are sent through Lovable Emails from notify.fitbeyondtherapy.com.
 * Recipient defaults to fitbeyondtherapy@gmail.com (override with LEAD_EMAIL_TO).
 */

const DEFAULT_TO = "fitbeyondtherapy@gmail.com";

type LeadField = { label: string; value: string };

async function sendLeadEmail(args: {
  subject: string;
  heading: string;
  intro: string;
  fields: LeadField[];
  replyTo?: string;
  idempotencyKey: string;
}) {
  const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");
  const toAddress = process.env["LEAD_EMAIL_TO"] || DEFAULT_TO;

  try {
    await sendTemplateEmail("lead-notification", toAddress, {
      templateData: {
        subject: args.subject,
        heading: args.heading,
        intro: args.intro,
        fields: args.fields,
      },
      replyTo: args.replyTo,
      idempotencyKey: args.idempotencyKey,
    });
  } catch (error) {
    console.error("[leads] Failed to send lead email", error);
    throw new Error("We couldn't deliver your request right now. Please call or text us directly.");
  }
}

const SERVICE_LABELS: Record<string, string> = {
  "personal-training": "Personal Training",
  "post-rehab": "Post-Rehab Training",
  "fit-beyond-performance": "FIT Beyond Performance",
  "not-sure": "Not sure yet",
};

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  phone: z.string().trim().min(7).max(30),
  email: z.string().trim().email().max(255),
  serviceInterest: z.string().trim().min(1),
  trainingFor: z.string().trim().min(1).max(200),
  primaryGoal: z.string().trim().min(1).max(500),
  preferredContact: z.string().trim().min(1),
  message: z.string().trim().max(1000).optional(),
});

export const submitContactLead = createServerFn({ method: "POST" })
  .validator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const serviceLabel = SERVICE_LABELS[data.serviceInterest] ?? data.serviceInterest;
    const fields: LeadField[] = [
      { label: "Name", value: data.name },
      { label: "Phone", value: data.phone },
      { label: "Email", value: data.email },
      { label: "Interested in", value: serviceLabel },
      { label: "Training for", value: data.trainingFor },
      { label: "Primary goal", value: data.primaryGoal },
      { label: "Preferred contact method", value: data.preferredContact },
    ];
    if (data.message) fields.push({ label: "Additional info", value: data.message });

    await sendLeadEmail({
      subject: `New FBT Consultation Request — ${serviceLabel}`,
      heading: "New consultation request",
      intro: `${data.name} requested a consultation through the contact form.`,
      fields,
      replyTo: data.email,
      idempotencyKey: `lead-notification-contact-${crypto.randomUUID()}`,
    });
    return { ok: true as const };
  });

const athleteSchema = z.object({
  guardianName: z.string().trim().min(1).max(100),
  athleteName: z.string().trim().min(1).max(100),
  phone: z.string().trim().min(7).max(30),
  email: z.union([z.string().trim().email(), z.literal("")]).optional(),
  message: z.string().trim().max(1000).optional(),
});

export const submitAthleteInquiry = createServerFn({ method: "POST" })
  .validator((data: unknown) => athleteSchema.parse(data))
  .handler(async ({ data }) => {
    const fields: LeadField[] = [
      { label: "Parent/guardian", value: data.guardianName },
      { label: "Athlete", value: data.athleteName },
      { label: "Phone", value: data.phone },
    ];
    if (data.email) fields.push({ label: "Email", value: data.email });
    if (data.message) fields.push({ label: "Message", value: data.message });

    await sendLeadEmail({
      subject: `New FIT Beyond Performance Inquiry — ${data.athleteName}`,
      heading: "New FIT Beyond Performance inquiry",
      intro: `${data.guardianName} submitted an athlete inquiry for ${data.athleteName}.`,
      fields,
      replyTo: data.email || undefined,
      idempotencyKey: `lead-notification-athlete-${crypto.randomUUID()}`,
    });
    return { ok: true as const };
  });
