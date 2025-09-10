import "./styles.css";
import { useSectionItems } from "../../hooks/useSectionItems";
import { InlineEdit } from "../InlineEdit";

export const Summary = ({ theme, section, data, styling }) => {
  const { handleSave } = useSectionItems();

  return (
    <div className={`section-container ${theme}`}>
      <h3 className="section-title">{section.section_name}</h3>
      <div className={section.section_label}>
        <div data-field={data} key={data}>
          <InlineEdit
            initialValue={data.value || `Enter ${data}`}
            onSave={(newValue) => handleSave(newValue, section, data)}
          />
        </div>
      </div>
    </div>
  );
};
