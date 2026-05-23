import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ProjectEntry } from "@/data/types";

interface ProjectCardProps {
  project: ProjectEntry;
  isActive: boolean;
  onClick: () => void;
}

export function ProjectCard({ project, isActive, onClick }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group relative cursor-pointer transition-all duration-300",
        isActive ? "scale-[1.015]" : ""
      )}
    >
      <span
        className={cn(
          "absolute left-0 inset-y-3 w-[2px] rounded-r-sm bg-primary z-10 transition-opacity duration-300",
          isActive ? "opacity-100" : "opacity-0"
        )}
      />

      <div
        className={cn(
          "rounded-xl overflow-hidden transition-all duration-300",
          isActive
            ? "ring-1 ring-primary/30 shadow-lg"
            : "opacity-70 hover:opacity-100 hover:shadow-sm"
        )}
      >
        {project.image && (
          <div className="relative h-24 w-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className={cn(
                "object-cover transition-[filter] duration-300",
                project.imagePosition === "top" ? "object-top" : "object-center",
                isActive ? "saturate-100" : "saturate-[0.55] group-hover:saturate-[0.85]"
              )}
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>
        )}
        <div className={cn("px-3 py-2.5", isActive ? "bg-accent/30" : "bg-card")}>
          <p className="font-medium text-sm text-foreground leading-tight">{project.title}</p>
          {project.hook && (
            <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{project.hook}</p>
          )}
        </div>
      </div>
    </div>
  );
}
