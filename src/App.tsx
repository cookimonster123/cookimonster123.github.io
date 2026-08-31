import "./App.css";
import { DraggablePhoto } from "./components/DraggablePhoto";
import { ParticlesBackground } from "./components/ParticlesBackground";
import photoOne from "./assets/photos/photo1.jpeg";
import photoTwo from "./assets/photos/photo2.jpeg";
import photoThree from "./assets/photos/photo3.jpeg";
import photoFour from "./assets/photos/photo4.jpeg";
import photoFive from "./assets/photos/photo5.jpeg";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Experience } from "./sections/Experience";
import { Skills } from "./sections/Skills";
import { Contact } from "./sections/Contact";
import { Introduction } from "./sections/Introduction";
import { TicTacToe } from "./sections/TicTacToe";

const photoItems = [
  { src: photoOne, alt: "Portrait photo 1", defaultX: 32, defaultY: 110 },
  { src: photoTwo, alt: "Portrait photo 2", defaultX: 200, defaultY: 430 },
  { src: photoThree, alt: "Portrait photo 3", defaultX: 70, defaultY: 760 },
  { src: photoFour, alt: "Portrait photo 4", defaultX: 1230, defaultY: 180 },
  { src: photoFive, alt: "Portrait photo 5", defaultX: 1230, defaultY: 620 },
];

function App() {
  return (
    <div className="app">
      <ParticlesBackground />
      <div className="photo-layer" aria-hidden="true">
        {photoItems.map(({ src, alt, defaultX, defaultY }) => (
          <DraggablePhoto
            key={alt}
            src={src}
            alt={alt}
            defaultX={defaultX}
            defaultY={defaultY}
            size={150}
          />
        ))}
      </div>
      <Hero />
      <main className="main-content">
        <TicTacToe />
        <Introduction />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
