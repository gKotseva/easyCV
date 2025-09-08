import "./Builder.modules.css";

import { BuilderNav } from "../components/Builder/BuilderNav";
import { BuilderSide } from "../components/Builder/BuilderSide";
import { CVEditor } from "../components/Builder/CVEditor";

export const Builder = () => {
  return (
    <div className="builder-page-container">
      <BuilderNav />
      <div
        className="builder-body"
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "1em",
          marginTop: "2em",
        }}
      >
        <BuilderSide />
        <CVEditor />
      </div>
    </div>
  );
};
