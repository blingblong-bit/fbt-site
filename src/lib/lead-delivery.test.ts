import { describe, expect, test } from "bun:test";
import { persistAndNotifyLead } from "./lead-delivery";

describe("saved form inquiries", () => {
  for (const form of ["contact", "athlete"]) {
    test(`${form} saves before sending its notification`, async () => {
      const actions: string[] = [];
      await persistAndNotifyLead({
        save: async () => { actions.push(`save-${form}`); return "lead-id"; },
        notify: async (id) => { actions.push(`notify-${id}`); return { sent: true }; },
        recordStatus: async (id, status) => { actions.push(`${id}-${status}`); },
      });
      expect(actions).toEqual([`save-${form}`, "notify-lead-id", "lead-id-sent"]);
    });
  }
  test("email failure still acknowledges the saved inquiry", async () => {
    let recorded = "";
    const result = await persistAndNotifyLead({
      save: async () => "saved-id",
      notify: async () => { throw new Error("Email unavailable"); },
      recordStatus: async (id, status) => { recorded = `${id}-${status}`; },
    });
    expect(result.ok).toBe(true);
    expect(recorded).toBe("saved-id-failed");
  });
  test("failed storage does not send or acknowledge an unsaved inquiry", async () => {
    let notified = false;
    await expect(persistAndNotifyLead({
      save: async () => { throw new Error("Storage unavailable"); },
      notify: async () => { notified = true; return { sent: true }; },
      recordStatus: async () => {},
    })).rejects.toThrow("Storage unavailable");
    expect(notified).toBe(false);
  });
  test("suppressed notifications are not recorded as sent", async () => {
    let recorded = "";
    await persistAndNotifyLead({
      save: async () => "saved-id",
      notify: async () => ({ sent: false }),
      recordStatus: async (_id, status) => { recorded = status; },
    });
    expect(recorded).toBe("suppressed");
  });
});