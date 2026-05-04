"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { DATA } from "@/data/resume";

const HIGHLIGHTS = [
  "Santa Clara University",
  "production",
  "Metamate",
  "fast-paced",
];

function highlight(text: string, words: string[]): React.ReactNode[] {
  const pattern = new RegExp(`(${words.map((w) => w.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\\\$&")).join("|")})`, "gi");
  const parts = text.split(pattern);
  return parts.map((p, i) =>
    words.some((w) => w.toLowerCase() === p.toLowerCase()) ? (
      <span key={i} className="text-accent">
        {p}
      </span>
    ) : (
      <span key={i}>{p}</span>
    )
  );
}

export function About() {
  return (
    <section
      id="about"
      className="px-gutter py-section"
    >
      <div className="mx-auto grid w-full max-w-frame grid-cols-12 gap-6">
        <FadeIn className="col-span-12 md:col-span-3">
          <p className="font-mono text-eyebrow uppercase text-muted-foreground">
            [02] — About
          </p>
        </FadeIn>
        <FadeIn delay={0.1} className="col-span-12 md:col-span-9">
          <p className="text-balance font-display text-display-md uppercase leading-[0.95] tracking-tight">
            {highlight(DATA.summary, HIGHLIGHTS)}
          </p>
          <p className="mt-10 max-w-prose-wide font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
            {DATA.description} Always exploring the intersection of code,
            design, and human experience — one shipped feature at a time.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
