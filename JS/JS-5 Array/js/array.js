"use strict";

document.title = "Array we Array";

// susikuriam masyva
// index                0        1          2       3        4        5       6
const pavadinimai = ["apple", "sister", "hammer", "sun", "table", "sky", "lake"];

//index                0     1       2     3     4     5    6     7
const pagalbiniai = ["in", "with", "on", "my", "is", "a", "the", " "];

const numbers = [46, 1, 4, 78, 9, 5, 1, 4, 5, 5];
// indeksai:      0  1  2   3  4  5  6  7  8  9
console.log(numbers[4]);

console.log("pavadinimai ===", pavadinimai);

// masyvas[indexas]
const treciaReiksme = pavadinimai[2];
console.log("treciaReiksme ===", treciaReiksme);

// prilyginti kintamajam ir atspausdinti sakinius
//  1. my sister is in the lake

const sakinys1 =
  pagalbiniai[3] +
  pagalbiniai[7] +
  pavadinimai[1] +
  pagalbiniai[7] +
  pagalbiniai[4] +
  pagalbiniai[7] +
  pagalbiniai[0] +
  pagalbiniai[7] +
  pagalbiniai[6] +
  pagalbiniai[7] +
  pavadinimai[6];
console.log(sakinys1);
