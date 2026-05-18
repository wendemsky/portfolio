import type { SiteMetadata, SocialLink } from "./types";

export const meta: SiteMetadata = {
  name: "Himanshu Maithani",
  tagline: "Software Engineer",
  summary:
    "Software Engineer with 2+ years building production backend services, data pipelines, and full-stack applications at Fidelity and Samsung. Currently pursuing a Master of Computing at NUS and interning at SATS Ltd in Singapore.",
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
