"use strict";
console.log("cao");

const baseUrl = "https://olive-bead-glazer.glitch.me";
const sendBtn = document.getElementById("send");

sendBtn.addEventListener("click", sendBrandModel);

async function sendBrandModel() {
  try {
    const res = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        brand: "BMW",
        model: "X7",
      }),
    });
    const data = await res.json();
    console.log("data", data);
    const carDataBeAsync = getCars();
    console.log("carDataBeAsync ===", carDataBeAsync);
    const carData = await getCars();
    console.log("carData ===", carData);
    renderCars(carData.filter((m) => m > 1));
  } catch (error) {
    console.log(error.message);
  }
}

async function getCars() {
  try {
    const res = await fetch(baseUrl);
    const data = await res.json();
    console.log("data", data);
    return data;
  } catch (error) {
    console.log(error.message);
  }

  // fetch(baseUrl)
  //   .then((res) => res.json())
  //   .then((data) => console.log("data", data))
  //   .catch((error) => console.log(error.message));
}
getCars();

function renderCars(arr) {}
