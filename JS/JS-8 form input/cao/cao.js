"use strict";

// 1,Sukurkite funkciją, į kurią būtų paduotas vietas parametras - n. Jis pasakys kokio dydžio L raidė turi būti (ji sudaryta iš mažų L raidžių ASCII būdų).
// t.y. jei kviesite funkciją fn(4), tai turėtų atspaudinti tokį rezultatą:
// L
// L
// L
// L L L L

// let raide = "l";

// function () {
//     for ( let i = 0; i < 5; i++)
//     raide += "l";

// }
// const textEl = document.getElementById("text");

// function typeL(num) {
//   const letter = "L";
//   let n = Number(num);
//   let allLetters = "";
//   for (let i = 0; i <= num; i++) {
//     textEl.innerHTML += `${letter}  <br>`;
//   }
// }

// typeL(4);

// 3.Sukurkite input (be mygtuko), į kurį įrašius vardą ir nulipus nuo input (t.y. blur event), vardas atsiras po apačia, tvarkingame sąraše (su kableliais):
// Pvz.: Petras, Jonas, Mantas, Antanas.

// const inputEl = document.getElementById("vardas");
// const textEl = document.getElementById("text2");

// inputEl.addEventListener("blur", (event) => {
//   event.preventDefault();
//   const inputValue = inputEl.value;
//   textEl.textContent = inputValue;
// });

// 4.Sukurkite formą su dviem inputais, kurie paims skaičius. Suvedus duomenis - turi alert'int skaičių, kuris arčiausiai 100.
// Pvz.: fn(101, 81) grąžins 101.

// const inputEl1 = document.getElementById("num1");
// const inputEl2 = document.getElementById("num2");
// const buttonEl = document.getElementById("button");

// buttonEl.addEventListener("click", (event) => {
//   event.preventDefault();
//   if (inputEl1.value < 101 && inputEl1.value > 99) {
//     alert(`${inputEl1.value}`);
//   } else if (inputEl2.value < 101 && inputEl2.value > 99) {
//     alert(`${inputEl2.value}`);
//   } else {
//     alert("nieko");
//   }
// });
