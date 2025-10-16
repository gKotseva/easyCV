import { useState } from "react";
import { SectionCards } from "./SectionCards";

export const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSections = () => setIsOpen((prev) => !prev);

  return (
    <div className="side-bar-container">
      <button
        onClick={toggleSections}
        style={{
          padding: "0.5em 1em",
          borderRadius: "8px",
          border: "none",
          background: "#4f46e5",
          color: "#fff",
          cursor: "pointer",
          marginBottom: "1em",
        }}
      >
        {isOpen ? "Hide Sections" : "Show Sections"}
      </button>

      {isOpen && <SectionCards />}
    </div>
  );
};
