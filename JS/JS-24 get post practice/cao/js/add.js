"use strict";

const baseUrl = "https://radial-reinvented-shoe.glitch.me";
const formEl = document.querySelector(".form");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  createProperty();
});

async function createProperty() {
  console.log("asd");
  const res = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // nebaigtas
    body: JSON.stringify({
      image: "formEl.elements.image.value",
      city: String(formEl.elements.city.value),
      price: Number(formEl.elements.price.value),
      description: "formEl.elements.description.value",
    }),
  });

  const ats = await res.json();
  console.log("ats ===", ats);
  if (ats.error) {
    //   pranesti apie klaida
    alert("prasome patikrinti duomenis");
  }
  if (ats.msg) {
    alert("Irasyta sekmingai");
  }
}
