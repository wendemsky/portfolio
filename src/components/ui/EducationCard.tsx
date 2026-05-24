import Image from "next/image";
import type { EducationEntry } from "@/data/types";

interface EducationCardProps {
  entry: EducationEntry;
}

export function EducationCard({ entry }: EducationCardProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
        <div className="flex items-start gap-3">
          <div className="relative mt-0.5 h-10 w-10 flex-shrink-0 overflow-hidden rounded-lg border border-border">
            <Image
              src={entry.logo}
              alt={entry.abbreviation}
              fill
              className="object-cover object-left grayscale opacity-80 dark:invert dark:opacity-70"
            />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{entry.institution}</h3>
            <p className="text-sm text-muted-foreground mt-0.5">{entry.degree}</p>
          </div>
        </div>
        <div className="sm:text-right flex-shrink-0 pl-[52px] sm:pl-0">
          <p className="text-sm text-muted-foreground">{entry.period}</p>
          <p className="text-xs text-muted-foreground">{entry.location}</p>
        </div>
      </div>
      <p className="text-sm font-medium mt-3 pl-[52px] sm:pl-0">GPA: {entry.gpa}</p>
      <div className="mt-4 border-t border-border pt-4">
        <div className="flex flex-wrap gap-2">
          {entry.focusAreas.map((area) => (
            <span
              key={area}
              className="rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
