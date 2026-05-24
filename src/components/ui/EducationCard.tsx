import Image from "next/image";
import type { EducationEntry } from "@/data/types";

interface EducationCardProps {
  entry: EducationEntry;
}

export function EducationCard({ entry }: EducationCardProps) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-card">
      <div
        className="absolute inset-y-0 left-0 w-[3px]"
        style={{ backgroundColor: entry.accentColor }}
      />
      <div className="p-6 pl-7">
        <div className="flex items-start justify-between gap-4">
          <div className="relative h-10 w-32 flex-shrink-0">
            <Image
              src={entry.logo}
              alt={entry.abbreviation}
              fill
              className="object-contain object-left grayscale mix-blend-multiply dark:mix-blend-normal dark:invert opacity-80 dark:opacity-55"
            />
          </div>
          <div className="text-right flex-shrink-0">
            <p className="text-sm text-muted-foreground">{entry.period}</p>
            <p className="text-xs text-muted-foreground">{entry.location}</p>
          </div>
        </div>

        <div className="mt-3">
          <h3 className="font-semibold text-foreground">{entry.institution}</h3>
          <p className="text-sm text-muted-foreground mt-0.5">{entry.degree}</p>
        </div>

        <div className="mt-3 flex items-baseline gap-1.5">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
            GPA
          </span>
          <span className="text-sm font-semibold text-foreground">{entry.gpa}</span>
        </div>

        <div className="mt-4 border-t border-border pt-4">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
            Specialisations
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-foreground/70">
            {entry.focusAreas.join(" · ")}
          </p>
        </div>
      </div>
    </div>
  );
}
