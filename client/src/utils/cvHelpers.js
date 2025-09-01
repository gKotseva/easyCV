export const mergeCVData = (cv, responseSections) => {
  const merged = { ...(cv?.data || {}) };

  responseSections.forEach(({ section_id, fields, multiple }) => {
    if (merged[section_id]) return;

    const emptyObj = {};
    fields.forEach((f) => (emptyObj[f] = ""));

    merged[section_id] = multiple ? [emptyObj] : emptyObj;
  });

  return merged;
};
