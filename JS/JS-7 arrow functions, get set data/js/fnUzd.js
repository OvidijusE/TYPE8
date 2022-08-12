"use strict";

// parasyti visai budais funckija kuri paima 3 sk ir grazina// visus skaicius sudetus ir atimti 10

// function declaration
function pirmaSudetis(a, b, c) {
  return a + b + c - 10;
}
console.log(pirmaSudetis(5, 4, 3));

// function expression
const antraSudetis = function (d, e, f) {
  return d + e + f - 10;
};

console.log(antraSudetis(4, 4, 3));

// arrow function su atskiru return
const treciaSudetis = (g, h, i) => {
  return g + h + i - 10;
};
console.log(treciaSudetis(6, 6, 2));

// arrow function be return
const ketvirtaSudetis = (j, k, l) => j + k + l - 10;

console.log(ketvirtaSudetis(4, 5, 3));
