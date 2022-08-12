"use strict";

const now = new Date();
console.log("now ===", now);

// const data = new Date(2022, 03, 15);
// console.log("data ===", data);

const data2 = new Date("1980-03-15");
console.log("data2 ===", data2);

const utcNow = now.toUTCString();
console.log("utcNow ===", utcNow);
