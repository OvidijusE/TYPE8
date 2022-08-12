"use strict";

const skaiciaiArray = [5, 1, 2, 3];

function avgFor(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    const skaicius = arr[i];
    // console.log('element ===', element);
    total += skaicius;
  }
  return total / arr.length;
}

const avg1 = avgFor(skaiciaiArray);
console.log("avg1 ===", avg1);

// forEach - kazka atlikti su kiekviena reiksme
let total = 0;
// skaiciaiArray.forEach((skaicius) => {
//   console.log("skaicius ===", skaicius);
//   total += skaicius;
// });

// pagal w3s
skaiciaiArray.forEach(getTotal);
function getTotal(skaicius) {
  total += skaicius;
  console.log("skaicius ===", skaicius);
}

const avg2 = total / skaiciaiArray.length;
console.log("avg2 ===", avg2);

// forEach info
skaiciaiArray.forEach((sk, i, arr) => {
  console.log(`${i}tasis el, kurio reiksme yra ${sk}`);
  console.log("arr ===", arr);
});
// padvigubinti visas skaiciai masyvo reiksmes
skaiciaiArray.forEach((sk, i, arr) => {
  arr[i] = sk * 2;
});
console.log("skaiciaiArray ===", skaiciaiArray);
