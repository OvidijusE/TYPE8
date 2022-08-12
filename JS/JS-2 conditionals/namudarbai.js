"use strict";


const userName = prompt("Įveskite prisijungimo vardą");
const password = prompt("Įveskite slaptažodį");



if (userName === "admin" && password === "master") {
    console.log("Sveiki, admin");
 } else if (password === userName + "11") {
        console.log("Neteisingas slaptažodis");
    } else {  
        console.log("Viso gero!"); 
    }

