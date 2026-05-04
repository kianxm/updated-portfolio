"use client";

import { useState } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import { Magnetic } from "@/components/motion/magnetic";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(DATA.contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // No clipboard? Fallback to mailto.
      window.location.href = `mailto:${DATA.contact.email}`;
    }
  }

  return (
    <section id="contact" className="relative px-gutter py-section">
      <div className="mx-auto w-full max-w-frame">
        <FadeIn>
          <p className="font-mono text-eyebrow uppercase text-muted-foreground">
            [07] — Contact
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-6 font-display text-display-xl uppercase leading-[0.85] tracking-tight">
            Let&apos;s
            <br />
            <span className="text-accent">connect.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-12 flex flex-col items-start gap-6 md:mt-16 md:flex-row md:items-center md:gap-10">
            <Magnetic strength={0.25}>
              <button
                type="button"
                onClick={copyEmail}
                data-cursor="link"
                className={cn(
                  "group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 font-mono text-sm uppercase tracking-[0.16em] text-accent-foreground transition-transform duration-300 ease-expo-out hover:scale-[1.03]",
                )}
              >
                <span>
                  {copied ? "(copied to clipboard)" : DATA.contact.email}
                </span>
                <span
                  aria-hidden
                  className="inline-block transition-transform duration-300 ease-expo-out group-hover:translate-x-1"
                >
                  →
                </span>
              </button>
            </Magnetic>
            <a
              href={DATA.contact.social.LinkedIn.url}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="link"
              className="font-mono text-eyebrow uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
            >
              Or chat on LinkedIn ↗
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-10 max-w-prose-wide font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
            I read every message. Whether you&apos;ve got a project, a role, or
            just want to talk about photography, code, or what&apos;s good in
            San Francisco — say hi.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
