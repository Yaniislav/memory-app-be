const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const app = express();
const routes = require("./routes");
const { port } = require("./config");
const cors = require("cors");

const server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use("/", routes);

app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    errors: err.errors
  });
});

server.listen(port, () => {
  console.log(`server started port ${port}`);
});
