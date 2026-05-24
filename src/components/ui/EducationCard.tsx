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
        <div className="flex items-start justify-between gap-6">
          <div className="flex items-start gap-3.5">
            <div className="mt-0.5 flex-shrink-0">
              <Image
                src={entry.logo}
                alt={entry.abbreviation}
                width={entry.logoWidth}
                height={entry.logoHeight}
                className="h-10 w-auto object-contain grayscale opacity-70 mix-blend-multiply dark:mix-blend-normal dark:invert dark:opacity-50"
              />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{entry.institution}</h3>
              <p className="mt-0.5 text-sm text-muted-foreground">{entry.degree}</p>
            </div>
          </div>
          <div className="flex-shrink-0 text-right">
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
