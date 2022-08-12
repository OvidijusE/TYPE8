"use strict";

// 2. Sukurkite HTML'e <h1> tag'ą su id="name" ir tekstu "unknown". Naudodami JavaScript pakeiskite šio elemento tekstą į savo vardą .

// const nameEl = document.getElementById("name");

// nameEl.innerHTML = "Vienas du trys";

// 3. Sukurkite unordered list su trim list item'ais: "Pienas", "Varškė", "Jautiena". Su JavaScript pakeiskite paskutinį list item tekstą į "Sūris".

// const ulEl = document.querySelector("ul li:nth-of-type(3)");

// ulEl.innerHTML = `suris`;

// 4. Nusikopijuokite apačioje esantį kodą ir su JavaScript pasikeiskite antrame paragrafe esantčio <span> tekstą - iš 'red' į 'blue':

// const spanEl = document.querySelector("span:nth-of-type(2)");

// spanEl.innerHTML = `blue`;

// const spanEl = (document.querySelectorAll("span")[1].innerHTML = `blue`);

// 5. Naudodami JavaScript apkeiskite pirmus du sąrašo elementus vietomis. Tačiau, kabliukas - negalima JavaScript įrašyti testo (kitaip tariant hard-codinti). Pirma Jūs turite pasiimt pirmo ir antro sąrašo elemento reikšmes ir jas išsisaugoti į kintamuosius.

let item1 = bmwGroup.innerHTML;
bmwGroup.innerHTML = vwGroup.innerHTML;
vwGroup.innerHTML = item1;

// const olEl = document.querySelector("ol");
// olEl.innerHTML = `${item2} <br> ${item1} <br> ${item3}`;
const olEl = document.querySelector("ol li:nth-child(1)");
const olEl = document.querySelector("ol li:nth-child(2)");

// olEl.innerHTML = `${item2} ${item1}`;
// // olEl.innerHTML = `${item1}`;
