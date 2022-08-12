"use strict";
const baseUrl = "https://jsonplaceholder.typicode.com";
// nusitaikom i mygtuka ir app elementa
const usersBtnEl = document.getElementById("user-btn");
const usersSortBtnEl = document.getElementById("sort-by-name");
const appEl = document.getElementById("app");

// funkcija kuri parsiuncia duomenis + sort
function getUsers(doYouNeedToSort) {
  fetch(`${baseUrl}/users`)
    .then((resp) => resp.json())
    .then((data) => {
      console.log("data ===", data);
      if (doYouNeedToSort === true) {
        data.sort((a, b) => (a.name > b.name ? 1 : -1));
      }

      generateUsersList(data);
    })
    .catch((err) => console.log(err.message));
}

// sort
// function getUsersSort() {
//   fetch(`${baseUrl}/users`)
//     .then((resp) => resp.json())
//     .then((data) => {
//       console.log("data ===", data);
//       data.sort((a, b) => (a.name > b.name ? 1 : -1));
//       generateUsersList(data);
//     })
//     .catch((err) => console.log(err.message));
// }

function singleUserData(id) {
  fetch(`${baseUrl}/users/${id}`)
    .then((resp) => resp.json())
    .then((data) => createSingleUserInfo(data))
    .catch((err) => console.log(err.message));
}

// mygtuko paspaudimu parsisiusti visus vartotojus
usersBtnEl.addEventListener("click", getUsers);

// is gautu duomenu sugeneruoti li el (button)
// sugeneruoti ol el ir sudeti i ji li el. Ol el patalpinti appEl
function generateUsersList(usersArr) {
  appEl.innerHTML = null;
  const olEl = document.createElement("ol");
  usersArr.forEach((uObj) => {
    const madeLi = makeOneLi(uObj.id, uObj.name, uObj.email, uObj.company.name);
    olEl.append(madeLi);
  });
  appEl.append(olEl);
}

// pagamina viena li
function makeOneLi(id, name, email, compName) {
  const liEl = document.createElement("li");
  liEl.textContent = `${name}  ${email}  ${compName} `;
  const btnEl = document.createElement("button");
  btnEl.textContent = "more info";
  //   paspaudus get single user
  btnEl.addEventListener("click", () => getSingleUser(id));

  liEl.append(btnEl);
  return liEl;
}

function getSingleUser(id) {
  console.log("getSingleUser", id);
  //   parsisiusti vartotojo duomenis
  singleUserData(id);
  //  sukurti korteles elementa

  // uzpildyti su vartotojo duomenimis
}

function createSingleUserInfo(uObj) {
  const cardHtml = `
    <div class="card">
    <h3>${uObj.name}</h3>
    <p>Address: street: ${uObj.address.street} town : ${uObj.address.city} zip: ${uObj.address.zipcode}</p>
    <p>tel: ${uObj.address.phone}</p>
    <h4>${uObj.company.catchPhrase}</h4>
  </div>
    `;
  appEl.insertAdjacentHTML("afterbegin", cardHtml);
}
// mygtuko 'read more' paspaudimu parsiunciam tik nurodyto vartotojo info

// atvaizduojam papildomoj korteleje virs saraso

// 1. paspaudus mygtuka atspausdinkite to vartotojo id ant kurio paspausta.

// 2. turedami id parisiuskite su papildomu fetch info apie ta vartotoja

// 3. sukurti ir supildyti vartotojo korteles info.

// 4. atvaizduojam varda, addreso, gatve, miesta ir zip koda, telefona ir catchphrase

// isrikiuoti sarasa pagal name

usersSortBtnEl.addEventListener("click", () => getUsers(true));
