"use client";

import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import { DATA } from "@/data/resume";
import { ease } from "@/lib/motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";

type WorkRow = (typeof DATA.work)[number];

/** Compact date for mobile: "June 2023" -> "Jun '23", "Present" -> "Now". */
function shortDate(d: string): string {
  if (d.toLowerCase() === "present") return "Now";
  const parts = d.split(" ");
  if (parts.length === 2) {
    const [mon, year] = parts;
    const shortYear = /^\d{4}$/.test(year) ? `'${year.slice(2)}` : year;
    return `${mon.slice(0, 3)} ${shortYear}`;
  }
  if (/^\d{4}$/.test(d)) return `'${d.slice(2)}`;
  return d;
}

function Row({
  work,
  index,
  total,
  onHover,
  isExpanded,
  onToggle,
}: {
  work: WorkRow;
  index: number;
  total: number;
  onHover: (logo: string | null, e?: React.MouseEvent<HTMLDivElement>) => void;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      onMouseEnter={(e) => onHover(work.logoUrl, e)}
      onMouseLeave={() => onHover(null)}
      className="group relative border-b border-border transition-colors duration-300 ease-expo-out hover:bg-surface-2"
    >
      <button
        type="button"
        onClick={onToggle}
        data-cursor="link"
        aria-expanded={isExpanded}
        className="grid w-full grid-cols-12 items-center gap-4 py-6 text-left md:py-8"
      >
        <span className="col-span-2 font-mono text-eyebrow uppercase text-muted-foreground md:col-span-1">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <span className="col-span-10 flex items-center gap-3 md:col-span-4">
          <span className="grid size-8 place-items-center overflow-hidden rounded-md bg-surface-2 ring-1 ring-border">
            <Image
              src={work.logoUrl}
              alt={work.company}
              width={32}
              height={32}
              className="object-cover"
            />
          </span>
          <span className="font-display text-2xl uppercase leading-none tracking-tight md:text-3xl">
            {work.company}
          </span>
        </span>
        <span className="col-span-7 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground md:col-span-4 md:text-sm">
          {work.title}
        </span>
        <span className="col-span-5 whitespace-nowrap text-right font-mono text-[0.7rem] uppercase tracking-[0.04em] text-muted-foreground md:col-span-3 md:text-sm md:tracking-[0.16em]">
          <span className="md:hidden">
            {shortDate(work.start)} — {shortDate(work.end)}
          </span>
          <span className="hidden md:inline">
            {work.start} — {work.end}
          </span>
          <span
            aria-hidden
            className="ml-3 inline-block transition-transform duration-300 ease-expo-out group-hover:translate-x-1"
          >
            ↗
          </span>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-12 gap-4 pb-8 pl-0 md:pl-[8.333%]">
              <p className="col-span-12 max-w-prose-wide text-balance font-sans text-sm leading-relaxed text-muted-foreground md:col-span-9 md:text-base">
                {work.description}
              </p>
              <Link
                href={work.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="link"
                className="col-span-12 font-mono text-xs uppercase tracking-[0.16em] text-accent md:col-span-3"
              >
                Visit {work.company} ↗
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const PREVIEW_SIZE = 176;
const PREVIEW_OFFSET_X = 80;

export function WorkTimeline() {
  const [hoverLogo, setHoverLogo] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);
  const reduced = useReducedMotion();

  const trackerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  function setFromClient(clientX: number, clientY: number) {
    const el = trackerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set(clientX - rect.left - PREVIEW_SIZE / 2 + PREVIEW_OFFSET_X);
    y.set(clientY - rect.top - PREVIEW_SIZE / 2);
  }

  function handleHover(
    logo: string | null,
    e?: React.MouseEvent<HTMLDivElement>
  ) {
    // Snap position to current cursor BEFORE setting the logo so the preview
    // mounts at the right spot — no animation from a stale value.
    if (logo && e) setFromClient(e.clientX, e.clientY);
    setHoverLogo(logo);
  }

  useEffect(() => {
    if (reduced) return;
    const el = trackerRef.current;
    if (!el) return;
    function onMove(e: MouseEvent) {
      setFromClient(e.clientX, e.clientY);
    }
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

  return (
    <section id="work" className="relative px-gutter py-section">
      <div className="mx-auto w-full max-w-frame">
        <div className="grid grid-cols-12 gap-6 pb-12 md:pb-16">
          <FadeIn className="col-span-12 md:col-span-3">
            <p className="font-mono text-eyebrow uppercase text-muted-foreground">
              [03] — Experience
            </p>
          </FadeIn>
          <FadeIn delay={0.1} className="col-span-12 md:col-span-9">
            <h2 className="font-display text-display-lg uppercase leading-[0.9] tracking-tight">
              Where I&apos;ve <span className="text-accent">shipped.</span>
            </h2>
          </FadeIn>
        </div>

        <div ref={trackerRef} className="relative">
          <div className="border-t border-border">
            {DATA.work.map((w, i) => (
              <Row
                key={w.company}
                work={w}
                index={i}
                total={DATA.work.length}
                onHover={handleHover}
                isExpanded={expanded === w.company}
                onToggle={() =>
                  setExpanded((cur) => (cur === w.company ? null : w.company))
                }
              />
            ))}
          </div>

          {!reduced && (
            <motion.div
              aria-hidden
              style={{
                x,
                y,
                width: PREVIEW_SIZE,
                height: PREVIEW_SIZE,
              }}
              className="pointer-events-none absolute left-0 top-0 z-10 hidden md:block"
            >
              <AnimatePresence mode="wait">
                {hoverLogo && (
                  <motion.div
                    key={hoverLogo}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.18, ease: ease.out }}
                    className="relative size-full overflow-hidden rounded-md ring-1 ring-border"
                  >
                    <Image
                      src={hoverLogo}
                      alt=""
                      fill
                      sizes="176px"
                      className="object-cover"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </div>

        <div className="mt-12 flex justify-end">
          <a
            href={DATA.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="link"
            className="font-mono text-eyebrow uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
          >
            [view full resume] ↗
          </a>
        </div>
      </div>
    </section>
  );
}
