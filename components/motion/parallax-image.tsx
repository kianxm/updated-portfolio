"use client";

import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { cn } from "@/lib/utils";

type ParallaxImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  intensity?: number;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
};

export function ParallaxImage({
  src,
  alt,
  className,
  imageClassName,
  intensity = 0.12,
  priority,
  fill = true,
  width,
  height,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const offset = `${intensity * 100}%`;
  const y: MotionValue<string> = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${offset}`, offset]
  );

  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden", className)}
    >
      <motion.div
        style={{
          y: reduced ? 0 : y,
          height: "120%",
          width: "100%",
          position: "absolute",
          inset: "-10% 0 0 0",
        }}
      >
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            priority={priority}
            className={cn("object-cover", imageClassName)}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width ?? 1200}
            height={height ?? 800}
            priority={priority}
            className={cn("object-cover", imageClassName)}
          />
        )}
      </motion.div>
    </div>
  );
}
