"use strict";

// iskonsolinti user objekta app.js

import { user, errors1, errors2 } from "./modules/data.js";
import { checkErrors, checkErrors2, isInputOk } from "./modules/helper.js";
import PersonEs5 from "./modules/PersonEs5.js";
import PersonEs6 from "./modules/PersonEs6.js";

const per1 = new PersonEs6("Mike", 26);
console.log("per1 ===", per1);
per1.sayHi();

const per2 = new PersonEs5("Bob", 35);
console.log("per2 ===", per2);
per2.sayHi();
// console.log(user);

// for (key in object) {}

for (let key in user) {
  //   console.log("key ===", key);
}

// keys
const keysArr = [];
for (let key in user) {
  keysArr.push(key);
}

// console.log("keysArr ===", keysArr);

// atspausdinti visas user objekto reiksmes
for (let key in user) {
  console.log(user[key]);
}

// sudeti i masyva visas user reiksmes
const valuesArr = [];
for (let key in user) {
  valuesArr.push(user[key]);
}
console.log("userArr ===", valuesArr);

// Object.keys({}) - grazina objekta keys masyvo pavidalu
const obKeys = Object.keys(user);
// console.log("obKeys ===", obKeys);

// Object.values({}) - grazina objekta values masyvo pavidalu
const obValues = Object.values(user);
// console.log("obValues ===", obValues);

// Object.entries({}) - grazina objekta keys ir values masyva masyvo pavidalu
const obEntries = Object.entries(user);
// console.log("obEntries ===", obEntries);

// obEntries gauti metus
// console.log(obEntries[1][1]);

// parasyti funkcija checkErrors(), ima klaidu masyva(errors1)
// grazinti true jei nors viena objekto reiksme yra ne tuscia
// kitu atveju false

const err1Result = checkErrors2(errors1);
console.log("err1Result ===", err1Result);

const err2Result = checkErrors2(errors2);
console.log("err2Result ===", err2Result);

const ats = isInputOk("abcds");
console.log("ats ===", ats);
