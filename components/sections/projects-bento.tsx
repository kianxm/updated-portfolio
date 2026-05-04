"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { ProjectCard } from "@/components/sections/project-card";
import { DATA } from "@/data/resume";

export function ProjectsBento() {
  const projects = DATA.projects;

  // Bento layout: featured (col-span-12 md:col-span-8 row-span-2) + 4 cells (col-span-12 sm:col-span-6 md:col-span-4)
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="px-gutter py-section">
      <div className="mx-auto w-full max-w-frame">
        <div className="grid grid-cols-12 gap-6 pb-12 md:pb-16">
          <FadeIn className="col-span-12 md:col-span-3">
            <p className="font-mono text-eyebrow uppercase text-muted-foreground">
              [06] — Selected Work
            </p>
          </FadeIn>
          <FadeIn delay={0.1} className="col-span-12 md:col-span-9">
            <h2 className="font-display text-display-lg uppercase leading-[0.9] tracking-tight">
              Things I&apos;ve <span className="text-accent">built.</span>
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <FadeIn className="col-span-12 md:col-span-8 md:row-span-2">
            <ProjectCard
              project={{
                slug: featured.slug,
                title: featured.title,
                description: featured.description,
                badges: featured.badges,
                dates: featured.dates,
                technologies: featured.technologies,
                image: featured.image,
                video: featured.video,
              }}
              featured
              className="h-full"
            />
          </FadeIn>

          {rest.map((p, i) => (
            <FadeIn
              key={p.slug}
              delay={0.05 * (i + 1)}
              className={
                i < 2
                  ? "col-span-12 sm:col-span-6 md:col-span-4"
                  : "col-span-12 sm:col-span-6 md:col-span-6"
              }
            >
              <ProjectCard
                project={{
                  slug: p.slug,
                  title: p.title,
                  description: p.description,
                  badges: p.badges,
                  dates: p.dates,
                  technologies: p.technologies,
                  image: p.image,
                  video: p.video,
                }}
                className="h-full"
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
