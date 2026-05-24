import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiOpenjdk,
  SiReact,
  SiNextdotjs,
  SiFastapi,
  SiSpring,
  SiNodedotjs,
  SiAngular,
  SiApachespark,
  SiMistralai,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiGooglecloud,
  SiPostgresql,
  SiRedis,
  SiMongodb,
  SiMysql,
  SiGit,
  SiPrometheus,
  SiGrafana,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import type { SkillCategory } from "./types";

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: [
      { name: "Python", icon: SiPython, featured: true },
      { name: "TypeScript", icon: SiTypescript, featured: true },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Java", icon: SiOpenjdk },
      { name: "SQL" },
    ],
  },
  {
    category: "Frameworks",
    items: [
      { name: "React", icon: SiReact, featured: true },
      { name: "Next.js", icon: SiNextdotjs, featured: true },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Spring Boot", icon: SiSpring },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Angular", icon: SiAngular },
    ],
  },
  {
    category: "Data & AI",
    items: [
      { name: "RAG" },
      { name: "PySpark", icon: SiApachespark, featured: true },
      { name: "Mistral", icon: SiMistralai },
      { name: "MCP" },
      { name: "AG2" },
      { name: "Delta Share" },
    ],
  },
  {
    category: "Cloud & Infrastructure",
    items: [
      { name: "AWS", icon: FaAws, featured: true },
      { name: "Docker", icon: SiDocker, featured: true },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "GCP", icon: SiGooglecloud },
      { name: "Azure" },
      { name: "Terraform", icon: SiTerraform },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, featured: true },
      { name: "Redis", icon: SiRedis, featured: true },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: SiGit, featured: true },
      { name: "Prometheus", icon: SiPrometheus },
      { name: "Grafana", icon: SiGrafana },
      { name: "Power BI" },
    ],
  },
];
