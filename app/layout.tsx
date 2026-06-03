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

const SEO_TITLE = `${DATA.name} — Software Engineer & Full-Stack Developer`;
const SEO_DESCRIPTION =
  "Kian Malakooti is a software engineer at Meta and full-stack developer in San Francisco, building web and iOS products. Explore selected work, case studies, and photography.";

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: SEO_TITLE,
    template: `%s | ${DATA.name}`,
  },
  description: SEO_DESCRIPTION,
  keywords: [
    DATA.name,
    "software engineer",
    "full-stack developer",
    "Meta",
    "React",
    "Next.js",
    "TypeScript",
    "React Native",
    "iOS developer",
    "San Francisco",
    "portfolio",
    "photographer",
  ],
  authors: [{ name: DATA.name, url: DATA.url }],
  creator: DATA.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    url: DATA.url,
    siteName: DATA.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
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

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: DATA.name,
  url: DATA.url,
  image: `${DATA.url.replace(/\/$/, "")}${DATA.avatarUrl}`,
  jobTitle: "Software Engineer",
  worksFor: { "@type": "Organization", name: "Meta" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    addressCountry: "US",
  },
  sameAs: [
    DATA.contact.social.GitHub.url,
    DATA.contact.social.LinkedIn.url,
    "https://shotbykian.com",
  ].filter(Boolean),
  knowsAbout: [
    ...DATA.codingLanguages.map((l) => l.name),
    ...DATA.frameworks,
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
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
