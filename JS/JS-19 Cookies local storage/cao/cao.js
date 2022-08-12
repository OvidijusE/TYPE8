"use strict";

// 1.Sukurk formą, kuri leis įrašyti vardą - jis bus išsaugojamas į cookies. Jei vardas jau egzistuoja - išmeta tik vardą ir mygtuką, su kuriuo cookies ištrinamas. Jei neegzistuoja - formą.

const formEl = document.getElementById("form");
const inputEl = document.getElementById("vardas");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = inputEl.value;
  const cookieName = localStorage.setItem("name", name);

  if (cookieName !== null) {
    //   button
    const buttonEl = document.createElement("button");
    buttonEl.textContent = "delete";
    inputEl.insertAdjacentElement("afterend", buttonEl);
    // p
    const pEl = document.createElement("p");
    buttonEl.insertAdjacentElement("afterend", pEl);
    pEl.textContent = name;
  }
});
