import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { techGroups } from "@/lib/content";

export default function TechBand() {
  const items = techGroups.flatMap((g) => g.items);
  const row = [...items, ...items];
  return (
    <section aria-labelledby="tech-title" className="overflow-hidden border-y border-rule bg-paper py-16 md:py-20">
      <div className="container-chart flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <h2 id="tech-title" className="display max-w-[18ch] text-[clamp(2rem,1.5rem+2vw,3.2rem)] text-ink">
          Instruments aboard: {items.length} technologies we build with
        </h2>
        <Link href="/technologies/" className="link-arrow text-brand">
          See the full stack <ArrowRight aria-hidden className="h-4 w-4" />
        </Link>
      </div>
      <div className="group relative mt-10 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <ul className="flex w-max gap-3 [animation:marquee_60s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:flex-wrap motion-reduce:[animation:none]">
          {row.map((t, i) => (
            <li
              key={`${t.name}-${i}`}
              aria-hidden={i >= items.length ? true : undefined}
              className="flex h-16 shrink-0 items-center gap-3 rounded-[2px] border border-rule bg-chart px-4"
            >
              <Image src={t.image} alt="" width={30} height={30} className="h-7 w-7 object-contain" />
              <span className="font-semibold text-ink">{t.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
