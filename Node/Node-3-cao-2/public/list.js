"use strict";

const base_url = "http://localhost:3002/";

const outputEl = document.querySelector(".output");
const formEl = document.querySelector(".receive-form");

// neveikia
async function getNames() {
  try {
    const resp = await fetch(`${base_url}api/names`);
    console.log("resp ===", resp);
    if (!resp.ok) {
      throw new Error(`Error: ${resp.status}`);
    }
    const data = await resp.json();
    createNamesList(data);
    console.log("data ===", data);
  } catch (error) {
    throw new Error(`Could not fetch names: ${error}`);
  }
}
getNames();

const ulEl = document.createElement("ul");
document.body.append(ulEl);

let outputString = "";

function createNamesList(obj) {
  obj.forEach((item) => {
    outputString += `
      <li class="name-output">Name: ${item.name}</li>
      <li class="last-name-output">Last name: ${item.lastName}</li>
`;
  });
  ulEl.innerHTML = outputString;
}
