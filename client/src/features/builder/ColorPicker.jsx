import "./ColorPicker.modules.css";

import { useState } from "react";
import { HexColorPicker } from "react-colorful";

export const ColorPicker = () => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState("#fffff");

  const handleChange = (e) => {
    setColor(e);
  };

  return (
    <div className="color-picker">
      <h5>Choose color</h5>
      <div onClick={() => setOpen(!open)} className="color-panel">
        <span
          style={{
            background: color,
            height: "30px",
            width: "30px",
            borderRadius: "50%",
            border: "1px solid grey",
          }}
        ></span>
        {color}
        <p>{" > "}</p>
      </div>
      {open && (
        <HexColorPicker
          color={color}
          onChange={handleChange}
          className="color-pallete"
        />
      )}
    </div>
  );
};
