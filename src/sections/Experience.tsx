import React from "react";
import { Section } from "../components/Section";
import { experience } from "../data/experience";

export const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Experience">
      <div className="experience-list">
        {experience.map((exp) => (
          <div key={exp.role} className="experience-item">
            <h3 className="experience-role">{exp.role}</h3>
            <p className="experience-org">{exp.organization}</p>
            <p className="experience-date">{exp.dateRange}</p>
            <ul className="experience-points">
              {exp.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};
