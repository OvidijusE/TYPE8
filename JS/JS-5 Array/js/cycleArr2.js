"use strict";

// indeksai:      0  1  2   3  4  5  6  7  8  9
const numbers = [46, 1, 4, 78, 9, 5, 1, 4, 5, 5];
const numTest = [1, 2, 3];

// atspausdinti visu masyvo nariu suma
/*
0. Susikurti kintamaji kuris saugos bendra suma
1. Paimti pirma reiksme
2. Sudeti ja su antra
3. deti reiksmes toliau kol yra reiksmiu 
*/

let total = 0;
// ciklas
// total += numTest[0];
// total += numTest[1];
// total += numTest[2];
for (let i = 0; i < numTest.length; i++) {
  total += numTest[i];
}

let totalNumbers = 0;
for (let i = 0; i < numbers.length; i++) {
  totalNumbers += numbers[i];
}

//  po ciklo
console.log("totalNumbers ===", totalNumbers);
console.log("total ===", total);

// funcijos variantas
function printTotal(array) {
  let totalNumbers = 0;
  for (let i = 0; i < array.length; i++) {
    totalNumbers += array[i];
  }
  // po ciklo
  console.log("the sum of array is ===", totalNumbers);
}

printTotal(numTest);
printTotal(numbers);
