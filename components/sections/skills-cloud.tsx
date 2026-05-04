"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { ease } from "@/lib/motion";

function StaggeredPills({
  items,
  renderPill,
}: {
  items: { key: string }[];
  renderPill: (item: { key: string }, i: number) => React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <div ref={ref} className="flex flex-wrap gap-2">
      {items.map((item, i) => (
        <motion.div
          key={item.key}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{
            duration: 0.5,
            delay: 0.04 * i,
            ease: ease.out,
          }}
        >
          {renderPill(item, i)}
        </motion.div>
      ))}
    </div>
  );
}

export function SkillsCloud() {
  const yearNow = new Date().getFullYear();

  return (
    <section id="skills" className="px-gutter py-section">
      <div className="mx-auto grid w-full max-w-frame grid-cols-12 gap-6">
        <FadeIn className="col-span-12 md:col-span-3">
          <p className="font-mono text-eyebrow uppercase text-muted-foreground">
            [05] — Stack
          </p>
        </FadeIn>
        <FadeIn delay={0.1} className="col-span-12 md:col-span-9">
          <h2 className="font-display text-display-lg uppercase leading-[0.9] tracking-tight">
            The <span className="text-accent">tools</span>
            <br />I reach for.
          </h2>
        </FadeIn>

        <div className="col-span-12 md:col-span-3" />
        <div className="col-span-12 mt-12 space-y-12 md:col-span-9 md:mt-16">
          <div>
            <p className="mb-6 font-mono text-eyebrow uppercase text-muted-foreground">
              Languages
            </p>
            <TooltipProvider>
              <StaggeredPills
                items={DATA.codingLanguages.map((l) => ({
                  key: l.name,
                  ...l,
                }))}
                renderPill={(item) => {
                  const lang = DATA.codingLanguages.find(
                    (l) => l.name === item.key
                  )!;
                  const Icon = lang.icon;
                  return (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span
                          data-cursor="link"
                          className="inline-flex cursor-default items-center gap-2 rounded-full border border-border px-4 py-2 font-mono text-sm uppercase tracking-[0.12em] transition-colors duration-200 ease-expo-out hover:border-accent hover:bg-accent hover:text-accent-foreground"
                        >
                          {lang.name}
                        </span>
                      </TooltipTrigger>
                      <TooltipContent
                        side="top"
                        className="border-border bg-surface-2 text-foreground"
                      >
                        <div className="flex items-center gap-2">
                          <Icon size={20} />
                          <div className="font-mono text-xs uppercase tracking-[0.12em]">
                            <p className="text-foreground">
                              {yearNow - lang.learnedIn} yrs ·{" "}
                              {lang.proficiency}
                            </p>
                          </div>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  );
                }}
              />
            </TooltipProvider>
          </div>

          <div>
            <p className="mb-6 font-mono text-eyebrow uppercase text-muted-foreground">
              Frameworks &amp; Tools
            </p>
            <StaggeredPills
              items={DATA.frameworks.map((f) => ({ key: f }))}
              renderPill={(item) => (
                <span
                  data-cursor="link"
                  className="inline-flex cursor-default items-center gap-2 rounded-full border border-border px-4 py-2 font-mono text-sm uppercase tracking-[0.12em] transition-colors duration-200 ease-expo-out hover:border-accent hover:bg-accent hover:text-accent-foreground"
                >
                  {item.key}
                </span>
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
