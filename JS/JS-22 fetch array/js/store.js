"use strict";
// https://preview.colorlib.com/theme/winkel/#

// const baseUrl = "https://fakestoreapi.com";
const baseUrl = "fakeStore.json";
const mainContainer = document.getElementById("main-container");
// parsisiunciam products is fake store api

function getProduct(items) {
  fetch(`${baseUrl}`)
    .then((resp) => resp.json())
    .then((data) => {
      console.log("data ===", data);
      data.forEach((uObj) => {
        // console.log(uObj);
        // kvieciam funkcija + paduodam parametrus
        mainContainer.insertAdjacentHTML("beforeend", createSingleCard(uObj));
      });
    })
    .catch((error) => console.log(error.message));
}
getProduct();

//   sugeneruojam produktu korteles kaip pavyzdyje

// 1. pasirasyti html ir css vienos prekes sukukrimui
// sukurti div  su funkcija

// sukurti div su img su paragrafais

function createSingleCard(userObject) {
  // console.log("userObject ===", userObject);
  return `
  <div id="card">
  <img id="item-image" src="${userObject.image}" alt="" />
  <p id="item-title">${userObject.title}</p>
  <p id="item-description">${userObject.description}</p>
  <p id="item-price">${userObject.price}</p>
  <p id="item-rating">${userObject.rating.rate}</p>
</div>
`;
}

// 2. kartoti ta htmla konteineryje su duomenimis is fake store ir su kurti 20 prekiu

// 3. sukurti funkcija kuriai padavus ratinga, ji grazina zvaigzdutes.
