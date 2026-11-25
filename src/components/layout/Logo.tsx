import Image from "next/image";

/** The Exult mark and wordmark, cropped from the original brand artwork. `tone` whitens the wordmark on dark water. */
export default function Logo({ tone = "dark", className = "" }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image src="/brand/exult-mark.png" alt="" width={84} height={84} priority className="h-9 w-9" />
      <Image
        src="/brand/exult-wordmark.png"
        alt="Exult IT Solution"
        width={377}
        height={136}
        priority
        className={`h-[1.9rem] w-auto transition-[filter] duration-300 ${tone === "light" ? "brightness-0 invert" : ""}`}
      />
    </span>
  );
}
