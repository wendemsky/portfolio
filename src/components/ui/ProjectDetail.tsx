"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { TechBadge } from "./TechBadge";
import type { ProjectEntry } from "@/data/types";

const COLLAPSED_H = 80;

interface ProjectDetailProps {
  project: ProjectEntry;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const [expanded, setExpanded] = useState(false);
  const [fullHeight, setFullHeight] = useState<number | null>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (listRef.current) {
      setFullHeight(listRef.current.scrollHeight);
    }
  }, []);

  const hasOverflow = fullHeight !== null && fullHeight > COLLAPSED_H;

  return (
    <div className="flex flex-col gap-5">
      {project.image && (
        <div className="relative h-64 w-full overflow-hidden rounded-xl">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            className={cn(
              "object-cover saturate-[0.85]",
              project.imagePosition === "top" ? "object-top" : "object-center"
            )}
            sizes="(max-width: 768px) 100vw, 75vw"
          />
        </div>
      )}

      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
            <p className="text-xs text-muted-foreground mt-0.5">{project.period}</p>
          </div>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository"
              className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0 mt-0.5"
            >
              <GithubIcon size={18} />
            </a>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <motion.div
            initial={false}
            animate={{ height: expanded ? (fullHeight ?? "auto") : COLLAPSED_H }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden relative"
          >
            <ul ref={listRef} className="space-y-2.5">
              {project.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed">
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
