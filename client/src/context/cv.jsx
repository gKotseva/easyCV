import { createContext, useContext, useState } from "react";
import { sections } from "../testdata";
import { formatCVData } from "../utils/formatCVData";

export const CVContext = createContext();

export function CVProvider({ children }) {
  const [cv, setCv] = useState(() => ({
    cv_id: "9",
    user_id: "1",
    title: "Gabi",
    data: formatCVData(sections),
  }));

  const editCV = (section, field, newValue, idx = 0) => {
    setCv((prev) => {
      const newData = prev.data.map((d) => {
        const key = Object.keys(d)[0];

        if (Number(key) === section.section_id) {
          const value = d[key];

          if (section.section_multiple) {
            const updatedValue = value.map((item, i) =>
              i === idx ? { ...item, [field]: newValue } : item
            );
            return { [key]: updatedValue };
          } else {
            return { [key]: { ...value, [field]: newValue } };
          }
        }

        return d;
      });

      return { ...prev, data: newData };
    });
  };

  const removeSection = (sectionId) => {
    setCv((prev) => ({
      ...prev,
      data: prev.data.filter((obj) => {
        const key = Object.keys(obj)[0];
        return Number(key) !== sectionId;
      }),
    }));
  };

  const addSectionItem = (section) => {
    setCv((prev) => {
      const newData = prev.data.map((d) => {
        const key = Object.keys(d)[0];

        if (Number(key) === section.section_id) {
          const updatedArray = [
            ...d[key],
            Object.fromEntries(section.section_fields.map((f) => [f, ""])),
          ];

          return { [key]: updatedArray };
        }

        return d;
      });

      return { ...prev, data: newData };
    });
  };

  const removeSectionItem = (section, idxToRemove) => {
    setCv((prev) => {
      const newData = prev.data.map((d) => {
        const key = Object.keys(d)[0];

        if (Number(key) === section.section_id && section.section_multiple) {
          const updatedArray = d[key].filter((_, idx) => idx !== idxToRemove);
          return { [key]: updatedArray };
        }

        return d;
      });

      return { ...prev, data: newData };
    });
  };

  return (
    <CVContext.Provider
      value={{
        cv,
        sections,
        setCv,
        editCV,
        removeSection,
        addSectionItem,
        removeSectionItem,
      }}
    >
      {children}
    </CVContext.Provider>
  );
}

export const useCV = () => useContext(CVContext);
