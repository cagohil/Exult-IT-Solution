/* Original vector illustrations for each service, in one shared style:
   a soft floor glow, layered white panels with a cool top-light gradient, brand blue / cyan / violet,
   navy accents, soft offset shadows and gentle motion (floating chips, flowing links, travelling data packets).
   No small text labels, so nothing can collide at small sizes. */

const B = "#1769ff";
const C = "#22b0f0";
const V = "#7c5cff";
const N = "#0b1530";
const L = "#e3e8f0";
const S = "#cfd8e5";
const OK = "#12a150";
const AMBER = "#f59e0b";

type P = { id: string };

function Frame({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 480 360" role="img" aria-hidden="true" className="h-auto w-full overflow-visible">
      <defs>
        <radialGradient id={`${id}-bg`} cx="50%" cy="46%" r="52%">
          <stop offset="0" stopColor="#dbe7ff" />
          <stop offset="0.55" stopColor="#eef4ff" />
          <stop offset="1" stopColor="#eef4ff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${id}-floor`} cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#b7ceff" stopOpacity="0.75" />
          <stop offset="1" stopColor="#b7ceff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-g`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={B} />
          <stop offset="1" stopColor={C} />
        </linearGradient>
        <linearGradient id={`${id}-v`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={V} />
          <stop offset="1" stopColor={B} />
        </linearGradient>
        <linearGradient id={`${id}-n`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1a2c5c" />
          <stop offset="1" stopColor={N} />
        </linearGradient>
        <linearGradient id={`${id}-p`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#f3f7fe" />
        </linearGradient>
        <pattern id={`${id}-dots`} width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.3" fill="#b9cdf0" />
        </pattern>
        <filter id={`${id}-sh`} x="-30%" y="-30%" width="160%" height="175%">
          <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#0d2a6e" floodOpacity="0.16" />
        </filter>
        <filter id={`${id}-glow`} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="22" />
        </filter>
      </defs>
      <circle cx="240" cy="172" r="170" fill={`url(#${id}-bg)`} />
      <rect x="28" y="22" width="128" height="80" fill={`url(#${id}-dots)`} opacity="0.75" />
      <rect x="330" y="258" width="128" height="70" fill={`url(#${id}-dots)`} opacity="0.75" />
      <ellipse cx="240" cy="326" rx="190" ry="22" fill={`url(#${id}-floor)`} />
      {children}
    </svg>
  );
}

/* ---------- shared bits ---------- */
const float = (d = 0, dur = 6) => ({ animation: `float-y ${dur}s ${d}s ease-in-out infinite`, transformBox: "fill-box" as const });
const spin = (dur = 14) => ({ animation: `art-spin ${dur}s linear infinite`, transformBox: "fill-box" as const, transformOrigin: "center" });
const pulse = (d = 0) => ({ animation: `art-pulse 2.4s ${d}s ease-in-out infinite`, transformBox: "fill-box" as const, transformOrigin: "center" });

function Panel({ id, x, y, w, h, r = 16, shadow = true }: P & { x: number; y: number; w: number; h: number; r?: number; shadow?: boolean }) {
  return <rect x={x} y={y} width={w} height={h} rx={r} fill={`url(#${id}-p)`} stroke={L} filter={shadow ? `url(#${id}-sh)` : undefined} />;
}

function Glow({ id, cx, cy, r = 80, color = B, o = 0.22 }: P & { cx: number; cy: number; r?: number; color?: string; o?: number }) {
  return <circle cx={cx} cy={cy} r={r} fill={color} opacity={o} filter={`url(#${id}-glow)`} />;
}

/** A data packet travelling along a path, fading in and out. */
function Packet({ path, dur = 2.6, delay = 0, color = B, r = 4 }: { path: string; dur?: number; delay?: number; color?: string; r?: number }) {
  return (
    <circle r={r} fill={color} opacity="0" className="art-packet">
      <animateMotion path={path} dur={`${dur}s`} begin={`${delay}s`} repeatCount="indefinite" />
      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur={`${dur}s`} begin={`${delay}s`} repeatCount="indefinite" />
    </circle>
  );
}

function Line({ w, x, y, c = S, h = 6 }: { w: number; x: number; y: number; c?: string; h?: number }) {
  return <rect x={x} y={y} width={w} height={h} rx={h / 2} fill={c} />;
}

/* ---------- 1. Website development ---------- */
function Website({ id }: P) {
  return (
    <Frame id={id}>
      <Glow id={id} cx={230} cy={150} r={100} />
      <Panel id={id} x={70} y={44} w={310} h={222} />
      <path d="M86 44 h278 a16 16 0 0 1 16 16 v16 h-310 v-16 a16 16 0 0 1 16-16z" fill="#eef2f8" />
      <circle cx="90" cy="60" r="4.5" fill="#ff5f57" />
      <circle cx="104" cy="60" r="4.5" fill="#febc2e" />
      <circle cx="118" cy="60" r="4.5" fill="#28c840" />
      <rect x="138" y="52" width="176" height="16" rx="8" fill="#fff" stroke={L} />
      <circle cx="149" cy="60" r="3.5" fill={OK} />
      <Line x={158} y={57} w={70} c={S} />
      {/* site nav */}
      <rect x="88" y="90" width="44" height="9" rx="4.5" fill={N} />
      <Line x={250} y={92} w={20} h={5} />
      <Line x={276} y={92} w={20} h={5} />
      <Line x={302} y={92} w={20} h={5} />
      <rect x="330" y="87" width="34" height="12" rx="6" fill={B} />
      {/* hero */}
      <Line x={88} y={116} w={124} h={11} c={N} />
      <Line x={88} y={133} w={92} h={11} c={N} />
      <Line x={88} y={154} w={120} h={5} />
      <Line x={88} y={164} w={100} h={5} />
      <rect x="88" y="180" width="56" height="20" rx="10" fill={B} />
      <rect x="150" y="180" width="46" height="20" rx="10" fill="#fff" stroke={S} />
      <rect x="226" y="110" width="138" height="96" rx="12" fill={`url(#${id}-g)`} />
      <circle cx="256" cy="136" r="11" fill="#fff" opacity="0.5" />
      <path d="M232 200 l38-44 26 28 18-16 46 32z" fill="#fff" opacity="0.4" />
      {/* feature row */}
      {[88, 182, 276].map((x, i) => (
        <g key={x}>
          <rect x={x} y="218" width="88" height="34" rx="9" fill="#f3f6fb" />
          <rect x={x + 9} y="227" width="16" height="16" rx="5" fill={[B, C, V][i]} opacity="0.85" />
          <Line x={x + 32} y={230} w={44} h={5} c={S} />
          <Line x={x + 32} y={239} w={30} h={4} c={L} />
        </g>
      ))}
      <path d="M128 192 l0 24 7-7 5 11 5-2 -5-11 10 0z" fill={N} stroke="#fff" strokeWidth="2" style={float(0.6, 4)} />
      {/* responsive phone */}
      <g style={float(1.1, 6)}>
        <g filter={`url(#${id}-sh)`}>
          <rect x="30" y="176" width="78" height="138" rx="16" fill={`url(#${id}-n)`} />
          <rect x="36" y="184" width="66" height="122" rx="11" fill="#fff" />
        </g>
        <rect x="56" y="188" width="26" height="5" rx="2.5" fill={N} />
        <rect x="43" y="200" width="52" height="34" rx="7" fill={`url(#${id}-g)`} />
        <Line x={43} y={242} w={44} h={5} c={N} />
        <Line x={43} y={252} w={36} h={4} />
        <rect x="43" y="266" width="34" height="13" rx="6.5" fill={B} />
        <rect x="43" y="286" width="52" height="12" rx="4" fill="#f3f6fb" />
      </g>
      {/* code card */}
      <g style={float(0.3, 7)}>
        <rect x="300" y="214" width="152" height="98" rx="14" fill={`url(#${id}-n)`} filter={`url(#${id}-sh)`} />
        <circle cx="316" cy="230" r="3.5" fill="#ff5f57" />
        <circle cx="328" cy="230" r="3.5" fill="#febc2e" />
        <circle cx="340" cy="230" r="3.5" fill="#28c840" />
        <Line x={316} y={246} w={40} c={V} />
        <Line x={362} y={246} w={30} c={C} />
        <Line x={328} y={260} w={70} c={C} />
        <Line x={328} y={274} w={48} c="#ffffff" />
        <Line x={382} y={274} w={30} c={AMBER} />
        <Line x={316} y={288} w={36} c={V} />
      </g>
      {/* speed gauge chip */}
      <g style={float(0, 6.5)}>
        <Panel id={id} x={354} y={22} w={104} h={58} r={14} />
        <path d="M372 64 a18 18 0 0 1 36 0" fill="none" stroke={L} strokeWidth="6" strokeLinecap="round" />
        <path d="M372 64 a18 18 0 0 1 32 -10" fill="none" stroke={OK} strokeWidth="6" strokeLinecap="round" />
        <path d="M390 64 l10 -12" stroke={N} strokeWidth="3" strokeLinecap="round" />
        <circle cx="390" cy="64" r="3.5" fill={N} />
        <Line x={416} y={44} w={30} h={6} c={N} />
        <Line x={416} y={56} w={22} h={5} />
      </g>
    </Frame>
  );
}

/* ---------- 2. Cloud services ---------- */
function CloudArt({ id }: P) {
  const racks = [120, 208, 296];
  const links = racks.map((x) => `M${x + 32} 176 C ${x + 32} 196, ${x + 32} 200, ${x + 32} 222`);
  return (
    <Frame id={id}>
      <defs>
        <linearGradient id={`${id}-cl`} gradientUnits="userSpaceOnUse" x1="150" y1="40" x2="346" y2="176">
          <stop offset="0" stopColor={B} />
          <stop offset="1" stopColor={C} />
        </linearGradient>
      </defs>
      <Glow id={id} cx={248} cy={116} r={100} color={C} o={0.25} />
      <g style={float(0, 7)}>
        <g filter={`url(#${id}-sh)`} fill={`url(#${id}-cl)`}>
          <circle cx="196" cy="124" r="40" />
          <circle cx="252" cy="100" r="58" />
          <circle cx="310" cy="128" r="36" />
          <rect x="156" y="124" width="190" height="52" rx="26" />
        </g>
        <ellipse cx="226" cy="76" rx="26" ry="12" fill="#fff" opacity="0.25" />
        <path d="M252 158 v-48 m-19 19 l19-19 19 19" stroke="#fff" strokeWidth="10" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      {links.map((d, i) => (
        <g key={i}>
          <path d={d} stroke={S} strokeWidth="2.5" fill="none" className="art-flow" />
          <Packet path={d} dur={1.8} delay={i * 0.6} color={[B, C, V][i]} />
        </g>
      ))}
      {racks.map((x, i) => (
        <g key={x}>
          <Panel id={id} x={x} y={222} w={64} h={92} r={12} />
          <rect x={x} y="222" width="64" height="10" rx="5" fill={`url(#${id}-g)`} opacity="0.9" />
          {[0, 1, 2].map((r) => (
            <g key={r}>
              <rect x={x + 9} y={240 + r * 23} width="46" height="16" rx="5" fill="#f3f6fb" stroke={L} />
              <Line x={x + 15} y={246 + r * 23} w={20} h={4} />
              <circle cx={x + 46} cy={248 + r * 23} r="3.2" fill={r === 1 ? C : OK} style={pulse(i * 0.3 + r * 0.25)} />
            </g>
          ))}
        </g>
      ))}
      {/* security shield */}
      <g style={float(1, 6)}>
        <path d="M398 52 l36 13 v26 c0 24 -17 38 -36 45 c-19-7 -36-21 -36-45 v-26z" fill={`url(#${id}-p)`} stroke={L} filter={`url(#${id}-sh)`} />
        <path d="M384 92 l10 10 20-22" stroke={OK} strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      {/* region globe */}
      <g style={float(0.5, 7.5)}>
        <circle cx="74" cy="104" r="30" fill={`url(#${id}-p)`} stroke={L} filter={`url(#${id}-sh)`} />
        <circle cx="74" cy="104" r="17" fill="none" stroke={B} strokeWidth="2.5" />
        <ellipse cx="74" cy="104" rx="7" ry="17" fill="none" stroke={B} strokeWidth="2" />
        <path d="M57 104 h34 M60 95 h28 M60 113 h28" stroke={B} strokeWidth="1.6" />
      </g>
    </Frame>
  );
}

/* ---------- 3. Mobile apps ---------- */
function Mobile({ id }: P) {
  return (
    <Frame id={id}>
      <Glow id={id} cx={250} cy={170} r={100} color={V} o={0.18} />
      {/* back phone, tilted */}
      <g transform="rotate(-12 170 190)">
        <g filter={`url(#${id}-sh)`}>
          <rect x="112" y="72" width="118" height="236" rx="24" fill={`url(#${id}-n)`} />
          <rect x="120" y="80" width="102" height="220" rx="17" fill="#fff" />
        </g>
        <circle cx="171" cy="122" r="20" fill={`url(#${id}-v)`} />
        <circle cx="171" cy="117" r="7" fill="#fff" />
        <path d="M159 132 a12 10 0 0 1 24 0" fill="#fff" />
        <Line x={141} y={152} w={60} h={7} c={N} />
        <Line x={150} y={164} w={42} h={5} />
        {[0, 1, 2].map((r) => (
          <rect key={r} x="132" y={184 + r * 30} width="78" height="22" rx="7" fill="#f3f6fb" />
        ))}
      </g>
      {/* front phone */}
      <g filter={`url(#${id}-sh)`}>
        <rect x="204" y="36" width="142" height="288" rx="28" fill={`url(#${id}-n)`} />
        <rect x="213" y="45" width="124" height="270" rx="20" fill="#fff" />
      </g>
      <rect x="251" y="51" width="48" height="10" rx="5" fill={N} />
      <Line x={225} y={74} w={50} h={6} />
      <Line x={225} y={86} w={78} h={10} c={N} />
      <rect x="225" y="106" width="100" height="74" rx="13" fill={`url(#${id}-g)`} />
      <Line x={235} y={116} w={34} h={5} c="#ffffff" />
      {[18, 30, 22, 38, 28, 44].map((h, i) => (
        <rect key={i} x={236 + i * 14} y={170 - h} width="9" height={h} rx="3" fill="#fff" opacity="0.85" style={{ animation: `eq ${2 + (i % 3) * 0.4}s ${i * 0.15}s ease-in-out infinite`, transformBox: "fill-box", transformOrigin: "bottom" }} />
      ))}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="225" y={192 + i * 38} width="100" height="30" rx="9" fill="#f3f6fb" />
          <circle cx="240" cy={207 + i * 38} r="8" fill={[B, C, V][i]} opacity="0.9" />
          <Line x={254} y={201 + i * 38} w={46} h={5} c={N} />
          <Line x={254} y={210 + i * 38} w={30} h={4} />
        </g>
      ))}
      {/* notification */}
      <g style={float(0.2, 6)}>
        <Panel id={id} x={318} y={62} w={140} h={56} r={14} />
        <circle cx="342" cy="90" r="13" fill={`url(#${id}-g)`} />
        <path d="M336 92 a6 6 0 0 1 12 0 v4 h-12z M340 98 h4" stroke="#fff" strokeWidth="2.4" fill="none" strokeLinecap="round" />
        <circle cx="352" cy="80" r="4" fill="#ff5f57" />
        <Line x={362} y={82} w={72} h={6} c={N} />
        <Line x={362} y={94} w={50} h={5} />
      </g>
      {/* rating */}
      <g style={float(1.3, 7)}>
        <Panel id={id} x={36} y={250} w={140} h={54} r={14} />
        {[0, 1, 2, 3, 4].map((i) => (
          <path key={i} transform={`translate(${50 + i * 22} 262)`} d="M8 0 l2.4 5 5.6.8 -4 4 1 5.5 -5-2.7 -5 2.7 1-5.5 -4-4 5.6-.8z" fill={AMBER} />
        ))}
        <Line x={50} y={286} w={74} h={5} />
      </g>
      {/* like bubble */}
      <g style={pulse(0.4)}>
        <circle cx="370" cy="214" r="21" fill={`url(#${id}-v)`} filter={`url(#${id}-sh)`} />
        <path d="M370 224 c-10-7 -13-11 -13-15 a6 6 0 0 1 13-2 a6 6 0 0 1 13 2 c0 4 -3 8 -13 15z" fill="#fff" />
      </g>
    </Frame>
  );
}

/* ---------- 4. CRM ---------- */
function Crm({ id }: P) {
  const people = [
    { x: 64, y: 84, c: B },
    { x: 418, y: 88, c: C },
    { x: 60, y: 262, c: V },
  ];
  const links = [`M88 92 L140 120`, `M394 96 L340 120`, `M84 254 L140 220`];
  return (
    <Frame id={id}>
      <Glow id={id} cx={240} cy={170} r={110} />
      {links.map((d, i) => (
        <g key={i}>
          <path d={d} stroke={S} strokeWidth="2.5" fill="none" className="art-flow" />
          <Packet path={d} dur={2} delay={i * 0.7} color={people[i].c} />
        </g>
      ))}
      <Panel id={id} x={124} y={66} w={232} h={200} r={18} />
      <Line x={142} y={84} w={70} h={8} c={N} />
      <rect x="316" y="80" width="24" height="16" rx="8" fill="#eef4ff" />
      {/* profile column */}
      <rect x="142" y="104" width="78" height="146" rx="12" fill="#f3f6fb" />
      <circle cx="181" cy="132" r="20" fill={`url(#${id}-g)`} />
      <circle cx="181" cy="126" r="7" fill="#fff" />
      <path d="M169 142 a12 10 0 0 1 24 0" fill="#fff" />
      <Line x={156} y={162} w={50} h={6} c={N} />
      <Line x={162} y={174} w={38} h={4} />
      <rect x="154" y="190" width="54" height="14" rx="7" fill="#dbe7ff" />
      <rect x="154" y="210" width="54" height="14" rx="7" fill={B} />
      <rect x="154" y="230" width="54" height="10" rx="5" fill={L} />
      {/* pipeline columns */}
      {[0, 1, 2].map((col) => (
        <g key={col}>
          <rect x={230 + col * 40} y="104" width="34" height="146" rx="9" fill="#f3f6fb" />
          <circle cx={238 + col * 40} cy="114" r="3" fill={[S, AMBER, OK][col]} />
          {Array.from({ length: [3, 2, 3][col] }, (_, k) => (
            <rect key={k} x={234 + col * 40} y={124 + k * 30} width="26" height="24" rx="5" fill="#fff" stroke={L} style={col === 2 && k === 0 ? { animation: "won-flash 6s 1s ease-in-out infinite" } : undefined} />
          ))}
        </g>
      ))}
      {people.map((p, i) => (
        <g key={i} style={float(i * 0.5, 6 + i)}>
          <circle cx={p.x} cy={p.y} r="26" fill={`url(#${id}-p)`} stroke={L} filter={`url(#${id}-sh)`} />
          <circle cx={p.x} cy={p.y - 5} r="7.5" fill={p.c} />
          <path d={`M${p.x - 12} ${p.y + 13} a12 10 0 0 1 24 0`} fill={p.c} />
        </g>
      ))}
      {/* deal won */}
      <g style={float(0.9, 7)}>
        <rect x="304" y="244" width="150" height="56" rx="14" fill={`url(#${id}-n)`} filter={`url(#${id}-sh)`} />
        <circle cx="330" cy="272" r="13" fill={OK} />
        <path d="M324 272 l5 5 9-10" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <Line x={352} y={262} w={74} h={7} c="#ffffff" />
        <Line x={352} y={276} w={50} h={5} c={C} />
      </g>
      {/* email */}
      <g style={float(1.5, 6.5)}>
        <Panel id={id} x={386} y={160} w={70} h={50} r={12} />
        <rect x="400" y="172" width="42" height="28" rx="4" fill="#eef4ff" stroke={B} strokeWidth="2" />
        <path d="M402 175 l19 14 19-14" fill="none" stroke={B} strokeWidth="2" strokeLinejoin="round" />
      </g>
    </Frame>
  );
}

/* ---------- 5. E-commerce ---------- */
function Ecommerce({ id }: P) {
  return (
    <Frame id={id}>
      <Glow id={id} cx={210} cy={170} r={110} color={V} o={0.18} />
      <Panel id={id} x={64} y={74} w={236} h={234} r={18} />
      {/* awning */}
      <g filter={`url(#${id}-sh)`}>
        {Array.from({ length: 6 }, (_, i) => (
          <path key={i} d={`M${64 + i * 39.33} 64 h39.33 v26 a19.67 19.67 0 0 1 -39.33 0z`} fill={i % 2 ? "#fff" : B} stroke={i % 2 ? L : "none"} />
        ))}
      </g>
      {/* products */}
      {[0, 1].map((i) => (
        <g key={i}>
          <rect x={82 + i * 104} y="126" width="94" height="126" rx="12" fill="#fff" stroke={L} />
          <rect x={90 + i * 104} y="134" width="78" height="62" rx="9" fill={`url(#${id}-${i ? "g" : "v"})`} />
          {i === 0 ? (
            <path d="M113 178 l8-18 h16 l8 18z M121 160 a8 8 0 0 1 16 0" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinejoin="round" opacity="0.85" />
          ) : (
            <g opacity="0.85">
              <circle cx="233" cy="164" r="14" fill="none" stroke="#fff" strokeWidth="3.5" />
              <path d="M233 156 v8 l6 4" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" />
            </g>
          )}
          <Line x={90 + i * 104} y={204} w={60} h={6} c={N} />
          <Line x={90 + i * 104} y={216} w={40} h={5} />
          <Line x={90 + i * 104} y={232} w={28} h={8} c={B} />
          <circle cx={158 + i * 104} cy="236" r="9" fill={B} />
          <path d={`M${154 + i * 104} 236 h8 M${158 + i * 104} 232 v8`} stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
        </g>
      ))}
      <rect x="82" y="264" width="198" height="30" rx="15" fill={N} />
      <Line x={98} y={276} w={70} h={6} c="#ffffff" />
      <rect x="216" y="270" width="56" height="18" rx="9" fill={OK} />
      {/* shopping bag */}
      <g style={float(0.3, 6)}>
        <path d="M312 140 h120 l-10 130 h-100z" fill={`url(#${id}-g)`} filter={`url(#${id}-sh)`} />
        <path d="M342 140 v-14 a30 30 0 0 1 60 0 v14" fill="none" stroke={N} strokeWidth="7" strokeLinecap="round" />
        <path d="M350 200 l14 14 30-32" stroke="#fff" strokeWidth="9" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      {/* payment card */}
      <g style={float(1.2, 7)}>
        <rect x="300" y="262" width="156" height="76" rx="14" fill={`url(#${id}-n)`} filter={`url(#${id}-sh)`} />
        <rect x="316" y="278" width="26" height="18" rx="4" fill={AMBER} />
        <path d="M356 280 a8 8 0 0 1 0 14 M362 276 a14 14 0 0 1 0 22" stroke="#fff" strokeWidth="2" fill="none" opacity="0.6" />
        {[0, 1, 2, 3].map((k) => (
          <Line key={k} x={316 + k * 30} y={310} w={22} h={5} c="#ffffff" />
        ))}
        <circle cx="420" cy="287" r="9" fill="#ff5f57" opacity="0.9" />
        <circle cx="432" cy="287" r="9" fill={AMBER} opacity="0.9" />
      </g>
      <g style={pulse(0.5)}>
        <circle cx="424" cy="134" r="17" fill={OK} />
        <path d="M418 134 h12 M424 128 v12" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" />
      </g>
    </Frame>
  );
}

/* ---------- 6. SEO ---------- */
function Seo({ id }: P) {
  return (
    <Frame id={id}>
      <Glow id={id} cx={210} cy={170} r={110} />
      <Panel id={id} x={62} y={64} w={262} h={240} r={18} />
      <rect x="80" y="82" width="226" height="30" rx="15" fill="#f3f6fb" stroke={L} />
      <circle cx="98" cy="97" r="6" fill="none" stroke={S} strokeWidth="2.5" />
      <path d="M102 101 l4 4" stroke={S} strokeWidth="2.5" strokeLinecap="round" />
      <Line x={112} y={94} w={96} h={6} />
      <rect x="276" y="88" width="22" height="18" rx="9" fill={B} />
      <g style={{ animation: "rank-up 7s 1s cubic-bezier(.16,1,.3,1) infinite" }}>
        <rect x="80" y="126" width="226" height="58" rx="11" fill="#eef4ff" stroke="#c7dbff" />
        <circle cx="96" cy="142" r="6" fill={B} />
        <Line x={108} y={139} w={96} h={7} c={B} />
        <Line x={96} y={156} w={176} h={5} c="#9cc2ff" />
        <Line x={96} y={167} w={124} h={5} c="#c7dbff" />
      </g>
      {[0, 1].map((i) => (
        <g key={i}>
          <circle cx="96" cy={203 + i * 48} r="5" fill={S} />
          <Line x={108} y={200 + i * 48} w={80} h={6} />
          <Line x={96} y={214 + i * 48} w={176} h={5} c={L} />
          <Line x={96} y={225 + i * 48} w={130} h={5} c={L} />
        </g>
      ))}
      {/* magnifier */}
      <g style={float(0.5, 7)}>
        <g filter={`url(#${id}-sh)`}>
          <path d="M346 196 l50 50" stroke={N} strokeWidth="22" strokeLinecap="round" />
          <circle cx="306" cy="154" r="60" fill="#fff" fillOpacity="0.35" stroke={`url(#${id}-n)`} strokeWidth="14" />
        </g>
        <path d="M268 132 a44 44 0 0 1 30 -26" stroke="#fff" strokeWidth="7" fill="none" strokeLinecap="round" opacity="0.9" />
        <path d="M378 228 l20 20" stroke={B} strokeWidth="10" strokeLinecap="round" />
      </g>
      {/* growth chart */}
      <g style={float(1.3, 6)}>
        <Panel id={id} x={322} y={250} w={136} h={78} r={14} />
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x={338 + i * 24} y={314 - (i + 1) * 12} width="15" height={(i + 1) * 12} rx="3.5" fill={i === 3 ? B : "#c7dbff"} />
        ))}
        <path d="M338 292 L 412 264" stroke={OK} strokeWidth="3" strokeLinecap="round" />
        <path d="M401 262 l12 1 -4 11" stroke={OK} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      {/* #1 medal */}
      <g style={pulse(0)}>
        <path d="M92 56 l-10 30 10-6 6 10 6-30z M116 56 l10 30 -10-6 -6 10 -6-30z" fill={V} />
        <circle cx="104" cy="50" r="22" fill={`url(#${id}-g)`} filter={`url(#${id}-sh)`} />
        <circle cx="104" cy="50" r="16" fill="none" stroke="#fff" strokeOpacity="0.5" strokeWidth="2" />
        <text x="104" y="56" textAnchor="middle" fontSize="16" fontWeight="700" fill="#fff" fontFamily="var(--font-geist), sans-serif">
          #1
        </text>
      </g>
    </Frame>
  );
}

/* ---------- 7. Data & AI ---------- */
function DataAi({ id }: P) {
  const layers = [
    [96, 132, 168, 204, 240],
    [120, 168, 216],
  ];
  const xs = [52, 104];
  const traces = [`M280 150 H 300 V 120 H 318`, `M280 176 H 318`, `M280 202 H 300 V 250 H 318`];
  return (
    <Frame id={id}>
      <Glow id={id} cx={226} cy={176} r={90} color={V} o={0.25} />
      {/* neural network */}
      <g stroke="#b9cdf0" strokeWidth="1.5">
        {layers[0].flatMap((y1) => layers[1].map((y2) => <line key={`${y1}-${y2}`} x1={xs[0]} y1={y1} x2={xs[1]} y2={y2} />))}
        {layers[1].map((y) => (
          <line key={y} x1={xs[1]} y1={y} x2="172" y2="176" />
        ))}
      </g>
      {layers.map((ys, li) =>
        ys.map((y, k) => <circle key={`${li}-${y}`} cx={xs[li]} cy={y} r={li ? 9 : 7} fill={li ? `url(#${id}-g)` : "#fff"} stroke={li ? "none" : B} strokeWidth="2.5" style={pulse(k * 0.3 + li * 0.5)} />),
      )}
      {layers[1].map((y, i) => (
        <Packet key={y} path={`M${xs[1]} ${y} L172 176`} dur={1.6} delay={i * 0.5} color={V} r={3.5} />
      ))}
      {/* traces to dashboard */}
      {traces.map((d, i) => (
        <g key={i}>
          <path d={d} stroke="#9cc2ff" strokeWidth="2.5" fill="none" strokeLinejoin="round" className="art-flow" />
          <Packet path={d} dur={1.4} delay={i * 0.45} color={C} r={3.5} />
        </g>
      ))}
      {/* AI chip */}
      <g filter={`url(#${id}-sh)`}>
        {[0, 1, 2, 3].map((k) => (
          <g key={k} fill="#9cc2ff">
            <rect x={190 + k * 20} y="112" width="8" height="12" rx="2" />
            <rect x={190 + k * 20} y="228" width="8" height="12" rx="2" />
          </g>
        ))}
        <rect x="172" y="122" width="108" height="108" rx="22" fill={`url(#${id}-n)`} />
        <rect x="186" y="136" width="80" height="80" rx="14" fill={`url(#${id}-v)`} />
      </g>
      <text x="226" y="186" textAnchor="middle" fontSize="30" fontWeight="700" fill="#fff" fontFamily="var(--font-geist), sans-serif">
        AI
      </text>
      {/* dashboard */}
      <g style={float(0.6, 7)}>
        <Panel id={id} x={318} y={78} w={140} h={148} r={16} />
        <Line x={332} y={94} w={56} h={7} c={N} />
        <path d="M332 178 l20-16 18 9 22-28 20 13 20-24" fill="none" stroke={B} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="200" style={{ animation: "draw-line 4s ease-in-out infinite" }} />
        <path d="M332 178 l20-16 18 9 22-28 20 13 20-24 V 188 H 332z" fill={B} opacity="0.08" />
        {[0, 1, 2, 3, 4].map((k) => (
          <rect key={k} x={334 + k * 24} y={212 - [10, 16, 12, 20, 14][k]} width="14" height={[10, 16, 12, 20, 14][k]} rx="3" fill={k === 3 ? C : "#c7dbff"} />
        ))}
      </g>
      {/* donut */}
      <g style={float(1.2, 6)}>
        <Panel id={id} x={318} y={244} w={140} h={74} r={14} />
        <circle cx="352" cy="281" r="20" fill="none" stroke={L} strokeWidth="9" />
        <circle cx="352" cy="281" r="20" fill="none" stroke={B} strokeWidth="9" strokeDasharray="70 126" transform="rotate(-90 352 281)" />
        <circle cx="352" cy="281" r="20" fill="none" stroke={V} strokeWidth="9" strokeDasharray="36 126" strokeDashoffset="-70" transform="rotate(-90 352 281)" />
        <Line x={384} y={268} w={56} h={6} c={N} />
        <Line x={384} y={280} w={44} h={5} />
        <Line x={384} y={291} w={32} h={5} />
      </g>
      <g style={pulse(0.4)} fill={AMBER}>
        <path d="M150 276 l5 13 13 5 -13 5 -5 13 -5-13 -13-5 13-5z" />
        <path d="M118 300 l3 8 8 3 -8 3 -3 8 -3-8 -8-3 8-3z" opacity="0.7" />
      </g>
    </Frame>
  );
}

/* ---------- 8. ERP ---------- */
function ErpIcon({ kind }: { kind: string }) {
  const s = { stroke: "#fff", strokeWidth: 2.6, fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (kind) {
    case "sales":
      return (
        <g {...s}>
          <path d="M-12 -9 h4 l4 14 h14 l3 -10 h-19" />
          <circle cx="-1" cy="10" r="2" fill="#fff" />
          <circle cx="8" cy="10" r="2" fill="#fff" />
        </g>
      );
    case "stock":
      return (
        <g {...s}>
          <path d="M0 -12 l11 6 v12 l-11 6 -11 -6 v-12z M-11 -6 l11 6 11 -6 M0 0 v12" />
        </g>
      );
    case "finance":
      return (
        <g {...s}>
          <path d="M-11 11 h22 M-7 11 v-8 M0 11 v-14 M7 11 v-20" />
        </g>
      );
    case "hr":
      return (
        <g {...s}>
          <circle cx="-5" cy="-5" r="4.5" />
          <path d="M-13 10 a8 7 0 0 1 16 0" />
          <circle cx="7" cy="-3" r="3.5" />
          <path d="M3 10 a6 6 0 0 1 11 0" />
        </g>
      );
    default:
      return (
        <g {...s}>
          <path d="M-12 11 v-12 l7 5 v-5 l7 5 v-12 h8 v19z" />
        </g>
      );
  }
}

function Erp({ id }: P) {
  const hub = { x: 240, y: 178 };
  const mods = [
    { k: "sales", x: 240, y: 62, c: `url(#${id}-g)` },
    { k: "stock", x: 400, y: 140, c: `url(#${id}-v)` },
    { k: "finance", x: 340, y: 272, c: `url(#${id}-g)` },
    { k: "hr", x: 140, y: 272, c: `url(#${id}-v)` },
    { k: "production", x: 80, y: 140, c: `url(#${id}-g)` },
  ];
  return (
    <Frame id={id}>
      <Glow id={id} cx={hub.x} cy={hub.y} r={90} />
      <ellipse cx={hub.x} cy={hub.y + 2} rx="168" ry="112" fill="none" stroke={S} strokeWidth="2" strokeDasharray="3 9" />
      {mods.map((m, i) => {
        const d = `M${hub.x} ${hub.y} L${m.x} ${m.y}`;
        return (
          <g key={m.k}>
            <path d={d} stroke={S} strokeWidth="2.5" className="art-flow" />
            <Packet path={d} dur={2.2} delay={i * 0.45} color={i % 2 ? V : B} />
          </g>
        );
      })}
      {/* hub */}
      <g filter={`url(#${id}-sh)`}>
        <rect x={hub.x - 52} y={hub.y - 52} width="104" height="104" rx="26" fill={`url(#${id}-n)`} />
        <rect x={hub.x - 40} y={hub.y - 40} width="80" height="80" rx="20" fill={`url(#${id}-g)`} />
      </g>
      <g style={spin(18)}>
        <path
          transform={`translate(${hub.x} ${hub.y})`}
          d="M-4 -26 h8 l2 8 6 3 7-4 6 6 -4 7 3 6 8 2 v8 l-8 2 -3 6 4 7 -6 6 -7-4 -6 3 -2 8 h-8 l-2-8 -6-3 -7 4 -6-6 4-7 -3-6 -8-2 v-8 l8-2 3-6 -4-7 6-6 7 4 6-3z"
          fill="#fff"
        />
        <circle cx={hub.x} cy={hub.y} r="8" fill={B} />
      </g>
      {/* modules */}
      {mods.map((m, i) => (
        <g key={m.k} style={float(i * 0.4, 6 + (i % 3))}>
          <rect x={m.x - 34} y={m.y - 34} width="68" height="68" rx="18" fill={`url(#${id}-p)`} stroke={L} filter={`url(#${id}-sh)`} />
          <rect x={m.x - 21} y={m.y - 21} width="42" height="42" rx="12" fill={m.c} />
          <g transform={`translate(${m.x} ${m.y})`}>
            <ErpIcon kind={m.k} />
          </g>
        </g>
      ))}
    </Frame>
  );
}

const ART: Record<string, (p: P) => React.ReactElement> = {
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
