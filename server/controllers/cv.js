const {
  getSections,
  saveCV,
  updateCV,
  getDocuments,
} = require("../db/cvQueries");
const { buildSections } = require("../utils/cv");

const router = require("express").Router();

router.get("/sections", async (req, res) => {
  try {
    const data = await getSections();

    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/save", async (req, res) => {
  const { name, columns, theme, styling, sections, cvId } = req.body;
  try {
    const cvData = buildSections(sections);
    const response = await saveCV(
      1,
      name,
      theme,
      columns,
      JSON.stringify(cvData)
    );

    res.status(201).json({ cvId: response.insertId });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/update", async (req, res) => {
  const { name, columns, theme, styling, sections, cvId } = req.body;
  try {
    const cvData = buildSections(sections);
    const response = await updateCV(
      name,
      theme,
      columns,
      JSON.stringify(cvData),
      cvId
    );
    res.status(201).json({ response });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/documents", async (req, res) => {
  const { userId } = req.query;
  try {
    const documents = await getDocuments(userId);
    const sections = await getSections();
    const formattedDocuments = documents.map((doc) => {
      const mergedSections = sections.map((section) => ({
        ...section,
        values: doc.data?.[section.section_id] || (section.multiple ? [] : {}),
      }));

      return {
        ...doc,
        sections: mergedSections,
      };
    });

    res.status(201).json(formattedDocuments);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
