import type { ProjectEntry } from "./types";

export const projects: ProjectEntry[] = [
  {
    title: "Kiln",
    period: "Mar 2026",
    hook: "Self-evolving AI tool registry that builds and hot-loads tools on demand.",
    bullets: [
      "Built a self-evolving AI tool registry where a Mistral Large planning agent decomposes natural-language requests into DAGs; a synthesis agent auto-generates tool specs and hot-loads implementations in ~15 seconds across 5 FastAPI microservices with zero downtime",
      "Implemented MCP OAuth 2.1/PKCE authorization server enabling Claude Desktop, Cursor, and VS Code Copilot integration; deployed on GKE with Terraform IaC, Prometheus/Grafana observability, and AST-based security validation across 201 automated tests",
    ],
    tech: ["Python", "FastAPI", "AG2", "PostgreSQL", "Redis", "Next.js", "Kubernetes", "Terraform"],
    githubUrl: "https://github.com/wendemsky/kiln",
    image: "/images/kiln-preview.png",
    featured: true,
  },
  {
    title: "Trade Nexus",
    period: "Dec 2024",
    hook: "Distributed trading platform with real-time pricing and portfolio management.",
    bullets: [
      "Designed a 5-tier distributed trading platform with real-time pricing engine, portfolio management, and automated advisory services; enforced security via JWT and resilience via circuit breaker patterns",
    ],
    tech: ["Angular", "Spring Boot", "Node.js", "SQLite", "TypeScript"],
    githubUrl: "https://github.com/wendemsky/TradeNexus",
    image: "/images/tradenexus-preview.png",
    imagePosition: "top",
    featured: false,
  },
  {
    title: "Why-Not Query Provenance",
    period: "Mar 2026",
    hook: "Explains why expected tuples are missing from SQL query results using provenance theory.",
    bullets: [
      "Built a provenance-based explanation system for PostgreSQL implementing K-relations with 4 semirings (Boolean, Bag, Why, How) that traces missing tuples through SELECT, JOIN, PROJECT, and UNION operators by exploiting the semiring annihilation law to pinpoint blocking operators",
      "Validated against 8 ground-truth correctness tests on the TPC-C benchmark schema; benchmarked K-relation evaluation overhead against baseline SQL execution across all operator combinations",
    ],
    tech: ["Python", "PostgreSQL", "ProvSQL", "SQL"],
    githubUrl: "https://github.com/wendemsky/pg-whynot",
    paperUrl: "/why_not_provenance_firing_rules_semiring.pdf",
    image: "/images/why-not-provenance-preview.png",
    imagePosition: "top",
    featured: false,
  },
  {
    title: "Loan Anomaly Detector",
    period: "Nov 2025",
    hook: "Unsupervised anomaly detection on 30K Freddie Mac loans — 155% improvement over baseline.",
    bullets: [
      "Engineered 143 features including domain-specific amortization metrics and temporal payment patterns from 30,504 Freddie Mac loans; applied PCA (80 components) and ensemble fusion via inverse covariance weighting with Extreme Value Theory calibration",
      "Achieved AUPRC of 0.478 on a 13,426-sample Kaggle holdout — 155% improvement over the best baseline (LOF, AUPRC 0.1955) — driven by amortization-gated ensemble strategies with strict data leakage prevention",
    ],
    tech: ["Python", "scikit-learn", "pandas", "numpy", "scipy"],
    githubUrl: "https://github.com/wendemsky/CS5344-Loan-Anomaly-Detection",
    paperUrl: "/loan_anomaly_detection.pdf",
    image: "/images/loan-anomaly-preview.png",
    imagePosition: "top",
    featured: false,
  },
  {
    title: "Telecom Churn Predictor",
    period: "Jun 2025",
    hook: "Predicts telecom customer churn with 0.821 F1-score using engineered features and XGBoost.",
    bullets: [
      "Engineered 67 features from 19 base variables on a 3,333-record BigML telecom dataset; benchmarked XGBoost, Random Forest, Decision Trees, KNN, and Logistic Regression with GridSearchCV 5-fold CV optimized for F1 under class imbalance",
      "XGBoost champion model achieved F1 of 0.821 (91% precision, 75% recall) with 60% overfitting reduction; applied K-Means and DBSCAN clustering revealing a 4% churn rate differential between usage-based segments",
    ],
    tech: ["Python", "XGBoost", "scikit-learn", "K-Means", "DBSCAN", "pandas"],
    githubUrl: "https://github.com/wendemsky/Customer_Churn_Prediction",
    featured: false,
  },
];
