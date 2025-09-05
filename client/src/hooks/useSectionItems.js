import { useCV } from "../context/CV";

export const useSectionItems = () => {
  const { CV, setCV } = useCV();

  const handleSave = (value, section, label, index) => {
    setCV((prev) => {
      const prevData =
        prev.data?.[section.section_id] || (section.multiple ? [] : {});

      return {
        ...prev,
        data: {
          ...prev.data,
          [section.section_id]: section.multiple
            ? [...(prevData.length ? prevData : [{}])].map((obj, i) =>
                i === index ? { ...obj, [label]: value } : obj
              )
            : { ...prevData, [label]: value },
        },
      };
    });
  };

  const handleAddMore = (section) => {
    setCV((prev) => {
      const prevData = prev.data?.[section.section_id];

      const newEntry = {};
      section.fields.forEach((f) => (newEntry[f] = ""));

      return {
        ...prev,
        data: {
          ...prev.data,
          [section.section_id]: section.multiple
            ? [...(prevData || []), newEntry]
            : { ...prevData, ...newEntry },
        },
      };
    });
  };

  const handleRemove = (sectionId, index) => {
    setCV((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        [sectionId]: prev.data[sectionId].filter((_, i) => i !== index),
      },
    }));
  };

  return {
    handleSave,
    handleAddMore,
    handleRemove,
  };
};
