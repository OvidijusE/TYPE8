"use strict;";

// boolean

// 1.Pasirašykite variable isLegalAge, kurį priskirkite true arba false. Console.log'e atvaizduokite šį variable. Sukurkite antrą console.log, kuriame atvaizduokite šį variable su toString() metodu. Turėtų skirtis spalva teksto.
const isLegalAge = true;

console.log("isLegalAge ===", isLegalAge);
console.log("isLegalAge ===", isLegalAge.toString());

// number
// 1.Sukurk variable 'milkPrice'. Su JS patikrink ir informuok vartotoją alert() ar jam reikės centų, ar nereikės (t.y. ar skaičius sveikas).
// const milkPrice = 3;

// if (Number.isInteger(milkPrice)) {
//   alert("centų nereikia");
// } else {
//   alert("centų reikia");
// }

// 2Pakoreguok pirmą pratimą, kad alert taip pat ir išmestų kainą - su dviem skaičias po kablelio (t.y. 3.00 Eur).
// const milkPrice = 2.49;

// if (Number.isInteger(milkPrice)) {
//   alert(`${milkPrice.toFixed(2)}€ centu nereikia`);
// } else {
//   alert(`${milkPrice.toFixed(2)}€ centu reikia`);
// }

// 3.Sukurk programą degalinei - bus du input laukeliai (kuriame su HTML): viename įvedame kainą su trim skaičias po kablelio, antrame - degalų kiekį, su vienu skaičiu po kablelio (HTML naudojame step="0.1" atributą pasakyti kiek skaičių po kablelio vartotojas gali paduoti). Pavyzdžiui: 1.399Eur x 5.1L. Pateikus duomenis - vartotojui apačioje turi išmesti kainą h1 laukelyje (sukuriame su JS), su dviem skaičiais po kablelio (pvz. 7.13 Eur).

// const kainaEl = document.getElementById("kaina");
// const kurasEl = document.getElementById("kuras");
// const buttonEl = document.getElementById("submit");

// const h1El = document.createElement("h1");
// buttonEl.insertAdjacentElement("afterend", h1El);

// buttonEl.addEventListener("click", (event) => {
//   event.preventDefault();
//   const kuroKaina = kainaEl.value * kurasEl.value;
//   h1El.textContent = `Total : ${kuroKaina.toFixed(2)}€`;
//   console.log("kuroKaina ===", kuroKaina);
// });

// String metodai

// 1.Sukurk du input'us - vieną, kur vartotojas įves savo vardą; kitą - skaičių. Pirma, patikrink ar skaičius sveikas (jei ne - alert). Jei sveikas, po apačia sukurk h1 elementą kur vardas bus atkartotas tiek kartų, kiek skaičius nurodo.

// const button1El = document.getElementById("paspausk");
// const formEl = document.getElementById("string-metodai");

// const h1Elem = document.createElement("h1");
// button1El.insertAdjacentElement("afterend", h1Elem);

// // debugger;
// formEl.addEventListener("submit", (event) => {
//   const vardasEl = document.getElementById("vardas").value;
//   const amziusEl = Number(document.getElementById("amzius").value);
//   event.preventDefault();
//   if (Number.isInteger(amziusEl)) {
//     h1Elem.textContent = vardasEl.repeat(amziusEl);
//   } else {
//     alert("Error");
//   }
// });

// 2.Sukurk input, kur vartotojas įves savo vardą. Įvedus - alert'ink kokio ilgio yra vardas. Tačiau užtikrink, kad priekyje ir gale nebūtų įskaičiuoti tarpeliai.

// const formEl2 = document.getElementById("string-metodai-2");

// formEl2.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const username = document.getElementById("username").value.trim();
//   alert(`Length : ${username.length}`);
// });

// 3.Sukurk input, kur vartotojas įves savo pilną vardą (t.y. vardą ir pavardę). Padaryk, kad JS pridėtų du h1 tag'us, viename - vardas, kitame - pavardė.

// const formEl3 = document.getElementById("string-metodai-3");

// const pirmasH1 = document.createElement("h1");
// formEl3.insertAdjacentElement("beforeend", pirmasH1);
// const antrasH1 = document.createElement("h1");
// pirmasH1.insertAdjacentElement("afterend", antrasH1);

// formEl3.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const vardasPavarde = document.getElementById("vardas-pavarde").value.trim();

//   const pirmasZodis = vardasPavarde.split(" ");
//   pirmasH1.textContent = pirmasZodis[0];
//   const antrasZodis = vardasPavarde.split(" ");
//   antrasH1.textContent = antrasZodis[1];
// });

// 4.Pakoreguok trečią pratimą, kad įskaičiuotų, jei pavardė ilgesnė nei vienas žodis.
