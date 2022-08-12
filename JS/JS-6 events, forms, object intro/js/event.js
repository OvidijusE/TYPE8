"use strict";

// nusitaikom i elementus

/* <h2 id="result">Nieko</h2>
<button id="btn1">Click me</button> */
const resultEl = document.getElementById("result");
const btn1El = document.getElementById("btn1");

// pridesim eventus

// element.funkcija()
// funkcija(el)

// elementas.addEventListener("koks eventas", funkcija kuri vyks)
btn1El.addEventListener("click", changeText);

let text1Visible = false;

function changeText() {
  console.log("about to change");
  if (text1Visible === false) {
    resultEl.textContent = "nieko";
  } else {
    resultEl.textContent = "I can do addEventListener";
  }
  text1Visible = !text1Visible;
}

btn1El.addEventListener("mouseover", function () {
  console.log("button was hovered");
});
