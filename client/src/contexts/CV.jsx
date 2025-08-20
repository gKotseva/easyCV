import { createContext, useContext, useEffect, useState } from "react";
import { getSections } from "../handlers/cv";

const CVContext = createContext();

export function CVProvider({ children }) {
  const [columns, setColumns] = useState(1);
  const [theme, setTheme] = useState("theme1");
  const [styling, setStyling] = useState({});
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetchSections = async () => {
      const data = await getSections();
      setSections(data);
    };
    fetchSections();
  }, []);

  return (
    <CVContext.Provider value={{ columns, theme, styling, sections }}>
      {children}
    </CVContext.Provider>
  );
}

export const useCV = () => useContext(CVContext);
