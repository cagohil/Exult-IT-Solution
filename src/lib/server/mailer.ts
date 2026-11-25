import "server-only";
import nodemailer, { type Transporter } from "nodemailer";

const list = (v?: string) =>
  (v ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

export function mailConfig() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = list(process.env.CONTACT_TO);
  if (!user || !pass || to.length === 0) return null;
  return {
    host: process.env.SMTP_HOST || "smtp.office365.com",
    port: Number(process.env.SMTP_PORT || 587),
    user,
    pass,
    to,
    cc: list(process.env.CONTACT_CC),
    from: process.env.CONTACT_FROM || user,
  };
}

let cached: Transporter | null = null;

export function transporter(cfg: NonNullable<ReturnType<typeof mailConfig>>) {
  if (cached) return cached;
  cached = nodemailer.createTransport({
    host: cfg.host,
    port: cfg.port,
    secure: cfg.port === 465, // 587 upgrades with STARTTLS
    requireTLS: cfg.port !== 465,
    auth: { user: cfg.user, pass: cfg.pass },
    tls: { minVersion: "TLSv1.2" },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 20_000,
  });
  return cached;
}

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export type Inquiry = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  services: string[];
  message: string;
  page?: string;
};

export function renderInquiry(q: Inquiry) {
  const rows: [string, string][] = [
    ["Name", q.name],
    ["Email", q.email],
    ["Company", q.company || "Not provided"],
    ["Phone", q.phone || "Not provided"],
    ["Services", q.services.length ? q.services.join(", ") : "Not specified"],
  ];
  const subject = `New project inquiry from ${q.name}${q.company ? ` (${q.company})` : ""}`;

  const html = `<!doctype html><html><body style="margin:0;background:#f3f7fb;padding:24px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#071225">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:620px;margin:0 auto;background:#ffffff;border:1px solid #c9d7e6">
    <tr><td style="background:#031530;padding:24px 28px;color:#eaf3ff">
      <div style="display:inline-block;background:#ff5a24;color:#031530;font-weight:700;font-size:11px;letter-spacing:.06em;text-transform:uppercase;padding:4px 10px">Website inquiry</div>
      <h1 style="margin:12px 0 0;font-size:22px;line-height:1.2;color:#ffffff">${esc(subject)}</h1>
    </td></tr>
    <tr><td style="padding:24px 28px">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse">
        ${rows
          .map(
            ([k, v]) => `<tr>
          <td style="width:120px;padding:10px 0;border-bottom:1px solid #e6eef6;color:#5d6f88;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.04em;vertical-align:top">${k}</td>
          <td style="padding:10px 0;border-bottom:1px solid #e6eef6;font-size:15px">${
            k === "Email" ? `<a href="mailto:${esc(v)}" style="color:#1769ff">${esc(v)}</a>` : esc(v)
          }</td></tr>`,
          )
          .join("")}
      </table>
      <p style="margin:22px 0 8px;color:#5d6f88;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.04em">Message</p>
      <div style="background:#f3f7fb;border:1px solid #c9d7e6;padding:16px 18px;font-size:15px;line-height:1.6;white-space:pre-wrap">${esc(q.message)}</div>
    </td></tr>
    <tr><td style="padding:14px 28px;border-top:1px solid #e6eef6;color:#5d6f88;font-size:12px">
      Sent from the contact form at exultitsolution.com${q.page ? ` (${esc(q.page)})` : ""}. Reply to this email to answer ${esc(q.name)} directly.
    </td></tr>
  </table></body></html>`;

  const text = [
    subject,
    "",
    ...rows.map(([k, v]) => `${k}: ${v}`),
    "",
    "Message:",
    q.message,
    "",
    `Sent from the website contact form${q.page ? ` (${q.page})` : ""}.`,
  ].join("\n");

  return { subject, html, text };
}
