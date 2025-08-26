const { getSections, saveCV, updateCV } = require("../db/cvQueries");
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
    await updateCV(1, name, theme, columns, JSON.stringify(cvData), cvId);

    res.status(201);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
