# Connect form submissions to fitbeyondtherapy@gmail.com

## Goal
Route both the Contact and Athlete inquiry form submissions to `fitbeyondtherapy@gmail.com` using the existing Resend workspace connection.

## Steps

1. **Link Jalen's Resend connection to this project**
   - Use the existing `Jalen's Resend` workspace connection.
   - This makes `RESEND_API_KEY` available to this project's server functions without affecting other projects that also link the same connection.

2. **Update `src/lib/leads.ts`**
   - Switch from direct `api.resend.com` calls to the Lovable connector gateway.
   - Use `Authorization: Bearer ${LOVABLE_API_KEY}` and `X-Connection-Api-Key: ${RESEND_API_KEY}`.
   - Change the default `LEAD_EMAIL_TO` fallback to `fitbeyondtherapy@gmail.com`.
   - Keep the existing HTML body and validation unchanged.

3. **Verify environment variables**
   - Confirm `LOVABLE_API_KEY` and `RESEND_API_KEY` are present after linking.

4. **Test**
   - Submit the contact form in the preview and confirm the email is accepted by Resend.

## Notes
- Linking the same Resend connection to multiple projects does not interfere with those projects; they all send through the same Resend account and share its sender reputation/balance.
- `fitbeyondtherapy@gmail.com` will be the recipient address. The sender address should still use a domain verified in Resend (e.g., `leads@fitbeyondtherapy.com` or Resend's test sender if configured).
