"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight, Check, CircleAlert, LoaderCircle, RefreshCw } from "lucide-react";
import Turnstile from "./Turnstile";
import { services, serviceShort } from "@/lib/content";

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

type Status = "idle" | "sending" | "sent" | "error";
type Fields = Partial<Record<"name" | "email" | "company" | "phone" | "message" | "captcha", string>>;

export default function ContactForm() {
  const params = useSearchParams();
  const uid = useId();
  const [picked, setPicked] = useState<string[]>(() => {
    const q = params.get("services");
    const known = new Set(services.map((s) => s.slug));
    return q ? q.split(",").filter((s) => known.has(s)) : [];
  });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [fields, setFields] = useState<Fields>({});
  const [token, setToken] = useState<string | null>(null);
  const [resetKey, setResetKey] = useState(0);
  const [math, setMath] = useState<{ question: string; token: string } | null>(null);
  const [mathLoadFailed, setMathLoadFailed] = useState(false);
  const [captchaBroken, setCaptchaBroken] = useState(false);
  const startedAt = useRef(0);

  const loadMath = useCallback(async () => {
    try {
      const r = await fetch("/api/contact/challenge/", { cache: "no-store" });
      const d = await r.json();
      setMathLoadFailed(false);
      if (d.kind === "math") setMath({ question: d.question, token: d.token });
    } catch {
      setMathLoadFailed(true);
    }
  }, []);

  useEffect(() => {
    startedAt.current = Date.now();
    if (SITE_KEY) return;
    let live = true;
    fetch("/api/contact/challenge/", { cache: "no-store" })
      .then((r) => r.json())
      .then((d) => {
        if (live && d.kind === "math") setMath({ question: d.question, token: d.token });
      })
      .catch(() => live && setMathLoadFailed(true));
    return () => {
      live = false;
    };
  }, []);

  const toggle = (slug: string) => setPicked((p) => (p.includes(slug) ? p.filter((s) => s !== slug) : [...p, slug]));

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "").trim();

    const f: Fields = {};
    if (get("name").length < 2) f.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(get("email"))) f.email = "Please enter a valid email address.";
    if (get("message").length < 10) f.message = "Please tell us a little more (10 characters or more).";
    if (SITE_KEY && !token) f.captcha = "Please complete the security check.";
    if (!SITE_KEY && !get("answer")) f.captcha = "Please answer the security question.";
    setFields(f);
    if (Object.keys(f).length) {
      setError("Please check the highlighted fields.");
      setStatus("error");
      e.currentTarget.querySelector<HTMLElement>(`[name="${Object.keys(f)[0]}"]`)?.focus();
      return;
    }

    setStatus("sending");
    setError(null);
    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: get("name"),
          email: get("email"),
          company: get("company"),
          phone: get("phone"),
          message: get("message"),
          services: picked,
          website: get("website"),
          startedAt: startedAt.current,
          page: window.location.pathname,
          captcha: SITE_KEY ? { kind: "turnstile", token } : { kind: "math", token: math?.token ?? "", answer: get("answer") },
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string; fields?: Fields };
      if (!res.ok || !data.ok) {
        setFields(data.fields ?? {});
        setError(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        setResetKey((k) => k + 1);
        if (!SITE_KEY) void loadMath();
        return;
      }
      setStatus("sent");
    } catch {
      setError("You appear to be offline. Please check your connection and try again.");
      setStatus("error");
    }
  }

  const label = "mb-1.5 block text-sm font-medium text-ink";
  const hint = "mt-1.5 flex items-center gap-1.5 text-sm text-alarm";
  const errFor = (k: keyof Fields) =>
    fields[k] ? (
      <p id={`${uid}-${k}-err`} className={hint}>
        <CircleAlert aria-hidden className="h-4 w-4 shrink-0" /> {fields[k]}
      </p>
    ) : null;
  const aria = (k: keyof Fields) => ({
    "aria-invalid": fields[k] ? true : undefined,
    "aria-describedby": fields[k] ? `${uid}-${k}-err` : undefined,
  });

  if (status === "sent") {
    return (
      <div role="status" className="py-6">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-success text-white">
          <Check aria-hidden className="h-6 w-6" strokeWidth={3} />
        </span>
        <h3 className="mt-6 text-3xl font-semibold tracking-[-0.03em] text-ink">Thanks, we&rsquo;ve got your message.</h3>
        <p className="mt-3 max-w-[46ch] text-lg text-ink-2">
          Someone from our team will be in touch soon. If it&rsquo;s urgent, call{" "}
          <a href="tel:+12488944428" className="font-semibold text-brand underline">
            (248) 894-4428
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-5" aria-describedby={error ? `${uid}-form-err` : undefined}>
      <fieldset>
        <legend className={label}>What can we help with?</legend>
        <div className="flex flex-wrap gap-2">
          {services.map((s) => {
            const on = picked.includes(s.slug);
            return (
              <button
                key={s.slug}
                type="button"
                aria-pressed={on}
                onClick={() => toggle(s.slug)}
                className={`inline-flex min-h-9 items-center gap-1.5 rounded-full px-3.5 text-sm font-medium transition-[background-color,color,box-shadow] duration-200 ${
                  on ? "bg-brand text-white shadow-[0_6px_14px_-6px_rgba(23,105,255,.6)]" : "bg-white text-ink-2 ring-1 ring-line-strong hover:text-ink hover:ring-ink-3"
                }`}
              >
                {on && <Check aria-hidden className="h-3.5 w-3.5" strokeWidth={3} />}
                {serviceShort[s.slug]}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${uid}-name`} className={label}>
            Full name <span aria-hidden className="text-brand">*</span>
          </label>
          <input id={`${uid}-name`} name="name" autoComplete="name" required className="field" {...aria("name")} />
          {errFor("name")}
        </div>
        <div>
          <label htmlFor={`${uid}-email`} className={label}>
            Work email <span aria-hidden className="text-brand">*</span>
          </label>
          <input id={`${uid}-email`} name="email" type="email" autoComplete="email" required className="field" {...aria("email")} />
          {errFor("email")}
        </div>
        <div>
          <label htmlFor={`${uid}-company`} className={label}>
            Company
          </label>
          <input id={`${uid}-company`} name="company" autoComplete="organization" className="field" {...aria("company")} />
          {errFor("company")}
        </div>
        <div>
          <label htmlFor={`${uid}-phone`} className={label}>
            Phone
          </label>
          <input id={`${uid}-phone`} name="phone" type="tel" autoComplete="tel" className="field" {...aria("phone")} />
          {errFor("phone")}
        </div>
      </div>

      <div>
        <label htmlFor={`${uid}-message`} className={label}>
          Project details <span aria-hidden className="text-brand">*</span>
        </label>
        <textarea
          id={`${uid}-message`}
          name="message"
          rows={4}
          required
          className="field resize-y"
          placeholder="A few lines about your project, timeline and goals."
          {...aria("message")}
        />
        {errFor("message")}
      </div>

      {/* Honeypot: hidden from people and assistive tech */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${uid}-website`}>Website</label>
        <input id={`${uid}-website`} name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        {SITE_KEY ? (
          captchaBroken ? (
            <p className={hint}>The security check couldn&rsquo;t load. Disable content blockers for this page, or email info@exultitsolution.com.</p>
          ) : (
            <Turnstile siteKey={SITE_KEY} onToken={setToken} onError={() => setCaptchaBroken(true)} resetKey={resetKey} />
          )
        ) : (
          <div className="max-w-xs">
            <label htmlFor={`${uid}-answer`} className={label}>
              Security check: what is {math ? math.question : "…"}?
            </label>
            <div className="flex gap-2">
              <input
                id={`${uid}-answer`}
                name="answer"
                inputMode="numeric"
                autoComplete="off"
                className="field"
                disabled={!math}
                aria-invalid={fields.captcha ? true : undefined}
                aria-describedby={fields.captcha ? `${uid}-captcha-err` : undefined}
              />
              <button type="button" onClick={loadMath} className="btn btn-outline !min-h-0 !px-3.5" aria-label="New question">
                <RefreshCw aria-hidden className="h-4 w-4" />
              </button>
            </div>
            {mathLoadFailed && <p className={hint}>Couldn&rsquo;t load the question. Press refresh to try again.</p>}
          </div>
        )}
        {errFor("captcha")}
      </div>

      {status === "error" && error && (
        <p id={`${uid}-form-err`} role="alert" className="flex items-start gap-2 rounded-xl border border-alarm/25 bg-alarm/5 px-4 py-3 text-sm text-alarm">
          <CircleAlert aria-hidden className="mt-0.5 h-4 w-4 shrink-0" /> {error}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="btn btn-primary !min-h-12 !px-6" disabled={status === "sending"}>
          {status === "sending" ? (
            <>
              <LoaderCircle aria-hidden className="h-4 w-4 animate-spin" /> Sending…
            </>
          ) : (
            <>
              Send message <ArrowRight aria-hidden className="h-4 w-4" />
            </>
          )}
        </button>
        <p className="text-sm text-ink-3">Goes straight to our team.</p>
      </div>
    </form>
  );
}
