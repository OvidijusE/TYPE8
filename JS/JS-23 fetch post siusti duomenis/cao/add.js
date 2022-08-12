"use strict";

// 2.Sukurkite papildomą puslapį, add.html, kuriame būtų forma su dviem inputais - brand ir model; šie paduotų su post'u informaciją į base url (formatas: objektas su dviem properties: brand ir model).

// 3.Sukurkite notification - t.y. sėkmingai užpildžius formą ir gavus patvirtinimą, turi virš formos rašyti, kad duomenys sėkmingai išsaugoti; o jei blogai - išmesti errorą.

const formEl = document.forms[0];

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const carObject = {
    brand: formEl.elements.brand.value,
    model: formEl.elements.model.value,
  };
  console.log("carObject ===", carObject);
  fetch("https://olive-bead-glazer.glitch.me", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(carObject),
  })
    .then((resp) => {
      if (!resp.ok) {
        throw new Error("Fail");
      }
      return resp.json();
    })
    .then((answer) => {
      formEl.reset();
      showAlert("OK!");
    })
    .catch((error) => {
      showAlert("Error", "fail");
      console.log(error.message);
    });
});

function showAlert(message, type) {
  const alertEl = document.createElement("h2");
  const extraClass = type === "fail" ? "danger" : "";
  alertEl.className = "alert " + extraClass;
  alertEl.textContent = message;
  document.body.prepend(alertEl);
  setTimeout(() => {
    alertEl.remove();
  }, 2000);
}
