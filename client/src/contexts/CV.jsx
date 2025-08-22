import { createContext, useContext, useEffect, useState } from "react";
import { getSections } from "../handlers/cv";

const CVContext = createContext();

export function CVProvider({ children }) {
  const [name, setName] = useState("");
  const [columns, setColumns] = useState(1);
  const [theme, setTheme] = useState("theme1");
  const [styling, setStyling] = useState({});
  const [sections, setSections] = useState([]);
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    const fetchSections = async () => {
      const data = await getSections();
      setSections(data);
    };
    fetchSections();
  }, []);

  const updateField = async (sectionId, field, value) => {
    setHasChanges(true);
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.section_id === sectionId
          ? {
              ...section,
              values: {
                ...(section.values || {}),
                [field]: value,
              },
            }
          : section
      )
    );
  };

  const saveCV = async () => {
    setHasChanges(false);
  };

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (hasChanges) {
        e.preventDefault();
        e.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [hasChanges]);

  return (
    <CVContext.Provider
      value={{ columns, theme, styling, sections, updateField, saveCV }}
    >
      {children}
    </CVContext.Provider>
  );
}

export const useCV = () => useContext(CVContext);
