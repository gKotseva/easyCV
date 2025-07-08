import { Templates } from "./CVTemplates/Templates";
import "./Layouts.modules.css";

import { useState } from "react";

export const Layouts = () => {
  const [view, setView] = useState(null);

  if (view) {
    return <Templates cols={view} />;
  }

  return (
    <div className="layout-container">
      <div className="layout-container-heading">
        <h3>Please choose your CV Layout</h3>
      </div>
      <div className="layout-container-body">
        <div className="one-column">
          <p>One column layout</p>
          <img src="2.png" onClick={() => setView("one-column")} />
        </div>
        <div className="two-columns">
          <p>Two column layout</p>
          <img src="1.png" onClick={() => setView("two-column")} />
        </div>
      </div>
    </div>
  );
};
