"use strict";

const people = [
  {
    name: "Petras",
    age: "18",
  },
  {
    name: "Jonas",
    age: 15,
  },
  {
    name: "Antanas",
    age: 20,
  },
  {
    name: "Urtė",
    age: 10,
  },
  {
    name: "Diana",
    age: 25,
  },
  {
    name: "Ieva",
    age: 16,
  },
];

// Prafiltruojame masyvą, kad rodytų tik pilnamečius.

const pilnameciai = people.filter((young) => young.age >= 18);
console.log("pilnameciai ===", pilnameciai);

// 2.Pakoreguojame aukščiau nurodytą pratimą, kad pilnamečių array rodytų tik vardus (amžius jau nesvarbu). Tai rezultatas turi būti: ["Petras", "Antanas", "Diana"].
// mano sprendimas
// const tikVardai = people.filter((amzius) => amzius.age >= 18);
// console.table(tikVardai, ["name"]);

// panasus i Petro
const tikVardai2 = people.filter((x) => x.age >= 18).map((person) => person.name);
console.table(tikVardai2);

// 3. Antro pratimo array A-Z tvarka išrykiuokite. Optimizuokite kodą, kad visas veiksmas tilptų į vieną eilutę.

// mano sprendimas
// const didejimoTvarka = tikVardai.sort((a, b) => (a.name > b.name ? 1 : -1));
// console.table(didejimoTvarka);

// panasus i Petro
const didejimoTvarka2 = people
  .filter((x) => x.age >= 18)
  .map((person) => person.name)
  .sort();

// console.table(didejimoTvarka2);

// 4. Sukurkite funkciją. Ji priims vieną argumentą - array su objektais, kurie turės du parametrus - name ir price. Grąžins - brangiausią ir pigiausią prekes. Turi veikti padavus neribotą kiekį elementų (pavyzdyje apačioje - tik du).
