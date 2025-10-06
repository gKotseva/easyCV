import {
  PersonalInformation,
  ContactInformation,
  Summary,
  ProfessionalExperience,
  Education,
  TechnicalSkills,
  SoftSkills,
  Languages,
  Projects,
  Certifications,
  AwardsHonors,
  HobbiesInterests,
  References,
} from "../../Test";
import { SectionControllers } from "./SectionControllers";
import { useCV } from "../../context/CV";

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
