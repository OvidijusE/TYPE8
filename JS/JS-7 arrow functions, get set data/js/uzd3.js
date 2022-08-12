"use strict";
// sukurti funkcija kuti paima h1 el texta

// ir iraso ji i paragrafa kurio id === 'result'

function pirmaFunkcija(reiksme) {
  // paimti reiksme
  // nusitaikyti i elementa
  const pEl = document.getElementById("result");
  const h1El = document.querySelector("h1");
  // isideti elementa i h1

  pEl.textContent = reiksme;
}

pirmaFunkcija("vienas");

// roko sprendimas
function fn() {
  const elH1 = document.querySelector("h1");
  const elP = document.getElementById("result");
  const result = (elH1.innerHTML = elP.innerHTML);
  console.log(result);
  return result;

  //NUSITAIKYK elP taisyklingai, uzidek id. verta kurtis nauja html.
}
fn();
