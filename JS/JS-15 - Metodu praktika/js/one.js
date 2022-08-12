"use strict";

const numbers = [1, 2, 3, 5.3, 8, -8, -5.5, -6, -16, -5, -9, 4.2, 5, 12, -6, 45];
console.log("numbers ===", numbers);
//  3. Sukurkite ir atvaizduokite masyvą su dvigubomis reikšmėmis;
const doubleNumbers = numbers.map((sk) => {
  const dobleValue = sk * 2;
  return dobleValue;
});
console.log("doubleNumbers ===", doubleNumbers);
//  4. Sukurkite ir atvaizduokite masyvą su kvadratu pekltomis reikšmėmis;
// const kvadratuReiksmes = numbers.map((sk) => sk * sk);
const kvadratuReiksmes = numbers.map(makeKvadratu);

function makeKvadratu(num) {
  return num * num;
}
console.log("kvadratuReiksmes ===", kvadratuReiksmes);

//  5. Sukurkite ir atvaizduokite masyvą su reikšmėmis padaugintomis iš jų vietos masyve indekso
const skDaugintasIsIndex = numbers.map((sk, i) => sk * i);
console.log("skDaugintasIsIndex ===", skDaugintasIsIndex);

//  6. Atrinkti tiktai teigimų elementų masyvą
const teigiami = numbers.filter((sk) => sk > 0);
console.log("teigiami ===", teigiami);
//  7. Atrinkti vertes didesnes uz 3
const daugiauNei3 = numbers.filter((sk) => sk > 3);
console.log("daugiauNei3 ===", daugiauNei3);
//  7.1 Parasyti funkcija kuri ima 2 argumentus, masyva ir skaiciu uz kuri didesnes vertes grazina ir atspausdina.

function printAndReturn(arr, daugiauUz) {
  const result = arr.filter((el) => el > daugiauUz);
  console.log("printAndReturn === ", daugiauUz, result);
  return result;
}

const daugiau5 = printAndReturn(numbers, 5);
const daugiaum1 = printAndReturn(numbers, -1);

console.log(daugiau5.concat(daugiaum1));

// 12. Suapvalinti visas masyvo reikšmes iki sveikų skaičių
const apvalus = numbers.map((sk) => Math.round(sk));
console.log("apvalus ===", apvalus);
// 13. Atrinkti kas antrą elementą į naują masyvą
const kasAntras = numbers.filter((sk, i) => i % 2 === 0);
console.log("kasAntras ===", kasAntras);

// 15. Atspausdinti kiekvieną masyvo reikšmę atskiroje eilutėje: [0] => 64.
numbers.forEach((sk, i) => console.log(`[${i}] => ${sk}`));

// 15.1 Grazinti nauja masyva kuriame yra objektai
// [
//   {index: 0, reiksme: 64}
//   {index: 1, reiksme: 25}
//    ...
// ]

// 16. Suskaičiuoti visų elementų sumą

let total = 0;
for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log("total ===", total);

// mokytojo
const suma = numbers.reduce((total, sk) => total + sk, 0);
console.log("suma ===", suma);

// 18. Rasti didžiausią skaičių masyve
let didziausias = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers < didziausias) {
  }
  didziausias = numbers[i];
}

console.log("didziausias ===", didziausias);

// mokytojo
// let biggest = numbers[0];
// numbers.forEach((sk) => {
//   if (sk > biggest) {
//     biggest = sk;
//   }
// });
// console.log("biggest ===", biggest);

// su math max
// let biggest = numbers[0];
// numbers.forEach((sk) => {
//   biggest = Math.max(biggest, sk);
// });
// console.log("biggest ===", biggest);

// trecias variantas
let didziausias3 = numbers.reduce((max, sk) => Math.max(max, sk), numbers[0]);
console.log("didziausias3 ===", didziausias3);

// 20. is masyvo
const array = [
  { title: "Mike", age: 30 },
  { title: "Bob", age: 33 },
  { title: "Jill", age: 20 },
];

//   grazinti objekta

const result = {
  mike: 30,
  bob: 33,
  jill: 20,
};
