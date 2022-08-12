"use strict";

// 6. Sukurk programą, kur paspaudus ant mygtuko - sugeneruoja random skaičių nuo 1 iki 100 ir jį išmeta kaip h1 tekstą.
// document.querySelector("button").addEventListener("click", show);
// function show() {
//   let random2 = Math.floor(Math.random() * 100 + 1);
//   document.querySelector("h1").innerHTML = random2;
// }

// 7.Sukurk programą, kurioje du mygtukai - "Turiu bent 18 metų" ir "Mažiau nei 18 metų". Jei paspaudžia ant pirmo mygtuko - išmeta h1 tekstą "Alus". Jei antrą paspaudžia - išmeta alert su "nepilnametis - nieko neturim".

let amzius = 18;
let verse1 = "Alus";
let verse2 = "Pienas";

document.querySelector("button1", "button2").addEventListener("click", mustGo);

function mustGo() {
  document.querySelector("button1").innerHTML = verse1;
  alert("Alus");
  document.querySelector("button2").innerHTML = verse2;
  alert("Pienas");
}
