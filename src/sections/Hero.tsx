import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <h1 className="hero-name">Shanhai Guan</h1>
      <p className="hero-subtitle">Software Engineer</p>
      <div className="hero-buttons">
        <a href="#projects" className="btn btn-primary">
          View Projects
        </a>
        <a
          href="#contact"
          className="btn btn-secondary"
        >
          Lets Connect!
        </a>
      </div>
    </section>
  );
};
