"use client";

import type { ReactNode } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { cn } from "@/lib/utils";

type MarqueeRowProps = {
  children: ReactNode;
  speed?: number;
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
};

export function MarqueeRow({
  children,
  speed = 30,
  reverse = false,
  pauseOnHover = true,
  className,
}: MarqueeRowProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <div className={cn("overflow-hidden", className)}>
        <div className="flex">{children}</div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "overflow-hidden",
        pauseOnHover &&
          "[&:hover_.marquee-track]:[animation-play-state:paused]",
        className
      )}
    >
      <div
        className="marquee-track flex w-max"
        style={{
          animation: `${reverse ? "marquee-r" : "marquee"} ${speed}s linear infinite`,
        }}
      >
        <div className="flex shrink-0">{children}</div>
        <div aria-hidden className="flex shrink-0">
          {children}
        </div>
      </div>
    </div>
  );
}
