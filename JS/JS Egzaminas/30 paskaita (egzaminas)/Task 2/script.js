"use strict";

/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const buttonEl = document.getElementById("btn__element");
const stateEl = document.getElementById("btn__state");

let count = 0;
buttonEl.addEventListener("click", () => {
  function countClick() {
    stateEl.innerHTML = ++count;
  }
  countClick();
});
