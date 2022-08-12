"use strict";

// nusitaikom i elementus

// skaiciai
const sudetisInput = document.getElementById("number1");
const daugybaInput = document.getElementById("number2");
// mygtukai
const sudetisButton = document.getElementById("sudetis");
const daugybaButton = document.getElementById("daugyba");
// atsakymo laukelis
const atsakymasInput = document.getElementById("atsakymas");

// uzdeti event listener
sudetisButton.addEventListener("click", (event) => {
  event.preventDefault();
  const num1 = sudetisInput.value;
  const num2 = daugybaInput.value;
  atsakymasInput.innerHTML = parseInt(num1) + parseInt(num2);
});

daugybaButton.addEventListener("click", (event) => {
  event.preventDefault();
  atsakymasInput.innerHTML = sudetisInput.value * daugybaInput.value;
});
