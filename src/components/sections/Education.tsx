import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { EducationCard } from "@/components/ui/EducationCard";
import { education } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <AnimatedSection>
          <SectionHeader title="Education" />
        </AnimatedSection>
        <div className="space-y-4">
          {education.map((entry, i) => (
            <AnimatedSection key={entry.institution} delay={i * 0.1}>
              <EducationCard entry={entry} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
