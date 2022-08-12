"use strict";

// 1.susukiat nauja html faila
// jame h1 antraste ir mygtukas
// mykguko paspaudimu pakeiciam antraste i 'pakeista su js'

const mygtukasEl = document.getElementById("button2");
const tesktasEl = document.getElementById("tekstas2");

mygtukasEl.addEventListener("click", function () {
  tesktasEl.textContent = "Pakeista su js";
});

// 2. prisideti input el. pakeisti antraste su reiksme is input el.

const inputEl = document.getElementById("input2");

// 3. susikurti div su id result. i ta div deti p elementus su tekstu is input. vienas pridejimas, vienas p elementas su textu
