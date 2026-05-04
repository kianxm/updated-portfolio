"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { useIsTouch } from "@/lib/use-is-touch";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { cn } from "@/lib/utils";

type MagneticProps = {
  children: ReactNode;
  strength?: number;
  radius?: number;
  className?: string;
};

export function Magnetic({
  children,
  strength = 0.3,
  radius = 120,
  className,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isTouch = useIsTouch();
  const reduced = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const sy = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  if (isTouch || reduced) {
    return <div className={className}>{children}</div>;
  }

  function clamp(v: number, max: number) {
    return Math.max(-max, Math.min(max, v));
  }

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(clamp(dx * strength, radius));
    y.set(clamp(dy * strength, radius));
  }
  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.div>
  );
}
