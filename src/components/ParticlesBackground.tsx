import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export const ParticlesBackground: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#ffffff",
          },
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: "#0066cc",
          },
          links: {
            color: "#0066cc",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1.5,
            straight: false,
            direction: "none",
          },
          number: {
            density: {
              enable: true,
              area: 1200,
            },
            value: 40,
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 3,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
          },
          modes: {
            grab: {
              distance: 200,
              duration: 0.4,
              links: {
                opacity: 0.8,
              },
            },
          },
        },
        detectRetina: true,
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
};
