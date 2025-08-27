import "./styles.css";

import { useCV } from "../../contexts/CV";
import { InlineEdit } from "../InlineEdit";

export const SoftSkills = ({ theme, section }) => {
  const { updateField } = useCV();

  const handleSave = (value, section_id, field, idx) => {
    updateField(section_id, field, value, idx);
  };

  return (
    <>
      <div className={`section-container ${theme}`}>
        <h1 className="section-title">{section.section_name}</h1>
        <div className="section-body">
          <div className={`${section.section_label}-entry`}>
            {section.fields.map((field) =>
              section.values?.map((entry, idx) => (
                <div key={idx} className={`field ${field}`}>
                  <InlineEdit
                    initialValue={entry[field] || ""}
                    onSave={(value) =>
                      handleSave(value, section.section_id, field, idx)
                    }
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};
