import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { persistAndNotifyLead } from "./lead-delivery";
import type { TablesInsert } from "@/integrations/supabase/types";

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
    return await sendTemplateEmail("lead-notification", toAddress, {
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

async function saveLead(row: TablesInsert<"leads">) {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { data, error } = await supabaseAdmin.from("leads").insert(row).select("id").single();
  if (error || !data) {
    console.error("[leads] Failed to save inquiry", error?.code);
    throw new Error("We couldn't save your request right now. Please try again or call us directly.");
  }
  return data.id;
}

async function recordEmailStatus(id: string, status: "sent" | "failed" | "suppressed") {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { error } = await supabaseAdmin.from("leads").update({ email_status: status }).eq("id", id);
  if (error) console.error("[leads] Failed to record email status", error.code);
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
  serviceInterest: z.enum(["personal-training", "post-rehab", "fit-beyond-performance", "not-sure"]),
  trainingFor: z.string().trim().min(1).max(200),
  primaryGoal: z.string().trim().min(1).max(500),
  preferredContact: z.enum(["phone", "text", "email"]),
  message: z.string().trim().max(1000).optional(),
});

export const submitContactLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
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

    return persistAndNotifyLead({
      save: () => saveLead({
        form_type: "contact", name: data.name, phone: data.phone, email: data.email,
        service_interest: data.serviceInterest, training_for: data.trainingFor,
        primary_goal: data.primaryGoal, preferred_contact: data.preferredContact,
        message: data.message || null,
      }),
      notify: (id) => sendLeadEmail({
      subject: `New FBT Consultation Request — ${serviceLabel}`,
      heading: "New consultation request",
      intro: `${data.name} requested a consultation through the contact form.`,
      fields,
      replyTo: data.email,
      idempotencyKey: `lead-notification-contact-${id}`,
      }),
      recordStatus: recordEmailStatus,
    });
  });

const athleteSchema = z.object({
  guardianName: z.string().trim().min(1).max(100),
  athleteName: z.string().trim().min(1).max(100),
  phone: z.string().trim().min(7).max(30),
  email: z.union([z.string().trim().email().max(255), z.literal("")]).optional(),
  message: z.string().trim().max(1000).optional(),
});

export const submitAthleteInquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => athleteSchema.parse(data))
  .handler(async ({ data }) => {
    const fields: LeadField[] = [
      { label: "Parent/guardian", value: data.guardianName },
      { label: "Athlete", value: data.athleteName },
      { label: "Phone", value: data.phone },
    ];
    if (data.email) fields.push({ label: "Email", value: data.email });
    if (data.message) fields.push({ label: "Message", value: data.message });

    return persistAndNotifyLead({
      save: () => saveLead({
        form_type: "athlete", name: data.guardianName, guardian_name: data.guardianName,
        athlete_name: data.athleteName, phone: data.phone, email: data.email || null,
        service_interest: "fit-beyond-performance", message: data.message || null,
      }),
      notify: (id) => sendLeadEmail({
      subject: `New FIT Beyond Performance Inquiry — ${data.athleteName}`,
      heading: "New FIT Beyond Performance inquiry",
      intro: `${data.guardianName} submitted an athlete inquiry for ${data.athleteName}.`,
      fields,
      replyTo: data.email || undefined,
      idempotencyKey: `lead-notification-athlete-${id}`,
      }),
      recordStatus: recordEmailStatus,
    });
  });
