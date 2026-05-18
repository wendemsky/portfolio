import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  label: string;
  className?: string;
}

export function SkillBadge({ label, className }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground",
        className
      )}
    >
      {label}
    </span>
  );
}
