console.log(document);

// nusitaikyk i subtitle
const daugybaEl = document.getElementById("daugyba");
const titleEl = document.getElementById("title");

// titleEl.innerHTML = "Pakeiciau is JS";
// titleEl.innerHTML = "<button>Click me</button>";

// for ciklas nuo 5 iki 12 ir sudauginam

let result = 1;

for (let i = 5; i <= 12; i++) {
  result *= i;
}

daugybaEl.innerHTML = result;

// pakeisti elementa kurio id = text ir irasyti savo sakiny

const textEl = document.getElementById("text");

textEl.innerHTML = "Vienas du trys";

// prideti prie esamos titleEl reiksmes " prideta bet ne perrasyta"

textEl.innerHTML += " daugiau teksto";
