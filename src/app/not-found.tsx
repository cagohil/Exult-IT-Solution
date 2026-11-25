import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden bg-night pt-24 text-foam">
      <div className="container-chart">
        <p className="coord text-shoal">Error 404 · position unknown</p>
        <h1 className="display mt-4 max-w-[14ch] text-[clamp(3rem,1.8rem+5vw,6.5rem)] text-white">Uncharted waters.</h1>
        <p className="mt-6 max-w-[44ch] text-lg text-mist">This page has drifted off the chart. It may have moved, or the link may be mistyped.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-primary">
            Back to home port
          </Link>
          <Link href="/contact-us/" className="btn btn-ghost-dark">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
