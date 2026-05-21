import type { SiteMetadata, SocialLink } from "./types";

export const meta: SiteMetadata = {
  name: "Himanshu Maithani",
  tagline: "Backend · Distributed Systems · AI Infrastructure",
  summary:
    "I build backend infrastructure for distributed systems and AI — data pipelines, cloud architectures, and agent networks. Currently at SATS Ltd and pursuing a Master's at NUS.",
  email: "himanshumaithani2002@gmail.com",
  location: "Singapore",
  resumeUrl: "/resume.pdf",
  linkedin: "https://linkedin.com/in/himanshu-maithani",
  github: "https://github.com/wendemsky",
};

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    href: "https://github.com/wendemsky",
    ariaLabel: "GitHub profile",
  },
  {
    platform: "LinkedIn",
    href: "https://linkedin.com/in/himanshu-maithani",
    ariaLabel: "LinkedIn profile",
  },
  {
    platform: "Email",
    href: "mailto:himanshumaithani2002@gmail.com",
    ariaLabel: "Send email",
  },
];
