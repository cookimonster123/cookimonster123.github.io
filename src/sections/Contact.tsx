import React from "react";
import { Section } from "../components/Section";

export const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Contact">
      <p className="contact-text">
        Let's connect!
      </p>
      <div className="contact-links">
        <a
          href="https://github.com/cookimonster123"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/shanhai-guan-a72b70312/"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href="mailto:shanhaig3@gmail.com" className="contact-link">
          Email
        </a>
      </div>
    </Section>
  );
};
   