"use strict";

// 1. susikurti kintamuosiu vardas, salis, megstamiausiasSkaicius, megstamiausiaSavaitesDiena

let vardas = "Ovidijus";
let salis = "Lietuva";
let megstamiausiasSkaicius = "21";
let megstamiausiaSavaitesDiena = "6";

//2. isvedam i konsole visus kintamuosiu atskirai

console.log(vardas);
console.log(salis);
console.log(megstamiausiasSkaicius);
console.log(megstamiausiaSavaitesDiena);

// 3. atspausdinam konsoleje savo megstamiausio skaiciau is dienos daugyba
const daugyba = megstamiausiasSkaicius * megstamiausiaSavaitesDiena;
console.log(daugyba);

// 4. atspausdinam konsoleje savo megstamiausio skaiciau is dienos sudeti
const sudetis = megstamiausiasSkaicius + megstamiausiaSavaitesDiena;
console.log(sudetis);

// 5. atspausdinam konsoleje naudodami kintamuosius "as esu John. noreciau keliausi i Jamaika. mano megstamiausias skaicius yra 777"

let firstName = "John";
let country = "Jamaica";
let favoriteNumber = "777";

const sakinys = ("As esu " + firstName + "," + " noreciau keliauti i " + country + ", mano megstamiausias skaicius yra " + favoriteNumber + ".");
console.log(sakinys);

// render elementas nusitaikom i reneder elemnta 
const paraEl = document.getElementById("render");
console.log(paraEl);
// pakeiciam jo teksta
paraEl.textContent = sakinys;
// paraEl.innerHTML = sakinys;