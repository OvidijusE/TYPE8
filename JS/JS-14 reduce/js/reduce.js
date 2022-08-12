"use strict";

const numbers = [1, 2, 3, 4];

// gauti total suma numbers array
let total = 0;
numbers.forEach((sk) => {
  total = total + sk;
});
console.log("total ===", total);

// gauti vidurki
const avg1 = total / numbers.length;
console.log("avg1 ===", avg1);
// let total2 = 0;
// numbers.forEach((sk) => (total2 += sk));
// console.log("total2 ===", total2);

// array reduce
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// total === pirmoji masyvo reiksme
// console.log("numbers ===", numbers);
// const totalRed = numbers.reduce((total, sk, i) => {
//   console.log(`cycle: ${i}, total : ${total}, sk : ${sk}`);
//   return total + sk;
// }, 0);

// console.log("totalRed ===", totalRed);

// total reduce average
// [1 / 2]
// [1 / 2 + 2 / 2];
const totalRedAVG = numbers.reduce((total, sk, i) => {
  console.log(`cycle: ${i}, total : ${total}, sk : ${sk}`);
  //   skaiciuojam kiekvieno skaiciau vidurki
  const singleSkAvg = sk / numbers.length;
  //   ir pridedam
  return total + singleSkAvg;
}, 0);
console.log("totalRedAVG ===", totalRedAVG);
