"use strict";

// 1. Parašykite funkciją, kuri priims minutes (number) ir grąžins sekundes (string: "x seconds").
// Pvz: fn(3) => "180 seconds".

function sekundes(minutes) {
  let pakeisti = minutes * 60;
  console.log("pakeisti ===", `${pakeisti} seconds`);
}
sekundes(5);

// 2. Parašykite funkciją, kuri priims varotojų amžių ir grąžins kiek dienų jis jau nugyveno (skaičių, metų tikslumu, neskaičiuojant keliamųjų metų - t.y. visada 365 dienos).
// Pvz: fn(20) => 7300.

function amzius(metai) {
  let gyvenimas = metai * 365;
  console.log("gyvenimas ===", `${gyvenimas} dienos`);
}
amzius(30);

// 3.Parašykite arrow funkciją (viena eilutė), kuriai padavus skaičių – ji grąžintų jo kvadratą.
// Pvz.: fn(5) -> 25

let kvadratas = (skaicius) => skaicius ** 2;

console.log(kvadratas(5));

// 4.Parašykite arrow funkciją (viena eilutę), kuri paėmus du skaičius (aukštį ir plotį) grąžintų trikampio plotą ((aukštis * plotis) / 2)
// Pvz: fn(10, 10) -> 50

let plotas = (aukstis, plotis) => (aukstis * plotis) / 2;

console.log(`Trikampio plotas yra ${plotas(10, 12)}`);

// 5.Parašykite funkciją, kuri paims parametrą String, ir grąžins to parametro paskutinę raidę.
// pvz. Paduodu: "Petras", grąžina "s".

const grazintiRaide = (raide) => raide.charAt(raide.length - 1);
console.log(grazintiRaide("Petras"));

// 6.Sukurkite funkciją, kuri paims stringą ir grąžins jį apverstą mažosiomis.

const mazosIrApverstos = (letters) => letters.split("").reverse().join("").toLowerCase();
console.log(mazosIrApverstos("PETRAS"));

// 7.Parašykite funkciją, kuri paims array skaičių ir grąžins didžiausią neigiamą skaičių.
// pvz: [-1, -100, -5, 10, 0, 11] -> "-1"

const skaiciai = [-999, -1, -100, -5, -2000, 10, 0, 11];

let didziausiasNeigiamas = skaiciai.reduce((min, sk) => Math.min(min, sk), skaiciai[0]);

console.log("didziausiasNeigiamas ===", didziausiasNeigiamas);

// 8.Sukurkite funkciją, kuri paims skaičių parametrą ir sugeneruos array su tiek random skaičių (nuo 1 - 10)), kiek parametre nurodyta.
// T.y. "3" => [1, 6, 3].

const randomSkaiciai = (sk) => {
  let newArray = [];
  for (let i = 0; i < sk; i++) {
    newArray.push(Math.floor(Math.random() * 10) + 1);
  }
  return newArray;
};

console.log(randomSkaiciai(8));

// 12.Sukurkite funkciją, kuri kaip parametrą gaus array su skaičiais. Funkcija turės grąžinti mažiausią trūkstamą skaičių iš array.
// Pvz. Paduodu: [1, 2, 4, 5]; Grąžina: 3

const numbers = [1, 2, 4, 5];
const numbers2 = [5, 6, 8, 9, 10];

function missingNr(arr) {
  const findGraza = arr.find((sk, i, masyvas) => {
    // console.log(sk);
    const dabartineReiksme = masyvas[i];
    const priekineReiksme = masyvas[i + 1];
    // console.log("dabartineReiksme ===", dabartineReiksme, priekineReiksme);
    if (dabartineReiksme + 1 !== priekineReiksme) {
      // console.log("blogai", dabartineReiksme);
      return true;
    }
  });
  console.log("findGraza ===", findGraza);
  return findGraza + 1;
}

const miss1 = missingNr(numbers);
const miss2 = missingNr(numbers2);
console.log("miss1 ===", miss1);
console.log("miss2 ===", miss2);
