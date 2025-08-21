import "./styles.css";

import { InlineEdit } from "../InlineEdit";
import { useCV } from "../../contexts/CV";

export const ContactInformation = ({ theme, section }) => {
  const { updateField } = useCV();

  const handleSave = (value, section_id, field) => {
    updateField(section_id, field, value);
  };

  return (
    <>
      <div className={`section-container ${theme}`}>
        <h1
          className="section-title"
          style={theme === "theme3" ? { display: "none" } : null}
        >
          {section.section_name}
        </h1>
        <div className="section-body">
          <div
            className={`${section.section_label}-entry`}
            style={
              theme === "theme3"
                ? {
                    borderTop: "1px solid black",
                    borderBottom: "1px solid black",
                    padding: "1em 0em",
                  }
                : null
            }
          >
            {section.fields.map((field) => (
              <div key={field} className={`field ${field}`}>
                <InlineEdit
                  initialValue={field}
                  onSave={(value) =>
                    handleSave(value, section.section_id, field)
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
