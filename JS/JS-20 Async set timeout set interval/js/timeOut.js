"use strict";

const h1El = document.querySelector("h1");
function changeH1(newTitle) {
  h1El.textContent = newTitle;
}

// changeH1("whaaat");

// setTimeOut(kokia funkcija vykdysim, uz kiek laiko ms)

// be argumentu
// setTimeout(changeH1, 3000);

// su argumentais
// setTimeout(() => changeH1("Hello"), 3000);

// papildomi argumentai po intervalo
setTimeout(changeH1, 3000, "Hello");
