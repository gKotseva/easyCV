import "./styles.css";

import { SectionControllers } from "./SectionControllers";
import { useCV } from "../../context/CV";
import { PersonalInformation } from "../Sections/PersonalInformation";
import { ContactInformation } from "../Sections/ContactInformation";
import { Summary } from "../Sections/Summary";
import { ProfessionalExperience } from "../Sections/ProfessionalExperience";
import { Education } from "../Sections/Education";
import { TechnicalSkills } from "../Sections/TechnicalSkills";
import { SoftSkills } from "../Sections/SoftSkills";
import { Languages } from "../Sections/Languages";
import { Projects } from "../Sections/Projects";
import { Certifications } from "../Sections/Certifications";
import { AwardsHonors } from "../Sections/AwardsHonors";
import { HobbiesInterests } from "../Sections/HobbiesInterests";
import { References } from "../Sections/References";

export const SectionRenderer = () => {
  const { cv, sections } = useCV();

  const sectionComponents = {
    personalInformation: PersonalInformation,
    contactInformation: ContactInformation,
    summary: Summary,
    professionalExperience: ProfessionalExperience,
    education: Education,
    technicalSkills: TechnicalSkills,
    softSkills: SoftSkills,
    languages: Languages,
    projects: Projects,
    certifications: Certifications,
    awardsHonors: AwardsHonors,
    hobbiesInterests: HobbiesInterests,
    references: References,
  };

  const renderedSections = sections.filter((s) => {
    return cv.data.some((d) => Object.keys(d)[0] === String(s.section_id));
  });

  return (
    <>
      {renderedSections.map((section) => {
        const Component = sectionComponents[section.section_label];
        if (!Component) return null;

        const sectionData =
          cv.data.find(
            (d) => Object.keys(d)[0] === String(section.section_id)
          )?.[section.section_id] || {};

        return (
          <SectionControllers key={section.section_id} section={section}>
            <Component section={section} sectionData={sectionData} />
          </SectionControllers>
        );
      })}
    </>
  );
};
