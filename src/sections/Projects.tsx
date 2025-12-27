import React from "react";
import { Section } from "../components/Section";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";

export const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Projects">
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description} 
            technologies={project.technologies}
            githubUrl={project.githubUrl || ""}
          />
        ))}
      </div>
    </Section>
  );
};
