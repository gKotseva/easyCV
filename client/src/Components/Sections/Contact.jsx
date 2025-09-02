import "./styles.css";
import { useSectionItems } from "../../hooks/useSectionItems";
import { InlineEdit } from "../InlineEdit";

export const Contact = ({ theme, section, data, styling }) => {
  const { handleSave } = useSectionItems();

  const entry = Array.isArray(data) ? data[0] : data;

  return (
    <div className={`section-container ${theme}`}>
      <h3 className="section-title">{section.section_name}</h3>
      <div className={section.section_label}>
        {Object.entries(entry).map(([field, value]) => (
          <div key={field} className="field" data-field={field} style={styling}>
            <InlineEdit
              initialValue={value || `Enter ${field}`}
              onSave={(newValue) => handleSave(newValue, section, field)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
