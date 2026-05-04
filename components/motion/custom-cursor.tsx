"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useIsTouch } from "@/lib/use-is-touch";
import { useReducedMotion } from "@/lib/use-reduced-motion";

type CursorState = "default" | "link" | "text" | "hide";

export function CustomCursor() {
  const isTouch = useIsTouch();
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [state, setState] = useState<CursorState>("default");

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const dotX = useSpring(x, { stiffness: 800, damping: 35, mass: 0.4 });
  const dotY = useSpring(y, { stiffness: 800, damping: 35, mass: 0.4 });
  const ringX = useSpring(x, { stiffness: 150, damping: 18, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 150, damping: 18, mass: 0.5 });

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted || isTouch || reduced) return;

    document.body.classList.add("has-custom-cursor");

    function onMove(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
    }
    function onOver(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const tag = target.closest<HTMLElement>("[data-cursor]");
      const value = (tag?.dataset.cursor || "default") as CursorState;
      // Also auto-detect anchor / button without explicit data-cursor
      if (!tag) {
        const interactive = target.closest("a, button, [role='button']");
        setState(interactive ? "link" : "default");
      } else {
        setState(value);
      }
    }
    function onLeaveWindow() {
      setState("hide");
    }
    function onEnterWindow() {
      setState("default");
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", onLeaveWindow);
    document.addEventListener("mouseenter", onEnterWindow);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeaveWindow);
      document.removeEventListener("mouseenter", onEnterWindow);
      document.body.classList.remove("has-custom-cursor");
    };
  }, [mounted, isTouch, reduced, x, y]);

  if (!mounted || isTouch || reduced) return null;

  const ringScale = state === "link" ? 1.8 : state === "hide" ? 0 : 1;
  const ringOpacity = state === "hide" ? 0 : 1;
  const dotOpacity = state === "link" || state === "hide" ? 0 : 1;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[60] size-2 rounded-full bg-accent will-change-transform"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: dotOpacity,
        }}
      />
      <motion.div
        aria-hidden
        data-state={state}
        className={
          "pointer-events-none fixed left-0 top-0 z-[60] size-10 rounded-full border will-change-transform " +
          "border-foreground/45 bg-transparent " +
          "transition-[background-color,border-color] duration-200 ease-out " +
          "data-[state=link]:border-accent data-[state=link]:bg-accent/20"
        }
        animate={{ scale: ringScale, opacity: ringOpacity }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
