"use client";

import { MarqueeRow } from "@/components/motion/marquee-row";
import { cn } from "@/lib/utils";

type MarqueeStripProps = {
  text?: string;
  reverse?: boolean;
  variant?: "lime" | "outline";
  speed?: number;
};

const DEFAULT_TEXT =
  "Kian Malakooti ✺ Full Stack ✺ Design-aware ✺ San Francisco ✺ 2026";

export function MarqueeStrip({
  text = DEFAULT_TEXT,
  reverse = false,
  variant = "lime",
  speed = 36,
}: MarqueeStripProps) {
  const tokens = text.split(" ✺ ");

  return (
    <div
      className={cn(
        "border-y",
        variant === "lime"
          ? "border-accent/50 bg-accent text-accent-foreground"
          : "border-border bg-background text-foreground"
      )}
    >
      <MarqueeRow speed={speed} reverse={reverse} pauseOnHover={false}>
        <div className="flex items-center gap-8 py-3 pr-8 md:py-4">
          {tokens.map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="flex items-center gap-8 whitespace-nowrap font-display text-[clamp(2rem,7vw,5.5rem)] uppercase leading-none tracking-tight"
            >
              {t}
              <span aria-hidden className="text-2xl opacity-70">
                ✺
              </span>
            </span>
          ))}
        </div>
      </MarqueeRow>
    </div>
  );
}
