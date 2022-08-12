const express = require("express");
const cors = require("cors");

const { port } = require("./config");
const { cars } = require("./data/dataBase");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  response.json("Hello");
});

app.get("/api/cars", (request, response) => {
  response.json(cars);
});

// app.get("/api/cars", carsController);

// function carsController(request, response) {
//   response.json(cars);
// }

app.post("/api/cars", (request, response) => {
  const newCarObj = request.body;
  //   console.log("newCarObj ===", newCarObj);
  cars.push(newCarObj);
  response.status(201).json({
    success: true,
    msg: "Car created",
  });
});

app.listen(port, () => console.log("Server online port:", port));
