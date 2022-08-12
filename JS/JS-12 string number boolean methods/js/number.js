"use strict";

//  <p id="nr">20, 50, 60, 0, -42, -2, -100</p>
//     <p id="one">500</p>

// paimti reiksme is p#one ir prie jos prideti 100 ir gauti rezultata
const pOne = document.getElementById("one");
const sudetis = parseInt(pOne.textContent) + 100;
// const sudetis = +pOne.textContent + 100;
console.log("sudetis ===", sudetis);

// paimti reiksme is ivesties lauko ir prideti 50
// atsakyma isvesti i nauja el po input
const inputEl = document.getElementById("favorite");
const naujaReiksme = inputEl.value;
console.log("naujaReiksme ===", naujaReiksme);

const naujasP = document.createElement("p");
naujasP.textContent = +naujaReiksme.value + 50;
inputEl.after(naujasP);

// pagaminti masyva is // <p id="nr">20, 50, 60, 0, -42, -2, 100</p> el reiksmiu
const pStringEl = document.getElementById("nr");
const pElStringValue = pStringEl.textContent;
console.log("pElStringValue ===", pElStringValue);
const arrayFromString = pElStringValue.split(", ");
console.log("arrayFromString ===", arrayFromString);

// masyvo reiksmes padvigubinti ir ikelti i nauja paragrafa po esamu
const doubleArr = [];
// sukam cikla per masyva
for (let i = 0; i < arrayFromString.length; i++) {
  const element = arrayFromString[i];
  const doubleSkValue = element * 2;
  doubleArr.push(doubleSkValue);
}
console.log("doubleArr ===", doubleArr);

const pResultEl = document.createElement("p");
pResultEl.textContent = doubleArr.join(", ");
// pResultEl.textContent = { userName: 'james' };
pStringEl.after(pResultEl);

// suapvalinti 8.5471 iki 2 skaiciu po kablelio
const val = 8.5471;
const apvalinta = val.toFixed(2);
console.log("apvalinta ===", apvalinta);
