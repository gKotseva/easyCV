import "./styles.css";
import { useSectionItems } from "../../hooks/useSectionItems";
import { InlineEdit } from "../InlineEdit";
import { InnerControllers } from "../SectionControllers";

export const Education = ({ theme, section, data, styling }) => {
  const { handleSave, handleAddMore, handleRemove } = useSectionItems();

  return (
    <div className={`section-container ${theme}`}>
      <h3 className="section-title">{section.section_name}</h3>
      <div className={section.section_label}>
        <div className="entries">
          <div className="entry">
            {Object.entries(data).map(([field, value]) => (
              <div data-field={field} key={field}>
                <InlineEdit
                  data-field={field}
                  initialValue={value || `Enter ${field}`}
                  onSave={(newValue) =>
                    handleSave(newValue, section, field, entryIndex)
                  }
                />
              </div>
            ))}
          </div>
          <InnerControllers section={section} />
        </div>
      </div>
    </div>
  );
};
