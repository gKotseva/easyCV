import { useCV } from "../../context/CV";
import { InlineEdit } from "../InlineEdit";

export const ContactInformation = ({ section, sectionData }) => {
  const { editCV } = useCV();

  return (
    <div className={`${section.section_label}-container`}>
      <div className={`${section.section_label}-heading`}>
        <h1>{section.section_name}</h1>
      </div>
      <div className={`${section.section_label}-body`}>
        {section.section_fields.map((field, id) => (
          <InlineEdit
            key={id}
            field={field}
            initialValue={sectionData[field] || ""}
            onSave={(newValue) => editCV(section, field, newValue)}
          />
        ))}
      </div>
    </div>
  );
};
