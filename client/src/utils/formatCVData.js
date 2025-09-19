export const formatCVData = (sections) => {
  const data = [];

  sections.map((section) => {
    const obj = section.section_fields.reduce(
      (a, v) => ({ ...a, [v]: "" }),
      {}
    );

    section.section_multiple
      ? data.push({ [section.section_id]: [obj] })
      : data.push({ [section.section_id]: obj });
  });

  return data;
};
