import "./styles.css";
import { useSectionItems } from "../../hooks/useSectionItems";
import { InlineEdit } from "../InlineEdit";

export const Education = ({ theme, section, data, styling }) => {
  const { handleSave, handleAddMore, handleRemove } = useSectionItems();

  return (
    <div className={`section-container ${theme}`}>
      <h3 className="section-title">{section.section_name}</h3>
      <div className={section.section_label}>
        {data.map((entry, entryIndex) => (
          <div key={entryIndex} className="entries">
            <div className="entry">
              {Object.entries(entry).map(([field, value]) => (
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
            <div className="remove">
              <button
                className="remove-entry"
                onClick={() => handleRemove(section.section_id, entryIndex)}
              >
                x
              </button>
            </div>
          </div>
        ))}
        {section.multiple && (
          <button
            onClick={() => handleAddMore(section)}
            className="add-more-button"
          >
            Add more
          </button>
        )}
      </div>
    </div>
  );
};
