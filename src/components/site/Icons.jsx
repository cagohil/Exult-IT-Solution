const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };

export const ArrowUpRight = (p) => (
  <svg viewBox="0 0 16 16" {...base} {...p}><path d="M4.5 11.5l7-7M5.5 4.5h6v6" /></svg>
);
export const ArrowRight = (p) => (
  <svg viewBox="0 0 16 16" {...base} {...p}><path d="M2.5 8h11M9 3.5L13.5 8 9 12.5" /></svg>
);
export const ArrowLeft = (p) => (
  <svg viewBox="0 0 16 16" {...base} {...p}><path d="M13.5 8h-11M7 3.5L2.5 8 7 12.5" /></svg>
);
export const Chevron = (p) => (
  <svg viewBox="0 0 12 12" {...base} {...p}><path d="M3 4.5L6 7.5 9 4.5" /></svg>
);
export const Close = (p) => (
  <svg viewBox="0 0 16 16" {...base} {...p}><path d="M3.5 3.5l9 9M12.5 3.5l-9 9" /></svg>
);
export const Star = (p) => (
  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M10 1.6l2.5 5.3 5.8.7-4.3 4 1.1 5.7L10 14.5l-5.1 2.8L6 11.6l-4.3-4 5.8-.7z" />
  </svg>
);
export const Phone = (p) => (
  <svg viewBox="0 0 20 20" {...base} {...p}><path d="M4 2.8h3l1.5 4-2 1.3a10 10 0 005.4 5.4l1.3-2 4 1.5v3c0 .9-.7 1.6-1.6 1.6A15.6 15.6 0 012.4 4.4c0-.9.7-1.6 1.6-1.6z" /></svg>
);
export const Mail = (p) => (
  <svg viewBox="0 0 20 20" {...base} {...p}><rect x="2.5" y="4.5" width="15" height="11" rx="2" /><path d="M3 5.5l7 5.5 7-5.5" /></svg>
);
export const Pin = (p) => (
  <svg viewBox="0 0 20 20" {...base} {...p}><path d="M10 18s6-5.2 6-10a6 6 0 10-12 0c0 4.8 6 10 6 10z" /><circle cx="10" cy="8" r="2.2" /></svg>
);

const social = {
  twitter: <path d="M14.3 3h2.5l-5.5 6.3L17.8 17h-5l-3.9-5.1L4.4 17H1.9l5.9-6.7L1.6 3h5.1l3.5 4.7L14.3 3zm-.9 12.6h1.4L6 4.3H4.5l8.9 11.3z" fill="currentColor" stroke="none" />,
  facebook: <path d="M11.2 18v-7h2.4l.4-2.8h-2.8V6.4c0-.8.2-1.4 1.4-1.4H14V2.5a19 19 0 00-2.2-.1c-2.2 0-3.6 1.3-3.6 3.7v2.1H5.8V11h2.4v7h3z" fill="currentColor" stroke="none" />,
  linkedin: <path d="M5.4 7.4H2.6V17h2.8V7.4zM4 3a1.6 1.6 0 100 3.3A1.6 1.6 0 004 3zm13.4 8.3c0-2.6-.6-4.2-3.5-4.2-1.4 0-2.4.6-2.8 1.4V7.4H8.4V17h2.8v-4.8c0-1.3.2-2.5 1.8-2.5s1.6 1.5 1.6 2.6V17h2.8v-5.7z" fill="currentColor" stroke="none" />,
  instagram: (
    <g>
      <rect x="2.8" y="2.8" width="14.4" height="14.4" rx="4.2" />
      <circle cx="10" cy="10" r="3.4" />
      <circle cx="14.4" cy="5.6" r=".6" fill="currentColor" />
    </g>
  ),
};
export const Social = ({ name, ...p }) => (
  <svg viewBox="0 0 20 20" {...base} {...p}>{social[name]}</svg>
);
