"use strict";

/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" reikšmė ir "avatar_url" paveiklslėlis (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const buttonEl = document.getElementById("btn");
const outputEl = document.getElementById("output");

async function getUsersData() {
  try {
    const resp = await fetch(ENDPOINT);
    if (!resp.ok) {
      throw new Error(`Error: ${resp.status}`);
    }
    const data = await resp.json();
    buttonEl.addEventListener("click", () => renderData(data, outputEl));
  } catch (error) {
    throw new Error(`Could not get users: ${error}`);
  }
}
getUsersData();

function renderData(dataArr, dest) {
  dest.innerHTML = dataArr
    .map(
      (dataObj) =>
        `
      <div class="user-card">
      <p class="login">Login : ${dataObj.login}</p>
      <img class="avatar" src="${dataObj.avatar_url}" alt="profile-img" />
      </div>
      `
    )
    .join("");
}
