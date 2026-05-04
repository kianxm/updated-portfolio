import type { Variants } from "framer-motion";

export const ease = {
  out: [0.22, 1, 0.36, 1] as const,
  in: [0.64, 0, 0.78, 0] as const,
  inOut: [0.83, 0, 0.17, 1] as const,
};

export const dur = {
  fast: 0.3,
  base: 0.6,
  slow: 0.9,
  hero: 1.1,
};

export const stagger = {
  tight: 0.04,
  base: 0.06,
  loose: 0.1,
};

export const variants: Record<string, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: dur.base, ease: ease.out },
    },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: dur.base, ease: ease.out },
    },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: dur.base, ease: ease.out },
    },
  },
  reveal: {
    hidden: { y: "110%", clipPath: "inset(0 0 100% 0)" },
    visible: {
      y: "0%",
      clipPath: "inset(0 0 0% 0)",
      transition: { duration: dur.slow, ease: ease.out },
    },
  },
};

export const reducedFade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2, ease: "linear" },
  },
};
