"use strict";

// kai paspaudziam ant night mode

// pakeisciam card el fono spalva i juoda o spalva i balta

const cardEl = document.querySelector(".card");
const btnNightEl = document.querySelector("#night");

btnNightEl.addEventListener("click", toggleNight);
function makeNightModeOn() {
  cardEl.style.backgroundColor = "black";
  cardEl.style.color = "white";
  classlist;
  cardEl.classList.add("naktis");
}

//   day mode
const btnDayEl = document.querySelector("#day");

btnDayEl.addEventListener("click", toggleNight);
function makeDayModeOn() {
  cardEl.style.backgroundColor = "white";
  cardEl.style.color = "black";
  classlist;
  cardEl.classList.remove("naktis");
}

// trecia funkcija per css
function toggleNight() {
  card2El.classList.toggle("naktis");
}

// isimti mygtukus. Pisideti checkbox su pavadinimu night mode.

// kai pazymim varnele buna night mode spalvos, kai varnele neuzzymeta day mode spalvos

const card2El = document.querySelector(".card");
const checkBoxEl = document.querySelector("#night2");

checkBoxEl.addEventListener("change", () => {
  if (checkBoxEl.checked) {
    card2El.style.backgroundColor = "black";
    card2El.style.color = "white";
  } else {
    card2El.style.backgroundColor = "white";
    card2El.style.color = "black";
  }
});

// prisideti antra kortele ir padaryti kad ji veiktu nepriklausomai nuo pirmos

const card3El = document.querySelector(".card__2");
const button2Night = document.querySelector("#night__2");

button2Night.addEventListener("click", pakeistiNakti);
function pakeistiNakti() {
  card3El.classList.toggle("naktis");
}
