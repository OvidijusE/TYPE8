const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const { port } = require("./config");
const { data } = require("./data/db");

const app = express();

app.use(express());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json("hello");
});

// 1.Sukurkite bendrinį GET route, kuris paduos visus duomenis.
app.get("/data", (req, res) => {
  res.json(data);
});

// 2.Sukurkite dinaminį GET route, kur URL turės automobilio markę ir pagal ją prafiltruos, ir grąžins tik tuos žmones, kurie turi šį automobilį.
app.get("/data/cars/:brand", (req, res) => {
  const owners = req.params.brand;
  res.json(data.filter((user) => user.car === owners));
});

// 3.Sukurkite dinaminį GET route, kuris priims vartotojo id ir pagal jį grąžins atitinkamą vartotojo objektą. Hint: url parametrai visada stringai, o čia id - skaičius, tad reikės konvertuoti.
app.get("/data/users/:userId", (req, res) => {
  const userId = +req.params.userId;
  const findUser = data.find((uObj) => uObj.id === userId);
  if (findUser === undefined) {
    res.status(404).json({ error: "User not found" });
    return;
  }
  res.json(findUser);
});

// 4.Sukurkite GET route, kuris grąžins visus el. paštus (grąžinamas formatas: ["anb@abc.com", "abc@abc.com", "abc@acb.com]).
app.get("/data/emails", (req, res) => {
  const userEmail = data.map((el) => {
    return el.email;
  });
  console.log("userEmail ===", userEmail);
  res.json(userEmail);
});

// 5.Sukurkite GET route, į kurį pasikreipus, grąžins visų moterų (gender: Female) vardą ir pavardę (formatas: ["Rita Kazlauskaite", "Monika Simaskaite"]).
// filter ir map
app.get("/data/females", (req, res) => {
  const filteredFemales = data.filter((fem) => fem.gender === "Female");
  const names = filteredFemales.map((user) => {
    return `${user.first_name} ${user.last_name}`;
  });
  res.json(names);
});

app.listen(port, () => console.log("Server online :", port));
