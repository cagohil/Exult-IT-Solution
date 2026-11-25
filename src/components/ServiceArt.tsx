/* Vector illustrations for each service, drawn in one shared style:
   white panels, brand blue / cyan / violet, navy accents, soft shadows, gentle motion. */

const B = "#1769ff";
const C = "#22b0f0";
const V = "#7c5cff";
const N = "#0b1530";
const L = "#e3e8f0";
const S = "#cfd8e5";

function Frame({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 480 360" role="img" aria-hidden="true" className="h-auto w-full overflow-visible">
      <defs>
        <radialGradient id={`${id}-bg`} cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#dbe7ff" />
          <stop offset="0.6" stopColor="#eef4ff" />
          <stop offset="1" stopColor="#eef4ff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-g`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={B} />
          <stop offset="1" stopColor={C} />
        </linearGradient>
        <linearGradient id={`${id}-v`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={V} />
          <stop offset="1" stopColor={B} />
        </linearGradient>
        <pattern id={`${id}-dots`} width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.4" fill="#b9cdf0" />
        </pattern>
        <filter id={`${id}-sh`} x="-30%" y="-30%" width="160%" height="170%">
          <feDropShadow dx="0" dy="12" stdDeviation="12" floodColor="#0d2a6e" floodOpacity="0.16" />
        </filter>
      </defs>
      <circle cx="240" cy="185" r="165" fill={`url(#${id}-bg)`} />
      <rect x="40" y="30" width="130" height="90" fill={`url(#${id}-dots)`} opacity="0.7" />
      <rect x="320" y="250" width="130" height="80" fill={`url(#${id}-dots)`} opacity="0.7" />
      {children}
    </svg>
  );
}

const float = (d = 0, dur = 6) => ({ animation: `float-y ${dur}s ${d}s ease-in-out infinite`, transformBox: "fill-box" as const });
const spin = (dur = 14) => ({ animation: `art-spin ${dur}s linear infinite`, transformBox: "fill-box" as const, transformOrigin: "center" });
const pulse = (d = 0) => ({ animation: `art-pulse 2.4s ${d}s ease-in-out infinite`, transformBox: "fill-box" as const, transformOrigin: "center" });

function Website({ id }: { id: string }) {
  return (
    <Frame id={id}>
      <g filter={`url(#${id}-sh)`}>
        <rect x="70" y="58" width="300" height="210" rx="16" fill="#fff" stroke={L} />
        <rect x="70" y="58" width="300" height="34" rx="16" fill="#f6f8fc" />
        <rect x="70" y="80" width="300" height="12" fill="#f6f8fc" />
        <circle cx="92" cy="75" r="5" fill="#ff5f57" />
        <circle cx="108" cy="75" r="5" fill="#febc2e" />
        <circle cx="124" cy="75" r="5" fill="#28c840" />
        <rect x="142" y="67" width="150" height="16" rx="8" fill="#fff" stroke={L} />
        <rect x="90" y="110" width="128" height="10" rx="5" fill={N} />
        <rect x="90" y="128" width="96" height="10" rx="5" fill={N} />
        <rect x="90" y="150" width="120" height="6" rx="3" fill={S} />
        <rect x="90" y="162" width="100" height="6" rx="3" fill={S} />
        <rect x="90" y="182" width="62" height="20" rx="10" fill={B} />
        <rect x="160" y="182" width="50" height="20" rx="10" fill="#fff" stroke={S} />
        <rect x="236" y="106" width="116" height="100" rx="12" fill={`url(#${id}-g)`} />
        <circle cx="270" cy="140" r="14" fill="#fff" opacity="0.35" />
        <path d="M244 196 l30-34 22 22 16-14 32 26z" fill="#fff" opacity="0.45" />
        <rect x="90" y="220" width="80" height="34" rx="8" fill="#f6f8fc" />
        <rect x="180" y="220" width="80" height="34" rx="8" fill="#f6f8fc" />
        <rect x="270" y="220" width="82" height="34" rx="8" fill="#f6f8fc" />
      </g>
      <g style={float(0.4, 7)} filter={`url(#${id}-sh)`}>
        <rect x="300" y="210" width="140" height="92" rx="14" fill={N} />
        <text x="318" y="238" fill={C} fontSize="16" fontFamily="var(--font-geist-mono), monospace" fontWeight="600">
          {"</>"}
        </text>
        <rect x="318" y="250" width="70" height="6" rx="3" fill={V} />
        <rect x="330" y="263" width="90" height="6" rx="3" fill={C} opacity="0.85" />
        <rect x="330" y="276" width="56" height="6" rx="3" fill="#fff" opacity="0.5" />
      </g>
      <g style={float(1.2, 6)} filter={`url(#${id}-sh)`}>
        <rect x="40" y="196" width="66" height="118" rx="14" fill={N} />
        <rect x="46" y="204" width="54" height="102" rx="9" fill="#fff" />
        <rect x="52" y="214" width="42" height="26" rx="5" fill={`url(#${id}-g)`} />
        <rect x="52" y="248" width="34" height="5" rx="2.5" fill={S} />
        <rect x="52" y="258" width="26" height="5" rx="2.5" fill={S} />
        <rect x="52" y="274" width="30" height="12" rx="6" fill={B} />
      </g>
      <path d="M255 168 l0 26 7-7 6 12 5-2 -6-12 10 0z" fill={N} stroke="#fff" strokeWidth="2" style={float(0.8, 5)} />
    </Frame>
  );
}

function CloudArt({ id }: { id: string }) {
  return (
    <Frame id={id}>
      <g style={float(0, 7)} filter={`url(#${id}-sh)`}>
        <path d="M150 150 a46 46 0 0 1 44-60 a62 62 0 0 1 116 14 a42 42 0 0 1 22 82 H162 a40 40 0 0 1 -12-36z" fill={`url(#${id}-g)`} />
        <path d="M240 168 v-44 m-16 16 l16-16 16 16" stroke="#fff" strokeWidth="9" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g stroke={S} strokeWidth="2.5" strokeDasharray="5 6" fill="none">
        <path d="M170 196 C 160 220, 130 222, 120 246" />
        <path d="M240 196 V 246" />
        <path d="M310 196 C 320 220, 350 222, 360 246" />
      </g>
      {[80, 200, 320].map((x, i) => (
        <g key={x} filter={`url(#${id}-sh)`}>
          <rect x={x} y="246" width="80" height="76" rx="12" fill="#fff" stroke={L} />
          {[0, 1, 2].map((r) => (
            <g key={r}>
              <rect x={x + 12} y={258 + r * 20} width="56" height="12" rx="4" fill="#f6f8fc" stroke={L} />
              <circle cx={x + 60} cy={264 + r * 20} r="3" fill={r === 1 ? C : "#12a150"} style={pulse(i * 0.3 + r * 0.2)} />
              <rect x={x + 18} y={262 + r * 20} width="24" height="4" rx="2" fill={S} />
            </g>
          ))}
        </g>
      ))}
      <g style={float(1, 6)} filter={`url(#${id}-sh)`}>
        <path d="M372 70 l34 12 v24 c0 22 -16 36 -34 42 c-18-6 -34-20 -34-42 v-24z" fill="#fff" stroke={L} />
        <path d="M358 106 l10 10 20-22" stroke="#12a150" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </Frame>
  );
}

function Mobile({ id }: { id: string }) {
  return (
    <Frame id={id}>
      <g filter={`url(#${id}-sh)`}>
        <rect x="170" y="34" width="140" height="292" rx="28" fill={N} />
        <rect x="180" y="44" width="120" height="272" rx="20" fill="#fff" />
        <rect x="216" y="50" width="48" height="10" rx="5" fill={N} />
        <rect x="192" y="74" width="56" height="7" rx="3.5" fill={S} />
        <rect x="192" y="86" width="80" height="10" rx="5" fill={N} />
        <rect x="192" y="106" width="96" height="70" rx="12" fill={`url(#${id}-g)`} />
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x={202 + i * 16} y={160 - [16, 28, 20, 36, 26][i]} width="10" height={[16, 28, 20, 36, 26][i]} rx="3" fill="#fff" opacity="0.8" style={{ animation: `eq ${2 + (i % 3) * 0.4}s ${i * 0.15}s ease-in-out infinite`, transformBox: "fill-box", transformOrigin: "bottom" }} />
        ))}
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x="192" y={188 + i * 38} width="96" height="30" rx="8" fill="#f6f8fc" />
            <circle cx="206" cy={203 + i * 38} r="7" fill={[B, C, V][i]} opacity="0.85" />
            <rect x="220" y={198 + i * 38} width="44" height="5" rx="2.5" fill={N} opacity="0.7" />
            <rect x="220" y={207 + i * 38} width="30" height="4" rx="2" fill={S} />
          </g>
        ))}
      </g>
      <g style={float(0.3, 6)} filter={`url(#${id}-sh)`}>
        <rect x="56" y="92" width="134" height="54" rx="14" fill="#fff" stroke={L} />
        <circle cx="80" cy="119" r="13" fill={`url(#${id}-g)`} />
        <path d="M74 121 a6 6 0 0 1 12 0 v4 h-12z M78 127 h4" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <rect x="100" y="110" width="70" height="6" rx="3" fill={N} opacity="0.75" />
        <rect x="100" y="122" width="50" height="5" rx="2.5" fill={S} />
      </g>
      <g style={float(1.4, 7)} filter={`url(#${id}-sh)`}>
        <rect x="300" y="214" width="128" height="50" rx="14" fill="#fff" stroke={L} />
        {[0, 1, 2, 3, 4].map((i) => (
          <path key={i} transform={`translate(${316 + i * 20} 228)`} d="M8 0 l2.4 5 5.6.8 -4 4 1 5.5 -5-2.7 -5 2.7 1-5.5 -4-4 5.6-.8z" fill="#f59e0b" />
        ))}
        <rect x="316" y="248" width="60" height="5" rx="2.5" fill={S} />
      </g>
    </Frame>
  );
}

function Crm({ id }: { id: string }) {
  const nodes = [
    [96, 96, B],
    [384, 104, C],
    [90, 262, V],
    [390, 258, B],
  ] as const;
  return (
    <Frame id={id}>
      <g stroke={S} strokeWidth="2.5" strokeDasharray="5 6">
        {nodes.map(([x, y], i) => (
          <line key={i} x1={x} y1={y} x2="240" y2="180" />
        ))}
      </g>
      <g filter={`url(#${id}-sh)`}>
        <rect x="160" y="104" width="160" height="152" rx="18" fill="#fff" stroke={L} />
        <circle cx="240" cy="148" r="26" fill={`url(#${id}-g)`} />
        <circle cx="240" cy="141" r="9" fill="#fff" />
        <path d="M224 162 a16 14 0 0 1 32 0" fill="#fff" />
        <rect x="196" y="186" width="88" height="9" rx="4.5" fill={N} />
        <rect x="208" y="202" width="64" height="6" rx="3" fill={S} />
        <rect x="186" y="222" width="50" height="20" rx="10" fill="#eef4ff" />
        <rect x="244" y="222" width="50" height="20" rx="10" fill={B} />
      </g>
      {nodes.map(([x, y, c], i) => (
        <g key={i} style={float(i * 0.5, 6 + i)} filter={`url(#${id}-sh)`}>
          <circle cx={x} cy={y} r="28" fill="#fff" stroke={L} />
          <circle cx={x} cy={y - 5} r="8" fill={c} />
          <path d={`M${x - 13} ${y + 15} a13 11 0 0 1 26 0`} fill={c} />
        </g>
      ))}
      <g style={float(0.9, 7)} filter={`url(#${id}-sh)`}>
        <rect x="300" y="168" width="118" height="62" rx="12" fill={N} />
        {[0, 1, 2].map((i) => (
          <rect key={i} x="314" y={180 + i * 14} width={[86, 62, 40][i]} height="8" rx="4" fill={[C, B, V][i]} />
        ))}
      </g>
    </Frame>
  );
}

function Ecommerce({ id }: { id: string }) {
  return (
    <Frame id={id}>
      <g filter={`url(#${id}-sh)`}>
        <rect x="80" y="64" width="190" height="236" rx="18" fill="#fff" stroke={L} />
        <rect x="96" y="80" width="158" height="120" rx="12" fill={`url(#${id}-v)`} />
        <path d="M150 168 c0-24 50-24 50 0" fill="none" stroke="#fff" strokeWidth="6" opacity="0.7" />
        <rect x="140" y="160" width="70" height="30" rx="8" fill="#fff" opacity="0.4" />
        <rect x="96" y="214" width="110" height="9" rx="4.5" fill={N} />
        <rect x="96" y="230" width="70" height="7" rx="3.5" fill={S} />
        <text x="96" y="266" fontSize="18" fontWeight="700" fill={B} fontFamily="var(--font-geist), sans-serif">
          $49
        </text>
        <rect x="170" y="250" width="84" height="26" rx="13" fill={B} />
        <rect x="186" y="260" width="52" height="6" rx="3" fill="#fff" />
      </g>
      <g style={float(0.3, 6)} filter={`url(#${id}-sh)`}>
        <path d="M296 136 h120 l-10 128 h-100z" fill={`url(#${id}-g)`} />
        <path d="M326 136 v-14 a30 30 0 0 1 60 0 v14" fill="none" stroke={N} strokeWidth="7" strokeLinecap="round" />
        <path d="M336 194 l14 14 28-30" stroke="#fff" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g style={float(1.2, 7)} filter={`url(#${id}-sh)`}>
        <rect x="270" y="262" width="150" height="70" rx="12" fill={N} />
        <rect x="286" y="278" width="26" height="18" rx="4" fill="#febc2e" />
        <rect x="286" y="308" width="90" height="6" rx="3" fill="#fff" opacity="0.6" />
        <circle cx="390" cy="285" r="9" fill="#ff5f57" opacity="0.9" />
        <circle cx="402" cy="285" r="9" fill="#febc2e" opacity="0.9" />
      </g>
      <g style={pulse(0.5)}>
        <circle cx="406" cy="132" r="17" fill="#12a150" />
        <text x="406" y="138" textAnchor="middle" fontSize="15" fontWeight="700" fill="#fff" fontFamily="var(--font-geist), sans-serif">
          +1
        </text>
      </g>
    </Frame>
  );
}

function Seo({ id }: { id: string }) {
  return (
    <Frame id={id}>
      <g filter={`url(#${id}-sh)`}>
        <rect x="70" y="62" width="250" height="240" rx="18" fill="#fff" stroke={L} />
        <rect x="88" y="80" width="214" height="28" rx="14" fill="#f6f8fc" stroke={L} />
        <circle cx="106" cy="94" r="6" fill="none" stroke={S} strokeWidth="2.5" />
        <rect x="120" y="90" width="90" height="7" rx="3.5" fill={S} />
        <g style={{ animation: "rank-up 7s 1s cubic-bezier(.16,1,.3,1) infinite" }}>
          <rect x="88" y="122" width="214" height="54" rx="10" fill="#eef4ff" stroke="#dbe7ff" />
          <rect x="102" y="134" width="96" height="8" rx="4" fill={B} />
          <rect x="102" y="150" width="170" height="6" rx="3" fill="#9cc2ff" />
          <rect x="102" y="161" width="120" height="6" rx="3" fill="#c7dbff" />
        </g>
        {[0, 1].map((i) => (
          <g key={i}>
            <rect x="102" y={192 + i * 46} width="80" height="7" rx="3.5" fill={S} />
            <rect x="102" y={206 + i * 46} width="170" height="6" rx="3" fill={L} />
            <rect x="102" y={217 + i * 46} width="130" height="6" rx="3" fill={L} />
          </g>
        ))}
      </g>
      <g style={float(0.5, 7)} filter={`url(#${id}-sh)`}>
        <circle cx="300" cy="150" r="58" fill="#fff" fillOpacity="0.35" stroke={N} strokeWidth="14" />
        <path d="M342 194 l52 52" stroke={N} strokeWidth="20" strokeLinecap="round" />
      </g>
      <g style={float(1.3, 6)} filter={`url(#${id}-sh)`}>
        <rect x="320" y="248" width="120" height="72" rx="12" fill="#fff" stroke={L} />
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x={336 + i * 22} y={304 - (i + 1) * 11} width="14" height={(i + 1) * 11} rx="3" fill={i === 3 ? B : "#c7dbff"} />
        ))}
        <path d="M336 284 L 404 258" stroke="#12a150" strokeWidth="3" strokeLinecap="round" />
        <path d="M394 256 l11 1 -4 10" stroke="#12a150" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g style={pulse(0)}>
        <circle cx="104" cy="56" r="22" fill={`url(#${id}-g)`} />
        <text x="104" y="62" textAnchor="middle" fontSize="16" fontWeight="700" fill="#fff" fontFamily="var(--font-geist), sans-serif">
          #1
        </text>
      </g>
    </Frame>
  );
}

function DataAi({ id }: { id: string }) {
  const pins = [-60, -30, 0, 30, 60];
  return (
    <Frame id={id}>
      <g stroke="#9cc2ff" strokeWidth="2.5" fill="none" strokeLinecap="round">
        {pins.map((p) => (
          <g key={p}>
            <path d={`M${200 + p * 0.5} 130 V 96 h${p * 0.6}`} />
            <path d={`M${200 + p * 0.5} 230 V 268 h${-p * 0.6}`} />
          </g>
        ))}
        <path d="M150 180 H 96" />
        <path d="M250 180 H 300" />
      </g>
      {pins.map((p, i) => (
        <circle key={p} cx={200 + p * 0.5 + p * 0.6} cy="96" r="5" fill={[B, C, V, C, B][i]} style={pulse(i * 0.25)} />
      ))}
      <g filter={`url(#${id}-sh)`}>
        <rect x="150" y="130" width="100" height="100" rx="20" fill={N} />
        <rect x="164" y="144" width="72" height="72" rx="12" fill={`url(#${id}-v)`} />
        <text x="200" y="190" textAnchor="middle" fontSize="28" fontWeight="700" fill="#fff" fontFamily="var(--font-geist), sans-serif">
          AI
        </text>
      </g>
      <g style={float(0.6, 7)} filter={`url(#${id}-sh)`}>
        <rect x="290" y="100" width="150" height="120" rx="16" fill="#fff" stroke={L} />
        <rect x="306" y="116" width="60" height="7" rx="3.5" fill={N} opacity="0.75" />
        <path d="M306 196 l22-18 18 10 24-30 22 14 24-28" fill="none" stroke={B} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="200" style={{ animation: "draw-line 4s ease-in-out infinite" }} />
        <path d="M306 196 l22-18 18 10 24-30 22 14 24-28 V 206 H 306z" fill={B} opacity="0.08" />
      </g>
      <g style={float(1.2, 6)} filter={`url(#${id}-sh)`}>
        <rect x="40" y="150" width="70" height="60" rx="14" fill="#fff" stroke={L} />
        <circle cx="62" cy="180" r="9" fill={C} />
        <circle cx="88" cy="170" r="6" fill={V} />
        <circle cx="88" cy="192" r="6" fill={B} />
        <path d="M70 177 l12-5 M70 183 l12 6" stroke={S} strokeWidth="2" />
      </g>
      <g style={pulse(0.4)} fill="#f59e0b">
        <path d="M360 270 l5 13 13 5 -13 5 -5 13 -5-13 -13-5 13-5z" />
        <path d="M410 250 l3 8 8 3 -8 3 -3 8 -3-8 -8-3 8-3z" opacity="0.7" />
      </g>
    </Frame>
  );
}

function Erp({ id }: { id: string }) {
  const mods = [
    { x: 240, y: 62, c: B, label: "Sales" },
    { x: 380, y: 140, c: C, label: "Stock" },
    { x: 350, y: 286, c: V, label: "Finance" },
    { x: 130, y: 286, c: B, label: "HR" },
    { x: 100, y: 140, c: C, label: "Supply" },
  ];
  return (
    <Frame id={id}>
      <circle cx="240" cy="185" r="118" fill="none" stroke={S} strokeWidth="2" strokeDasharray="4 8" style={spin(40)} />
      <g stroke={S} strokeWidth="2.5">
        {mods.map((m) => (
          <line key={m.label} x1={m.x} y1={m.y} x2="240" y2="185" />
        ))}
      </g>
      <g filter={`url(#${id}-sh)`}>
        <rect x="190" y="135" width="100" height="100" rx="24" fill={`url(#${id}-g)`} />
        <g style={spin(16)}>
          <path
            d="M240 158 l6 0 2 8 6 3 7-4 4 4 -4 7 3 6 8 2 0 6 -8 2 -3 6 4 7 -4 4 -7-4 -6 3 -2 8 -6 0 -2-8 -6-3 -7 4 -4-4 4-7 -3-6 -8-2 0-6 8-2 3-6 -4-7 4-4 7 4 6-3z"
            fill="#fff"
            opacity="0.95"
          />
          <circle cx="243" cy="188" r="9" fill={B} />
        </g>
      </g>
      {mods.map((m, i) => (
        <g key={m.label} style={float(i * 0.4, 6 + (i % 3))} filter={`url(#${id}-sh)`}>
          <rect x={m.x - 44} y={m.y - 26} width="88" height="52" rx="14" fill="#fff" stroke={L} />
          <rect x={m.x - 32} y={m.y - 13} width="26" height="26" rx="8" fill={m.c} />
          <text x={m.x + 2} y={m.y + 5} fontSize="13" fontWeight="600" fill={N} fontFamily="var(--font-geist), sans-serif">
            {m.label}
          </text>
        </g>
      ))}
    </Frame>
  );
}

const ART: Record<string, (p: { id: string }) => React.ReactElement> = {
  "website-development": Website,
  "cloud-computing-services": CloudArt,
  "mobile-app-development": Mobile,
  "crm-development-company": Crm,
  "ecommerce-web-development": Ecommerce,
  "search-engine-optimization": Seo,
  "data-ai-solutions": DataAi,
  "erp-software-development": Erp,
};

export default function ServiceArt({ slug, idPrefix = "a" }: { slug: string; idPrefix?: string }) {
  const Art = ART[slug] ?? Website;
  return <Art id={`${idPrefix}-${slug}`} />;
}
