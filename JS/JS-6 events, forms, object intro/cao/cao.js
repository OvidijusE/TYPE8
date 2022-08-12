"use strict";

// 1.Sukurk input į kurį įvestum savo vardą. Submit paspaudus - išoktų alert su tavo vardu.
// const inputEl = document.getElementById("vardas");
// const buttonEl = document.getElementById("button");

// buttonEl.addEventListener("click", function (event) {
//   event.preventDefault();

//   alert(document.querySelector("input[name=vardas]").value);
// });

// 2.Sukurk input į kurį įvesi savo amžių. Padaryk, kad submit paspaudus, viršuj esančiame h1 elemente atsirastų "Tavo amžius: [amžius]".

// const inputEl = document.getElementById("vardas");
// const buttonEl = document.getElementById("button");
// const textEl = document.getElementById("text");

// buttonEl.addEventListener("click", function (event) {
//   event.preventDefault();
//   document.querySelector("h1").textContent = `Tavo amzius : ${inputEl.value}`;
// });

// 3.Sukurk du input - į vieną įrašysi savo vardą, į kitą - amžių. Jei daugiau nei 18 - išmeta h1 elemente "Vairuoti gali: [vardas]"; jei nėra išmeta: "Dar mokysis vairuotis: [vardas]".

// const inputEl = document.getElementById("vardas");
// const inputEl2 = document.getElementById("amzius");
// const buttonEl = document.getElementById("button");
// const textEl = document.getElementById("text");

// buttonEl.addEventListener("click", function (event) {
//   event.preventDefault();
//   if (inputEl2.value > 18) {
//     document.querySelector("h1").textContent = `Vairuoti gali : ${inputEl.value}`;
//   } else {
//     document.querySelector("h1").textContent = `Dar mokysis vairuoti : ${inputEl.value}`;
//   }
// });

// 4.Sukurkite kino teatro kainos apskaičiavimo platformą. Joje turi būti vienas input laukelis, kur žmogus įrašo savo amžių, o JS apskaičiuoja kainą ir išmeta ją h1 elemente. Standartinis bilietas – 6eu, iki 16 metų – 50proc nuolaida, 1/3 nuolaida vyresniems nei 60. Variable turi būti aprašyti viršuj, kad būtų lengva keist.

// const inputEl2 = document.getElementById("amzius");
// const buttonEl = document.getElementById("button");
// const textEl = document.getElementById("text");

// const bilietas = 6;

// buttonEl.addEventListener("click", function (event) {
//   event.preventDefault();
//   if (inputEl2.value >= 60) {
//     document.querySelector("h1").textContent = `Nuolaida 33.3%. Iš viso :  ${(bilietas / 3) * 2}€`;
//   } else if (inputEl2.value >= 16) {
//     document.querySelector("h1").textContent = `Pilna kaina ${bilietas} €`;
//   } else if (inputEl2.value < 16) {
//     document.querySelector("h1").textContent = `Nuolaida 50%. Iš viso :  ${bilietas * 0.5} €`;
//   } else {
//     document.querySelector("h1").textContent = `Error 404`;
//   }
// });

// 5.Kai kuriose šalyse reikia eiti į kariuomenę, jei tu tarp 18 ir 30, tačiau, jei neturi kriminalinio įrašo. Sukurk programą, kuri su input + radio button pasakytų ar tam žmogui gali reikėti eiti į kariuomenę (h1 elemente). Hint: pasirinkite su querySelector tik pažymėtą radio input (aha, yra toks CSS selektorius), ir perskaitykite jo reikšmę.

// const inputEl2 = document.getElementById("amzius");
// const buttonEl = document.getElementById("button");
// const textEl = document.getElementById("text");
// const teistasEl = document.getElementById("teistas");
// const neTeistasEl = document.getElementById("neteistas");

// buttonEl.addEventListener("click", function (event) {
//   event.preventDefault();

//   if (inputEl2.value < 30 && inputEl2.value >= 18 && ) {
//     // document.querySelector("radio[value=neteistas]:checked".value);
//     document.querySelector("h1").textContent =
//       // document.querySelector("radio[value=neteistas]:checked".value);
//       textEl.textContent = inputEl2.textContent;
//   } else if (inputEl2.value < 30 && inputEl2.value >= 18) {
//     // document.querySelector("radio[value=teistas]:checked".value);
//     document.querySelector("h1").textContent = `Netinkamas`;
//   } else {
//     document.querySelector("h1").textContent = `No internet connection`;
//   }
// });

// Petro sprendimas
// const ageInput = document.getElementById("age");
// const tInput = document.querySelector("input[type=checkbox]");
// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   const age = Number(ageInput.value);
//   const teistumas = tInput.checked;

//   if (age >= 18 && age <= 30 && !teistumas) {
//     document.getElementById("result").textContent = "Esi saukiamas!";
//   } else {
//     document.getElementById("result").textContent = "Esi laisvas!";
//   }
// });
