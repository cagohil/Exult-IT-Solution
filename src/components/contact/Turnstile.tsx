"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      reset: (id?: string) => void;
      remove: (id: string) => void;
    };
    __exultTurnstileLoading?: Promise<void>;
  }
}

const SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

function loadScript() {
  if (window.turnstile) return Promise.resolve();
  window.__exultTurnstileLoading ??= new Promise<void>((resolve, reject) => {
    const s = document.createElement("script");
    s.src = SRC;
    s.async = true;
    s.defer = true;
    s.onload = () => resolve();
    s.onerror = () => {
      window.__exultTurnstileLoading = undefined;
      reject(new Error("Turnstile failed to load"));
    };
    document.head.appendChild(s);
  });
  return window.__exultTurnstileLoading;
}

type Props = {
  siteKey: string;
  onToken: (token: string | null) => void;
  onError?: () => void;
  /** Increment to force a fresh challenge (after a failed submit). */
  resetKey?: number;
};

export default function Turnstile({ siteKey, onToken, onError, resetKey = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const idRef = useRef<string | null>(null);
  const cb = useRef({ onToken, onError });
  useEffect(() => {
    cb.current = { onToken, onError };
  }, [onToken, onError]);

  useEffect(() => {
    let cancelled = false;
    loadScript()
      .then(() => {
        if (cancelled || !ref.current || !window.turnstile) return;
        idRef.current = window.turnstile.render(ref.current, {
          sitekey: siteKey,
          theme: "light",
          size: "flexible",
          action: "contact",
          callback: (t: string) => cb.current.onToken(t),
          "expired-callback": () => cb.current.onToken(null),
          "error-callback": () => {
            cb.current.onToken(null);
            cb.current.onError?.();
          },
        });
      })
      .catch(() => cb.current.onError?.());
    return () => {
      cancelled = true;
      if (idRef.current && window.turnstile) window.turnstile.remove(idRef.current);
      idRef.current = null;
    };
  }, [siteKey]);

  useEffect(() => {
    if (resetKey && idRef.current && window.turnstile) {
      window.turnstile.reset(idRef.current);
      cb.current.onToken(null);
    }
  }, [resetKey]);

  return <div ref={ref} className="min-h-[65px]" />;
}
