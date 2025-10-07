import { useCV } from "../../context/CV";
import { SectionInnerControllers } from "../Builder/SectionInnerControllers";
import { InlineEdit } from "../InlineEdit";

export const SoftSkills = ({ section, sectionData }) => {
  const { editCV } = useCV();

  return (
    <div className={`${section.section_label}-container`}>
      <div className={`${section.section_label}-heading`}>
        <h1>{section.section_name}</h1>
      </div>
      <div className={`${section.section_label}-body`}>
        {sectionData.map((item, idx) => (
          <div className="section-item-wrapper" key={idx}>
            {section.section_fields.map((field) => (
              <InlineEdit
                key={field}
                field={field}
                initialValue={item[field] || ""}
                onSave={(newValue) => editCV(section, field, newValue, idx)}
              />
            ))}
            <SectionInnerControllers section={section} removeId={idx} />
          </div>
        ))}
      </div>
    </div>
  );
};
