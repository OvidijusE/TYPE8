"use strict";

console.log("Hello form");

// nusitaikyti i elementus
// formos elementai
const formEl = document.getElementById("userForm");
const usernameEl = document.getElementById("username");
const emailEl = document.getElementById("email");
// select elementas
const townSelectEl = document.getElementById("town");
// range elementas
const rangeEl = document.getElementById("points");
// result elementai
const out1El = document.getElementById("out1");
const out2El = document.getElementById("out2");
const out3El = document.getElementById("out3");
const sliderValueEl = document.querySelector(".value");

// uzdeti event listener ir sustabdyti siuntima

formEl.addEventListener("submit", (event) => {
  // sustabdyti funkcija nuo submit
  event.preventDefault();
  console.log("in controll");
  //   clear errors
  usernameEl.nextElementSibling.textContent = "";
  //   username reiksme
  console.log(usernameEl.value);
  //   reiksmiu paemimas
  //   atvaizduoti reiksme i reuzultata // trim nukerpa tuscius tarpus prieky ir gale
  const userNameValue = usernameEl.value.trim();
  const emailValue = emailEl.value;
  const townValue = townSelectEl.value;
  const rangeValue = rangeEl.value;
  //   validation
  if (!isValid(userNameValue)) {
    //   nusitaikom i po inputu einanti elementa
    return;
  }

  //   console.log("townValue ===", townValue);
  //   //   reiksmiu perkleimas i elementus
  //   out1El.textContent = userNameValue;
  //   //   email reiksme i email laukeli
  //   out2El.textContent = emailValue;
  //   //   town reiksme i town laukeli
  //   out3El.textContent = townValue;
  valuesToResults(userNameValue, emailValue, townValue);
});

function valuesToResults(userNameValue, emailValue, townValue) {
  // reiksmiu perkelimas i rezultatus
  out1El.textContent = userNameValue;
  out2El.textContent = emailValue;
  out3El.textContent = townValue;
}

function isValid(value) {
  if (value.length <= 3) {
    usernameEl.nextElementSibling.textContent = "Per trumpas username";
    return false;
  } else {
    return true;
  }
}

// range handler
rangeEl.addEventListener("input", sliderValueHandle);

function sliderValueHandle(event) {
  // event.target - yra range elementas
  // event.target.value - yra dabartine reiksme
  const reiksme = event.target.value;
  //   ikelti reiksme is sliderio i <strong class="value"></strong>
  sliderValueEl.textContent = reiksme;
}

function startValueSlider() {
  sliderValueEl.textContent = rangeEl.value;
}
startValueSlider();
