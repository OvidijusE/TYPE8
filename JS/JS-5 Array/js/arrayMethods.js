"use strict";

// masyvu metodai

const colors = ["green", "blue", "red"];
console.log("colors ===", colors);

// array.push() - prideti reiksme i masyvo gala (modifikuojantis originala)

colors.push("yellow");
// colors.push("brown", "black");

console.log("colors ===", colors);

// array.unshift("nauja reiksme") - prideti reiksme i masyvo pradzia (modifikuojant originala)

colors.unshift("violet");
console.log("colors === po unshift", colors);

// array.shift() - nutrina pirma el (modifikuojant originala)
// array.pop() nutrinta paskutini elementa

const firstColor = colors.shift(); //paimam violet
console.log("firstColor ===", firstColor);

// array.slice(start, finish)
// const redYellowArray = colors.slice(2, 4);
const redYellowArray = colors.slice(-1);
console.log("redYellowArray ===", redYellowArray);

// array.splice()
