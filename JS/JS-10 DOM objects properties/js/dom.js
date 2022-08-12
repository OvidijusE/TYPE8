"use strict";

// h2 subtitle
const subtitleEl = document.body.children[1];

// nudazom pries tai esancio elemnto spalva
subtitleEl.previousElementSibling.style.color = "tomato";

// padidinti font size po subtitleEl esancio elemento antram vaikiniam elementui
subtitleEl.nextElementSibling.children[1].style.fontSize = "2rem";

// nudazyti zaliai elementa ant kurio paspaudem
document.body.addEventListener("click", (event) => {
  console.log("paspaudei");
  //   console.log("event ===", event); // visas ivykio arba evento objektas
  //elenentas ant kurio buvo paspausta yra event target
  const paspaustasEl = event.target;
  console.log("event target ===", event.target);
  //   uzdeda spalva
  //   jeigu esama spalva zalia tai dazom juodai
  if (paspaustasEl.style.color === "green") {
    paspaustasEl.style.color = "black";
    const dabartinisTekstas = paspaustasEl.textContent;
    paspaustasEl.textContent = dabartinisTekstas.replace(" --zalia", "");
  } else {
    paspaustasEl.style.color = "green";
    paspaustasEl.textContent += " --zalia";
  }
});
