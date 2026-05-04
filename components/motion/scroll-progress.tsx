"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";

export function ScrollProgress() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    mass: 0.2,
  });
  if (reduced) return null;
  return (
    <motion.div
      aria-hidden
      style={{ scaleX, transformOrigin: "0 50%" }}
      className="fixed left-0 right-0 top-0 z-[55] h-[2px] bg-accent"
    />
  );
}
