"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { TechBadge } from "./TechBadge";
import type { ProjectEntry } from "@/data/types";

const COLLAPSED_HEIGHT = 72;

interface ProjectCardProps {
  project: ProjectEntry;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [fullHeight, setFullHeight] = useState<number | null>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (listRef.current) {
      setFullHeight(listRef.current.scrollHeight);
    }
  }, []);

  const hasOverflow = fullHeight !== null && fullHeight > COLLAPSED_HEIGHT;

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden flex flex-col">
      {project.image && (
        <div className="relative aspect-video w-full">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            className="object-cover opacity-85 saturate-[0.75]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-card to-transparent" />
        </div>
      )}
      <div className="flex flex-col gap-4 p-6 flex-1">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-semibold text-foreground text-lg">{project.title}</h3>
            <p className="text-xs text-muted-foreground mt-0.5">{project.period}</p>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub repository"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <GithubIcon size={18} />
              </a>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <motion.div
            animate={{ height: expanded ? (fullHeight ?? "auto") : COLLAPSED_HEIGHT }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden relative"
          >
            <ul ref={listRef} className="space-y-2">
              {project.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                  <span className="mt-2 h-1 w-1 rounded-full bg-muted-foreground flex-shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>
            <AnimatePresence>
              {!expanded && hasOverflow && (
                <motion.div
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-card to-transparent pointer-events-none"
                />
              )}
            </AnimatePresence>
          </motion.div>

          {hasOverflow && (
            <button
              onClick={() => setExpanded((v) => !v)}
              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors self-start"
            >
              <span>{expanded ? "Show less" : "Read more"}</span>
              <motion.span
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="flex items-center"
              >
                <ChevronDown size={12} />
              </motion.span>
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <TechBadge key={t} label={t} />
          ))}
        </div>
      </div>
    </div>
  );
}
