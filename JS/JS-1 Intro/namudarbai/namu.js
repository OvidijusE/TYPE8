"use strict";

// pirma uzduotis

const firstName = prompt("Iveskite savo vardą")
const lastName = prompt("Iveskite savo pavardę")
const birthMonth = prompt("Iveskite savo gimimo mėnesio skaičių")
const birthDay = prompt("Iveskite savo gimimo mėnesio dieną")

console.log("Mano draugas " + firstName + " " +  lastName + " yra gimęs " + birthMonth + " mėn" + " " + birthDay + " dieną" );

// antra uzduotis

const vardas = "Jonas";
const pavarde = "Jonaitis";
let gimimoMenesis = "8";
let gimimoDiena = "17";

gimimoMenesis = Number(gimimoMenesis);
gimimoDiena = Number(gimimoDiena);

const sudetis = (gimimoMenesis + gimimoDiena);
console.log("Vardas: " + vardas + " Pavarde: " + pavarde + " ir sudejus jo gimimo men ir diena gaunama " + sudetis);


// trecia uzduotis

const firstNumber = 8;
const secondNumber = 17;
const thirdNumber = 11;

const sum = (firstNumber + secondNumber + thirdNumber);
const multiply = (firstNumber * secondNumber * thirdNumber);


console.log("Vartotojas įvedė skačius " + firstNumber + " , " + secondNumber + " , " + thirdNumber + "." + " Jų suma yra " + sum + " , o daugyba yra " + multiply);

// ketvirta uzduotis

const average = multiply / 3;
console.log("Visų įvestų skaičių vidurkis yra " + average);