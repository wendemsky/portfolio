"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { experiences } from "@/data/experience";

export function Experience() {
  const [expandedIndices, setExpandedIndices] = useState<Set<number>>(new Set([0]));

  function toggle(i: number) {
    setExpandedIndices(prev => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i); else next.add(i);
      return next;
    });
  }

  return (
    <section id="experience" className="py-24 px-6 bg-muted/30">
      <div className="mx-auto max-w-5xl">
        <AnimatedSection>
          <SectionHeader title="Experience" />
        </AnimatedSection>
        <div className="min-h-[320px]">
          {experiences.map((entry, i) => (
            <AnimatedSection key={entry.company} delay={i * 0.1}>
              <TimelineItem
                entry={entry}
                isLast={i === experiences.length - 1}
                isExpanded={expandedIndices.has(i)}
                onToggle={() => toggle(i)}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
