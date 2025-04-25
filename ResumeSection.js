// src/components/ResumeSection.jsx
import Gayathri_Resume from './Gayathri_Resume.pdf';
import React from "react";
import "./ResumeSection.css";

const workExperiences = [
  {
    title: "Data Scientist Intern",
    company: "Academor",
    period: "August 2023-September 2023",
    description:
        "Trained and developed machine learning models",
  }
];

const educationData = [
  {
    degree: "Bachelor of Technology in INFORMATION TECHNOLOGY",
    institution: "Prasad V Potluri Sidhhartha Institute Of Technology",
    period: "2022 - 2026",
    details:
      "Specialized in web development.",
  },
];

const skills = [
  { name: "Python", proficiency: 90 },
  { name: "c++", proficiency: 85 },
  { name: "JavaScript", proficiency: 80 },
  { name: "React", proficiency: 75 },
  { name: "HTML", proficiency: 80 },
  { name: "SQL", proficiency: 80 },
];

const ResumeSection = () => {
  // Handle the Download CV button click
 

  return (
    <section id="resume" className="resume-section">
      <h2>Resume</h2>
      <div className="resume-details">
        <div className="left-column">
          <div className="work-experience">
            <h3>Work Experience</h3>
            {workExperiences.map((job, index) => (
              <div className="job-card" key={index}>
                <div className="job-header">
                  <h4>{job.title}</h4>
                  <span className="job-period">{job.period}</span>
                </div>
                <h5 className="job-company">{job.company}</h5>
                <p className="job-description">{job.description}</p>
              </div>
            ))}
          </div>

          <div className="education">
            <h3>Education</h3>
            {educationData.map((edu, index) => (
              <div className="edu-card" key={index}>
                <div className="edu-header">
                  <h4>{edu.degree}</h4>
                  <span className="edu-period">{edu.period}</span>
                </div>
                <h5 className="edu-institution">{edu.institution}</h5>
                <p className="edu-details">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="skills">
          <h3>Skills</h3>
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              <span className="skill-name">{skill.name}</span>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${skill.proficiency}%` }}
                >
                  <span className="progress-label">
                    {skill.proficiency}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <a href={Gayathri_Resume} target="_blank" rel="noopener noreferrer" className="download-btn">
        View  CV
         </a>

    </section>
  );
};

export default ResumeSection;
