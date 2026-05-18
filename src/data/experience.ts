import type { ExperienceEntry } from "./types";

export const experiences: ExperienceEntry[] = [
  {
    company: "SATS Ltd.",
    role: "Technology Solutions Intern",
    period: "May 2025 – Apr 2026",
    location: "Singapore",
    bullets: [
      "Built workforce compliance platform (Python, PySpark, Delta Share) cutting manual oversight by 70% for 2,000+ employees via automated data workflows, real-time alerting, and Power BI dashboards; drove on-prem-to-Azure migration using Azure Functions and Microsoft Graph API to automate cross-system data synchronization",
      "Built backend for a GCP-deployed internal operations platform (3,000–4,000 daily users): REST APIs for live cargo and flight data, auth, ground-handling workflow management, automated MAWB extraction from emails, and a RAG prototype for natural-language querying of operational data",
    ],
    tags: ["Python", "PySpark", "Azure", "GCP", "FastAPI", "RAG"],
  },
  {
    company: "Fidelity Investments",
    role: "Software Development Engineer",
    period: "Jan 2024 – Nov 2024",
    location: "Chennai & Bangalore, India",
    bullets: [
      "Promoted from intern to SDE; led a 5-member team delivering a full-stack trading platform (Angular, Node.js, Spring Boot) with 85% TDD coverage, containerized as Docker/Kubernetes microservices improving deployment pipeline efficiency by 20%",
      "Engineered file reconciliation service processing 100K+ daily records (CSV, JSON, XML, Excel) and integrated a Python data-validation engine automating compliance report generation, cutting financial operations effort by 40%",
    ],
    tags: ["Spring Boot", "Angular", "Node.js", "Docker", "Kubernetes"],
  },
  {
    company: "Samsung R&D Institute India",
    role: "Samsung PRISM R&D Intern",
    period: "May 2023 – Nov 2023",
    location: "Bangalore, India",
    bullets: [
      "Designed a direct speech-to-speech translation model bypassing ASR/MT/TTS pipeline stages, achieving 40% latency reduction (2.9 PESQ, 23.5 BLEU); published findings at IEEE ICCCNT 2024 and awarded Certificate of Excellence",
    ],
    tags: ["Python", "PyTorch", "Deep Learning", "NLP"],
  },
];
