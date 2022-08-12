"use strict";

sayHiDeclaration();
// function declaration
function sayHiDeclaration() {
  console.log("Hi");
}
// function invocation
sayHiDeclaration();

// sayHiExpression(); negalima naudoti auksciau uz funkcijos aprasyma
// function expression
const sayHiExpression = function () {
  console.log("HiExpression");
};

const fn = {
  sum: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
};

const minusResul = fn.minus(50, 40);
console.log("minusResul ===", minusResul);

// console.log("sayHiDeclaration() ===", sayHiDeclaration());

const anonymFn = function () {
  console.log("hello world");
};
// ES6 js version introduced, arrow function
const arrowFn = () => console.log("hello world");

anonymFn();
arrowFn();

// anonimines funkcijos kurios grazina rezultata

function sumValues(a, b) {
  return a + b;
}
console.log(sumValues(10, 5));

const sumValues1 = function (a, b) {
  return a + b;
};

const sumValuesArrows = (a, b) => {
  return a + b;
};
// => grazoma reiksme su return jeigu nera ()

const sumValuesArrowReturn = (a, b) => a + b;

console.log(sumValuesArrows(10, 4));
console.log(sumValuesArrowReturn(5, 3));
