import "./Builder.modules.css";

import { useCV } from "../../contexts/CV";
import { CVRenderer } from "./CVRenderer";
import { CVControllers } from "../CVControllers";

export const Builder = () => {
  const { columns, theme, styling, sections, saveCV, name, setName } = useCV();

  return (
    <div className="builder-container">
      <div className="side-container">
        <div className="cv-name">
          <label>Document title</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div className="body-container">
        <div className="action-buttons">
          <CVControllers saveHandler={saveCV} />
        </div>
        <div className="cv-container">
          <CVRenderer sections={sections} theme={theme} />
        </div>
      </div>
    </div>
  );
};
