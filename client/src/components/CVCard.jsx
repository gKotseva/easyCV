import "./CVCard.modules.css";

import { SectionRenderer } from "./SectionRenderer";

export const CVCard = () => {
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
              <h4 className="control-cv animation-up">...</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
