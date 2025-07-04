import { useState } from "react";
import "./CVData.modules.css";
import { cvInformation } from "../cvData";

export const CVData = ({ section }) => {
  const [data, setData] = useState(cvInformation);
  switch (section.name) {
    case "Soft Skills":
      return (
        <div className="soft-skills-container">
          <h3>Soft Skills</h3>
          <div className="skills">
            {cvInformation?.softSkills.map((skill) => (
              <div className="skill">{skill}</div>
            ))}
          </div>
        </div>
      );
    case "Languages":
      return (
        <div className="languages-container">
          <h3>Languages</h3>
          <div className="languages">
            {cvInformation?.languages.map((languages) => (
              <div className="language">
                <p>{languages.language}</p>
                <p>{languages.profficiency}</p>
              </div>
            ))}
          </div>
        </div>
      );
    case "Summary":
      return (
        <div className="summary-container">
          <h3>Summary</h3>
          <div className="summary">
            <p>{cvInformation?.summary}</p>
          </div>
        </div>
      );
    case "Projects":
      return (
        <div className="personal-projects-container">
          <h3>Personal Projects</h3>
          <div className="projects">
            {cvInformation.personalProjects.map((project) => (
              <div className="project">
                <div className="project-info">
                  <div className="project-info-left">
                    <h4>{project.name}</h4>
                  </div>
                  <div className="project-info-right">
                    <p>{project.duration}</p>
                  </div>
                </div>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
    case "Technical Skills":
      return (
        <div className="technical-skills-container">
          <h3>Technical Skills</h3>
          <div className="skills">
            {cvInformation?.technicalSkills.map((skill) => (
              <div className="skill">{skill}</div>
            ))}
          </div>
        </div>
      );
    case "Contact Details":
      return (
        <div className="contact-container">
          <h3>Contact</h3>
          <div className="contact">
            <p>{cvInformation.contact.phone}</p>
            <p>{cvInformation.contact.email}</p>
          </div>
        </div>
      );
    case "Personal Info":
      return (
        <div className="personal-container">
          <h1>{cvInformation.personalInfo.name}</h1>
          <p>{cvInformation.personalInfo.title}</p>
        </div>
      );
    case "Education":
      return (
        <div className="education-container">
          <h3>Education</h3>
          <div className="educations">
            {cvInformation?.education.map((study) => (
              <div className="education">
                <div className="education-place">
                  <div className="education-place-left">
                    <h4>{study.uniName}</h4>
                    <p>{study.program}</p>
                  </div>
                  <div className="education-place-right">
                    <p>{study.durration}</p>
                    <p>{study.place}</p>
                  </div>
                </div>
                <div className="education-description">
                  <p>{study.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    case "Work Experience":
      return (
        <div className="jobs-container">
          <h3>Working Experience</h3>
          <div className="work-container">
            {cvInformation?.work.map((work) => (
              <div className="work">
                <div className="work-place">
                  <div className="educworkation-place-left">
                    <h4>{work.companyName}</h4>
                    <p>{work.possition}</p>
                  </div>
                  <div className="work-place-right">
                    <p>{work.durration}</p>
                    <p>{work.place}</p>
                  </div>
                </div>
                <div className="work-description">
                  <p>{work.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    default:
      return <div className="section-in-column">{section.name}</div>;
  }
};
