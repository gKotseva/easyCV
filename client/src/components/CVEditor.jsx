import "./CVEditor.modules.css";

import { SectionRenderer } from "./SectionRenderer";

export const CVEditor = ({ columns, theme }) => {
  return (
    <div className="cv-container">
      <div className="formatting-name">
        <input placeholder="My Resume" />
      </div>
      <div className="preview">
        <SectionRenderer columns={columns} theme={theme} />
      </div>
    </div>
  );
};
