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
          href="https://github.com/cookimonster123"
          className="btn btn-secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </section>
  );
};
