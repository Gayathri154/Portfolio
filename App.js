// src/App.jsx

import React from "react";
import HeroSection from "./HeroSection"; // Assuming you have a HeroSection
import ProjectsSection from "./ProjectSection";
import ResumeSection from "./ResumeSection";
import ContactSection from "./ContactSection";

const App = () => {
  return (
    <div className="App">
      <HeroSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
      {/* Other components or sections can be added below */}
    </div>
  );
};

export default App;
