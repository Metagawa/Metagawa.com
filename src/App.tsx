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
import SteamWidget from "./components/SteamWidget";
function App() {
  return (
    <div className="App">
      <GridBackground />
      <div className="particle-background-wrapper">
        <ParticleBackground />
      </div>
      <div className="content">
        <SteamWidget />

      </div>
    </div>
  );
}

export default App;
