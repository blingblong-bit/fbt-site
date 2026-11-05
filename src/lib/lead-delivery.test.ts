import { describe, test } from "node:test";
import assert from "node:assert/strict";
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
      assert.deepEqual(actions, [`save-${form}`, "notify-lead-id", "lead-id-sent"]);
    });
  }
  test("email failure still acknowledges the saved inquiry", async () => {
    let recorded = "";
    const result = await persistAndNotifyLead({
      save: async () => "saved-id",
      notify: async () => { throw new Error("Email unavailable"); },
      recordStatus: async (id, status) => { recorded = `${id}-${status}`; },
    });
    assert.equal(result.ok, true);
    assert.equal(recorded, "saved-id-failed");
  });
  test("failed storage does not send or acknowledge an unsaved inquiry", async () => {
    let notified = false;
    await assert.rejects(persistAndNotifyLead({
      save: async () => { throw new Error("Storage unavailable"); },
      notify: async () => { notified = true; return { sent: true }; },
      recordStatus: async () => {},
    }), /Storage unavailable/);
    assert.equal(notified, false);
  });
  test("suppressed notifications are not recorded as sent", async () => {
    let recorded = "";
    await persistAndNotifyLead({
      save: async () => "saved-id",
      notify: async () => ({ sent: false }),
      recordStatus: async (_id, status) => { recorded = status; },
    });
    assert.equal(recorded, "suppressed");
  });
});