"use strict";

// side effect
function h1ToTitle() {
  // pseudo kodas
  // 1. nusitaikyti i h1
  const h1El = document.querySelector("h1");
  console.log("h1El ===", h1El);
  // 2. paimti reiksme is h1
  const h1ElReiksme = h1El.textContent;
  // 3. irasyt reiksme i title
  document.title = h1ElReiksme;
}
h1ToTitle();
// returns value

function avg(sk1, sk2, sk3) {
  // 1. Sudeti reiksmes
  const sum = sk1 + sk2 + sk3;
  // 2. Padalinti is kiek ju yra
  const avg = sum / 3;
  // 3. Grazinti reiksme
  //   return avg;
}
const avg1 = avg(1, 2, 3);
console.log("avg1 ===", avg1);
const avg2 = avg(4, 5, 6);
console.log("avg1 ===", avg1);

const vidurkiuSuma = avg1 + avg2;
console.log("vidurkiuSuma ===", vidurkiuSuma);
