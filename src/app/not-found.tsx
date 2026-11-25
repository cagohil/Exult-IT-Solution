import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative -mt-[4.5rem] flex min-h-[80svh] items-center overflow-hidden pt-[4.5rem]">
      <div className="mesh" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="container-x relative">
        <p className="font-mono text-sm font-medium text-brand">Error 404</p>
        <h1 className="h-display mt-4 max-w-[14ch] text-[clamp(2.8rem,1.8rem+4vw,5rem)] text-ink">This page doesn&rsquo;t exist.</h1>
        <p className="mt-5 max-w-[44ch] text-lg text-ink-2">It may have moved, or the link may be mistyped. Let&rsquo;s get you back on track.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-primary !min-h-12 !px-6">
            Back to home
          </Link>
          <Link href="/contact-us/" className="btn btn-outline !min-h-12 !px-6">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
