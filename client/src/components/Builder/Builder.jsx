import "./Builder.modules.css";

import { CVControllers } from "../CVControllers";
import { ThemeRenderer } from "../ThemeRenderer";

import { useLocation } from "react-router-dom";

export const Builder = () => {
  const location = useLocation();
  const { columns, theme } = location.state || {};

  return (
    <div className="build-page-container">
      <div className="side-container"></div>
      <div className="main-container">
        <div className="cv-controllers">
          <CVControllers />
        </div>
        <div className="builder-container">
          <ThemeRenderer columns={columns} theme={theme} />
        </div>
      </div>
    </div>
  );
};
