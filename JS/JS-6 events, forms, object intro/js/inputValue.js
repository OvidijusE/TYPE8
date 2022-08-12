"use strict";

const btn1El = document.getElementById("btn1");
const resultEl = document.getElementById("result");

const input1El = document.getElementById("input1");

btn1El.addEventListener("click", function () {
  //   perkelit reiksme is input i resultEl
  //  result = input
  //   resultEl.textContent = inputEl.value
  resultEl.textContent = input1El.value;
  //   console.log("input1El ===", input1El);
  //   isvalyti ivesties lauka;
  input1El.value = "";
});

input1El.addEventListener("input", function () {
  resultEl.textContent = input1El.value;
});
