"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { TechBadge } from "./TechBadge";
import type { ExperienceEntry } from "@/data/types";

interface TimelineItemProps {
  entry: ExperienceEntry;
  isLast?: boolean;
  isExpanded: boolean;
  onToggle: () => void;
}

export function TimelineItem({ entry, isLast, isExpanded, onToggle }: TimelineItemProps) {
  const extraBullets = entry.bullets.slice(1);

  return (
    <div
      className="relative pl-8 pb-12 last:pb-0 cursor-pointer select-none"
      onClick={onToggle}
    >
      {!isLast && (
        <div className="absolute left-[11px] top-3 bottom-0 w-px bg-border" />
      )}
      <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full border-2 border-primary bg-background flex items-center justify-center">
        <div className="h-2 w-2 rounded-full bg-primary" />
      </div>

      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
          <div>
            <h3 className="font-semibold text-foreground">{entry.company}</h3>
            <p className="text-sm text-muted-foreground">{entry.role}</p>
          </div>
          <div className="flex items-start gap-2">
            <div className="sm:text-right flex-shrink-0">
              <p className="text-sm text-muted-foreground">{entry.period}</p>
              <p className="text-xs text-muted-foreground">{entry.location}</p>
            </div>
            <motion.span
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="mt-0.5 text-muted-foreground flex-shrink-0"
            >
              <ChevronDown size={16} />
            </motion.span>
          </div>
        </div>

        <ul className="space-y-2">
          <li className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
            <span className="mt-2 h-1 w-1 rounded-full bg-muted-foreground flex-shrink-0" />
            {entry.bullets[0]}
          </li>
        </ul>

        <AnimatePresence initial={false}>
          {isExpanded && (extraBullets.length > 0 || entry.tags.length > 0) && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              style={{ overflow: "hidden" }}
            >
              <div className="space-y-3">
                {extraBullets.length > 0 && (
                  <ul className="space-y-2">
                    {extraBullets.map((bullet, i) => (
                      <li key={i} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                        <span className="mt-2 h-1 w-1 rounded-full bg-muted-foreground flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}

                {entry.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                      <TechBadge key={tag} label={tag} />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
