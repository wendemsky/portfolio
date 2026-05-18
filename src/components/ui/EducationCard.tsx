import type { EducationEntry } from "@/data/types";

interface EducationCardProps {
  entry: EducationEntry;
}

export function EducationCard({ entry }: EducationCardProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
        <div>
          <h3 className="font-semibold text-foreground">{entry.institution}</h3>
          <p className="text-sm text-muted-foreground mt-0.5">{entry.degree}</p>
        </div>
        <div className="sm:text-right flex-shrink-0">
          <p className="text-sm text-muted-foreground">{entry.period}</p>
          <p className="text-xs text-muted-foreground">{entry.location}</p>
        </div>
      </div>
      <p className="text-sm font-medium mt-3">GPA: {entry.gpa}</p>
    </div>
  );
}
