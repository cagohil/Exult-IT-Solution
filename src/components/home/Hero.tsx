"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import Bathymetry from "@/components/chart/Bathymetry";
import { services, serviceShort } from "@/lib/content";

// Chart frame for the readout: a box around Lake St. Clair and the St. Clair River.
const LAT_N = 43.05,
  LAT_S = 42.35,
  LON_W = 83.05,
  LON_E = 82.3;

const fmt = (deg: number, pos: string, neg: string) => {
  const d = Math.floor(Math.abs(deg));
  const m = ((Math.abs(deg) - d) * 60).toFixed(1).padStart(4, "0");
  return `${d}°${m}′${deg >= 0 ? pos : neg}`;
};

// Plotted offices, in percent of the hero. Placed along the shoaling right-hand shore.
const MACOMB = { x: 63, y: 70 };
const SARNIA = { x: 87, y: 31 };

export default function Hero() {
  const router = useRouter();
  const [sound, setSound] = useState<{ x: number; y: number; depth: number } | null>(null);
  const [picked, setPicked] = useState<string[]>([]);
  const onSound = useCallback((s: { x: number; y: number; depth: number } | null) => setSound(s), []);

  const lat = sound ? LAT_N - sound.y * (LAT_N - LAT_S) : 42.7;
  const lon = sound ? -(LON_W - sound.x * (LON_W - LON_E)) : -82.65;
  const feet = sound ? Math.round(4 + sound.depth * 26) : null;

  const toggle = (slug: string) => setPicked((p) => (p.includes(slug) ? p.filter((s) => s !== slug) : [...p, slug]));
  const go = () => {
    const q = picked.length ? `?services=${picked.join(",")}` : "";
    router.push(`/contact-us/${q}#project`);
  };

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-night text-foam"
    >
      <Bathymetry onSound={onSound} className="absolute inset-0 -z-10 h-full w-full" />

      {/* Course line and plotted offices (hidden on small screens, where the text needs the room) */}
      <svg className="pointer-events-none absolute inset-0 -z-10 hidden h-full w-full md:block" aria-hidden="true">
        <line
          x1={`${MACOMB.x}%`}
          y1={`${MACOMB.y}%`}
          x2={`${SARNIA.x}%`}
          y2={`${SARNIA.y}%`}
          stroke="#ff5a24"
          strokeWidth="2"
          strokeDasharray="10 7"
          className="[animation:course-flow_1.6s_linear_infinite] motion-reduce:[animation:none]"
        />
      </svg>
      <div
        className="pointer-events-none absolute -z-10 hidden md:block"
        style={{
          left: `${(MACOMB.x + SARNIA.x) / 2 + 1.2}%`,
          top: `${(MACOMB.y + SARNIA.y) / 2}%`,
        }}
        aria-hidden="true"
      >
        <span className="coord block rounded-[2px] bg-night/70 px-1.5 py-0.5 text-shallow">Course 053°T · 29 nmi</span>
      </div>
      {[
        { ...MACOMB, name: "Macomb, MI", c: "42°40′N 82°55′W", side: "left" as const },
        { ...SARNIA, name: "Sarnia, ON", c: "42°58′N 82°23′W", side: "left" as const },
      ].map((o, i) => (
        <div
          key={o.name}
          className="pointer-events-none absolute -z-10 hidden md:block"
          style={{ left: `${o.x}%`, top: `${o.y}%` }}
          aria-hidden="true"
        >
          <span className="absolute -left-[7px] -top-[7px] block h-[14px] w-[14px] rounded-full border-2 border-buoy bg-night" />
          <span
            className="absolute -left-[7px] -top-[7px] block h-[14px] w-[14px] rounded-full border border-buoy motion-reduce:hidden"
            style={{ animation: `ping-ring 2.6s ${0.9 + i * 0.4}s var(--ease-out-expo) infinite` }}
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 whitespace-nowrap text-right">
            <span className="block font-display text-xl font-bold tracking-wide text-white">{o.name}</span>
            <span className="coord block text-shallow/85">{o.c}</span>
          </span>
        </div>
      ))}

      <div className="container-chart relative flex flex-1 flex-col justify-end pb-10 pt-32 md:justify-center md:pb-24">
        <h1 id="hero-title" className="display max-w-[11ch] text-[clamp(3.4rem,1.6rem+7.2vw,7.5rem)] text-white">
          IT that keeps your business on course.
        </h1>
        <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-shallow md:text-xl">
          For more than two decades, Exult IT Solution has built websites, apps, CRM and cloud systems for businesses on both sides of the St. Clair River, from Macomb, Michigan and Sarnia, Ontario.
        </p>

        {/* Working action: pick what you need, then plot it */}
        <div className="mt-9 max-w-[40rem]">
          <p id="picker-label" className="mb-3 text-sm font-semibold text-white">
            What do you need charted?
          </p>
          <div role="group" aria-labelledby="picker-label" className="flex flex-wrap gap-2">
            {services.map((s) => {
              const on = picked.includes(s.slug);
              return (
                <button
                  key={s.slug}
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggle(s.slug)}
                  className={`inline-flex min-h-10 items-center gap-1.5 rounded-[2px] px-3.5 text-sm font-semibold transition-[background-color,color,box-shadow] duration-200 ${
                    on
                      ? "bg-white text-night shadow-[0_6px_18px_-8px_rgba(0,0,0,.6)]"
                      : "bg-night/35 text-foam shadow-[inset_0_0_0_1px_rgba(234,243,255,.35)] backdrop-blur-[2px] hover:shadow-[inset_0_0_0_1px_#eaf3ff]"
                  }`}
                >
                  {on && <Check aria-hidden className="h-3.5 w-3.5" strokeWidth={3} />}
                  {serviceShort[s.slug]}
                </button>
              );
            })}
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button type="button" onClick={go} className="btn btn-primary">
              Plot my project <ArrowRight aria-hidden className="h-4 w-4" />
            </button>
            <a href="tel:+12488944428" className="btn btn-ghost-dark">
              Call (248) 894-4428
            </a>
          </div>
        </div>
      </div>

      {/* Chart margin: live sounding readout and graticule */}
      <div className="relative border-t border-white/15 bg-night/55 backdrop-blur-[3px]">
        <div className="container-chart flex h-11 items-center justify-between gap-4 text-mist">
          <p className="coord flex items-center gap-3" aria-live="off">
            <span className="hidden text-shoal sm:inline">Sounding</span>
            <span className="text-foam">
              {fmt(lat, "N", "S")} {fmt(lon, "E", "W")}
            </span>
            <span className="hidden sm:inline">{feet !== null ? `${feet} fathoms` : "move to sound"}</span>
          </p>
          <p className="coord hidden md:block">Lake St. Clair &amp; St. Clair River · depth shown in bands</p>
          <p className="coord">Chart 01</p>
        </div>
      </div>
      <span className="sr-only">
        Animated depth chart. Exult has offices in Macomb, Michigan and Sarnia, Ontario.
      </span>
    </section>
  );
}
