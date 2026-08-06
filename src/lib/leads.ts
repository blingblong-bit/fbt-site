import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

/**
 * Server-side lead delivery for both forms on the site.
 *
 * HOW IT WORKS:
 * - Emails are sent through Resend using the Lovable connector gateway.
 * - Required env vars (already linked to this project):
 *     LOVABLE_API_KEY
 *     RESEND_API_KEY
 * - Override recipient/sender with env vars if needed:
 *     LEAD_EMAIL_FROM  (defaults to leads@fitbeyondtherapy.com)
 *     LEAD_EMAIL_TO    (defaults to fitbeyondtherapy@gmail.com)
 *
 * The recipient address is fitbeyondtherapy@gmail.com. The sender domain
 * (fitbeyondtherapy.com) must be verified in the linked Resend account for
 * reliable delivery; until then Resend may reject sends from that domain.
 */

const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";
const DEFAULT_FROM = "FIT Beyond Therapy <leads@fitbeyondtherapy.com>";
const DEFAULT_TO = "fitbeyondtherapy@gmail.com";

async function sendLeadEmail(subject: string, html: string) {
  const lovableApiKey = process.env.LOVABLE_API_KEY;
  const resendApiKey = process.env.RESEND_API_KEY;
  const fromAddress = process.env.LEAD_EMAIL_FROM || DEFAULT_FROM;
  const toAddress = process.env.LEAD_EMAIL_TO || DEFAULT_TO;

  if (!lovableApiKey || !resendApiKey) {
    console.error("[leads] Missing LOVABLE_API_KEY or RESEND_API_KEY — email was NOT sent.", {
      subject,
    });
    throw new Error(
      "Email delivery isn't connected yet. Please call or text us directly and we'll get you taken care of.",
    );
  }

  const res = await fetch(`${GATEWAY_URL}/emails`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${lovableApiKey}`,
      "X-Connection-Api-Key": resendApiKey,
    },
    body: JSON.stringify({ from: fromAddress, to: [toAddress], subject, html }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    console.error("[leads] Resend gateway error", res.status, body);
    throw new Error("We couldn't deliver your request right now. Please call or text us directly.");
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
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
    const subject = `New FBT Consultation Request — ${serviceLabel}`;
    const html = `
      <h2>New consultation request</h2>
      <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
      <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      <p><strong>Interested in:</strong> ${escapeHtml(serviceLabel)}</p>
      <p><strong>Training for:</strong> ${escapeHtml(data.trainingFor)}</p>
      <p><strong>Primary goal:</strong> ${escapeHtml(data.primaryGoal)}</p>
      <p><strong>Preferred contact method:</strong> ${escapeHtml(data.preferredContact)}</p>
      ${data.message ? `<p><strong>Additional info:</strong> ${escapeHtml(data.message)}</p>` : ""}
    `;
    await sendLeadEmail(subject, html);
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
    const subject = `New FIT Beyond Performance Inquiry — ${data.athleteName}`;
    const html = `
      <h2>New FIT Beyond Performance inquiry</h2>
      <p><strong>Parent/guardian:</strong> ${escapeHtml(data.guardianName)}</p>
      <p><strong>Athlete:</strong> ${escapeHtml(data.athleteName)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
      ${data.email ? `<p><strong>Email:</strong> ${escapeHtml(data.email)}</p>` : ""}
      ${data.message ? `<p><strong>Message:</strong> ${escapeHtml(data.message)}</p>` : ""}
    `;
    await sendLeadEmail(subject, html);
    return { ok: true as const };
  });
