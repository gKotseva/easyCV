import "./SidePanel.modules.css";

import { useState } from "react";
import { Sections } from "./Sections";
import { ColorPicker } from "./ColorPicker";

import { IoColorPaletteSharp } from "react-icons/io5";
import { TbSection } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import { FaCircleArrowLeft } from "react-icons/fa6";

export const SidePanel = ({ color, setColor }) => {
  const [activePanel, setActivePanel] = useState(null);

  const togglePanel = (panel) => {
    setActivePanel((prev) => (prev === panel ? null : panel));
  };

  return (
    <>
      <div className="side-panel">
        <FaCircleArrowLeft className="go-back" />
        <div className="panel-item" onClick={() => togglePanel("sections")}>
          <TbSection size="35px" color="grey" />
          <h5>Sections</h5>
          <IoIosArrowForward />
        </div>
        <div className="panel-item" onClick={() => togglePanel("colors")}>
          <IoColorPaletteSharp size="35px" color="grey" />
          <h5>Colors</h5>
          <IoIosArrowForward />
        </div>
      </div>

      {activePanel === "colors" && (
        <ColorPicker color={color} setColor={setColor} />
      )}
      {activePanel === "sections" && <Sections />}
    </>
  );
};
