import React from "react";
import "./App.css";
import "./Section.css";
import ParticleBackground from "./ParticleBackground";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import GitHub from "./components/GitHub";
import GridBackground from "./components/GridBackground";

function App() {
  return (
     <div className="App">
           <GridBackground />
      <div className="particle-background-wrapper">
        <ParticleBackground />
      </div>
      {/* <div className="content">
        <Navbar />
        <div className="section" id="home">
        </div>
        <div className="section" id="about">
          <About />
        </div>
        <div className="section" id="projects">
          <Projects />
        </div>
        <div className="section" id="github">
          <GitHub />
        </div>
        <div className="section" id="contact">
          <Contact />
        </div>
      </div>*/}
    </div>
  );
}

export default App;
