"use strict";

// h1
const h1El = document.createElement("h1");
h1El.setAttribute("class", "main-title");
h1El.textContent = "Yes it is dynamic";
document.body.prepend(h1El);

const sectionEl = document.createElement("section");
h1El.insertAdjacentElement("afterend", sectionEl);

// section
// title
const sectionTitleEl = document.createElement("h2");
sectionTitleEl.textContent = "Section title";
// p
const sectionParaEl = document.createElement("p");
sectionParaEl.setAttribute("class", "text");
sectionParaEl.textContent = "Hello i am section text";

sectionEl.insertAdjacentElement("afterbegin", sectionTitleEl);
sectionEl.insertAdjacentElement("beforeend", sectionParaEl);

// article
const articleEl = document.createElement("article");
articleEl.setAttribute("class", "about");
sectionEl.insertAdjacentElement("afterend", articleEl);

// h3
const articleH3El = document.createElement("h3");
articleH3El.setAttribute("class", "a__title");
articleH3El.textContent = "About me";
articleEl.insertAdjacentElement("afterbegin", articleH3El);
// p summary
const articlePara1 = document.createElement("p");
articlePara1.setAttribute("class", "a__summary");
articlePara1.textContent = "This is short summary about me";
articleH3El.insertAdjacentElement("afterend", articlePara1);

// h4
const articleH4El = document.createElement("h4");
articleH4El.setAttribute("class", "a__towns-title");
articleH4El.textContent = "Towns i have visited";
articlePara1.insertAdjacentElement("afterend", articleH4El);

// ul
const ulEl = document.createElement("ul");
articleH4El.insertAdjacentElement("afterend", ulEl);

// li 1
const li1 = document.createElement("li");
li1.setAttribute("class", "a__towns");
li1.textContent = "Kaunas";
ulEl.insertAdjacentElement("afterbegin", li1);

// li 2
const li2 = document.createElement("li");
li2.setAttribute("class", "a__towns");
li2.textContent = "Vilnius";
li1.insertAdjacentElement("afterend", li2);

// li 3
const li3 = document.createElement("li");
li3.setAttribute("class", "a__towns");
li3.textContent = "Klaipėda";
li2.insertAdjacentElement("afterend", li3);

// button
// const button = makeEl ("button", "Learn more", "");
const button = document.createElement("button");
button.setAttribute("id", "more-btn");
button.textContent = "Learn more";
li3.insertAdjacentElement("afterend", button);

// ikelti trukstamas dienas
const savaitesDienos = document.getElementById("savaite");

const ketvritadienis = document.createElement("li");
ketvritadienis.textContent = "Ketvirtadienis";
savaite.insertBefore(ketvritadienis, savaitesDienos.children[3]);

const sestadienis = document.createElement("li");
sestadienis.textContent = "Šeštadienis";
savaite.insertBefore(sestadienis, savaitesDienos.children[5]);
