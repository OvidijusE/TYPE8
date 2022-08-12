"use strict";

console.log("style.js online");

const h1El = document.querySelector("h1");

console.log("h1El ===", h1El);

// nusitaikom
const textEl = document.querySelector(".text");
// stiliaus keitimas
textEl.style.color = "tomato";

// uzdedam borderi, ir padinga is visu pusiu 20px ir inlineblock
const cardEl = document.querySelector(".card");
cardEl.style.border = "1px solid black";
cardEl.style.padding = "20px";
cardEl.style.display = "inlineBlock";

// <h2 class="title">Card title</h2>

// pakeiciam fonto storis normal,
// font size 35px,
// border bottom 2px solid black
const cardTitleEl = document.querySelector(".title");
cardTitleEl.style.fontWeight = "normal";
cardTitleEl.style.fontSize = "35px";
cardTitleEl.style.borderBottom = "2px solid black";

// my-list
const listEl = document.querySelector(".my-list li:first-child");
listEl.style.fontSize = "2rem";

const listEl2 = document.querySelector(".my-list li:nth-of-type(2)");
listEl2.style.letterSpacing = "5px";

const listEl3 = document.querySelector(".my-list li:nth-child(3)");
listEl3.style.backgroundColor = "black";
listEl3.style.color = "white";

const ulEl = document.querySelector(".my-list");
// pirmas elementas

// gaunam masyva kuriame yra visi musu li elementai
const liElArrayLike = document.querySelectorAll(".my-list li");
console.log("liElArray ===", liElArrayLike);
liElArrayLike[1].style.color = "blue";

// nustatyti fonta iki 100px
const buttonEl = document.getElementById("didinti");

buttonEl.addEventListener("click", () => {
  h1El.style.fontSize = "100px";
});

//1. mazinam fonta per 10px

const buttonMazintiEl = document.getElementById("mazinti");

buttonMazintiEl.addEventListener("click", () => {
  // koks dabartinis dydis?
  const dabartinisDydis = h1El.style.fontSize;
  console.log("dabartinisDydis ===", dabartinisDydis);
  h1El.style.fontSize = parseInt();
  //   string "100px" pasalinti pixelius
  const dabartinioDydzioSkaitineReiksme = dabartinisDydis.replace("px", "");
  const naujaPamazaintaSkaitineReiksme = dabartinioDydzioSkaitineReiksme - 10;
  //   nustatyti i pixelius
  h1El.style.fontSize = naujaPamazaintaSkaitineReiksme + "px";
});

// 2. pakeisti fono spalva

const buttonPakeistiSpalva = document.getElementById("");
