"use strict";
//
const baseUrl = "https://golden-whispering-show.glitch.me";

// 1. Pasirašykite GET, kuris atsisiųs visus produktus ir atvaizduos vieną šalia kito (4 per eilutę):

const mainEl = document.querySelector(".main");

// atsiusti produktus
async function getProducts() {
  const resp = await fetch(baseUrl);
  const dataInJs = await resp.json();
  console.log("dataInJs ===", dataInJs);

  renderCards(dataInJs, mainEl);
}
getProducts();

function renderCards(cardsArr, dest) {
  dest.innerHTML = "";
  cardsArr.forEach((cObj) => {
    dest.append(renderProduct(cObj));
  });
}

function renderProduct(productObj) {
  const divEl = document.createElement("div");
  divEl.className = "product-container";
  divEl.innerHTML = `
  <div class="product">
  <img src="${productObj.image}" alt="" />
  <h3 class="title">${productObj.title}</h3>
  <p class="price">€${productObj.price}</p>
</div>
  `;
  const buttonEl = document.createElement("button");
  buttonEl.classList = "btn";
  buttonEl.textContent = "Ištrinti";
  buttonEl.addEventListener("click", () => deleteProduct(productObj.id));
  divEl.append(buttonEl);
  return divEl;
}

async function deleteProduct(postId) {
  const patvirtinimas = confirm("Ar jus tikrai norite istrinti?");
  if (patvirtinimas === false) return;

  const resp = await fetch(`${baseUrl}/${postId}`, {
    method: "DELETE",
  });
  const dataInJs = await resp.json();
  console.log("dataInJs delete ===", dataInJs);
  if (dataInJs.deletedCount === 1) {
    getProducts();
  }
}
