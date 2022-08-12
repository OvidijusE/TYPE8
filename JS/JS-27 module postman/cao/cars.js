"use strict";

// 3.Pridėkite dar vieną modulį, pavadinimu cars.js. Šis turės funkciją, kuri taip pat pasiims app ir nieko negrąžins (t.y. turinį pridės prie app.innerHTML). Tačiau šį kartą - funkcija viduj turės array (["BMW", "VW", "AUDI", "MB"]). O su innerHTML bus map metodas panaudotas ant array, kuris atvaizduos <ul> tag'e sugeneruos po kiekvieną automobilį <li> elemente (t.y.
//     <ul>
//     ${array.map((item) => <li></li>}
//     </ul>)

const carsArray = ["BMW", "VW", "AUDI", "MB"];

export function cars(app) {
  const ulEl = document.createElement("ul");
  const carsArray2 = carsArray.map((carObj) => `<li>${carObj}</li>`).join("");

  ulEl.innerHTML = carsArray2;
  document.body.append(ulEl);
}
