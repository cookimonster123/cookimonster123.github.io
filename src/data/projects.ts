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
  {
    title: "Reusable File Transfer Component (PoC)",
    description:
      "A proof-of-concept component for handling secure and reliable file upload and download workflows. Built with React and TypeScript, with a Node.js backend, and designed for reusability before being integrated into an internal component library.",
    technologies: ["React", "TypeScript", "Node.js"],
    githubUrl: "",
  },
  {
    title: "Monte Carlo Blackjack Simulation",
    description:
      "A probabilistic simulation of the game of Blackjack using Monte Carlo methods to evaluate player strategies and expected returns. Designed experiments to simulate large numbers of hands, analyze outcome distributions, and assess the impact of rule variations and decision policies on long-term expected value.",
    technologies: ["Python", "NumPy", "Pandas"],
    githubUrl: "https://github.com/cookimonster123/blackjack-monte-carlo",
  },
];

// TODO: Add more projects 
