"use strict";

// nusitaikyti i forma

const formEl = document.forms[0];

// 2. uzdeti submit event listeneri
formEl.addEventListener("submit", (e) => {
  // 3. sustabdyti formos siuntima su perkrovimu
  e.preventDefault();
  // 4. surinkit inputu reiksmes ir sudeti i objekta
  const newObject = {
    title: formEl.elements.title.value,
    price: formEl.elements.price.value,
    description: formEl.elements.description.value,
    image: formEl.elements.image.value,
    category: formEl.elements.category.value,
  };
  console.log("newObject ===", newObject);

  // 5. siusti naujo post duomenis su fetch
  fetch("https://fakestoreapi.com/products", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(newObject),
  })
    .then((resp) => {
      console.log("resp ===", resp);
      if (!resp.ok) {
        throw new Error("nepavyko");
      }
      return resp.json();
    })
    .then((answer) => {
      formEl.reset();
      showAlert("Forma sekmingai sukurta");
    })
    .catch((error) => {
      showAlert("Nesekmingas bandymas", "fail");
      console.log(error.message);
    });
});

function showAlert(msg, type) {
  const alertEl = document.createElement("h3");
  const extraClass = type === "fail" ? "danger" : "";

  alertEl.className = "alert " + extraClass;
  alertEl.textContent = msg;
  document.body.prepend(alertEl);
  setTimeout(() => {
    alertEl.remove();
  }, 2000);
}
