export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  ariaLabel: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  tags: string[];
}

export interface ProjectEntry {
  title: string;
  period: string;
  hook?: string;
  bullets: string[];
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  paperUrl?: string;
  image?: string;
  imagePosition?: "center" | "top";
  featured: boolean;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface EducationEntry {
  institution: string;
  degree: string;
  period: string;
  location: string;
  gpa: string;
}

export interface SiteMetadata {
  name: string;
  tagline: string;
  summary: string;
  email: string;
  location: string;
  resumeUrl: string;
  linkedin: string;
  github: string;
}
