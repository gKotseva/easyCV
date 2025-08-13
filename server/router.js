const router = require("express").Router();
const auth = require("./controllers/auth");

router.use("/api/auth", auth);

module.exports = router;
