import React from "react";
import { Section } from "../components/Section";
import { skills } from "../data/skills";

export const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Skills">
      <div className="skills-grid">
        {skills.map((skillGroup) => (
          <div key={skillGroup.category} className="skill-category">
            <h3 className="skill-category-title">{skillGroup.category}</h3>
            <ul className="skill-list">
              {skillGroup.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};
