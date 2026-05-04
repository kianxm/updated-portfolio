"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { DATA } from "@/data/resume";

export function Education() {
  const e = DATA.education[0];
  return (
    <section
      id="education"
      className="border-y border-border px-gutter py-10 md:py-14"
    >
      <FadeIn className="mx-auto w-full max-w-frame">
        <Link
          href={e.href}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="link"
          className="group flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground md:text-sm"
        >
          <span className="text-foreground/40">[04] — Education</span>
          <span className="hidden h-4 w-px bg-border md:inline-block" />
          <span className="flex items-center gap-3">
            <span className="grid size-7 place-items-center overflow-hidden rounded-sm bg-surface-2 ring-1 ring-border">
              <Image
                src={e.logoUrl}
                alt={e.school}
                width={28}
                height={28}
                className="object-cover"
              />
            </span>
            <span className="font-display text-xl normal-case tracking-tight text-foreground md:text-2xl">
              {e.school}
            </span>
          </span>
          <span className="hidden h-4 w-px bg-border md:inline-block" />
          <span>{e.degree}</span>
          <span className="ml-auto flex items-center gap-2 text-foreground">
            {e.start}—{e.end}
            <span
              aria-hidden
              className="inline-block transition-transform duration-300 ease-expo-out group-hover:translate-x-1"
            >
              ↗
            </span>
          </span>
        </Link>
      </FadeIn>
    </section>
  );
}
