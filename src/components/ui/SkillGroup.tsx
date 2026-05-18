import { SkillBadge } from "./SkillBadge";
import type { SkillCategory } from "@/data/types";

interface SkillGroupProps {
  group: SkillCategory;
}

export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider">
        {group.category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <SkillBadge key={item} label={item} />
        ))}
      </div>
    </div>
  );
}
