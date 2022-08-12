"use strict";

// 1.Jums paskambino pažinčių portalas – jiems reikia staigiai sukurti front-endą, kuris pasiimtų duomenis iš https://randomuser.me/api/ir juos atvaizduotų panašioje kortelėje kaip čia (dizainas neturi atitikti, bet padarykit tvarkingai - jį galite pilnai su HTML/CSS pasirašyti, bet norintiems sunkumo - pabandykite ir su JS):

const profilePic = document.getElementById("profile-pic");
const nameEl = document.getElementById("name");
const lastNameEl = document.getElementById("lastName");
const ageEl = document.getElementById("age");
const emailEl = document.getElementById("email");

fetch("https://randomuser.me/api/")
  .then((resp) => resp.json())
  .then((data) => {
    profilePic.src = data.results[0].picture.large;
    nameEl.textContent = data.results[0].name.first + " " + data.results[0].name.last;
    ageEl.textContent = data.results[0].dob.age + " years old";
    emailEl.textContent = data.results[0].email;
  })
  .catch((error) => console.log(error));

// 2. Naudojant "https://boiling-reaches-93648.herokuapp.com/week-3/party" - pasiimkite informaciją iš šito puslapio ir naudojant skirtingus array metodus, transformuokite duomenis bei išmeskite true/false ekrane - ar "Kristupas Lapeika" yra VIP, ar ne?

// nebaigtas
const inputEl = document.getElementById("enter-name");
const buttonEl = document.getElementById("button");

buttonEl.addEventListener("click", () => {
  fetch("https://boiling-reaches-93648.herokuapp.com/week-3/party")
    .then((resp) => resp.json())
    .then((data) => {
      const Kristupas = data.filter((uObj) => uObj.name === "Kristupas Lapeika");
      if (Kristupas[0].vip !== true) {
        console.log("Kristupas Lapeika yra vip");
      } else {
        console.log("Kristupas Lapeika nėra vip");
      }
    })
    .catch((error) => console.warn(error));
});
