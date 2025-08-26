const router = require("express").Router();
const auth = require("./controllers/auth");
const cv = require("./controllers/cv");

router.use("/api/auth", auth);
router.use("/api/cv", cv);

module.exports = router;
