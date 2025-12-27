export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C#"],
  },
  {
    category: "Frontend",
    skills: ["React", "CSS", "HTML", "Tailwind CSS", "Responsive Design"],
  },
  {
    category: "Backend",
    skills: ["Node.js", ".NET", "Flask", "REST APIs", "Database Design"],
  },
  {
    category: "Tools",
    skills: ["Git", "Vite", "Docker", "Jest", "Postman"],
  },
];
