import type { ProjectEntry } from "./types";

export const projects: ProjectEntry[] = [
  {
    title: "Kiln",
    period: "Mar 2026",
    bullets: [
      "Built a self-evolving AI tool registry where a Mistral Large planning agent decomposes natural-language requests into DAGs; a synthesis agent auto-generates tool specs and hot-loads implementations in ~15 seconds across 5 FastAPI microservices with zero downtime",
      "Implemented MCP OAuth 2.1/PKCE authorization server enabling Claude Desktop, Cursor, and VS Code Copilot integration; deployed on GKE with Terraform IaC, Prometheus/Grafana observability, and AST-based security validation across 201 automated tests",
    ],
    tech: ["Python", "FastAPI", "AG2", "PostgreSQL", "Redis", "Next.js", "Kubernetes", "Terraform"],
    featured: true,
  },
  {
    title: "Trade Nexus",
    period: "Dec 2024",
    bullets: [
      "Designed a 5-tier distributed trading platform with real-time pricing engine, portfolio management, and automated advisory services; enforced security via JWT and resilience via circuit breaker patterns",
    ],
    tech: ["Angular", "Spring Boot", "Node.js", "SQLite", "TypeScript"],
    featured: false,
  },
];
