"use strict";

let x = 10; // saved by value
let xCopy = x;

xCopy = 20;
console.log({ x }, { xCopy });

// by reference
//  vieta atmintyje (adresas), perkelia nuoroda i reiksme
const numbers = [1, 2, 3];
const numbers2 = [1, 2, 3];
let numbersCopy = numbers.slice(); //tikra kopija slice(pradzia, pabaiga)
console.log(numbersCopy === numbers);
console.log("numbers2 === numbers", numbers2 === numbers);

numbersCopy.push(7);

console.log("numbersCopy ===", numbersCopy);

// objects saved by reference

const user = {
  name: "james",
  age: 25,
};

const userCopy = user;
userCopy.town = "Vienna";
console.log("userCopy  ===", userCopy);
console.log("user ===", user);
