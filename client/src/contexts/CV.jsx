import { createContext, useContext, useState, useEffect } from "react";
import { getDocuments, getSections, save, update } from "../handlers/cv";
import { useNavigate } from "react-router-dom";
import { useNotification } from "./Notification";

const CVContext = createContext();

export function CVProvider({ children }) {
  const navigate = useNavigate();
  const { showNotification } = useNotification();
  const [cvId, setCvId] = useState(null);
  const [userId, setUserId] = useState(1);
  const [sections, setSections] = useState([]);
  const [name, setName] = useState("");
  const [columns, setColumns] = useState(1);
  const [theme, setTheme] = useState("theme1");
  const [styling, setStyling] = useState({});
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    const loadDefaultSections = async () => {
      const defaultSections = await getSections();
      setSections(defaultSections);
    };
    loadDefaultSections();
  }, []);

  const loadCV = async (cvId, cvData) => {
    if (!cvId) {
      const response = await getSections();
      setSections(response);
      navigate(`/builder`);
    } else {
      const mergedSections = (await getSections()).map((section) => ({
        ...section,
        values: cvData.data[section.section_id] || {},
      }));
      setSections(mergedSections);
      setCvId(cvId);
      setName(cvData.title);
      setTheme(cvData.theme);
      setColumns(cvData.columns);
      setStyling(cvData.styling || {});
      navigate(`/builder/${cvId}`);
    }
  };

  const updateField = (sectionId, field, value, idx = null) => {
    setHasChanges(true);

    setSections((prevSections) =>
      prevSections.map((s) => {
        if (s.section_id === sectionId) {
          if (s.multiple === 0) {
            return { ...s, values: { ...(s.values || {}), [field]: value } };
          } else if (s.multiple === 1) {
            const updatedValues = [...(s.values || [])];
            if (idx !== null && updatedValues[idx]) {
              updatedValues[idx] = { ...updatedValues[idx], [field]: value };
            }
            return { ...s, values: updatedValues };
          }
        }
        return s;
      })
    );
  };

  const saveCV = async () => {
    if (!name) {
      showNotification("Please enter a title for your CV", "error");
      return;
    }

    setHasChanges(false);
    let response;
    if (cvId !== null) {
      response = await update(name, columns, theme, styling, sections, cvId);
    } else {
      response = await save(name, columns, theme, styling, sections, userId);
      setCvId(response.cvId);
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
        loadCV,
        updateField,
        saveCV,
        setName,
        sections,
        name,
        columns,
        theme,
        styling,
      }}
    >
      {children}
    </CVContext.Provider>
  );
}

export const useCV = () => useContext(CVContext);
