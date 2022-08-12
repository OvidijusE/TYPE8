"use strict";

function getArray() {
  return ["Blue", "Red", "Green"];
}

const result = getArray();
console.log("result ===", result);
// issaugoti 1 reiksme kint "pirm"
// const pirm = result[0];
// const antr = result[1];
// console.log("pirm ===", pirm);
// console.log("antr ===", antr);

// masyvo destrukturizacija
const [pirm, antr, tr] = result;
console.log(pirm, antr, tr);

// ES6: Destructuring Arrays I
// const arr = [1, 2, 3, 4, 5, 6]
// const [a, b] = arr  atsakymas
// let a = arr[0]
// let b = arr[1]

// console.log(a) // outputs 1
// console.log(b) // outputs 2

const arr = [1, 2, 3, 4, 5, 6];
const [a, b] = arr;
console.log("[a, b] ===", [a, b]);
// 1.
// Number Split
// numberSplit(4) ➞ [2, 2]
// numberSplit(10) ➞ [5, 5]
// numberSplit(11) ➞ [5, 6]
// numberSplit(-9) ➞ [-5, -4]

function numberSplit(nr) {
  const half = nr / 2;
  return [Math.floor(half), Math.ceil(half)];
}

const split1 = numberSplit(-9);
console.log("split1 ===", split1);

// 2.Sort by String Length https://edabit.com/challenge/aNZzLBxQpidWBF26X
// sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]

// sortByLength(["apple", "pie", "shortcake"]) ➞ ["pie", "apple", "shortcake"]

// sortByLength(["may", "april", "september", "august"]) ➞ ["may", "april", "august", "september"]

// sortByLength([]) ➞ []

// const arrayLength = ["may", "april", "september", "august"];

function sortByLength(arr) {
  arr.sort((a, b) => a.length - b.length);
  console.log(arr);
}

sortByLength(["apple", "pie", "shortcake"]);
sortByLength(["a", "ccc", "dddd", "bb"]);
sortByLength(["may", "april", "september", "august"]);

// 3.Is the Average of All Elements a Whole Number? https://edabit.com/challenge/arzsQcGsstJxHAnGi
