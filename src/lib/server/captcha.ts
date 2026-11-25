import "server-only";
import { createHmac, randomInt, timingSafeEqual } from "node:crypto";

const TURNSTILE_VERIFY = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export const turnstileEnabled = () => Boolean(process.env.TURNSTILE_SECRET_KEY);

/** Verifies a Cloudflare Turnstile token server-side. */
export async function verifyTurnstile(token: string, ip?: string | null): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret || !token) return false;
  const body = new URLSearchParams({ secret, response: token });
  if (ip) body.set("remoteip", ip);
  try {
    const res = await fetch(TURNSTILE_VERIFY, { method: "POST", body, cache: "no-store", signal: AbortSignal.timeout(8000) });
    const data = (await res.json()) as { success?: boolean; "error-codes"?: string[] };
    if (!data.success) console.warn("[captcha] Turnstile rejected:", data["error-codes"]);
    return data.success === true;
  } catch (err) {
    console.error("[captcha] Turnstile verify failed:", err);
    return false;
  }
}

// ---------------------------------------------------------------------------
// Fallback: a server-signed arithmetic challenge, used only until Turnstile
// keys are configured. The answer never reaches the browser; the token is an
// HMAC over the expected answer and an expiry, so it cannot be forged.
// ---------------------------------------------------------------------------

const CHALLENGE_TTL_MS = 20 * 60 * 1000;

function secret(): string {
  const s = process.env.CAPTCHA_SECRET || process.env.CAPTCHA_BUILD_SECRET;
  if (s) return s;
  throw new Error("No captcha secret available");
}

const sign = (payload: string) => createHmac("sha256", secret()).update(payload).digest("base64url");

export function createMathChallenge() {
  const a = randomInt(2, 10);
  const b = randomInt(2, 10);
  const exp = Date.now() + CHALLENGE_TTL_MS;
  const nonce = randomInt(1e9).toString(36);
  const payload = `${exp}.${nonce}`;
  return { question: `${a} + ${b}`, token: `${payload}.${sign(`${payload}.${a + b}`)}` };
}

export function verifyMathChallenge(token: string, answer: string): boolean {
  const parts = token.split(".");
  if (parts.length !== 3) return false;
  const [exp, nonce, mac] = parts;
  if (!/^\d+$/.test(exp) || Number(exp) < Date.now()) return false;
  const n = Number.parseInt(String(answer).trim(), 10);
  if (!Number.isFinite(n)) return false;
  const expected = Buffer.from(sign(`${exp}.${nonce}.${n}`));
  const got = Buffer.from(mac);
  return expected.length === got.length && timingSafeEqual(expected, got);
}
