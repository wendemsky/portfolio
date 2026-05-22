"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectDetail } from "@/components/ui/ProjectDetail";
import { projects } from "@/data/projects";

const EASE = [0.4, 0, 0.2, 1] as const;

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileView, setMobileView] = useState<"list" | "detail">("list");

  const activeProject = projects[activeIndex];

  const handleSelect = (i: number) => {
    if (i !== activeIndex) setActiveIndex(i);
  };

  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <AnimatedSection>
          <SectionHeader title="Projects" />
        </AnimatedSection>

        <div className="mt-8 md:grid md:grid-cols-[1fr_3fr] md:gap-8 md:items-start">
          {/* Desktop — left nav list */}
          <div className="hidden md:flex md:flex-col md:gap-2 self-start sticky top-24">
            {projects.map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 0.1}>
                <ProjectCard
                  project={project}
                  isActive={i === activeIndex}
                  onClick={() => handleSelect(i)}
                />
              </AnimatedSection>
            ))}
          </div>

          {/* Desktop — right detail panel */}
          <div className="hidden md:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.title}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: EASE }}
              >
                <ProjectDetail project={activeProject} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile — list view */}
          {mobileView === "list" && (
            <div className="flex flex-col gap-3 md:hidden">
              {projects.map((project, i) => (
                <AnimatedSection key={project.title} delay={i * 0.1}>
                  <ProjectCard
                    project={project}
                    isActive={false}
                    onClick={() => {
                      setActiveIndex(i);
                      setMobileView("detail");
                    }}
                  />
                </AnimatedSection>
              ))}
            </div>
          )}

          {/* Mobile — detail view */}
          {mobileView === "detail" && (
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.25, ease: EASE }}
            >
              <button
                onClick={() => setMobileView("list")}
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
              >
                <ChevronLeft size={14} />
                Back to Projects
              </button>
              <ProjectDetail project={activeProject} />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
