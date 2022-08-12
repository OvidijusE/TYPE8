"use strict";

// 1.Įmonė visiems savo darbuotojams duoda Kalėdų bonusą - 50 eurų. Tiems darbuotojams, kurie dirba ilgiau nei 10 metų - prideda papildomus 50 eurų (bendrai - 100 eurų). O jei dirba 20 metų ar daugiau - papildomus 100 eurų (iš viso - 200 eurų). Parašyk programą, kuri leistų darbuotojui įsivesti skaičių kiek dirbo metų įmonėje, input elementu - atsirastų tekstas su pervedamu bonusu.

// const inputEl = document.getElementById("amzius");
// const submitEl = document.getElementById("button");
// const textEl = document.getElementById("tekstas");

// const bonus = 50;

// submitEl.addEventListener("click", function (event) {
//   event.preventDefault();
//   if (inputEl.value > 10 && inputEl.value <= 19) {
//     document.getElementById("tekstas").textContent = `Jūsų bonusas : ${bonus * 2} eurų.`;
//   } else if (inputEl.value >= 20) {
//     document.getElementById("tekstas").textContent = `Jūsų bonusas : ${bonus * 4} eurų.`;
//   } else {
//     document.getElementById("tekstas").textContent = `Jūsų bonusas : ${bonus} eurų.`;
//   }
//   inputEl.textContent = textEl.value;
// });

// 2.Kiek dienų šiais metais? Parašykite programą, kur įvedus metus - pasakys ar jie keliemieji, ar ne (po forma). Kaip apskaičiuoti ar keliemiji metai? Jie turi dalintis iš keturių, bet jei dalinasi iš 100, tai turi dalintis ir iš 400, kad būtų keliamieji (angl. a year is a leap year if it is divisible by four, except that any year divisible by 100 is a leap year only if it is also divisible by 400). Tai - populiari užduotis, tad internete rasite ne vieną versiją, ir daug teorijos kaip skirtingi žmonės skaičiuoja. Tad rekomenduojame padarius - pasitikrinti ir kitų žmonių idėjas.

// const inputEl = document.getElementById("metai");
// const submitEl = document.getElementById("button2");
// const textEl = document.getElementById("metuAtsakymas");

// const metai = "";

// submitEl.addEventListener("click", function (event) {
//   event.preventDefault();
//   if (inputEl.value / 4) {
//     document.getElementById("metuAtsakymas").textContent = `${metai} yra keliamieji`;
//   } else if (inputEl.value / 3) {
//     document.getElementById("metuAtsakymas").textContent = `${metai} yra nekeliamieji`;
//   } else {
//     document.getElementById("metuAtsakymas").textContent = `Pasirinikinte metus`;
//   }
// });

// 3.Parašyk programą, kurioje vartotojas įrašo temperatūra Celsijumi, o programa paskaičiuoja ir atvaizduoja tą pačią temperatūrą Farenheitu.

// const inputEl = document.getElementById("celsius");
// const submitEl = document.getElementById("button3");
// const textEl = document.getElementById("temperatura");

// submitEl.addEventListener("click", function (event) {
//   event.preventDefault();
//   const celsius = (inputEl.value * 9) / 5 + 32;
//   document.querySelector(".temperatura").textContent = `Temperatura yra ${celsius} F.`;
// });

// 4.Sukurk programą, kurioje reikia įvesti elektroninį paštą ir paspausti mygtuką "sutinku gauti laiškus". Suvedus duomenis, jei mygtukas "sutinku" nepasirinktas - išmeta - "Registracija nesėkminga. Jei pasirinktas - išmeta "El. paštas [paštas] sėkmingai užregistruotas".

// const inputEl = document.getElementById("email");
// const submitEl = document.getElementById("button4");
// const textEl = document.getElementById("laiskai");
// const checkEl = document.querySelector("input[type=checkbox]");

// submitEl.addEventListener("click", function (event) {
//   event.preventDefault();
//   const checkedBox = checkEl.checked;
//   if (checkedBox && inputEl.value.length !== 0) {
//     textEl.textContent = `El. paštas ${inputEl.value} sėkmingai užregistruotas.`;
//   } else if (!checkedBox) {
//     textEl.textContent = `Registracija nesėkminga.`;
//   } else {
//     textEl.textContent = `Įvesti klaidingi duomenys.`;
//   }
// });
