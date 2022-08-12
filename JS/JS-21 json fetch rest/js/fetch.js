"use strict";

// fetch(adresas, {opciju objektas})
// response - spec atsakymo objektas su info apie uzklausa

fetch("people.json")
  .then((response) => {
    console.log(response);
    // paverciam gautu json duomenis i javascript
    return response.json();
  })
  .then((dataInJS) => {
    console.log("dataInJS ===", dataInJS);
  })
  .catch((error) => console.warn(error));

fetch("main.txt")
  .then((resp) => resp.text())
  .then((data) => console.log("data ===", data))
  .catch((error) => console.log(error));
