const express = require("express");
const routes = require("./router");
const app = express();
const port = 8888;

app.use(express.json());
app.use("/", routes);

app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
