"use strict";

// slice metodas
// nusitaikom su id replace

const replaceStringElement = document.getElementById("replace");
console.log("replaceStringElement ===", replaceStringElement);

// paimti paskutines sesis simbolius ir irasyti juos i paragrafa einanti po dabartiniu paragrafu

const paskutiniai6Simb = replaceStringElement.textContent.slice(-6);
console.log("paskutiniai6Simb ===", paskutiniai6Simb);

const paraEl = document.createElement("p");
paraEl.textContent = paskutiniai6Simb;
replaceStringElement.after(paraEl);

// is replaceStringEl teksto paimti zodeli cat ir ji ikelti i papildoma h3 el po paskutiniu el.

const zodelisCat = replaceStringElement.textContent.slice(8, 11);
console.log("zodelisCat ===", zodelisCat);

const h3El = document.createElement("h3");
h3El.textContent = zodelisCat;
paraEl.insertAdjacentElement("afterend", h3El);

// substring
const zodelisCatStr = replaceStringElement.textContent.substr(8, 3);
console.log("zodelisCatStr ===", zodelisCatStr);

// replace
replaceStringElement.textContent = replaceStringElement.textContent.replace("street", "building");

// sukurti dar viena paragrafa po paskutiniu el ir jame turi buti visas sakinys didziosiomis raidemis
const newPara = document.createElement("p");
newPara.textContent = replaceStringElement.textContent.toUpperCase();
h3El.insertAdjacentElement("afterend", newPara);
// gauti pirma sakinio raide (ne su slice ir ne su substring ar substr)
const pirmaRaide = replaceStringElement.textContent.charAt(0);
console.log("pirmaRaide ===", pirmaRaide);

// paversti sakini i masyva kuriame kiekvienas elementas yra zodis
const newArray = replaceStringElement.textContent.split(" ");
console.log("newArray ===", newArray);

const pEl2 = document.createElement("p");
pEl2.textContent = newArray.join(" || ");
document.body.append(pEl2);

// visa sakini parasyti naujame paragrafe is priesingos puses dabartinei tvarkai.
const isKitosPusesPara = document.createElement("p");
const isKitosPuses = newArray.reverse();
isKitosPusesPara.textContent = isKitosPuses.textContent;
pEl2.insertAdjacentElement("afterend", isKitosPusesPara);
console.log(isKitosPuses);

// kiekvienas zodi sakinyne pradeti is didziosios raides. ir irasyti i dar viena paragrafa

// gauti mygtuko reiksme ir reiksme ilgi i console
const buttonEl = document.getElementById("inp");
const buttonValue = buttonEl.value;
console.log("buttonValue ===", buttonValue);
const buttonValueLength = buttonEl.value.length;
console.log("buttonValueLength ===", buttonValueLength);

console.log("labas" === buttonValue.trim());
// suzinoti ar reiksme nuemus tarpus is sonu yra lygi 'lAbAs' reiksmei sumazinus raides iki mazuju raidziu
const buttonValueP = buttonEl.value.trim().toLowerCase();
const compareValue = "lAbAs".toLowerCase().trim();
console.log("compareValue ===", compareValue);
console.log("buttonValueP ===", buttonValueP);
