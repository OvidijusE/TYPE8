"use strict";

const baseUrl = "https://magnetic-melon-yam.glitch.me";
const mainContainer = document.getElementById("main");
const usersTable = document.getElementById("users-table");

function usersInfo(vip) {
  fetch(`${baseUrl}`)
    .then((resp) => resp.json())
    .then((data) => {
      mainContainer.innerHTML = "";
      if (vip === true) {
        const vip = data.filter((a) => a.vip);
        vip.forEach((b) => {
          mainContainer.insertAdjacentHTML("beforeend", createTable(b));
        });
      } else {
        data.forEach((obj) => {
          console.log(obj);
          mainContainer.insertAdjacentHTML("beforeend", createTable(obj));
        });
        splitName();
      }
    })
    .catch((error) => console.log(error));
}
usersInfo();

function createTable(usersObj) {
  return `
    <table id="users-table">
      <thead>
        <tr>
          <th>Id</th>
          <th id="th-name">Name</th>
          <th>City</th>
          <th>Favorite color</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${usersObj.id}</td>
          <td id="user-name">${usersObj.name}</td>
          <td>${usersObj.city}</td>
          <td>${usersObj.fav_color}</td>
        </tr>
      </tbody>
    </table>
    `;
}

const checkboxEl = document.createElement("input");
checkboxEl.setAttribute("type", "checkbox");
mainContainer.insertAdjacentElement("beforebegin", checkboxEl);

checkboxEl.addEventListener("input", (e) => {
  if (e.target.checked) {
    usersInfo(true);
  } else {
    usersInfo(false);
  }
});

// function splitName(lastName) {
//   const thUserName = document.getElementById("th-name");
//   const tdUserName = document.getElementById("user-name");
//   // last name
//   const tableHeadingLastName = document.createElement("th");
//   const tableDataLastName = document.createElement("td");
//   tableDataLastName.setAttribute("id", "user-last-name");

//   thUserName.insertAdjacentElement("afterend", tableHeadingLastName);
//   tableHeadingLastName.textContent = "Last name";

//   tdUserName.insertAdjacentElement("afterend", tableDataLastName);
//   tableDataLastName.textContent = "";
// }
