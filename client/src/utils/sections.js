export const reorderSections = (columns, layout, sections) => {
  const mapLabelsToSections = (labels) =>
    labels
      .map((label) => sections.find((s) => s.section_label === label))
      .filter(Boolean);

  const layouts = {
    1: {
      default: [
        "introduction",
        "contact",
        "summary",
        "work_experience",
        "education",
        "soft_skills",
        "technical_skills",
      ],
    },
    2: {
      layout1: {
        full: ["introduction", "contact"],
        column1: ["soft_skills", "technical_skills"],
        column2: ["summary", "work_experience", "education"],
      },
      layout2: {
        full: ["introduction", "contact"],
        column2: ["soft_skills", "technical_skills"],
        column1: ["summary", "work_experience", "education"],
      },
      layout3: {
        column1: ["contact", "soft_skills", "technical_skills"],
        column2: ["introduction", "summary", "work_experience", "education"],
      },
      layout4: {
        column2: ["contact", "soft_skills", "technical_skills"],
        column1: ["introduction", "summary", "work_experience", "education"],
      },
      layout5: {
        full: ["introduction"],
        column1: ["contact", "soft_skills", "technical_skills"],
        column2: ["summary", "work_experience", "education"],
      },
      layout6: {
        full: ["introduction"],
        column2: ["contact", "soft_skills", "technical_skills"],
        column1: ["summary", "work_experience", "education"],
      },
    },
  };

  const desiredOrder =
    layouts[columns]?.[layout] || layouts[columns]?.default || sections;

  if (Array.isArray(desiredOrder)) {
    return mapLabelsToSections(desiredOrder);
  }

  return Object.fromEntries(
    Object.entries(desiredOrder).map(([key, labels]) => [
      key,
      mapLabelsToSections(labels),
    ])
  );
};
