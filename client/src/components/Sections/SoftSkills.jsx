import "./styles.css";
import { useSectionItems } from "../../hooks/useSectionItems";
import { InlineEdit } from "../InlineEdit";

export const SoftSkills = ({ theme, section, data, styling }) => {
  const { handleSave, handleAddMore, handleRemove } = useSectionItems();
  return (
    <div className={`section-container ${theme}`}>
      <h3 className="section-title">{section.section_name}</h3>
      <div className={section.section_label}>
        {data.map(({ skill_name }, index) => (
          <div className={`${section.section_label}`} key={index}>
            <div className="field" style={styling}>
              <InlineEdit
                initialValue={skill_name || "Enter skill"}
                onSave={(value) =>
                  handleSave(value, section, "skill_name", index)
                }
              />
            </div>
            <div className="remove">
              <button
                onClick={() => handleRemove(section.section_id, index)}
                className="remove-entry"
              >
                x
              </button>
            </div>
          </div>
        ))}
      </div>
      {section.multiple && (
        <button
          onClick={() => handleAddMore(section)}
          className="add-more-button"
        >
          Add more
        </button>
      )}
    </div>
  );
};
