"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { ParallaxImage } from "@/components/motion/parallax-image";
import { cn } from "@/lib/utils";

export type ProjectInput = {
  slug: string;
  title: string;
  description: string;
  badges: ReadonlyArray<string>;
  dates: string;
  technologies: ReadonlyArray<string>;
  image: string;
  video?: string;
};

export function ProjectCard({
  project,
  featured = false,
  className,
}: {
  project: ProjectInput;
  featured?: boolean;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [hover, setHover] = useState(false);

  function onEnter() {
    setHover(true);
    if (project.video && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }
  function onLeave() {
    setHover(false);
    if (project.video && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }

  return (
    <Link
      href={`/projects/${project.slug}`}
      data-cursor="link"
      data-curtain
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      className={cn(
        "group relative isolate flex flex-col overflow-hidden rounded-md border border-border bg-surface transition-colors duration-300 ease-expo-out hover:border-accent",
        className
      )}
    >
      <div
        className={cn(
          "relative w-full overflow-hidden",
          featured ? "aspect-[16/10]" : "aspect-[4/3]"
        )}
      >
        {project.video ? (
          <video
            ref={videoRef}
            src={project.video}
            poster={project.image}
            muted
            loop
            playsInline
            className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-expo-out group-hover:scale-[1.04]"
          />
        ) : (
          <div className="absolute inset-0 transition-transform duration-700 ease-expo-out group-hover:scale-[1.04]">
            <ParallaxImage
              src={project.image}
              alt={project.title}
              intensity={0.06}
              className="size-full"
            />
          </div>
        )}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-background/0"
        />
        {project.badges.length > 0 && (
          <div className="absolute left-3 top-3 flex gap-1.5">
            {project.badges.map((b) => (
              <span
                key={b}
                className="rounded-full bg-accent px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-accent-foreground"
              >
                {b}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5 md:p-6">
        <div className="flex items-center justify-between font-mono text-eyebrow uppercase text-muted-foreground">
          <span>{project.dates}</span>
          <span
            className={cn(
              "transition-all duration-300 ease-expo-out",
              hover ? "text-accent" : "text-foreground/40"
            )}
          >
            View case ↗
          </span>
        </div>
        <h3
          className={cn(
            "font-display uppercase leading-[0.95] tracking-tight",
            featured ? "text-display-md" : "text-3xl md:text-4xl"
          )}
        >
          {project.title}
        </h3>
        <p className="line-clamp-3 max-w-prose-wide font-sans text-sm leading-relaxed text-muted-foreground md:text-base">
          {project.description}
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 6).map((t) => (
            <span
              key={t}
              className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
