import Link from 'next/link';
import { ArrowUpRight } from './Icons';

/** Pill button with the rotating arrow chip. Renders a Link, <a> or <button>. */
export default function Button({ href, variant, size, children, external, className = '', ...rest }) {
  const cls = ['btn', variant && `btn--${variant}`, size && `btn--${size}`, className].filter(Boolean).join(' ');
  const inner = (
    <>
      <span>{children}</span>
      <span className="btn__icon" aria-hidden="true"><ArrowUpRight /></span>
    </>
  );
  if (!href) return <button className={cls} {...rest}>{inner}</button>;
  if (external || /^(tel:|mailto:|https?:)/.test(href)) return <a className={cls} href={href} {...rest}>{inner}</a>;
  return <Link className={cls} href={href} {...rest}>{inner}</Link>;
}
