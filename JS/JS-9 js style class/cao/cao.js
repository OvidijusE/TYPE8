"use strict";

// 1.H1 elemente parašykite savo vardą. Paspaudus ant vardo - tegul jūsų vardas atsiranda per vidurį ekrano, dvigubai didesniu font'o dydžiu ir raudona spalva.
const didelisVardas = document.querySelector("h1");

didelisVardas.addEventListener("click", () => {
  didelisVardas.style.fontSize = "4rem";
  didelisVardas.style.textAlign = "center";
  didelisVardas.style.color = "tomato";
});

// 2.Išbandome ekraną. Sukurkite mygtuką su HTML. JS pasirašykite, kad mygtukas position: absolute ir jo lokacija - viršus, kairė. Paspaudus ant mygtuko, jis turi peršokti į apačią dešinę pusę. Paspaudus vėl - į viršų, kairę pusę. Ir taip šokinėti įstrižai per ekraną kiekvieno paspaudimo metu.

const buttonEl = document.querySelector(".moving-button");
buttonEl.style.position = "absolute";

function toggleBottom() {
  buttonEl.classList.toggle("bottom-right");
}

// judesys i apacia ir desine
buttonEl.addEventListener("click", toggleBottom);

function toggleBottom() {
  buttonEl.classList.toggle("bottom-right");
}

// Dvieju funkciju isvkietimas
// buttonEl.addEventListener("click", () => {
//   toggleBottom();
//   rotate();
// });

// 3.Pakoreguokite antrą pratimą, kad mygtukas suktųsi ratu - laikrodžio rodykle.
// kad suktusi
function rotate() {
  buttonEl.classList.toggle("rotated");
}

buttonEl.addEventListener("click", rotate);
function rotate() {
  buttonEl.classList.toggle("rotated");
}

// 4.Sukurkite input elementą (formos ar mygtuko nereikia), kur vartotojas galės įrašyti savo vardą. Kai rašo - keičiasi puslapio stilius. Jei įrašytos yra du simboliai arba mažiau - viso puslapio fonas raudonas. Jei daugiau nei du simboliai - puslapio fonas žalias.

const userInput = document.querySelector("#username");
const bodyEl = document.querySelector("body");

userInput.addEventListener("input", (event) => {
  event.preventDefault();
  if (userInput.value.length < 3) {
    bodyEl.style.backgroundColor = "tomato";
  } else if (userInput.value.length >= 3) {
    bodyEl.style.backgroundColor = "limegreen";
  } else {
    bodyEl.style.backgroundColor = "white";
  }
});

// 5.Sukurkite mygtuką HTML'e. O su JS pasirašykite array su keturiom spalvom (["red", "green", "blue", "yellow"]). Paspaudus ant mygtuko - tegul jo spalva pasikeičia į atsitiktinę spalvą.

const keiciasiSpalvos = document.querySelector(".keiciasi");

const newArray = ["red", "green", "blue", "yellow"];

keiciasiSpalvos.addEventListener("click", (event) => {
  event.preventDefault();
  keiciasiSpalvos.style.backgroundColor = newArray[Math.floor(Math.random() * newArray.length)];
});

// 6.Pasikoreguokime penktą pratimą - šį kartą array nereikės, keisime RGB spalvas. Paspaudus ant mygtuko, susigeneruoja trys random skaičiai (nuo 0 iki 255, imtinai), šie skaičiai atvaizduoja spalvų paletę (red, green, blue => RGB). Padarykite, kad paspaudus ant mygtuko, jo fono spalva pasikeistų į atsiktinę spalvą pagal RGB paletę.

const paskutinisMygtukas = document.querySelector(".paskutinis");

paskutinisMygtukas.addEventListener("click", (event) => {
  event.preventDefault();
  const randomSkaicius1 = Math.floor(Math.random() * 256);
  const randomSkaicius2 = Math.floor(Math.random() * 256);
  const randomSkaicius3 = Math.floor(Math.random() * 256);
  const skaiciai = `rgb(${randomSkaicius1}, ${randomSkaicius2}, ${randomSkaicius3})`;
  paskutinisMygtukas.style.backgroundColor = skaiciai;

  console.log(skaiciai);
});
