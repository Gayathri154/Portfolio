

import React from "react";
import "./HeroSection.css"; // Import the CSS file
// import maggi from './maggi.jpg';
import OIP from './OIP.jpeg';
const HeroSection = () => {
  // The click handlers below can be enhanced using JavaScript if you want smooth scrolling or additional interaction.
  const handleViewWork = () => {
    // This is a simple example: scroll to an element with id "work"
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactMe = () => {
    // Scroll into contact section
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section">
      <header className="hero-header">
        <nav>
          <ul>
            <li>
              <a href="#whoami">Who am I?</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I'm Gayathri</h1>
          <h2>Frontend Developer</h2>
          <p>
          I design and develop experiences that make people's lives simpler through Web and Mobile apps. I work with HTML, CSS, React, and more modern technologies to create high-quality products..
          </p>
          <div className="hero-buttons">
            {/* <button onClick={handleViewWork}>View My Work</button> */}
            <button onClick={handleContactMe}>Contact Me</button>
          </div>
        </div>
        <div className="hero-image">
          {/* Replace with your image path or import the image */}
          <img src={OIP} alt="Developer working on laptop" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
