const router = require("express").Router();
const { executeQuery } = require("../mysql");

router.get("/sections", async (req, res) => {
  try {
    const rows = await executeQuery("SELECT * FROM sections");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Database error");
  }
});

module.exports = router;
