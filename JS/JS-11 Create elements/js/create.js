"use strict";

// kuriam elementus su js
const articleEl = document.getElementById("art");

// sukuriam elementa
const h1El = document.createElement("h1");
// pridedam teksta
h1El.textContent = "Dinamiskai sukurtas h1";
// pridedam klase
h1El.className = "main-title";
h1El.classList.add = "main-title";
// prideti id
h1El.id = "main";
// prideti bet koki atributa galima su setAttribute(koks atributas. kokia reiksme)
h1El.setAttribute("title", "this is main main title");
// patalpinam teksta i puslapi
// parentEl.apend(createdEl) - idedam i pries uzdarymo

// document.body.append(h1El);
// document.body.prepend(h1El);

console.log("h1El ===", h1El);

// articleEl.after(h1El);
//insertAdjacentElement
articleEl.insertAdjacentElement("beforeend", h1El);

const h2TextEl = "<h2 id = 'yes'>  I am h2 el </h2>";
document.body.insertAdjacentHTML("afterbegin", h2TextEl);
