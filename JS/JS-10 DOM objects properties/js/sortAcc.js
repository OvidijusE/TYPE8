"use strict";

//1. paspaudus ant mygtuko ASC keicias i DESC ir atvirksciai

const btnEl = document.getElementById("sort-btn");
const orderEl = btnEl.firstElementChild;

btnEl.addEventListener("click", () => {
  //   orderEl.textContent = "DESC";
  //   event.target.firstElementChild.textContent = "DESc"; //kitas budas pasiselekinti
  if (orderEl.textContent === "ASC") {
    orderEl.textContent = "DESC";
  } else {
    orderEl.textContent = "ASC";
  }
});

// 2. kai paspaudiam ant Question 1 parodom po juo esanti elementa,
// dar karta paspaudus paslepiam (classList.toggle())

// const titleEl = document.querySelector(".acc__title");
// const paraEl = document.querySelector(".acc__text");

// titleEl.addEventListener("click", (toggleShow) => {
//   paraEl.classList.toggle("show");
// });

// 3. padarom kad paspaudus nat bet kurio Question el butu parodomas po juo esantis el

// const titleEl = document.querySelectorAll(".acc__title");
// const paraEl = document.querySelectorAll(".acc__text");
// // debugger;
// for (let i = 0; i < titleEl.length; i++) {
//   titleEl[i].addEventListener("click", () => {
//     paraEl[i].classList.toggle("show");
//   });
// }

// 4. padarom kad kai paspaudziam ant elemento, jei yra atsidares kazkuris kitas, tai uzdarom atsidariusius ir paliekam atidaryta tik ta kuri paspaudem.

const titleElArr = document.querySelectorAll(".acc__title");
console.log("titleElArr ===", titleElArr);
for (let i = 0; i < titleElArr.length; i++) {
  const element = titleElArr[i];
  element.addEventListener("click", toggleText);
}
// titleElArr.addEventListener('click', toggleText);

function toggleText(event) {
  // elementas ant kurio paspaudem
  const el = event.target;
  // priekyje esanciam el toglinti klase show
  hideAllAccTexts();
  // el.nextElementSibling.classList.add('show');
  console.log(el.nextElementSibling.scrollHeight);
  el.nextElementSibling.style.height = el.nextElementSibling.scrollHeight + "px";
}
const accTextElArr = document.querySelectorAll(".acc__text");
// console.log('accTextElArr ===', accTextElArr);
function hideAllAccTexts() {
  for (let i = 0; i < accTextElArr.length; i++) {
    const element = accTextElArr[i];
    // element.classList.remove('show');
    element.style.height = 0;
  }
}
console.dir(accTextElArr[1]);
