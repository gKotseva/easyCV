import { createContext, useContext, useEffect, useState } from "react";
import { getSections, save, update } from "../handlers/cv";
import { useNotification } from "./Notification";

const CVContext = createContext();

export function CVProvider({ children }) {
  const { showNotification } = useNotification();

  const [id, setId] = useState(null);
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
    if (!name) {
      showNotification("Please enter a title for your CV", "error");
      return;
    }

    setHasChanges(false);
    let response;
    if (id !== null) {
      console.log(name);
      response = await update(name, columns, theme, styling, sections, id);
    } else {
      console.log(name);
      response = await save(name, columns, theme, styling, sections, id);
      setId(response.cvId);
    }

    showNotification("CV Saved", "success");
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
      value={{
        columns,
        theme,
        styling,
        sections,
        updateField,
        saveCV,
        name,
        setName,
      }}
    >
      {children}
    </CVContext.Provider>
  );
}

export const useCV = () => useContext(CVContext);
