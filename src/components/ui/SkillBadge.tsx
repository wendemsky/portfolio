import type { IconType } from "react-icons";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  label: string;
  icon?: IconType;
  featured?: boolean;
  className?: string;
}

export function SkillBadge({ label, icon: Icon, featured, className }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-3 py-1.5 text-sm text-foreground",
        featured
          ? "border-foreground/25 bg-foreground/[0.04]"
          : "border-border bg-background",
        className
      )}
    >
      {Icon && <Icon size={14} className="mr-1.5 text-muted-foreground" />}
      {label}
    </span>
  );
}
