import { Resend } from "resend";
import { siteConfig } from "@/content/site";

export interface LeadEmailPayload {
  subject: string;
  formName: string;
  fields: Record<string, string | number | undefined>;
}

const LEADS_EMAIL = process.env.LEADS_EMAIL ?? siteConfig.email;
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "leads@ecowisewater.com";

function renderFieldsHtml(fields: LeadEmailPayload["fields"]) {
  return Object.entries(fields)
    .filter(([, value]) => value !== undefined && value !== "")
    .map(
      ([key, value]) =>
        `<tr><td style="padding:4px 12px 4px 0;color:#5b6b63;font-size:13px;">${key}</td><td style="padding:4px 0;color:#132a1f;font-size:14px;">${value}</td></tr>`,
    )
    .join("");
}

/**
 * Sends a lead notification email via Resend when RESEND_API_KEY is
 * configured. Falls back to structured server-side logging so no
 * submission is ever lost while the integration is being wired up.
 */
export async function sendLeadEmail(payload: LeadEmailPayload): Promise<{ delivered: boolean }> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.log(
      `[lead:${payload.formName}]`,
      JSON.stringify({ to: LEADS_EMAIL, ...payload.fields }, null, 2),
    );
    return { delivered: false };
  }

  const resend = new Resend(apiKey);
  await resend.emails.send({
    from: FROM_EMAIL,
    to: LEADS_EMAIL,
    subject: payload.subject,
    html: `<table cellspacing="0" cellpadding="0">${renderFieldsHtml(payload.fields)}</table>`,
  });

  return { delivered: true };
}
