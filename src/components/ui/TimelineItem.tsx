import { TechBadge } from "./TechBadge";
import type { ExperienceEntry } from "@/data/types";

interface TimelineItemProps {
  entry: ExperienceEntry;
  isLast?: boolean;
}

export function TimelineItem({ entry, isLast }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
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
          <div className="sm:text-right flex-shrink-0">
            <p className="text-sm text-muted-foreground">{entry.period}</p>
            <p className="text-xs text-muted-foreground">{entry.location}</p>
          </div>
        </div>

        <ul className="space-y-2">
          {entry.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
              <span className="mt-2 h-1 w-1 rounded-full bg-muted-foreground flex-shrink-0" />
              {bullet}
            </li>
          ))}
        </ul>

        {entry.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {entry.tags.map((tag) => (
              <TechBadge key={tag} label={tag} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
