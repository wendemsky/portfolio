import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SkillGroup } from "@/components/ui/SkillGroup";
import { skills } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-muted/30">
      <div className="mx-auto max-w-5xl">
        <AnimatedSection>
          <SectionHeader title="Skills" />
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((group, i) => (
            <AnimatedSection key={group.category} delay={i * 0.08}>
              <SkillGroup group={group} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
