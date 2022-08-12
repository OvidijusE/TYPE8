"use strict";

// 1.Susikuriame h1 elementą, jame įrašome savo vardą, pastilizuojame, kad elementas būtų raudonas ir pridedame jį prie <body>.
const h1El = document.createElement("h1");
// h1El.setAttribute("class", "main-title");
h1El.textContent = "Vardas";
h1El.style.color = "red";
document.body.prepend(h1El);

// 2.Sukuriame <ul> elementą, o jame - tris <li> elementus su mašinų brand'ais. <body> turi atsirasti <ul>, kuriame trys <li>

const ulEl = document.createElement("ul");
h1El.insertAdjacentElement("afterend", ulEl);

const liEl1 = document.createElement("li");
liEl1.textContent = "BMW";
ulEl.insertAdjacentElement("afterbegin", liEl1);

const liEl2 = document.createElement("li");
liEl2.textContent = "TATA";
liEl1.insertAdjacentElement("afterend", liEl2);

const liEl3 = document.createElement("li");
liEl3.textContent = "LADA";
liEl2.insertAdjacentElement("afterend", liEl3);
