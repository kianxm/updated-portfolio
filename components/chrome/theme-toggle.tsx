"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  function toggle() {
    setTheme(isDark ? "light" : "dark");
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      data-cursor="link"
      onClick={toggle}
      className={cn(
        "relative h-8 w-16 rounded-full border border-border bg-surface-2 transition-colors hover:border-foreground/30",
        className
      )}
    >
      <span
        aria-hidden
        className={cn(
          "absolute top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-sm transition-transform duration-300 ease-expo-out",
          isDark ? "translate-x-1" : "translate-x-9"
        )}
      >
        {isDark ? <Moon className="size-3.5" /> : <Sun className="size-3.5" />}
      </span>
    </button>
  );
}
