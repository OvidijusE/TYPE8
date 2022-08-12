const express = require("express");
const cors = require("cors");

const { port } = require("./config");
const { people } = require("./data/db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  response.json("Opa");
});

app.get("/api/names", (request, response) => {
  response.json(people);
});

app.post("/api/names", (request, response) => {
  const newNameObj = request.body;
  console.log("newNameObj ===", newNameObj);
  people.push(newNameObj);
  response.status(201).json({
    success: true,
    msg: "Name created",
  });
});

app.listen(port, () => console.log("Express online:", port));
