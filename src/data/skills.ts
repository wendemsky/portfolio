import type { SkillCategory } from "./types";

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Frameworks",
    items: ["Spring Boot", "FastAPI", "Angular", "React", "Node.js", "Next.js"],
  },
  {
    category: "Cloud & Infrastructure",
    items: ["Docker", "Kubernetes", "Terraform", "AWS", "Azure", "GCP"],
  },
  {
    category: "Data & AI",
    items: ["PySpark", "AG2", "MCP", "Mistral", "Delta Share", "RAG"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    category: "Tools",
    items: ["Git", "Power BI", "Prometheus", "Grafana"],
  },
];
