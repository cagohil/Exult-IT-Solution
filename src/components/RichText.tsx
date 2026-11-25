import Link from "next/link";
import Image from "next/image";
import { Fragment, type ReactNode } from "react";
import type { Block } from "@/lib/content";

/** Renders the legacy inline markup: **bold** and [label](href). */
export function Inline({ text }: { text: string }) {
  const out: ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1]) out.push(<strong key={i++}>{m[1]}</strong>);
    else {
      const href = m[3];
      out.push(
        href.startsWith("/") ? (
          <Link key={i++} href={href.endsWith("/") ? href : `${href}/`}>
            {m[2]}
          </Link>
        ) : (
          <a key={i++} href={href} target="_blank" rel="noreferrer">
            {m[2]}
          </a>
        ),
      );
    }
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
}

const isTerm = (t: string) => /^\*\*[^*]+\*\*:?$/.test(t.trim());

export function RichText({ blocks }: { blocks: Block[] }) {
  const nodes: ReactNode[] = [];
  let list: string[] = [];
  const flush = (key: number) => {
    if (list.length) {
      nodes.push(
        <ul key={`ul-${key}`}>
          {list.map((t, i) => (
            <li key={i}>
              <Inline text={t} />
            </li>
          ))}
        </ul>,
      );
      list = [];
    }
  };
  blocks.forEach((b, i) => {
    if (b.type === "li") {
      list.push(b.text);
      return;
    }
    flush(i);
    if (b.type === "img") {
      nodes.push(
        <figure key={i} className="my-8 overflow-hidden rounded-2xl border border-line">
          <Image src={b.src} alt={b.alt ?? ""} width={1200} height={700} className="h-auto w-full" />
        </figure>,
      );
    } else if (b.type === "h2")
      nodes.push(
        <h2 key={i}>
          <Inline text={b.text} />
        </h2>,
      );
    else if (b.type === "h3")
      nodes.push(
        <h3 key={i}>
          <Inline text={b.text} />
        </h3>,
      );
    else if (isTerm(b.text))
      nodes.push(
        <span key={i} className="lead-term">
          {b.text.replace(/\*\*/g, "").replace(/[-:]\s*$/, "")}
        </span>,
      );
    else
      nodes.push(
        <p key={i}>
          <Inline text={b.text} />
        </p>,
      );
  });
  flush(blocks.length);
  return <Fragment>{nodes}</Fragment>;
}
