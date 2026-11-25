import Image from "next/image";

/** The official Exult IT Solution logo (public/assets/img/Logo.png), used unaltered. */
export default function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return <Image src="/assets/img/Logo.png" alt="Exult IT Solution" width={205} height={70} priority className={className} />;
}
