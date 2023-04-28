import React, { useEffect, useRef } from "react";

class Particle {
  x: number;
  y: number;
  size: number;
  speedFactor: number;
  count: number;
  alpha: number;

  constructor() {
    this.x = 0;
    this.y = 0;
    this.size = 0;
    this.speedFactor = 0;
    this.count = 0;
    this.alpha = 0;
  }

initialize(particleCanvas: HTMLCanvasElement, particleMinSize: number, particleMaxSize: number, x?: number, y?: number) {
  this.x = x || Math.random() * particleCanvas.width;
  this.y = y || Math.random() * particleCanvas.height; // Use the full canvas height
  this.size = Math.floor(Math.random() * (particleMaxSize - particleMinSize + 1) + particleMinSize);
  this.speedFactor = this.size /4 * (Math.random());
  this.count = Math.random() * 2000;
  this.alpha = Math.random() * 0.5 + 0.5;
}


  update(particleCanvas: HTMLCanvasElement, particleMinSize: number, particleMaxSize: number) {
    this.y += this.speedFactor * (Math.sin(this.count / 200) + 1);
    if (this.y > particleCanvas.height) {
      this.initialize(particleCanvas, particleMinSize, particleMaxSize);
    }
    this.count++;
  }

  draw(particleContext: CanvasRenderingContext2D | null) {
    if (!particleContext) {
      return;
    }
    particleContext.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
    particleContext.fillRect(this.x, this.y, this.size, this.size);
  }
}

const ParticleBackground: React.FC = () => {
  const particleCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!particleCanvasRef.current) {
      return;
    }

    const particleCanvas = particleCanvasRef.current;
    const particleContext = particleCanvas.getContext("2d");

const particles: Particle[] = [];
let particleCount = 2000; // Increase this value for more particles on the screen
    const particleMinSize = 1;
    const particleMaxSize = 3;

function resizeParticleCanvas() {
  const prevWidth = particleCanvas.width;
  const prevHeight = particleCanvas.height;
  particleCanvas.width = window.innerWidth || 0;
  particleCanvas.height = document.documentElement.scrollHeight || 0; // Set height to document height

  // Update particle positions based on new canvas size
  particles.forEach((particle) => {
    particle.x = (particle.x / prevWidth) * particleCanvas.width;
    particle.y = (particle.y / prevHeight) * particleCanvas.height;
  });
}


    function createParticles() {
      for (let i = 0; i < particleCount; i++) {
        const particle = new Particle();
        particle.initialize(particleCanvas, particleMinSize, particleMaxSize);
        particles.push(particle);
      }
    }

    function animateParticles() {
      if (particleContext) {
        particleContext.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
      }
      particles.forEach((particle) => {
        particle.update(particleCanvas, particleMinSize, particleMaxSize);
        particle.draw(particleContext);
      });
      requestAnimationFrame(animateParticles);
    }

    resizeParticleCanvas();
   
    window.addEventListener("resize", resizeParticleCanvas);
    window.addEventListener("scroll", resizeParticleCanvas);

    createParticles();

    animateParticles();

    return () => {
      window.removeEventListener("resize", resizeParticleCanvas);
      window.removeEventListener("scroll", resizeParticleCanvas);
    };
  }, []);

  return <canvas ref={particleCanvasRef} />;
};

export default ParticleBackground;
