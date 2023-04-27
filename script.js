const particleCanvas = document.getElementById("particle-bg");
const particleContext = particleCanvas.getContext("2d");
const particles = [];
let particleCount = 500;
const particleMinSize = 1;
const particleMaxSize = 3;

class Particle {
  constructor() {
    this.initialize();
  }

  initialize(x, y) {
    this.x = x || Math.random() * particleCanvas.width;
    this.y = y || Math.random() * -particleCanvas.height;
    this.size = Math.floor(Math.random() * (particleMaxSize - particleMinSize + 1) + particleMinSize);
    this.speedFactor = this.size / 2 * (Math.random() * 0.3 + 0.2);
    this.count = Math.random() * 1000;
    this.alpha = Math.random() * 0.5 + 0.5;
  }

  update() {
    this.y += this.speedFactor * (Math.sin(this.count / 200) + 1);
    if (this.y > particleCanvas.height) {
      this.initialize();
    }
    this.count++;
  }

  draw() {
    particleContext.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
    particleContext.fillRect(this.x, this.y, this.size, this.size);
  }
}
function resizeParticleCanvas() {
  const prevWidth = particleCanvas.width;
  const prevHeight = particleCanvas.height;
  particleCanvas.width = window.innerWidth || 0;
  particleCanvas.height = window.innerHeight || 0;

  // Update particle positions based on new canvas size
  particles.forEach((particle) => {
    particle.x = (particle.x / prevWidth) * particleCanvas.width;
    particle.y = (particle.y / prevHeight) * particleCanvas.height;
  });
}


function createParticles() {
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }
}

function animateParticles() {
  particleContext.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
  particles.forEach((particle) => {
    particle.update();
    particle.draw();
  });
  requestAnimationFrame(animateParticles);
}

resizeParticleCanvas();
window.addEventListener('resize', resizeParticleCanvas);
window.addEventListener('scroll', resizeParticleCanvas);
// Randomly place particles all over the page
for (let i = 0; i < particleCount; i++) {
  const x = Math.random() * particleCanvas.width;
  const y = Math.random() * particleCanvas.height;
  particles.push(new Particle());
  particles[i].initialize(x, y);
}

animateParticles();
