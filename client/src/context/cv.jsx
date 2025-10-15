import { createContext, useContext, useState } from "react";
import { formatCVData } from "../utils/formatCVData";
import { useEffect } from "react";
import { getSections } from "../handlers/cv";

export const CVContext = createContext();

export function CVProvider({ children }) {
  const [sections, setSections] = useState(null);
  const [cv, setCv] = useState(() => ({
    cv_id: "9",
    user_id: "1",
    title: "Gabi",
    data: {},
  }));

  useEffect(() => {
    const fetchSections = async () => {
      const response = await getSections();
      const formattedSections = formatCVData(response);

      setCv((prev) => ({
        ...prev,
        data: formattedSections,
      }));

      setSections(response);
    };

    fetchSections();
  }, []);

  const editCV = (section, field, newValue, id) => {
    setCv((prev) => {
      const newData = prev.data.map((d) => {
        const key = Object.keys(d)[0];

        if (Number(key) === section.section_id) {
          const value = d[key];

          if (section.section_multiple) {
            const updatedValue = value.map((item) =>
              item._internalId === id ? { ...item, [field]: newValue } : item
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
            {
              _internalId: Date.now(),
              ...Object.fromEntries(section.section_fields.map((f) => [f, ""])),
            },
          ];

          return { [key]: updatedArray };
        }

        return d;
      });

      return { ...prev, data: newData };
    });
  };

  const removeSectionItem = (section, idToRemove) => {
    setCv((prev) => {
      const newData = prev.data.map((d) => {
        const key = Object.keys(d)[0];

        if (Number(key) === section.section_id && section.section_multiple) {
          const updatedArray = d[key].filter(
            (item) => item._internalId !== idToRemove
          );
          return { [key]: updatedArray };
        }

        return { ...d };
      });

      return { ...prev, data: newData };
    });
  };

  const addSection = (section) => {
    const formatted = formatCVData([section]);

    setCv((prev) => ({
      ...prev,
      data: [...prev.data, ...formatted],
    }));
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
        addSection,
      }}
    >
      {children}
    </CVContext.Provider>
  );
}

export const useCV = () => useContext(CVContext);
