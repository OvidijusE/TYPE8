"use strict";

const btnEl = document.getElementById("btn1");
const h3El = document.getElementById("joke");

btnEl.addEventListener("click", () => {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((respone) => respone.json())
    .then((data) => {
      let joke = data.value;
      h3El.innerHTML = joke;
    })
    .catch((error) => console.log(data));
});
