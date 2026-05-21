"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { experiences } from "@/data/experience";

export function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="experience" className="py-24 px-6 bg-muted/30">
      <div className="mx-auto max-w-5xl">
        <AnimatedSection>
          <SectionHeader title="Experience" />
        </AnimatedSection>
        <div>
          {experiences.map((entry, i) => (
            <AnimatedSection key={entry.company} delay={i * 0.1}>
              <TimelineItem
                entry={entry}
                isLast={i === experiences.length - 1}
                isExpanded={activeIndex === i}
                onToggle={() => setActiveIndex(i === activeIndex ? -1 : i)}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
