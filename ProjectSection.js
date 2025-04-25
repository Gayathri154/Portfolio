// src/components/ProjectsSection.jsx

import React from "react";
import "./ProjectSection.css"; // Import the updated CSS file

// Projects data with imageUrl property added for each project
const projects = [
  {
    title: "Foodie Space",
    description: "A static website showcasing food recipe descriptions.",
    technologies: ["HTML", "CSS"],
    projectLink: "https://github.com/Gayathri154/Foodie-Space",
    // imageUrl: "/images/foodie-space.jpg", // Ensure this file is placed in public/images
  },
  {
    title: "Loan Approval Prediction",
    description: "A machine learning model to predict loan approval status.",
    technologies: ["Python", "Pandas", "Scikit-learn"],
    projectLink: "https://github.com/Gayathri154/Loan-Prediction",
    // imageUrl: "/images/loan-approval.jpg", // Ensure this file is placed in public/images
  },
  {
    title: "Snake Game",
    description: "The classic snake game developed using Python.",
    technologies: ["Python", "turtle"],
    projectLink: "https://github.com/Gayathri154/Snake-Game",
    // imageUrl: "/images/snake-game.jpg", // Ensure this file is placed in public/images
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
    
            <div className="overlay">
              <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-tags">
                  {project.technologies.map((tech, idx) => (
                    <span className="tech-tag" key={idx}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  className="view-project"
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
