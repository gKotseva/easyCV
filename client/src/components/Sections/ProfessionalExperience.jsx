import { useCV } from "../../context/CV";
import { SectionInnerControllers } from "../Builder/SectionInnerControllers";
import { InlineEdit } from "../InlineEdit";

export const ProfessionalExperience = ({ section, sectionData }) => {
  const { editCV } = useCV();

  return (
    <div className={`${section.section_label}-container`}>
      <div className={`${section.section_label}-heading`}>
        <h1>{section.section_name}</h1>
      </div>
      <div className={`${section.section_label}-body`}>
        {sectionData.map((item) => (
          <div className="section-item-wrapper" key={item._internalId}>
            {section.section_fields.map((field) => (
              <InlineEdit
                key={field}
                field={field}
                initialValue={item[field] || ""}
                onSave={(newValue) =>
                  editCV(section, field, newValue, item._internalId)
                }
              />
            ))}
            <SectionInnerControllers
              section={section}
              removeId={item._internalId}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
