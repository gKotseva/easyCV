import "./Builder.modules.css";

import { BuilderNav } from "../components/BuilderNav";
import { BuilderSide } from "../components/BuilderSide";
import { CVEditor } from "../components/CVEditor";
import { useSearchParams } from "react-router-dom";

export const Builder = () => {
  const [searchParams] = useSearchParams();

  const columns = searchParams.get("columns");
  const template = searchParams.get("template");

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
        <CVEditor columns={columns} theme={template} />
      </div>
    </div>
  );
};
