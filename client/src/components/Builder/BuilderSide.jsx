import "./BuilderSide.modules.css";
import { MdOutlineFolderShared } from "react-icons/md";
import { TbTemplate } from "react-icons/tb";

export const BuilderSide = () => {
  return (
    <div className="side">
      <div className="content-card animation-up">
        <MdOutlineFolderShared />
        <p>My Content</p>
      </div>
      <div className="templates-card animation-up">
        <TbTemplate />
        <p>Templates</p>
      </div>
    </div>
  );
};
