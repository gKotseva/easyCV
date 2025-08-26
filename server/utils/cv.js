exports.cvFields = (sections) => {
  return sections.map((section) => {
    switch (section.cv_section_name) {
      case "Contact Information":
        section.fields = ["full_name", "email", "phone", "address"];
        section.multiple = false;
        break;

      case "Summary":
        section.fields = ["summary"];
        break;

      case "Work Experience":
        section.fields = [
          "job_title",
          "company",
          "start_date",
          "end_date",
          "description",
        ];
        section.multiple = true;
        break;

      case "Education":
        section.fields = [
          "school",
          "degree",
          "start_date",
          "end_date",
          "description",
        ];
        break;

      case "Technical Skills":
        section.fields = ["skill"];
        break;

      case "Soft Skills":
        section.fields = ["skill"];
        section.multiple = true;
        break;

      case "Languages":
        section.fields = ["language", "level"];
        break;

      case "Projects":
        section.fields = ["project_name", "description", "technologies"];
        break;

      default:
        section.fields = [];
    }

    return section;
  });
};

exports.buildSections = (sections) => {
  const cvData = {};

  sections.forEach((section) => {
    const sectionObj = {};

    section.fields.forEach((field) => {
      sectionObj[field] = section.values?.[field] ?? null;
    });

    cvData[section.section_id] = sectionObj;
  });

  return cvData;
};
