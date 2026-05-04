"use client";

import { AnimatePresence, motion, useScroll } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Magnetic } from "@/components/motion/magnetic";
import { ThemeToggle } from "@/components/chrome/theme-toggle";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/#work", label: "Work" },
  { href: "/#projects", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function TopNav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (v) => setScrolled(v > 40));
  }, [scrollY]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-300 ease-expo-out",
          scrolled
            ? "border-b border-border bg-background/70 backdrop-blur md:backdrop-blur-md"
            : "border-b border-transparent"
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-frame items-center justify-between px-gutter">
          <Magnetic strength={0.4}>
            <Link
              href="/"
              data-cursor="link"
              aria-label="Home"
              className="flex items-center gap-2 font-display text-lg uppercase leading-none tracking-tight"
            >
              <span className="grid size-8 place-items-center rounded-md bg-accent text-accent-foreground">
                <span className="translate-y-px">{DATA.initials}</span>
              </span>
              <span className="hidden sm:inline">{DATA.name}</span>
            </Link>
          </Magnetic>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((l) => (
              <Magnetic key={l.href} strength={0.2} radius={40}>
                <Link
                  href={l.href}
                  data-cursor="link"
                  className="rounded-full px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </Link>
              </Magnetic>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://shotbykian.com"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="link"
              className="hidden font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground sm:inline"
            >
              shotbykian ↗
            </a>
            <ThemeToggle />
            <a
              href={DATA.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="link"
              className="hidden rounded-full bg-accent px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-accent-foreground transition-transform duration-200 ease-expo-out hover:scale-[1.03] sm:inline-block"
            >
              Resume ↗
            </a>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              data-cursor="link"
              className="grid size-9 place-items-center rounded-full border border-border md:hidden"
            >
              <Menu className="size-4" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex flex-col bg-background"
          >
            <div className="flex h-16 items-center justify-between px-gutter">
              <span className="font-display text-lg uppercase">Menu</span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="grid size-9 place-items-center rounded-full border border-border"
              >
                <X className="size-4" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-2 px-gutter pb-section">
              {NAV_LINKS.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.15 + i * 0.06,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block font-display text-display-md uppercase leading-[0.95] tracking-tight"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-10 flex flex-col gap-3 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground"
              >
                <a
                  href={DATA.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume ↗
                </a>
                <a
                  href="https://shotbykian.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  shotbykian.com ↗
                </a>
                <a href={`mailto:${DATA.contact.email}`}>
                  {DATA.contact.email}
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
