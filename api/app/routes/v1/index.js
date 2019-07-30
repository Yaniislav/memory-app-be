const express = require("express");
const app = express();
const router = express.Router();
const generateNumbers = require('../../utils/numberGenerator');

router.get("/numbers", (req, res) => {
  const { query: { count } } = req;
  const data = generateNumbers(count);
  res.json({ data });
});

app.use("/", router);

module.exports = app;
