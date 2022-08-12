"use strict";

const students = [
  {
    name: "James",
    gender: "male",
    age: 25,
    town: "Vilnius",
    hasCar: true,
  },
  {
    name: "Jill",
    gender: "female",
    age: 28,
    town: "Kaunas",
    hasCar: true,
  },
  {
    name: "Mike",
    gender: "male",
    age: 18,
    town: "Kaunas",
    hasCar: false,
  },
  {
    name: "Jane",
    gender: "female",
    age: 22,
    town: "Klaipeda",
    hasCar: false,
  },
  {
    name: "Jannet",
    gender: "female",
    age: 29,
    town: "Klaipeda",
    hasCar: true,
  },
  {
    name: "Cory",
    gender: "male",
    age: 30,
    town: "Siauliai",
    hasCar: true,
  },
  {
    name: "Minks",
    gender: "male",
    age: 19,
    town: "Siauliai",
    hasCar: false,
  },
];

console.table(students);
// atrinkti i nauja masyva studentus, kurie turi automobilius

// filter metodas
const drivers = students.filter((studObj) => studObj.hasCar === true);
console.table(drivers);

// forEach metodas
// atrinkti i nauja masyva studentus kurie turi masina su forEach
const driverEach = [];
students.forEach((studObj) => {
  if (studObj.hasCar === true) {
    driverEach.push(studObj);
  }
});
console.table(driverEach, ["name", "hasCar"]);

// 2.Atrinkti i nauja masyva zmones is Vilniaus
const vilnieciai = students.filter((vln) => vln.town === "Vilnius");
console.group("vilnieciai");
console.table(vilnieciai);
console.groupEnd();

// 3.Atrinkti i nauja masyva moteris
const moterys = students.filter((women) => women.gender === "Female");
console.table(moterys);

// 4.suzinoti ar yra nors vienas zmogus is Kauno
const kaunieciai = students.some((kaunas) => kaunas.town === "Kaunas");
console.log(kaunieciai);

// 5.suskaiciuoti kiek zmoniu yra jaunesni nei 26
const jaunesni = students.filter((jaunimas) => jaunimas.age < 26).length;
console.table(jaunesni);

// 5.5 Grazinti nauja masyva kuriam yra visu zmoniu amziai;
let ages = students.map((studObj) => studObj.age);
console.log("ages ===", ages);

// 6.Grazinti nauja masyva kurio objektuose butu tik vardas ir miestas
// const vardasMiestas = students.map((vardasM) => vardasM.age && vardasM.town);
// console.log("vardasMiestas ===", vardasMiestas);

const nameAndTownArray = students.map((studObj) => {
  const newObject = {
    vardas: studObj.name,
    miestas: studObj.town,
  };
  return newObject;
});
console.log("nameAndTownArray ===", nameAndTownArray);

// 7. sugeneruoti rikiuoto saraso pavidalu htmle visu zmoniu vardus ir kiek jiems metu
function generateList() {
  const olEl = document.createElement("ol");
  students.forEach((studObj) => {
    const liEl = document.createElement("li");
    const buttonEl = document.createElement("button");
    buttonEl.textContent = "X";
    liEl.textContent = `${studObj.name} age is ${studObj.age}`;
    liEl.append(buttonEl);
    olEl.append(liEl);
    buttonEl.addEventListener("click", (event) => {
      event.preventDefault();
      liEl.textContent = "";
    });
  });
  document.body.append(olEl);
}
generateList();
// salia el teksto li viduje sukuriam mygtuka su tekstu X
// paspaudus mygtuka trinam ta el

// 8. Gauti visu zmoniu metu suma
// const totalStudAge = students.reduce((total, studObj) => {
//   return total + studObj.age;
// }, 0);
// console.log("totalStudAge ===", totalStudAge);

// 8. sutrumpintas
// const totalStudAge = students.reduce((total, studObj) => total + studObj.age, 0);
// console.log("totalStudAge ===", totalStudAge);

// 9. suskaiciuoti visu zmoniu metu vidurki
const totalStudAgeAVG = students.reduce((total, studObj) => total + studObj.age / students.length, 0);
console.log("totalStudAgeAVG ===", totalStudAgeAVG.toFixed(2));

// 10. surasti zmongu vardu 'Mike' ir padaryti kad jis nusipirko masina yra tiesa
const mikeFound = students.find((studObj) => studObj.name === "Mike");
console.log("mikeFound ===", mikeFound);
mikeFound.hasCar = true;
console.log("students ===", students);
