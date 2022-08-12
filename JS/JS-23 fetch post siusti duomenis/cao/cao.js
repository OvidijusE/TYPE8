"use strict";

const base_url = "https://olive-bead-glazer.glitch.me";
const mainContainer = document.getElementById("main-container");

// 1.Sukurkite puslapį, index.html, kurį užkrovus atsiranda lentelė su visais automobiliais iš base URL.

function getElements() {
  fetch(`${base_url}`)
    .then((resp) => resp.json())
    .then((data) => {
      data.forEach((obj) => {
        console.log(obj);
        mainContainer.insertAdjacentHTML("afterbegin", createCar(obj));
      });
    })
    .catch((error) => console.log(error.message));
}
getElements();

function createCar(uObj) {
  return `
  <table id="car_table">
  <thead>
    <tr>
      <th>Brand</th>
      <th>Model</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${uObj.brand}</td>
      <td>${uObj.model}</td>
    </tr>
  </tbody>
</table>
    `;
}
