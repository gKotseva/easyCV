import "./Builder.modules.css";

import { useCV } from "../../contexts/CV";
import { Education } from "../Sections/Education";
import { Summary } from "../Sections/Summary";
import { TechnicalSkills } from "../Sections/TechnicalSkills";
import { Work } from "../Sections/Work";
import { SoftSkills } from "../Sections/SoftSkills";
import { ContactInformation } from "../Sections/ContactInformation";
import { Introduction } from "../Sections/Introduction";
import { CVControllers } from "../CVControllers";

export const Builder = () => {
  const { columns, theme, styling, sections, saveCV, name, setName } = useCV();

  const components = {
    introduction: Introduction,
    contact_information: ContactInformation,
    summary: Summary,
    soft_skills: SoftSkills,
    technical_skills: TechnicalSkills,
    work_experience: Work,
    education: Education,
  };

  return (
    <div className="builder-container">
      <div className="side-container">
        <div className="cv-name">
          <label>Document title</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div className="body-container">
        <div className="action-buttons">
          <CVControllers saveHandler={saveCV} />
        </div>
        <div className="cv-container">
          <div className="cv">
            {sections.map((section) => {
              const Component = components[section.section_label];
              return Component ? (
                <div key={section.section_label}>
                  <Component theme={theme} section={section} />
                </div>
              ) : null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
