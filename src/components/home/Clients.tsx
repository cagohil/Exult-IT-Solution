import Image from "next/image";
import { clients, clientName } from "@/lib/content";

const COLS = ["A", "B", "C", "D", "E", "F"];

export default function Clients() {
  return (
    <section aria-labelledby="clients-title" className="bg-chart py-20 md:py-28">
      <div className="container-chart">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 id="clients-title" className="display max-w-[14ch] text-[clamp(2.4rem,1.6rem+3vw,4.25rem)] text-ink">
            Ports of call on both shores
          </h2>
          <p className="max-w-[44ch] text-ink-2">
            Manufacturers, suppliers, clinics, brokers and local firms across Michigan and Ontario run on systems we built and support.
          </p>
        </div>

        <ul className="neatline mt-12 grid grid-cols-2 text-rule sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((c, i) => (
            <li key={c.img} className="relative border-b border-r border-rule [&:nth-child(2n)]:border-r-0 sm:[&:nth-child(2n)]:border-r sm:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(3n)]:border-r lg:[&:nth-child(6n)]:border-r-0">
              <a
                href={c.link}
                target="_blank"
                rel="noreferrer"
                className="group flex h-32 items-center justify-center bg-paper/60 px-6 transition-colors duration-300 hover:bg-paper md:h-36"
              >
                <span className="coord absolute left-2 top-2 text-ink-3/70">
                  {COLS[i % 6]}
                  {Math.floor(i / 6) + 1}
                </span>
                <Image
                  src={c.img}
                  alt={clientName(c)}
                  width={180}
                  height={80}
                  unoptimized={c.img.endsWith(".gif")}
                  className="max-h-14 w-auto max-w-[78%] object-contain opacity-75 grayscale transition-[filter,opacity] duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
