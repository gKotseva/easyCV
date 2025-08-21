import "./styles.css";

import { useCV } from "../../contexts/CV";
import { InlineEdit } from "../InlineEdit";

export const Work = ({ theme, section }) => {
  const { updateField } = useCV();

  const handleSave = (value, section_id, field) => {
    updateField(section_id, field, value);
  };

  return (
    <>
      <div className={`section-container ${theme}`}>
        <h1 className="section-title">{section.section_name}</h1>
        <div className="section-body">
          <div className={`${section.section_label}-entry`}>
            {section.fields.map((field, i) => {
              if (field === "start_date") {
                return (
                  <div key="dates" className="field field-dates">
                    <div className="start_date">{field} - </div>
                    <div className="end_date">{section.fields[i + 1]}</div>
                  </div>
                );
              }
              if (field === "end_date") return null;
              return (
                <div key={field} className={`field ${field}`}>
                  <InlineEdit
                    initialValue={field}
                    onSave={(value) =>
                      handleSave(value, section.section_id, field)
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
