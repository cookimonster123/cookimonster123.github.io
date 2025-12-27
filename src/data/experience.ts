export interface ExperienceEntry {
  role: string;
  organization: string;
  dateRange: string;
  points: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: "Software Engineer",
    organization: "Aderant",
    dateRange: "July 2025 - November 2025",
    points: [
      "Researched and implemented an AI agent capable of learning from structured and unstructured files to generate consistent, reusable outputs",
      "Improved code quality and maintainability by addressing technical debt and refactoring legacy components in collaboration with the team",
    ],
  },
  {
    role: "Software Engineering Intern",
    organization: "Aderant",
    dateRange: "December 2024 - March 2025",
    points: [
      "Developed a reusable proof-of-concept file download component using React, TypeScript, and Node.js, later integrated into the internal component library",
      "Implemented CI/CD pipelines with GitHub Actions to automate linting, testing, and deployment workflows",
      "Collaborated with cross-functional teams to deliver solutions that improved application performance and reliability",
    ],
  },

  {
    role: "Teaching Assistant",
    organization: "University Computer Science Department",
    dateRange: "2024 - 2025",
    points: [
      "Assessed student assignments and provided constructive, criteria-based feedback to support learning",
    ],
  },
];
