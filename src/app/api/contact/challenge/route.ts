import { NextResponse } from "next/server";
import { createMathChallenge, turnstileEnabled } from "@/lib/server/captcha";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Issues a signed arithmetic challenge. Only used while Turnstile keys are not configured. */
export function GET() {
  if (turnstileEnabled()) return NextResponse.json({ kind: "turnstile" }, { headers: { "Cache-Control": "no-store" } });
  return NextResponse.json({ kind: "math", ...createMathChallenge() }, { headers: { "Cache-Control": "no-store" } });
}
