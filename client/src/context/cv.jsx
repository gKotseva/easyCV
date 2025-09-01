import { createContext, useContext, useEffect, useState } from "react";
import { getCV, getSections } from "../handlers/cv";
import { mergeCVData } from "../utils/cvHelpers";

const CVContext = createContext();

export function CVProvider({ children }) {
  // const [isCVNew, setIsCVNew] = useState(false);
  const [isCVNew, setIsCVNew] = useState(true);
  const [CV, setCV] = useState(null);
  const [sections, setSections] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let cv;
      if (!isCVNew) {
        cv = await getCV();
        setCV(cv);
      }

      const responseSections = await getSections();
      setSections(responseSections);

      const merged = mergeCVData(cv, responseSections);

      setCV((prev) => ({
        ...prev,
        data: merged,
      }));
    };
    fetchData();
  }, [isCVNew]);

  return (
    <CVContext.Provider value={{ CV, sections, setCV }}>
      {children}
    </CVContext.Provider>
  );
}

export const useCV = () => useContext(CVContext);
