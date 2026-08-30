import React from 'react';
import { Section } from '../components/Section';

export const Introduction: React.FC = () => {
   return (
     <Section id="introduction" title="About">
       <p className="introduction-text">
         I’m a recent Computer Science graduate from the University of Auckland
         who enjoys building things. In my previous role as a Software Engineer
         Intern, I worked on full-stack web applications using technologies like
         TypeScript, React, Node.js, and Python.
         <br />
         <br />
         I’m also interested in data science, machine learning, and data
         analysis. I enjoy exploring complex datasets, finding interesting
         insights, and using data to answer questions about topics I’m curious
         about or hobbies I enjoy.
         <br />
         <br />
         Outside of work, I enjoy playing chess, shooting film photography, and
         training MMA. I love exploring new hobbies, trying new foods, and
         meeting new people. I’m also a big food lover, I enjoy both cooking and
         eating, and my favourite food at the moment is beef pho. Recently,
         I’ve gotten into hiking and reading, so please reach out and share your
         favourite hikes or book recommendations!
         <br></br>
         <br /> Looking forward to connecting and chatting more with you!!
       </p>
     </Section>
   );
};