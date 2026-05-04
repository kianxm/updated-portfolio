import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Hero } from "@/components/sections/hero";
import { MarqueeStrip } from "@/components/sections/marquee-strip";
import { ProjectsBento } from "@/components/sections/projects-bento";
import { SkillsCloud } from "@/components/sections/skills-cloud";
import { WorkTimeline } from "@/components/sections/work-timeline";

export default function Page() {
  return (
    <main>
      <Hero />
      <MarqueeStrip />
      <About />
      <WorkTimeline />
      <Education />
      <SkillsCloud />
      <MarqueeStrip
        text="Selected Work ✺ Bento ✺ Case Studies ✺ Click any tile"
        reverse
        variant="outline"
        speed={50}
      />
      <ProjectsBento />
      <Contact />
    </main>
  );
}
