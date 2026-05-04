"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { dur, ease, stagger as staggerTokens } from "@/lib/motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { cn } from "@/lib/utils";

type RevealTextProps = {
  text: string;
  splitBy?: "word" | "char";
  stagger?: number;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
};

/**
 * Splits text into spans wrapped in an outer span with overflow:hidden.
 * Each piece animates from y:110% + clipPath inset(0 0 100% 0)
 * to y:0 + clipPath inset(0 0 0% 0).
 */
export function RevealText({
  text,
  splitBy = "word",
  stagger = staggerTokens.base,
  delay = 0,
  duration = dur.slow,
  className,
  once = true,
}: RevealTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once, margin: "-10% 0px" });
  const reduced = useReducedMotion();

  const tokens =
    splitBy === "word" ? text.split(/(\s+)/) : Array.from(text);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduced ? 0 : stagger,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = reduced
    ? {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 0.2 },
        },
      }
    : {
        hidden: {
          y: "110%",
          clipPath: "inset(0 0 100% 0)",
        },
        visible: {
          y: "0%",
          clipPath: "inset(0 0 0% 0)",
          transition: { duration, ease: ease.out },
        },
      };

  return (
    <motion.span
      ref={ref}
      className={cn("inline-block", className)}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      aria-label={text}
    >
      {tokens.map((token, i) => {
        if (/^\s+$/.test(token)) {
          // Preserve whitespace
          return (
            <span
              key={`s-${i}`}
              aria-hidden
              style={{ whiteSpace: "pre" }}
            >
              {token}
            </span>
          );
        }
        return (
          <span
            key={`w-${i}`}
            aria-hidden
            className="inline-block overflow-hidden align-bottom"
            style={{ verticalAlign: "bottom" }}
          >
            <motion.span
              className="inline-block"
              variants={itemVariants}
            >
              {token}
            </motion.span>
          </span>
        );
      })}
    </motion.span>
  );
}
