import "./ThemeSelector.modules.css";

import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { Themes } from "./Themes/Themes";

export const ThemeSelector = () => {
  const navigate = useNavigate();
  const [columns, setColumns] = useState(null);
  const themes = Themes;

  const handleColumnSelect = (count) => {
    setColumns(count);
  };

  const handleThemeSelect = (selectedTheme) => {
    navigate("/builder", { state: { columns, theme: selectedTheme } });
  };

  return (
    <div className="theme-selector-container">
      {!columns ? (
        <>
          <h2>Please choose columns</h2>
          <div className="columns">
            <div
              className="columns animation-up"
              onClick={() => handleColumnSelect("oneColumn")}
            >
              1 column
            </div>
            <div
              className="columns animation-up"
              onClick={() => handleColumnSelect("twoColumn")}
            >
              2 columns
            </div>
          </div>
        </>
      ) : (
        <>
          <h2>Please choose a theme</h2>
          <div className="themes">
            {themes[columns]?.map((theme) => (
              <div
                key={theme.name}
                className="theme-card"
                onClick={() => handleThemeSelect(theme.name)}
              >
                {theme.name}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
