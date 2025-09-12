const {
  documents,
  deleteDocument,
  renameDocument,
  getSections,
} = require("../db/cvQueries");

const router = require("express").Router();

router.get("/documents", async (req, res) => {
  const { userId } = req.query;

  try {
    const result = await documents(userId);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/delete", async (req, res) => {
  const { cvId } = req.body;

  try {
    const result = await deleteDocument(cvId);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/rename", async (req, res) => {
  const { cvId, title } = req.body;

  try {
    const result = await renameDocument(cvId, title);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/sections", async (req, res) => {
  try {
    const result = await getSections();
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
