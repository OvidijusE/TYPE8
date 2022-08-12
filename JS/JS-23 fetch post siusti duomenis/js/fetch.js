"use strict";

console.log("fetch post");

//1. nusitaikyti i form
const formEl = document.forms[0];
// 2. uzdeti submit event listener
formEl.addEventListener("submit", (event) => {
  // 3.sustabdyti formos siuntima su perkrovimu
  event.preventDefault();
  // 4. surinkti inputu reiksmes ir sudeti i objektus
  const newPost = {
    title: formEl.elements.title.value,
    body: formEl.elements.body.value,
    userId: formEl.elements.userId.value,
  };
  console.log("newPost ===", newPost);

  // 5. siusti naujo post duomenis su fetch
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(newPost),
  })
    .then((resp) => {
      console.log("resp ===", resp);
      if (!resp.ok) {
        throw new Error("nepavyko sukurti");
      }
      return resp.json();
    })
    .then((ats) => {
      // sekmingas sukurimas
      // reset() isvalo duomenis
      formEl.reset();
      showAlert("Postas sukurtas");
    })
    .catch((error) => {
      showAlert("Klaida, postas nesukurtas", "fail");
      console.log(error.message);
    });
});

function showAlert(msg, tipas) {
  // parodyti laikinai sekmes pranesima
  const alertEl = document.createElement("h3");
  const extraClass = tipas === "fail" ? "danger" : "";
  alertEl.className = "alert " + extraClass;
  alertEl.textContent = "Postas sukurtas";
  document.body.prepend(alertEl);
  setTimeout(() => {
    alertEl.remove();
  }, 3000);
}

// function showFailAlert() {
//   // parodyti klaidos
//   const alertEl = document.createElement("h3");
//   alertEl.className = "alert danger";
//   alertEl.textContent = "Klaida, postas nesukurtas";
//   document.body.prepend(alertEl);
//   setTimeout(() => {
//     alertEl.remove();
//   }, 3000);
// }
