const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const { port } = require("./config");
const { cars } = require("./data/db");

const app = express();

app.use(express());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json("ok");
});

app.get("/cars/:model", (req, res) => {
  const carsBrand = req.params.model;
  //   console.log("carsBrand ===", carsBrand);

  //   res.json(cars[carsBrand]);
  res.json(cars[carsBrand]);
});

app.listen(port, () => console.log("Server online : ", port));
