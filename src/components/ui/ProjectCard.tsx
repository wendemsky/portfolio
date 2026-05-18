import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { TechBadge } from "./TechBadge";
import type { ProjectEntry } from "@/data/types";

interface ProjectCardProps {
  project: ProjectEntry;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 flex flex-col gap-4 h-full">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold text-foreground text-lg">{project.title}</h3>
          <p className="text-xs text-muted-foreground mt-0.5">{project.period}</p>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <GithubIcon size={18} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live demo"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <ul className="space-y-2 flex-1">
        {project.bullets.map((bullet, i) => (
          <li key={i} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
            <span className="mt-2 h-1 w-1 rounded-full bg-muted-foreground flex-shrink-0" />
            {bullet}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <TechBadge key={t} label={t} />
        ))}
      </div>
    </div>
  );
}
