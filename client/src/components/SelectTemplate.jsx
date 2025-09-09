import { useState } from "react";
import "./SelectTemplate.modules.css";

export const SelectTemplate = () => {
  const [columns, setColumns] = useState(null);
  const [template, setTemplate] = useState(null);

  const handleColumnSelection = (columns) => {
    setColumns(columns);
  };

  const handleTemplateSelection = (template) => {
    setTemplate(template);
  };

  return (
    <div className="select-container">
      <div className="columns">
        <div className="heading">
          <h4>How many columns would you like?</h4>
        </div>
        <div className="options">
          <h2 onClick={() => handleColumnSelection(1)} className="animation-up">
            1 Column
          </h2>
          <h2 onClick={() => handleColumnSelection(2)} className="animation-up">
            2 Columns
          </h2>
        </div>
      </div>
      {columns && (
        <div className="templates">
          <div className="heading">
            <h4>Which template do you like the most?</h4>
          </div>
          <div className="options">
            <h2
              onClick={() => handleTemplateSelection("template1")}
              className="animation-up"
            >
              Template 1
            </h2>
            <h2
              onClick={() => handleTemplateSelection("template2")}
              className="animation-up"
            >
              Template 2
            </h2>
            <h2
              onClick={() => handleTemplateSelection("template3")}
              className="animation-up"
            >
              Template 3
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};
