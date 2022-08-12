"use strict";

// 2. Kitame puslapyje pasirašykite formą, kuri pridės produktą. Pridėjus, išmes alert'ą, kad sėkmingai pridėtas ir nukreips (redirect) į pirminį produktų atvaizdavimo puslapį.
const baseUrl = "https://golden-whispering-show.glitch.me";

const formEl = document.querySelector(".form");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const newProductObj = {};
  const productMembers = ["image", "title", "price"];
  productMembers.forEach((memb) => {
    newProductObj[memb] = formEl.elements[memb].value;
  });
  createPost(newProductObj);
});

async function createPost(newData) {
  const resp = await fetch(baseUrl, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(newData),
  });
  const answerError = await resp.json();
  console.log("answerError ===", answerError);
  // cia dar reiktu pataisyti su tom success ir fail message
  if (answerError.message === false) {
    handleErrors(answerError.error);
  }
  if (answerError.message === "Product added") {
    window.location.href = "cao.html";
  }
}

function handleErrors(errorArr) {
  const errString = errorArr.map((errorObj) => `<p>${errorObj.message}</p>`).join("");
  const divEl = document.createElement("div");
  divEl.innerHTML = errString;
  formEl.before(divEl);
}

// reikia pabaigti su pridejimu
