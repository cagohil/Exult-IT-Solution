import { Check, ShoppingBag, Search, TrendingUp, Server, Database, ShieldCheck } from "lucide-react";

/* Illustrative product UI. Every name and figure here is sample content inside a drawing, not a claim. */

export function BrowserMock({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-line bg-white shadow-[var(--shadow-float)] ${className}`}>
      <div className="flex items-center gap-2 border-b border-line bg-subtle px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 flex h-6 flex-1 items-center gap-1.5 rounded-md bg-white px-2.5 font-mono text-[0.7rem] text-ink-3 ring-1 ring-line">
          <ShieldCheck aria-hidden className="h-3 w-3 text-success" /> yourbusiness.com
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <span className="h-3 w-16 rounded-full bg-ink/80" />
          <span className="flex gap-2">
            <span className="h-2 w-8 rounded-full bg-line-strong" />
            <span className="h-2 w-8 rounded-full bg-line-strong" />
            <span className="h-2 w-8 rounded-full bg-line-strong" />
            <span className="h-4 w-12 rounded-full bg-brand" />
          </span>
        </div>
        <div className="mt-6 grid grid-cols-[1.1fr_1fr] items-center gap-5">
          <div>
            <span className="block h-3.5 w-[92%] rounded-full bg-ink/85" />
            <span className="mt-2 block h-3.5 w-[70%] rounded-full bg-ink/85" />
            <span className="mt-4 block h-2 w-full rounded-full bg-line-strong" />
            <span className="mt-1.5 block h-2 w-[80%] rounded-full bg-line-strong" />
            <span className="mt-5 flex gap-2">
              <span className="h-6 w-20 rounded-full bg-brand" />
              <span className="h-6 w-16 rounded-full ring-1 ring-line-strong" />
            </span>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-brand via-[#3d8bff] to-cyan">
            <span className="absolute bottom-3 left-3 right-3 rounded-lg bg-white/90 p-2 shadow-sm">
              <span className="block h-2 w-2/3 rounded-full bg-ink/70" />
              <span className="mt-1.5 block h-1.5 w-1/2 rounded-full bg-line-strong" />
            </span>
            <span className="absolute right-3 top-3 h-8 w-8 rounded-lg bg-white/30" />
          </div>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-3">
          {["Mobile-ready", "SEO-friendly", "Secure"].map((t) => (
            <span key={t} className="flex items-center gap-1.5 rounded-lg bg-subtle px-2.5 py-2 text-[0.72rem] font-medium text-ink-2">
              <Check aria-hidden className="h-3.5 w-3.5 text-success" strokeWidth={3} /> {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PipelineMock({ className = "" }: { className?: string }) {
  const cols = [
    { t: "New", c: "bg-ink-3", deals: ["Lakeside Dental", "Northline Auto"] },
    { t: "Proposal", c: "bg-warn", deals: ["Metro Supply"] },
    { t: "Won", c: "bg-success", deals: ["Harbor Realty", "Vale Clinic"] },
  ];
  return (
    <div className={`rounded-2xl border border-line bg-white p-4 shadow-[var(--shadow-float)] ${className}`}>
      <div className="flex items-center justify-between">
        <p className="text-[0.8rem] font-semibold text-ink">Sales pipeline</p>
        <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[0.65rem] font-semibold text-brand">CRM</span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {cols.map((col) => (
          <div key={col.t} className="rounded-lg bg-subtle p-1.5">
            <p className="flex items-center gap-1.5 px-1 text-[0.62rem] font-semibold uppercase tracking-wide text-ink-3">
              <span className={`h-1.5 w-1.5 rounded-full ${col.c}`} /> {col.t}
            </p>
            <div className="mt-1.5 grid gap-1.5">
              {col.deals.map((d) => (
                <span key={d} className="block rounded-md bg-white px-1.5 py-1.5 text-[0.62rem] font-medium leading-tight text-ink-2 shadow-[0_1px_2px_rgba(10,16,34,.08)]">
                  {d}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PhoneMock({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-[2rem] bg-ink p-2 shadow-[var(--shadow-float)] ${className}`}>
      <div className="overflow-hidden rounded-[1.6rem] bg-white">
        <div className="flex justify-center pt-2">
          <span className="h-4 w-16 rounded-full bg-ink" />
        </div>
        <div className="px-3.5 pb-4 pt-3">
          <p className="text-[0.62rem] font-medium text-ink-3">Good morning</p>
          <p className="text-[0.85rem] font-semibold leading-tight text-ink">Your orders</p>
          <div className="mt-3 rounded-xl bg-gradient-to-br from-brand to-cyan p-3 text-white">
            <p className="text-[0.58rem] opacity-80">This week</p>
            <p className="text-lg font-semibold leading-tight">24 orders</p>
            <div className="mt-2 flex h-8 items-end gap-1">
              {[40, 65, 50, 80, 60, 95, 75].map((h, i) => (
                <span key={i} className="flex-1 origin-bottom rounded-sm bg-white/70" style={{ height: `${h}%`, animation: `bar-grow 1.2s ${0.1 * i}s var(--ease-out-expo) both` }} />
              ))}
            </div>
          </div>
          {[
            ["#1042", "Shipped", "text-success bg-success/10"],
            ["#1041", "Packing", "text-warn bg-warn/10"],
            ["#1040", "Delivered", "text-brand bg-brand-50"],
          ].map(([id, s, c]) => (
            <div key={id} className="mt-2 flex items-center justify-between rounded-lg bg-subtle px-2.5 py-2">
              <span className="flex items-center gap-2">
                <ShoppingBag aria-hidden className="h-3.5 w-3.5 text-ink-3" />
                <span className="text-[0.65rem] font-semibold text-ink">Order {id}</span>
              </span>
              <span className={`rounded-full px-1.5 py-0.5 text-[0.55rem] font-semibold ${c}`}>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CloudMock({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-2xl border border-line bg-white/95 p-3.5 shadow-[var(--shadow-float)] backdrop-blur ${className}`}>
      <div className="flex items-center gap-2.5">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-60 [animation:blink_2s_ease-in-out_infinite]" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
        </span>
        <p className="text-[0.78rem] font-semibold text-ink">All systems operational</p>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {[
          [Server, "App"],
          [Database, "Data"],
          [ShieldCheck, "Backup"],
        ].map(([Icon, l]) => {
          const I = Icon as typeof Server;
          return (
            <span key={l as string} className="flex flex-col items-center gap-1 rounded-lg bg-subtle py-2">
              <I aria-hidden className="h-4 w-4 text-brand" />
              <span className="text-[0.6rem] font-medium text-ink-2">{l as string}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export function SearchMock({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-2xl border border-line bg-white p-4 shadow-[var(--shadow-card)] ${className}`}>
      <div className="flex items-center gap-2 rounded-full bg-subtle px-3 py-2 ring-1 ring-line">
        <Search aria-hidden className="h-3.5 w-3.5 text-ink-3" />
        <span className="text-[0.72rem] text-ink-2">it services near me</span>
      </div>
      <div className="mt-3 rounded-lg bg-brand-50 p-2.5 ring-1 ring-brand-100">
        <p className="flex items-center gap-1.5 text-[0.7rem] font-semibold text-brand">
          <TrendingUp aria-hidden className="h-3.5 w-3.5" /> yourbusiness.com
        </p>
        <span className="mt-1.5 block h-1.5 w-11/12 rounded-full bg-brand/30" />
        <span className="mt-1 block h-1.5 w-2/3 rounded-full bg-brand/20" />
      </div>
      {[0, 1].map((i) => (
        <div key={i} className="mt-2 px-2.5 py-1">
          <span className="block h-1.5 w-1/2 rounded-full bg-line-strong" />
          <span className="mt-1.5 block h-1.5 w-10/12 rounded-full bg-line" />
        </div>
      ))}
    </div>
  );
}
