import { useCV } from "../context/CV";
import { SectionControllers } from "./SectionControllers";
import { Contact } from "./Sections/Contact";
import { Education } from "./Sections/Education";
import { Introduction } from "./Sections/Introduction";
import { SoftSkills } from "./Sections/SoftSkills";
import { Summary } from "./Sections/Summary";
import { TechnicalSkills } from "./Sections/TechnicalSkills";
import { Work } from "./Sections/Work";

export const SectionRenderer = ({ testTheme }) => {
  const { CV, sections } = useCV();

  if (!sections) return <div>Loading....</div>;

  const components = {
    soft_skills: SoftSkills,
    introduction: Introduction,
    education: Education,
    work_experience: Work,
    summary: Summary,
    technical_skills: TechnicalSkills,
    contact: Contact,
  };

  return sections.map((section) => {
    const Component = components[section.section_label];
    return Component ? (
      <SectionControllers>
        <Component
          theme={CV?.theme || testTheme}
          section={section}
          data={CV?.data?.[section.section_id] || section.fields}
          styling={CV?.style?.[section.section_id] || []}
        />
      </SectionControllers>
    ) : null;
  });
};
