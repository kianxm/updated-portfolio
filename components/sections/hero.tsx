"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { RevealText } from "@/components/motion/reveal-text";
import { DATA } from "@/data/resume";
import { ease } from "@/lib/motion";

const ROLES = [
  "Software Engineer @ Meta",
  "Full-Stack Builder",
  "Photographer",
  "Based in San Francisco",
];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => {
      setI((prev) => (prev + 1) % ROLES.length);
    }, 2600);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden px-gutter pb-20 pt-20 md:pb-28"
    >
      <div className="mx-auto grid w-full max-w-frame grid-cols-12 items-end gap-6">
        {/* Left: eyebrow + headline + role */}
        <div className="col-span-12 lg:col-span-9">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: ease.out }}
            className="flex items-center gap-3 font-mono text-eyebrow uppercase text-muted-foreground"
          >
            <span className="text-foreground/50">[01]</span>
            <span className="h-px w-10 bg-border" />
            <span className="flex items-center gap-2">
              <span className="relative flex size-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative size-2 rounded-full bg-accent" />
              </span>
              Available for work · May 2026
            </span>
          </motion.div>

          <h1 className="mt-8 font-display uppercase text-display-xl leading-[0.85] tracking-tight">
            <RevealText
              text="Kian"
              splitBy="char"
              stagger={0.05}
              delay={0.1}
              className="block"
            />
            <RevealText
              text="Malakooti"
              splitBy="char"
              stagger={0.05}
              delay={0.35}
              className="block"
            />
          </h1>

          <div className="mt-8 flex h-[2.6em] items-start font-sans text-2xl text-foreground/80 md:text-4xl">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={ROLES[i]}
                initial={{ y: "110%", clipPath: "inset(0 0 100% 0)" }}
                animate={{ y: "0%", clipPath: "inset(0 0 0% 0)" }}
                exit={{
                  y: "-110%",
                  clipPath: "inset(100% 0 0 0)",
                  transition: { duration: 0.5, ease: ease.out },
                }}
                transition={{ duration: 0.7, ease: ease.out }}
                className="inline-block"
              >
                {ROLES[i]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {/* Right: portrait + lime offset */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: ease.out }}
          className="col-span-6 col-start-7 hidden lg:col-span-3 lg:col-start-10 lg:block"
        >
          <div className="relative aspect-[4/5] w-full max-w-[260px] ml-auto">
            <div
              aria-hidden
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-md bg-accent"
            />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md border border-border bg-surface">
              <Image
                src={DATA.avatarUrl}
                alt={DATA.name}
                fill
                priority
                sizes="260px"
                className="object-cover grayscale transition-all duration-700 ease-expo-out hover:grayscale-0"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-center font-mono text-eyebrow uppercase text-muted-foreground"
      >
        <span className="block">Scroll</span>
        <motion.span
          aria-hidden
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mt-2 inline-block h-6 w-px bg-foreground/40"
        />
      </motion.div>
    </section>
  );
}
