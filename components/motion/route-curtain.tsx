"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ease } from "@/lib/motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";

/**
 * Listens for clicks on any element with [data-curtain] (most often Link).
 * Plays a lime panel up over the viewport, navigates, then slides it off
 * the top after the new route paints.
 */
export function RouteCurtain() {
  const router = useRouter();
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const [phase, setPhase] = useState<"idle" | "covering" | "exiting">("idle");

  // After navigation completes (pathname change), play the exit phase.
  useEffect(() => {
    if (phase === "covering") {
      // Give the new route a beat to mount.
      const t = window.setTimeout(() => setPhase("exiting"), 50);
      return () => window.clearTimeout(t);
    }
    if (phase === "exiting") {
      const t = window.setTimeout(() => setPhase("idle"), 550);
      return () => window.clearTimeout(t);
    }
  }, [phase, pathname]);

  useEffect(() => {
    if (reduced) return;

    function onClick(e: MouseEvent) {
      // Only intercept primary clicks without modifier keys.
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      )
        return;
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const trigger = target.closest<HTMLAnchorElement>("a[data-curtain]");
      if (!trigger) return;
      const href = trigger.getAttribute("href");
      if (!href || href.startsWith("http") || href.startsWith("#")) return;
      // Same-page anchor or hash links: skip.
      try {
        const url = new URL(trigger.href, window.location.origin);
        if (url.origin !== window.location.origin) return;
        if (
          url.pathname === window.location.pathname &&
          url.hash &&
          url.hash !== ""
        )
          return;
      } catch {
        return;
      }

      e.preventDefault();
      setPhase("covering");
      // Push after the curtain reaches midpoint.
      window.setTimeout(() => {
        router.push(href);
      }, 360);
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [router, reduced]);

  if (reduced) return null;

  return (
    <AnimatePresence>
      {phase !== "idle" && (
        <motion.div
          key="curtain"
          aria-hidden
          initial={{ y: "100%" }}
          animate={
            phase === "covering"
              ? { y: 0, transition: { duration: 0.45, ease: ease.out } }
              : { y: "-100%", transition: { duration: 0.5, ease: ease.in } }
          }
          exit={{ y: "-100%", transition: { duration: 0.5, ease: ease.in } }}
          className="pointer-events-none fixed inset-0 z-[70] bg-accent"
        >
          <span className="pointer-events-none absolute bottom-8 right-8 font-mono text-eyebrow uppercase tracking-[0.16em] text-accent-foreground">
            Loading…
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
