export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Project Showcase Platform",
    description:
      "A web application for discovering and showcasing software engineering projects. Built with React and TypeScript for the frontend, Node.js backend, and MongoDB database.",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/cookimonster123/capstone-project-s2-2025",
  },
  {
    title: "Podcast Library Web Application",
    description:
      "A modular web application for managing and exploring podcast collections. Built using Flask with Blueprint-based architecture, featuring secure user authentication, CSRF protection, and comprehensive unit and integration testing.",
    technologies: ["Python", "Flask", "Flask-WTF", "Pytest"],
    githubUrl: "https://github.com/cookimonster123/podcast-web-app",
  },
];

// TODO: Add more projects 
