import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        mono: ["var(--font-mono)", ...fontFamily.mono],
        display: ["var(--font-display)", ...fontFamily.sans],
      },
      fontSize: {
        "display-xl": [
          "clamp(4.5rem, 18vw, 14rem)",
          { lineHeight: "0.85", letterSpacing: "-0.04em" },
        ],
        "display-lg": [
          "clamp(3rem, 12vw, 9rem)",
          { lineHeight: "0.9", letterSpacing: "-0.03em" },
        ],
        "display-md": [
          "clamp(2.25rem, 7vw, 5.5rem)",
          { lineHeight: "0.95", letterSpacing: "-0.02em" },
        ],
        eyebrow: [
          "0.75rem",
          { lineHeight: "1", letterSpacing: "0.16em" },
        ],
      },
      spacing: {
        section: "clamp(6rem, 12vw, 12rem)",
        gutter: "clamp(1.25rem, 4vw, 3rem)",
      },
      maxWidth: {
        frame: "1680px",
        "prose-wide": "72ch",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        surface: {
          DEFAULT: "hsl(var(--surface))",
          2: "hsl(var(--surface-2))",
        },
        lime: {
          DEFAULT: "hsl(var(--accent))",
          fg: "hsl(var(--accent-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "blur-in": {
          "0%": { opacity: "0", filter: "blur(12px)" },
          "100%": { opacity: "1", filter: "blur(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          from: { backgroundPosition: "200% 0" },
          to: { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee 30s linear infinite",
        "marquee-r": "marquee-r 30s linear infinite",
        "fade-up": "fade-up 700ms cubic-bezier(0.22,1,0.36,1) both",
        "blur-in": "blur-in 700ms cubic-bezier(0.22,1,0.36,1) both",
        "scale-in": "scale-in 600ms cubic-bezier(0.22,1,0.36,1) both",
        shimmer: "shimmer 3s linear infinite",
      },
      transitionTimingFunction: {
        "expo-out": "cubic-bezier(0.22, 1, 0.36, 1)",
        "expo-in": "cubic-bezier(0.64, 0, 0.78, 0)",
        "expo-in-out": "cubic-bezier(0.83, 0, 0.17, 1)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
} satisfies Config;

export default config;
