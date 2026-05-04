"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { dur, ease } from "@/lib/motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { cn } from "@/lib/utils";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  blur?: number;
  once?: boolean;
  className?: string;
};

export function FadeIn({
  children,
  delay = 0,
  duration = dur.base,
  y = 24,
  blur = 8,
  once = true,
  className,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once,
    margin: "-10% 0px -10% 0px",
  });
  const reduced = useReducedMotion();

  const variants: Variants = reduced
    ? {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 0.2, delay },
        },
      }
    : {
        hidden: { opacity: 0, y, filter: `blur(${blur}px)` },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration, delay, ease: ease.out },
        },
      };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
