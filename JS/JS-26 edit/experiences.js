"use strict";

// pasiimti info
const baseUrl = "https://zany-skitter-caper.glitch.me/experiences";
const cardsContainerEl = document.querySelector(".experience");

async function getPosts() {
  const resp = await fetch(baseUrl);
  const dataInJs = await resp.json();
  console.log("dataInJs ===", dataInJs);
}
getPosts();

// generuojam korteles

function makeCards(cardsArr, dest) {
  dest.innerHTML = "";
  cardsArr.forEach((cObj) => {
    dest.append(renderCard(cObj));
  });
}

function renderCard(cardObj) {
  const divEl = document.createElement("div");
  divEl.className = "work-experience";
  divEl.innerHTML = `
  
  <h4 class="from-to">${cardObj.startYear}<span>${cardObj.finishYear}</h4>
  <h4 class="role">${cardObj.position}</h4>
  <p class="company-name">${cardObj.companyName}</p>
  <p class="description">
    ${cardObj.description}
  </p>

  `;
}
