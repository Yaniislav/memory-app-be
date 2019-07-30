const express = require("express");
const app = express();
const routes = require("./v1");

app.use("/api", routes);

module.exports = app;
