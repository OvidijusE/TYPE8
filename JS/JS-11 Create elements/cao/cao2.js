"use strict";

// 3.Visiškai nenaudojant HTML, sukuriame ir pastilizuojame apačioje atvaizduotą puslapį (stiliaus aspektai nėra itin svarbūs, tad žiūrėkite savo nuožiūra kaip turėtų atrodyti puslapis):

const mainContainer = document.createElement("div");
mainContainer.setAttribute("class", "main-container");
mainContainer.style.backgroundColor = "lightblue";
mainContainer.style.width = "50%";
mainContainer.style.height = "60%";
mainContainer.style.paddingTop = "5%";
mainContainer.style.paddingBottom = "5em";
document.body.prepend(mainContainer);

const cardContainer = document.createElement("div");
cardContainer.setAttribute("class", "card-container");
cardContainer.style.backgroundColor = "white";
cardContainer.style.position = "relative";
cardContainer.style.textAlign = "center";
cardContainer.style.paddingTop = "2em";
cardContainer.style.paddingBottom = "12em";
cardContainer.style.height = "50%";
cardContainer.style.marginLeft = "4%";
cardContainer.style.marginRight = "4%";
cardContainer.style.borderRadius = "1.5em";
mainContainer.insertAdjacentElement("afterbegin", cardContainer);

const averageGuy = document.createElement("img");
averageGuy.src = "https://echostains.files.wordpress.com/2009/05/kris-allen-lovely-looking-pleasant-sounding-lad.jpg";
averageGuy.alt = "averageGuy";
averageGuy.style.border = "0.2em solid white";
averageGuy.style.position = "absolute";
averageGuy.style.borderRadius = "5em";
averageGuy.style.boxShadow = "0em 0.1em 0.5em 0.2em lightgrey";
averageGuy.style.width = "15%";
averageGuy.style.height = "32%";
averageGuy.style.transform = "translate(-50%, -50%)";
cardContainer.insertAdjacentElement("afterbegin", averageGuy);

const titleEl = document.createElement("h2");
titleEl.textContent = "Trent Walton";
titleEl.style.marginTop = "10%";
averageGuy.insertAdjacentElement("afterend", titleEl);

const bioEl = document.createElement("p");
bioEl.textContent = "Founder & ⅓ of @paravelinc";
bioEl.style.color = "grey";
titleEl.insertAdjacentElement("afterend", bioEl);

const cityEl = document.createElement("p");
cityEl.style.color = "grey";
cityEl.textContent = "Austin, TX";
bioEl.insertAdjacentElement("afterend", cityEl);
