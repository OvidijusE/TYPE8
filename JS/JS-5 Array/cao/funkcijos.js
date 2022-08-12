"use strict";

// 1.Ne visos funkcijos turi return statement (nors dažniausiai taip yra). Sukurkite funkciją, į kurią paduosite vardą ir jį pa'alert'ins jį :)

// let firstName = "Ovidijus";

// function myFunction() {
//   alert(`${firstName}`);
// }

// myFunction();

// 2.Ir ne visos funkcijos turi parametrus - sukurkite funkciją, kuri sugeneruos ir grąžins random skaičių tarp 1 ir 5.

// function randomNumber() {
//   const random = Math.floor(Math.random() * 5 + 1);
//   console.log(random);
// }

// randomNumber();

// 3.Sukurkite funkciją, kuri paims du parametrus - vardą ir pavardę - ir grąžins sumą šių žodžių ilgių (t.y. "Petras", "Slekys" => 12).

// function vardasPav(vardas, pavarde) {
//   const ilgis = vardas + pavarde;
//   console.log(ilgis.length);
// }

// vardasPav("Petras", "Slekys");

// 4.Sukurkite funkciją, kuri pagal paduotą skaičių grąžins abecelės raidę (pvz. 0 => A; 1 => B; 2 => C ir t.t.). Hint: Jums reikės pirma sukurti Array su visomis raidėmis (["A", "B", C",..."Z"]), o funkcija paims pagal indeksą atitinkamą raidę

// const raides = ["A", "B", "C", "D"];

// function abc(skaiciai) {
//   let raide = raides[skaiciai];
//   console.log(raide);
// }

// abc(3);

// 5.Sukurkite funkciją, kuri paims tris parametrus (n1, n2, operator). Operator gali būti "sum", "sub", "div", "multi" (matematinės reikšmės - sudėti, atimti, padalinti, padauginti). n1 ir n2 bus skaičiai. Turite grąžinti atsakymą, kur n1 ir n2 atlikta matematinė operacija (pvz.: 5, 1, "sub" => 4; 6, 3, "sum" => 9...). Hint: Reikės funkcijoje naudoti if-else arba switch.
