import React from 'react';
import { Section } from '../components/Section';

export const Introduction: React.FC = () => {
   return (
     <Section id="introduction" title="About">
       <p className="introduction-text">
         I’m a recent Computer Science graduate from the University of Auckland
         who enjoys building things. I’ve gained
         hands-on experience through software engineering internships, where I
         worked on full-stack web applications using technologies like
         TypeScript, React, Node.js, and Python.
         <br /><br />
         Outside of coding, I enjoy playing chess, going to the gym, and shooting film photography.
       </p>
     </Section>
   );
};