import "./Builder.modules.css";

import { Preview } from "../features/builder/Preview";
import { SidePanel } from "../features/builder/SidePanel";
import { Toolbar } from "../features/builder/Toolbar";

export const Builder = () => {
  return (
    <div className="builder-container">
      <div className="side-container">
        <SidePanel />
      </div>
      <div className="main-container">
        <Toolbar />
        <Preview />
      </div>
    </div>
  );
};
