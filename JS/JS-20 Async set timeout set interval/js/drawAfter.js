"use strict";

const things = ["red", "green", "blue"];
const ulEl = document.getElementById("ul");

// callback
let readyColors = [];
function getThings(callback) {
  setTimeout(() => {
    readyColors = things;
    callback();
  }, 2000);
}

function drawThings() {
  const stringEls = readyColors
    .map((col) => {
      return `<li>${col}</li>`;
    })
    .join("");
  console.log("stringEls ===", stringEls);
  ulEl.innerHTML = stringEls;
}
getThings(drawThings);
// drawThings(readyColors);
console.log("readyColors ===", readyColors);
