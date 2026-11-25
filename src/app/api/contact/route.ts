import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";
import { mailConfig, renderInquiry, transporter } from "@/lib/server/mailer";
import { turnstileEnabled, verifyMathChallenge, verifyTurnstile } from "@/lib/server/captcha";
import { services } from "@/lib/content";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const serviceTitles = new Map(services.map((s) => [s.slug, s.title]));

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.email("Please enter a valid email address.").max(200),
  company: z.string().trim().max(120).optional().default(""),
  phone: z
    .string()
    .trim()
    .max(40)
    .regex(/^[0-9+().\-\s]*$/, "Please enter a valid phone number.")
    .optional()
    .default(""),
  services: z.array(z.string()).max(6).optional().default([]),
  message: z.string().trim().min(10, "Please tell us a little more (10 characters or more).").max(4000),
  page: z.string().max(200).optional(),
  // Anti-spam
  website: z.string().optional().default(""), // honeypot: real people leave it empty
  startedAt: z.number().int(),
  captcha: z.discriminatedUnion("kind", [
    z.object({ kind: z.literal("turnstile"), token: z.string().min(1).max(4096) }),
    z.object({ kind: z.literal("math"), token: z.string().min(1).max(512), answer: z.string().max(8) }),
  ]),
});

// Best-effort per-instance rate limit: 5 submissions per IP per 10 minutes.
const WINDOW_MS = 10 * 60 * 1000;
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > 5;
}

const clientIp = (req: NextRequest) =>
  req.headers.get("x-nf-client-connection-ip") ||
  req.headers.get("cf-connecting-ip") ||
  req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
  "unknown";

const fail = (error: string, status = 400, fields?: Record<string, string>) =>
  NextResponse.json({ ok: false, error, fields }, { status });

export async function POST(req: NextRequest) {
  const ip = clientIp(req);
  if (limited(ip)) return fail("Too many messages from your connection. Please try again in a few minutes, or call (248) 894-4428.", 429);

  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return fail("We couldn't read that submission. Please try again.");
  }

  const parsed = schema.safeParse(json);
  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      fields[key] ??= issue.message;
    }
    return fail("Please check the highlighted fields.", 400, fields);
  }
  const data = parsed.data;

  // 1. Honeypot and timing: pretend success so bots learn nothing.
  const elapsed = Date.now() - data.startedAt;
  if (data.website.trim() || elapsed < 2500) {
    console.warn("[contact] Dropped likely bot submission", { ip, honeypot: Boolean(data.website), elapsed });
    return NextResponse.json({ ok: true });
  }

  // 2. Captcha: Turnstile when configured; the signed math challenge otherwise.
  if (turnstileEnabled()) {
    if (data.captcha.kind !== "turnstile" || !(await verifyTurnstile(data.captcha.token, ip)))
      return fail("The security check didn't pass. Please complete it again.", 400, { captcha: "Please complete the security check." });
  } else if (data.captcha.kind !== "math" || !verifyMathChallenge(data.captcha.token, data.captcha.answer)) {
    return fail("That answer to the security question isn't right. Please try again.", 400, { captcha: "Incorrect answer." });
  }

  // 3. Send.
  const cfg = mailConfig();
  if (!cfg) {
    console.error("[contact] SMTP is not configured (SMTP_USER, SMTP_PASS, CONTACT_TO).");
    return fail("Our mail service is temporarily unavailable. Please email info@exultitsolution.com or call (248) 894-4428.", 503);
  }

  const inquiry = {
    name: data.name,
    email: data.email,
    company: data.company,
    phone: data.phone,
    services: data.services.map((s) => serviceTitles.get(s)).filter((s): s is string => Boolean(s)),
    message: data.message,
    page: data.page,
  };
  const { subject, html, text } = renderInquiry(inquiry);

  try {
    const info = await transporter(cfg).sendMail({
      from: { name: "Exult IT Solution Website", address: cfg.from },
      to: cfg.to,
      cc: cfg.cc.length ? cfg.cc : undefined,
      replyTo: { name: data.name, address: data.email },
      subject,
      text,
      html,
    });
    console.log("[contact] Sent", info.messageId);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Send failed:", err);
    return fail("We couldn't send your message just now. Please try again, or email info@exultitsolution.com.", 502);
  }
}
