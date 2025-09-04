import "./styles.css";
import { useSectionItems } from "../../hooks/useSectionItems";
import { InlineEdit } from "../InlineEdit";
import { InnerControllers } from "../SectionControllers";

export const TechnicalSkills = ({ theme, section, data, styling }) => {
  const { handleSave, handleAddMore, handleRemove } = useSectionItems();

  return (
    <div className={`section-container ${theme}`}>
      <h3 className="section-title">{section.section_name}</h3>
      <div className={section.section_label}>
        {data.map(({ skill_name }, index) => (
          <div key={index} className={`${section.section_label}`}>
            <div className="field" style={styling}>
              <InlineEdit
                initialValue={skill_name || "Enter skill"}
                onSave={(value) =>
                  handleSave(value, section, "skill_name", index)
                }
              />
            </div>
            <InnerControllers section={section} />
          </div>
        ))}
      </div>
    </div>
  );
};
