import { Footer } from "@/components/chrome/footer";
import { TopNav } from "@/components/chrome/top-nav";
import { CustomCursor } from "@/components/motion/custom-cursor";
import { NoiseOverlay } from "@/components/motion/noise-overlay";
import { PageTransition } from "@/components/motion/page-transition";
import { RouteCurtain } from "@/components/motion/route-curtain";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Anton } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const fontDisplay = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const fontSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-sans",
  display: "swap",
  weight: "100 900",
});

const fontMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-mono",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground font-sans antialiased",
          fontSans.variable,
          fontMono.variable,
          fontDisplay.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <TooltipProvider delayDuration={0}>
            <a
              href="#hero"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-[0.16em] focus:text-accent-foreground"
            >
              Skip to content
            </a>
            <NoiseOverlay />
            <ScrollProgress />
            <CustomCursor />
            <RouteCurtain />
            <TopNav />
            <div className="pt-16">
              <PageTransition>{children}</PageTransition>
            </div>
            <Footer />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
