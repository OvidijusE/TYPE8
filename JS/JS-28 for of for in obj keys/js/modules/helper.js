"use strict";

export function checkErrors(errorsObj) {
  //   gauti objekto reiksmes
  for (let key in errorsObj) {
    let value = errorsObj[key];
    if (value.length > 0) {
      return true;
    }
  }
  return false;
}

export function checkErrors2(errorsObj) {
  return Object.values(errorsObj).some((reiksme) => reiksme.length > 0);
}

// helper.js parasyti funkcija isInputOk() kuri priima stringa ir tikrina
// jei stringas tuscias grazina 'cant be blank'
// jei stringas trumpesnis nei 3 simboliai grazina 'must be longer then 3'
// jei stringas ilgesnis nei 5 simboliai grazina 'cant be longer then 5'

export function isInputOk(str) {
  if (str.length < 1) return "Cant be blank";

  if (str.length > 5) return "Cant be longer then 5";

  if (str.length >= 1 && str.length < 4) return "Must be longer than 3";

  return "input OK";
}

// sukurti funkcija kuri priima argumentu htmlTaga, texta, clasesVarda ir tevine html elementa.
// sukuria elementa ir ideda i tevini el
// makeMeEl("div", "", "card", appEl);
// makeMeEl("p", "kazoks text", "card__text", divEl);
