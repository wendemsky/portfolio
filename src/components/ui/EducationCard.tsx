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
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div className="flex items-start gap-4">
            <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg">
              <Image
                src={entry.logo}
                alt={entry.abbreviation}
                fill
                className="object-cover object-left mix-blend-multiply dark:mix-blend-normal dark:grayscale dark:invert"
              />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{entry.institution}</h3>
              <p className="text-sm text-muted-foreground mt-0.5">{entry.degree}</p>
            </div>
          </div>
          <div className="sm:text-right flex-shrink-0 pl-16 sm:pl-0">
            <p className="text-sm text-muted-foreground">{entry.period}</p>
            <p className="text-xs text-muted-foreground">{entry.location}</p>
          </div>
        </div>

        <div className="mt-4 flex items-baseline gap-1.5">
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
