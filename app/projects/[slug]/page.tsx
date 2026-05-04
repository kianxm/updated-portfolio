import { ParallaxImage } from "@/components/motion/parallax-image";
import { FadeIn } from "@/components/motion/fade-in";
import { Magnetic } from "@/components/motion/magnetic";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

export function generateStaticParams() {
  return DATA.projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = DATA.projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.image ? [project.image] : undefined,
    },
  };
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = DATA.projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const idx = DATA.projects.findIndex((p) => p.slug === project.slug);
  const prev = DATA.projects[(idx - 1 + DATA.projects.length) % DATA.projects.length];
  const next = DATA.projects[(idx + 1) % DATA.projects.length];

  return (
    <article>
      {/* Top bar */}
      <div className="border-b border-border px-gutter">
        <div className="mx-auto flex h-14 w-full max-w-frame items-center justify-between font-mono text-eyebrow uppercase text-muted-foreground">
          <Magnetic strength={0.3}>
            <Link
              href="/#projects"
              data-cursor="link"
              data-curtain
              className="transition-colors hover:text-foreground"
            >
              ← Index
            </Link>
          </Magnetic>
          <span className="text-foreground/40">
            Case study · {project.year}
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="px-gutter py-section">
        <div className="mx-auto grid w-full max-w-frame grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-7">
            <FadeIn>
              <p className="font-mono text-eyebrow uppercase text-muted-foreground">
                [Case Study]
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="mt-6 font-display text-display-lg uppercase leading-[0.9] tracking-tight">
                {project.title}
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-8 max-w-prose-wide font-sans text-lg leading-relaxed text-muted-foreground md:text-xl">
                {project.description}
              </p>
            </FadeIn>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <FadeIn delay={0.15}>
              <div className="relative aspect-[4/5] w-full">
                <div
                  aria-hidden
                  className="absolute inset-0 translate-x-3 translate-y-3 rounded-md bg-accent"
                />
                <ParallaxImage
                  src={project.image}
                  alt={project.title}
                  intensity={0.1}
                  className="relative aspect-[4/5] w-full overflow-hidden rounded-md border border-border"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Meta strip */}
      <section className="border-y border-border px-gutter">
        <div className="mx-auto grid w-full max-w-frame grid-cols-2 gap-y-6 py-6 text-left md:grid-cols-4">
          <Meta label="Role" value={project.role} />
          <Meta label="Year" value={project.year} />
          <Meta label="Stack" value={project.technologies.slice(0, 4).join(" · ")} />
          <Meta
            label="Links"
            value={
              <span className="flex flex-wrap gap-3">
                {project.links.websiteUrl && (
                  <a
                    href={project.links.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="link"
                    className="text-accent transition-colors hover:underline"
                  >
                    Live ↗
                  </a>
                )}
                {project.links.sourceUrl && (
                  <a
                    href={project.links.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="link"
                    className="text-accent transition-colors hover:underline"
                  >
                    Source ↗
                  </a>
                )}
              </span>
            }
          />
        </div>
      </section>

      {/* Body */}
      <section className="px-gutter py-section">
        <div className="mx-auto grid w-full max-w-frame grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <FadeIn>
              <p className="font-mono text-eyebrow uppercase text-muted-foreground">
                Overview
              </p>
            </FadeIn>
          </div>
          <div className="col-span-12 md:col-span-9">
            <FadeIn delay={0.1}>
              <div className="prose prose-invert max-w-prose-wide prose-headings:font-display prose-headings:uppercase prose-headings:tracking-tight prose-h2:text-3xl md:prose-h2:text-4xl prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-accent prose-ul:text-muted-foreground">
                <ReactMarkdown>{project.caseStudy.body}</ReactMarkdown>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery.length > 1 && (
        <section className="px-gutter py-section">
          <div className="mx-auto w-full max-w-frame space-y-6 md:space-y-8">
            {project.gallery.map((src, i) => (
              <FadeIn key={src + i} delay={0.05 * i}>
                <div
                  className={
                    i % 2 === 0
                      ? "relative aspect-[16/10] w-full overflow-hidden rounded-md border border-border"
                      : "relative mx-auto aspect-[4/3] w-full max-w-3xl overflow-hidden rounded-md border border-border"
                  }
                >
                  <ParallaxImage
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                    intensity={0.08}
                    className="size-full"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </section>
      )}

      {/* Outcome callout */}
      <section className="border-y border-accent/40 bg-accent text-accent-foreground">
        <div className="mx-auto w-full max-w-frame px-gutter py-section">
          <p className="font-mono text-eyebrow uppercase opacity-70">
            Outcome
          </p>
          <p className="mt-6 max-w-[20ch] font-display text-display-md uppercase leading-[0.95] tracking-tight">
            {project.caseStudy.outcome}
          </p>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="grid grid-cols-1 border-b border-border md:grid-cols-2">
        <PrevNext label="Previous" project={prev} align="left" />
        <PrevNext label="Next" project={next} align="right" />
      </section>
    </article>
  );
}

function Meta({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="font-mono text-xs uppercase tracking-[0.16em]">
      <p className="text-foreground/40">{label}</p>
      <p className="mt-2 text-foreground">{value}</p>
    </div>
  );
}

function PrevNext({
  label,
  project,
  align,
}: {
  label: string;
  project: (typeof DATA.projects)[number];
  align: "left" | "right";
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      data-cursor="link"
      data-curtain
      className="group flex flex-col gap-3 px-gutter py-12 transition-colors duration-300 ease-expo-out hover:bg-surface-2 md:py-16"
    >
      <span
        className={
          "font-mono text-eyebrow uppercase text-muted-foreground " +
          (align === "right" ? "md:text-right" : "")
        }
      >
        {label === "Next" ? "Next →" : "← Previous"}
      </span>
      <span
        className={
          "font-display text-display-md uppercase leading-[0.95] tracking-tight transition-colors group-hover:text-accent " +
          (align === "right" ? "md:text-right" : "")
        }
      >
        {project.title}
      </span>
    </Link>
  );
}
