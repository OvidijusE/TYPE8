"use strict";

import { countAverage, countAverageThree } from "./modules/avg.js";
// export default importuojasi be {}
import makeDoubleAndPlus, { colors } from "./modules/count.js";
import { p } from "./modules/data.js";
// import * as avg from "./modules/avg.js"; grazinti viska
console.log("colors ===", colors);

const appEl = document.getElementById("app");
appEl.innerHTML = p;

console.log("makeDouble ===", makeDoubleAndPlus(10));

console.log("countAverage ===", countAverage(10, 15));

// console.log("countAverageThree ===", avg.countAverageThree(100, 150, 200)); cia su  * as avg from
console.log("countAverageThree ===", countAverageThree(100, 150, 200));

// sukurti funkcija kuri ima 2 argumenus. pirmas argumentas yra reiksme, ntras argumentas yra el html elementas kur ta reiksme atspaudinti html
