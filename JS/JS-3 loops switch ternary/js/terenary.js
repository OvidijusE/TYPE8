"use strict";

console.log("Terenary");

// let gender = "male";
// let ats;

// if (gender === "male") {
//   ats = "vyras";
// } else {
//   ats = "moteris";
// }

// terenary operator
// condition ? JEI TRUE : JEI FALSE
// gender === "male" ? (ats = "vyras") : (ats = "moteris");

// ats = gender === "male" ? "vyras" : "moteris";
// ats = gender === "male" ? "vyras" : "";
// ats = gender === "male" ? "" : "moteris";

// console.log(`Jus esate ${ats}`);

// 1.
// sukurtis boolean isItRaining
// parasyti su ternary operatorium atspausdinam ar parasom ar dabar lyje arba dabar giedra

let isItRaining = true;

isItRaining === true ? console.log("Dabar lyja") : console.log("Nelyja");

// susikurti buildingArea kintamaji

// ternary operator

// jei reikme didene nei 500 tai atspausdinam "large building"

// jei reikme mazesne nei 500 tai atspausdinam "medium building"

let buildingArea = 300;
let size = buildingArea > 500 ? "Large building" : "Medium building";

console.log(`This is ${size}`);
