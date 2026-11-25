import Link from "next/link";
import Image from "next/image";
import { industries, industryTitle } from "@/lib/content";

// Varied spans so the eleven industries read as a chart index, not a row of equal cards.
const SPANS = [
  "lg:col-span-2 lg:row-span-2",
  "",
  "",
  "lg:row-span-2",
  "",
  "lg:col-span-2",
  "",
  "",
  "lg:col-span-2",
  "",
  "",
];

export default function IndustryMosaic({ headingLevel = "h3" }: { headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <ul className="grid auto-rows-[11rem] grid-cols-1 gap-2 sm:grid-cols-2 lg:auto-rows-[12.5rem] lg:grid-cols-4">
      {industries.map((ind, i) => (
        <li key={ind.slug} className={SPANS[i] ?? ""}>
          <Link href={`/industry/${ind.slug}/`} className="group relative flex h-full overflow-hidden rounded-[2px] bg-lake">
            <Image
              src={ind.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover opacity-55 mix-blend-luminosity transition-[opacity,transform] duration-700 ease-[var(--ease-out-expo)] group-hover:scale-105 group-hover:opacity-90 group-hover:mix-blend-normal"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/30 to-transparent" aria-hidden="true" />
            <span className="relative mt-auto flex w-full items-end justify-between gap-4 p-5">
              <H className="font-display text-[1.7rem] font-extrabold leading-none text-white">{industryTitle(ind.title)}</H>
              <span className="coord shrink-0 text-shallow/80">{ind.points.length} systems</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
