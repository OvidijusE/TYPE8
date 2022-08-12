"use strict";

/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {
  this.sum = function (num1, num2) {
    return num1 + num2;
  };
  this.subtraction = function (num1, num2) {
    return num1 - num2;
  };
  this.multiplication = function (num1, num2) {
    return num1 * num2;
  };
  this.division = function (num1, num2) {
    return num1 / num2;
  };
}

let calculator = new Calculator();

const sum = calculator.sum(1, 8);
const subtraction = calculator.subtraction(10, 8);
const multiplication = calculator.multiplication(5, 12);
const division = calculator.division(5, 2);

// console.log("sum ===", sum);
// console.log("subtraction ===", subtraction);
// console.log("multiplication ===", multiplication);
// console.log("division ===", division);
