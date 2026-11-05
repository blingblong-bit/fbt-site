export type LeadEmailStatus = "sent" | "failed" | "suppressed";

/** Save before notifying so an email outage cannot lose an inquiry. */
export async function persistAndNotifyLead(dependencies: {
  save: () => Promise<string>;
  notify: (id: string) => Promise<{ sent: boolean }>;
  recordStatus: (id: string, status: LeadEmailStatus) => Promise<void>;
}) {
  const id = await dependencies.save();
  let emailStatus: LeadEmailStatus;
  try {
    const result = await dependencies.notify(id);
    emailStatus = result.sent ? "sent" : "suppressed";
  } catch {
    emailStatus = "failed";
  }
  await dependencies.recordStatus(id, emailStatus);
  return { ok: true as const };
}