import "./styles.css";
import { useSectionItems } from "../../hooks/useSectionItems";
import { InlineEdit } from "../InlineEdit";

export const Introduction = ({ theme, section, data, styling }) => {
  const { handleSave } = useSectionItems();
  return (
    <div className={`section-container ${theme}`} styling={{ styling }}>
      <h1>
        <InlineEdit
          initialValue={data.name || "Enter name"}
          onSave={(value) => handleSave(value, section, "name")}
        />
      </h1>
    </div>
  );
};
