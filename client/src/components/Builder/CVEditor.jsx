import "./CVEditor.modules.css";
import { SectionRenderer } from "../SectionRenderer";

export const CVEditor = () => {
  return (
    <div className="cv-container">
      <div className="formatting-name">
        <input placeholder="My Resume" />
      </div>
      <div className="preview">
        <SectionRenderer testTheme={"theme4"} />
      </div>
    </div>
  );
};
