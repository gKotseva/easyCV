import { createContext, useContext, useState } from "react";

export const CVContext = createContext();

export function CVProvider({ children }) {
  const [cv, setCv] = useState({
    cv_id: "9",
    user_id: "1",
    title: "Gabi",
    data: {
      personalInformation: {
        fullName: "Gabriela Kotseva",
      },
    },
  });

  const editCV = (section, field, newValue) => {
    setCv((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        [section.section_label]: {
          ...(prev.data?.[section.section_label] || {}),
          [field]: newValue,
        },
      },
    }));
  };

  console.log(cv);

  return (
    <CVContext.Provider value={{ cv, setCv, editCV }}>
      {children}
    </CVContext.Provider>
  );
}

export const useCV = () => useContext(CVContext);
