import { useState } from "react";
import "./CVCard.modules.css";

import { SectionRenderer } from "./SectionRenderer";

export const CVCard = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="card-container">
      <div className="body">
        <div className="card animation-up">
          <div className="card-preview">
            <div className="cv-preview-wrapper">
              <SectionRenderer testTheme={"theme4"} />
            </div>
          </div>
          <div className="card-data">
            <h4>CV Name</h4>
            <div className="card-data-row">
              <p>Modified on:</p>
              <div className="menu-wrapper">
                <h4
                  className="control-cv animation-up"
                  onClick={() => setOpen(!open)}
                >
                  ...
                </h4>
                <div className={`dropdown-menu ${open ? "show" : ""}`}>
                  <button>Rename</button>
                  <button>Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
