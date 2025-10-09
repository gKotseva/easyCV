const router = require("express").Router();

const cv = require("./controllers/cv");

router.use("/api/cv", cv);

module.exports = router;
