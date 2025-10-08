export const formatCVData = (sections) => {
  const data = [];

  sections.forEach((section) => {
    const obj = section.section_fields.reduce(
      (a, v) => ({ ...a, [v]: "" }),
      {}
    );

    if (section.section_multiple) {
      const objWithId = { ...obj, _internalId: Date.now() };
      data.push({ [section.section_id]: [objWithId] });
    } else {
      data.push({ [section.section_id]: obj });
    }
  });

  return data;
};
