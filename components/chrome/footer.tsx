"use client";

import { useEffect, useState } from "react";
import { Magnetic } from "@/components/motion/magnetic";
import { DATA } from "@/data/resume";

const SOCIALS = [
  { label: "GitHub", url: DATA.contact.social.GitHub.url },
  { label: "LinkedIn", url: DATA.contact.social.LinkedIn.url },
  { label: "shotbykian", url: "https://shotbykian.com" },
];

function useSfTime() {
  const [time, setTime] = useState<string>("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Los_Angeles",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);
  return time;
}

export function Footer() {
  const time = useSfTime();
  return (
    <footer className="relative isolate overflow-hidden border-t border-border bg-background">
      <div className="mx-auto w-full max-w-frame px-gutter pb-12 pt-section">
        <p className="font-mono text-eyebrow uppercase text-muted-foreground">
          [99] — Outro
        </p>
        <h2 className="mt-6 font-display text-display-lg uppercase leading-[0.85] tracking-tight">
          Get in
          <br />
          <span className="text-accent">touch.</span>
        </h2>

        <div className="mt-12 flex flex-col gap-8 md:mt-16 md:flex-row md:items-end md:justify-between">
          <Magnetic strength={0.25}>
            <a
              href={`mailto:${DATA.contact.email}`}
              data-cursor="link"
              className="group block font-display text-display-md uppercase leading-[0.95] tracking-tight"
            >
              <span className="bg-gradient-to-r from-foreground to-foreground bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 ease-expo-out group-hover:bg-[length:100%_2px]">
                {DATA.contact.email}
              </span>
              <span className="ml-2 inline-block text-accent transition-transform duration-300 ease-expo-out group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>
          </Magnetic>

          <div className="flex flex-wrap items-end gap-6 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="link"
                className="transition-colors hover:text-foreground"
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>

        <div className="mt-section grid gap-6 border-t border-border pt-8 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground md:grid-cols-3">
          <div>
            <span className="block text-foreground/40">Local time</span>
            <span suppressHydrationWarning className="text-foreground">
              SF · {time || "--:--:--"}
            </span>
          </div>
          <div>
            <span className="block text-foreground/40">Built with</span>
            <span className="text-foreground">
              Next.js · Tailwind · Framer Motion
            </span>
          </div>
          <div className="md:text-right">
            <span className="block text-foreground/40">© 2026</span>
            <span className="text-foreground">{DATA.name}</span>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="-mt-6 select-none whitespace-nowrap px-gutter font-display text-[clamp(6rem,22vw,18rem)] uppercase leading-[0.85] tracking-tight text-foreground/[0.04]"
      >
        {DATA.name}
      </div>
    </footer>
  );
}
