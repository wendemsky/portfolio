import type { EducationEntry } from "./types";

export const education: EducationEntry[] = [
  {
    institution: "National University of Singapore",
    abbreviation: "NUS",
    logo: "/images/education/nus.png",
    accentColor: "#E87722",
    degree: "Master of Computing (Computer Science)",
    period: "Jan 2025 – Aug 2026",
    location: "Singapore",
    gpa: "3.85 / 5.0",
    focusAreas: [
      "Distributed Systems",
      "Cloud Infrastructure",
      "Database Engineering",
      "AI Systems",
    ],
  },
  {
    institution: "SRM Institute of Science and Technology",
    abbreviation: "SRMIST",
    logo: "/images/education/srm.png",
    accentColor: "#1A3D8F",
    degree: "Bachelor of Technology in Computer Science Engineering",
    period: "Sep 2020 – Jun 2024",
    location: "Chennai, India",
    gpa: "9.48 / 10.0",
    focusAreas: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Computer Networks",
      "Database Management Systems",
    ],
  },
];
