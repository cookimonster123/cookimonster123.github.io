import "./App.css";
import { ParticlesBackground } from "./components/ParticlesBackground";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Experience } from "./sections/Experience";
import { Skills } from "./sections/Skills";
import { Contact } from "./sections/Contact";
import { Introduction } from "./sections/Introduction";
import { TicTacToe } from "./sections/TicTacToe";

function App() {
  return (
    <div className="app">
      <ParticlesBackground />
      <Hero />
      <main className="main-content">
        <TicTacToe />
        <Introduction />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
