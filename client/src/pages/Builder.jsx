import { BuilderNav } from "../components/Builder/BuilderNav";
import { BuilderSide } from "../components/Builder/BuilderSide";
import { CVEditor } from "../components/Builder/CVEditor";

export const Builder = () => {
  return (
    <div
      className="builder-page-container"
      style={{ background: "#1f252d", color: "white" }}
    >
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
