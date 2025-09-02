import "./styles.css";
import { useSectionItems } from "../../hooks/useSectionItems";
import { InlineEdit } from "../InlineEdit";

export const Work = ({ theme, section, data, styling }) => {
  const { handleSave, handleAddMore, handleRemove } = useSectionItems();

  return (
    <div className={`section-container ${theme}`}>
      <h3 className="section-title">{section.section_name}</h3>
      <div className={section.section_label}>
        {data.map((entry, entryIndex) => (
          <div key={entryIndex} className="entries">
            <div className="entry">
              {Object.entries(entry).map(([field, value]) => {
                if (field === "start_date") {
                  return (
                    <div
                      data-field="dates"
                      className="dates-container"
                      key="dates"
                    >
                      <InlineEdit
                        initialValue={entry.start_date || "Enter start_date"}
                        onSave={(newValue) =>
                          handleSave(
                            newValue,
                            section,
                            "start_date",
                            entryIndex
                          )
                        }
                      />
                      {" - "}
                      <InlineEdit
                        initialValue={entry.end_date || "Enter end_date"}
                        onSave={(newValue) =>
                          handleSave(newValue, section, "end_date", entryIndex)
                        }
                      />
                    </div>
                  );
                }

                if (field === "end_date") return null;

                return (
                  <div data-field={field} key={field}>
                    <InlineEdit
                      initialValue={value || `Enter ${field}`}
                      onSave={(newValue) =>
                        handleSave(newValue, section, field, entryIndex)
                      }
                    />
                  </div>
                );
              })}
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
