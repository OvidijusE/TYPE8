"use strict";

// issaugoti reiksme
localStorage.setItem("manoVardas", "Ovidijus");
localStorage.setItem("loginId", "admin");

// pasiimti reiksmes
const vardas = localStorage.getItem("manoVardas");
console.log("vardas ===", vardas);

const kitaReiksme = localStorage.getItem("manoVardas11");
console.log("kitaReiksme ===", kitaReiksme);
