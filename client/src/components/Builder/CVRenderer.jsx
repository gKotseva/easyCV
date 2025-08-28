import { Education } from "../Sections/Education";
import { Summary } from "../Sections/Summary";
import { TechnicalSkills } from "../Sections/TechnicalSkills";
import { Work } from "../Sections/Work";
import { SoftSkills } from "../Sections/SoftSkills";
import { ContactInformation } from "../Sections/ContactInformation";
import { Introduction } from "../Sections/Introduction";

export const CVRenderer = ({ sections, theme, mode = "builder" }) => {
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
    <div className={`cv ${mode}`}>
      {sections.map((section) => {
        const Component = components[section.section_label];
        return Component ? (
          <div key={section.section_label}>
            <Component theme={theme} section={section} mode={mode} />
          </div>
        ) : null;
      })}
    </div>
  );
};
