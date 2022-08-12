"use strict";

const result1 = addName({}, "Brutus", 300); // ➞ { Brutus: 300 }

const result2 = addName({ piano: 500 }, "Brutus", 400); // ➞ { piano: 500, Brutus: 400 }

const result3 = addName({ piano: 500, stereo: 300 }, "Caligula", 440); // ➞ { piano: 500, stereo: 300, Caligula: 440 }

function addName(obj, name, value) {
  obj[name] = value;
  return obj;
}
console.log("result1 ===", result1);
console.log("result2 ===", result2);
console.log("result3 ===", result3);
