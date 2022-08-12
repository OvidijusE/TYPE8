"use strict";

/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const formEl = document.forms[0];
const inputEl = document.getElementById("search");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const outputEl = document.getElementById("output");

  function calcWeight() {
    outputEl.innerHTML = `
    <p class="output-p">Your weight in pounds : ${(inputEl.value * 2.2046).toFixed(2)} lb.</p>
    <p class="output-p">Your weight in grams : ${(inputEl.value / 0.001).toFixed(2)} g.</p>
    <p class="output-p">Your weight in ounces : ${(inputEl.value * 35.274).toFixed(2)} oz.</p>
    `;
  }
  calcWeight();
});
